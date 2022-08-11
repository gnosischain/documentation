import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function Box({href, title, children}): JSX.Element {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className="card__body">
          <Link to={href}>
            <h3>{title}</h3>
          </Link>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}