---
sidebar_position: 5
sidebar_label: 4. Prediction market
title: A prediction market
description: Conditional Tokens or a successor design, settled in dollars and euros sourced from mainnet atomically, with idle collateral earning on L1 and resolution that can read Ethereum state directly.
keywords: [prediction market, conditional tokens, subjective oracles, resolution, short-dated markets, mainnet stablecoins, gnosis eez]
---

# A prediction market

Gnosis built the Conditional Tokens framework that today's largest prediction markets run on. The next design step is markets whose collateral and resolution touch L1 directly.

Prediction markets are high-frequency and small-ticket. They need fast blocks and fees that disappear into the trade, which Gnosis EEZ will deliver with 2-second blocks and sub-cent costs. What current markets have lacked is access: users bridge stablecoins in, and capital sits idle until resolution.

On Gnosis EEZ, markets will be able to settle in mainnet stablecoins without a bridge, and idle collateral will be able to sit in an L1 money market and be pulled back atomically when a trader exits. Markets will also be able to read Ethereum state directly, resolving on onchain events such as a governance vote or a protocol parameter without an oracle hop.

## What we want

We want a market that:

- Uses Conditional Tokens or a successor design, with deep liquidity on short-dated markets.
- Settles in dollars and euros, sourcing collateral from mainnet atomically.
- Resolves through credible subjective oracles, with disputes handled transparently.
- Keeps idle collateral earning on L1, withdrawn atomically when positions close.

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

What design partners get, what to know about the first release, and the other requests are on the [request for builders](/developers/what-is-possible) overview.
