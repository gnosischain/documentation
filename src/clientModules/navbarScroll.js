import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// html[data-scrolled] fills the navbar pill once the page has scrolled (see custom.scss)
if (ExecutionEnvironment.canUseDOM) {
  const onScroll = () =>
    document.documentElement.toggleAttribute('data-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();
}
