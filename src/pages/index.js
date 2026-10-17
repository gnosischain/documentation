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

/* Gnosis EEZ: what changes at the fork, how it works, and how to be live at launch. */
const EEZ_ROUTES = [
  {
    icon: Icon.Trending,
    title: 'Now vs Gnosis EEZ',
    audience:
      'What stays the same and what changes at the fork: blocks, security, settlement and reaching Ethereum.',
    cta: 'Compare',
    to: '/eez/gnosis-eez',
  },
  {
    icon: Icon.Server,
    title: 'How it works',
    audience:
      'Sequence, prove, settle, compose: the four steps behind every Gnosis EEZ block.',
    cta: 'Read',
    to: '/eez/how-it-works',
  },
  {
    icon: Icon.Arrow,
    title: 'Become a launch partner',
    audience:
      'Deploy on Gnosis Chain now and be live on Gnosis EEZ at launch, with nothing to redeploy.',
    cta: 'Deploy',
    to: '/launch-partner',
  },
];

const FEATURES = [
  {
    icon: Icon.Build,
    title: 'Build on Gnosis',
    body: 'Deploy EVM contracts with Foundry or Hardhat and verify them on Gnosisscan.',
    to: '/developers/quickstart',
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

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        <span className={styles.heroLine}>Deploy now on Gnosis Chain.</span>{' '}
        <span className={styles.heroLine}>Launch on Gnosis EEZ in Q1 2027.</span>
      </h1>
      <p className={styles.heroLede}>
        Gnosis EEZ is the first instance of the Ethereum Economic Zone, a neutral rollup framework
        co-funded by the Ethereum Foundation. Gnosis Chain becomes Gnosis EEZ in Q1 2027. Same
        contracts, same addresses, nothing to migrate.
      </p>
      <div className={styles.heroActions}>
        <Link className={styles.btnPrimary} to="/launch-partner">
          Become a launch partner
        </Link>
        <Link className={styles.btnSecondary} to="/developers/quickstart">
          Start building <Icon.Arrow width="16" height="16" />
        </Link>
      </div>
    </section>
  );
}

function RouteCards({routes}) {
  return (
    <div className={styles.pathwayGrid}>
      {routes.map(({icon: I, title, audience, cta, to}) => (
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
              {cta} <Icon.Arrow width="14" height="14" />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function Eez() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Gnosis Chain now, Gnosis EEZ in Q1 2027</h2>
        <p className={styles.sectionSub}>
          Gnosis Chain becomes Gnosis EEZ through a hard fork of its state. Here is what changes, how
          it works, and how to be live on day one.
        </p>
      </div>
      <RouteCards routes={EEZ_ROUTES} />
    </section>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>Build</h2>
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
      <h2 className={styles.sectionTitle}>Common workflows</h2>
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.home}>
        <div className={styles.page}>
          <Hero />
          <Eez />
          <Features />
          <UseCases />
        </div>
      </main>
    </Layout>
  );
}
