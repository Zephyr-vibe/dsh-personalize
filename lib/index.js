/**
 * dsh-personalize — host half.
 *
 * Per-host personalization for every session on this machine:
 *  - Custom instructions: a user-written block appended to every agent's
 *    system prompt.
 *  - Local memory: collected (manual entries + optional auto-collection via
 *    agent tools), retained in `{DSH_HOME}/personalize/memory.json`, and
 *    integrated by injecting the current entries into every system prompt.
 *  - Personality: reply-tone presets injected as a prompt section.
 *
 * Persistence is host-owned plain JSON under the DSH home:
 *   {DSH_HOME}/personalize/config.json   — instructions / personality / toggles
 *   {DSH_HOME}/personalize/memory.json   — memory entries
 *
 * The client talks to the plugin through its own fenced HTTP routes
 * (/personalize/api/*), mirroring the dsh-better-sidebar plugin pattern.
 */
import { defineTool } from "@deepseek-ai/dsh-tools";
import z from "schemastery";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import { randomUUID } from "node:crypto";

const name = "dsh-personalize";
const inject = ["webServer", "tools", "systemPrompt"];
/** Empty configuration schema: this plugin owns its own JSON persistence. */
const Config = z.object({});

// -- browser-trust fence (self-contained copy of the shared /api fence) -------
function header(headers, name) {
	const value = headers[name];
	return typeof value === "string" ? value : void 0;
}
function parseAuthority(authority) {
	try {
		return new URL(`http://${authority}`);
	} catch {
		return;
	}
}
function isLoopbackHostname(hostname) {
	if (hostname === "localhost" || hostname === "[::1]") return true;
	const parts = hostname.split(".");
	return parts.length === 4 && parts[0] === "127" && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) <= 255);
}
/** Decide whether one plugin request may reach the plugin routes (loopback-only). */
function isTrustedApiRequest(request) {
	const host = header(request.headers, "host");
	if (host === void 0) return false;
	const hostUrl = parseAuthority(host);
	if (hostUrl === void 0) return false;
	if (!isLoopbackHostname(hostUrl.hostname)) return false;
	if (header(request.headers, "sec-fetch-site") === "cross-site") return false;
	const origin = header(request.headers, "origin");
	if (origin === void 0) return true;
	try {
		return new URL(origin).host === hostUrl.host;
	} catch {
		return false;
	}
}

/** Reply-tone presets (deliberately a distinct set from other products). */
const PERSONALITY_PRESETS = {
	warm: {
		label: "温和贴心",
		description: "温暖、耐心、鼓励式表达",
		instruction: "语气温和友善，多使用鼓励性表达；先肯定用户再给出建议；对不清楚的地方耐心解释，避免生硬或冷冰冰的措辞。"
	},
	direct: {
		label: "高效直接",
		description: "简洁、直接、结论先行",
		instruction: "言简意赅，直接给结论和可执行步骤；避免寒暄、铺垫和冗余；能用列表就不用长段落；不重复用户已知的信息。"
	},
	precise: {
		label: "严谨专业",
		description: "结构化、精确、注重细节",
		instruction: "回答结构化、条理清晰；明确指出假设和不确定性；对关键结论给出依据或验证方式；数字、名称和事实务必准确。"
	},
	playful: {
		label: "风趣幽默",
		description: "轻松、口语化、适度幽默",
		instruction: "语气轻松自然、适度幽默，可适当使用口语化表达和形象比喻，但始终保持信息准确、不跑题。"
	},
	custom: {
		label: "自定义",
		description: "完全按你写的风格来",
		instruction: ""
	}
};

const CONFIG_DEFAULTS = {
	customInstructions: "",
	personality: { preset: "warm", custom: "" },
	memory: { enabled: false, autoGenerate: false }
};

