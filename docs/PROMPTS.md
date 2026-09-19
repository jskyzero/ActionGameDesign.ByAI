# PROMPTS.md

给任意 LLM 用的「整理动作游戏分享」提示词模板。把下面这段（连同要整理的材料）发给 AI，即可产出符合本仓库 schema 的条目草稿。

---

## 任务

把下面这条动作游戏分享整理成本仓库的一条 Markdown 条目。按「信息密度分层」提取：一句 Hook + 正文细节，正文用中文。

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
status: done
article:
  title: <中文标题>
  insight: <一句话结论/Hook，用中文引号「」>
  tags:
    - label: <标签名>
      icon: <emoji（可选）>
source:
  title: "<原标题>"
  author: <分享人/作者（可含职位）>
  url: <源链接>
  year: <年份数字>
  type: <会议/平台，如 GDC>
  company: <厂商/来源方，如 Capcom>
generation:
  model: <实际生成正文的模型名称>
  modelUrl: <模型官方 HTTP(S) 链接>
  generatedAt: "<首次入库提交时间，ISO 8601，含时区>"
references:
  - label: <参考名>
    url: <链接>
    type: <original | translation | other>
---

> **核心观点**：<Hook 一句话>

## <小节标题>

- <具体解释 / 例子>
```

### 要求

1. **信息密度分层**（详见 [`EXTRACTION.md`](EXTRACTION.md)）：
   - Hook（`article.insight`）只提炼**一句**，能独立成立；材料没有金句就自己概括一句。
   - 正文 Details 挂在 `##` 小节下，简短分点，不写论文。
2. `article.title` 用中文标题（如 `街霸 5 的美术设计思路`），分享人放 `source.author`。
3. `article.tags` 推荐使用 2~3 个简短中文词，最多 3 个（如 `格斗`、`战斗系统`、`AI`），可给每个标签配一个 emoji `icon`（可选）。
4. 还没写详细笔记就 `status: done`；已整理完整则 `done`。
5. `generation` 记录实际正文模型，不能照抄默认模型名称。时间按 Git 首次入库提交记录填写；新文章首次提交时间的约定见 `AGENTS.md`。不得使用演讲年份或最新修改时间代替。
6. 材料充分时，只输出这一个 Markdown 文件的内容，不要加多余解释。
