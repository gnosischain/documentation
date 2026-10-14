---
sidebar_position: 4
sidebar_label: What is possible
slug: /eez/what-is-possible
title: What is possible on Gnosis EEZ
description: What changes for builders and users when an L2 and Ethereum mainnet share one transaction. Six kinds of product that Gnosis EEZ makes possible, from RWA lending to hybrid mainnet apps.
keywords: [what is possible on eez, synchronous composability, gnosis eez, rwa lending, options, perps, prediction markets, solvers, hybrid apps, ethereum economic zone]
---

# What is possible on Gnosis EEZ

Every L2 so far has been its own economy. Fast and cheap, but a bridge away from the assets, liquidity and price feeds that live on Ethereum mainnet. Apps on an L2 start with thin books and wrapped assets, and users pay for the gap every time they move funds.

Gnosis EEZ closes that gap. When Gnosis Chain becomes Gnosis EEZ, a contract on the L2 will be able to call mainnet and use the result in the same transaction. If any step fails, the whole thing reverts. Apps keep 2-second blocks and sub-cent fees, and reach mainnet depth whenever they need it.

## One economy, not two

Picture a user who holds euro e-money on Gnosis EEZ and wants exposure to a tokenised treasury fund. Today that is a bridge, a wait, a swap on another chain and a bridge back. On Gnosis EEZ it will be one transaction: the swap routes into mainnet liquidity, the position lands back on the L2, and either all of it happens or none of it does.

That single property, mainnet as a same-transaction call, changes what is worth building. Native liquidity on Gnosis EEZ and liquidity on mainnet stop competing and start reinforcing each other.

## What it unlocks

<FeatureGrid>
    <FeatureCard imgUrl="/img/feature-card-icons/file-contract.svg" title="Lending against real-world assets">
        <p>Tokenised treasuries, credit and equities become productive collateral. A market holds the canonical asset, not a wrapper, and liquidates into mainnet liquidity in the same transaction it spots a shortfall.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/right-left-large.svg" title="Options with mainnet hedging">
        <p>Quote and match on 2-second blocks, then hedge, exercise or settle against mainnet spot atomically. Market makers keep one pool of capital instead of splitting it across chains.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/rabbit-running.svg" title="Perps without the app-chain trade-off">
        <p>App-chain speed, with collateral taken straight from mainnet and no bridge step. Margin can stay productive in mainnet protocols until it is called.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/comments-question.svg" title="Prediction markets that read Ethereum">
        <p>Bet in dollars or euros sourced from mainnet, with idle stakes earning on L1 until a trader exits. Markets can resolve on Ethereum state, such as a governance vote, without an oracle hop.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/badge-check.svg" title="Infrastructure built for two chains">
        <p>Solvers that treat L1 and L2 liquidity as one book. Oracles, indexers and custodians that follow a single transaction across both chains and present it as one account.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/arrow-circle.svg" title="Hybrid mainnet apps">
        <p>A mainnet protocol keeps its liquidity and settlement on L1 and moves matching, risk or high-churn state to Gnosis EEZ. Both halves land together or not at all.</p>
    </FeatureCard>
</FeatureGrid>

Each of these is written up in detail, with what we want built and how to apply as a design partner, in the [request for builders](/use-cases/what-is-possible) under Use cases.

## Built on components that are already live

None of this starts from zero. Gnosis EEZ inherits everything live on Gnosis Chain today, with no redeployment: regulated euro e-money from Monerium, Safe smart accounts, CoW Protocol settlement, Gnosis Pay card rails, savings and tokenised assets. A new venue launches into an economy that already has users, euro liquidity and a card that spends from it.

## What to expect at launch

At genesis, composability runs from Gnosis EEZ into Ethereum: your contracts will be able to call mainnet atomically. Ethereum calling into Gnosis EEZ, nested calls and real-time ZK proving follow in 2027. The detail is on [how it works](/eez/how-it-works) and the [timeline](/eez/timeline).

## Start building

<CardContainer>
    <Card
        title="Request for builders"
        subtitle="The six builds in detail: what we want, why EEZ makes it possible, and how to apply."
        url="/use-cases/what-is-possible"
    />
    <Card
        title="Build on Gnosis EEZ"
        subtitle="The live components, network details and where to start as a developer."
        url="/use-cases/build"
    />
    <Card
        title="Become a launch partner"
        subtitle="Deploy on Gnosis Chain now and be in production on Gnosis EEZ at genesis."
        url="/launch-partner"
    />
</CardContainer>