function dshHome() {
	const fromEnv = process.env.DSH_HOME;
	// Mirror the official resolver (@deepseek-ai/dsh-home-paths): a blank
	// override counts as unset, and the result is always an absolute path.
	return fromEnv !== void 0 && fromEnv.trim().length > 0 ? resolve(fromEnv) : join(homedir(), ".dsh");
}
function baseDir() {
	return join(dshHome(), "personalize");
}
function configPath() {
	return join(baseDir(), "config.json");
}
function memoryPath() {
	return join(baseDir(), "memory.json");
}

async function readJson(path, fallback) {
	try {
		return JSON.parse(await readFile(path, "utf8"));
	} catch {
		return fallback;
	}
}
async function writeJsonAtomic(path, value) {
	await mkdir(dirname(path), { recursive: true });
	const tmp = `${path}.${randomUUID()}.tmp`;
	await writeFile(tmp, `${JSON.stringify(value, null, 2)}\n`, "utf8");
	await rename(tmp, path);
}

function normalizeConfig(raw) {
	const source = raw && typeof raw === "object" ? raw : {};
	const config = {
		customInstructions: typeof source.customInstructions === "string" ? source.customInstructions : CONFIG_DEFAULTS.customInstructions,
		personality: {
			...CONFIG_DEFAULTS.personality,
			...(source.personality && typeof source.personality === "object" ? source.personality : {})
		},
		memory: {
			...CONFIG_DEFAULTS.memory,
			...(source.memory && typeof source.memory === "object" ? source.memory : {})
		}
	};
	if (!Object.hasOwn(PERSONALITY_PRESETS, config.personality.preset)) config.personality.preset = "warm";
	if (typeof config.personality.custom !== "string") config.personality.custom = "";
	config.memory.enabled = config.memory.enabled === true;
	config.memory.autoGenerate = config.memory.autoGenerate === true;
	return config;
}

/**
 * In-memory mirror of the memory JSON file. `load()` is a memoized single
 * in-flight promise (concurrent first callers share one read), and every
 * mutation runs through a serial queue so read-check-write sequences (dedup,
 * save) never interleave — a later rename can never overwrite a newer
 * snapshot and two identical concurrent adds cannot both pass the dedup.
 */
class MemoryStore {
	constructor() {
		this.entries = [];
		this.loading = null;
		this.queue = Promise.resolve();
	}
	load() {
		if (this.loading === null) {
			this.loading = readJson(memoryPath(), []).then((raw) => {
				this.entries = Array.isArray(raw) ? raw.filter((entry) => entry && typeof entry.text === "string") : [];
				return this.entries;
			}).catch((error) => {
				this.loading = null;
				throw error;
			});
		}
		return this.loading;
	}
	/** Run one mutation after all previous mutations; propagates its result/error. */
	enqueue(operation) {
		const next = this.queue.then(operation, operation);
		this.queue = next.catch(() => {});
		return next;
	}
	async save() {
		await writeJsonAtomic(memoryPath(), this.entries);
	}
	add(text, source) {
		return this.enqueue(async () => {
			await this.load();
			const trimmed = typeof text === "string" ? text.trim() : "";
			if (trimmed === "") throw new ApiError(400, "bad-request", "memory text must not be empty");
			const existing = this.entries.find((entry) => entry.text === trimmed);
			if (existing !== void 0) return { id: existing.id, created: false, duplicate: true };
			const now = new Date().toISOString();
			const entry = {
				id: randomUUID(),
				text: trimmed,
				source: source === "auto" ? "auto" : "manual",
				createdAt: now,
				updatedAt: now
			};
			this.entries.push(entry);
			await this.save();
			return { id: entry.id, created: true, duplicate: false };
		});
	}
	remove(ids) {
		return this.enqueue(async () => {
			await this.load();
			const wanted = new Set(ids);
			const before = this.entries.length;
			this.entries = this.entries.filter((entry) => !wanted.has(entry.id));
			if (this.entries.length !== before) await this.save();
			return before - this.entries.length;
		});
	}
	clear() {
		return this.enqueue(async () => {
			await this.load();
			const count = this.entries.length;
			if (count > 0) {
				this.entries = [];
				await this.save();
			}
			return count;
		});
	}
}

