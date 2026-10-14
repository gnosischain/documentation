---
sidebar_position: 6
title: DeFi protocols and infrastructure
description: For DEXs, solvers, money markets, vaults, derivatives and prediction markets. Same addresses on Gnosis and Ethereum today, and mainnet liquidity in the same transaction on Gnosis EEZ.
keywords: [defi protocol, dex, solver, money market, vault, derivatives, prediction market, leg risk, synchronous composability, gnosis eez]
---

# DeFi protocols and infrastructure

**Who it is for.** DEXs and solvers, money markets, vaults and yield protocols, derivatives and options venues, prediction markets, and the indexers, oracles and keepers that serve them.

## The problem today

A protocol that serves retail users deploys on a cheaper chain and then has to source liquidity, prices and collateral there. Hedging a position against mainnet means a bridge and a window of leg risk between the fill on one chain and the hedge on the other. Every additional chain is another deployment, another liquidity bootstrap and another set of oracle feeds to maintain.

## What you can ship today on Gnosis Chain

- **Same addresses as Ethereum.** CoW Protocol and Safe run at the same addresses on both chains, and Aave, Balancer and Curve are live here too. A deployment that uses deterministic addresses reaches both with one codebase.
- **Retail-scale economics.** Five-second blocks and fees around a hundredth of a cent make per-user actions such as rebalancing, liquidations and small orders economic.
- **Stable gas.** Gas is paid in xDai, so a keeper's cost base does not move with a volatile gas token.
- **Live counterparts.** Monerium EURe for the euro leg, sDAI for yield, CoW solvers for execution and Backed for tokenised instruments are all live and composable in one transaction.
- **Prediction markets at home.** Gnosis built the first on-chain prediction markets, and the conditional-token primitives are deployed here.

## What changes with Gnosis EEZ

- **Leg risk goes away.** A fill on Gnosis EEZ and a hedge on Ethereum mainnet will execute in the same block. There is no bridge window and no price gap.
- **Mainnet prices and liquidity in the same transaction.** A solver on the instance will be able to route part of an order through mainnet liquidity and settle both legs atomically. A money market will be able to liquidate against mainnet depth. A vault will be able to rebalance into a mainnet position without leaving the user's transaction.
- **No redeployment.** Protocol contracts, pools and positions carry over in the fork at the same addresses.
- **Ethereum settlement.** Blocks will be proven and settled to Ethereum. Proving starts with an interim setup, likely TEE-based, and moves to real-time ZK proofs, as set out in [how it works](/eez/how-it-works). Protocol risk assessments that discount sidechain security can be revisited as each stage lands.
- **What is not in the first release.** Synchronous calls will run from Gnosis EEZ into Ethereum at launch. Ethereum calling into Gnosis EEZ, and nested calls, will follow in 2027. Build for the first and design for the second. [How it works](/eez/how-it-works) has the detail, and the [request for builders](/eez/what-is-possible) sets out the venues we want to see built.

## Build path

1. [Deploy your first contract](/start/guides/deploy-your-first-contract), 30 minutes, or point an existing Foundry or Hardhat project at chain ID 100 with the [development environment](/category/deploy-contracts-on-gnosis) guides.
2. [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow) to see intent-based settlement from the integrator's side.
3. [Verify your contracts](/developers/Verify%20Smart%20Contracts/) on Gnosisscan and register them in the [ecosystem directory](https://build.gnosischain.com/).

## Launch with Gnosis EEZ

Deploy on Gnosis Chain now and your protocol is on Gnosis EEZ at launch, at the same addresses, with mainnet liquidity a same-block call away. [Become a launch partner](/launch-partner).
