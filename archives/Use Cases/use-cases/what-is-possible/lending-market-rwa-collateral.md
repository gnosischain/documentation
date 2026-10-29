---
sidebar_position: 2
sidebar_label: 1. Lending market for RWA collateral
title: The lead lending market for RWA collateral
description: We want one team to be the anchor lending market for Gnosis EEZ. Hold the canonical tokenised asset, liquidate atomically against mainnet liquidity, and lend euro e-money and dollar stablecoins sourced from L1.
keywords: [lending market, rwa collateral, tokenised treasuries, private credit, tokenised equities, liquidations, centrifuge, xstocks, monerium, gnosis eez]
---

# The lead lending market for RWA collateral

Tokenised treasuries, credit and equities are live onchain. Using them as collateral is still hard. Each chain holds a bridged wrapper of the asset, and liquidity for liquidations sits elsewhere.

On Gnosis EEZ a lending market will be able to hold the canonical asset rather than a wrapper, because issuers will be able to deploy one asset zone-wide. When a position needs liquidating, the market will be able to sell collateral into mainnet liquidity in the same transaction it detects the shortfall. No bridge leg, no stranded bad debt waiting on a cross-chain message.

The market also doesn't have to start empty. It will be able to source liquidity from mainnet money markets atomically, route a borrow to wherever rates are best, or refinance a position from L1 in a single transaction, while users get L2 speed and fees.

## What we want

We want one team to be the anchor lending market for Gnosis EEZ. The ideal build:

- Accepts tokenised treasuries, private credit and tokenised equities as collateral.
- Liquidates atomically against mainnet liquidity.
- Lends regulated euro e-money and dollar stablecoins sourced from mainnet.
- Composes with L1 money markets for liquidity, refinancing and rate discovery in the same transaction.

EEZ Alliance members already include Centrifuge, xStocks and Monerium on the asset side. We are working with capital markets and institutional asset issuers to bring new tokenised products. You would be the venue that makes those assets productive.

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

What design partners get, what to know about the first release, and the other requests are on the [request for builders](/use-cases/what-is-possible) overview.
