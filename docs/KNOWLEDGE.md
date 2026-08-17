# 关键知识与决策记录

本项目（ActionGameDesign.ByAI）从零搭建与迭代过程中沉淀的关键知识、架构决策与技术踩坑。供后续开发与 AI 协作参考。

## 1. 项目定位

**ActionGameDesign.ByAI —— 动作游戏设计知识库（AI 驱动）**

- 收集互联网上动作游戏设计分享（GDC 演讲、视频、文章）与原创方法论，做成**结构化、可检索、AI 友好**的精选集合。
- 工作流：用户投喂 URL / 关键词 → AI 检索公开信息 → **优先以本地 XMind 归纳为准** → 分层提取 → 归档 `.mdx`。
- 托管：`https://jskyzero.github.io/ActionGameDesign.ByAI/`（GitHub Pages 项目站）。

## 2. 架构决策

| 决策 | 结论 | 原因 |
|---|---|---|
| 技术栈 | **Astro + Tailwind CSS + @tailwindcss/typography + MDX**（纯自定义站点） | 需要「小红书式」内容排版，Starlight 文档站风格无法满足 |
| 数据层 | Astro 内容集合 + zod schema（`.mdx` 一条目一文件） | AI 友好：纯文本、可校验、可批量生成 |
| 主页 | 时间轴 + 来源 hash 渐变卡 + 来源筛选 + 搜索 | 探索式首页（参考 Google Arts & Culture），多种入口 |
| 文章页 | 封面卡 + 核心观点 + 信息卡 + point 卡片正文 + 右侧目录(TOC) | 对标 `prototype/article.html`，信息密度分层呈现 |
| 思维导图 | **放弃** | markmap 交互难用、手绘质感无法还原，且易踩滤镜坑 |
| 正文形态 | 文字卡片（point 卡）而非导图 | 用户确认「文字卡片可以，方向正确」 |
| 圆角 | 苹果风格统一：`--r-card: 18px` / `--r-pill: 999px` | 统一美学语言 |

## 3. 内容模型与提取规范（详见 [EXTRACTION.md](EXTRACTION.md) / [../AGENTS.md](../AGENTS.md)）

- **信息密度分层**：
  - 一级 Hook（`article.insight`）：1 句结论，大字号
  - 二级 Details（正文）：具体解释，point 卡片呈现
- **通用信息卡片**（兼容 GDC 演讲 / 普通文章 / 书籍）：
  `article`（`title`·`insight`·`tags`）· `source`（`title`=原标题 · `author`·`url` · `year` · `type`=会议/平台 · `company`=厂商）· `references`（翻译/延伸）
- **归类**：`source.company`（顶层分组）· `article.tags`（2~4 个）· `kind`（talk/essay）· `source.year`
- **精简原则**：`article.title` = 中文标题；分享人放 `source.author`；删冗余字段（`description`/`image` 可选保留）。

## 4. 设计系统（CSS token 集中管理）

设计 token 集中在 `src/styles/tokens.css`，**后期频繁调 CSS 优先改这里**：

- 颜色：`--bg`（暖纸）`--ink` `--muted` `--line` `--indigo`（主强调）`--accent`（珊瑚点缀）
- 圆角：`--r-card: 18px` / `--r-pill: 999px`
- 字体：`--font-serif`（LXGW WenKai 手写体标题）`--font-sans`
- 阴影：`--shadow-card` / `--shadow-card-hover`
- 来源 hash 渐变：`gradientFor(来源名)` 纯 hash 色相（`src/pages/index.astro` 内）

布局：正文阅读宽 760px（`--content-width` 变量，Base 布局注入）；主页整体 1160px；时间轴左栏 170px；文章页右侧目录 200px（窄屏隐藏）。

## 5. 技术经验与踩坑

- **去 Starlight 后 `.mdx` 支持丢失**：必须补装 `@astrojs/mdx`（Astro 5 配 `@astrojs/mdx@4`，最新版 7.x 需要 Astro 7）。
- **`[...slug]` 动态路由参数是字符串**（整段路径），不是数组；`getStaticPaths` 里 `params.slug = entry.slug`。
- **Tailwind typography 的 `.prose` 默认 `max-width: 65ch`**：会把正文限制在 ~500px，point 卡片无法占满宽度 → 覆盖 `.prose { max-width: none }`。
- **`@counter-style` 实现章节中文序号**：`system: cyclic; symbols: '一' '二' …` + `counter-increment` + `content: counter(sec, chinese-sec)`，让序号显示在深靛方块里（对标 prototype 的 `.num`）。
- **`base` 路径拼接**：`import.meta.env.BASE_URL` 无尾斜杠，拼接链接要 `replace(/\/$/, '')` 再加 `/`。
- **markmap 踩坑**（已弃用，留档）：连线锚点在节点底边需后处理居中；`feDisplacementMap` 用 `objectBoundingBox` 会裁掉水平线（需 `userSpaceOnUse` + 固定大区域）。
- **XMind 文件是 zip**（内含 `content.json`），可用脚本提取节点文字；用户的 `GDC.xmind` 在 WSL 挂载 iCloud 路径（`/mnt/c/Users/jskyzero/iCloudDrive/Moons-Project/GDC.xmind`）。
- **当前模型无多模态能力**：图片内容（截图、含图的 drawio）需要外部视觉模型转写，脚本只能提取纯文本节点。
- **hero/footer 对齐正文宽**：Base 布局用 `--content-width`（文章 760px / 主页 1160px），footer `max-width: var(--content-width)`。

## 6. 常用命令与脚本

```bash
npm run dev          # 本地开发（http://localhost:4321/ActionGameDesign.ByAI/）
npm run build        # 构建到 dist/
npm run validate     # 校验所有条目 frontmatter
node scripts/convert-xmind.mjs  <file.xmind>  [out.md]   # xmind 节点 → markdown 大纲
node scripts/convert-drawio.mjs <file.drawio> [out.md]   # drawio 节点 → markdown 大纲
```

## 7. 后续待办

- 接入全文搜索（Pagefind，主页搜索目前是客户端筛选）
- 按 `GDC.xmind` 的 9 个详细归纳迁移其余条目（街霸 5 已完成样板）
- 图片内容的多模态转写流程
