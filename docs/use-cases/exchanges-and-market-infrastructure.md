---
sidebar_position: 7
title: Exchanges and market infrastructure
description: For exchanges, CCPs, CSDs and custodians. Gnosis EEZ as a ready-made venue with public DeFi composability today, and an EEZ instance of your own with whitelisted wallets and transfer restrictions next.
keywords: [exchange, ccp, csd, custodian, market infrastructure, permissioned chain, own instance, transfer restrictions, settlement on ethereum, gnosis eez]
---

# Exchanges and market infrastructure

**Who it is for.** Exchanges, central counterparties, central securities depositories, custodians and other operators who clear and settle digital assets and are deciding where that settlement should live.

## The problem today

Venues building digital asset infrastructure tend to end up with a permissioned chain for clearing and settlement and a public Ethereum leg for distribution. The hard part is the seam between them: bridges, wrapped assets and a second compliance perimeter. The permissioned chain gets control but no liquidity. The public leg gets liquidity but not the controls a regulated venue needs.

## What you can ship today on Gnosis Chain

- **A ready-made public venue.** Gnosis Chain carries regulated euro e-money, intent-based settlement, smart-account custody and tokenised securities today, with chain-level fraud protection and a stable gas token.
- **Institutional custody patterns.** Safe is the custody layer for most treasuries on the chain: multi-signature, modules for policy and batching for operations.
- **Settlement in regulated e-money.** Monerium EURe gives a euro settlement leg that is redeemable over IBAN.
- **Precedent for restricted instruments.** Backed's bTokens show how a regulated instrument with transfer restrictions operates on the chain.

## What changes with Gnosis EEZ

- **Gnosis EEZ as the public instance.** The first instance is Gnosis-operated and focused on distribution. A venue can use it as the public leg with ZK-proven blocks settled to Ethereum, and reach public DeFi in the same block.
- **An instance of your own.** EEZ will let a venue run its own instance with whitelisted wallets and on-chain transfer restrictions, settle to Ethereum, and compose atomically with public DeFi. No bridges or third-party dependencies, but full access to Ethereum. Gnosis EEZ is the first instance; the wider EEZ stack is available to operators who need their own.
- **One compliance perimeter.** Restrictions enforced on your instance apply to the whole transaction, including the leg that reaches Ethereum, because every step lands or none does.
- **Finality you can define.** Sequenced in seconds, proven in seconds, settled on Ethereum within its finality, fully settled within days. [How it works](/eez/how-it-works) sets out each stage.

## What is still being built

Permissioned instances, transfer restriction modules and private transactions are being built with design partners. The core framework is early-stage and not yet audited. An operator evaluating an instance of their own should expect to shape the roadmap rather than pick from a catalogue.

## Build path

1. Evaluate Gnosis Chain as a public venue with the [developer overview](/developers/overview) and the [component catalogue](/start#the-component-catalogue).
2. Read [how it works](/eez/how-it-works) and the [timeline](/eez/timeline).
3. [Book a call with the ecosystem team](https://calendar.app.google/nG7XU4gvtqZgY9Cm9) to discuss an instance of your own.

## Launch with Gnosis EEZ

Settle on Gnosis Chain now and your venue is on Gnosis EEZ at launch, with Ethereum a same-block call away. An instance of your own follows the same framework. [Become a launch partner](/eez/launch-partner).
