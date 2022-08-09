// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gnosis Chain',
  tagline: 'Documentation',
  url: 'https://developers-portal.staging.gnosisdev.com',
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
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-YVPQSCP6S7', //staging trackingID
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
          alt: 'Gnosis Chain Logo',
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
            sidebarId: 'userguide',
            label: 'User Guide',
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
            title: 'Docs',
            items: [
              {
                label: 'About',
                to: '/about',
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
        copyright: `Copyright © ${new Date().getFullYear()} Gnosis Chain.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'], //all languages: https://prismjs.com/#supported-languages
      },
    }),
    
    plugins: [
      [
        'docusaurus-plugin-includes',
        {
          embeds: [
            {
              key: 'youtube',
              embedFunction: function(code) {
                var params = code.split(',');
                var videoId = params[0];
                var query = params.length > 1 ? params[1] : "";
                return '<iframe width="785" height="440" type="text/html" frameborder="0" src="https://www.youtube.com/embed/' + videoId + '/?' + query + '"></iframe><br>'
              }
            },
            {
              key: 'file',
              embedFunction: function(url) {
                var fileName = url.split(/[\\\/]/).pop();
                return '<p>Download: <a href="' + url + '" target="_blank">' + fileName + '</a></p>';
              }
            }
          ],
        },
      ],
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
    ],
};

module.exports = config;
