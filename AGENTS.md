# AGENTS.md

本文件约定 AI 助手（及人类）在本仓库贡献内容的规范。内容是一份份 Markdown 文件，结构由 frontmatter 定义，见 `src/content.config.ts`。

## 文档索引

- [`docs/EXTRACTION.md`](docs/EXTRACTION.md) —— 内容提取与沉淀规范（信息密度分层、字段语义、归类）
- [`docs/PROMPTS.md`](docs/PROMPTS.md) —— 给任意 LLM 的整理提示词模板
- [`docs/KNOWLEDGE.md`](docs/KNOWLEDGE.md) —— 项目背景与知识库上下文

## 内容目录

- `src/content/docs/talks/<章节>/<slug>.mdx` —— 分享索引（GDC 演讲、视频、文章等）
- `src/content/docs/essays/<slug>.mdx` —— 原创方法论文章
- `src/pages/index.astro` —— 首页（不要往内容目录里堆首页）

## Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `kind` | `talk` \| `essay` | ✅ | 内容类型，默认 `talk` |
| `status` | `done` \| `wip` | ✅ | `wip` = 待施工 |
| `article.title` | string | ✅ | 中文标题（如 `街霸 5 的美术设计思路`） |
| `article.insight` | string | 推荐 | **一级信息 Hook**：一句话结论 |
| `article.tags` | object[] | 推荐 | `[{ label, icon? }]`，2~4 个标签；`icon` 为可选 emoji |
| `source.title` | string | | 原标题（演讲标题 / 文章标题） |
| `source.author` | string | | 作者 / 分享人 |
| `source.authorBio` | string | | 作者简介（如 `Capcom 美术总监，负责《街霸 4》《街霸 5》`） |
| `source.url` | string | | 源链接 |
| `source.year` | number | | 分享 / 发布年份 |
| `source.type` | string | | 来源类型（会议 / 平台，如 `GDC`、`CEDEC`、`Youtube`） |
| `source.company` | string | | 厂商 / 来源方（如 `Capcom`、`Nintendo`；顶层分组沿用此字段） |
| `references` | array | | `[{ label, url, type }]`，`type` ∈ `original`/`translation`/`other` |
| `description` | string | | 摘要 |

## 约定

1. 一个条目一个文件，文件名用 `kebab-case`，放在对应章节目录下。
2. 遵循**信息密度分层**（[`docs/EXTRACTION.md`](docs/EXTRACTION.md)）：Hook 一句 → 正文 Details。
3. `article.insight` 用中文引号「」，不要用英文引号。
4. `wip` 条目正文放 `> 🚧 待施工：内容待整理，先记录分享与参考链接。`；`done` 条目正文放完整笔记。
5. 正文必须是纯文本（AI 可读）。
6. 新增条目后跑 `npm run validate` 校验，再 `npm run build` 确认能构建。
