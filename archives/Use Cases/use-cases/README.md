---
sidebar_position: 1
title: Use cases
sidebar_label: Overview
description: The Ethereum Economic Zone is a neutral rollup framework and Gnosis EEZ is its first instance. Start building on it, read the request for builders, or see what it means for wallets, neobanks, brokers, asset issuers, DeFi protocols and market infrastructure.
keywords: [use cases, gnosis eez, wallets, neobanks, brokers, asset issuers, defi protocols, exchanges, market infrastructure]
---

import ComponentsTable from '@site/docs/_partials/_components-table.mdx';

# Use cases

The [Ethereum Economic Zone](/eez) (EEZ) is a neutral rollup framework. Rollups built on it are designed to settle to Ethereum and to call Ethereum mainnet contracts in the same transaction. The framework has no token and is not a Gnosis product.

Gnosis EEZ is its first instance, operated by Gnosis. In Q1 2027 the state of Gnosis Chain will be hard-forked onto it, so everything live on Gnosis Chain today carries over without redeployment.

This section shows what that means in practice. Start from what you are doing.

## If you are building

<CardContainer>
    <Card
        title="Building on Gnosis EEZ"
        subtitle="The components live on Gnosis Chain today, the network details and where to start as a developer."
        url="/use-cases/build"
    />
    <Card
        title="What is possible: request for builders"
        subtitle="Six builds that a same-transaction call to mainnet makes possible, and how to apply as a design partner."
        url="/use-cases/what-is-possible"
    />
</CardContainer>

## If you are choosing by audience

Every audience page follows the same shape: who it is for, the problem today, what you can ship on Gnosis Chain now, what changes when Gnosis EEZ activates, and the guides to start with. Each one ends with the same call to action, because the route is the same for everyone: deploy now, and [launch with Gnosis EEZ in Q1 2027](/launch-partner).

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

The use cases are different arrangements of the same live components.

<ComponentsTable />

Addresses come from the [ecosystem directory](https://build.gnosischain.com/) or the Gnosis EEZ MCP server. Never copy one from memory.

## A note on agents

Agent-driven payments and trading are not a separate use case here. They cut across every page: an agent paying a merchant is a payments flow, an agent rebalancing a portfolio is a brokerage flow. The MCP server that serves this documentation and the ecosystem registry is the first piece of agent tooling, and more follows as the use cases above go live on Gnosis EEZ.
