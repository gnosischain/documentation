/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

let bridgeTutorials = [
  "bridges/tutorials/using-amb",
  {
    type: "category",
    label: "Using the OmniBridge",
    collapsed: true,
    link: { type: "doc", id: "bridges/tutorials/using-omnibridge/README" },
    items: [
      "bridges/tutorials/using-omnibridge/token-registry",
      "bridges/tutorials/using-omnibridge/specific-tokens",
      "bridges/tutorials/using-omnibridge/debugging-omnibridge-txns",
      "bridges/tutorials/using-omnibridge/safe",
      "bridges/tutorials/using-omnibridge/advanced",
      "bridges/tutorials/using-omnibridge/bnb-chain",
    ],
  },
  {
    type: "category",
    label: "Using the xDai Bridge",
    collapsed: true,
    link: { type: "doc", id: "bridges/tutorials/using-xdai-bridge/README" },
    items: [
      "bridges/tutorials/using-xdai-bridge/safe",
      "bridges/tutorials/using-xdai-bridge/alternate-receiver",
      "bridges/tutorials/using-xdai-bridge/custom-rpc",
      "bridges/tutorials/using-xdai-bridge/no-ui",
      "bridges/tutorials/using-xdai-bridge/troubleshooting",
    ],
  },
];

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [
    {
      type: "category",
      label: "Overview",
      link: { type: "doc", id: "specs/README" },
      collapsed: false,
      items: [
        { type: "link", label: "Updates", href: "/updates" },
        "about/overview/community",
        "about/overview/media-kit",
      ],
    },
    {
      type: "category",
      label: "Networks",
      link: { type: "doc", id: "about/networks/README" },
      collapsed: false,
      items: ["about/networks/mainnet", "about/networks/chiado"],
    },
    {
      type: "category",
      label: "Tokens",
      link: { type: "doc", id: "about/tokens/README" },
      collapsed: false,
      items: ["about/tokens/xdai", "about/tokens/gno"],
    },
    {
      type: "category",
      label: "Protocol Specs",
      collapsed: false,
      link: { type: "doc", id: "specs/README" },
      items: [
        {
          type: "category",
          label: "Beacon Chain",
          collapsed: true,
          link: { type: "doc", id: "specs/gbc/README" },
          items: ["specs/gbc/upgradeability"],
        },
        {
          type: "category",
          label: "Consensus",
          collapsed: true,
          link: { type: "doc", id: "specs/consensus/README" },
          items: [
            "specs/consensus/aura",
            "specs/consensus/posdao",
            "specs/consensus/proof-of-stake",
          ],
        },
        {
          type: "category",
          label: "Hard Forks",
          collapsed: true,
          link: { type: "doc", id: "specs/hard-forks/README" },
          items: [
            "specs/hard-forks/shanghai-capella",
            "specs/hard-forks/merge",
            "specs/hard-forks/21735000",
            "specs/hard-forks/19040000",
            "specs/hard-forks/16101500",
            "specs/hard-forks/9186425",
            "specs/hard-forks/7298030",
            "specs/hard-forks/2508800",
            "specs/hard-forks/1604400",
            "specs/hard-forks/spec.json-update",
            "specs/hard-forks/eip-1559",
          ],
        },
        "specs/bug-bounty",
        "specs/security-audit",
      ],
    },
    ["about/faq/FAQ"],
  ],

  ecosystems: [
    "ecosystems/README",
    "ecosystems/daos",
    "ecosystems/defi",
    "ecosystems/enterprise",
    "ecosystems/games",
    "ecosystems/infrastructure",
    "ecosystems/nfts",
    "ecosystems/tools-resources",
  ],

  developers: [
    "developers/README",
    {
      type: "category",
      label: "Deploying a Smart Contract",
      collapsed: false,
      link: { type: "doc", id: "developers/smart-contracts/README" },
      items: [
        "developers/smart-contracts/truffle",
        "developers/smart-contracts/hardhat",
        "developers/smart-contracts/remix",
        "developers/smart-contracts/foundry",
        "developers/smart-contracts/cookbook",
      ],
    },
    {
      type: "category",
      label: "Interacting with Gnosis",
      collapsed: true,
      link: {
        slug: "developers/interact",
        type: "generated-index",
        title: "Interacting with Gnosis",
      },
      items: [
        "developers/interact/metamask",
        "developers/interact/web3-js",
        "developers/interact/ethers-js",
        "developers/interact/rainbowkit-wagmi",
        "developers/interact/dynamic",
      ],
    },
    {
      type: "category",
      label: "Building DApps",
      collapsed: false,
      link: { type: "doc", id: "developers/building/first-contract" },
      items: [
        "developers/building/first-contract",
        "developers/building/full-stack-dapp",
        "developers/building/token",
        "developers/building/nft",
      ],
    },
    {
      type: "category",
      label: "Building Account Abstraction",
      collapsed: false,
      link: { type: "doc", id: "developers/account-abstraction/safe" },
      items: [
        "developers/account-abstraction/safe",
        "developers/account-abstraction/gelato",
        "developers/account-abstraction/particle-network",
      ],
    },
    {
      type: "category",
      label: "Verify Contracts",
      collapsed: false,
      link: { type: "doc", id: "developers/verify/README" },
      items: [
        "developers/verify/blockscout",
        "developers/verify/gnosisscan",
        "developers/verify/truffle",
        "developers/verify/sourcify",
      ],
    },
    {
      type: "category",
      label: "Bridge Tutorials",
      link: {
        slug: "developers/tutorials",
        type: "generated-index",
        title: "Tutorials",
      },
      collapsed: false,
      items: bridgeTutorials,
    },
    {
      type: "link",
      label: "Get Help!",
      href: "https://discord.gg/gnosischain",
    },
  ],

  node: [
    {
      type: "category",
      label: "Overview",
      link: { type: "doc", id: "node/README" },
      collapsed: false,
      items: ["node/architecture", "node/rewards-penalties", "node/faq"],
    },
    {
      type: "category",
      label: "1-click Tools",
      link: {
        slug: "node/tools",
        type: "generated-index",
        title: "1-click Tools",
      },
      collapsed: false,
      items: [
        "node/tools/dappnode",
        "node/tools/eth-docker",
        "node/tools/sedge",
        "node/tools/stereum",
        {
          type: "link",
          label: "ValidateGnosis",
          href: "https://www.validategnosis.com/",
        },
      ],
    },
    {
      type: "category",
      label: "Manual setup",
      link: { type: "doc", id: "node/manual/README" },
      collapsed: false,
      items: [
        "node/manual/configure-server",
        {
          type: "category",
          label: "Step 2: Run Execution Client",
          link: {
            slug: "node/manual/execution",
            type: "generated-index",
            title: "Execution Clients",
          },
          collapsed: true,
          items: [
            "node/manual/execution/nethermind",
            "node/manual/execution/besu",
            "node/manual/execution/erigon",
            "node/manual/execution/geth",
            "node/manual/execution/openethereum",
          ],
        },
        {
          type: "category",
          label: "Step 3: Run Beacon Node",
          link: {
            slug: "node/manual/beacon",
            type: "generated-index",
            title: "Beacon Clients",
          },
          collapsed: true,
          items: [
            "node/manual/beacon/lodestar",
            "node/manual/beacon/teku",
            "node/manual/beacon/lighthouse",
            "node/manual/beacon/nimbus",
            "node/manual/beacon/prysm",
          ],
        },
        {
          type: "category",
          label: "Step 4: Run Validator",
          link: {
            slug: "node/manual/validator",
            type: "generated-index",
            title: "Run Validator",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Generate Validator Keys",
              link: {
                type: "doc",
                id: "node/manual/validator/generate-keys/README",
              },
              collapsed: true,
              items: [
                "node/manual/validator/generate-keys/cli/README",
                "node/manual/validator/generate-keys/wagyu",
              ],
            },
            {
              type: "category",
              label: "Run Validator",
              link: {
                slug: "node/manual/validator/run",
                type: "generated-index",
                title: "Run Validator",
              },
              collapsed: true,
              items: [
                "node/manual/validator/run/lodestar",
                "node/manual/validator/run/teku",
                "node/manual/validator/run/lighthouse",
                "node/manual/validator/run/nimbus",
              ],
            },
            "node/manual/validator/deposit",
            "node/manual/validator/verify",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Managing your Node",
      link: {
        slug: "node/management/",
        type: "generated-index",
        title: "Managing your Node",
      },
      collapsed: false,
      items: [
        "node/management/monitoring-node",
        "node/management/migrating-validator",
        "node/management/voluntary-exit",
        "node/management/withdrawals",
      ],
    },
  ],

  tools: [
    "tools/README",
    {
      type: "category",
      label: "Explorers",
      link: { type: "doc", id: "tools/explorers/README" },
      collapsed: true,
      items: [
        "tools/explorers/blockscout",
        {
          type: "link",
          label: "Gnosisscan",
          href: "https://gnosisscan.io/",
        },
        {
          type: "link",
          label: "Beacon Chain",
          href: "https://gnosischa.in/",
        },
      ],
    },
    {
      type: "category",
      label: "RPC Providers",
      collapsed: true,
      link: { type: "doc", id: "tools/rpc/README" },
      items: [
        {
          type: "link",
          label: "Ankr API",
          href: "https://app.ankr.com/",
        },
        {
          type: "link",
          label: "Chainnodes",
          href: "https://www.chainnodes.org/",
        },
        {
          type: "link",
          label: "Blast",
          href: "https://blastapi.io/public-api/gnosis",
        },
        {
          type: "link",
          label: "GetBlock",
          href: "https://getblock.io/",
        },
        {
          type: "link",
          label: "Pokt",
          href: "https://docs.pokt.network/home/use/public-rpc/gnosis-chain",
        },
        {
          type: "link",
          label: "QuickNode",
          href: "https://www.quicknode.com/docs/gnosis",
        },
        {
          type: "link",
          label: "BlockSpaces",
          href: "https://www.blockspaces.com/web3-infrastructure",
        },
        {
          type: "link",
          label: "Chain49",
          href: "https://chain49.com/",
        },
      ],
    },
    {
      type: "category",
      label: "Account Abstraction",
      collapsed: true,
      link: { type: "doc", id: "tools/wallets/README" },
      items: [
        {
          type: "category",
          label: "Wallet",
          collapsed: "false",
          link: { type: "doc", id: "tools/wallets/README" },
          items: [
            {
              type: "category",
              label: "MetaMask",
              collapsed: true,
              link: { type: "doc", id: "tools/wallets/metamask/README" },
              items: [
                {
                  type: "link",
                  label: "Add custom tokens",
                  href: "https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask",
                },
                "tools/wallets/metamask/change-rpc-url",
                {
                  type: "link",
                  label: "With a Ledger or Trezor",
                  href: "https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet",
                },
              ],
            },
            {
              type: "category",
              label: "Hardware",
              collapsed: true,
              items: [
                "tools/wallets/dcent",
                "tools/wallets/ledger",
                "tools/wallets/trezor",
              ],
            },
            {
              type: "category",
              label: "Software",
              collapsed: true,
              items: [
                {
                  type: "link",
                  label: "Alpha Wallet",
                  href: "https://alphawallet.com/asset/the-best-wallet-for-xdai/",
                },
                {
                  type: "link",
                  label: "Ambire Wallet",
                  href: "https://www.ambire.com/",
                },
                {
                  type: "link",
                  label: "Coinbase Wallet",
                  href: "https://www.coinbase.com/wallet",
                },
                {
                  type: "link",
                  label: "DEX Wallet",
                  href: "https://www.dexwallet.io/",
                },
                {
                  type: "link",
                  label: "DinoWallet",
                  href: "https://dinowallet.org/",
                },
                {
                  type: "link",
                  label: "Frame",
                  href: "https://frame.sh/",
                },
                {
                  type: "link",
                  label: "Mt Pelerin",
                  href: "https://www.mtpelerin.com/bridge-wallet",
                },
                {
                  type: "link",
                  label: "Minerva Wallet",
                  href: "https://minerva.digital/",
                },
                {
                  type: "link",
                  label: "MyCrypto",
                  href: "https://app.mycrypto.com/",
                },
                {
                  type: "link",
                  label: "Nabox Wallet",
                  href: "https://nabox.io/",
                },
                {
                  type: "link",
                  label: "O3Labs",
                  href: "https://o3.network/",
                },
                {
                  type: "link",
                  label: "Pillar Wallet",
                  href: "https://www.pillar.fi/",
                },
                {
                  type: "link",
                  label: "Poketto Cash",
                  href: "https://poketto.cash/",
                },
                {
                  type: "link",
                  label: "Portis Wallet",
                  href: "https://wallet.portis.io/",
                },
                {
                  type: "link",
                  label: "Rabby Wallet",
                  href: "https://rabby.io/",
                },
                {
                  type: "link",
                  label: "TokenPocket",
                  href: "https://tokenpocket-gm.medium.com/how-to-add-xdai-chain-through-adding-custom-network-72d95597b017",
                },
                {
                  type: "link",
                  label: "Wallet3",
                  href: "https://wallet3.io/",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Account Abstraction",
          collapsed: true,
          link: { type: "doc", id: "tools/wallets/safe" },
          items: ["tools/wallets/safe", "tools/wallets/linen"],
        },
      ],
    },
    {
      type: "category",
      label: "Faucets",
      collapsed: true,
      link: { type: "doc", id: "tools/faucets/README" },
      items: [
        {
          type: "link",
          label: "Gnosis Faucet",
          href: "https://gnosisfaucet.com/",
        },
        {
          type: "link",
          label: "Stakely",
          href: "https://stakely.io/en/faucet/gnosis-chain-xdai",
        },
        {
          type: "link",
          label: "Prussia.dev",
          href: "https://faucet.prussia.dev/xdai",
        },
        "tools/faucets/tokens",
      ],
    },
    {
      type: "category",
      label: "Data & Analytics",
      collapsed: true,
      items: [
        "tools/analytics/the-graph",
        "tools/analytics/moralis",
        "tools/analytics/envio",
        {
          type: "link",
          label: "GnosisMetrics",
          href: "https://www.gnosismetrics.com/",
        },
        {
          type: "link",
          label: "Dune",
          href: "https://dune.com/home",
        },
        {
          type: "link",
          label: "Goldsky",
          href: "https://docs.goldsky.com/indexing",
        },
        {
          type: "link",
          label: "Blocknative",
          href: "https://docs.blocknative.com/",
        },
        {
          type: "link",
          label: "Curvegrid",
          href: "https://www.curvegrid.com/docs/introduction-to-multibaas",
        },
        {
          type: "link",
          label: "Gnosisscan",
          href: "https://gnosisscan.io/charts/",
        },
        {
          type: "link",
          label: "Tenderly",
          href: "https://tenderly.co/",
        },
        {
          type: "link",
          label: "TrueBlocks",
          href: "https://trueblocks.io/",
        },
      ],
    },
    {
      type: "category",
      label: "Oracles",
      collapsed: true,
      items: [
        "tools/oracles/api3",
        "tools/oracles/chainlink",
        "tools/oracles/gas-price",
        "tools/oracles/tellor",
        {
          type: "category",
          label: "SupraOracles",
          link: { type: "doc", id: "tools/oracles/supraoracles/README" },
          collapsed: true,
          items: ["tools/oracles/supraoracles/vrf"],
        },
      ],
    },
    {
      type: "category",
      label: "Beacon Chain",
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Deposit Tool",
          href: "https://deposit.gnosischain.com/",
        },
        "tools/beacon-chain/liquid-staking",
        {
          type: "link",
          label: "Nethermind Sedge",
          href: "https://docs.sedge.nethermind.io/",
        },
        {
          type: "link",
          label: "ValidateGnosis",
          href: "https://www.validategnosis.com/",
        },
      ],
    },
    {
      type: "category",
      label: "Other Tools",
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Crypto Tax Calculator",
          href: "https://cryptotaxcalculator.io/exchanges/xdai-tax/",
        },
        {
          type: "link",
          label: "BitOK",
          href: "https://bitok.org/",
        },
        {
          type: "link",
          label: "Wrapeth",
          href: "https://wrapeth.com/",
        },
        {
          type: "link",
          label: "CryptoFees",
          href: "https://cryptofees.info/",
        },
        {
          type: "link",
          label: "DeFi Lama",
          href: "https://defillama.com/chain/Gnosis",
        },
        {
          type: "link",
          label: "DeBank",
          href: "https://debank.com/",
        },
        {
          type: "link",
          label: "Zerion",
          href: "https://app.zerion.io/",
        },
        {
          type: "link",
          label: "Zapper",
          href: "https://zapper.fi/",
        },
        {
          type: "link",
          label: "Revoke",
          href: "https://revoke.cash/",
        },
        "tools/token-distribution",
      ],
    },
  ],
  bridge: [
    {
      type: "category",
      label: "Overview",
      link: { type: "doc", id: "bridges/README" },
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Governance",
          collapsed: false,
          link: { type: "doc", id: "bridges/governance/README" },
          items: ["bridges/governance/decisions"],
        },
        "bridges/third-party",
        "bridges/audits",
        "bridges/roadmap",
        "bridges/faq",
      ],
    },
    {
      type: "category",
      label: "Hashi",
      collapsed: false,
      items: [
        "bridges/hashi/README",
        "bridges/hashi/Deployment",
        "bridges/hashi/Application",
        "bridges/hashi/Tutorial",
      ],
    },
    {
      type: "category",
      label: "Native Bridges",
      collapsed: false,
      items: [
        "bridges/tokenbridge/amb-bridge",
        "bridges/tokenbridge/xdai-bridge",
        "bridges/tokenbridge/omnibridge",
        "bridges/tokenbridge/nft-bridge",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        slug: "bridges/tutorials",
        type: "generated-index",
        title: "Tutorials",
      },
      collapsed: false,
      items: bridgeTutorials,
    },
  ],
};

module.exports = sidebars;
