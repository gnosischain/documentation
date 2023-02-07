---
description: Chiado is a Gnosis long-lived testnet with tooling for developers
keywords: [chiado, testnet, gnosis testnet, gnosis faucet, gno on chiado, xdai on chiado]
---

# Chiado (Testnet)

[Add to MetaMask](https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x27D8&params[0][chainName]=Chiado&params[0][rpcUrls][0]=https://rpc.chiadochain.net&params[0][nativeCurrency][name]=Chiado%20xDAI&params[0][nativeCurrency][symbol]=xDAI&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://blockscout.com/gnosis/chiado)

![Chiado Train Station](../../../static/img/about/chiado.jpg)
Image: Trams in Lisbon (credit: [Lisa Fotios](https://www.pexels.com/photo/people-at-city-1534560/))

## Overview
### Purpose
* Chiado is a Gnosis testnet that was launched in October 2022
* Chiado's primary purpose is to be a long-lived testnet with tooling for developers
* Chiado's secondary purpose was to test "The Merge", Gnosis' transition from [Proof-of-Authority](../../specs/consensus/aura.md) to the [Beacon Chain](../../specs/gbc/README.md).
* Chiado is named after the [Chiado metro station](https://en.wikipedia.org/wiki/Baixa-Chiado_(Lisbon_Metro)) in Lisbon, Portugal.

### Validators

* Chiado is optimized for testnet stability for developers, and has a semi-permissioned validator set similar to Ethereum's [Sepolia testnet](https://blog.ethereum.org/2022/06/30/sepolia-merge-announcement)
* Chiado is not intended for broad public validator participation, as frequent cycling of validators affect Testnet stability and make it unreliable for developers (e.g. Ethereum's Prater testnet)
* Chiado validators are run by core contributor teams at [Nethermind](https://nethermind.io/), [Gateway](https://gateway.fm/) and [Gnosis](https://gnosis.io/) (and possibly more in the future)
* 6,000 validator keys were defined in the genesis of Chiado Beacon Chain for Gateway, Nethermind and Gnosis to run as validators
### Public Participation

* Community members can still run a full node and go through the Chiado merge as it happens
* 1,000 Testnet GNO on Chiado may be available in the future for community public validator participation
* Community participation will be limited to 14% of the Chiado Network to ensure network stability
* 1 Testnet GNO is required to run a validator, similar to Gnosis mainnet
* Requests for Chiado participation keys can be made in the #chiado-testnet channel in Discord

### How to Participate

* [Nethermind Sedge](https://docs.sedge.nethermind.io/) can generate the [Docker Compose files for Chiado](https://docs.sedge.nethermind.io/docs/quickstart/chiado)
* (Here by Dragons): If you can get your hands on Testnet GNO on Chiado, you will need to interact with the [deposit contract](https://blockscout.com/gnosis/chiado/address/0xc5be8bf53755a41c2385e7aa86f6a9e28746f466) programmatically, or deploy your own [Deposit UI](/node/guide/validator/deposit#depositing-for-chiado-testnet) with the updated config files

## Summary
### Key Infra

| Network Name             | Chiado                               |
| ------------------------ | ------------------------------------ |
| Native (fee) token       | Testnet xDai on Chiado               |
| Staking token            | Testnet GNO on Chiado                |
| Chain ID                 | 10200                                |
| Execution Layer RPC      | https://rpc.chiado.gnosis.gateway.fm |
| Execution Layer RPC      | https://rpc.chiadochain.net          |
| Execution Layer RPC (WS) | wss://rpc.chiadochain.net/wss        |
| Execution Layer Explorer | https://blockscout.com/gnosis/chiado |
| Execution Layer Explorer | https://blockscout.chiadochain.net   |
| Consensus Layer Explorer | https://beacon.chiadochain.net       |
| Beacon Checkpoint Sync   | https://checkpoint.chiadochain.net   |
| Fork monitor             | https://forkmon.chiadochain.net      |
| EthStats                 | https://ethstats.chiadochain.net     |
| Faucet                   | https://gnosisfaucet.com             |

### Key Parameters
| Param             | Value                   |
| ----------------- | ----------------------- |
| Slot Time         | 5s                      |
| Epoch             | 16 slots                |
| Finalization Time | 2.7 min                 |
| Staking Deposit   | 1 Testnet GNO on Chiado |

## Native Tokens

### Fee Token

* Name: Testnet xDai on Chiado
* Type: Native Asset

### Staking Token [^1]

To mimic Ethereum-Gnosis conditions, Chiado uses a "Testnet GNO" token that is isseud on Goerli and bridged over via the AMB.

| Token                  | Address                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Testnet GNO on Goerli  | [0x7f477c3f03213970d939104cc436dc995cf615b5](https://goerli.etherscan.io/address/0x7f477c3f03213970d939104cc436dc995cf615b5)        |
| Testnet GNO on Chiado  | [0x19C653Da7c37c66208fbfbE8908A5051B57b4C70](https://blockscout.com/gnosis/chiado/address/0x19C653Da7c37c66208fbfbE8908A5051B57b4C70) |
| Testnet mGNO on Chiado | [0xc5be8bf53755a41c2385e7aa86f6a9e28746f466](https://blockscout.com/gnosis/chiado/address/0xc5be8bf53755a41c2385e7aa86f6a9e28746f466) |
| Deposit Contract       | [0xb97036A26259B7147018913bD58a774cf91acf25](https://blockscout.com/gnosis/chiado/address/0xb97036A26259B7147018913bD58a774cf91acf25) |

## Network Config
### Config Repo

Gnosis maintains a [Configs Repo](https://github.com/gnosischain/configs/) that is the canonical source for Gnosis Chain networks.

### Consensus Layer

* [config.yaml](https://github.com/gnosischain/configs/blob/main/chiado/config.yaml)
* [genesis.ssz](https://github.com/gnosischain/configs/blob/main/chiado/genesis.ssz)
* [GnosisDAO's Recommended Bootnodes](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes.yaml)

### Execution Layer

* [genesis.json](https://github.com/gnosischain/configs/blob/main/chiado/genesis.json)
* [nethermind.cfg](https://github.com/gnosischain/configs/blob/main/chiado/nethermind.cfg)
* [GnosisDAO's Recommended Bootnodes](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes_execution.yaml)
* [Nethermind's Recommended Bootnodes](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Chains/chiado.json#L85)

## Key Contracts

### Bridges [^2]

Using the [Tokenbridge](https://tokenbridge.net/) nomenclature, Home refers to Chiado while Foreign refers to Goerli

| Contract                   | Address                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Governance Safes**       |                                                                                                                                     |
| Governance Safe Chiado     | [0x0Ad7de9064BAA98892a244e1415Ca8a2766096D2](https://blockscout.com/gnosis/chiado/address/0x0Ad7de9064BAA98892a244e1415Ca8a2766096D2) |
| Governance Safe Goerli     | [0xf02796C7B84F10Fa866DAa7d5701A95f3131A727](https://gnosis-safe.io/app/gor:0xf02796C7B84F10Fa866DAa7d5701A95f3131A727/home)        |
| **Native Bridge**          |                                                                                                                                     |
| Chiado TokenBridge         | [0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2](https://blockscout.com/gnosis/chiado/address/0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2) |
| Chiado ValidatorsProxy     | [0x0ee7EBC72b26e8CeAbbdF275A19dA8e4361685Ce](https://blockscout.com/gnosis/chiado/address/0x0ee7EBC72b26e8CeAbbdF275A19dA8e4361685Ce) |
| Goerli TokenBridge         | [0x8659Cf2273438f9b5C1Eb367Def45007a7A16a24](https://goerli.etherscan.io/address/0x8659Cf2273438f9b5C1Eb367Def45007a7A16a24)        |
| Goerli ValidatorsProxy     | [0x1F35121d14ABC91689a7903bf911dce83B0c6EF6](https://goerli.etherscan.io/address/0x1F35121d14ABC91689a7903bf911dce83B0c6EF6)        |
| **AMB & Omnibridge**       |                                                                                                                                     |
| Chiado Omnibridge Mediator | [0x09D549a48AC52F3f9945E7de6402c609c92aa2E1](https://blockscout.com/gnosis/chiado/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1) |
| Chiado AMB                 | [0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a](https://blockscout.com/gnosis/chiado/address/0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a) |
| Goerli Omnibridge Mediator | [0x00147c84f13764dCDAbAF1cbAe622fa6f6839085](https://goerli.etherscan.io/address/0x00147c84f13764dCDAbAF1cbAe622fa6f6839085)        |
| Goerli AMB                 | [0x87A19d769D875964E9Cd41dDBfc397B2543764E](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6)         |
| **Bridge Validators**      |                                                                                                                                     |
| Gnosis DAO                 | 0xc9ADb79B8A6e7C6e90c765A3B4d16d81213c9D49                                                                                          |
| Bootnode                   | TBD                                                                                                                                 |

### DApps

| DApp      |     |
| --------- | --- |
| Uniswap   | TBD |
| Chainlink | TBD |

## Previous Iterations

### Chiado 0.2

Chiado was previously launched with network ID 100100. Soon after launch, the network entered a forked state. The root causes were identified and fixed as part of the Chiado relaunch. 

### Chiado 0.1

TODO

### Appendix

[^1]: See [Github Issue on Testnet GNO on Chiado Staking Contracts](https://github.com/gnosischain/pm/issues/100)
[^2]: See [Github Issue on Goerli-Chiado Bridge Deployment](https://github.com/gnosischain/pm/issues/40)
