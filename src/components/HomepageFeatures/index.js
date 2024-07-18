import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    id: 0,
    title: 'Build on Gnosis Chain',
    subtitle: 'Get to know how to build and interact with Gnosis Chain',
    link: '/developers/overview',
    Svg: require('@site/static/img/features/build.svg').default,
  },
  {
    id: 1,
    title: 'Bridge to Gnosis',
    subtitle:
      'Use Gnosis Bridges to bridge tokens from different chains and vice versa',
    link: '/bridges',
    Svg: require('@site/static/img/features/bridge.svg').default,
  },
  {
    id: 2,
    title: 'Run your own node',
    subtitle: 'Join our network of over 200k nodes',
    link: '/node',
    Svg: require('@site/static/img/features/node.svg').default,
  },
  {
    id: 3,
    title: 'Tools for Builders',
    link: '/tools',
    subtitle:

      'RPC Providers, Faucets, etc. Everything you need to develop on Gnosis.',
    Svg: require('@site/static/img/features/tools.svg').default,
  },
  {
    id: 4,
    title: 'Technical guides',
    subtitle:
      'Check out different developer integrations, SDKs on Gnosis Chain',
    link: '/technicalguides',
    Svg: require('@site/static/img/features/guide.svg').default,
  },
  {
    id: 5,
    title: 'Shutterized Gnosis Chain',
    subtitle:
      'Learn about Shutterized Gnosis Chain, RPC details and more.',
    link: '/shutterized-gc',
    Svg: require('@site/static/img/features/shutter.svg').default,
  },
];

function Feature({Svg, title, subtitle, link}) {
  return (
    <div className={clsx(styles.featureCardContainer)}>
      <a href={link}>
        <div className={clsx(styles.featureCard)}>
          <div className={clsx(styles.featureImg)}>
            <Svg className={styles.featureSvg} role='img' />
          </div>
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
