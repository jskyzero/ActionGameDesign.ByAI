import { z } from 'zod';

// Astro 构建与独立校验共用的内容契约。
export const docsSchema = z.object({
  status: z.enum(['done', 'wip']),
  article: z.object({
    title: z.string().trim().min(1),
    insight: z.string().optional(),
    tags: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string().optional(),
        })
      )
      .max(3, 'article.tags 最多保留 3 个标签')
      .default([]),
  }),
  source: z
    .object({
      title: z.string().optional(),
      author: z.string().optional(),
      authorBio: z.string().optional(),
      url: z.string().optional(),
      year: z.union([z.number(), z.string()]).optional(),
      type: z.string().optional(),
      company: z.string().optional(),
    })
    .optional(),
  references: z
    .array(
      z.object({
        label: z.string(),
        url: z.string(),
        type: z.enum(['original', 'translation', 'other']).default('other'),
      })
    )
    .default([]),
  description: z.string().optional(),
});

