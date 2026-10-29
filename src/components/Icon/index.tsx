import React from 'react';

/**
 * Shared line-icon set for the docs (Lucide-style, 24x24, 1.8 stroke, currentColor).
 * One place to add icons so cards, callouts and landing pages stay consistent.
 * Usage: <Icon name="tools" /> — unknown names render nothing.
 */
const PATHS: Record<string, React.ReactNode> = {
  tools: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <circle cx="15" cy="7" r="2.2" />
      <circle cx="9" cy="12" r="2.2" />
      <circle cx="16" cy="17" r="2.2" />
    </>
  ),
  guides: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  validators: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  faq: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4" />
      <path d="M12 17h.01" />
    </>
  ),
  glossary: (
    <>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 10v8M21 10v8M3 14h18" />
      <path d="M3 10a9 9 0 0 1 18 0" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2a2.1 2.1 0 1 0-3-3z" />
      <path d="M12 15l-3-3a12 12 0 0 1 8-8 12 12 0 0 1-2 10 6 6 0 0 1-3 1z" />
      <path d="M15 9h.01" />
    </>
  ),
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({name, size = 22, className}: IconProps): JSX.Element | null {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {path}
    </svg>
  );
}
