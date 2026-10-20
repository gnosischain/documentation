import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/**
 * "Copy page" split button for doc pages, as on GitBook and Mintlify.
 * Every page has a Markdown copy at the same path plus ".md"
 * (src/plugins/page-markdown.mjs writes them at build time).
 */

const Icon = {
  Copy: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  ),
  Check: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
  Markdown: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M6 15V9l2.5 3L11 9v6" /><path d="M16 9v6" /><path d="m14 13 2 2 2-2" />
    </svg>
  ),
  Chat: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" />
    </svg>
  ),
  Chevron: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  External: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17 17 7" /><path d="M8 7h9v9" />
    </svg>
  ),
};

// /eez -> /eez.md, /about/networks/ -> /about/networks.md, / -> /index.md
function markdownPath(pathname) {
  const path = pathname.replace(/\/+$/, '');
  return `${path || '/index'}.md`;
}

// Same prompt for every assistant; the .md link is public, so they can read it.
const ASSISTANTS = [
  {label: 'Open in ChatGPT', href: (q) => `https://chatgpt.com/?q=${q}`},
  {label: 'Open in Claude', href: (q) => `https://claude.ai/new?q=${q}`},
  {label: 'Open in Perplexity', href: (q) => `https://www.perplexity.ai/search?q=${q}`},
];

export default function CopyPage() {
  const {pathname} = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const root = useRef(null);

  const mdPath = markdownPath(pathname);
  const mdUrl = new URL(mdPath, siteConfig.url).href;
  const prompt = encodeURIComponent(`Read ${mdUrl} so I can ask questions about it.`);

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (e) => !root.current?.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // The page's Markdown, or its visible text when there is no .md (the dev server
  // has none and answers with the HTML app shell).
  async function pageText() {
    try {
      const res = await fetch(mdPath);
      const body = await res.text();
      if (res.ok && !/^\s*</.test(body)) return body;
    } catch (e) {
      // fall through to the page text
    }
    return document.querySelector('.theme-doc-markdown')?.innerText ?? '';
  }

  // Older copy method, for browsers that refuse the Clipboard API.
  function copyWithTextarea(text) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    area.remove();
    return ok;
  }

  async function copy() {
    setOpen(false);
    const text = pageText();
    let ok = false;
    try {
      // Hand the clipboard a promise inside the click itself: Safari drops
      // the permission if the copy only starts after the fetch.
      await navigator.clipboard.write([new ClipboardItem({'text/plain': text.then((t) => new Blob([t], {type: 'text/plain'}))})]);
      ok = true;
    } catch (e) {
      try {
        await navigator.clipboard.writeText(await text);
        ok = true;
      } catch (e2) {
        ok = copyWithTextarea(await text);
      }
    }
    if (!ok) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={styles.root} ref={root}>
      <div className={styles.split}>
        <button type="button" className={styles.main} onClick={copy}>
          {copied ? <Icon.Check width="16" height="16" /> : <Icon.Copy width="16" height="16" />}
          <span className={styles.label}>{copied ? 'Copied' : 'Copy page'}</span>
        </button>
        <button
          type="button"
          className={styles.toggle}
          aria-label="More ways to use this page"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
          <Icon.Chevron width="16" height="16" className={open ? styles.chevronOpen : undefined} />
        </button>
      </div>

      {open && (
        <div className={styles.menu} role="menu">
          <button type="button" role="menuitem" className={styles.item} onClick={copy}>
            <span className={styles.itemIcon}><Icon.Copy width="18" height="18" /></span>
            <span className={styles.itemText}>
              <span className={styles.itemTitle}>Copy page</span>
              <span className={styles.itemNote}>Copy page as Markdown for LLMs</span>
            </span>
          </button>
          <a role="menuitem" className={styles.item} href={mdPath} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            <span className={styles.itemIcon}><Icon.Markdown width="18" height="18" /></span>
            <span className={styles.itemText}>
              <span className={styles.itemTitle}>View as Markdown <Icon.External width="13" height="13" /></span>
              <span className={styles.itemNote}>View this page as plain text</span>
            </span>
          </a>
          {ASSISTANTS.map(({label, href}) => (
            <a key={label} role="menuitem" className={styles.item} href={href(prompt)} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <span className={styles.itemIcon}><Icon.Chat width="18" height="18" /></span>
              <span className={styles.itemText}>
                <span className={styles.itemTitle}>{label} <Icon.External width="13" height="13" /></span>
                <span className={styles.itemNote}>Ask questions about this page</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
