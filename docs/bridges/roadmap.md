---
title: Bridges Roadmap
sidebar_position: 6
description: Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users.
keywords: [bridge roadmap, trustless bridge, light client, zksnark]
---

### Fast Confirmation Rule(FCR) integration

Fast Confirmation Rule is a new Ethereum feature that provides a very strong assurance a block will not be reorged within 1 slot(13 seconds), a 98% reduction from the approximately 13-minute time to finality. Integrating FCR into bridges improves the bridging time down to seconds without sacrificing the security. Check [here](./fast-confirmation-rule.md) for more details.

### Hashi - A cross chain protocol based on distributed trust of the underlying security mechanisms ✅

:::warning
🚨 The Hashi integration initiative — originally approved under [GIP‑93](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) and subsequently implemented across both the AMB & xDAI bridges—is formally **deprecated**.

Read the entire forum details [here](https://forum.gnosis.io/t/deprecation-notice-hashi-on-gnosis-canonical-bridges-ends-maintenance/11467)
:::

Hashi, a cross chain protocol based on distributed trust of the underlying security mechanisms
Hashi is an EVM Hash Oracle Aggregator designed to enhance cross-chain bridge security by aggregating block headers from various sources. By requiring validation from multiple independent mechanisms, Hashi ensures greater resilience against security incidents. It supports 15+ General Message Passing bridges and ZK light clients, promoting redundancy and reducing reliance on single mechanisms. Integrating Hashi into Gnosis Chain's bridges strengthens security, decentralization, and interoperability. This initiative aims to set a new standard for cross-chain transactions, enhancing user confidence and bolstering the Gnosis ecosystem's security posture. [Check out the proposal](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245) .

### Telepathy, zkSNARK-enabled Light Client bridge validator ✅

> > Telepathy has been deprecated from Succinct Lab

Succinct Lab's zkSNARK-enabled Light Client, Telepathy, launched in July 2023, has emerged as a key component of the AMB bridge ecosystem. Utilizing zkSNARKs, Telepathy provides validity proofs, ensuring trustless verification of transaction events across chains. This solution has become one of the most active bridge validators in the AMB network, enhancing security and reliability for cross-chain transactions.

After successful audits and release, we aim to gradually migrate our canonical bridges to Hashi’s distributed trust model.
