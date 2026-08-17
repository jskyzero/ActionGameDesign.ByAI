# PROMPTS.md

给任意 LLM 用的「整理动作游戏分享」提示词模板。把下面这段（连同要整理的材料）发给 AI，即可产出符合本仓库 schema 的条目草稿。

---

## 任务

把下面这条动作游戏分享整理成本仓库的一条 Markdown 条目。按「信息密度分层」提取：一句 Hook + 3 条核心观点 + 正文细节，正文用中文。

### 材料

- 标题 / 游戏名：
- 厂商 / 作者：
- 年份：
- 分享人 / 职位：
- 来源（如 GDC 2017、知乎、某杂志）：
- 原标题（演讲标题 / 文章标题）：
- 源链接：
- 参考翻译 / 延伸阅读链接（如有）：
- 备注（可选）：

### 输出格式（严格复制此结构）

```markdown
---
title: <中文标题（演讲标题翻译）>
kind: talk
section: <顶层分组>
year: <年份数字>
status: wip
insight: <一句话结论/Hook，用中文引号「」>
corePoints:
  - icon: <emoji>
    title: <核心观点 1>
  - icon: <emoji>
    title: <核心观点 2>
  - icon: <emoji>
    title: <核心观点 3>
author: <分享人/作者>
role: <职位>
project: <项目/作品>
event: <会议>
titleOriginal: "<原标题>"
link: <源链接>
tags: [<2~4 个标签>]
references:
  - label: <参考名>
    url: <链接>
    type: <original | translation | other>
description: <一句话摘要>
---

> **核心观点**：<Hook 一句话>

## <核心观点 1>

- <具体解释 / 例子>

## <核心观点 2>

- <具体解释 / 例子>

## <核心观点 3>

- <具体解释 / 例子>

> ✦ 一句话带走：<收尾金句>
```

### 要求

1. **信息密度分层**（详见 `EXTRACTION.md`）：
   - Hook（`insight`）只提炼**一句**，能独立成立；材料没有金句就自己概括一句。
   - `corePoints` **固定 3 条**，是对 Hook 的拆解，每条配一个 emoji 图标。
   - 正文 Details 挂在每个核心观点下，简短分点，不写论文。
2. `title` 用「演讲标题中文翻译 · 分享人」格式（如 `街霸 5 的美术设计思路 · 龟井敏征`）。
3. `tags` 用 2~4 个简短中文词（如 `格斗`、`战斗系统`、`AI`）。
4. 还没写详细笔记就 `status: wip`；已整理完整则 `done`。
5. 只输出这一个 Markdown 文件的内容，不要加多余解释。
