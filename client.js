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
			"memory.path": "记忆文件位置",
			"memory.addPlaceholder": "手动添加一条长期记忆…",
			"memory.add": "添加",
			"memory.empty": "暂无记忆",
			"memory.clear": "清空记忆",
			"memory.clearConfirm": "再点一次确认清空全部记忆",
			"memory.deleteTitle": "删除记忆",
			"memory.deleteConfirm": "确定删除这条记忆？删除后无法恢复。",
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
			"cancel": "取消"
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
			"memory.path": "Memory file",
			"memory.addPlaceholder": "Add a long-term memory entry…",
			"memory.add": "Add",
			"memory.empty": "No memory yet",
			"memory.clear": "Clear all",
			"memory.clearConfirm": "Click again to clear all memory",
			"memory.deleteTitle": "Delete memory",
			"memory.deleteConfirm": "Delete this memory entry? This cannot be undone.",
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
			"cancel": "Cancel"
		};
		//#endregion
		const NS = "personalize";
		const inject = ["slots", "locale"];
		/** One POST against the plugin's fenced JSON API. */
		async function api(method, payload) {
			const response = await fetch(`/personalize/api/${method}`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(payload ?? {})
			});
			let body;
			try {
				body = await response.json();
			} catch {
				throw new Error(`personalize API ${method} returned a non-JSON response (${response.status})`);
			}
			if (body === null || typeof body !== "object" || body.ok !== true) {
				throw new Error((body && body.error && body.error.message) || `personalize API ${method} failed (${response.status})`);
			}
			return body.value;
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
			const [loading, setLoading] = (0, react.useState)(true);
			const [error, setError] = (0, react.useState)(null);
			const [instructionsDraft, setInstructionsDraft] = (0, react.useState)("");
			const [personalityCustomDraft, setPersonalityCustomDraft] = (0, react.useState)("");
			const [saving, setSaving] = (0, react.useState)(false);
			const [savedAt, setSavedAt] = (0, react.useState)(null);
			const [addText, setAddText] = (0, react.useState)("");
			const [confirmClear, setConfirmClear] = (0, react.useState)(false);
			const [pendingDelete, setPendingDelete] = (0, react.useState)(null);
			const clearTimer = (0, react.useRef)(null);
			(0, react.useEffect)(() => {
				let cancelled = false;
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
					} catch (reason) {
						if (!cancelled) setError(reason instanceof Error ? reason.message : String(reason));
					} finally {
						if (!cancelled) setLoading(false);
					}
				})();
				return () => {
					cancelled = true;
					if (clearTimer.current !== null) window.clearTimeout(clearTimer.current);
				};
			}, []);
			const saveConfig = (0, react.useCallback)(async (patch, extra) => {
				setSaving(true);
				setError(null);
				try {
					const view = await api("config.update", { patch });
					setConfig(view.config);
					if (view.configPath !== void 0) setPaths({ configPath: view.configPath, memoryPath: view.memoryPath });
					if (extra !== void 0) await extra();
					setSavedAt(Date.now());
				} catch (reason) {
					setError(reason instanceof Error ? reason.message : String(reason));
				} finally {
					setSaving(false);
				}
			}, []);
			const saveInstructions = () => saveConfig({ customInstructions: instructionsDraft });
			const savePersonalityCustom = () => saveConfig({ personality: { custom: personalityCustomDraft } });
			const selectPreset = (preset) => {
				if (preset === (config.personality?.preset ?? "warm")) return;
				void saveConfig({ personality: { preset } });
			};
			const addMemory = async () => {
				const text = addText.trim();
				if (text === "") return;
				try {
					const result = await api("memory.add", { text });
					setAddText("");
					setMemory(result.entries);
					setSavedAt(Date.now());
					setError(null);
				} catch (reason) {
					setError(reason instanceof Error ? reason.message : String(reason));
				}
			};
			const deleteMemory = async (id) => {
				try {
					const result = await api("memory.delete", { ids: [id] });
					setMemory(result.entries);
					setPendingDelete(null);
				} catch (reason) {
					setPendingDelete(null);
					setError(reason instanceof Error ? reason.message : String(reason));
				}
			};
			const requestDeleteMemory = (entry) => {
				setError(null);
				setPendingDelete(entry);
			};
			const confirmDeleteMemory = () => {
				if (pendingDelete !== null) void deleteMemory(pendingDelete.id);
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
				try {
					const result = await api("memory.clear", {});
					setMemory(result.entries);
					setConfirmClear(false);
					setSavedAt(Date.now());
				} catch (reason) {
					setConfirmClear(false);
					setError(reason instanceof Error ? reason.message : String(reason));
				}
			};
			if (loading) return (0, react_jsx_runtime.jsx)("div", { className: pcss.loading, children: t("loading") });
			if (config === null) return (0, react_jsx_runtime.jsx)("div", {
				className: pcss.error,
				role: "alert",
				children: error ?? t("load.failed")
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
								}), savedAt !== null && (0, react_jsx_runtime.jsx)("span", { className: pcss.saved, children: t("saved") })]
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
							memory.length === 0 ? (0, react_jsx_runtime.jsx)("div", { className: pcss.empty, children: t("memory.empty") }) : (0, react_jsx_runtime.jsx)("div", {
								className: pcss.memList,
								children: memory.map((entry) => (0, react_jsx_runtime.jsxs)("div", {
									className: pcss.memRow,
									children: [
										(0, react_jsx_runtime.jsx)("span", { className: pcss.memText, children: entry.text }),
										(0, react_jsx_runtime.jsxs)("span", {
											className: pcss.memMeta,
											children: [(0, react_jsx_runtime.jsx)("span", {
												className: pcss.badge,
												children: entry.source === "auto" ? t("memory.sourceAuto") : t("memory.sourceManual")
											}), (0, react_jsx_runtime.jsx)("button", {
												type: "button",
												className: pcss.memDel,
												"aria-label": t("memory.deleteTitle"),
												title: t("memory.deleteTitle"),
												onClick: () => requestDeleteMemory(entry),
												children: "×"
											})]
										})
									]
								}, entry.id))
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
									disabled: addText.trim() === "",
									onClick: () => void addMemory(),
									children: t("memory.add")
								}), memory.length > 0 && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
									variant: "outline",
									onClick: () => void clearMemory(),
									children: confirmClear ? t("memory.clearConfirm") : t("memory.clear")
								})]
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
									}), savedAt !== null && (0, react_jsx_runtime.jsx)("span", { className: pcss.saved, children: t("saved") })]
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
