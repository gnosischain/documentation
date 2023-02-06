---
title: Overview
description: Architecture of Gnosis' Bridges
keywords: [gnosis bridge, bridge architecture, omnibridge, xdai bridge]
---

# Bridges Overview

Gnosis' native bridges allow for sending tokens and data, and are run by a group of [trusted bridge validators](/bridges/tokenbridge/amb-bridge#bridge-validators). There is a [roadmap](/bridges/roadmap) to move towards [trustless bridges](/bridges/roadmap#trustless-bridges).

There is a growing ecosystem of [3rd-party Bridges](/user-guide/bridges) that build on top of native bridges, that provide users with fast liquidity and user experience.

Gnosis' native bridges are first-class citizens in the chain's architecture due to the [native xDai bridge's](/bridges/tokenbridge/xdai-bridge) integral role in minting and burning the native [xDai token](/about/tokens/xdai) used for gas. 
## Conceptual Architecture

Gnosis has three main types of bridges: 

- **Native Bridges**: built into the chain itself, and mint the [canonical token](#canonical-tokens) representation of the original asset on Gnosis (e.g. "Canonical Dai", "Canonical ETH")
- **3rd-party Bridges**: these are maintained by 3rd parties and allow users to swap for [canonical tokens](#canonical-tokens) created by native bridges
- **Application-Specific Bridges**: some applications may provide custom bridges that maintain their own [canonical token](#canonical-tokens) on Gnosis

![Diagrams overview of Bridges](/img/bridges/diagrams/bridge-overview.svg)
## Native Bridges

Gnosis has two native bridges:

- **xDai Bridge** that is used to mint the native stablecoin by bridging Dai from Ethereum
- **Omnibridge** and underlying **Arbitrary Message Bridge** that are used for bridging tokens and data 

### Bridging Dai

See the [xDai Bridge](/bridges/tokenbridge/xdai-bridge). 
### Bridging Data

See the [Arbitrary Message Passing Bridge](/bridges/tokenbridge/amb-bridge) or AMB Bridge for short.
### Bridging Tokens

See the [Omnibridge](/bridges/tokenbridge/omnibridge), which is built on top of the [Arbitrary Message Passing Bridge](/bridges/tokenbridge/amb-bridge).

## Canonical Bridged Tokens

Tokens that are bridged using [Omnibridge](/bridges/tokenbridge/omnibridge) are regarded as  canonical representations of the origin token on Gnosis Chain. 

- [Canonical Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Canonical Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

## Roadmap

Gnosis has a [long-term roadmap](/bridges/roadmap) to move towards trustless bridges, and is actively funding research and development in this area.
