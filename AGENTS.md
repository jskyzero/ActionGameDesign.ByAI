# AGENTS.md

本文件约定 AI 助手（及人类）在本仓库贡献内容的规范。内容是一份份 Markdown 文件，结构由 frontmatter 定义，见 `src/content.config.ts`。提取逻辑详见 `EXTRACTION.md`。

## 内容目录

- `src/content/docs/talks/<章节>/<slug>.mdx` —— 分享索引（GDC 演讲、视频、文章等）
- `src/content/docs/essays/<slug>.mdx` —— 原创方法论文章
- `src/pages/index.astro` —— 首页（不要往内容目录里堆首页）

## Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `title` | string | ✅ | 中文标题（如 `街霸 5 的美术设计思路`），分享人放 `author` |
| `kind` | `talk` \| `essay` | ✅ | 内容类型，默认 `talk` |
| `year` | number | | 分享 / 发布年份 |
| `section` | string | ✅ | 顶层分组（Capcom / PlatinumGames / Santa Monica Studio / FTG 相关 / 其他 / Nintendo / 非 GDC / 设计者笔记） |
| `status` | `done` \| `wip` | ✅ | `wip` = 待施工 |
| `insight` | string | 推荐 | **一级信息 Hook**：一句话结论 |
| `corePoints` | array | 推荐 | **二级信息**：`[{ icon, title }]`，3 条核心观点 |
| `author` | string | | 作者 / 分享人 |
| `role` | string | | 身份 / 职位 |
| `project` | string | | 项目 / 作品 |
| `event` | string | | 会议 / 活动（如 `GDC`、`CEDEC`） |
| `titleOriginal` | string | | 原标题（演讲标题 / 文章标题） |
| `link` | string | | 源链接 |
| `references` | array | | `[{ label, url, type }]`，`type` ∈ `original`/`translation`/`other` |
| `tags` | string[] | 推荐 | 2~4 个标签，供主页筛选 |
| `image` | string | | 配图路径（可选） |
| `description` | string | | 摘要 |

## 约定

1. 一个条目一个文件，文件名用 `kebab-case`，放在对应章节目录下。
2. 遵循**信息密度分层**（`EXTRACTION.md`）：Hook 一句 → 3 条 corePoints → 正文 Details。
3. `insight` 用中文引号「」，不要用英文引号。
4. `wip` 条目正文放 `> 🚧 待施工：内容待整理，先记录分享与参考链接。`；`done` 条目正文放完整笔记。
5. 正文必须是纯文本（AI 可读），图片仅作可选附件。
6. 新增条目后跑 `npm run validate` 校验，再 `npm run build` 确认能构建。
