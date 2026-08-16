import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // 内容类型：talk = 分享索引（GDC/视频/文章），essay = 原创方法论
        kind: z.enum(['talk', 'essay']).default('talk'),
        // 顶层分组（Capcom / PlatinumGames / Santa Monica Studio / FTG 相关 /
        // 其他 / Nintendo / 非 GDC / 设计者笔记）
        section: z.string().optional(),
        // 发布 / 分享年份
        year: z.number().optional(),
        // 整理状态：done = 已整理，wip = 待施工
        status: z.enum(['done', 'wip']).default('done'),

        // ── 信息密度分层（详见 EXTRACTION.md） ──
        // 一级信息（Hook）：1 句抓人眼球的标题/结论（大字号）
        insight: z.string().optional(),
        // 二级信息（Core Points）：3 条核心观点（图标 + 加粗小标题）
        corePoints: z
          .array(
            z.object({
              icon: z.string().optional(),
              title: z.string(),
            })
          )
          .default([]),

        // ── 通用信息卡片（兼容 GDC 演讲 / 普通文章 / 书籍） ──
        author: z.string().optional(),      // 作者 / 分享人
        role: z.string().optional(),        // 身份 / 职位
        project: z.string().optional(),     // 项目 / 作品
        source: z.string().optional(),      // 来源 / 出处（GDC 2017 / 知乎 / 杂志）
        sourceTitle: z.string().optional(), // 原标题（演讲标题 / 文章标题）
        link: z.string().optional(),        // 源链接

        // 相关参考：翻译 / 延伸阅读等
        references: z
          .array(
            z.object({
              label: z.string(),
              url: z.string(),
              type: z.enum(['original', 'translation', 'other']).default('other'),
            })
          )
          .default([]),
        // 标签（用于图片流筛选）
        tags: z.array(z.string()).default([]),
        // 封面图（图片流用）
        image: z.string().optional(),
        description: z.string().optional(),
        // 原始出处（xmind / drawio / 链接），用于溯源
        sources: z.array(z.string()).default([]),
        date: z.coerce.date().optional(),
      }),
    }),
  }),
};
