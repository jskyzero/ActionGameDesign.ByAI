# ActionGameDesign.ByAI

动作游戏设计知识库：互联网上动作游戏设计分享（GDC 演讲、视频分享、文章）与原创方法论的**精选集合**，AI 驱动的结构化知识库。

托管：`https://jskyzero.github.io/ActionGameDesign.ByAI/`

技术栈：**Astro + Tailwind CSS + @tailwindcss/typography + MDX**（纯自定义站点，非文档站）。

## 目录结构

```
src/
├── content.config.ts          # 内容 schema（zod 契约，见 docs/EXTRACTION.md）
├── content/docs/              # 唯一数据源（纯文本，一条目一 .mdx）
│   └── <章节>/<slug>.mdx      #   所有内容（演讲 / 视频 / 文章 / 原创方法论）
├── layouts/
│   └── Base.astro             # 站点外壳（头部 + 页脚）
├── pages/
│   ├── index.astro            # 主页（时间轴 + 卡片流）
│   └── [...slug].astro        # 文章详情页（动态路由）
├── components/                # 文章页组件（封面/金句/信息卡/要点卡）
├── styles/
│   ├── tokens.css             # 设计 token（颜色/圆角/间距/字体/阴影）★ 调 CSS 优先改这里
│   └── global.css             # Tailwind + 基础样式
scripts/
├── validate.mjs               # frontmatter 校验
├── convert-xmind.mjs          # .xmind → Markdown 大纲
└── convert-drawio.mjs         # .drawio → Markdown 大纲
AGENTS.md                      # AI 贡献约定（入口，链接到 docs/）
docs/
├── EXTRACTION.md              # 内容提取与沉淀规范
├── PROMPTS.md                 # AI 整理条目提示词模板
├── KNOWLEDGE.md               # 关键知识与决策记录（架构/设计系统/踩坑）
└── prototype/                 # 设计原型（仅参考，不参与构建，见 docs/prototype/README.md）
```

## 常用命令

```bash
npm install          # 安装依赖
npm run dev          # 本地开发（http://localhost:4321）
npm run build        # 构建到 dist/
npm run validate     # 校验所有条目的 frontmatter
```

## 内容模型

每条一个 `.mdx`，frontmatter 字段见 `AGENTS.md` 和 [`docs/EXTRACTION.md`](docs/EXTRACTION.md)：

- **信息密度分层**：`article.insight`（Hook，一级）· 正文（Details）
- **通用信息卡片**：`article（title·insight·tags）/ source（title·author·url·year·type·company）/ references`
- **归类**：`source.company`（顶层分组）· `article.tags` · `source.year`

## 设计 token（CSS 架构）

所有视觉决策集中在 `src/styles/tokens.css` 的 CSS 变量里，后期频繁调 CSS 优先改这里：

- 颜色：`--bg` `--ink` `--muted` `--line` `--indigo` `--accent`
- 圆角：`--r-card`（卡片 18px）`--r-pill`（胶囊 999px）——苹果风格统一
- 字体：`--font-serif`（手写体标题）`--font-sans`（正文）
- 阴影：`--shadow-card` `--shadow-card-hover`

主页的**来源 hash 渐变**在 `src/pages/index.astro` 的 `gradientFor()` 函数里（纯 hash 色相）。

## 迁移旧知识

旧的 `.xmind` / `.drawio` 源文件里，节点文字可被脚本批量提取：

```bash
node scripts/convert-xmind.mjs  path/to/foo.xmind  out.md
node scripts/convert-drawio.mjs path/to/bar.drawio out.md
```

提取出的 Markdown 大纲交给 AI（或人工）按 [`docs/PROMPTS.md`](docs/PROMPTS.md) 模板整理成 `.mdx`，审校后入库。**图片内容**需要多模态模型转写，脚本无法提取。
