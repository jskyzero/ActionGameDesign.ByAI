import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const siteUrl = 'https://act.jsky.wiki';
const siteTitle = '动作游戏知识库';
const repositoryUrl = 'https://github.com/jskyzero/GDC.ACT';

export default defineConfig({
  site: siteUrl,
  integrations: [
    starlight({
      title: siteTitle,
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
          dir: 'ltr',
        },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: repositoryUrl }],
      sidebar: [
        { label: '知识库', link: '' },
        { label: '思维导图', link: '/mindmap' },
        { label: '标签浏览', link: '/tags' },
        {
          label: '分享索引（GDC）',
          items: [
            { label: 'Capcom', autogenerate: { directory: 'talks/capcom' } },
            { label: 'PlatinumGames', autogenerate: { directory: 'talks/platinumgames' } },
            { label: 'Santa Monica Studio', autogenerate: { directory: 'talks/santa-monica' } },
            { label: 'FTG 相关', autogenerate: { directory: 'talks/ftg' } },
          ],
        },
        { label: '方法论文章', autogenerate: { directory: 'essays' } },
      ],
      lastUpdated: true,
    }),
  ],
});
