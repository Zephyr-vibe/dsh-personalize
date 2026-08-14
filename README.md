# dsh-personalize

A DSH web plugin: **per-host personalization** — global custom instructions, local long-term memory, and reply-tone presets, applied to every conversation on this machine.

一个 DSH Web 插件：**本机个性化** — 全局自定义指令、本地长期记忆、回复语气预设，应用于本机所有对话。

## Features（功能）

### English

- **Custom instructions**: a user-written block injected into every session's system prompt.
- **Local long-term memory**:
  - Add entries **manually**, or let the agent **collect automatically** via tools (`memory_create`, `memory_list`, `memory_delete`)
  - Every deletion asks for **confirmation first** — nothing is removed silently
  - Entries are injected into every system prompt and persisted at `{DSH_HOME}/personalize/`
- **Reply-tone presets**: warm & friendly / direct & efficient / precise & professional / playful & humorous / **custom** — injected as a prompt section.
- Bilingual UI (中文 / English), switched with the DSH language setting.

### 中文

- **自定义指令**：一段用户手写的说明，注入每个会话的系统提示。
- **本地长期记忆**：
  - 支持**手动添加**，也可让智能体通过工具（`memory_create` / `memory_list` / `memory_delete`）**自动收集**
  - 每次删除都会弹出**确认提示**，绝不静默移除
  - 记忆注入每个会话的系统提示，持久化保存在 `{DSH_HOME}/personalize/`
- **回复语气预设**：温和贴心 / 高效直接 / 严谨专业 / 风趣幽默 / **自定义** — 作为提示段注入。
- 中英双语界面，随 DSH 语言设置切换。

## Install

### Via npm registry

```sh
dsh plugin --profile web add dsh-personalize@<version>
```

### Directly from GitHub

```sh
dsh plugin --profile web add github:Zephyr-vibe/dsh-personalize
```

安装后重启 web 端，即可在「设置」中看到「个性化」入口。

After installing, restart the web app — the Personalization panel appears in Settings automatically.

## Zero config（零配置）

No setup required — everything is derived automatically at runtime.

无需任何配置，装完即用。

- **DSH_HOME auto-resolution**: mirrors the official DSH resolver — a blank `$DSH_HOME` counts as unset and falls back to `~/.dsh`. Files live at `{DSH_HOME}/personalize/config.json` (custom instructions / tone / toggles) and `{DSH_HOME}/personalize/memory.json`; the directory and files are **created automatically on first use**.
- The plugin registers into the standard `settings.section` slot, so it appears in Settings automatically after install + web restart.
- Only official public services are used (`webServer`, `tools`, `systemPrompt`) — no DSH core modification needed.

## Notes

- Client settings section: `settings.section` (id `personalize`, order 210)
- Host API: `/personalize/api/*` (`config.get`, `config.update`, `memory.list`, `memory.add`, `memory.delete`, `memory.clear`) behind a browser-trust fence (loopback + same-origin only)
- Agent tools (when auto-collection is enabled): `memory_create`, `memory_list`, `memory_delete`
- Persistence is host-owned plain JSON under the DSH home (`personalize/config.json`, `personalize/memory.json`), written atomically

## License

MIT — © 2026 Zephyr-vibe
