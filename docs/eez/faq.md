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

GNO continues as the governance and economic token of Gnosis EEZ. Its role in block production after the validator set retires is decided through a Gnosis Improvement Proposal. This page will link to that proposal when it is published.

### I run a validator. What should I do?

Keep running. The validator set retires when the fork activates, and the GIP sets the activation block and the withdrawal process. There is no action to take before the proposal is published.

### I run an RPC or archive node. What changes?

You keep an execution client. The consensus-layer client is no longer needed after the fork.

### Will the bridges keep working?

The existing bridges keep operating. Over time, calls between Ethereum and Gnosis EEZ in the same block reduce the need to bridge for most flows. The [bridges](/bridges) section stays current for as long as the bridges are in use.

### Is Gnosis Chain shutting down?

No. Only the validator set retires. The chain, its state, its contracts and its users continue on Gnosis EEZ.

### Is Gnosis EEZ an L2?

It is an instance of the Ethereum Economic Zone: a chain whose blocks are ZK-proven and settled on Ethereum, and which can be called from Ethereum in the same block. Most people will call that an L2. The difference from a typical L2 is that there is no bridge between it and Ethereum.

### When exactly is the fork?

Q1 2027. The activation block is set by the GIP and published on the [timeline](/eez/timeline).

### What is not ready at launch?

Synchronous calls from Gnosis EEZ into Ethereum, instance-to-instance calls, and the last part of the real-time proving design. [How it works](/eez/how-it-works) lists each one.

### How do I get involved before launch?

[Become a launch partner](/eez/launch-partner).
