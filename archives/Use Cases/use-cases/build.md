---
sidebar_position: 2
sidebar_label: Building on Gnosis EEZ
slug: /use-cases/build
description: The Ethereum Economic Zone (EEZ) is a neutral rollup framework. Gnosis EEZ is its first instance, operated by Gnosis, and Gnosis Chain becomes it in Q1 2027. Build on Gnosis Chain now with the open finance components that carry over.
keywords: [gnosis eez, ethereum economic zone, open finance, embedded finance, eure, safe, cow protocol, tokenised assets, gnosis chain developers]
title: Building on Gnosis EEZ
---

import ComponentsTable from '@site/docs/_partials/_components-table.mdx';

# Building on Gnosis EEZ

The Ethereum Economic Zone (EEZ) is a neutral rollup framework. Rollups built on it settle to Ethereum and can call Ethereum mainnet contracts in the same transaction. The framework has no token and is not a Gnosis product. [What is the Ethereum Economic Zone](/eez) has the detail.

Gnosis EEZ is its first instance, operated by Gnosis. In Q1 2027 the state of Gnosis Chain is hard-forked onto it, so contracts you deploy on Gnosis Chain today carry over to Gnosis EEZ unchanged, at the same addresses.

Once Gnosis EEZ is live, a contract on it will be able to call Ethereum mainnet apps and infrastructure and use the result in the same transaction. If any step fails, the whole transaction reverts. State will be proven and settled to L1, starting with an interim proving setup before real-time ZK proofs ([how it works](/eez/how-it-works)).

## What Gnosis Chain brings to Gnosis EEZ

These are properties of Gnosis Chain today. Each one carries over to Gnosis EEZ at the fork.

<FeatureGrid>
    <FeatureCard imgUrl="/img/feature-card-icons/file-contract.svg" title="Components, not integrations">
        <p>Euro e-money, savings, lending, trading and card settlement are already deployed and verified. You call contracts rather than onboarding a vendor for each capability.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/right-left-large.svg" title="Atomic composition">
        <p>Because every component settles on one chain, a swap into a yield-bearing position or a payment funded from savings happens in the same transaction, with no bridge in the middle.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/rabbit-running.svg" title="Costs that suit consumer flows">
        <p>Blocks settle every 5 seconds and the average transaction costs around $0.0001, so per-user actions such as rebalancing or streaming payments stay economic.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/arrow-circle.svg" title="Ethereum reach">
        <p>Gnosis Chain is an EVM network with a <a href="/bridges">native bridge</a> to Ethereum. Protocols such as CoW deploy at the same addresses on both, so the same code reaches mainnet assets and liquidity.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/euro.svg" title="A stable unit of account">
        <p>Gas is paid in <a href="/about/tokens/xdai">xDai</a>, and the euro leg is <a href="https://monerium.com">Monerium</a> EURe, regulated e-money redeemable one-for-one over IBAN. Neither leg exposes users to gas-token volatility.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/badge-check.svg" title="Canonical addresses">
        <p>The ecosystem registry publishes verified contract addresses for every listed project, reachable from your editor through the <a href="https://github.com/gnosischain/gnosis-ecosystem-mcp">Gnosis EEZ MCP server</a>.</p>
    </FeatureCard>
</FeatureGrid>

## What is possible on EEZ

Once Gnosis Chain becomes Gnosis EEZ, a contract here will be able to call Ethereum mainnet and use the result in the same transaction. The [request for builders](/use-cases/what-is-possible) sets out six builds that this makes possible or much better, from an RWA lending market to hybrid mainnet apps, with what we want built and how to apply as a design partner.

<CardContainer>
    <Card
        title="Request for builders"
        subtitle="Lending, options, perps, prediction markets, native infrastructure and hybrid apps, in detail."
        url="/use-cases/what-is-possible"
    />
</CardContainer>

## The component layer

These are the pieces you compose.

<ComponentsTable />

Ask the MCP server for `eez_list_apps` to get the current registry, or `eez_get_contract_addresses` for canonical addresses that have been checked against Blockscout. Never copy an address from memory.

## Network details

These are the networks you deploy to today. When Gnosis EEZ activates, block time will drop to 2 seconds. Any other network parameter that changes will be published in the [network details](/about/networks/) before activation.

| | Gnosis Chain | Chiado testnet |
| --- | --- | --- |
| Chain ID | 100 | 10200 |
| RPC | `https://rpc.gnosischain.com` | `https://rpc.chiadochain.net` |
| Explorer | [Gnosisscan](https://gnosisscan.io) | [Blockscout](https://gnosis-chiado.blockscout.com) |
| Gas token | xDai | xDai (test) |
| Block time | 5 seconds | 5 seconds |

Full details are in [network overview](/about/networks/) and [useful contracts](/developers/Usefulcontracts).

## Getting started

Work through these in order if you are new to the chain. Each one ends in something you can check on an explorer.

<CardContainer>
    <Card
        title="Quickstart"
        subtitle="Deploy your first contract to Gnosis Chain with Remix, in about 15 minutes."
        url="/developers/quickstart"
    />
    <Card
        title="Development environments"
        subtitle="Set up Foundry or Hardhat and point it at Gnosis or Chiado."
        url="/category/deploy-contracts-on-gnosis"
    />
    <Card
        title="Template contracts"
        subtitle="Reference implementations for tokens, NFTs and a full-stack dApp."
        url="/category/build-contracts-on-gnosis"
    />
    <Card
        title="Interact with contracts"
        subtitle="Read and write contract state from viem, ethers.js, web3.js or MetaMask."
        url="/category/interact-with-contracts-on-gnosis"
    />
    <Card
        title="Verify contracts"
        subtitle="Publish your source to a block explorer or Sourcify so others can read it."
        url="/developers/Verify Smart Contracts/"
    />
    <Card
        title="Demo projects"
        subtitle="End-to-end builds that compose Gnosis Chain components, starting from an empty directory."
        url="/category/demo-projects"
    />
</CardContainer>

## Resources

- [Wallets](/tools/wallets): wallets that support Gnosis Chain.
- [Faucets](/tools/Faucets): testnet funds for Chiado.
- [RPC providers](/tools/RPC%20Providers/): public and hosted endpoints.
- [Bridges](/bridges): move tokens and messages between Ethereum and Gnosis.
- [Embed](/start): the component bundles for fintechs, with 0-1 guides for each.
