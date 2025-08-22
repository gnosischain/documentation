---
sidebar_position: 7
title: Working with Hashi
description: Hashi is an EVM oracle aggregator
keywords: [hashi, oracle aggregator]
---
:::info
🚨 The Hashi integration initiative — originally approved under [GIP‑93](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) and subsequently implemented across both the AMB & xDAI bridges—will be formally **deprecated**.

Read the entire forum details [here](https://forum.gnosis.io/t/deprecation-notice-hashi-on-gnosis-canonical-bridges-ends-maintenance/11467)
:::

:::warning
Hashi is deprecated and will be removed from the bridge UI by 29 August 2025.
:::

Hashi is an EVM Hash Oracle Aggregator, designed to facilitate a
[principled approach to cross-chain bridge security](https://ethresear.ch/t/a-principled-approach-to-bridges/14725?u=auryn). Hashi is developed and maintained further by the Cross-chain Alliance team. The integration of Hashi within Gnosis Chain's Canonical Bridges is in progress, check out [here](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245).

:::info Docs Migration notice
Hashi documentation is now at [crosschain-alliance/Hashi](https://crosschain-alliance.gitbook.io/hashi) !
:::

The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if
the systems relying on them had built in some redundancy. In other words, it's much more secure to require messages be
validated by multiple independent mechanisms, rather than by just one. We call this setup a **RAIHO** (Redundant Array of Independent Hash Oracles).
