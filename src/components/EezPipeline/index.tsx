import React from 'react';
import styles from './styles.module.css';

/* The Gnosis EEZ pipeline as four steps, from the eez-rollup0 implementation:
   sequence, compose, attest, settle. Plain HTML so it follows the theme and
   wraps to a column on narrow screens. */
const STEPS = [
  {
    where: 'Gnosis EEZ',
    title: 'Sequence',
    body: 'A block every 2 seconds',
  },
  {
    where: 'Gnosis EEZ',
    title: 'Compose',
    body: 'Once per Ethereum block, a Sync block gathers the cross-chain calls',
  },
  {
    where: 'Gnosis EEZ',
    title: 'Attest',
    body: 'A proof signer re-runs the batch and signs the result',
  },
  {
    where: 'Ethereum',
    title: 'Settle',
    body: 'Batch, attestation and calls land in the same Ethereum block, or not at all',
  },
];

export default function EezPipeline(): JSX.Element {
  return (
    <figure className={styles.figure}>
      <ol className={styles.steps}>
        {STEPS.map(({where, title, body}, i) => (
          <li key={title} className={styles.step} data-l1={where === 'Ethereum' ? 'true' : undefined}>
            <span className={styles.where}>{where}</span>
            <span className={styles.title}>
              <span className={styles.num}>{i + 1}</span>
              {title}
            </span>
            <span className={styles.body}>{body}</span>
          </li>
        ))}
      </ol>
      <figcaption className={styles.caption}>
        Ethereum is the source of truth. Anyone can rebuild the Gnosis EEZ chain from Ethereum alone.
      </figcaption>
    </figure>
  );
}
