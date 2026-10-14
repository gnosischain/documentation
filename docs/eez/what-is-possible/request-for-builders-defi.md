---
sidebar_position: 1
title: "Request for builders: DeFi on the Ethereum Economic Zone"
sidebar_label: DeFi venues and infrastructure
description: Four DeFi venues and the infrastructure under them that become possible or much better when an L2 can call Ethereum mainnet apps and infrastructure in the same transaction. If you are building one of these, we want to hear from you.
keywords: [request for builders, defi, synchronous composability, lending market, rwa collateral, options venue, perps, prediction market, oracles, solvers, custodians, hybrid apps, gnosis eez]
---

# Request for builders: DeFi on the Ethereum Economic Zone

Synchronous composability changes what can be built on an L2. Below are four DeFi venues, and the infrastructure under them, that become possible or much better when an L2 can call Ethereum mainnet apps and infrastructure in the same transaction. If you are building one of these, we want to hear from you.

## Why now

Building DeFi on an L2 has always meant a trade. You get fast blocks and cheap transactions, and you give up mainnet: its liquidity, its money markets, its price feeds. So native venues start isolated: thin books, bridged collateral, and liquidations that depend on liquidity sitting on another chain.

Synchronous composability changes that. Apps and infrastructure built natively on Gnosis EEZ keep L2 speed and cost, and can still call mainnet DEXs, money markets, oracles and stablecoins in the same transaction when they need depth. If any step fails, the whole thing reverts. Native liquidity on Gnosis EEZ and mainnet liquidity reinforce each other instead of competing. No existing L2 offers this today.

## What you build on

- **Synchronous composability with mainnet.** A contract on Gnosis EEZ can call L1 apps and infrastructure and use the result in the same transaction, so you use mainnet depth without fragmenting it.
- **2-second blocks, sub-cent fees.** Fast enough for order books and high-frequency markets, with a composing block every Ethereum slot.
- **Ethereum settlement.** State is proven every Ethereum block and settles to L1.
- **L1 as a building block.** Mainnet money markets, DEXs, oracles and stablecoins are usable from the L2 as they stand. Native Gnosis EEZ apps compose with them directly.

For each build below the question is the same: what becomes possible when the L2 and L1 parts of a product share one atomic transaction?

## 1. The lead lending market for RWA collateral

Tokenised treasuries, credit and equities are live onchain. Using them as collateral is still hard. Each chain holds a bridged wrapper of the asset, and liquidity for liquidations sits elsewhere.

On Gnosis EEZ a lending market can hold the canonical asset rather than a wrapper, because issuers can deploy one asset zone-wide. When a position needs liquidating, the market can sell collateral into mainnet liquidity in the same transaction it detects the shortfall. No bridge leg, no stranded bad debt waiting on a cross-chain message.

The market also doesn't have to start empty. It can source liquidity from mainnet money markets atomically, route a borrow to wherever rates are best, or refinance a position from L1 in a single transaction, while users get L2 speed and fees.

We want one team to be the anchor lending market for Gnosis EEZ. The ideal build:

- Accepts tokenised treasuries, private credit and tokenised equities as collateral.
- Liquidates atomically against mainnet liquidity.
- Lends regulated euro e-money and dollar stablecoins sourced from mainnet.
- Composes with L1 money markets for liquidity, refinancing and rate discovery in the same transaction.

EEZ Alliance members already include Centrifuge, xStocks and Monerium on the asset side. We are working with capital markets and institutional asset issuers to bring new tokenised products. You would be the venue that makes those assets productive.

## 2. An options venue

Onchain options are finally scaling. Notional volume hit $7.52B in Q3 2026, a two-year high, and one venue did most of it by running its own L2 with an order book and portfolio margin. That works, but it trades shared liquidity for speed: market makers hedge against spot that lives elsewhere, and collateral has to be bridged in.

Gnosis EEZ removes that gap. A venue can quote and match on 2-second blocks, then hedge, exercise or settle against mainnet spot liquidity atomically. Writers and market makers keep one pool of capital instead of splitting inventory across chains.

The set of underlyings widens too. A venue can list options on any asset with mainnet liquidity, including tokenised equities and RWAs, and hedge against L1 venues atomically rather than maintaining its own spot market.

We want a venue that:

- Lists options on ETH, majors and tokenised equities, with RWA underlyings as a first-class market.
- Hedges and settles atomically against mainnet liquidity.
- Offers structured products that compose with L1, such as a covered call vault that keeps its collateral in a mainnet money market until it is needed.
- Reads mainnet price feeds atomically at exercise and settlement.

## 3. A perps venue

The best-performing perps venues today run on their own chains. They got speed, and paid for it with isolation: users bridge collateral in, liquidity bootstraps from zero, and the venue sits outside Ethereum's capital base.

Gnosis EEZ gives you app-chain performance without the app-chain trade-off. Match on 2-second blocks with sub-cent fees. Accept mainnet stablecoins and yield-bearing collateral without a bridge. Rebalance the insurance fund, hedge LP exposure or unwind a liquidation against mainnet liquidity in one atomic transaction.

Composability also opens designs a standalone chain can't support: margin that stays productive in mainnet protocols until it is called, and liquidations that route to whichever L1 venue has depth at that moment.