/** Compose the injected prompt section text from the current config + memory. */
function buildSectionText(getConfig, store) {
	const config = getConfig();
	const parts = [];
	const custom = config.customInstructions.trim();
	if (custom !== "") parts.push(`【用户自定义指令】\n${custom}`);
	const tone = personalityText(config);
	if (tone !== "") parts.push(`【回复风格】\n${tone}`);
	if (config.memory.enabled) {
		const entries = store.entries;
		if (entries.length > 0) {
			parts.push(`【本机长期记忆】以下是你从之前的对话中收集、适用于本机所有会话的长期记忆；可能与当前对话的上下文不完全一致，以当前对话为准：\n${entries.map((entry) => `- ${entry.text}`).join("\n")}`);
		}
		if (config.memory.autoGenerate) {
			parts.push("【记忆维护】本机启用了自动记忆：当对话中出现值得长期记住的事实（用户的稳定偏好、习惯、项目约定、重要背景信息等），调用 memory_create 工具将其写入本机记忆；保存前先调用 memory_list 检查是否已存在，避免重复；不要保存一次性、临时性的细节。");
		}
	}
	return parts.join("\n\n");
}

function personalityText(config) {
	const preset = PERSONALITY_PRESETS[config.personality.preset] ?? PERSONALITY_PRESETS.warm;
	if (config.personality.preset === "custom") {
		const custom = typeof config.personality.custom === "string" ? config.personality.custom.trim() : "";
		return custom;
	}
	return preset.instruction;
}

/**
 * Register the agent-facing memory tools; returns a disposer.
 * Gating: memory_create only exists when automatic collection is allowed
 * (autoGenerate); memory_list / memory_delete exist whenever memory is
 * enabled, so an agent can still inspect and prune injected memories.
 */
function registerMemoryTools(ctx, store, getConfig, autoGenerate) {
	const disposers = [];
	const register = (tool) => disposers.push(ctx.tools.register(tool));
	if (autoGenerate) {
		register(defineTool({
		name: "memory_create",
		description: "把一条值得长期记住的事实保存到本机长期记忆（跨会话有效）。仅在对话中出现稳定的用户偏好、习惯、项目约定或重要背景时使用；保存前先调用 memory_list 检查是否已存在。",
		parameters: {
			text: {
				type: "string",
				required: true,
				description: "要记住的事实，用一句话写清楚。"
			}
		},
		output: {
			schema: {
				type: "object",
				additionalProperties: false,
				properties: {
					id: { type: "string", required: true },
					saved: { type: "boolean", required: true },
					duplicate: { type: "boolean", required: true }
				}
			},
			render: (_args, value) => [{
				type: "text",
				text: value.saved ? `已保存到本机记忆（id: ${value.id}）` : value.duplicate ? "该记忆已存在，未重复保存" : "记忆功能未启用，未保存"
			}]
		},
		execute: async (args) => {
			const config = getConfig();
			if (!config.memory.enabled || !config.memory.autoGenerate) return { id: "", saved: false, duplicate: false };
			const result = await store.add(args.text, "auto");
			return { id: result.id, saved: result.created, duplicate: result.duplicate };
		}
	}));
	}
	register(defineTool({
		name: "memory_list",
		description: "列出本机长期记忆中保存的所有条目（id + 内容 + 来源）。",
		parameters: {},
		output: {
			schema: {
				type: "array",
				items: {
					type: "object",
					additionalProperties: false,
					properties: {
						id: { type: "string", required: true },
						text: { type: "string", required: true },
						source: { type: "string", required: true }
					}
				}
			},
			render: (_args, value) => [{
				type: "text",
				text: value.length === 0 ? "本机记忆为空" : value.map((entry) => `- [${entry.source}] ${entry.text}`).join("\n")
			}]
		},
		execute: async () => {
			await store.load();
			return store.entries.map((entry) => ({ id: entry.id, text: entry.text, source: entry.source }));
		}
	}));
	register(defineTool({
		name: "memory_delete",
		description: "从本机长期记忆中删除一条条目（按 id，可用 memory_list 查看）。",
		parameters: {
			id: {
				type: "string",
				required: true,
				description: "要删除的记忆条目 id。"
			}
		},
		output: {
			schema: {
				type: "object",
				additionalProperties: false,
				properties: {
					deleted: { type: "boolean", required: true }
				}
			},
			render: (_args, value) => [{
				type: "text",
				text: value.deleted ? "已删除该记忆条目" : "未找到该记忆条目"
			}]
		},
		execute: async (args) => {
			const removed = await store.remove([args.id]);
			return { deleted: removed > 0 };
		}
	}));
	return () => {
		for (const dispose of disposers) dispose();
	};
}

