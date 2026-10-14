import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

/* ------------------------------------------------------------------ */
/* Icons: 20px, 1.5px stroke, currentColor                             */
/* ------------------------------------------------------------------ */
const Icon = {
  Build: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5 12 21l9-4.5" />
    </svg>
  ),
  Bridge: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 7h16" /><path d="M4 17h16" /><path d="m15 3 4 4-4 4" /><path d="m9 13-4 4 4 4" />
    </svg>
  ),
  Pay: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h3" />
    </svg>
  ),
  Wallet: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7a2 2 0 0 1 2-2h13v4" /><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M16 13h.01" />
    </svg>
  ),
  Tools: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m14.5 6.5 3 3" /><path d="M4 20l7.5-7.5" /><path d="M14 4.5a4 4 0 0 0 5.5 5.5L17 12.5 11.5 7 14 4.5Z" />
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  ),
  Terminal: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m5 7 5 5-5 5" /><path d="M12 17h7" />
    </svg>
  ),
  Server: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16" /><path d="M4 15h16" />
    </svg>
  ),
  Trending: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

/* The three component bundles from the Gnosis Chain site, as routes into the docs. */
const PATHWAYS = [
  {
    icon: Icon.Wallet,
    title: 'Yield inside your wallet',
    audience:
      'For trading and payment apps already selling a money market fund. A rail swap on the same fee model.',
    to: '/start/embedded-components/yield-in-your-wallet',
  },
  {
    icon: Icon.Pay,
    title: 'Spend and Save',
    audience:
      'For wallets and challengers that want a card without carrying a balance sheet.',
    to: '/start/embedded-components/spend-and-save',
  },
  {
    icon: Icon.Trending,
    title: 'Full Investing Suite',
    audience:
      'For brokers and neobanks adding tokenised assets and self-custodial crypto.',
    to: '/start/embedded-components/full-investing-suite',
  },
];

const FEATURES = [
  {
    icon: Icon.Build,
    title: 'Build on Gnosis',
    body: 'Deploy EVM contracts with Foundry or Hardhat and verify them on Blockscout.',
    to: '/developers/overview',
  },
  {
    icon: Icon.Bridge,
    title: 'Bridge assets',
    body: 'Move tokens and messages between Ethereum and Gnosis with the native bridges.',
    to: '/bridges',
  },
  {
    icon: Icon.Wallet,
    title: 'Use smart accounts',
    body: 'Account abstraction, custom signers and EIP-7702 with Safe as the custody layer.',
    to: '/technicalguides/account-abstraction/',
  },
  {
    icon: Icon.Pay,
    title: 'Build with real money',
    body: 'Stablecoins, e-money and self-custodial cards. Payments that settle in seconds.',
    to: '/about/tokens',
  },
];

const USE_CASES = [
  {
    icon: Icon.Terminal,
    title: 'Deploy contracts',
    links: [
      ['Quickstart', '/developers/quickstart'],
      ['Using Foundry', '/developers/dev-environment/foundry'],
      ['Verify smart contracts', '/developers/Verify Smart Contracts/'],
    ],
  },
  {
    icon: Icon.Bridge,
    title: 'Move assets across chains',
    links: [
      ['Use Gnosis Bridge', '/bridges/usebridges'],
      ['Arbitrary Message Bridge', '/bridges/using-amb'],
      ['Third-party bridges', '/bridges/thirdpartybridges'],
    ],
  },
  {
    icon: Icon.Server,
    title: 'Read and index chain data',
    links: [
      ['RPC providers', '/tools/RPC Providers/'],
      ['Indexers and analytics', '/tools/Indexer & Analytics/'],
      ['Block explorers', '/tools/Blockchain Explorers/'],
    ],
  },
  {
    icon: Icon.Wallet,
    title: 'Build with smart accounts',
    links: [
      ['Account abstraction', '/technicalguides/account-abstraction/'],
      ['Custom signers', '/technicalguides/custom-signers/'],
      ['EIP-7702 on Gnosis', '/technicalguides/Pectra/eip-7702'],
    ],
  },
];

