# 动作游戏设计分享：收录待办

更新：2026-09-20。按**工作室 → 游戏 → 设计问题**组织，不追求会议讲题全集。

本轮按用户勾选的 7 项与另列的 13 项整理，共 20 项：17 项已写成笔记，3 项资料不足仅保留在待办。此前 53 篇及本轮完成项统一见[已收录归档](scan-archive.md)。归档不代表本轮重新核实了历史正文。收录范围遵循 [EXTRACTION.md](EXTRACTION.md)。

## 如何使用

本文件的 `[x]` 可用于指定下一批要整理的候选；只有文章标记为 `done` 并移入归档，才表示内容完成。

- **P1**：优先补齐战斗、操作、动画与伙伴 AI 的具体设计案例。
- **P2**：有价值，但须先确认能提炼出动作设计问题，避免写成通用技术介绍。
- **已核题**：本轮查到官方讲题页或开发者说明，确认讲题身份与相关性；不表示已看完视频、取得讲义或可以直接写正文。
- **待核实**：旧清单留下的线索，年份、标题、讲者、材料可用性可能有误；不能直接沿用为文章 frontmatter。
- 整理顺序：核题 → 获取原始视频／讲义 → 与已有正文查重 → 整理 → 校验与构建 → 移入归档。正文材料不足时只保留待办，不建立 `wip` 文章，不标完成。

Dreamscaper 本轮未勾选，继续留在候选区。后续可先补齐下方已选条目的原始材料，再扩展新主题。

## 已核题候选（1 项）

以下官方页面核对日期均为 2026-09-20。获取正文材料时优先找官方 YouTube 视频；已有讲义则先按目录定位相关章节，不必同时读取整段视频与全套幻灯片。

### Afterburner Studios / Dreamscaper

