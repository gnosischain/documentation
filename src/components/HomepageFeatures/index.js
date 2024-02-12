import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [  
  {
    id: 0,
    title: 'Build on Gnosis Chain',
    subtitle: 'Quickstart Guide Interact with Chain',
    link: '/developers',
    Svg: require('@site/static/img/features/build.svg').default,
  },
  {
    id: 1,
    title: 'Bridge with Gnosis',
    subtitle: 'Send messages Crosschain with our bridge solutions like Arbitary Message Bridges',
    link: '/',
    Svg: require('@site/static/img/features/bridge.svg').default,
  },
  {
    id: 2,
    title: 'Run your own node',
    subtitle: 'Join our network of over 100k nodes',
    link: '/node',
    Svg: require('@site/static/img/features/node.svg').default,
  },
  {
    id: 3,
    title : 'Tools for Builders',
    link : '/tools',
    subtitle: 'RPC Providers, Faucets, etc. Everything you need to to develop on Gnosis',
    Svg: require('@site/static/img/features/tools.svg').default,
  },
  {
    id: 4,
    title: 'Technical guide for Developer integrations',
    subtitle: '',
    link: '/technical-guides',
    Svg: require('@site/static/img/features/guide.svg').default,
  },
  {
    id: 5,
    title : 'Contribute to Gnosis developer ecosystem',
    subtitle: '',
    link : '/',
    Svg: require('@site/static/img/features/ecosystem.svg').default,
  }
];

function Feature({Svg, title, subtitle, link}) {
  return (
    <div className={clsx('col col--4', styles.featureCardContainer)}>
      <a href={link}>
        <div className={clsx(styles.featureCard)}>
          <Svg className={styles.featureSvg} role='img' />
          <h3>{title}</h3>
          <h5>{subtitle}</h5>

          <p>Learn more</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container margin-bottom--xl'>
        <div className={clsx('row', styles.featureRow)} >
          {FeatureList.map(({ id, ...props}) => (
            <Feature key={id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
