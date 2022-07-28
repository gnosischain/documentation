---
title: Bridges Overview
description: Architecture of Gnosis' native bridges
---

# Bridges Overview

![Diagrams overview of Bridges](./diagrams/bridge-overview.svg)

Gnosis operates in a multi-chain world as a [companion chain to Ethereum], with bridges as first-class citizens in the chain's architecture. The native "gas" asset on Gnosis (i.e. xDai) is created by [bridging Dai from Ethereum], creating a fundamental connection between the two chains.

Gnosis is supported by a collection of [3rd party and native bridges] to Ethereum (and [other chains]) that allow for the moving of data and assets.

Gnosis' native bridges currently use the [Tokenbridge Architecture](https://docs.tokenbridge.net/) that consists of smart contracts on both chains, and a group of [trusted bridge validators] that observe and confirm bridge transactions.

Gnosis has a [long-term roadmap] to move towards trustless bridges, and is actively funding research and development in this area.

## Bridging Dai (native asset)

:::info

The xDai bridge can be found at [bridge.gnosischain.com](https://bridge.gnosischain.com/)

:::

Gnosis has a special [native Dai bridge from Ethereum] to mint xDai, a stablecoin that is used as gas for transaction fees in Gnosis.

![xDai Bridge Diagram](./diagrams/dai-bridge.svg)

Once Dai is transferred into the [xDai bridge contract on Ethereum], xDai is minted on Gnosis through the [Block rewards contract] and sent to the user's corresponding address.

This process relies on a trusted group of [Bridge Validators], who are known Gnosis  community members. The long-term roadmap is to move towards [trustless bridges] using 
 [zero-knowledge proofs from light clients] or other trust-minimized techniques.

The xDai bridge currently allows for Dai deposited on the bridge to [earn interest through Compound and Aave]. Interest revenue from deposited Dai is used to fund Gnosis development efforts through the [GnosisDAO treasury].

## Bridging Data

You can also send arbitrary data between Gnosis and Ethereum using the native [Arbitrary Message Bridge] (AMB). This allows Gnosis contracts to trigger contract functions on Ethereum, and vice-versa. 

The [Arbitrary Message Bridge] is part of the [Tokenbridge Architecture] and can be extended to relay data to any EVM-based chain. The AMB is a key primitive that is used inside higher-order bridges like the [native token bridge]. 

In addition to Ethereum, Gnosis supports Arbitrary Message Bridges to Binance Smart Chain. There may be additional EVM-based networks supported in the future.  

## Bridging Tokens

:::info

Omnibridge can be accessed at [omni.gnosischain.com](https://omni.gnosischain.com/)

:::

Gnosis has native token bridges that allows for tokens to be bridged from Ethereum and Binance Smart Chain. 

[Diagram of native token bridge, wrapped on top of the AMB]

- The difference between End-user bridges and Native bridges
- Start pushing end-users to use End-user bridges

Token Registries
- [Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

## Bridging NFTs


- [XP](https://bridge.xp.network/)

Previously, Omnibridge used to have a [NFT Bridge](https://docs.tokenbridge.net/eth-xdai-amb-bridge/nft-omnibridge-extension) that no longer recommended as it is not being actively maintained. 




