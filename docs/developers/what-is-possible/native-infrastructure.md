---
sidebar_position: 6
sidebar_label: 5. Native infrastructure
title: Native infrastructure
description: Oracles, indexers, solvers and custodians designed for a chain that composes with Ethereum every slot, where a single transaction may touch two chains.
keywords: [oracles, price feeds, subjective oracles, indexers, data apis, solvers, cow swap solvers, custodians, safe modules, gnosis eez]
---

# Native infrastructure

The four venues in this section need components designed for a chain that composes with Ethereum every slot. Existing tooling assumes a transaction lives on one chain. On Gnosis EEZ it will be able to touch two.

## Oracles

**Price feeds.** Mainnet feeds will be readable atomically, so the gap is speed and coverage: low-latency feeds that update on 2-second blocks for perps and options, and NAV and reference-rate feeds for RWA collateral.

**Subjective oracles.** Prediction markets, RWA attestations and insurance all need answers no price feed can give. We want resolution layers with clear dispute processes, that can read L1 state where an answer already lives onchain.

## Indexers

On Gnosis EEZ a single atomic transaction will be able to update state on Gnosis EEZ and on Ethereum. We want indexers and data APIs that follow those calls end to end, so a lending market can show one position across both, and a wallet can show a user's activity in one view.

## Solvers

On a standalone L2, a solver fills orders from local liquidity or holds inventory on both sides of a bridge. On Gnosis EEZ, a solver will be able to fill an L2 order against mainnet DEXs and money markets in the same transaction, with no inventory to pre-position and no settlement risk between legs. We want solvers for swaps, liquidations and intent-based orders that treat L1 and L2 liquidity as one book, including CoW Swap solvers extending batch auctions across the zone.

## Custodians

Institutions need custody that treats Gnosis EEZ and mainnet as one account, with policy engines that understand atomic cross-chain calls. We want custodians and wallet infrastructure, including Safe modules, that let a regulated business hold, move and use assets across the zone under one set of controls.

## Apply

Tell us what you are building, which request it answers, and which Gnosis EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

What design partners get, what to know about the first release, and the other requests are on the [request for builders](/developers/what-is-possible) overview.
