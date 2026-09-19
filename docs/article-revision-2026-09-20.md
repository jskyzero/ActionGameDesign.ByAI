# 2026-09-20：19 篇 GPT-6 Astra 文章复修记录

范围以复修前 `dd34c9f` 中的 `generation.model` 为准，19 篇全部改写。学习样板是 DeepSeek-V4-Pro 署名的《战神》战斗、《对马岛》近战、《尼尔》制作谈与《街霸 5》美术文章；学习组织与细节保留方式，不把历史正文当作事实证据。

## 发现的问题与规范变化

旧稿普遍把复杂分享压成三个小节，省略失败方案、具体条件、实现步骤和代价。部分官方长讲义已有公开入口，但正文仍只留下少量概括；仅抽取 PDF 文本还会漏掉图中的前后对比。

已将核读、章节组织、事实与推论区分、图像阅读及复修验收写入 [EXTRACTION.md 第 6 节](EXTRACTION.md#6-从既有详实文章沉淀的复修标准)，同步修正 [PROMPTS.md](PROMPTS.md) 中“未写详细笔记也标 done”的错误，以及 [KNOWLEDGE.md](KNOWLEDGE.md) 中把历史模型视觉限制泛化的表述。

## 逐篇新增的有效信息

| 文章 | 本轮补充 | 依据与边界 |
| --- | --- | --- |
| [阿特柔斯](../src/content/docs/santa-monica/2019-gow-atreus-companion.mdx) | 多轮原型、可见站位、跟进对应、受击层级、符文箭职责 | 官方 104 页讲义，按相关页定位 |
| [艾莉](../src/content/docs/gdc/2014-last-of-us-ellie-buddy-ai.mdx) | 三组导航射线、跟随平滑、共享掩体、抓取保护、开火许可与提示可靠性 | 作者 Game AI Pro 2 第 35 章，非录像逐字稿 |
| [地平线 AI](../src/content/docs/gdc/2018-horizon-ai-movement.mdx) | 导航迁移、矩形避障、路径曲率、动作表、近战阶段与注视 | 开发者 PPTX；明确回旋线未用于本作 |
| [Relink 战斗](../src/content/docs/cygames/2026-relink-battle-design.mdx) | 大师风格、两三天原型、多人镜头、行为树与 FSM、辅助输入 | 官方 100 页图像讲义，核读关键流程与截图 |
| [Relink 特效](../src/content/docs/cygames/2026-relink-vfx-readability.mdx) | 空间锚点、明度分配、余效、近镜头限制与密度分类 | 官方 125 页图像讲义；加入 3 张有来源说明的原页图 |
| [恶魔之魂](../src/content/docs/fromsoftware/2009-demons-souls-design.mdx) | 死亡的三个条件、资源差异、学习复现、异步与直接互助 | CEDEC 官方 26 页讲义 |
| [白金动作动画](../src/content/docs/platinumgames/2017-action-animation.mdx) | 敌人定位、临时动画职责、待机对比、跳跃修正、受击奖励 | CGWORLD 现场记录与同作者官方日志；完整讲义未取得 |
| [身体原理](../src/content/docs/cedec/2013-fighting-animation-body-mechanics.mdx) | 姿态、支撑、反向预备、回旋半径、运动连锁与夸张边界 | Famitsu 现场记录；力学表述限定为动画观察方法 |
| [旷野之息地形](../src/content/docs/nintendo/2017-botw-field-guidance.mdx) | 点线引导失败、引力、三角尺度、路线前后版与距离密度时间 | Famitsu 与 GAME Watch 现场记录；未转载被要求撤下的幻灯片 |
| [王国之泪](../src/content/docs/nintendo/2024-totk-physics-sound.mdx) | 动画驱动物体局限、车轮悬挂、锅的关节、质量与声音组合 | 讲者采访、现场记录与任天堂补充；区分来源 |
| [战神动画](../src/content/docs/santa-monica/2019-gow-animation-reinvention.mdx) | 旧比例的用途、父子原型、动捕分工、普通斧头迭代与地面动作 | GameRevolution 现场记录；不推断判定与取消参数 |
| [地平线机器动画](../src/content/docs/gdc/2018-horizon-machine-animation.mdx) | 雷霆牙原型、性格、跨动物参考、鳄鱼方案验证与攻击精修 | 两份现场记录，非逐帧录像分析 |
| [守望先锋](../src/content/docs/gdc/2017-overwatch-first-person-animation.mdx) | 视野约束、视角变形、步态、换弹性格与功能关系 | Inven 现场记录、官方摘要；不把动画变形当判定变化 |
| [神秘海域](../src/content/docs/gdc/2010-uncharted-animation-player-control.mdx) | 局部集合、混合与叠加区别、IK、情境资源管理 | GAME Watch 前半，不混入另一场角色管线分享 |
| [怪物猎人](../src/content/docs/capcom/2025-monster-hunter-action-evolution.mdx) | 回复时机代价、两层伤害信息、无缝地图变化与骑乘职责 | Game Makers 系列回顾节选 |
| [迪士尼关卡](../src/content/docs/gdc/2009-disneyland-level-design.mdx) | 地标接力、灯光、主支路、危险预告、恢复空间与功能辨识 | 原幻灯片视觉核读及现场笔记 |
| [屏幕震动](../src/content/docs/other/2013-art-of-screenshake.mdx) | 演示步骤、命中链路、镜头分层、停顿、武器延迟与战场痕迹 | 新取得项目镜像并核读脚本；没有执行程序，不冒充原录像逐帧笔记 |
| [DOOM Eternal](../src/content/docs/other/2020-doom-eternal-combat.mdx) | 机动性导致失压、预兆提速、场地尺度、过渡段落与学习 | Hugo Martin 发行前采访，非 GDC 演讲 |
| [寂静岭 f](../src/content/docs/gdc/2026-silent-hill-f-melee.mdx) | 期待累积、资源信息差、专注时机、主动释放与职责迁移 | 主讲人公开节选，未取得完整录像 |

## 验证与记录

- 每篇各自执行 `npm run validate`、`npm run build`、`git diff --check`，通过后单独提交并推送。
- 19 篇首次入库时间与复修前完全一致，模型仍如实为 GPT-6 Astra。
- 三张配图使用本地资源，包含替代文本、作者、页码与图意，正文能够独立阅读。构建预览在 390px 与 1440px 宽度均确认图片加载成功且没有横向溢出。
- 未核读的完整视频与讲义范围继续记录在 [scan-todo.md](scan-todo.md)，不把“有原视频链接”写成“已核读完整视频”。