// -- HTTP helpers (mirror the better-sidebar route helpers) -------------------
const MAX_BODY_BYTES = 1 << 20;

/** One API failure carrying its wire status (bad-request 400, internal 500, …). */
class ApiError extends Error {
	constructor(status, code, message) {
		super(message);
		this.status = status;
		this.code = code;
	}
}

async function readJsonBody(req) {
	const chunks = [];
	let total = 0;
	for await (const chunk of req) {
		const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk));
		total += buffer.length;
		if (total > MAX_BODY_BYTES) throw new ApiError(400, "bad-request", "request body too large");
		chunks.push(buffer);
	}
	const raw = Buffer.concat(chunks).toString("utf8");
	if (raw.trim() === "") return {};
	try {
		return JSON.parse(raw);
	} catch {
		throw new ApiError(400, "bad-request", "request body is not valid JSON");
	}
}
function writeJson(res, status, body) {
	const payload = JSON.stringify(body);
	res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
	res.end(payload);
}
function writeOk(res, value) {
	writeJson(res, 200, { ok: true, value });
}
function writeError(res, error) {
	const status = error instanceof ApiError ? error.status : 500;
	const code = error instanceof ApiError ? error.code : "internal";
	const message = error instanceof Error ? error.message : String(error);
	writeJson(res, status, { ok: false, error: { code, message } });
}

/** Build the /personalize/api handlers over the store + config face. */
function buildApi(ctx, store, getConfig, setConfig, syncMemoryTools, loaded, enqueueConfigWrite, getLoadError) {
	const view = () => ({
		config: getConfig(),
		configPath: configPath(),
		memoryPath: memoryPath(),
		...(getLoadError() !== null ? { loadError: String(getLoadError()) } : {})
	});
	return {
		"config.get": async () => {
			await loaded;
			return view();
		},
		"config.update": async (payload) => {
			await loaded;
			// Serialized: each patch merges onto the LATEST in-memory config
			// inside the queue, so concurrent updates cannot drop each other.
			return enqueueConfigWrite(async () => {
				const patch = payload && typeof payload.patch === "object" ? payload.patch : {};
				const next = normalizeConfig({
					...getConfig(),
					...patch,
					...(patch.personality && typeof patch.personality === "object" ? { personality: { ...getConfig().personality, ...patch.personality } } : {}),
					...(patch.memory && typeof patch.memory === "object" ? { memory: { ...getConfig().memory, ...patch.memory } } : {})
				});
				await writeJsonAtomic(configPath(), next);
				setConfig(next);
				await syncMemoryTools();
				return view();
			});
		},
		"memory.list": async () => {
			await loaded;
			await store.load();
			return { entries: store.entries, memoryPath: memoryPath() };
		},
		"memory.add": async (payload) => {
			await loaded;
			const result = await store.add(payload && typeof payload.text === "string" ? payload.text : "", "manual");
			return { entry: { id: result.id, created: result.created, duplicate: result.duplicate }, entries: store.entries };
		},
		"memory.delete": async (payload) => {
			await loaded;
			const ids = Array.isArray(payload && payload.ids) ? payload.ids.filter((id) => typeof id === "string") : [];
			const deleted = await store.remove(ids);
			return { deleted, entries: store.entries };
		},
		"memory.clear": async () => {
			await loaded;
			const deleted = await store.clear();
			return { deleted, entries: store.entries };
		}
	};
}

