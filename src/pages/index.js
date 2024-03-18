import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const handleClickCopy = async () => {
    try {
      await navigator.clipboard.writeText('npx build-with-gnosis');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container margin-vert--lg' id="intro">
        <img src='img/gnosis-chain.svg' alt='Gnosis Chain' />
        <h1 className='margin-vert--md'>Documentation</h1>

        {/* <div className={clsx('margin-top--xl', styles.flexCol)} >
          <h2>Deploy a Dapp in 5 Minutes</h2>
          <span className={styles.copyField}>
            npx build-with-gnosis
            <button className={styles.iconButton} onClick={handleClickCopy}>
              <img className={styles.icon} src='img/copy-icon.svg' alt='Copy' />
            </button>
          </span>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  const [linePosition, setLinePosition] = useState(0)

  useEffect(() => {
    const updateNavbarPosition = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        const rect = navbar.getBoundingClientRect()
        setLinePosition(rect.bottom)
      }
    }

    window.addEventListener('scroll', updateNavbarPosition)

    updateNavbarPosition()

    return () => {
      window.removeEventListener('scroll', updateNavbarPosition)
    }
  }, [])

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <div className={clsx(styles.homePage)} >
        <div className={clsx(styles.fixedLine)} style={{top: linePosition}}></div>
        <HomepageHeader />
        <HomepageFeatures />
      </div>
    </Layout>
  );
}
