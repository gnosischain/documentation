---
title: Working with Hashi
description: Hashi was an EVM oracle aggregator integrated into the Gnosis Chain canonical bridges. Archived - no longer part of Gnosis Chain.
keywords: [hashi, oracle aggregator, archived]
---

# Working with Hashi (Archived)

:::danger Archived
Hashi is **no longer part of Gnosis Chain**. The integration initiative — originally approved under [GIP‑93](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) and subsequently implemented across both the AMB & xDAI bridges — was formally deprecated, and Hashi was removed from the bridge UI on 29 August 2025.

Read the full deprecation notice [on the Gnosis forum](https://forum.gnosis.io/t/deprecation-notice-hashi-on-gnosis-canonical-bridges-ends-maintenance/11467).

The pages in this folder are kept for historical reference only and are not published on [docs.gnosischain.com](https://docs.gnosischain.com).
:::

Hashi was an EVM Hash Oracle Aggregator, designed to facilitate a
[principled approach to cross-chain bridge security](https://ethresear.ch/t/a-principled-approach-to-bridges/14725?u=auryn). Hashi is developed and maintained further by the Cross-chain Alliance team; its documentation lives at [crosschain-alliance/Hashi](https://crosschain-alliance.gitbook.io/hashi).

The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if
the systems relying on them had built in some redundancy. In other words, it's much more secure to require messages be
validated by multiple independent mechanisms, rather than by just one. We call this setup a **RAIHO** (Redundant Array of Independent Hash Oracles).

## Archived pages

- [Hashi Integration](./hashi-integration.md) — how the bridges worked with Hashi enabled
- [Using Hashi](./How%20To%20Use%20Hashi.md) — developer guide for Yaho / Yaru
- [Audits](./audits.md) — Hashi integration audit reports
