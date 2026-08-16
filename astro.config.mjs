import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const siteUrl = 'https://act.jsky.wiki';
const siteTitle = '动作游戏分享精选';
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
        { label: '首页', link: '' },
        { label: '目录浏览', link: '/tags' },
        { label: 'Capcom', autogenerate: { directory: 'talks/capcom' } },
        { label: 'PlatinumGames', autogenerate: { directory: 'talks/platinumgames' } },
        { label: 'Santa Monica Studio', autogenerate: { directory: 'talks/santa-monica' } },
        { label: 'FTG 相关', autogenerate: { directory: 'talks/ftg' } },
        { label: '其他', autogenerate: { directory: 'talks/other' } },
        { label: 'Nintendo', autogenerate: { directory: 'talks/nintendo' } },
        { label: '非 GDC', autogenerate: { directory: 'talks/non-gdc' } },
        { label: '设计者笔记', autogenerate: { directory: 'essays' } },
      ],
      lastUpdated: true,
    }),
  ],
});
