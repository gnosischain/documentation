---
sidebar_position: 1
title: What is Gnosis EEZ
sidebar_label: Overview
description: Gnosis EEZ is the first instance of the Ethereum Economic Zone, a neutral rollup framework. Gnosis Chain will become Gnosis EEZ in the future, with no redeployment for anything live today.
keywords: [ethereum economic zone, eez, gnosis eez, rollup, synchronous composability, zisk, ethereum foundation, gnosis chain]
---

# What is Gnosis EEZ

The **Ethereum Economic Zone (EEZ)** is a neutral rollup framework, co-led by Gnosis and Zisk and co-funded by the Ethereum Foundation. Rollups built on it settle to Ethereum and are designed to call Ethereum mainnet contracts in the same transaction, with no bridge in the middle. The framework has no token and is not a Gnosis product.

**Gnosis EEZ** is its first instance, operated by Gnosis. In the future, the state of Gnosis Chain will be hard-forked onto it. Contracts, balances, addresses and the xDai gas token carry over unchanged, so nothing deployed on Gnosis Chain today needs to be redeployed.

The rest of this documentation covers Gnosis Chain as it runs today, and stays accurate until the fork.

## What changes, in short

| | Gnosis Chain today | Gnosis EEZ (future) |
| --- | --- | --- |
| What it is | A proof-of-stake Layer 1 | A rollup that settles to Ethereum |
| Blocks | Every 5 seconds, from a validator set | Every 2 seconds, from a composer operated by Gnosis |
| Security | Validator economic security | Proofs verified on Ethereum |
| Reaching Ethereum mainnet | Through a bridge | A synchronous call into Ethereum mainnet, in the same transaction |
| Reaching other rollups | Through a bridge | Through a bridge, unless the rollup is part of the EEZ |
| Your contracts | Deployed on Gnosis Chain | Unchanged, at the same addresses |

The full comparison is on [Gnosis Chain now and Gnosis EEZ](/eez/gnosis-eez).

## Where this stands

The core contracts are an early-stage implementation that has not been audited. The first release will start with an interim proving setup before real-time ZK proving, and synchronous calls will run from Gnosis EEZ into Ethereum before the reverse direction is live. The [timeline](/eez/timeline) tracks each milestone.

## Where to go next

<CardContainer>
    <Card
        title="Gnosis Chain now and Gnosis EEZ"
        subtitle="What stays the same, what changes, and what the fork means for validators."
        url="/eez/gnosis-eez"
    />
    <Card
        title="How it works"
        subtitle="Sequencing, proving, settlement on Ethereum and cross-chain calls, in four steps."
        url="/eez/how-it-works"
    />
    <Card
        title="Timeline"
        subtitle="From the EEZ announcement to the Gnosis EEZ launch, and what follows."
        url="/eez/timeline"
    />
    <Card
        title="Transition FAQ"
        subtitle="Short answers for builders, users, validators and node operators."
        url="/eez/faq"
    />
    <Card
        title="Become a launch partner"
        subtitle="Deploy on Gnosis Chain now and be live on Gnosis EEZ at launch."
        url="/launch-partner"
    />
</CardContainer>
