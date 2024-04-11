// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gnosis Chain",
  tagline:
    "Gnosis Chain is one of the first Ethereum sidechains and has stayed true to its values.",
  url: "https://docs.gnosischain.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css?family=Karla:regular,600,500italic,600italic|Lora:regular,500,italic,500italic,600italic",
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gnosischain", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          editUrl: "https://github.com/gnosischain/documentation/tree/main",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        blog: {
          path: "updates",
          routeBasePath: "updates",
          blogTitle: "Gnosis Updates",
          blogDescription:
            "Get Gnosis updates, announcements, changelogs, core dev info!",
          include: ["**/*.md", "**/*.mdx"],
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Recent updates",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: process.env.GOOGLE_ANALYTICS_ID ?? "G-YVPQSCP6S7", //staging by default
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/thumbnail.png",
      announcementBar: {
        id: "support_us",
        content:
          'Dencun upgrade is now live on Gnosis Chain. Check out <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gnosischain/status/1767259776101052684">here</a>.',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark', // Set default mode to dark
        disableSwitch: true,  // Disable the theme switch
        respectPrefersColorScheme: false, // Do not change theme based on user preference
      },
      docs:{
        sidebar:{
          hideable: true,
        }
      },
      navbar: {
        logo: {
          alt: "Gnosis Logo",
          src: "img/gnosis-logo-name.svg",
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "about",
            label: "About",
          },
          {
            to: "updates",
            position: "left",
            label: "Updates",
          },
          {
            href: "https://ecosystem.gnosischain.com/",
            position: "left",
            label: "Ecosystem",
          },
           {
            type: "docSidebar",
            position: "left",
            sidebarId: "faq",
            label: "FAQ",
          },
          {
            href: "https://twitter.com/gnosischain",
            html: `
            <svg class="socialButton" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="53" height="53" rx="26.5" fill="white"/>
            <path d="M34.837 13.5H39.286L29.5689 24.5125L41 39.5H32.0517L25.038 30.4125L17.0224 39.5H12.5671L22.9585 27.7188L12 13.5H21.1751L27.5083 21.8062L34.837 13.5ZM33.2742 36.8625H35.7382L19.8329 16H17.1862L33.2742 36.8625Z" fill="#3E6957"/>
            </svg>
            `,      
            position: "right",
          },
          {
            href: "https://t.co/Ug9m92VjGe",
            html: `
            <svg class="socialButton" width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="53" height="53" rx="26.5" fill="white"/>
            <path d="M38.8123 15.6959C38.8025 15.6775 38.7864 15.6631 38.7668 15.6553C36.4975 14.6401 34.1028 13.9163 31.6426 13.5018C31.6202 13.4977 31.5971 13.5006 31.5766 13.5101C31.556 13.5196 31.5391 13.5352 31.5281 13.5546C31.202 14.1316 30.906 14.7244 30.6412 15.3305C27.9892 14.938 25.2916 14.938 22.6396 15.3305C22.3731 14.7228 22.0723 14.1299 21.7387 13.5546C21.7273 13.5356 21.7103 13.5204 21.6898 13.511C21.6694 13.5016 21.6465 13.4983 21.6242 13.5018C19.1637 13.9154 16.7689 14.6393 14.4999 15.6553C14.4805 15.6633 14.4641 15.677 14.453 15.6945C9.91555 22.3012 8.67257 28.7455 9.28233 35.1099C9.28405 35.1255 9.28896 35.1406 9.29678 35.1543C9.30461 35.168 9.31518 35.1801 9.32787 35.1897C11.97 37.0971 14.9252 38.553 18.0675 39.4953C18.0896 39.5018 18.1132 39.5015 18.1352 39.4945C18.1571 39.4875 18.1764 39.4741 18.1903 39.4561C18.8652 38.5608 19.4632 37.6127 19.9782 36.6215C19.9853 36.6079 19.9893 36.593 19.9901 36.5778C19.9908 36.5625 19.9882 36.5473 19.9825 36.5331C19.9768 36.519 19.968 36.5061 19.9568 36.4955C19.9456 36.4848 19.9322 36.4766 19.9175 36.4713C18.9745 36.1195 18.0616 35.6955 17.1873 35.2031C17.1714 35.194 17.1581 35.1812 17.1485 35.1659C17.1388 35.1506 17.1332 35.1332 17.1322 35.1152C17.1311 35.0973 17.1345 35.0794 17.1422 35.0631C17.1499 35.0467 17.1616 35.0325 17.1763 35.0217C17.3597 34.8876 17.5433 34.7482 17.7185 34.6075C17.7341 34.595 17.7529 34.5869 17.7729 34.5843C17.7929 34.5817 17.8132 34.5846 17.8316 34.5926C23.5595 37.1414 29.7608 37.1414 35.4209 34.5926C35.4394 34.584 35.4599 34.5808 35.4802 34.5832C35.5005 34.5856 35.5196 34.5935 35.5355 34.6061C35.7107 34.7469 35.8942 34.8876 36.079 35.0217C36.0938 35.0324 36.1056 35.0465 36.1134 35.0628C36.1212 35.0791 36.1248 35.0969 36.1239 35.1149C36.1229 35.1328 36.1174 35.1502 36.1079 35.1656C36.0984 35.181 36.0852 35.1939 36.0694 35.2031C35.1971 35.6996 34.2833 36.1234 33.3378 36.47C33.3231 36.4754 33.3098 36.4839 33.2987 36.4947C33.2876 36.5055 33.2789 36.5185 33.2733 36.5328C33.2677 36.5471 33.2652 36.5624 33.2661 36.5777C33.2669 36.593 33.2711 36.6079 33.2783 36.6215C33.802 37.6072 34.3991 38.5541 35.0649 39.4545C35.0784 39.473 35.0975 39.4869 35.1195 39.4942C35.1416 39.5015 35.1654 39.5018 35.1877 39.4952C38.3355 38.556 41.296 37.1 43.9414 35.1897C43.9543 35.1806 43.965 35.1688 43.9728 35.1553C43.9807 35.1418 43.9855 35.1267 43.9869 35.1113C44.7169 27.7533 42.7648 21.3619 38.8123 15.6959ZM20.8336 31.2346C19.1091 31.2346 17.6881 29.6916 17.6881 27.7967C17.6881 25.9017 19.0815 24.3585 20.8336 24.3585C22.5994 24.3585 24.0066 25.9151 23.979 27.7965C23.979 29.6916 22.5856 31.2346 20.8336 31.2346ZM32.4634 31.2346C30.739 31.2346 29.318 29.6916 29.318 27.7967C29.318 25.9017 30.7114 24.3585 32.4634 24.3585C34.2293 24.3585 35.6365 25.9151 35.6089 27.7965C35.6089 29.6916 34.2293 31.2346 32.4634 31.2346Z" fill="#325B4B"/>
            </svg>`,   
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Developers",
                to: "/developers",
              },
              {
                label: "Node operators",
                to: "/node",
              },
              {
                label: "Bridges",
                to: "/bridges",
              },
              {
                label: "Tools",
                to: "/tools",
              },
              {
                label: "Terms of use",
                to: "/terms-conditions",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/gnosischain",
              },
              {
                label: "Discord",
                href: "https://discord.gg/gnosischain",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gnosischain",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Updates",
                to: "/updates",
              },
              {
                label: "Careers",
                href: "https://gnosis.io/careers/",
              },
              {
                label: "GitHub",
                href: "https://github.com/gnosischain",
              },
              {
                label: "Gnosis Chain Media Kit",
                href: "https://github.com/gnosischain/media-kit",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gnosis.`,
      },
      algolia: {
        appId: process.env.ALGOLIA_ID ?? "key",
        apiKey: process.env.ALGOLIA_KEY ?? "key",
        indexName: process.env.ALGOLIA_INDEX ?? "index",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"], //all languages: https://prismjs.com/#supported-languages
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "P--3KGPeNoGjwcr2ZM1-m42FLjd8WL_Ly7XWTedX2U4",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ]
    }),

  plugins: [
    [
      "ideal-image",
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
    [require.resolve("docusaurus-plugin-sass"), {}],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { 
            to: "/updates/2022/12/10/merge", 
            from: "/updates/20221210-merge" 
          },
          {
            to: "/updates/2022/12/08/temporary-bootnodes",
            from: "/updates/20221208-temporary-bootnodes",
          },
          {
            to: "/updates/2022/12/05/bridges-pause",
            from: "/updates/202212-bridges-pause",
          },
          {
            to: "/about/networks/chiado",
            from: "/about/networks/chiado",
          },
          {
            to: "/about/networks/mainnet",
            from: "/about/networks/mainnet",
          },
          {
            to: "/about/communication",
            from: "/developers/communication"
          }
        ],
      },
    ],
  ],
};

module.exports = config;
