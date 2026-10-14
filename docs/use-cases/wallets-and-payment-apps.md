---
sidebar_position: 2
title: Wallets and payment apps
description: For wallets and payment apps that want a balance that earns, a card that spends from it, and stablecoin payments that settle in seconds. What ships today on Gnosis Chain and what Gnosis EEZ adds.
keywords: [wallet, payment app, stablecoin payments, eure, gnosis pay, sdai, yield in your wallet, gnosis eez]
---

# Wallets and payment apps

**Who it is for.** Self-custodial wallets, payment apps and trading apps that already hold a user balance and want it to do more: earn, spend on a card, or pay a merchant in a stablecoin.

## The problem today

A wallet that wants to offer yield needs a money market fund partner and a reconciliation layer. A wallet that wants a card needs a processor, a BIN sponsor and float. A payment app that wants to accept stablecoins across chains ends up running bridges and holding inventory on each one. Every feature is a vendor, and every vendor is a separate integration and a separate compliance review.

## What you can ship today on Gnosis Chain

- **Yield inside the wallet.** Swap the rail underneath the balance your users already hold for sDAI or a lending market position, on the same fee model. The [Yield inside your wallet](/start/embedded-components/yield-in-your-wallet) bundle sets it out.
- **A card that spends from the balance.** Gnosis Pay settles Visa payments from a Safe holding EURe. No float, no processor to pre-pay. The [Spend and Save](/start/embedded-components/spend-and-save) bundle is live today.
- **Stablecoin payments.** Accept EURe, USDC or any ERC-20 with a verified receiver contract. [Accept stablecoin payments](/start/guides/accept-stablecoin-payments) takes about 40 minutes.
- **Costs that suit consumer flows.** Blocks every five seconds and fees around a hundredth of a cent, so per-user actions such as sweeping to savings or streaming a payment stay economic.

## What changes with Gnosis EEZ

- **Mainnet assets from the same account.** A user's Gnosis EEZ account can hold a position on Ethereum mainnet and a card balance on the instance, and act on both in one transaction. No bridge step in the user flow.
- **Mainnet prices and liquidity for in-wallet swaps.** A swap inside the wallet can be filled from Ethereum liquidity in the same block, so the quote the user sees is the fill they get.
- **Ethereum's security under the balance.** Blocks are ZK-proven and settled to Ethereum. For a risk committee, that is a different conversation from a sidechain with its own validator set.
- **Nothing to migrate.** The accounts, the EURe, the card integration and the yield positions carry over in the fork.

## Build path

1. [Deploy your first contract](/start/guides/deploy-your-first-contract), 30 minutes.
2. [Accept stablecoin payments](/start/guides/accept-stablecoin-payments), 40 minutes.
3. [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow), 40 minutes, and point the same code at Ethereum mainnet.
4. Read the [Spend and Save](/start/embedded-components/spend-and-save) bundle and talk to the team about switching on card settlement.

## Launch with Gnosis EEZ

Deploy on Gnosis Chain now and your wallet is on Gnosis EEZ at launch, with no redeployment and no user migration. [Become a launch partner](/eez/launch-partner).
