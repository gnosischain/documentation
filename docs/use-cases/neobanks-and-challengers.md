---
sidebar_position: 3
title: Neobanks and challengers
description: For neobanks and challenger banks that want a spending account, savings, a card and investing without carrying a balance sheet, a processor or a custodian. What ships today and what Gnosis EEZ adds.
keywords: [neobank, challenger bank, embedded finance, spend and save, eure, gnosis pay, card without balance sheet, gnosis eez]
---

# Neobanks and challengers

**Who it is for.** Neobanks, challenger banks and fintechs that run a consumer account and want to add savings, a card, investing or euro rails without a new balance sheet or a new set of vendors.

## The problem today

A challenger has five jobs to do with a customer's money: hold it, make the idle balance earn, let the customer spend it on a card, let them invest it, and prove to an auditor where it all went. Each job is a vendor today: core banking, a sub-ledger, a safeguarding account, a processor and BIN sponsor, a broker and custodian. Each vendor is a contract, an integration and a line in the risk register.

## What you can ship today on Gnosis Chain

- **A spending account that earns.** A Safe holds EURe, the idle balance sits in sDAI or a lending market, and the customer spends from it on a Gnosis Pay card. The [Spend and Save](/start/embedded-components/spend-and-save) bundle is live today and switches on Account, Euro Money, Yield, Card Settlement, and Identity and Rewards.
- **Regulated euro e-money.** Monerium EURe is redeemable one-for-one over IBAN, so the customer's euro leg is e-money rather than a stablecoin of uncertain backing.
- **An audit trail by default.** Every movement is a transaction on a public chain with a verified contract. The audit job is a block explorer query rather than a reconciliation project.
- **Investing on the same account.** Add tokenised securities and self-custodial crypto through the [Full Investing Suite](/start/embedded-components/full-investing-suite) bundle.

## What changes with Gnosis EEZ

- **Ethereum under the account.** The customer's balance will sit on an instance whose blocks are proven and settled to Ethereum. Proving starts with an interim setup, likely TEE-based, and moves to real-time ZK proofs, as set out in [how it works](/eez/how-it-works). A risk committee assesses one settlement model, once, for every product on the platform.
- **Investing filled from mainnet.** A customer buying a tokenised asset will get the fill from Ethereum liquidity in the same block, with no bridge and no inventory held on two chains.
- **Compliance built with design partners.** Freeze controls, transfer restrictions and private transactions are being built with the first cohort of fintechs. Launch partners shape them.
- **One integration, every product.** Integrate once and each component becomes a toggle for every customer on the platform. The fork carries all of it across.

## Build path

1. [Deploy your first contract](/start/guides/deploy-your-first-contract), 30 minutes.
2. [Accept stablecoin payments](/start/guides/accept-stablecoin-payments), 40 minutes, to understand the EURe flow.
3. Read the [Spend and Save](/start/embedded-components/spend-and-save) bundle and the [component catalogue](/start#the-component-catalogue).
4. Talk to the team about switching on card settlement and identity.

## Launch with Gnosis EEZ

Deploy on Gnosis Chain now and your account product is on Gnosis EEZ at launch, with the customer's balance, card and savings carried over. [Become a launch partner](/launch-partner).
