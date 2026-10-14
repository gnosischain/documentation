---
sidebar_position: 3
sidebar_label: 2. Options venue
title: An options venue
description: Quote and match on 2-second blocks, then hedge, exercise or settle against mainnet spot liquidity atomically. Options on ETH, majors and tokenised equities, with RWA underlyings as a first-class market.
keywords: [options venue, onchain options, portfolio margin, covered call vault, tokenised equities, rwa underlyings, mainnet price feeds, gnosis eez]
---

# An options venue

Onchain options are finally scaling. Notional volume hit $7.52B in Q3 2026, a two-year high, and one venue did most of it by running its own L2 with an order book and portfolio margin. That works, but it trades shared liquidity for speed: market makers hedge against spot that lives elsewhere, and collateral has to be bridged in.

Gnosis EEZ will remove that gap. A venue will be able to quote and match on 2-second blocks, then hedge, exercise or settle against mainnet spot liquidity atomically. Writers and market makers will keep one pool of capital instead of splitting inventory across chains.

The set of underlyings widens too. A venue will be able to list options on any asset with mainnet liquidity, including tokenised equities and RWAs, and hedge against L1 venues atomically rather than maintaining its own spot market.

## What we want

We want a venue that:

- Lists options on ETH, majors and tokenised equities, with RWA underlyings as a first-class market.
- Hedges and settles atomically against mainnet liquidity.
- Offers structured products that compose with L1, such as a covered call vault that keeps its collateral in a mainnet money market until it is needed.
- Reads mainnet price feeds atomically at exercise and settlement.

Source: [On-Chain Options Volume Hits a Two-Year High (Cryptorank)](https://cryptorank.io/insights/analytics/on-chain-options-volume-hits-a-two-year-high).

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

What design partners get, what to know about the first release, and the other requests are on the [request for builders](/use-cases/what-is-possible) overview.
