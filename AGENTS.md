# AGENTS.md

本文件约定 AI 助手（及人类）在本仓库贡献内容的规范。内容是一份份 Markdown 文件，结构由 frontmatter 定义，见 `src/content.config.ts`。

## 内容目录

- `src/content/docs/talks/<厂商>/<slug>.mdx` —— 分享索引（GDC 演讲、视频分享等）
- `src/content/docs/essays/<slug>.mdx` —— 原创方法论文章
- `src/content/docs/index.mdx` —— 首页（不要在这里堆条目）

## Frontmatter 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `title` | string | ✅ | 展示名，分享建议 `年份 · 游戏名`（如 `2017 · 街霸 5`） |
| `kind` | `talk` \| `essay` | ✅ | 内容类型，默认 `talk` |
| `year` | number | talk | 分享年份 |
| `section` | string | ✅ | 顶层分组（Capcom / PlatinumGames / Santa Monica Studio / FTG 相关 / 其他 / Nintendo / 非 GDC / 设计者笔记） |
| `status` | `done` \| `wip` | ✅ | `wip` = 待施工（替代旧 🚧） |
| `insight` | string | 推荐 | 一句话总结 / 金句 |
| `speaker` | string | | 分享人 |
| `role` | string | | 职位 |
| `project` | string | | 项目 |
| `event` | string | | 会议 / 活动（如 `GDC 2017`） |
| `talkTitle` | string | | 演讲标题（英文原名，含冒号需加引号） |
| `video` | string | | 源视频 URL |
| `references` | array | | `[{ label, url, type }]`，`type` ∈ `original`/`translation`/`other` |
| `tags` | string[] | 推荐 | 2~4 个标签，用于标签浏览与导图聚合 |
| `image` | string | | 配图路径（迁移期用作内容占位，如 `/images/gdc/1.png`） |
| `description` | string | | 卡片/搜索摘要 |
| `sources` | string[] | | 原始出处（xmind / drawio / 链接） |

## 约定

1. 一个条目一个文件，文件名用 `kebab-case`，放在对应厂商目录下。
2. `insight` 用中文引号「」，不要用英文引号。
3. 正文开头放「**分享信息**」卡片表格：`分享人 / 职位 / 项目 / 会议 / 演讲标题 / 源视频 / 参考翻译`（参考部分提前到开头）。
4. `wip` 条目正文放 `:::note[待施工]` 提示；`done` 条目正文放金句 + 详细笔记。
5. 图片仅作附件，正文必须是纯文本（AI 可读）。
6. 新增条目后跑 `npm run validate` 校验，再 `npm run build` 确认能构建。
