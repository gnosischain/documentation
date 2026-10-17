// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gnosis Chain",
  tagline:
    "Build apps, payments and infrastructure on Gnosis Chain: an EVM network with 5-second blocks, near-zero fees and a stablecoin as gas.",
  url: "https://docs.gnosischain.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",
  scripts: [
    {
      src: "/js/analytics-consent.js",
      async: true,
    },
  ],
  customFields: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID ?? "G-YVPQSCP6S7",
  },

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
        // Updates blog archived to /archives/Updates (not published).
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        // gtag: {
        //   trackingID: process.env.GOOGLE_ANALYTICS_ID ?? "G-YVPQSCP6S7", // staging by default
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/thumbnail.png",
      announcementBar: {
        id: "eez_launch_partner_q1_2027",
        content:
          'Gnosis EEZ launches in Q1 2027. Deploy on Gnosis Chain now, no redeployment at the fork. <a href="/launch-partner">Become a launch partner</a>',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark", // Set default mode to dark
        disableSwitch: false, // Enable the theme switch
        respectPrefersColorScheme: false, // Do not change theme based on user preference
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: "Gnosis Chain",
          src: "img/gnosis.svg",
          srcDark: "img/gnosis.svg",
          width: 118,
          height: 26,
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "eez",
            label: "Gnosis EEZ",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "launchPartner",
            label: "Become a launch partner",
          },
          // The Gnosis Chain doc set, one tab per section
          { type: "docSidebar", position: "left", sidebarId: "gnosisChain", label: "Gnosis Chain" },
          { type: "docSidebar", position: "left", sidebarId: "developerGuides", label: "Developers" },
          { type: "docSidebar", position: "left", sidebarId: "bridges", label: "Bridges" },
          { type: "docSidebar", position: "left", sidebarId: "tools", label: "Tools" },
          { type: "docSidebar", position: "left", sidebarId: "technicalGuides", label: "Knowledge hub" },
          { type: "docSidebar", position: "left", sidebarId: "validators", label: "Validators" },
          { type: "docSidebar", position: "left", sidebarId: "faq", label: "FAQ" },
          {
            href: "https://build.gnosischain.com/",
            position: "right",
            label: "Ecosystem",
          },
          {
            href: "https://faucet.chiadochain.net",
            position: "right",
            label: "Faucet",
          },
          {
            href: "https://github.com/gnosischain",
            position: "right",
            "aria-label": "GitHub",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M17 8a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.43v-1.6c-2.5.54-3.03-1.06-3.03-1.06-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.62.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.09-2.39 0 0 .75-.24 2.47.92a8.6 8.6 0 0 1 4.5 0c1.72-1.16 2.47-.92 2.47-.92.49 1.24.18 2.16.09 2.39.58.63.93 1.44.93 2.42 0 3.46-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.63.43A9 9 0 0 0 17 8Z"/></svg>`,
          },
          {
            href: "https://twitter.com/gnosischain",
            position: "right",
            "aria-label": "X",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M21.6 10h2.4l-5.25 6 6.15 8.1h-4.8l-3.78-4.93L12 24.1H9.6l5.6-6.4L9.3 10h4.92l3.42 4.5L21.6 10Zm-.84 12.66h1.33L13.5 11.3h-1.43l8.69 11.36Z"/></svg>`,
          },
          {
            href: "http://discord.gg/gnosis",
            position: "right",
            "aria-label": "Discord",
            html: `<svg class="socialButton" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="32.5" height="32.5" rx="8"/><path d="M23.4 11.3a15 15 0 0 0-3.7-1.15l-.47.96a13.9 13.9 0 0 0-4.46 0l-.47-.96a15 15 0 0 0-3.7 1.15C8.24 14.83 7.6 18.3 7.92 21.7a15.2 15.2 0 0 0 4.57 2.3c.37-.5.7-1.03.98-1.59a9.8 9.8 0 0 1-1.55-.75l.38-.3a10.8 10.8 0 0 0 9.4 0l.38.3c-.5.3-1.02.55-1.55.75.28.56.61 1.09.98 1.59a15.2 15.2 0 0 0 4.57-2.3c.38-3.95-.65-7.38-2.68-10.4ZM13.9 19.6c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Zm6.2 0c-.9 0-1.63-.82-1.63-1.83s.72-1.84 1.63-1.84 1.65.83 1.63 1.84c0 1.01-.72 1.83-1.63 1.83Z"/></svg>`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Gnosis EEZ",
            items: [
              { label: "What is Gnosis EEZ", to: "/eez" },
              { label: "Now vs Gnosis EEZ", to: "/eez/gnosis-eez" },
              { label: "How it works", to: "/eez/how-it-works" },
              { label: "Timeline", to: "/eez/timeline" },
              { label: "Transition FAQ", to: "/eez/faq" },
              { label: "Become a launch partner", to: "/launch-partner" },
            ],
          },
          {
            title: "Build",
            items: [
              { label: "Deploy now", to: "/launch-partner/deploy-now" },
              { label: "0-1 guides", to: "/developers/guides" },
              { label: "Demo projects", to: "/category/demo-projects" },
              { label: "Useful contracts", to: "/developers/Usefulcontracts" },
              { label: "Tools", to: "/tools" },
            ],
          },
          {
            title: "Network",
            items: [
              { label: "Network details", to: "/about/networks/" },
              { label: "Chiado testnet", to: "/about/networks/chiado" },
              { label: "GNO and xDai", to: "/about/tokens" },
              { label: "Chain specs", to: "/about/specs" },
              { label: "Validators and node operators", to: "/validators/eez-transition" },
            ],
          },
          {
            title: "Community",
            items: [
              { label: "Discord", href: "https://discord.gg/gnosis" },
              { label: "Telegram", href: "https://t.me/gnosischain" },
              { label: "X", href: "https://twitter.com/gnosischain" },
              { label: "GitHub", href: "https://github.com/gnosischain" },
              { label: "Ecosystem", href: "https://build.gnosischain.com/" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "FAQ", to: "/faq/others" },
              { label: "Gnosisscan", href: "https://gnosisscan.io" },
              { label: "Gnosis Bridge app", href: "https://bridge.gnosischain.com" },
              { label: "Careers", href: "https://gnosis.io/careers/" },
              { label: "Media kit", href: "https://www.gnosis.io/press" },
              { label: "Terms of use", to: "/terms-conditions" },
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
        additionalLanguages: ["solidity"], // all languages: https://prismjs.com/#supported-languages
      },
      metadata: [
        {
          name: "google-site-verification",
          content: "P--3KGPeNoGjwcr2ZM1-m42FLjd8WL_Ly7XWTedX2U4",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    }),

  plugins: [
    [require.resolve("docusaurus-plugin-sass"), {}],
    // The developer overview was archived; the quickstart is the developer entry point. Both casings
    // were linked (the file was Overview.md, links used /developers/overview). They differ
    // only by case, so they are written here rather than by plugin-client-redirects: on a
    // case-insensitive disk (macOS) both resolve to one file, and that plugin fails on the clash.
    require("./redirects/case-insensitive-redirects")({
      "/developers/Overview": "/developers/quickstart",
      "/developers/overview": "/developers/quickstart",
    }),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Launch partner moved out of the Gnosis EEZ section to its own page
          {
            to: "/launch-partner",
            from: "/eez/launch-partner",
          },
          // Updates blog archived to /archives/Updates; nothing under /updates is published
          {
            to: "/",
            from: [
              "/updates",
              "/updates/20221210-merge",
              "/updates/20221208-temporary-bootnodes",
              "/updates/202212-bridges-pause",
              // Every post, tag, page and archive URL the blog published on dev
              ...require("./redirects/archived-updates.json"),
            ],
          },
          // The Gnosisscan verification page was removed; the section index covers verification
          {
            to: "/developers/Verify Smart Contracts/",
            from: "/developers/Verify Smart Contracts/gnosisscan",
          },
          // "About Gnosis Chain" is the Overview page of the Gnosis Chain section
          {
            to: "/about",
            from: "/start/about-gnosis-chain",
          },
          // Run a node archived to /archives/Node; the section is no longer published.
          // Node and validator readers land on the runbook for the move to Gnosis EEZ.
          {
            to: "/validators/eez-transition",
            from: [
              "/node",
              "/node/architecture",
              "/node/rewards-penalties",
              "/node/Node Tools/dappnode",
              "/node/Node Tools/eth-docker",
              "/node/Node Tools/sedge",
              "/node/Node Tools/stereum",
              "/node/management/migrating-validator",
              "/node/management/monitoring-node",
              "/node/management/monitoring-validators",
              "/node/management/voluntary-exit",
              "/node/management/withdrawals",
              "/node/management/withdrawals/bls-to-execution-change",
              "/node/management/withdrawals/claiming-your-gno",
              "/node/management/withdrawals/switch-to-compounding",
              "/node/manual",
              "/node/manual/configure-server",
              "/node/manual/beacon/lighthouse",
              "/node/manual/beacon/lodestar",
              "/node/manual/beacon/nimbus",
              "/node/manual/beacon/teku",
              "/node/manual/execution/erigon",
              "/node/manual/execution/geth",
              "/node/manual/execution/nethermind",
              "/node/manual/execution/reth",
              "/node/manual/validator/deposit",
              "/node/manual/validator/verify",
              "/node/manual/validator/generate-keys",
              "/node/manual/validator/generate-keys/cli",
              "/node/manual/validator/generate-keys/wagyu",
              "/node/manual/validator/Run Client/lighthouse",
              "/node/manual/validator/Run Client/lodestar",
              "/node/manual/validator/Run Client/nimbus",
              "/node/manual/validator/Run Client/teku",
              "/node/participate-validator/liquid-staking",
              "/node/participate-validator/swarm",
              "/node/participate-validator/swarm/a-quickstart-swarm",
              "/node/participate-validator/swarm/b-docker-swarm",
              "/node/participate-validator/swarm/c-dappnode-swarm",
              // Generated category pages for the archived node sections
              "/category/management",
              "/category/node-tools",
              "/category/participate-as-a-validator",
              "/category/step--2---run-execution-client",
              "/category/step--3---run-consensus-client",
              "/category/step--4---run-validator",
            ],
          },
          // Bridges FAQs merged into the master FAQ as its Bridging subsection
          {
            to: "/faq/others",
            from: "/faq/bridges",
          },
          // Node FAQs and Validators FAQ archived to /archives/FAQ
          {
            to: "/faq/others",
            from: [
              "/faq/node",
              "/faq/Node FAQs/changingwc",
              "/faq/Node FAQs/depositWithdrawalReward",
              "/faq/Node FAQs/generalQuestions",
              "/faq/Node FAQs/monitoring",
              "/faq/Node FAQs/offlineAndSyncIssue",
              "/faq/Node FAQs/runningNode",
              "/faq/Node FAQs/staking",
            ],
          },
          {
            to: "/about/communication",
            from: "/developers/communication",
          },
          // Optimism on Gnosis was deprecated in March 2023; page archived to /archives/Optimism
          {
            to: "/about/networks/",
            from: "/about/networks/optimism",
          },
          // Truffle was sunset by Consensys in 2023; pages archived to /archives/Truffle
          {
            to: "/developers/dev-environment/hardhat",
            from: "/developers/dev-environment/truffle",
          },
          {
            to: "/developers/Verify Smart Contracts/",
            from: "/developers/Verify Smart Contracts/truffle",
          },
        ],
      },
    ],
    [
      "docusaurus-plugin-generate-llms-txt",
      {
        outputFile: "llms.txt", // defaults to llms.txt if not specified
      },
    ],
  ],
};

module.exports = config;
