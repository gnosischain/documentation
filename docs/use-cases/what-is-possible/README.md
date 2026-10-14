---
sidebar_position: 1
sidebar_label: Request for builders
slug: /use-cases/what-is-possible
title: "What is possible on EEZ: a request for builders"
description: Four DeFi venues and the infrastructure under them that become possible or much better when an L2 can call Ethereum mainnet apps and infrastructure in the same transaction. If you are building one of these, we want to hear from you.
keywords: [request for builders, what is possible on eez, synchronous composability, defi, lending, options, perps, prediction markets, oracles, solvers, custodians, hybrid apps, gnosis eez]
---

# What is possible on EEZ: a request for builders

The [Ethereum Economic Zone](/eez) (EEZ) is a neutral rollup framework whose instances can call Ethereum mainnet in the same transaction. Gnosis EEZ is its first instance, operated by Gnosis, and Gnosis Chain becomes it in Q1 2027.

Synchronous composability changes what can be built on an L2. This section sets out four DeFi venues, and the infrastructure under them, that become possible or much better when an L2 can call Ethereum mainnet apps and infrastructure in the same transaction. If you are building one of these, we want to hear from you.

## Why now

Building DeFi on an L2 has always meant a trade. You get fast blocks and cheap transactions, and you give up mainnet: its liquidity, its money markets, its price feeds. So native venues start isolated: thin books, bridged collateral, and liquidations that depend on liquidity sitting on another chain.

Synchronous composability changes that. Apps and infrastructure built natively on Gnosis EEZ will keep L2 speed and cost, and will still be able to call mainnet DEXs, money markets, oracles and stablecoins in the same transaction when they need depth. If any step fails, the whole thing reverts. Native liquidity on Gnosis EEZ and mainnet liquidity will reinforce each other instead of competing. No existing L2 offers this today.

## What you build on

- **Synchronous composability with mainnet.** A contract on Gnosis EEZ will be able to call L1 apps and infrastructure and use the result in the same transaction, so you use mainnet depth without fragmenting it.
- **2-second blocks, sub-cent fees.** Gnosis EEZ will produce a block every 2 seconds, fast enough for order books and high-frequency markets, with a composing block every Ethereum slot. Gnosis Chain runs 5-second blocks today.
- **Ethereum settlement.** State will be proven and settled to L1, starting with an interim proving setup, likely TEE-based, before real-time ZK proofs. See [how it works](/eez/how-it-works).
- **L1 as a building block.** Mainnet money markets, DEXs, oracles and stablecoins will be usable from the L2 as they stand. Native Gnosis EEZ apps will compose with them directly.

For each build below the question is the same: what becomes possible when the L2 and L1 parts of a product share one atomic transaction?

## The requests

<CardContainer>
    <Card
        title="1. The lead lending market for RWA collateral"
        subtitle="Hold the canonical asset, liquidate atomically against mainnet liquidity, and lend euro e-money and dollar stablecoins sourced from L1."
        url="/use-cases/what-is-possible/lending-market-rwa-collateral"
    />
    <Card
        title="2. An options venue"
        subtitle="Quote and match on 2-second blocks, then hedge, exercise or settle against mainnet spot atomically. RWA underlyings as a first-class market."
        url="/use-cases/what-is-possible/options-venue"
    />
    <Card
        title="3. A perps venue"
        subtitle="App-chain performance without the app-chain trade-off. Collateral straight from mainnet, liquidations routed to whichever L1 venue has depth."
        url="/use-cases/what-is-possible/perps-venue"
    />
    <Card
        title="4. A prediction market"
        subtitle="Conditional Tokens with mainnet collateral, idle capital earning on L1, and resolution that reads Ethereum state directly."
        url="/use-cases/what-is-possible/prediction-market"
    />
    <Card
        title="5. Native infrastructure"
        subtitle="Oracles, indexers, solvers and custodians designed for a transaction that touches two chains."
        url="/use-cases/what-is-possible/native-infrastructure"
    />
    <Card
        title="6. Hybrid apps"
        subtitle="Keep liquidity and settlement on L1. Run matching, risk and high-churn state on Gnosis EEZ. Both halves in one atomic transaction."
        url="/use-cases/what-is-possible/hybrid-apps"
    />
</CardContainer>

## What you get

We are looking for design partners, not just deployments. Teams we work with will get:

- Early access to the EEZ devnet, which already runs end-to-end cross-chain execution.
- Direct work with the Gnosis engineering team on integration, from devnet to genesis.
- Introductions across the EEZ Alliance, including Aave, Safe, CoW Swap, Centrifuge, Monerium and xStocks.

## What to know

Gnosis EEZ genesis is targeted for Q1 2027. At launch, composability will run from Gnosis EEZ into Ethereum: your contracts will be able to call mainnet atomically. Full bidirectional composability, nested calls and real-time ZK proving will follow in 2027. Build for the first and design for the second.

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

The route in is the same as for every [launch partner](/launch-partner): deploy on Gnosis Chain now, and you are in production on Gnosis EEZ at genesis.

## Sources

- [On-Chain Options Volume Hits a Two-Year High (Cryptorank)](https://cryptorank.io/insights/analytics/on-chain-options-volume-hits-a-two-year-high)
