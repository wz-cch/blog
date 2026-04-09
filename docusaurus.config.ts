import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'wz-cch',
  tagline: '平台架構 × AI 應用 × 十年實戰',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://wz-cch.github.io',
  baseUrl: '/blog/',

  organizationName: 'wz-cch',
  projectName: 'blog',

  onBrokenLinks: 'warn',

  markdown: {
    mdx1Compat: {
      comments: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          id: 'tech',
          routeBasePath: 'tech',
          path: './blog/tech',
          blogTitle: '技術文章',
          blogDescription: '深度文，有立場，有結論',
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'notes',
        routeBasePath: 'notes',
        path: './blog/notes',
        blogTitle: '探索筆記',
        blogDescription: '新工具、新 DB、附 GitHub 範例',
        showReadingTime: true,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'life',
        routeBasePath: 'life',
        path: './blog/life',
        blogTitle: '閒聊',
        blogDescription: '純好玩，無壓力',
        showReadingTime: true,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'ignore',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'wz-cch',
      logo: {
        alt: 'wz-cch Logo',
        src: 'img/logo.jpg',
        style: { borderRadius: '50%' },
      },
      items: [
        {
          to: '/tech',
          label: '技術文章',
          position: 'left',
        },
        {
          to: '/notes',
          label: '探索筆記',
          position: 'left',
        },
        {
          to: '/life',
          label: '閒聊',
          position: 'left',
        },
        {
          to: '/about',
          label: '關於我',
          position: 'left',
        },
        {
          href: 'https://www.linkedin.com/in/chien-hsiang-chen-2378b1255/',
          position: 'right',
          className: 'navbar-linkedin-link',
          'aria-label': 'LinkedIn',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} wz-cch`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['go', 'csharp', 'bash', 'yaml', 'sql'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
