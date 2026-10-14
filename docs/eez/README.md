---
sidebar_position: 1
title: What is the Ethereum Economic Zone
sidebar_label: Overview
description: The Ethereum Economic Zone (EEZ) is a framework for rollups that compose with Ethereum in the same block. Gnosis Chain becomes its first instance in Q1 2027, with no redeployment for anything live today.
keywords: [ethereum economic zone, eez, gnosis eez, zk rollup, synchronous composability, zisk, ethereum foundation, gnosis chain]
---

# What is the Ethereum Economic Zone

Gnosis Chain is becoming the first instance of the Ethereum Economic Zone. In Q1 2027 the chain's state will be hard-forked onto a ZK-proven rollup that settles to Ethereum, built by Gnosis and Zisk with co-funding from the Ethereum Foundation. Nothing deployed on Gnosis Chain today needs to be redeployed. Teams that are live before the fork will be the first to run on the new system in production.

This section explains what EEZ is, what the first instance changes, and how to be part of the launch. The rest of the documentation covers Gnosis Chain as it operates today and stays current throughout the transition.

## EEZ in one paragraph

The Ethereum Economic Zone (EEZ) is a framework for rollups that compose with Ethereum rather than only settle on it. An EEZ instance produces its own blocks, proves them with a zkVM, and settles them to Ethereum with its data published on Ethereum. Because the proofs land inside Ethereum's own block cadence, a contract on the instance and a contract on mainnet can be part of the same transaction. There is no bridge in the middle and no wrapped asset. The framework is a credibly neutral public good with no token of its own. It is co-led by Gnosis and Zisk, co-funded by the Ethereum Foundation, and governed through a Swiss association. It is not a Gnosis product.

The short version: EEZ instances are built with Ethereum, not on Ethereum.

## The framework and the first instance

| | EEZ | Gnosis EEZ |
| --- | --- | --- |
| What it is | The rollup framework: proving, settlement and cross-chain call contracts | The first instance of that framework, operated by Gnosis |
| Who runs it | Any operator can run an instance, public or permissioned | Gnosis, with GNO economics and xDai as gas |
| Token | None | GNO and xDai, as on Gnosis Chain today |
| Focus | Composability with Ethereum for every instance | Distribution: the open finance components already live on Gnosis Chain |
| Status | Early-stage implementation, not yet audited, no mainnet deployment | Gnosis Chain today, Gnosis EEZ from Q1 2027 |

Gnosis EEZ is not a new chain. It is Gnosis Chain, re-based onto Ethereum. The chain keeps its contracts, balances, addresses and gas token. What changes is how blocks are produced, proven and settled. The detail is on [Gnosis EEZ: the first instance](/eez/gnosis-eez).

## What EEZ changes

**Same block, no bridges.** A transaction on an EEZ instance can call into Ethereum mainnet and have the result in the same block. Liquidity, prices and assets on mainnet are reachable without moving funds across a bridge first. For a trading app that means no leg risk between the quote and the fill. For a wallet it means a mainnet position and a card balance in one account.

**Inside Ethereum's economy, not beside it.** Settlement is paid to Ethereum, data is published to Ethereum blobs, and the instance inherits Ethereum's security through proofs rather than through its own validator set. The economic alignment runs in one direction: towards Layer 1.

**Instances for regulated operators.** The same framework lets a venue run its own instance with whitelisted wallets and on-chain transfer restrictions, settle to Ethereum, and still compose with public DeFi. Gnosis EEZ is the public, distribution-focused instance. The wider stack is available to operators who need their own. See [exchanges and market infrastructure](/use-cases/exchanges-and-market-infrastructure).

**Consumer-grade components on day one.** Gnosis EEZ inherits the regulated euro e-money, smart accounts, intent-based trading, card settlement, savings and tokenised assets that are live on Gnosis Chain now. The [use cases](/use-cases) section walks through what that means for each kind of application.

## Where this stands

EEZ was announced in March 2026. The core contracts are an early-stage implementation that has not been audited and has no mainnet deployment yet. The first release of Gnosis EEZ will start with an interim proving setup before real-time ZK proving, and synchronous calls will run from the instance into Ethereum before the reverse path is live. These limits are set out on [how it works](/eez/how-it-works) and on the [timeline](/eez/timeline), and they will be updated as each milestone lands.

## Where to go next

<CardContainer>
    <Card
        title="Gnosis EEZ: the first instance"
        subtitle="What stays the same, what changes, and what the validator set retirement means."
        url="/eez/gnosis-eez"
    />
    <Card
        title="How it works"
        subtitle="Sequencing, proving with the Zisk zkVM, settlement on Ethereum and cross-chain calls."
        url="/eez/how-it-works"
    />
    <Card
        title="What is possible on EEZ"
        subtitle="A request for builders: the DeFi venues and infrastructure that synchronous composability makes possible."
        url="/eez/what-is-possible"
    />
    <Card
        title="Use cases"
        subtitle="What EEZ means for wallets, neobanks, brokers, issuers, protocols and venues."
        url="/use-cases"
    />
    <Card
        title="Become a launch partner"
        subtitle="Deploy on Gnosis Chain now and be first in production on Gnosis EEZ in Q1 2027."
        url="/eez/launch-partner"
    />
</CardContainer>
