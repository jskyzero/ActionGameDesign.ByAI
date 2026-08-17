import { defineCollection, z } from 'astro:content';

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: z.object({
      // ── 基础 ──
      kind: z.enum(['talk', 'essay']).default('talk'), // talk 分享 / essay 原创
      status: z.enum(['done', 'wip']).default('done'), // 整理状态

      // ── 文章主体 ──
      article: z.object({
        title: z.string(),                        // 中文标题
        insight: z.string().optional(),           // 一级信息 Hook：一句话结论
        tags: z
          .array(
            z.object({
              label: z.string(),                  // 标签名
              icon: z.string().optional(),        // 图标（emoji，可选）
            })
          )
          .default([]),                           // 标签（2~4 个）
      }),

      // ── 来源 ──
      source: z
        .object({
          title: z.string().optional(),   // 原标题（演讲 / 文章标题）
          author: z.string().optional(),  // 作者 / 分享人（可含职位）
          authorBio: z.string().optional(), // 作者简介
          url: z.string().optional(),     // 源链接
          year: z.number().optional(),    // 年份
          type: z.string().optional(),    // 来源类型（会议 / 平台，如 GDC、CEDEC、Youtube）
          company: z.string().optional(), // 厂商 / 来源方（如 Capcom、Nintendo）
        })
        .optional(),

      // ── 参考 ──
      references: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
            type: z.enum(['original', 'translation', 'other']).default('other'),
          })
        )
        .default([]),

      // ── 杂项（可选）──
      description: z.string().optional(),
      image: z.string().optional(),
    }),
  }),
};
