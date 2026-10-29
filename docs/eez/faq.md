---
sidebar_position: 6
title: Transition FAQ
description: Short answers on what the Gnosis EEZ fork means for contracts, users, validators, xDai, GNO, bridges and tooling.
keywords: [gnosis eez faq, hard fork, redeploy, chain id, xdai, gno, validators, bridges]
---

# Transition FAQ

Questions about the move from Gnosis Chain to Gnosis EEZ. Questions about Gnosis Chain as it runs today are on the main [FAQ](/faq/others).

### Do I need to redeploy my contracts?

No. The fork carries the full state of Gnosis Chain across. Your contracts keep their addresses and storage.

### Do my users need to do anything?

No. Balances and accounts are unchanged. Wallets that are connected to Gnosis Chain stay connected.

### Does the chain ID change?

No change is planned. If any network parameter changes it will be published here and in the [network details](/about/networks/) well before activation.

### What happens to xDai?

Nothing at launch. xDai stays the gas token and the unit of account.

### What happens to GNO?

GNO continues as the governance token. Staked GNO unlocks when the validator set retires.

### I run a validator. What should I do?

Keep running. The validator set retires when the fork activates, and staked GNO is unlocked when it does. GnosisDAO has approved the transition. There is no action to take before the activation block is announced. The [validator and node operator runbook](/validators/eez-transition) sets out each step.

### I run an RPC or archive node. What changes?

You keep an execution client. The consensus-layer client is no longer needed after the fork. See the [validator and node operator runbook](/validators/eez-transition).

### Will the bridges keep working?

The existing bridges keep operating. Once Gnosis EEZ is live, synchronous calls to Ethereum mainnet in the same transaction will reduce the need to bridge to mainnet for most flows. Reaching rollups that are not part of the EEZ will still need a bridge. The [bridges](/bridges) section stays current for as long as the bridges are in use.

### Is Gnosis Chain shutting down?

No. Only the validator set retires. The chain, its state, its contracts and its users continue on Gnosis EEZ.

### Is Gnosis EEZ an L2?

It is an instance of the Ethereum Economic Zone: a chain whose blocks are proven and settled on Ethereum, starting with an interim proving setup and moving to real-time ZK proofs, and which can be called from Ethereum in the same block. Most people will call that an L2. The difference from a typical L2 is that there is no bridge between it and Ethereum.

### When does Gnosis EEZ launch?

No date is set yet. Design partners work on the EEZ devnet until then. The activation block is published on the [timeline](/eez/timeline) when it is set.

### What works at launch?

Your Gnosis EEZ contracts can call Ethereum mainnet atomically from genesis. Full bidirectional composability, nested calls and real-time ZK proving follow after launch, and calls between EEZ instances come after that. Build for the first and design for the second. [How it works](/eez/how-it-works) has the detail.

### Is the EEZ a Gnosis product?

No. Gnosis EEZ will be the first rollup in the zone, but the framework is open source, shared infrastructure, stewarded by the EEZ Association and not owned by any single team.

### How do I get in touch?

[Book a call with the ecosystem team](https://calendar.app.google/nG7XU4gvtqZgY9Cm9) or reach us on [Discord](https://discord.gg/gnosis). Tell us what you run today and what you want to build on Gnosis EEZ. We read everything. To be live on Gnosis EEZ at launch, [become a launch partner](/launch-partner).
