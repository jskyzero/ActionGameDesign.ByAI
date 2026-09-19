import { defineCollection } from 'astro:content';
import { docsSchema } from './lib/content-schema.mjs';

export const collections = {
  docs: defineCollection({
    type: 'content',
    schema: docsSchema,
  }),
};
