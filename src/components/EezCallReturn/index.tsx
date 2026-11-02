import React from 'react';
import styles from './styles.module.css';

/* EEZ gradient stops from the brand rules: indigo faces Ethereum, mint faces away. */
const STOPS = [
  {offset: '0', cls: 'stopIndigo'},
  {offset: '0.3', color: '#5060C0'},
  {offset: '0.45', color: '#70B0B0'},
  {offset: '0.55', color: '#80C8B0'},
  {offset: '1', color: '#8CE8AB'},
];

function Gradient({id, y1, y2}: {id: string; y1: number; y2: number}) {
  return (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1={y1} x2="0" y2={y2}>
      {STOPS.map((s) => (
        <stop
          key={s.offset}
          offset={s.offset}
          className={s.cls ? styles[s.cls] : undefined}
          stopColor={s.color}
        />
      ))}
    </linearGradient>
  );
}

function Tick({cx, cy}: {cx: number; cy: number}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="11" className={styles.tick} />
      <path
        d={`M${cx - 5} ${cy} l3.5 3.5 l6.5 -7`}
        className={styles.tickMark}
      />
    </g>
  );
}

export default function EezCallReturn(): JSX.Element {
  return (
    <figure className={styles.figure}>
      <div className={styles.scroll}>
        <svg
          viewBox="0 0 960 520"
          role="img"
          aria-label="One transaction: Contract A on Ethereum calls Contract B on Gnosis EEZ, and the return value comes back to Contract A in the same transaction."
          className={styles.svg}>
          <defs>
            <Gradient id="eez-flow" y1={170} y2={350} />
            <Gradient id="eez-mark" y1={330} y2={354} />
          </defs>

          <rect x="1" y="1" width="958" height="518" rx="24" className={styles.frame} />
          <text x="32" y="44" className={styles.eyebrow}>One transaction</text>

          <rect x="32" y="68" width="896" height="170" rx="16" className={styles.laneL1} />
          <text x="56" y="100" className={styles.laneLabel}>Ethereum · L1</text>

          <rect x="32" y="300" width="896" height="190" rx="16" className={styles.laneEez} />
          <path
            d="M63 318 L56 331 L63 335 L70 331 Z M56 333.5 L63 343 L70 333.5 L63 337.5 Z"
            fill="none"
            stroke="url(#eez-mark)"
            strokeWidth="1.6"
            strokeLinejoin="miter"
          />
          <text x="82" y="336" className={styles.laneLabelEez}>Gnosis EEZ</text>

          <rect x="240" y="110" width="260" height="96" rx="12" className={styles.cardL1} />
          <text x="370" y="166" className={styles.cardTitle}>Contract A</text>
          <Tick cx={476} cy={132} />

          <rect x="580" y="356" width="260" height="96" rx="12" className={styles.cardEez} />
          <text x="710" y="412" className={styles.cardTitleEez}>Contract B</text>
          <Tick cx={816} cy={378} />

          <path
            d="M500 158 H686 Q710 158 710 182 V344"
            fill="none"
            stroke="url(#eez-flow)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M700 336 L710 348 L720 336" className={styles.arrowMint} />
          <text x="600" y="144" className={styles.flowLabel}>Call</text>

          <path
            d="M580 404 H330 Q310 404 310 384 V214"
            fill="none"
            stroke="url(#eez-flow)"
            strokeWidth="3"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
          <path d="M300 222 L310 210 L320 222" className={styles.arrowIndigo} />
          <text x="445" y="432" className={styles.flowLabelEez}>Return</text>
        </svg>
      </div>
      <figcaption className={styles.caption}>
        Contract A on Ethereum calls Contract B on Gnosis EEZ and gets the return value back. Both
        complete inside one transaction.
      </figcaption>
    </figure>
  );
}
