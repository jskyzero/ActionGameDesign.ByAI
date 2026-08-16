import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // 内容类型：talk = 分享索引（GDC/视频），essay = 原创方法论文章
        kind: z.enum(['talk', 'essay']).default('talk'),
        // 分享的年份（talk 用）
        year: z.number().optional(),
        // 厂商 / 作者（talk 用）
        studio: z.string().optional(),
        // 整理状态：done = 已整理，wip = 待施工（替代旧的 🚧）
        status: z.enum(['done', 'wip']).default('done'),
        // 一句话总结 / 金句
        insight: z.string().optional(),
        // 相关参考：原分享 + 中译等
        references: z
          .array(
            z.object({
              label: z.string(),
              url: z.string(),
              type: z.enum(['original', 'translation', 'other']).default('other'),
            })
          )
          .default([]),
        // 标签（用于标签浏览 / 导图按标签聚合）
        tags: z.array(z.string()).default([]),
        // 原始出处（xmind / drawio / 视频链接等，用于溯源）
        sources: z.array(z.string()).default([]),
        // 配图（可选封面/关键帧，不参与正文）
        image: z.string().optional(),
        description: z.string().optional(),
        // 兼容博客旧的 date 字段（essay 用）
        date: z.coerce.date().optional(),
        category: z.string().optional(),
      }),
    }),
  }),
};
