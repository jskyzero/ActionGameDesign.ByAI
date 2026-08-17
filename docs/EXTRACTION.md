# 内容提取与沉淀规范

本文定义「动作游戏设计知识库 · AI 驱动」中，AI 从一篇分享/文章（URL 或关键词）提取并沉淀知识的**统一逻辑**。目标是让内容可读性高、可检索、可复用。

## 1. 信息密度分层（Information Density Hierarchy）

小红书内容可读性高，核心在于「字数少、视觉重点突出」。AI 总结不能只给纯文本，必须**分层提取**：

| 层级 | 内容 | 呈现 |
|---|---|---|
| **一级信息（Hook）** | 1 句抓人眼球的结论/标题 | 大字号（封面/引用块） |
| **二级信息（Core Points）** | 3 个核心观点 | 图标 + 加粗小标题 |
| **三级信息（Details）** | 具体解释、例子、数据 | 小字号、浅色字 |

对应 schema：`article.insight`（Hook）· 正文（Details，挂在每个核心观点下）。

**提取规则**：
- Hook：只提炼**一句**，能独立成立、让人想点进去看。如果原文没有金句，用一句话概括，不要照抄整段。
- Details：支持 Hook 的具体解释，简短、分点，不用写成论文。

## 2. 通用信息卡片

信息卡片要兼容不同类型的内容（不只 GDC 演讲），字段语义通用化：

| 字段 | 语义 | GDC 演讲示例 | 普通文章示例 |
|---|---|---|---|
| `article.title` | 中文标题 | 街霸 5 的美术设计思路 | 文章标题 |
| `article.insight` | 一句话结论 | 先读得懂，再求个性 | 文章主旨 |
| `article.tags` | 标签（可选 emoji 图标） | `[{label: 街霸, icon: 🥊}, …]` | `[{label: 方法论}]` |
| `source.author` | 作者 / 分享人 | 龟井敏征 · 美术总监 | 某作者 |
| `source.url` | 源链接 | GDC Vault URL | 文章 URL |
| `source.year` | 年份 | 2017 | 2024 |
| `source.type` | 会议 / 平台 | GDC | 知乎 / CEDEC |
| `source.company` | 厂商 / 来源方 | Capcom | —（可空） |
| `source.title` | 原标题 | The Art Direction of... | 文章标题 |
| `references` | 参考（翻译/延伸） | 中译链接 | 延伸阅读 |

卡片只展示**有值的字段**；留空的字段会自动省略。

## 3. AI 提取流水线

1. **输入**：URL 或关键词。
2. **检索**：用公开信息（原视频/文章、翻译稿、官方页面）还原内容。**查找源视频时，优先找 YouTube 链接**——作者会借助 Gemini 总结视频内容并回传，便于更准确地整理正文。
3. **优先本地源**：若本地有对应 `.xmind`/`.drawio`（如 `GDC.xmind`），**以作者自己的归纳为准**，公开信息只作补充。
4. **分层提取**：按第 1 节产出 Hook + Details。
5. **归档**：生成 `.mdx`（frontmatter 结构化字段 + 正文 Details），跑 `npm run validate` 校验，再 `npm run build`。
6. **缺失补全**：标准字段（如年份、作者、源链接）缺失时，先尝试检索补全；实在找不到，用默认值占位（如年份写 `年份不详`）。

## 4. 归类

- `source.company`（厂商/来源方）：沿用现有分组（Capcom / PlatinumGames / Santa Monica Studio / Nintendo / FTG 相关 / 其他 / 非 GDC / 设计者笔记），新内容按「厂商 / 品类 / 来源 / 原创」归入，必要时可新增。
- `article.tags`：2~4 个，供筛选。
