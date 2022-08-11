import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

const Tutorials = [
      {
        name: '📦 Launch an ERC-20 token',
        image: require('@site/static/img/developers/metamask-tokens.png'),
        url: '/developers/building/token',
        description: (
          <Translate id="tutorials.token.description">
            An ERC-20 token is a token that follows the ERC-20 Standard. This tutorial helps you build and deploy your first token to Gnosis.
          </Translate>
        ),
        },
        {
            name: 'Contract verification in Gnosisscan',
            image: require('@site/static/img/developers/verify/gnosisscan.png'),
            url: '/developers/verify/gnosisscan',
            description: (
            <Translate
                id="tutorials.gnosisscanverification.description"
                values={{
                webContainersLink: (
                    <Link href="https://gnosisscan.io/">
                    Gnosisscan
                    </Link>
                ),
                }}>
                {
                'Get your smart contract verified in {webContainersLink}, the Gnosis block explorer, and increase transparency and trust of your dApp.'
                }
            </Translate>
            ),
        },
    ];

interface Props {
  name: string;
  image: string;
  url: string;
  description: JSX.Element;
}

function TutorialCard({name, image, url, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url}>
              <Translate id="tutorials.tryItButton">Try it now!</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TutorialsFeatured(): JSX.Element {
  return (
    <div className="row">
      {Tutorials.map((tutorials) => (
        <TutorialCard key={tutorials.name} {...tutorials} />
      ))}
    </div>
  );
}