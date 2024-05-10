import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Copper App SDK',
  tagline: 'Add embedded apps to Copper',

  url: 'https://docs.copper.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ProsperWorks',
  projectName: 'copper-sdk',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['classic'],

  plugins: [
    [
      'content-docs',
      {
        routeBasePath: '/',
        editUrl: 'https://github.com/ProsperWorks/copper-sdk/',
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Copper App SDK',
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Copper CRM`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
