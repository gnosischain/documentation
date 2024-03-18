---
sidebar_position: 5
title: Working with Hashi
description: Hashi is an EVM oracle aggregator
keywords: [hashi, oracle aggregator]
---

Hashi is an EVM Hash Oracle Aggregator, designed to facilitate a
[principled approach to cross-chain bridge security](https://ethresear.ch/t/a-principled-approach-to-bridges/14725?u=auryn). Hashi is developed and maintained further by the Cross-chain Alliance team.

:::info Docs Migration notice
Hashi documentation is now at [crosschain-alliance/Hashi](https://crosschain-alliance.gitbook.io/hashi/v0.1/introduction) !
:::

The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if
the systems relying on them had built in some redundancy. In other words, it's much more secure to require messages be
validated by multiple independent mechanisms, rather than by just one. We call this setup a **RAIHO** (Redundant Array of Independent Hash Oracles).