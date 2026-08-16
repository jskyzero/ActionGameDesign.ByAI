import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jskyzero.github.io',
  base: '/ActionGameDesign.ByAI',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
