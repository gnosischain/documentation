---
sidebar_position: 5
title: Asset issuers
description: For issuers of tokenised securities, funds, e-money and stablecoins. Gnosis Chain as a second venue today, and Gnosis EEZ as distribution into consumer apps with mainnet reach.
keywords: [asset issuer, tokenised securities, stablecoin issuer, e-money, eure, backed, rwa, distribution, gnosis eez]
---

# Asset issuers

**Who it is for.** Issuers of tokenised securities and funds, e-money institutions, and stablecoin issuers who want distribution into consumer products and reach into Ethereum's markets.

## The problem today

An issuer deploys on Ethereum mainnet for credibility and liquidity, then finds that retail distribution does not happen there because fees do not suit small holdings. Deploying on a second chain means a second deployment, a bridge, a wrapped version of the asset and a second compliance perimeter. Transfer restrictions that work on one chain have to be re-implemented on the other.

## What you can ship today on Gnosis Chain

- **A second venue with retail economics.** Five-second blocks and fees around a hundredth of a cent make small holdings and frequent distributions economic.
- **Distribution into live consumer products.** Gnosis Pay card accounts, Zeal and other wallets, and the fintech bundles in the [Embed](/start) section are the demand side for an issued asset.
- **Euro settlement from day one.** Monerium EURe is the euro settlement leg for every component on the chain, so an instrument can be subscribed and redeemed in regulated e-money.
- **Issuance you can test.** [Launch a tokenised asset](/start/guides/launch-a-tokenised-asset) covers a capped supply, an on-chain document reference and issuance controls, in about 45 minutes.
- **Precedent.** Backed issues bTokens on Gnosis Chain today, backed one-for-one with a custodian.

## What changes with Gnosis EEZ

- **One asset, two venues, no wrapping.** An instrument on Gnosis EEZ will be able to reach Ethereum liquidity and counterparties in the same transaction. The retail venue and the institutional venue will stop being two deployments with a bridge between them.
- **Transfer restrictions that hold across the boundary.** Whitelists and restrictions enforced on the instance will apply to every leg of a transaction that starts there, including the leg that touches Ethereum, because the whole transaction reverts if any step fails.
- **Settlement to Ethereum.** The issuer's record of ownership will be proven and settled on Ethereum, which is the kind of assurance an institutional counterparty asks for. Proving starts with an interim setup, likely TEE-based, and moves to real-time ZK proofs, as set out in [how it works](/eez/how-it-works).
- **A permissioned instance if you need one.** The same framework will let an issuer or its venue run a private instance with on-chain restrictions and still compose with public DeFi. See [exchanges and market infrastructure](/use-cases/exchanges-and-market-infrastructure).

## Build path

1. [Deploy your first contract](/start/guides/deploy-your-first-contract), 30 minutes.
2. [Launch a tokenised asset](/start/guides/launch-a-tokenised-asset), 45 minutes.
3. Register the asset in the [ecosystem directory](https://build.gnosischain.com/) so its addresses are checked and published.

## Launch with Gnosis EEZ

Issue on Gnosis Chain now and the instrument is on Gnosis EEZ at launch, with its holders and restrictions carried over and Ethereum a same-block call away. [Become a launch partner](/launch-partner).
