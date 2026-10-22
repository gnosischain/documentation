import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SITES = [
  {label: 'Docs', href: 'https://docs.gnosischain.com', current: true},
  {label: 'Build', href: 'https://build.gnosischain.com/'},
];

/**
 * The DOCS label beside the logo, as a menu to switch between the docs and the build site.
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
          {SITES.map(({label, href, current}) => (
            <li key={label}>
              {current ? (
                <span className={clsx(styles.switcherItem, styles.switcherCurrent)} aria-current="page">
                  {label}
                </span>
              ) : (
                <a className={styles.switcherItem} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
