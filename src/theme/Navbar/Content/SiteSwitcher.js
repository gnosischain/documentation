import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const SITES = [
  {label: 'Docs', href: 'https://docs.gnosischain.com', current: true},
  // The Gnosis Chain home on gnosis.io; external, opens in a new tab
  {label: 'Home', href: 'https://www.gnosis.io/chain', external: true},
  // The ecosystem section of the build site; external, opens in a new tab
  {label: 'Ecosystem', href: 'https://build.gnosischain.com/ecosystem', external: true},
  {label: 'Build', href: 'https://build.gnosischain.com/', external: true},
  {label: 'Bridge', href: 'https://bridge.gnosischain.com/', external: true},
  // The docs page that lists every faucet (mainnet and Chiado), not one faucet site: stays in-site
  {label: 'Faucets', to: '/tools/Faucets'},
];

/* Small external-link glyph for items that leave the docs. */
function ExternalIcon() {
  return (
    <svg className={styles.switcherExt} width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The DOCS label beside the logo, as a menu of the docs, the build site, the bridge and the faucets.
 * Closes on an outside click, Escape, or picking a site.
 */
export default function SiteSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        ref.current?.querySelector('button')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={styles.switcher}>
      <button
        type="button"
        className={styles.switcherButton}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}>
        Docs
        <svg className={styles.switcherChevron} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul className={styles.switcherMenu}>
          {SITES.map(({label, href, to, current, external}) => (
            <li key={label}>
              {current ? (
                <span className={clsx(styles.switcherItem, styles.switcherCurrent)} aria-current="page">
                  {label}
                </span>
              ) : to ? (
                <Link className={styles.switcherItem} to={to} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ) : (
                <a
                  className={styles.switcherItem}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  onClick={() => setOpen(false)}>
                  {label}
                  {external && <ExternalIcon />}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
