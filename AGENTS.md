# AGENTS.md

本仓库是 **ActionGameDesign.ByAI —— AI 驱动的动作游戏设计知识库**：基于 AI 工作流整理动作游戏设计知识，内容多来自 GDC、CEDEC 等专业游戏会议。AI 不一定全对，但足够高效；每篇文章都附有源链接与参考链接，供读者自行核实。

本文件约定 AI 助手（及人类）在本仓库贡献内容的规范。内容是一份份 Markdown 文件，结构由 frontmatter 定义，见 `src/content.config.ts`。

## 模型分工约定

按**角色**分工，不写死具体模型名——模型会下线、改名或被重定向，规则只约定「什么任务用什么档次的模型」，具体 ID 随时更换。

| 阶段 | 模型档位 | 说明 |
|---|---|---|
| 检索 / 扫描（找 talk、找链接、翻资料） | 快而省 | 量大但不需要深度推理，用便宜/快的模型 |
| 正文写作（精修中文、去 AI 味、信息密度分层） | 强而准 | 需要文字质量，用质量最高的可用模型 |

- 当前实践（可随时替换，无需改本文件）：两档先都落到 DeepSeek V4.1 Flash（`deepseek-flash`）；待更强的写作模型发布后再切写作档。
- 主对话负责判断、规划、汇总；派出去的**子代理 / 工作流**按上述角色分工，在 `agent()` / workflow phase 里用**当下可用的模型 ID** 显式指定 `model`，不要沿用已下线或被重定向的旧 ID。

## 文档索引

- [`docs/EXTRACTION.md`](docs/EXTRACTION.md) —— 内容提取与沉淀规范（信息密度分层、字段语义、归类）
- [`docs/PROMPTS.md`](docs/PROMPTS.md) —— 给任意 LLM 的整理提示词模板
- [`docs/KNOWLEDGE.md`](docs/KNOWLEDGE.md) —— 项目背景与知识库上下文

## 内容目录

- `src/content/docs/<章节>/<slug>.mdx` —— 所有内容（GDC 演讲、视频、文章、原创方法论）
- 同一实际公司的文章达到 3 篇（`source.company`，先统一同公司别名）时，新建公司专属同级目录，并将该公司的文章统一迁入；公司目录优先于 `gdc`、`cedec`、`other`。已有厂商或专题目录保留；尚无专属目录且不满 3 篇的公司按来源放入 `gdc`、`cedec` 或 `other`。“其他”“设计者笔记”等泛分类不视为公司。目录名用 kebab-case。迁移时更新归档链接和旧 URL 跳转，历史跳转直接指向最终地址，生成时间保持不变。
- `src/pages/index.astro` —— 首页（不要往内容目录里堆首页）

## Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `status` | `done` \| `wip` | ✅ | 兼容 `wip`；新收录仅发布 `done` |
| `article.title` | string | ✅ | 中文标题（如 `街霸 5 的美术设计思路`） |
| `article.insight` | string | 推荐 | **一级信息 Hook**：一句话结论 |
| `article.tags` | object[] | 推荐 | `[{ label, icon? }]`，推荐 2~3 个，最多 3 个标签；`icon` 为可选 emoji |
| `source.title` | string | | 原标题（演讲标题 / 文章标题） |
| `source.author` | string | | 作者 / 分享人 |
| `source.authorBio` | string | | 作者简介（如 `Capcom 美术总监，负责《街霸 4》《街霸 5》`） |
| `source.url` | string | | 源链接 |
| `source.year` | number | | 分享 / 发布年份 |
| `source.type` | string | | 来源类型（会议 / 平台，如 `GDC`、`CEDEC`、`Youtube`） |
| `source.company` | string | | 厂商 / 来源方（如 `Capcom`、`Nintendo`；顶层分组沿用此字段） |
| `references` | array | | `[{ label, url, type }]`，`type` ∈ `original`/`translation`/`other` |
| `generation` | string | | 生成与修改说明，如 `本文由 GPT-6 Astra 于 2026/09/20 生成，由 DeepSeek V4.1 Flash 后续修改` |
| `description` | string | | 摘要 |

## 约定

- 修改完成并通过相关校验后，默认创建本地 Git 提交，无需再次确认；推送远端或发布仍按用户指示执行。

1. 一个条目一个文件，文件名用 `kebab-case`，放在对应章节目录下。
2. 遵循**信息密度分层**（[`docs/EXTRACTION.md`](docs/EXTRACTION.md)）：Hook 一句 → 正文 Details。
3. `article.insight` 用中文引号「」，不要用英文引号。
4. 仅发布正文已完成的 `done` 文章；资料不足的主题、来源链接和缺口保留在 `docs/scan-todo.md`，不建立施工中的文章。
5. 正文必须是纯文本（AI 可读）。
6. 新增条目后跑 `npm run validate` 校验，再 `npm run build` 确认能构建。

7. `generation` 用一句话说明生成与修改历史：`本文由 <模型> 于 <YYYY/MM/DD> 生成`，有实质内容改动再追加 `，由 <模型> 后续修改`。模型名写**实际**生成/修改的模型，不按角色猜测；日期取首次入库的真实 git 时间（`git log --follow --diff-filter=A --format=%cI -- <路径>`），后续排版、标签等修改不覆盖该日期。

## 换模型防错（新模型接入前必读）

以下规则来自 GPT-6 Astra 曾犯过的错误，任何新模型动笔前必须逐条遵守：

1. **格式是硬约束，不是建议**：正文用 `## 分节 + ### 小节 + - **加粗**: 细节`，文末 `> ✦ 一句话总结`。动笔前先读 ≥3 篇已收录标杆文章逐条对齐；禁止用段落式散文、表格式或清单式替代要点式结构。
2. **不得自行发明约定**：新增结尾样式、正文标记（如「设计自查」「本文归纳」）、frontmatter 字段、目录分类，必须先提给主对话/用户，获批后**全局一致**落地，禁止只改一部分。
3. **信息密度不降级**：保留失败方案、具体条件、实现步骤、代价与反例；宁可长，不可略（历史教训：曾把复杂分享压成三个小节、漏掉细节）。
4. **收录边界**：只收与动作设计直接相关的内容（战斗、关卡、动画、AI、手感、可读性等）；持续集成、背景美术、引擎技术等过泛主题不收录。
5. **结尾唯一**：全库只保留一种结尾；要改结尾先全局对齐，再动手。
6. **样板学习 ≠ 事实来源**：学标杆是学「组织与细节保留方式」，不把标杆正文当事实证据。
7. **迁移配 redirect**：移动文章目录必须在 `astro.config.mjs` 配 redirect 指向最终地址，历史跳转直接指向最终地址，生成时间保持不变。
