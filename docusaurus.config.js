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
          'Gnosis Chain is becoming Gnosis EEZ. Deploy now, with no redeployment at the fork. <a href="/launch-partner">Become a launch partner</a>',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "light", // Light by default, per the Gnosis visual identity
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
          // Canonical Gnosis Chain lockup: ink + Emerald 700 on light, paper + Fresh Green on dark
          src: "img/brand/gnosis-chain-on-light.svg",
          srcDark: "img/brand/gnosis-chain-on-dark.svg",
          width: 176,
          height: 26,
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "eez",
            label: "Gnosis EEZ",
          },
          // The Gnosis Chain doc set, one tab per section
          { type: "docSidebar", position: "left", sidebarId: "gnosisChain", label: "Gnosis Chain" },
          { type: "docSidebar", position: "left", sidebarId: "developerGuides", label: "Developers" },
          { type: "docSidebar", position: "left", sidebarId: "bridges", label: "Bridges" },
          // Tools, technical guides, validators and FAQ, sectioned in its left sidebar
          { type: "docSidebar", position: "left", sidebarId: "knowledgeHub", label: "Knowledge hub" },
          // No right-hand links: Faucet, Bridge app and Ecosystem live in the left sidebars (sidebars.js).
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
    // The old developer overview now lands on the Developer guides overview. Both casings
    // were linked (the file was Overview.md, links used /developers/overview). They differ
    // only by case, so they are written here rather than by plugin-client-redirects: on a
    // case-insensitive disk (macOS) both resolve to one file, and that plugin fails on the clash.
    require("./redirects/case-insensitive-redirects")({
      "/developers/Overview": "/developers",
      "/developers/overview": "/developers",
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
          // Validator withdrawals and voluntary exit moved to the Validators section
          { to: "/validators/withdrawals", from: "/node/management/withdrawals" },
          ...["bls-to-execution-change", "claiming-your-gno", "switch-to-compounding"].map((page) => ({
            to: `/validators/withdrawals/${page}`,
            from: `/node/management/withdrawals/${page}`,
          })),
          { to: "/validators/voluntary-exit", from: "/node/management/voluntary-exit" },
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
    [
      // A .md copy of every page, used by the "Copy page" menu next to each doc title.
      require.resolve("./src/plugins/page-markdown.mjs"),
      {
        content: {
          includePages: true,
          relativePaths: false,
          excludeRoutes: ["/search", "/live-samples/**"],
        },
      },
    ],
  ],
};

module.exports = config;