- [ ] **P1 · GDC 2022 · Ian Cofino** — [《Dreamscaper》：小团队如何打磨战斗](https://www.gdcvault.com/play/1027585/-Dreamscaper-Killer-Combat-on)（原题：'Dreamscaper': Killer Combat on an Indie Budget）。拟提取：有限资源下，设计、动画与特效如何共同形成操作反馈。下一步：找公开视频并记录具体战斗案例，不扩写为独立游戏创业经验。

## 本轮已选，待补材料

以下 3 项仅保留待办与来源，不发布施工中的文章；取得完整材料后再建文。

- [ ] **Capcom · CEDEC 2025 · 酒谷佑一** — [《怪物猎人：荒野》：输入与动作状态如何进入共用系统](https://cedec.cesa.or.jp/2025/timetable/detail/s67af234e0fa71/)：官方讲者说明以同时按键的时间容差、大量动作的状态转换为例，解释 ace 共用系统要面对的需求。本次未取得足以核实具体机制的完整讲义或录像，不能据概要声称其使用了某种输入缓存时长或状态机方案。
- [ ] **Grenge · CEDEC 2020 · 川辺兼嗣** — [《Kick-Flight》：单指操控与自动镜头如何支撑空中对战](https://cedec.cesa.or.jp/2020/session/detail/s5e838039bf2c5.html)：已核实 CEDEC 2020 的讲题、讲者与 CEDiL 入口。官方概要明确涉及操作失误辅助、自动动态镜头和三维方向提示；[CEDiL 资料页](https://cedil.cesa.or.jp/cedil_sessions/view/2307.html)列出 MP4，获取需登录，本次未取得录像正文。
- [ ] **Santa Monica Studio · GDC 2012 · Chris O’Neill、Bruno Velazquez** — [《战神 III》：把泰坦做成可玩的活体关卡](https://www.gdcvault.com/play/1015524/The-Titans-Creating-Living-Breathing)：讲题与年份已由 GDC Vault 和官方录像说明交叉确认。[官方 YouTube 录像](https://www.youtube.com/watch?v=X9AVP2aqtFw)的 2018 年是上传时间，演讲举办于 2012 年。尚缺可核读的完整讲义或字幕，待补移动表面、角色接触与关卡交互的具体案例。

## 本轮来源纠错与整理范围

- 《The Art of Screenshake》是 INDIGO Classes 2013 分享，不是 GDC；文章注明仅据讲座报道选取案例。
- DOOM Eternal 的指定入口是 2020 年 Hugo Martin 访谈，来源类型改为 Game Developer，不冒称 GDC 演讲。
- “铁拳身体运动结构”按核实后的通用战斗动画讲题收录，不将讲者任职或经历当成讲题所属游戏。
- 《怪物猎人》2025 系列回顾与 ace 系统是两场分享，分别处理；前者只摘取动作变化，后者不凭摘要编造实现。
- 《旷野之息》CEDEC 2017 地形引导与已有 GDC 2017 系列革新演讲不同；Horizon 的 AI 移动与机器动画也分别建文。
- 依据讲者节选、作者同题专章或现场报道整理的笔记，正文均说明材料范围；没有将摘要冒充完整录像。

## 待核实线索

保留旧清单中仍有潜力的入口，**本轮没有逐项验证**。下表题名为检索用简写，会议与年份均沿用旧记录，待官方页面确认；不等于已核题队列。优先核实能补齐输入响应、敌人攻击组织、近战反应的条目。

| 工作室 / 游戏或主题 | 旧记录与入口 | 下一步要核实的问题 |
|---|---|---|
| Battlefield / 工作室待核 | [Battlefield 6: Game Feel is the Message（2026 GDC）](https://schedule.gdconf.com/session/battlefield-6-game-feel-is-the-message/915257) | 核对 2026 议程、讲者归属和录像，确认武器手感的可复用案例。 |
| Bungie / Halo | [Design in Detail: HALO 等离子枪弹速调校（2011 GDC）](https://www.gdcvault.com/play/1014704/) | 核对游戏版本、讲者、弹速调校的真实案例。 |
| Bungie / Halo 3 | [Building a Better Battle: Halo 3 AI（2008 GDC）](https://web.cs.wpi.edu/~rich/courses/imgd4000-d09/lectures/halo3.pdf) | 核实讲义年份与原始演讲，提取敌群行为组织案例。 |
| Bungie / Halo 3 | [Design in Detail: Halo 3 狙击枪射击间隔 0.5→0.7 秒（2010 GDC）](https://www.gdcvault.com/play/1012211/) | 核对讲题与数值上下文，不能直接沿用旧清单的 0.5→0.7 秒结论。 |
| Monolith / F.E.A.R. | [Three States and a Plan: F.E.A.R. GOAP（2006 GDC）](https://gdcvault.com/play/1013459/) | 核实演讲年份和 GOAP 原始资料，重点找战术表现而非算法概论。 |
| Monolith / Middle-earth | [Helping Players Hate Their Nemesis（2018 GDC）](https://gdcvault.com/play/1025150/) | 确认系统如何实际改变战斗对手；只涉及叙事记忆则暂缓。 |
| Naughty Dog / The Last of Us Part II | [How Naughty Dog Defined Melee Attacks in The Last of Us Part II（2021 GDC）](https://www.gamedeveloper.com/design/how-naughty-dog-defined-melee-attacks-and-behaviors-in-i-the-last-of-us-part-ii-i-) | 现入口是媒体报道；找原演讲，核实近战命中与敌人反应规则。 |
| UFC 2009 / 工作室待核 | [UFC 2009 物理与动画（2010 GDC）](https://www.gdcvault.com/play/1012871/) | 核实动画与物理分别负责什么，不能沿用“全物理受击”的旧概括。 |
| Ubisoft / The Lost Crown | [Prince of Persia 3C 移动端（2026 GDC）](https://schedule.gdconf.com/session/ux-mobile-porting-challenges-from-3cs-to-accessibility-prince-of-persia-the-lost-crown-case-study/915038) | 核实移动端讲题及讲者，重点是角色、镜头、控制适配而非泛 UX。 |
| 独立开发 / 通用手感 | [Juice It or Lose It（2012 GDC Europe）](https://www.gdcvault.com/play/1016487/) | 核实会议归属和原始视频；只提取操作反馈，避免与 Game Feel 重复。 |

## 暂缓池（不进入当前整理队列）

这些旧入口保留用于避免重复检索，并非认定分享没有价值。只有找到明确的动作设计内容才重新提升优先级。

| 工作室 / 游戏或主题 | 旧入口（未逐项复核） | 暂缓原因 / 重启条件 |
|---|---|---|
| Call of Duty / 工作室待核 | [CoD 巨型僵尸AI（2024 GDC）](https://gdcvault.com/play/1034464/AI-Summit-Skyscraper-Zombies-Advancing) | 大规模 AI 性能优化不直接等于战斗设计，需先核实行为设计内容。 |
| Epic 等 / 多游戏 AI 复盘 | [2008 AI Postmortems（2009 GDC）](https://aarmstrong.org/notes/game-developers-conference-2009-notes/2008-ai-postmortems-spore-gears-of-war-2-and-bioshock) | 跨游戏拼盘，先定位 Gears of War 2 的掩体战斗片段。 |
| FromSoftware / 关卡工具 | [艾尔登法环 关卡工具「至高工具」（2021 CEDEC）](https://www.gcores.com/articles/141069) | 旧清单的“法环”归属也待核实；通用编辑器工具不优先。 |
| Housemarque / Returnal | [Never The Same Twice: Returnal 程序化关卡（2022 GDC）](https://gdcvault.com/play/1027651/) | 已找到同名官方检索结果，但原入口正文未完整复核；先分辨战斗空间规则与世界生成工程。 |
| Studio MDHR / Cuphead | [Cuphead 动画流程与哲学（2017 GDC）](https://www.gamedeveloper.com/production/video-inside-the-process-and-philosophy-of-animating-i-cuphead-i-) | 手绘动画流程本身不在新增重点，需发现攻击预兆或命中反馈案例。 |
| Ubisoft / Far Cry 2 | [Player's Expression: Far Cry 2 关卡结构（2009 GDC）](http://gdcvault.com/play/1304/) | 先确认是否有具体战斗空间案例，沙盒结构概论不优先。 |

已按用户要求移除的 Relink **持续集成与质量保障、背景美术**不回填待办。新文章不因游戏或公司相同而自动纳入；现有历史收录也不构成扩大范围的先例。

## 控制检索用量的维护方式

1. **先本地去重**：默认只读本文件；用 `rg` 查游戏名、原题、来源 URL 和会话 ID，再按需读取命中文章的 frontmatter。归档只用于定位，不每轮整篇加载。
2. **以问题检索**：每轮选 1 个工作室、1～2 款游戏、至多 5 条线索。先看短搜索摘要，只打开最相关的 3～5 个讲题详情页。不要抓 GDC / CEDEC 全年课程列表或整站导航。
3. **限定来源**：GDC 优先 `gdcvault.com`、会议官方视频；CEDEC 优先 `cedec.cesa.or.jp`、`cedil.cesa.or.jp`，其次开发者公开讲义和工作室官网。CEDEC 九州等地区活动保留准确会议名称。中文报道用于发现线索，不替代原题与年份核验。
4. **两段检索**：第一段只确定“是什么分享、值不值得收”；选定准备写作的条目后，第二段才获取完整视频／字幕／PDF。PDF 先看目录或搜索关键词，仅读相关页；页面可访问不代表讲义／录像可用。
5. **保留短记录**：核实成功就写回正式标题、年份、官方 URL、核对日期、动作设计切入点和下一步。每项约 100～180 个中文字即可，避免把网页正文贴进待办。来源内容摘要与编辑推断分开写。
6. **设停止条件**：同一线索两次定向检索仍没有可靠出处，记录卡点并留在待核实，不继续广撒网。已有 3～5 个材料可用候选时，先整理文章，再扩候选池。
7. **确需批量时**：将指定年份的列表保存本地，用脚本只提取标题、讲者、年份、链接，按关键词过滤并以会话 ID 去重；给模型看过滤后的短表，而不是原始 HTML。默认不建全站爬虫、不下载完整视频。临时页面缓存放 `/tmp`，有复用价值的核实结论写回本文件。

定向查询示例（挑一个使用，不一次跑完）：

```text
site:gdcvault.com/play/ "游戏英文名" "combat"
site:gdcvault.com/play/ "工作室名" "animation"
site:cedec.cesa.or.jp "ゲーム名" "バトル"
site:cedil.cesa.or.jp "ゲーム名" "カメラ"
```

完成文章后，删除这里对应的活动行，将文章链接加入 [scan-archive.md](scan-archive.md) 的工作室分组。查重以“同一分享”为单位，不以“同一游戏”为单位；新讲题若只重复旧结论，优先补充旧文参考资料。

## 2026-09-20 复修后的原始材料深化项

19 篇已有正文的复修内容与来源范围见 [复修记录](article-revision-2026-09-20.md)。下列是进一步补充动态证据的待办，不是新文章占位，也不影响已有节选笔记的明确范围。

- [ ] 《战神》动画、《守望先锋》第一人称、《地平线》机器动画：原录像入口已在各文 `references` 中。仍需获取可核读的完整字幕及动作片段时间点；当前基于现场记录，不据此量测动画帧数。
- [ ] 白金 CEDEC 2017 与身体原理 CEDEC 2013：补取得 CEDiL 完整讲义／录像；现有案例来自现场记录与作者补充。Gamer 的身体原理报道本轮下载失败，新增细节以成功核读的 Famitsu 为依据。
- [ ] 《旷野之息》野外关卡与《神秘海域》动画：补完整演讲的段落定位；当前分别限定为现场记录和报道前半。GAME Watch 明示部分任天堂幻灯片因要求已撤下，不把这些图片重新入库。
- [ ] 《屏幕震动的艺术》：本轮新增核读公开项目镜像（含后续 GMX 转换），尚未获取可核读的完整视频字幕。以后对照录像确认演示版本、最终叙事步骤和爆炸伤害差异，不把镜像自动视作台上原版。
- [ ] 《寂静岭 f》：当前为主讲人公开的演讲节选，补完整录像后再扩展具体敌人、武器与窗口案例；不从节选推测内部参数。
