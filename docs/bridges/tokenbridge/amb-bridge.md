---
title: Arbitrary Message Bridge
---

## TODO

- [ ] [AMB Monitoring Application](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application)

## Overview

![](/img/bridges/diagrams/amb-bridge.svg)

You can also send arbitrary data between Gnosis and Ethereum using the native Arbitrary Message Bridge (AMB). This allows Gnosis contracts to send data and trigger contract functions on Ethereum and other chains, and vice-versa. 

The AMB is a key bridge primitive that is used inside higher-order bridges like the [Omnibridge native token bridge](./omnibridge.md).

The AMB currently supports Ethereum and Binance Smart Chain, and is part of the [Tokenbridge Architecture](https://tokenbridge.net/). There may be additional EVM-based networks supported in the future.

### Parameters

### Bridge Validators

The AMB bridge relies on a trusted group of [AMB Bridge Validators](https://developers.gnosischain.com/for-validators/for-bridge-validators#current-amb-bridge-validators), who are known Gnosis community members. 

You can see the [current list of AMB & Omnibridge Validators](https://developers.gnosischain.com/for-validators/for-bridge-validators#amb-omnibridge). 

The [long-term roadmap](../roadmap.md) is to move towards [trustless bridges](../roadmap.md#trustless-bridges) using [zero-knowledge proofs from light clients](../roadmap.md#zero-knowledge-light-clients) or other trust-minimized techniques.

### Analytics

- [ ] Analytics for AMB? (how many messages passed?)

## How it works
## Resources

- [Arbitrary Message Bridge Documentation](https://docs.tokenbridge.net/amb-bridge/about-amb-bridge)
- [Diagrams illustrating how AMB Bridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)

## Docs Wishlist

- [ ] Zodiac module for DAOs - L2 to L1 sending of data from Gnosis Chain to Ethereum
- [ ] Synthesize AMB docs from Tokenbridge