We want a venue that:

- Runs a performant order book or hybrid design on 2-second blocks.
- Takes collateral straight from mainnet, with no bridge step for the user.
- Lists RWA and tokenised equity perps alongside crypto majors.
- Hedges and liquidates against mainnet spot and lending markets atomically.

## 4. A prediction market

Gnosis built the Conditional Tokens framework that today's largest prediction markets run on. The next design step is markets whose collateral and resolution touch L1 directly.

Prediction markets are high-frequency and small-ticket. They need fast blocks and fees that disappear into the trade, which Gnosis EEZ delivers with 2-second blocks and sub-cent costs. What current markets have lacked is access: users bridge stablecoins in, and capital sits idle until resolution.

On Gnosis EEZ, markets can settle in mainnet stablecoins without a bridge, and idle collateral can sit in an L1 money market and be pulled back atomically when a trader exits. Markets can also read Ethereum state directly, resolving on onchain events such as a governance vote or a protocol parameter without an oracle hop.

We want a market that:

- Uses Conditional Tokens or a successor design, with deep liquidity on short-dated markets.
- Settles in dollars and euros, sourcing collateral from mainnet atomically.
- Resolves through credible subjective oracles, with disputes handled transparently.
- Keeps idle collateral earning on L1, withdrawn atomically when positions close.

## 5. Native infrastructure

The four venues above need components designed for a chain that composes with Ethereum every slot. Existing tooling assumes a transaction lives on one chain. On Gnosis EEZ it may touch two.

### Oracles

**Price feeds.** Mainnet feeds are readable atomically, so the gap is speed and coverage: low-latency feeds that update on 2-second blocks for perps and options, and NAV and reference-rate feeds for RWA collateral.

**Subjective oracles.** Prediction markets, RWA attestations and insurance all need answers no price feed can give. We want resolution layers with clear dispute processes, that can read L1 state where an answer already lives onchain.

### Indexers

A single atomic transaction can now update state on Gnosis EEZ and on Ethereum. We want indexers and data APIs that follow those calls end to end, so a lending market can show one position across both, and a wallet can show a user's activity in one view.

### Solvers

On a standalone L2, a solver fills orders from local liquidity or holds inventory on both sides of a bridge. On Gnosis EEZ, a solver can fill an L2 order against mainnet DEXs and money markets in the same transaction, with no inventory to pre-position and no settlement risk between legs. We want solvers for swaps, liquidations and intent-based orders that treat L1 and L2 liquidity as one book, including CoW Swap solvers extending batch auctions across the zone.

### Custodians

Institutions need custody that treats Gnosis EEZ and mainnet as one account, with policy engines that understand atomic cross-chain calls. We want custodians and wallet infrastructure, including Safe modules, that let a regulated business hold, move and use assets across the zone under one set of controls.

## 6. Hybrid apps

Not every app needs to leave Ethereum. A mainnet protocol can keep its contracts, liquidity and settlement on L1, and run its heavy or high-churn logic, such as matching or a risk engine, on Gnosis EEZ with 2-second blocks and sub-cent fees. Both halves share one atomic transaction: both land or neither does.

Sync calls carry a per-block verification cost on L1, so they suit high-value moments: deposit-and-use, liquidations against L1 prices and settlement. Everything else runs as ordinary Gnosis EEZ traffic. At launch, calls run from Gnosis EEZ into L1. L1 contracts calling into Gnosis EEZ follow with bidirectional composability in 2027.

We want mainnet teams that:

- Keep liquidity and settlement on L1 and move matching, risk or high-churn state to Gnosis EEZ.
- Reserve sync calls for high-value flows.
- Would rather build on Gnosis EEZ than operate their own sequencer, composer and prover.

## What you get

We are looking for design partners, not just deployments. Teams we work with will get:

- Early access to the EEZ devnet, which already runs end-to-end cross-chain execution.
- Direct work with the Gnosis engineering team on integration, from devnet to genesis.
- Introductions across the EEZ Alliance, including Aave, Safe, CoW Swap, Centrifuge, Monerium and xStocks.

## What to know

Gnosis EEZ genesis is targeted for December 2026 to January 2027. At launch, composability runs from Gnosis EEZ into Ethereum: your contracts can call mainnet atomically. Full bidirectional composability, nested calls and real-time ZK proving follow in 2027. Build for the first and design for the second.

## Apply

Tell us what you are building, which request it answers, and which EEZ attribute your product can't work without. We read everything.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://calendar.app.google/nG7XU4gvtqZgY9Cm9">Book a call with the ecosystem team</a>
  <a className="button button--secondary button--lg" href="https://discord.gg/gnosis">Reach us on Discord</a>
</div>

The route in is the same as for every [launch partner](/eez/launch-partner): deploy on Gnosis Chain now, and you are in production on Gnosis EEZ at genesis.

## Sources

- [GIP-153: Should Gnosis Chain transition into the Ethereum Economic Zone?](https://forum.gnosis.io/t/gip-153-should-gnosis-chain-transition-into-the-ethereum-economic-zone/12397)
- [On-Chain Options Volume Hits a Two-Year High (Cryptorank)](https://cryptorank.io/insights/analytics/on-chain-options-volume-hits-a-two-year-high)
