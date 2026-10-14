---
sidebar_position: 1
title: Use cases
sidebar_label: Overview
description: What Gnosis EEZ means for each kind of application. Wallets, neobanks, brokers, asset issuers, DeFi protocols and market infrastructure, each with what you can ship today and what changes at launch.
keywords: [use cases, gnosis eez, wallets, neobanks, brokers, asset issuers, defi protocols, exchanges, market infrastructure]
---

# Use cases

Every page in this section follows the same shape: who it is for, the problem today, what you can ship on Gnosis Chain now, what changes when Gnosis EEZ activates, and the guides to start with. Each one ends with the same call to action, because the route is the same for everyone: deploy now, and [launch with Gnosis EEZ in Q1 2027](/launch-partner).

<CardContainer>
    <Card
        title="Wallets and payment apps"
        subtitle="A balance that earns, a card that spends from it, and mainnet assets in reach from the same account."
        url="/use-cases/wallets-and-payment-apps"
    />
    <Card
        title="Neobanks and challengers"
        subtitle="A spending account, savings, a card and investing without a balance sheet, a processor or a custodian."
        url="/use-cases/neobanks-and-challengers"
    />
    <Card
        title="Brokers and investing apps"
        subtitle="Tokenised securities, yield and self-custodial crypto, filled from Ethereum liquidity in the same block."
        url="/use-cases/brokers-and-investing-apps"
    />
    <Card
        title="Asset issuers"
        subtitle="A second venue for tokenised instruments and e-money, with distribution into consumer apps and mainnet."
        url="/use-cases/asset-issuers"
    />
    <Card
        title="DeFi protocols and infrastructure"
        subtitle="Mainnet liquidity and prices in the same transaction. No leg risk between a Gnosis fill and an Ethereum hedge."
        url="/use-cases/defi-protocols"
    />
    <Card
        title="Exchanges and market infrastructure"
        subtitle="Gnosis EEZ as a ready-made venue today. An instance of your own, with transfer restrictions, next."
        url="/use-cases/exchanges-and-market-infrastructure"
    />
</CardContainer>

## The components every use case draws on

The use cases are different arrangements of the same live components. Each one is deployed and verified on Gnosis Chain today and carries over to Gnosis EEZ unchanged.

| Component | Provided by | What it gives you |
| --- | --- | --- |
| Euro and sterling e-money | Monerium | EURe and GBPe, regulated e-money redeemable one-for-one over IBAN |
| Smart accounts | Safe | Multi-signature accounts, modules and batching |
| Trading and settlement | CoW Protocol | Intent-based orders settled in batches by competing solvers |
| Card settlement | Gnosis Pay | A Safe that holds EURe and settles Visa payments from it |
| Savings and yield | Spark, Aave | sDAI as yield-bearing savings, plus lending markets |
| Stable liquidity | Curve, Balancer | Low-slippage pools for like-priced assets |
| Tokenised securities | Backed | bTokens tracking listed instruments, backed one-for-one with a custodian |
| Identity and trust | Circles | Personal currencies on a web of trust |

Addresses come from the [ecosystem directory](https://build.gnosischain.com/) or the Gnosis EEZ MCP server. Never copy one from memory.

## A note on agents

Agent-driven payments and trading are not a separate use case here. They cut across every page: an agent paying a merchant is a payments flow, an agent rebalancing a portfolio is a brokerage flow. The MCP server that serves this documentation and the ecosystem registry is the first piece of agent tooling, and more follows as the use cases above go live on Gnosis EEZ.
