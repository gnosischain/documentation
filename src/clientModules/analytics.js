import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import siteConfig from "@generated/docusaurus.config";

// Set at build time by the production deployment only. Keep README.md > Analytics in sync.
const KEY = siteConfig.customFields.POSTHOG_KEY;

let posthog = null;

// The SDK loads once the page has finished loading, so it never competes with the first render.
if (KEY && ExecutionEnvironment.canUseDOM) {
  const load = () =>
    import("posthog-js")
      .then(({ default: client }) => {
        client.init(KEY, {
          api_host: "https://eu.i.posthog.com",
          defaults: "2026-08-30",
          // Needs "Cookieless server hash mode" on in the PostHog project, or every event is dropped.
          cookieless_mode: "always",
          person_profiles: "never",
          // The landing pageview only: onRouteDidUpdate sends the others.
          capture_pageview: true,
          capture_pageleave: true,
          autocapture: false,
          capture_performance: false,
          disable_session_recording: true,
          disable_surveys: true,
          advanced_disable_flags: true,
          disable_external_dependency_loading: true,
        });
        posthog = client;
      })
      .catch((error) => console.warn("Analytics failed to load", error));
  if (document.readyState === "complete") load();
  else window.addEventListener("load", load, { once: true });
}

// Not capture_pageview: "history_change": Docusaurus changes the URL before the next page has
// rendered, and its title is set a tick after, so those pageviews would carry the previous title.
export function onRouteDidUpdate({ location, previousLocation }) {
  if (posthog && previousLocation && location.pathname !== previousLocation.pathname) {
    setTimeout(() => posthog.capture("$pageview"));
  }
}
