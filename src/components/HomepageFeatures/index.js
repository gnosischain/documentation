import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [

  {
    title : 'Developer Guides',
    link : '/Technical-Guides',
    Svg: require('@site/static/img/home/Gnosis-Tutorial.svg').default,
  },
  {
    title: 'Tutorials',
    link: '/developers',
    Svg: require('@site/static/img/home/Gnosis-Tutorial.svg').default,
  },
  {
    title: 'Tools',
    link: '/tools',
    Svg: require('@site/static/img/home/Gnosis-Tools.svg').default,
  },
  {
    title: 'Run your node',
    link: '/node',
    Svg: require('@site/static/img/home/Gnosis-Node.svg').default,
  },
];

function Feature({Svg, title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
