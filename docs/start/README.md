---
sidebar_position: 1
title: Embed
description: Gnosis Chain is a community-owned EVM-based network, and three getting-started routes into it for fintechs embedding open finance components, each with 0-1 guides that end in a verified on-chain result.
keywords: [getting started, fintech, embedded finance, gnosis eez, stablecoin payments, tokenised assets, about gnosis chain, fees, xdai]
---

# Embed Ethereum's economy in your product.

Gnosis EEZ gives fintechs open finance components with consumer-grade guardrails: yield, savings, investing and payments that reach mainnet assets and liquidity in the same transaction. The guides here take you from nothing to a result you can verify on-chain.

## About Gnosis Chain

Gnosis Chain is a community-owned EVM-based network operated by a diverse set of validators around the world. It is one of Ethereum's first sidechains focused on resilience and credible neutrality as its core values. Currently, there are over 200,000 validators who secure the network.

Gnosis Chain uses a DAO governance mechanism to ensure anyone can participate in the decision-making processes regarding the development and future of the network. Creating dApps and integrating with Gnosis Chain products is similar to any other EVM-based blockchain. You can find more details in the [protocol specification](/about/specs).

**Fees.** Each transaction on Gnosis Chain (sending tokens, interacting with smart contracts, etc.) is associated with a fee in the xDai stablecoin. This is one of the main differences from other EVM chains, where users pay in a native token of that network — it reduces volatility risk and simplifies the development experience. Transaction fees are not split among pool participants of the validation process; they are received only by the validator who sealed the block. Note this is subject to change — as the network grows, fees may be redirected to support additional aspects of the protocol.

## Embedded components

Gnosis Chain carries a full set of consumer-grade finance components, and the rails are ready to embed. Pick the route that matches what you are shipping. Each one lists the components it switches on, what they replace, and the 0-1 guides that take you from an empty directory to a result you can verify on-chain.

### 01 · [Yield inside your wallet](/start/embedded-components/yield-in-your-wallet)

For trading and payment apps already selling a money market fund. A rail swap on the same fee model.

**Includes:** Account, Euro Money, Yield  
**Status:** Design partners

### 02 · [Spend and Save](/start/embedded-components/spend-and-save)

For wallets and challengers that want a card without carrying a balance sheet. Live today.

**Includes:** Account, Euro Money, Yield, Card Settlement, Identity and Rewards  
**Status:** Live today

### 03 · [Full Investing Suite](/start/embedded-components/full-investing-suite)

For brokers and neobanks adding tokenised assets and self-custodial crypto.

**Includes:** Account, Euro Money, Yield, Card Settlement, Assets, Fx & Transfers, Secured Credit, Identity and Rewards  
**Status:** Design partners

## The component catalogue

Every route is a bundle of the same eight components. You switch on the ones you need.

| Component | Replaces |
| --- | --- |
| Account | core banking and a sub-ledger vendor |
| Euro Money | a deposit account and safeguarding |
| Yield | a money market fund rail or partner-bank sweep |
| Card Settlement | float, processor and BIN sponsor |
| Assets | broker, custodian and CSD |
| Fx & Transfers | a treasury desk and correspondents |
| Secured Credit | Lombard lending |
| Identity and Rewards | batch AML and a loyalty ledger |

## If you are not a fintech

The routes above are built around embedding finance components. If you are deploying a contract, running infrastructure, or bridging assets, start from the [developer overview](/developers/overview) instead.
