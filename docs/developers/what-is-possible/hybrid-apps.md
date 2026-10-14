---
sidebar_position: 7
sidebar_label: 6. Hybrid apps
title: Hybrid apps
description: Keep contracts, liquidity and settlement on Ethereum and run matching, risk or high-churn state on Gnosis EEZ. Both halves share one atomic transaction, and sync calls are reserved for high-value flows.
keywords: [hybrid apps, mainnet protocols, sync calls, matching engine, risk engine, high-churn state, sequencer, composer, prover, gnosis eez]
---

# Hybrid apps

Not every app needs to leave Ethereum. A mainnet protocol will be able to keep its contracts, liquidity and settlement on L1, and run its heavy or high-churn logic, such as matching or a risk engine, on Gnosis EEZ with 2-second blocks and sub-cent fees. Both halves will share one atomic transaction: both land or neither does.

Sync calls will carry a per-block verification cost on L1, so they suit high-value moments: deposit-and-use, liquidations against L1 prices and settlement. Everything else will run as ordinary Gnosis EEZ traffic. At launch, calls will run from Gnosis EEZ into L1. L1 contracts calling into Gnosis EEZ follow with bidirectional composability in 2027.

## What we want

We want mainnet teams that:

- Keep liquidity and settlement on L1 and move matching, risk or high-churn state to Gnosis EEZ.
- Reserve sync calls for high-value flows.
- Would rather build on Gnosis EEZ than operate their own sequencer, composer and prover.

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

What design partners get, what to know about the first release, and the other requests are on the [request for builders](/developers/what-is-possible) overview.