const TASKS = [
  {
    heading: 'Core',
    links: [
      ['Connect a wallet', '/developers/Interact on Gnosis/metamask'],
      ['Deploy a token', '/developers/Build contracts on gnosis/token'],
      ['Deploy an NFT', '/developers/Build contracts on gnosis/nft'],
      ['Build a full-stack dapp', '/developers/Build contracts on gnosis/full-stack-dapp'],
    ],
  },
  {
    heading: 'Network',
    links: [
      ['Network details', '/about/networks/'],
      ['Chiado testnet', '/about/networks/chiado'],
      ['Faucets', '/tools/Faucets'],
      ['RPC providers', '/tools/RPC Providers/'],
    ],
  },
  {
    heading: 'Tools',
    links: [
      ['Block explorers', '/tools/Blockchain Explorers/'],
      ['Indexers and analytics', '/tools/Indexer & Analytics/'],
      ['Oracles', '/tools/Oracle Providers/'],
      ['Wallets', '/tools/wallets/'],
    ],
  },
  {
    heading: 'Reference',
    links: [
      ['Useful contracts', '/developers/Usefulcontracts'],
      ['Chain specs', '/about/specs/'],
      ['GNO and xDai', '/about/tokens/'],
      ['llms.txt', '/llms.txt'],
    ],
  },
];

const WHY_NOW = [
  ['Q1 2027', 'Gnosis EEZ activates. The chain hard-forks its state onto a ZK-proven instance that settles to Ethereum.'],
  ['No redeployment', 'Contracts, balances and addresses carry over. Teams live before the fork are live after it.'],
  ['Same block', 'Ethereum assets, liquidity and prices in one transaction, with no bridge in the middle.'],
  ['Gnosis and Zisk', 'Built by Gnosis and Zisk, co-funded by the Ethereum Foundation, with launch partners first in production.'],
];

const EEZ_USE_CASES = [
  {
    icon: Icon.Wallet,
    title: 'Wallets and payment apps',
    body: 'A balance that earns, a card that spends from it, and mainnet assets from the same account.',
    to: '/use-cases/wallets-and-payment-apps',
  },
  {
    icon: Icon.Pay,
    title: 'Neobanks and challengers',
    body: 'Account, savings, card and investing without a balance sheet, a processor or a custodian.',
    to: '/use-cases/neobanks-and-challengers',
  },
  {
    icon: Icon.Trending,
    title: 'Brokers and investing apps',
    body: 'Tokenised securities and yield, filled from Ethereum liquidity in the same block.',
    to: '/use-cases/brokers-and-investing-apps',
  },
  {
    icon: Icon.Build,
    title: 'Asset issuers',
    body: 'One instrument, two venues, no wrapping. Transfer restrictions that hold across the boundary.',
    to: '/use-cases/asset-issuers',
  },
  {
    icon: Icon.Terminal,
    title: 'DeFi protocols',
    body: 'Mainnet liquidity and prices in the same transaction. No leg risk between a Gnosis fill and a mainnet hedge.',
    to: '/use-cases/defi-protocols',
  },
  {
    icon: Icon.Server,
    title: 'Exchanges and market infrastructure',
    body: 'Gnosis EEZ as a ready-made venue today. An instance of your own, with restrictions, next.',
    to: '/use-cases/exchanges-and-market-infrastructure',
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>Pre-launch documentation</div>
      <h1 className={styles.heroTitle}>
        <span className={styles.heroLine}>Deploy now on Gnosis Chain.</span>{' '}
        <span className={styles.heroLine}>Launch on Gnosis EEZ in Q1 2027.</span>
      </h1>
      <p className={styles.heroLede}>
        Gnosis Chain is becoming the first instance of the Ethereum Economic Zone: a ZK-proven
        chain that settles to Ethereum and reaches mainnet assets, liquidity and prices in the same
        block. The fork carries every contract and balance across, so what you deploy today is in
        production on Gnosis EEZ at launch. Built by Gnosis and Zisk, co-funded by the Ethereum
        Foundation.
      </p>
      <div className={styles.heroActions}>
        <Link className={styles.btnPrimary} to="/eez/launch-partner">
          <Icon.Arrow width="16" height="16" />
          Become a launch partner
        </Link>
        <Link className={styles.btnSecondary} to="/developers/quickstart">
          <Icon.Terminal width="16" height="16" />
          Start building
        </Link>
        <Link className={styles.btnSecondary} to="/eez">
          What is EEZ
        </Link>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className={styles.facts} aria-label="Why deploy now">
      {WHY_NOW.map(([label, body]) => (
        <div key={label} className={styles.fact}>
          <span className={styles.factLabel}>{label}</span>
          <span className={styles.factBody}>{body}</span>
        </div>
      ))}
    </section>
  );
}

function EezUseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>What Gnosis EEZ means for your application</h2>
        <p className={styles.sectionSub}>
          What you can ship on Gnosis Chain today, what changes at launch, and the guides to start
          with, for each kind of application.
        </p>
      </div>
      <div className={styles.useCaseCardGrid}>
        {EEZ_USE_CASES.map(({icon: I, title, body, to}) => (
          <Link key={title} className={styles.featureCard} to={to}>
            <span className={styles.featureIcon}>
              <I width="22" height="22" />
            </span>
            <span className={styles.featureText}>
              <span className={styles.featureTitle}>{title}</span>
              <span className={styles.featureBody}>{body}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link className={styles.moreLink} to="/use-cases">
        All use cases <Icon.Arrow width="14" height="14" />
      </Link>
    </section>
  );
}

function Pathways() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Live on Gnosis Chain today: open finance for your app</h2>
        <p className={styles.sectionSub}>
          Three bundles of open finance components, each with 0-1 guides that end in a result you
          can verify on-chain.
        </p>
      </div>
      <div className={styles.pathwayGrid}>
        {PATHWAYS.map(({icon: I, title, audience, to}) => (
          <Link key={title} className={styles.pathway} to={to}>
            <span className={styles.pathwayTop}>
              <span className={styles.pathwayIcon}>
                <I width="22" height="22" />
              </span>
            </span>
            <span className={styles.pathwayBody}>
              <span className={styles.pathwayTitle}>{title}</span>
              <span className={styles.pathwayAudience}>{audience}</span>
            </span>
            <span className={styles.pathwayFoot}>
              <span className={styles.pathwayCta}>
                Start <Icon.Arrow width="14" height="14" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Build with Gnosis</h2>
        <p className={styles.sectionSub}>
          Core building blocks for shipping directly on Gnosis Chain.
        </p>
      </div>
      <div className={styles.featureGrid}>
        {FEATURES.map(({icon: I, title, body, to}) => (
          <Link key={title} className={styles.featureCard} to={to}>
            <span className={styles.featureIcon}>
              <I width="22" height="22" />
            </span>
            <span className={styles.featureText}>
              <span className={styles.featureTitle}>{title}</span>
              <span className={styles.featureBody}>{body}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Common Workflows</h2>
      <div className={styles.useCaseGrid}>
        {USE_CASES.map(({icon: I, title, links}) => (
          <div key={title} className={styles.useCase}>
            <div className={styles.useCaseHead}>
              <I width="18" height="18" className={styles.useCaseIcon} />
              <span>{title}</span>
            </div>
            <ul className={styles.useCaseList}>
              {links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={styles.useCaseLink}>
                    <span>{label}</span>
                    <Icon.Chevron width="16" height="16" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tasks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Common tasks</h2>
      <div className={styles.taskGrid}>
        {TASKS.map(({heading, links}) => (
          <div key={heading}>
            <div className={styles.eyebrow}>{heading}</div>
            <ul className={styles.taskList}>
              {links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className={styles.taskLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.page}>
        <Hero />
        <WhyNow />
        <EezUseCases />
        <Pathways />
        <Features />
        <UseCases />
        <Tasks />
      </main>
    </Layout>
  );
}
