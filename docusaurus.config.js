// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neto.dev',
  tagline: 'Notas de um dev curioso',
  favicon: 'img/favicon.svg',

  // Fontes do tema "Caderno" (tokens em src/css/custom.css)
  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;600&display=swap',
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://matheussn.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'matheussn',
  projectName: 'matheussn.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // .md files are parsed as CommonMark (so `<!-- truncate -->` works); .mdx as MDX
  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    localeConfigs: {
      'pt-BR': {label: 'Português (Brasil)', htmlLang: 'pt-BR'},
      en: {label: 'English', htmlLang: 'en'},
    },
  },

  plugins: ['./plugins/latest-posts'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: 'blog',
          path: './blog',
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Todos os posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Tags are declared inline in each post (no tags.yml)
          onInlineTags: 'ignore',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Neto.dev',
        logo: {
          alt: 'Neto.dev',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 36,
          height: 36,
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/archive', label: 'Arquivo', position: 'left'},
          {to: '/blog/tags', label: 'Tags', position: 'left'},
          {type: 'localeDropdown', position: 'right'},
          {
            href: 'https://github.com/matheussn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // Sem tradução em i18n/*/footer.json, para o ano continuar dinâmico
        copyright: `© ${new Date().getFullYear()} Matheus Neto`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.nightOwl,
      },
    }),
};

export default config;
