# 动作游戏分享精选

互联网上动作游戏设计分享（GDC 演讲、视频分享等）与原创方法论的**精选集合**，做成结构化、可检索、AI 友好的知识库网站。

技术栈：**Astro + Starlight + zod**（沿用 `blog.jskyzero.com` 的框架约定）。

## 目录结构

```
src/
├── content.config.ts          # 内容 schema（zod 校验契约）
├── content/docs/              # 唯一数据源（纯文本）
│   ├── index.mdx              #   首页
│   ├── talks/<章节>/<slug>.mdx#   分享索引（一条目一文件）
│   └── essays/<slug>.mdx      #   原创方法论（设计者笔记）
├── pages/
│   └── tags/index.astro       # 目录浏览（按章节分组的卡片）
└── styles/custom.css
scripts/
├── validate.mjs               # frontmatter 校验
├── convert-xmind.mjs          # .xmind → Markdown 大纲
└── convert-drawio.mjs         # .drawio → Markdown 大纲
public/images/                 # 迁移期用作内容占位的原 XMind 截图
AGENTS.md                      # AI 贡献约定
PROMPTS.md                     # AI 整理条目的提示词模板
```

## 常用命令

```bash
npm install          # 安装依赖
npm run dev          # 本地开发（http://localhost:4321）
npm run build        # 构建到 dist/
npm run validate     # 校验所有条目的 frontmatter
```

## 内容模型

每个条目一个 `.mdx`，frontmatter 字段见 `AGENTS.md`（`section` / `year` / `status` / `insight` / `references` / `tags` / `image` 等），正文是纯文本笔记。

顶层章节（与原文一致，直接一级平铺）：Capcom / PlatinumGames / Santa Monica Studio / FTG 相关 / 其他 / Nintendo / 非 GDC / 设计者笔记。

## 迁移旧知识

旧的 `.xmind` / `.drawio` 源文件里，节点文字可被脚本批量提取：

```bash
node scripts/convert-xmind.mjs  path/to/foo.xmind  out.md
node scripts/convert-drawio.mjs path/to/bar.drawio out.md
```

提取出的 Markdown 大纲交给 AI（或人工）按 `PROMPTS.md` 的模板整理成 `.mdx` 条目，审校后入库。**图片内容**（如截图、含文字的 drawio 图片）需要多模态模型转写，脚本无法提取。

## 视图

- **目录浏览** `/tags` —— 按章节分组的卡片列表
- **详情页** —— Starlight 文档页（侧边栏章节直接平铺）
- **全站搜索** —— Starlight 内置 Pagefind
