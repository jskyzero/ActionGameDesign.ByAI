import { defineCollection, z } from 'astro:content';

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),

      // 内容类型：talk = 分享索引（GDC/视频/文章），essay = 原创方法论
      kind: z.enum(['talk', 'essay']).default('talk'),
      // 顶层分组（Capcom / PlatinumGames / Santa Monica Studio / FTG 相关 /
      // 其他 / Nintendo / 非 GDC / 设计者笔记）
      section: z.string().optional(),
      year: z.number().optional(),
      status: z.enum(['done', 'wip']).default('done'),

      // ── 信息密度分层（详见 EXTRACTION.md） ──
      // 一级信息（Hook）：1 句抓人眼球的结论
      insight: z.string().optional(),
      // 二级信息（Core Points）：3 条核心观点
      corePoints: z
        .array(z.object({ icon: z.string().optional(), title: z.string() }))
        .default([]),

      // ── 通用信息卡片（兼容 GDC 演讲 / 普通文章 / 书籍） ──
      author: z.string().optional(),
      role: z.string().optional(),
      project: z.string().optional(),
      source: z.string().optional(),
      sourceTitle: z.string().optional(),
      link: z.string().optional(),

      references: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
            type: z.enum(['original', 'translation', 'other']).default('other'),
          })
        )
        .default([]),
      tags: z.array(z.string()).default([]),
      image: z.string().optional(),
      sources: z.array(z.string()).default([]),
      date: z.coerce.date().optional(),
    }),
  }),
};