function apply(ctx) {
	const store = new MemoryStore();
	let cachedConfig = CONFIG_DEFAULTS;
	let loadError = null;
	let loadedDone = false;
	let loadedResolve;
	const loaded = new Promise((resolve) => {
		loadedResolve = resolve;
	});
	const getConfig = () => cachedConfig;
	const getLoadError = () => loadError;
	let toolsDisposer = null;
	const syncMemoryTools = async () => {
		if (toolsDisposer !== null) {
			toolsDisposer();
			toolsDisposer = null;
		}
		if (cachedConfig.memory.enabled) {
			toolsDisposer = registerMemoryTools(ctx, store, getConfig, cachedConfig.memory.autoGenerate);
		}
	};
	const loadConfig = async () => {
		try {
			cachedConfig = normalizeConfig(await readJson(configPath(), null));
			await store.load();
			await syncMemoryTools();
			loadError = null;
		} catch (error) {
			ctx.logger.warn(`dsh-personalize: failed to load config: ${String(error)}`);
			loadError = error;
		} finally {
			loadedDone = true;
			loadedResolve();
		}
	};
	// Boot load starts synchronously; API handlers await `loaded` before
	// reading config/memory, so they never observe the CONFIG_DEFAULTS window.
	void loadConfig();
	// Config writes are serialized (read-modify-write against the live
	// in-memory config), so concurrent updates cannot drop each other.
	let configWriteQueue = Promise.resolve();
	const enqueueConfigWrite = (operation) => {
		const next = configWriteQueue.then(operation, operation);
		configWriteQueue = next.catch(() => {});
		return next;
	};
	const systemPrompt = ctx.get("systemPrompt");
	if (systemPrompt !== void 0) {
		ctx.effect(() => systemPrompt.section({
			name: "dsh-personalize",
			order: 9000,
			text: () => {
				// The section is re-evaluated per assembly; before the boot
				// load finishes, emit nothing rather than wrong defaults.
				if (!loadedDone) return "";
				return buildSectionText(getConfig, store);
			}
		}), "dsh-personalize: system prompt section");
	}
	const api = buildApi(ctx, store, getConfig, (next) => {
		cachedConfig = next;
	}, syncMemoryTools, loaded, enqueueConfigWrite, getLoadError);
	ctx.effect(() => ctx.webServer.register({
		kind: "prefix",
		path: "/personalize/api",
		handler: async (req, res) => {
			if (!isTrustedApiRequest(req)) {
				writeJson(res, 403, { ok: false, error: { code: "forbidden", message: "forbidden" } });
				return;
			}
			if (req.method !== "POST") {
				writeJson(res, 405, { ok: false, error: { code: "method-error", message: "method not allowed" } });
				return;
			}
			const pathname = new URL(req.url ?? "/", "http://dsh.internal").pathname;
			const method = pathname.startsWith("/personalize/api/") ? pathname.slice("/personalize/api/".length) : void 0;
			if (method === void 0 || method.includes("/") || method === "") {
				writeJson(res, 404, { ok: false, error: { code: "not-found", message: "unknown personalize API method" } });
				return;
			}
			const handler = api[method];
			if (handler === void 0) {
				writeJson(res, 404, { ok: false, error: { code: "not-found", message: `unknown personalize API method "${method}"` } });
				return;
			}
			try {
				const payload = await readJsonBody(req);
				writeOk(res, await handler(payload));
			} catch (error) {
				writeError(res, error);
			}
		}
	}), "dsh-personalize: /personalize/api routes");
	ctx.effect(() => () => {
		if (toolsDisposer !== null) {
			toolsDisposer();
			toolsDisposer = null;
		}
	}, "dsh-personalize: tools teardown");
}

export { Config, apply, inject, name };
