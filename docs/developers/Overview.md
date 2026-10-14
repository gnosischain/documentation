---
sidebar_position: 1
description: Gnosis EEZ is the Ethereum Economic Zone, a set of live open finance components on Gnosis Chain that compose in a single transaction and reach Ethereum mainnet liquidity.
keywords: [gnosis eez, ethereum economic zone, open finance, embedded finance, eure, safe, cow protocol, tokenised assets, gnosis chain developers]
title: Overview
---

# Build on the Ethereum Economic Zone

Gnosis, a European leader in open finance, built Safe, CoW Swap, Gnosis Pay and Gnosis Chain. It is now developing the Ethereum Economic Zone (EEZ) with Zisk and co-funding from the Ethereum Foundation.

Gnosis Chain becomes the first instance of EEZ in Q1 2027, with its state carried over in a hard fork so nothing deployed today is redeployed. What is already here is the set of open finance components live on Gnosis Chain, together with the properties that let you treat them as one system rather than a list of separate integrations. The [Gnosis EEZ](/eez) section covers the transition; this page covers building on the chain as it runs today. Regulated euro e-money, yield, smart accounts, intent-based settlement and tokenised assets are all deployed on the same chain. A single transaction can touch several of them without a bridge or a third-party dependency in the middle.

## What the EEZ brings

<CardContainer>
    <FeatureCard imgUrl="/img/feature-card-icons/file-contract.svg">
        <p><strong>Components, not integrations.</strong> Euro e-money, savings, lending, trading and card settlement are already deployed and verified. You call contracts rather than onboarding a vendor for each capability.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/right-left-large.svg">
        <p><strong>Atomic composition.</strong> Because every component settles on one chain, a swap into a yield-bearing position or a payment funded from savings happens in the same transaction, with no bridge in the middle.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/rabbit-running.svg">
        <p><strong>Costs that suit consumer flows.</strong> Blocks settle every 5 seconds and the average transaction costs around $0.0001, so per-user actions such as rebalancing or streaming payments stay economic.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/arrow-circle.svg">
        <p><strong>Ethereum reach.</strong> Gnosis Chain is an EVM network with a <a href="/bridges">native bridge</a> to Ethereum. Protocols such as CoW deploy at the same addresses on both, so the same code reaches mainnet assets and liquidity.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/file-contract.svg">
        <p><strong>A stable unit of account.</strong> Gas is paid in <a href="/about/tokens/xdai">xDai</a>, and the euro leg is <a href="https://monerium.com">Monerium</a> EURe, regulated e-money redeemable one-for-one over IBAN. Neither leg exposes users to gas-token volatility.</p>
    </FeatureCard>
    <FeatureCard imgUrl="/img/feature-card-icons/comments-question.svg">
        <p><strong>Canonical addresses.</strong> The ecosystem registry publishes verified contract addresses for every listed project, reachable from your editor through the <a href="https://github.com/gnosischain/gnosis-ecosystem-mcp">Gnosis EEZ MCP server</a>.</p>
    </FeatureCard>
</CardContainer>

## The component layer

These are the pieces you compose. Every project below is live on Gnosis Chain today, and the ones marked as Alliance members are part of the EEZ Alliance.

| Component | Provided by | What it gives you |
| --- | --- | --- |
| Euro and sterling e-money | Monerium (Alliance) | EURe and GBPe, regulated e-money redeemable one-for-one at a bank account over IBAN |
| Smart accounts | Safe (Alliance) | Multi-signature accounts, programmable modules and transaction batching, the usual custody layer for treasuries |
| Trading and settlement | CoW Protocol (Alliance) | Intent-based orders signed off-chain and settled in batches by competing solvers, with MEV protection |
| Card settlement | Gnosis Pay (Alliance) | A Safe holds the balance in EURe and settles Visa payments directly from it |
| Savings and yield | Spark, Aave | sDAI as a yield-bearing wrapper around xDai savings, plus lending markets for stablecoins |
| Stable liquidity routing | Curve, Balancer | Low-slippage pools for like-priced assets, and a shared vault that keeps multi-hop swaps cheap |
| Tokenised securities | Backed | bTokens tracking listed instruments such as short-term treasury ETFs, each backed one-for-one with a custodian |
| Trust and identity | Circles | Personal currencies issued on a web of trust between people |

Ask the MCP server for `eez_list_apps` to get the current registry, or `eez_get_contract_addresses` for canonical addresses that have been checked against Blockscout. Never copy an address from memory.

## Network details

| | Gnosis | Chiado testnet |
| --- | --- | --- |
| Chain ID | 100 | 10200 |
| RPC | `https://rpc.gnosischain.com` | `https://rpc.chiadochain.net` |
| Explorer | [Blockscout](https://gnosis.blockscout.com) | [Blockscout](https://gnosis-chiado.blockscout.com) |
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
        subtitle="Publish your source to Blockscout or Sourcify so others can read it."
        url="/developers/Verify Smart Contracts/"
    />
    <Card
        title="Demo projects"
        subtitle="End-to-end builds that compose EEZ components, starting from an empty directory."
        url="/category/demo-projects"
    />
</CardContainer>

## Resources

- [Wallets](/tools/wallets): wallets that support Gnosis Chain.
- [Faucets](/tools/Faucets): testnet funds for Chiado.
- [RPC providers](/tools/RPC%20Providers/): public and hosted endpoints.
- [Bridges](/bridges): move tokens and messages between Ethereum and Gnosis.
- [Embed](/start): the component bundles for fintechs, with 0-1 guides for each.
