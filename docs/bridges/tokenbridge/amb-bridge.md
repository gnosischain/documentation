---
title: Arbitrary Message Bridge
---

## TODO

- [ ] [AMB Monitoring Application](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application)



![](/img/bridges/diagrams/amb-bridge.svg)

You can also send arbitrary data between Gnosis and Ethereum using the native Arbitrary Message Bridge (AMB). This allows Gnosis contracts to send data and trigger contract functions on Ethereum and other chains, and vice-versa. 

The AMB is a key bridge primitive that is used inside higher-order bridges like the [Omnibridge native token bridge](./omnibridge.md).

The AMB currently supports Ethereum and Binance Smart Chain, and is part of the [Tokenbridge Architecture](https://tokenbridge.net/). There may be additional EVM-based networks supported in the future.

## Key Information

### Overview

### Key Contracts

#### Ethereum

| Contract                      | Ethereum Address |
| ----------------------------- | ---------------- |
| Proxy Contract                |                  |
| Validator Management Contract |                  |

#### Gnosis

| Contract                      | Gnosis Address |
| ----------------------------- | -------------- |
| Proxy Contract                |                |
| Block Reward Contract         |                |
| Validator Management Contract |                |

### Fees & Daily Limits

As the Arbitrary Message Bridge is a message passing bridge, there are no fees or daily limits associated with it.

### Bridge Validators

The AMB bridge relies on a trusted group of [AMB Bridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators#current-amb-bridge-validators), who are known Gnosis community members. 

You can see the [current list of AMB & Omnibridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators#amb-omnibridge). 

The [long-term roadmap](../roadmap.md) is to move towards [trustless bridges](../roadmap.md#trustless-bridges) using [zero-knowledge proofs from light clients](../roadmap.md#zero-knowledge-light-clients) or other trust-minimized techniques.

### Bridge Governance

* See [Bridge Governance](../governance.md)

References: 
- [xDai Docs: Bridge Governance Board](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/governance/bridge-governance-board)
- [xDai Docs: Bridge Daily Limits](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/bridge-daily-limits)

### Bridge Revenue

### Analytics

References: 
## How it works

## Managing Bridge Contracts

## Managing Bridge Validators
## Resources

- [Arbitrary Message Bridge Documentation](https://docs.tokenbridge.net/amb-bridge/about-amb-bridge)
- [Diagrams illustrating how AMB Bridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)


