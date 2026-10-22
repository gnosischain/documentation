import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import './pillHeader.css';

/**
 * Pill header test. `?pill=a|b|c` picks a version (a is the default) and
 * `?pill=off` shows the current header; the choice is kept for the tab session.
 * Drop this module and its CSS once a version is picked.
 */
const KEY = 'gc-pill';

function applyVersion() {
  let version = 'a';
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('pill');
    if (fromUrl) sessionStorage.setItem(KEY, fromUrl);
    version = sessionStorage.getItem(KEY) || version;
  } catch {
    // Storage blocked: fall back to the default version
  }
  if (version === 'off') {
    document.documentElement.removeAttribute('data-pill');
  } else {
    document.documentElement.setAttribute('data-pill', version);
  }
}

if (ExecutionEnvironment.canUseDOM) {
  applyVersion();
  const onScroll = () =>
    document.documentElement.toggleAttribute('data-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) applyVersion();
}
