window.__ModuleLoader__.load({
	id: "dsh-personalize",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		//#region css
		const css = ".pErs_root{flex-direction:column;gap:14px;display:flex}.pErs_card{box-sizing:border-box;flex-direction:column;gap:8px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;padding:14px;display:flex}.pErs_cardTitle{color:var(--dsw-alias-label-primary);font-size:14px;font-weight:500;line-height:20px}.pErs_cardDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.pErs_textarea{box-sizing:border-box;width:100%;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:8px 10px;font-family:inherit;font-size:13px;line-height:20px;resize:vertical}.pErs_textarea:focus{outline:none;border-color:var(--dsw-accent-strong)}.pErs_cardFooter{box-sizing:border-box;align-items:center;gap:10px;min-height:28px;display:flex}.pErs_saved{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.pErs_error{color:var(--dsw-alias-state-error-primary);font-size:12px;line-height:18px}.pErs_loading{color:var(--dsw-alias-label-tertiary);padding:12px 0;font-size:13px;line-height:18px}.pErs_toggleRow{box-sizing:border-box;cursor:pointer;align-items:center;gap:10px;padding:4px 0;display:flex}.pErs_toggleRow input{cursor:pointer;accent-color:var(--dsw-accent-strong);width:14px;height:14px;flex:none}.pErs_toggleText{flex-direction:column;min-width:0;display:flex}.pErs_toggleLabel{color:var(--dsw-alias-label-primary);font-size:13px;line-height:18px}.pErs_toggleDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:17px}.pErs_path{color:var(--dsw-alias-label-tertiary);font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:11px;line-height:16px;word-break:break-all}.pErs_memList{flex-direction:column;gap:4px;max-height:min(320px,50vh);display:flex;overflow:auto}.pErs_memRow{box-sizing:border-box;align-items:flex-start;gap:8px;border-radius:8px;padding:6px 8px;display:flex}.pErs_memRow:hover{background:var(--dsw-alias-interactive-bg-hover)}.pErs_memText{color:var(--dsw-alias-label-primary);flex:1;min-width:0;font-size:13px;line-height:19px;word-break:break-word}.pErs_memMeta{color:var(--dsw-alias-label-tertiary);flex:none;align-items:center;gap:6px;font-size:11px;line-height:16px;display:flex}.pErs_badge{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-interactive-bg-hover);border-radius:5px;padding:0 6px;font-size:11px;line-height:16px}.pErs_memDel{cursor:pointer;color:var(--dsw-alias-label-tertiary);background:0 0;border:none;border-radius:50%;width:18px;height:18px;justify-content:center;align-items:center;padding:0;font-size:14px;line-height:1;display:inline-flex}.pErs_memDel:hover{color:var(--dsw-alias-state-error-primary);background:var(--dsw-alias-interactive-bg-hover)}.pErs_addRow{box-sizing:border-box;align-items:center;gap:8px;display:flex}.pErs_addInput{box-sizing:border-box;flex:1;min-width:0;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:8px;padding:6px 10px;font-family:inherit;font-size:13px;line-height:20px}.pErs_addInput:focus{outline:none;border-color:var(--dsw-accent-strong)}.pErs_empty{color:var(--dsw-alias-label-tertiary);padding:8px 2px;font-size:12px;line-height:18px}.pErs_presets{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;display:grid}.pErs_preset{box-sizing:border-box;cursor:pointer;text-align:left;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:10px;flex-direction:column;gap:2px;padding:10px 12px;font-family:inherit;display:flex}.pErs_preset:hover{border-color:var(--dsw-alias-border-l3)}.pErs_presetActive{border-color:var(--dsw-accent-strong)}.pErs_presetName{font-size:13px;font-weight:500;line-height:19px}.pErs_presetDesc{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:17px}";
		const tagId = "dsh-personalize/PersonalizeSection.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-personalize";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		const pcss = {
			"root": "pErs_root",
			"card": "pErs_card",
			"cardTitle": "pErs_cardTitle",
			"cardDesc": "pErs_cardDesc",
			"textarea": "pErs_textarea",
			"cardFooter": "pErs_cardFooter",
			"saved": "pErs_saved",
			"error": "pErs_error",
			"loading": "pErs_loading",
			"toggleRow": "pErs_toggleRow",
			"toggleText": "pErs_toggleText",
			"toggleLabel": "pErs_toggleLabel",
			"toggleDesc": "pErs_toggleDesc",
			"path": "pErs_path",
			"memList": "pErs_memList",
			"memRow": "pErs_memRow",
			"memText": "pErs_memText",
			"memMeta": "pErs_memMeta",
			"badge": "pErs_badge",
			"memDel": "pErs_memDel",
			"addRow": "pErs_addRow",
			"addInput": "pErs_addInput",
			"empty": "pErs_empty",
			"presets": "pErs_presets",
			"preset": "pErs_preset",
			"presetActive": "pErs_presetActive",
			"presetName": "pErs_presetName",
			"presetDesc": "pErs_presetDesc"
		};
		//#endregion
		//#region locales
		const zh = {
			"nav": "个性化",
			"loading": "加载中…",
			"load.failed": "加载失败",
			"title.instructions": "自定义指令",
			"desc.instructions": "向 Harness 提供适用于本机所有对话的额外说明与上下文（会话开始时会注入到系统提示中）。",
			"placeholder.instructions": "例如：请始终使用中文回复；写代码时优先 TypeScript；未经我明确要求不要修改我的文件；遇到不确定的问题先询问再行动…",
			"title.memory": "记忆",
			"desc.memory": "设置本机如何收集、保留与整合本地记忆。",
			"memory.enabled": "启用本地记忆",
			"memory.enabledDesc": "把已保存的记忆注入每个会话的上下文，并允许在记忆管理页维护。",
			"memory.auto": "允许自动生成本地记忆",
			"memory.autoDesc": "允许智能体在对话中发现值得长期记住的事实（偏好、习惯、项目约定等）并自动保存。",
			"memory.maxEntries": "记忆条数上限",
			"memory.maxEntriesDesc": "记忆达到该数量后停止新增（1-1000，默认 50）。",
			"memory.path": "记忆文件位置",
			"memory.entries": "条记忆",
			"memory.addPlaceholder": "手动添加一条长期记忆…",
			"memory.add": "添加",
			"memory.empty": "暂无记忆",
			"memory.clear": "清空记忆",
			"memory.clearConfirm": "再点一次确认清空全部记忆",
			"memory.deleteTitle": "删除记忆",
			"memory.deleteConfirm": "确定删除这条记忆？删除后无法恢复。",
			"memory.edit": "编辑记忆",
			"memory.editDiscard": "当前编辑尚未保存，确定放弃修改并编辑其他条目？",
			"delete": "删除",
			"memory.sourceManual": "手动",
			"memory.sourceAuto": "自动",
			"title.personality": "个性 · 回复语气",
			"desc.personality": "选择智能体回复时的整体语气风格（同样会注入每个会话）。",
			"personality.customPlaceholder": "描述你想要的回复风格，例如：像朋友一样聊天，简短但贴心…",
			"preset.warm": "温和贴心",
			"preset.warmDesc": "温暖、耐心、鼓励式表达",
			"preset.direct": "高效直接",
			"preset.directDesc": "简洁、直接、结论先行",
			"preset.precise": "严谨专业",
			"preset.preciseDesc": "结构化、精确、注重细节",
			"preset.playful": "风趣幽默",
			"preset.playfulDesc": "轻松、口语化、适度幽默",
			"preset.custom": "自定义",
			"preset.customDesc": "完全按你写的风格来",
			"save": "保存",
			"saved": "已保存",
			"cancel": "取消",
			"retry": "重试",
			"error.badRequest": "请求无效，请检查输入",
			"error.memoryTooLong": "记忆内容过长（最多 1000 字）",
			"error.memoryEmpty": "记忆内容不能为空",
			"error.memoryNotFound": "该记忆条目不存在",
			"error.memoryDuplicate": "相同内容的记忆已存在",
			"error.memoryIdRequired": "缺少记忆条目 id",
			"error.memoryIdInvalid": "记忆条目 id 格式无效",
			"error.memoryTextInvalid": "记忆内容格式无效",
			"error.memoryIdsRequired": "请提供至少一条记忆 id",
			"error.memoryLimit": "记忆已达上限，无法继续添加（上限可在下方调整）",
			"error.memoryCorrupt": "记忆文件已损坏，已备份并暂停写入，请重启后检查",
			"error.notFound": "请求的方法不存在",
			"error.instructionsTooLong": "自定义指令过长（最多 8000 字）",
			"error.personalityTooLong": "自定义语气描述过长（最多 2000 字）",
			"error.forbidden": "无权访问此功能",
			"error.timeout": "请求超时，请重试",
			"error.internal": "服务内部错误，请稍后重试"
		};
		const en = {
			"nav": "Personalize",
			"loading": "Loading…",
			"load.failed": "Failed to load",
			"title.instructions": "Custom instructions",
			"desc.instructions": "Extra instructions and context applied to every conversation on this machine (injected into the system prompt at session start).",
			"placeholder.instructions": "e.g. Always reply in Chinese; prefer TypeScript for code; never modify my files without asking; ask before acting on unclear requests…",
			"title.memory": "Memory",
			"desc.memory": "How local memory is collected, retained and integrated on this machine.",
			"memory.enabled": "Enable local memory",
			"memory.enabledDesc": "Inject saved memory into every conversation's context and keep it manageable here.",
			"memory.auto": "Allow automatic memory collection",
			"memory.autoDesc": "Agents may save durable facts from conversations (preferences, habits, project conventions…) automatically.",
			"memory.maxEntries": "Max memory entries",
			"memory.maxEntriesDesc": "Stop adding entries once this count is reached (1-1000, default 50).",
			"memory.path": "Memory file",
			"memory.entries": "entries",
			"memory.addPlaceholder": "Add a long-term memory entry…",
			"memory.add": "Add",
			"memory.empty": "No memory yet",
			"memory.clear": "Clear all",
			"memory.clearConfirm": "Click again to clear all memory",
			"memory.deleteTitle": "Delete memory",
			"memory.deleteConfirm": "Delete this memory entry? This cannot be undone.",
			"memory.edit": "Edit memory",
			"memory.editDiscard": "Discard unsaved changes and edit another entry?",
			"delete": "Delete",
			"memory.sourceManual": "manual",
			"memory.sourceAuto": "auto",
			"title.personality": "Personality · reply tone",
			"desc.personality": "The overall tone agents reply with (also injected into every session).",
			"personality.customPlaceholder": "Describe the tone you want, e.g. chat like a friend — short but warm…",
			"preset.warm": "Warm",
			"preset.warmDesc": "Warm, patient, encouraging",
			"preset.direct": "Direct",
			"preset.directDesc": "Concise, to the point, conclusions first",
			"preset.precise": "Precise",
			"preset.preciseDesc": "Structured, exact, detail-oriented",
			"preset.playful": "Playful",
			"preset.playfulDesc": "Relaxed, colloquial, lightly humorous",
			"preset.custom": "Custom",
			"preset.customDesc": "Exactly the tone you write",
			"save": "Save",
			"saved": "Saved",
			"cancel": "Cancel",
			"retry": "Retry",
			"error.badRequest": "Invalid request — please check your input",
			"error.memoryTooLong": "Memory entry is too long (max 1000 characters)",
			"error.memoryEmpty": "Memory text must not be empty",
			"error.memoryNotFound": "Memory entry not found",
			"error.memoryDuplicate": "An identical memory entry already exists",
			"error.memoryIdRequired": "Memory entry id is required",
			"error.memoryIdInvalid": "Memory entry id is invalid",
			"error.memoryTextInvalid": "Memory text is invalid",
			"error.memoryIdsRequired": "Provide at least one memory id",
			"error.memoryLimit": "Memory limit reached — adjust the cap below to add more",
			"error.memoryCorrupt": "Memory file is corrupt — backed up and writes paused, please restart and check",
			"error.notFound": "Requested method does not exist",
			"error.instructionsTooLong": "Custom instructions are too long (max 8000 characters)",
			"error.personalityTooLong": "Custom tone description is too long (max 2000 characters)",
			"error.forbidden": "Access to this feature is forbidden",
			"error.timeout": "Request timed out — please try again",
			"error.internal": "Internal error — please try again later"
		};
		//#endregion
		const NS = "personalize";
		const inject = ["slots", "locale"];
		/** One POST against the plugin's fenced JSON API. */
		const API_TIMEOUT_MS = 15000;
		async function api(method, payload) {
			const controller = new AbortController();
			const timer = window.setTimeout(() => controller.abort(), API_TIMEOUT_MS);
			try {
				const response = await fetch(`/personalize/api/${method}`, {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(payload ?? {}),
					signal: controller.signal
				});
				let body;
				try {
					body = await response.json();
				} catch {
					throw new Error(`personalize API ${method} returned a non-JSON response (${response.status})`);
				}
				if (body === null || typeof body !== "object" || body.ok !== true) {
					const failure = new Error((body && body.error && body.error.message) || `personalize API ${method} failed (${response.status})`);
					if (body && body.error && typeof body.error.code === "string") failure.code = body.error.code;
					throw failure;
				}
				return body.value;
			} catch (reason) {
				if (reason && reason.name === "AbortError") {
					const failure = new Error("personalize API request timed out");
					failure.code = "timeout";
					throw failure;
				}
				throw reason;
			} finally {
				window.clearTimeout(timer);
			}
		}
		/** Map stable host error codes to localized copy; unknown codes fall back to the raw message. */
		const ERROR_KEYS = {
			"bad-request": "error.badRequest",
			"memory-too-long": "error.memoryTooLong",
			"memory-empty": "error.memoryEmpty",
			"memory-not-found": "error.memoryNotFound",
			"memory-duplicate": "error.memoryDuplicate",
			"memory-id-required": "error.memoryIdRequired",
			"memory-id-invalid": "error.memoryIdInvalid",
			"memory-text-invalid": "error.memoryTextInvalid",
			"memory-ids-required": "error.memoryIdsRequired",
			"memory-limit": "error.memoryLimit",
			"memory-corrupt": "error.memoryCorrupt",
			"not-found": "error.notFound",
			"instructions-too-long": "error.instructionsTooLong",
			"personality-too-long": "error.personalityTooLong",
			"forbidden": "error.forbidden",
			"timeout": "error.timeout",
			"internal": "error.internal"
		};
		function errorMessage(t, reason) {
			const code = reason && reason.code;
			if (typeof code === "string" && Object.hasOwn(ERROR_KEYS, code)) return t(ERROR_KEYS[code]);
			return reason instanceof Error ? reason.message : String(reason);
		}
		/** The reply-tone presets (display metadata; the instruction text lives host-side). */
		const PRESET_IDS = ["warm", "direct", "precise", "playful", "custom"];
		function presetLabel(t, id) {
			return t(`preset.${id}`);
		}
		function presetDesc(t, id) {
			return t(`preset.${id}Desc`);
		}
		/**
		* Settings section: custom instructions, local memory management, and
		* reply-tone presets, all persisted host-side under the DSH home.
		*/
		function PersonalizeSection({ t }) {
			const [config, setConfig] = (0, react.useState)(null);
			const [paths, setPaths] = (0, react.useState)(null);
			const [memory, setMemory] = (0, react.useState)([]);
			// M2/M10: entry cap + count surfaced by the host for the "N / MAX" hint.
			const [memoryMax, setMemoryMax] = (0, react.useState)(50);
			// Configurable entry cap draft; committed on Enter/blur via config.update.
			const [maxEntriesDraft, setMaxEntriesDraft] = (0, react.useState)("50");
			// S4: in-flight memory operations disable the action buttons.
			const [memoryBusy, setMemoryBusy] = (0, react.useState)(false);
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)(null);
			const [instructionsDraft, setInstructionsDraft] = (0, react.useState)("");
			const [personalityCustomDraft, setPersonalityCustomDraft] = (0, react.useState)("");
			const [saving, setSaving] = (0, react.useState)(false);
			const [savedFlash, setSavedFlash] = (0, react.useState)(null);
			const [addText, setAddText] = (0, react.useState)("");
			const [confirmClear, setConfirmClear] = (0, react.useState)(false);
			const [pendingDelete, setPendingDelete] = (0, react.useState)(null);
			const [editingId, setEditingId] = (0, react.useState)(null);
			const [editDraft, setEditDraft] = (0, react.useState)("");
			const [reloadKey, setReloadKey] = (0, react.useState)(0);
			const clearTimer = (0, react.useRef)(null);
			const flashTimer = (0, react.useRef)(null);
			/** Flash a per-card "saved" hint that fades out on its own. */
			const flash = (0, react.useCallback)((where) => {
				if (flashTimer.current !== null) window.clearTimeout(flashTimer.current);
				setSavedFlash(where);
				flashTimer.current = window.setTimeout(() => {
					setSavedFlash(null);
					flashTimer.current = null;
				}, 2500);
			}, []);
			(0, react.useEffect)(() => {
				let cancelled = false;
				setError(null);
				(async () => {
					try {
						const view = await api("config.get");
						if (cancelled) return;
						setConfig(view.config);
						setPaths({ configPath: view.configPath, memoryPath: view.memoryPath });
						setInstructionsDraft(view.config.customInstructions ?? "");
						setPersonalityCustomDraft(view.config.personality?.custom ?? "");
						if (view.loadError !== void 0) setError(String(view.loadError));
						const list = await api("memory.list");
						if (cancelled) return;
						setMemory(list.entries);
						if (typeof list.memoryMax === "number") setMemoryMax(list.memoryMax);
						setMaxEntriesDraft(String(view.config.memory?.maxEntries ?? list.memoryMax ?? 50));
					} catch (reason) {
						if (!cancelled) setError(errorMessage(t, reason));
					} finally {
						if (!cancelled) setLoading(false);
					}
				})();
				return () => {
					cancelled = true;
					if (clearTimer.current !== null) {
						window.clearTimeout(clearTimer.current);
						clearTimer.current = null;
					}
					if (flashTimer.current !== null) {
						window.clearTimeout(flashTimer.current);
						flashTimer.current = null;
					}
				};
			}, [reloadKey]);
			const saveConfig = (0, react.useCallback)(async (patch, extra) => {
				setSaving(true);
				setError(null);
				try {
					const view = await api("config.update", { patch });
					setConfig(view.config);
					if (view.configPath !== void 0) setPaths({ configPath: view.configPath, memoryPath: view.memoryPath });
					if (extra !== void 0) await extra();
				} catch (reason) {
					setError(errorMessage(t, reason));
				} finally {
					setSaving(false);
				}
			}, []);
			const saveInstructions = () => saveConfig({ customInstructions: instructionsDraft }, () => flash("instructions"));
			const savePersonalityCustom = () => saveConfig({ personality: { custom: personalityCustomDraft } }, () => flash("personality"));
			// Configurable memory entry cap; clamp to [1, 1000] before saving.
			const saveMaxEntries = (raw) => {
				const parsed = Number.parseInt(String(raw), 10);
				const next = Number.isFinite(parsed) ? Math.min(1000, Math.max(1, parsed)) : 50;
				setMaxEntriesDraft(String(next));
				if (next !== (config.memory?.maxEntries ?? 50)) void saveConfig({ memory: { maxEntries: next } }, () => {
					// Keep the "N / MAX" counter in sync immediately after saving.
					setMemoryMax(next);
					flash("maxEntries");
				});
			};
			const selectPreset = (preset) => {
				// L7: ignore clicks while a config write is in flight.
				if (saving) return;
				if (preset === (config.personality?.preset ?? "warm")) return;
				void saveConfig({ personality: { preset } }, () => flash("personality"));
			};
			const addMemory = async () => {
				const text = addText.trim();
				if (text === "") return;
				setMemoryBusy(true);
				try {
					const result = await api("memory.add", { text });
					setAddText("");
					setMemory(result.entries);
					setError(null);
					flash("memory");
				} catch (reason) {
					setError(errorMessage(t, reason));
				} finally {
					setMemoryBusy(false);
				}
			};
			const deleteMemory = async (id) => {
				setMemoryBusy(true);
				try {
					const result = await api("memory.delete", { ids: [id] });
					setMemory(result.entries);
					setPendingDelete(null);
					flash("memory");
				} catch (reason) {
					setPendingDelete(null);
					setError(errorMessage(t, reason));
				} finally {
					setMemoryBusy(false);
				}
			};
			const requestDeleteMemory = (entry) => {
				setError(null);
				setPendingDelete(entry);
			};
			const confirmDeleteMemory = () => {
				if (pendingDelete !== null) void deleteMemory(pendingDelete.id);
			};
			const startEditMemory = (entry) => {
				// L5: switching to another entry while a draft has unsaved changes —
				// confirm before discarding the draft.
				if (editingId !== null && editingId !== entry.id && editDraft !== "") {
					const current = memory.find((e) => e.id === editingId);
					if (current !== void 0 && editDraft !== current.text && !window.confirm(t("memory.editDiscard"))) {
						return;
					}
				}
				setError(null);
				setEditingId(entry.id);
				setEditDraft(entry.text);
			};
			const cancelEditMemory = () => {
				setEditingId(null);
				setEditDraft("");
			};
			const saveEditMemory = async (id) => {
				// L6: guard empty drafts; the save button is also disabled for them.
				const text = editDraft.trim();
				if (text === "") return;
				setMemoryBusy(true);
				try {
					const result = await api("memory.update", { id, text });
					setMemory(result.entries);
					setEditingId(null);
					setEditDraft("");
					flash("memory");
				} catch (reason) {
					setError(errorMessage(t, reason));
				} finally {
					setMemoryBusy(false);
				}
			};
			const clearMemory = async () => {
				if (!confirmClear) {
					setConfirmClear(true);
					if (clearTimer.current !== null) window.clearTimeout(clearTimer.current);
					clearTimer.current = window.setTimeout(() => {
						setConfirmClear(false);
						clearTimer.current = null;
					}, 3000);
					return;
				}
				setMemoryBusy(true);
				try {
					const result = await api("memory.clear", {});
					setMemory(result.entries);
					setConfirmClear(false);
					flash("memory");
				} catch (reason) {
					setConfirmClear(false);
					setError(errorMessage(t, reason));
				} finally {
					setMemoryBusy(false);
				}
			};
			if (loading) return (0, react_jsx_runtime.jsx)("div", { className: pcss.loading, children: t("loading") });
			if (config === null) return (0, react_jsx_runtime.jsxs)("div", {
				className: pcss.error,
				role: "alert",
				children: [error ?? t("load.failed"), (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
					variant: "outline",
					onClick: () => setReloadKey((key) => key + 1),
					children: t("retry")
				})]
			});
			const memoryEnabled = config.memory?.enabled === true;
			const autoGenerate = config.memory?.autoGenerate === true;
			const preset = config.personality?.preset ?? "warm";
			return (0, react_jsx_runtime.jsxs)("div", {
				className: pcss.root,
				children: [
					error !== null && (0, react_jsx_runtime.jsx)("div", {
						className: pcss.error,
						role: "alert",
						children: error
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: pcss.card,
						children: [
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardTitle, children: t("title.instructions") }),
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardDesc, children: t("desc.instructions") }),
							(0, react_jsx_runtime.jsx)("textarea", {
								className: pcss.textarea,
								value: instructionsDraft,
								placeholder: t("placeholder.instructions"),
								rows: 6,
								onChange: (e) => setInstructionsDraft(e.target.value)
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								className: pcss.cardFooter,
								children: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									disabled: saving,
									onClick: saveInstructions,
									children: t("save")
								}), savedFlash === "instructions" && (0, react_jsx_runtime.jsx)("span", { className: pcss.saved, children: t("saved") })]
							})
						]
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: pcss.card,
						children: [
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardTitle, children: t("title.memory") }),
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardDesc, children: t("desc.memory") }),
							(0, react_jsx_runtime.jsxs)("label", {
								className: pcss.toggleRow,
								children: [(0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: memoryEnabled,
									onChange: (e) => void saveConfig({ memory: { enabled: e.target.checked } })
								}), (0, react_jsx_runtime.jsxs)("span", {
									className: pcss.toggleText,
									children: [(0, react_jsx_runtime.jsx)("span", { className: pcss.toggleLabel, children: t("memory.enabled") }), (0, react_jsx_runtime.jsx)("span", { className: pcss.toggleDesc, children: t("memory.enabledDesc") })]
								})]
							}),
							(0, react_jsx_runtime.jsxs)("label", {
								className: pcss.toggleRow,
								children: [(0, react_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: autoGenerate,
									disabled: !memoryEnabled,
									onChange: (e) => void saveConfig({ memory: { autoGenerate: e.target.checked } })
								}), (0, react_jsx_runtime.jsxs)("span", {
									className: pcss.toggleText,
									children: [(0, react_jsx_runtime.jsx)("span", { className: pcss.toggleLabel, children: t("memory.auto") }), (0, react_jsx_runtime.jsx)("span", { className: pcss.toggleDesc, children: t("memory.autoDesc") })]
								})]
							}),
							paths !== null && (0, react_jsx_runtime.jsx)("div", {
								className: pcss.path,
								children: `${t("memory.path")}: ${paths.memoryPath}`
							}),
							// M2/M10: show "N / MAX entries" so the cap is visible.
							(0, react_jsx_runtime.jsx)("div", {
								className: pcss.path,
								children: `${memory.length} / ${memoryMax} ${t("memory.entries")}`
							}),
							// Configurable entry cap: one compact row — label, hint,
							// text input (centered) and 保存. NOT toggleRow (its CSS
							// forces 14×14px checkbox sizing on every inner input).
							(0, react_jsx_runtime.jsxs)("div", {
								style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", padding: "4px 0" },
								children: [(0, react_jsx_runtime.jsx)("span", { className: pcss.toggleLabel, children: t("memory.maxEntries") }), (0, react_jsx_runtime.jsx)("span", { className: pcss.toggleDesc, children: t("memory.maxEntriesDesc") }), (0, react_jsx_runtime.jsx)("input", {
									className: pcss.addInput,
									type: "text",
									inputMode: "numeric",
									style: { flex: "none", width: 56, textAlign: "center" },
									value: maxEntriesDraft,
									disabled: !memoryEnabled || saving,
									onChange: (e) => setMaxEntriesDraft(e.target.value),
									onKeyDown: (e) => {
										if (e.key === "Enter") {
											e.currentTarget.blur();
											saveMaxEntries(e.currentTarget.value);
										}
									}
								}), (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									disabled: !memoryEnabled || saving,
									onClick: () => saveMaxEntries(maxEntriesDraft),
									children: t("save")
								})]
							}),
							memory.length === 0 ? (0, react_jsx_runtime.jsx)("div", { className: pcss.empty, children: t("memory.empty") }) : (0, react_jsx_runtime.jsx)("div", {
								className: pcss.memList,
								children: memory.map((entry) => {
									const isEditing = editingId === entry.id;
									return (0, react_jsx_runtime.jsxs)("div", {
										className: pcss.memRow,
										children: [
											isEditing ? (0, react_jsx_runtime.jsx)("input", {
												className: pcss.addInput,
												type: "text",
												value: editDraft,
												onKeyDown: (e) => {
													if (e.key === "Enter") void saveEditMemory(entry.id);
													if (e.key === "Escape") cancelEditMemory();
												},
												onChange: (e) => setEditDraft(e.target.value)
											}) : (0, react_jsx_runtime.jsx)("span", { className: pcss.memText, children: entry.text }),
											(0, react_jsx_runtime.jsxs)("span", {
												className: pcss.memMeta,
												children: [(0, react_jsx_runtime.jsx)("span", {
													className: pcss.badge,
													children: entry.source === "auto" ? t("memory.sourceAuto") : t("memory.sourceManual")
												}), isEditing ? (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
													children: [(0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: pcss.memDel,
														title: t("save"),
														disabled: editDraft.trim() === "" || memoryBusy,
														onClick: () => void saveEditMemory(entry.id),
														children: "✓"
													}), (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: pcss.memDel,
														title: t("cancel"),
														onClick: cancelEditMemory,
														children: "✕"
													})]
												}) : (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
													children: [(0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: pcss.memDel,
														"aria-label": t("memory.edit"),
														title: t("memory.edit"),
														onClick: () => startEditMemory(entry),
														children: "✎"
													}), (0, react_jsx_runtime.jsx)("button", {
														type: "button",
														className: pcss.memDel,
														"aria-label": t("memory.deleteTitle"),
														title: t("memory.deleteTitle"),
														onClick: () => requestDeleteMemory(entry),
														children: "×"
													})]
												})]
											})
										]
									}, entry.id);
								})
							}),
							(0, react_jsx_runtime.jsxs)("div", {
								className: pcss.addRow,
								children: [(0, react_jsx_runtime.jsx)("input", {
									className: pcss.addInput,
									type: "text",
									value: addText,
									placeholder: t("memory.addPlaceholder"),
									onKeyDown: (e) => {
										if (e.key === "Enter") void addMemory();
									},
									onChange: (e) => setAddText(e.target.value)
								}), (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									disabled: addText.trim() === "" || memoryBusy,
									onClick: () => void addMemory(),
									children: t("memory.add")
								}), memory.length > 0 && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									disabled: memoryBusy,
									onClick: () => void clearMemory(),
									children: confirmClear ? t("memory.clearConfirm") : t("memory.clear")
								}), savedFlash === "memory" && (0, react_jsx_runtime.jsx)("span", { className: pcss.saved, children: t("saved") })]
							})
						]
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						className: pcss.card,
						children: [
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardTitle, children: t("title.personality") }),
							(0, react_jsx_runtime.jsx)("div", { className: pcss.cardDesc, children: t("desc.personality") }),
							(0, react_jsx_runtime.jsx)("div", {
								className: pcss.presets,
								children: PRESET_IDS.map((id) => (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: pcss.preset + (preset === id ? ` ${pcss.presetActive}` : ""),
									"aria-pressed": preset === id,
									disabled: saving,
									onClick: () => selectPreset(id),
									children: [(0, react_jsx_runtime.jsx)("span", { className: pcss.presetName, children: presetLabel(t, id) }), (0, react_jsx_runtime.jsx)("span", { className: pcss.presetDesc, children: presetDesc(t, id) })]
								}, id))
							}),
							preset === "custom" && (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
								children: [(0, react_jsx_runtime.jsx)("textarea", {
									className: pcss.textarea,
									value: personalityCustomDraft,
									placeholder: t("personality.customPlaceholder"),
									rows: 3,
									onChange: (e) => setPersonalityCustomDraft(e.target.value)
								}), (0, react_jsx_runtime.jsxs)("div", {
									className: pcss.cardFooter,
									children: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
										variant: "outline",
										disabled: saving,
										onClick: savePersonalityCustom,
										children: t("save")
									}), savedFlash === "personality" && (0, react_jsx_runtime.jsx)("span", { className: pcss.saved, children: t("saved") })]
								})]
							})
						]
					}),
					(0, react_jsx_runtime.jsxs)(_deepseek_ai_dsh_client_ui_primitives.Modal, {
						open: pendingDelete !== null,
						onClose: () => setPendingDelete(null),
						closeLabel: t("cancel"),
						title: t("memory.deleteTitle"),
						description: t("memory.deleteConfirm"),
						footer: (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							onClick: () => setPendingDelete(null),
							children: t("cancel")
						}), (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
							variant: "outline",
							disabled: memoryBusy,
							onClick: confirmDeleteMemory,
							children: t("delete")
						})] })
					})
				]
			});
		}
		/** Register the settings section once its declaration is on the ledger. */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "personalize: dictionaries");
			const t = ctx.locale.bind(NS);
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "personalize",
				order: 210,
				label: () => t("nav"),
				locale: NS
			}, PersonalizeSection));
		}
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
