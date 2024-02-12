import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container margin-vert--lg'>
        <img src='img/gnosis-chain.svg' alt='Gnosis Chain' />
        <h1 className='margin-vert--md'>Documentation</h1>

        <div className={clsx('margin-vert--xl', styles.flexCol)} >
          <h2>Deploy a Dapp in 5 Minutes</h2>
          <div className={styles.copyField}>
            npx build-with-gnosis
            <button className={styles.iconButton}>
              <img className={styles.icon} src='img/copy-icon.svg' alt='Copy' />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />

      <HomepageFeatures />
    </Layout>
  );
}
