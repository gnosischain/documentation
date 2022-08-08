---
title: Overview
description: Architecture of Gnosis' Bridges
---

# Bridges Overview

Gnosis' native bridges allow for sending tokens and data, and are run by a group of [trusted bridge validators](./tokenbridge/amb-bridge.md#bridge-validators). There is a [roadmap](./roadmap.md) to move towards [trustless bridges](./roadmap.md#trustless-bridges).

There is a growing ecosystem of [3rd-party Bridges](../user-guide/bridges.md) that build on top of native bridges, that provide users with fast liquidity and user experience.

Gnosis' native bridges are first-class citizens in the chain's architecture due to the [native xDai bridge's](./tokenbridge/xdai-bridge.md) integral role in minting and burning the native [xDai token](../about/tokens/xdai-token.md) used for gas. 
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

See the [xDai Bridge](./tokenbridge/xdai-bridge.md). 
### Bridging Data

See the [Arbitrary Message Passing Bridge](./tokenbridge/amb-bridge.md) or AMB Bridge for short.
### Bridging Tokens

See the [Omnibridge](./tokenbridge/omnibridge.md), which is built on top of the [Arbitrary Message Passing Bridge](./tokenbridge/amb-bridge.md).

## Canonical Bridged Tokens

Tokens that are bridged using [Omnibridge](./tokenbridge/omnibridge.md) are regarded as  canonical representations of the origin token on Gnosis Chain. 

- [Canonical Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Canonical Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

## Roadmap

Gnosis has a [long-term roadmap](./roadmap.md) to move towards trustless bridges, and is actively funding research and development in this area.
