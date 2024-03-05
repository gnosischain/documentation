---
title: Roadmap
sidebar_position: 5
description: Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users. 
keywords: [bridge roadmap, trustless bridge, light client, zksnark]
---

Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users. 

### "Proof-of-Deposit" Validity Proofs

One emergent idea is to require Bridge Validators to provide a "proof-of-deposit" to the receiving bridge contract, as a proof that funds were indeed deposited in the origin chain. This can be done through a variety of cryptographic signature schemes. 

Gnosis has provided a $600k grant to [0xParc](https://0xparc.org/) to fund R&D into a zkSNARK-enabled light client, a necessary part of a trust-minimized bridge (see [GIP-57 proposal](https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421)). 

There is an additional effort by the original xDai team into [BLS-signature based trustless bridge](https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421/15?u=dan-gnosis), as an alternative to a SNARKs.

### Hashi - A cross chain protocol based on distributed trust of the underlying security mechanisms

*Expected release in Q2 2023*

Hashi is an EVM Header Oracle Aggregator, designed to facilitate a [principled approach to cross-chain bridge security](https://ethresear.ch/t/a-principled-approach-to-bridges/14725?u=auryn). The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if the systems relying on them had built in some redundancy. 

This means not completely trusting ANY bridge mechanism and, instead, distributing our trust among many parallel mechanisms.

Each bridge mechanism is treated as an oracle for any given header. Users choose which combination of bridges to trust and how many must agree.

Orcale examples: Any Arbitrary Message Bridge, such as Wormhole or our own AMB, ZKP light client based implementations, such as SuccinctLabs, https://github.com/metacraft-labs/DendrETH and zkBridge.

![Hashi Architecture](../../static/img/bridges/diagrams/Hashi-architecture.png)

After successful audits and release, we aim to gradually migrate our canonical bridges to Hashi’s distributed trust model.