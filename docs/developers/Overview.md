---
sidebar_position: 1
description: Gnosis EEZ is the Ethereum Economic Zone, a set of live open finance components on Gnosis Chain that compose in a single transaction and reach Ethereum mainnet liquidity.
keywords: [gnosis eez, ethereum economic zone, open finance, embedded finance, eure, safe, cow protocol, tokenised assets, gnosis chain developers]
title: Overview
---

# Build on the Ethereum Economic Zone

Gnosis Chain becomes the first instance of the Ethereum Economic Zone (EEZ) in Q1 2027.

EEZ lets a contract on Gnosis call Ethereum mainnet apps and infrastructure and use the result in the same transaction. You keep 2-second blocks and sub-cent fees, and reach mainnet DEXs, money markets, oracles and stablecoins when you need depth. If any step fails, the whole transaction reverts. State is proven and settles to L1, starting with an interim proving setup before real-time ZK proofs ([how it works](/eez/how-it-works)).

Contracts you deploy on Gnosis Chain today carry over to EEZ unchanged, at the same addresses.

## What the EEZ brings

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

Once Gnosis Chain becomes Gnosis EEZ, a contract here will be able to call Ethereum mainnet and use the result in the same transaction. The [request for builders](/developers/what-is-possible) sets out six builds that this makes possible or much better, from an RWA lending market to hybrid mainnet apps, with what we want built and how to apply as a design partner.

<CardContainer>
    <Card
        title="Request for builders"
        subtitle="Lending, options, perps, prediction markets, native infrastructure and hybrid apps, in detail."
        url="/developers/what-is-possible"
    />
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
