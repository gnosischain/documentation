---
title: Mainnet
---

- [ ] Include key Chain Config information 
  - [ ] Network ID, etc
  - [ ] Link to Developer section for more in-depth
- [ ] Include key Information
  - [ ] Transaction fee model
  - [ ] Native asset
- [ ] Include links to User Guide
  - [ ] Add to Metamask
  - [ ] Supported wallets

:::danger

Chiado is current **in-development** and is not ready for public participation. 

Please wait for Core Devs to release official Chiado images before attempting to run a Chiado validator.

:::

## Overview

* Chiado is a Gnosis testnet that is scheduled for launch in Q4 2022. 
* Chiado's primary purpose is to test "The Merge", Gnosis' transition from [Proof-of-Authority](../../specs/consensus/aura.md) to the [Beacon Chain](../../specs/consensus/gbc.md). 
* Post-Merge, Chiado will transition to a long-running testnet for developers. 
* Chiado is named after the [Chiado metro station](https://en.wikipedia.org/wiki/Baixa-Chiado_(Lisbon_Metro)) in Lisbon, Portugal. 

### Key Information

| Network Name                   | Chiado                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| Native (fee) token             | Chiado-xDAI                                                   |
| Staking token                  | Chiado-GNO                                                    |
| Chain ID                       | 10200                                                         |
| Execution Layer RPC (Archival) | https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado |
| Execution Layer RPC            | https://rpc.chiadochain.net                                   |
| Execution Layer Explorer       | https://blockscout.chiadochain.net                            |
| Consensus Layer Explorer       | https://beacon.chiadochain.net/                               |
| Fork monitor                   | https://forkmon.chiadochain.net/                              |
| EthStats                       | https://ethstats.chiadochain.net/                             |
| Faucet                         | https://gnosisfaucet.com                                      |

### Key Parameters
| Param             | Value        |
| ----------------- | ------------ |
| Slot Time         | 5s           |
| Epoch             | 16 slots     |
| Finalization Time | 2.7 min      |
| Staking Deposit   | 1 GNO on Chiado |

## Tokens

### Fee Token

* Name: xDai on Chiado
* Type: Native Asset
### Staking Token [^1]

To mimic Ethereum-Gnosis conditions, Chiado uses a "GNO" token that is isseud on Goerli and bridged over via the AMB.

| Token            | Address                                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| GNO on Goerli    | [0x7f477c3f03213970d939104cc436dc995cf615b5](https://goerli.etherscan.io/address/0x7f477c3f03213970d939104cc436dc995cf615b5)        |
| GNO on Chiado    | [0xf907903Be10FC3a885d331C4E225794436a34c9f](https://blockscout.chiadochain.net/address/0xf907903Be10FC3a885d331C4E225794436a34c9f) |
| mGNO on Chiado   | [0xc5be8bf53755a41c2385e7aa86f6a9e28746f466](https://blockscout.chiadochain.net/address/0xc5be8bf53755a41c2385e7aa86f6a9e28746f466) |
| Deposit Contract | [0xb97036A26259B7147018913bD58a774cf91acf25](https://blockscout.chiadochain.net/address/0xc5be8bf53755a41c2385e7aa86f6a9e28746f466) |

## Network Config

:::danger

Chiado is current **in-development** and is not ready for public participation. 

Please wait for Core Devs to release official Chiado images before attempting to run a Chiado validator.

:::
### Config Repo

:::danger

Warning! These are subject to further changes

:::

Gnosis maintains a [Configs Repo](https://github.com/gnosischain/configs/) that is the canonical source for Gnosis Chain networks. 

### Consensus Layer

:::danger

Warning! These are subject to further changes

:::

* [config.yaml](https://github.com/gnosischain/configs/blob/main/chiado/config.yaml)
* [genesis.ssz](https://github.com/gnosischain/configs/blob/main/chiado/genesis.ssz)
* [GnosisDAO's Recommended Chiado CL Bootnodes](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes.yaml)
* [Nethermind's Recommended Chiado CL Bootnodes](https://github.com/NethermindEth/ansible-deployments/blob/main/chiado/inventory/data/bootnodes-beacon.json)

### Execution Layer

:::danger

Warning! These are subject to further changes

:::

* [genesis.json](https://github.com/gnosischain/configs/blob/main/chiado/genesis.json)
* [nethermind.cfg](https://github.com/gnosischain/configs/blob/main/chiado/nethermind.cfg)
* [GnosisDAO's Recommended Chiado EL Bootnodes](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/bootnodes_execution.txt)
* [Nethermind's Recommended Chiado EL Bootnodes](https://github.com/NethermindEth/ansible-deployments/blob/main/chiado/inventory/data/bootnodes-execution.json)

## Key Contracts

### Bridges [^2]
| Contract                   | Address                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Chiado Omnibridge Mediator | [0x09D549a48AC52F3f9945E7de6402c609c92aa2E1](https://blockscout.chiadochain.net/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1) |
| Chiado AMB                 | [0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a](https://blockscout.chiadochain.net/address/0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a) |
| Goerli Omnibridge Mediator | [0x00147c84f13764dCDAbAF1cbAe622fa6f6839085](https://goerli.etherscan.io/address/0x00147c84f13764dCDAbAF1cbAe622fa6f6839085)        |
| Goerli AMB                 | [0x87A19d769D875964E9Cd41dDBfc397B2543764E](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6)         |
| Bridge Validator           | 0xc9ADb79B8A6e7C6e90c765A3B4d16d81213c9D49                                                                                          |

### DApps

| DApp      |     |
| --------- | --- |
| Uniswap   | TBD |
| Chainlink | TBD |

## Previous Iterations

### Chiado 0.2

TODO

### Chiado 0.1

TODO



### Appendix

[^1]: See [Github Issue on Chiado GNO Staking Contracts](https://github.com/gnosischain/pm/issues/100)
[^2]: See [Github Issue on Goerli-Chiado Bridge Deployment](https://github.com/gnosischain/pm/issues/40)