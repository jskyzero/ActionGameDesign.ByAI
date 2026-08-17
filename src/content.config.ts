import { defineCollection, z } from 'astro:content';

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: z.object({
      // ── 基础 ──
      title: z.string(),                    // 展示标题（中文）
      kind: z.enum(['talk', 'essay']).default('talk'), // talk 分享 / essay 原创
      status: z.enum(['done', 'wip']).default('done'), // 整理状态

      // ── 归类（浏览 / 筛选）──
      section: z.string().optional(),       // 顶层分组（Capcom / PlatinumGames / … / 设计者笔记）
      year: z.number().optional(),          // 年份
      tags: z.array(z.string()).default([]),// 标签（2~4 个）

      // ── 内容（信息密度分层，详见 EXTRACTION.md）──
      insight: z.string().optional(),       // 一级信息 Hook：一句话结论
      corePoints: z
        .array(z.object({ icon: z.string().optional(), title: z.string() }))
        .default([]),                       // 二级信息（可选）

      // ── 出处（谁 / 在哪 / 怎么找）──
      author: z.string().optional(),        // 作者 / 分享人（可含职位）
      role: z.string().optional(),          // 职位（可并入 author）
      project: z.string().optional(),       // 项目 / 作品
      event: z.string().optional(),         // 会议 / 活动（如 GDC、CEDEC）
      titleOriginal: z.string().optional(), // 原标题（演讲 / 文章标题）
      link: z.string().optional(),          // 源链接
      references: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
            type: z.enum(['original', 'translation', 'other']).default('other'),
          })
        )
        .default([]),                       // 参考（翻译 / 延伸）

      description: z.string().optional(),
      image: z.string().optional(),
      sources: z.array(z.string()).default([]),
      date: z.coerce.date().optional(),
    }),
  }),
};
