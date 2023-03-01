// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gnosis Chain',
  tagline: 'Gnosis Chain is one of the first Ethereum sidechains and has stayed true to its values.',
  url: 'https://docs.gnosischain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  stylesheets: [
    { href: 'https://fonts.googleapis.com/css?family=Karla:regular,600,500italic,600italic|Lora:regular,500,italic,500italic,600italic', },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gnosischain', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          editUrl: 'https://github.com/gnosischain/documentation/tree/main',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'updates',
          routeBasePath: 'updates',
          blogTitle: 'Gnosis Updates',
          blogDescription: 'Get Gnosis updates, announcements, changelogs, core dev info!',
          include: ['**/*.md', '**/*.mdx'],
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Recent updates',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: process.env.GOOGLE_ANALYTICS_ID ?? 'G-YVPQSCP6S7', //staging by default
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/gnosis-social-card.jpg',
      announcementBar: {
        id: 'support_us',
        content:
          'Merged successful at block 6,306,357. See <a target="_blank" rel="noopener noreferrer" href="/updates/">Latest Updates</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      navbar: {
        logo: {
          alt: 'Gnosis Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'about',
            label: 'About',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'developers',
            label: 'Developers',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'node',
            label: 'Run a Node',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'bridge',
            label: 'Bridges',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tools',
            label: 'Tools',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'ecosystems',
            label: 'Ecosystems',
          },
          {
            to: 'updates',
            label: 'Updates',
            position: 'left'
          },
          {
            href: 'https://github.com/gnosischain/developers-portal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Developers',
                to: '/developers',
              },
              {
                label: 'Run a Node',
                to: '/node',
              },
              {
                label: 'Bridges',
                to: '/bridges',
              },
              {
                label: 'Tools',
                to: '/tools',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/gnosischain',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/gnosischain',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gnosischain',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Updates',
                to: '/updates',
              },
              {
                label: 'Careers',
                href: 'https://gnosis.io/careers/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gnosischain',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gnosis.`,
      },
      algolia: {
        appId: process.env.ALGOLIA_ID ?? 'key',
        apiKey: process.env.ALGOLIA_KEY ?? 'key',
        indexName: process.env.ALGOLIA_INDEX ?? 'index',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'], //all languages: https://prismjs.com/#supported-languages
      },
      metadata: [
        { name: 'google-site-verification', content: 'P--3KGPeNoGjwcr2ZM1-m42FLjd8WL_Ly7XWTedX2U4' },
      ],
    }),
    
    plugins: [
      [ 
        'ideal-image',
        /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
        ({
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        }),
      ],
      [
        require.resolve('docusaurus-plugin-sass'),{}
      ],
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [ 
            { to: '/updates/2022/12/10/merge', from: '/updates/20221210-merge' },
            { to: '/updates/2022/12/08/temporary-bootnodes', from: '/updates/20221208-temporary-bootnodes' },
            { to: '/updates/2022/12/05/bridges-pause', from: '/updates/202212-bridges-pause' },
          ]
        }
      ]
    ],
};

module.exports = config;
