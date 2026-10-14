---
sidebar_position: 4
title: Brokers and investing apps
description: For brokers and investing apps adding tokenised securities, yield and self-custodial crypto. What ships today on Gnosis Chain and what same-block access to Ethereum liquidity changes.
keywords: [broker, investing app, tokenised securities, backed, cow protocol, sdai, full investing suite, ethereum liquidity, gnosis eez]
---

# Brokers and investing apps

**Who it is for.** Brokers, investing apps and wealth platforms adding tokenised securities, yield products or self-custodial crypto to an existing customer base.

## The problem today

Adding a tokenised instrument means a broker, a custodian and a CSD for the traditional leg, plus a venue, a bridge and an inventory for the on-chain leg. Liquidity for the on-chain leg usually lives on Ethereum mainnet, where fees do not suit a retail order size. Serving a retail customer from a cheaper chain means bridging liquidity to it and carrying the price risk between the two.

## What you can ship today on Gnosis Chain

- **Tokenised securities.** Backed issues bTokens that track listed instruments such as short-term treasury ETFs, each backed one-for-one with a custodian.
- **Yield products.** sDAI from Spark as a yield-bearing savings position, plus Aave lending markets.
- **Intent-based execution.** CoW Protocol settles signed intents in batches with MEV protection, so a customer order never pays gas for a failed fill. The same protocol lives at the same addresses on Ethereum. [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow) shows the whole flow in about eighty lines.
- **The full bundle.** The [Full Investing Suite](/start/embedded-components/full-investing-suite) switches on Account, Euro Money, Yield, Card Settlement, Assets, Fx and Transfers, Secured Credit, and Identity and Rewards.
- **Your own issuance.** [Launch a tokenised asset](/start/guides/launch-a-tokenised-asset) walks through a capped-supply token bound to an off-chain asset, with issuance controls you have tested.

## What changes with Gnosis EEZ

- **Fills from Ethereum liquidity in the same block.** A retail order on Gnosis EEZ can be settled against mainnet liquidity inside one transaction. No inventory on two chains, no bridge, and no price gap between the quote and the fill.
- **Retail fees, mainnet depth.** The order executes on the instance at instance fees and reaches the depth of Ethereum's markets.
- **Secured credit against mainnet collateral.** A Lombard-style loan on the instance can take a mainnet position as collateral, in the same transaction that opens it.
- **Settlement assurance.** ZK-proven blocks settled to Ethereum, with transfer restrictions for regulated instruments being built with design partners.

## Build path

1. [Deploy your first contract](/start/guides/deploy-your-first-contract), 30 minutes.
2. [Launch a tokenised asset](/start/guides/launch-a-tokenised-asset), 45 minutes.
3. [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow), 40 minutes.
4. Read the [Full Investing Suite](/start/embedded-components/full-investing-suite) bundle.

## Launch with Gnosis EEZ

Deploy on Gnosis Chain now and your execution, custody and asset contracts are on Gnosis EEZ at launch, where mainnet liquidity is a same-block call away. [Become a launch partner](/eez/launch-partner).
