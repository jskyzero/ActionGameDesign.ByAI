import { defineCollection } from 'astro:content';
import { docsSchema } from './lib/content-schema.mjs';

export const collections = {
  // 内容契约包含 generation；变更外置 schema 时同步更新此配置，刷新持久化内容缓存。
  docs: defineCollection({
    type: 'content',
    schema: docsSchema,
  }),
};
