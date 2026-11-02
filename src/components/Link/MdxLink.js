import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

const OriginalA = MDXComponents.a;

// The docs site itself. Links to these hosts are "internal" and get no icon.
const INTERNAL_HOSTS = ['docs.gnosischain.com'];

function isExternal(href) {
  if (!href || typeof href !== 'string') return false;
  if (!/^https?:\/\//i.test(href)) return false; // relative / anchor / mailto handled as internal
  try {
    const host = new URL(href).hostname;
    return !INTERNAL_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/**
 * Custom markdown <a>. Any external http(s) link in body copy opens in a new
 * tab and carries a trailing external-link glyph so readers know it leaves the
 * docs. Internal and relative links pass through to the default renderer.
 */
export default function MdxLink(props) {
  const {href, children, className, ...rest} = props;
  if (!isExternal(href)) {
    return <OriginalA href={href} className={className} {...rest}>{children}</OriginalA>;
  }
  return (
    <OriginalA
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={['external-link', className].filter(Boolean).join(' ')}
      {...rest}>
      {children}
      <svg
        className="external-link-icon"
        width="0.72em"
        height="0.72em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </OriginalA>
  );
}
