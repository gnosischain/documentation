// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gnosis Chain',
  tagline: 'Documentation',
  url: 'https://docs.gnosischain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gnosischain/documentation/tree/main',
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
          /*{
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'userguide',
            label: 'User Guide',
          },*/
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
                href: 'https://discord.gg/VQb3WzsywU',
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
      //see: https://github.com/rdilweb/docusaurus-plugin-remote-content#docusaurus-plugin-remote-content
      [
        "docusaurus-plugin-remote-content",
        {
            name: "validator-data-generator-readme",
            sourceBaseUrl: "https://raw.githubusercontent.com/gnosischain/validator-data-generator/master/",
            outDir: "docs/node/guide/validator/generate-keys-cli-tool",
            documents: ["README.md"],
            modifyContent(filename, content) {
              if (filename.includes("README")) {
                  return { content: "# CLI Tool \n\n #" + content }
              }
              return undefined
          },
        },
      ],
    ],
};

module.exports = config;
