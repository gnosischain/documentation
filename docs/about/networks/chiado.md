---
---

# Chiado Testnet

:::danger

Chiado is current **in-development** and is not ready for public participation. 

Please wait for Core Devs to release official Chiado images before attempting to run a Chiado validator.

:::

## Overview

Chiado is a Gnosis testnet that is scheduled for launch in Q4 2022. 

Chiado's primary purpose is to test "The Merge", Gnosis' transition from [Proof-of-Authority](../../specs/consensus/aura.md) to [Beacon Chain](../../specs/consensus/gbc.md). Post-Merge, Chiado transition to a developer testnet post-Merge. 

Chiado is named after the [Chiado metro station](https://en.wikipedia.org/wiki/Baixa-Chiado_(Lisbon_Metro)) in Lisbon, Portugal. 

## Key Information

| Network Name                   | Chiado                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| Native (fee) token             | Chiado-xDAI                                                   |
| Staking token                  | Chiado-GNO                                                    |
| Chain ID                       | 10200                                                         |
| EL Archival RPC  (Recommended) | https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado |
| EL RPC                         | https://rpc.chiadochain.net                                   |
| EL Explorer                    | https://blockscout.chiadochain.net                            |
| CL Explorer                    | https://beacon.chiadochain.net/                               |
| Fork monitor                   | https://forkmon.chiadochain.net/                              |
| EthStats                       | https://ethstats.chiadochain.net/                             |
| Faucet                         | https://gnosisfaucet.com                                      |

## Key Parameters
| Param             | Value        |
| ----------------- | ------------ |
| Slot Time         | 5s           |
| Epoch             | 16 slots     |
| Finalization Time | 2.7 min      |
| Staking Deposit   | 1 Chiado-GNO |

## Native Tokens

### Fee Token

* Name: `Chiado-xDai`
* Type: Native Asset
### Staking Token

* Name: Chiado-GNO
* Type: Bridged token from Goerli
* Ticker: `Chiado-GNO`
* Chiado Contract Address: [0xf907903Be10FC3a885d331C4E225794436a34c9f](https://blockscout.chiadochain.net/address/0xf907903Be10FC3a885d331C4E225794436a34c9f)  
* mGNO (SBCTokenProxy): [0xe68d8cD2b90bFd08d2Bcf5047A2d9850DA2dåeFDc](https://blockscout.chiadochain.net/address/0x0) 
* [Deposit Contract address](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/config.yaml#L21) (SBCDepositContractProxy): [0xcD0904AcBF79F228E2c0d6D749cC72019D411995](https://blockscout.chiadochain.net/address/0xcD0904AcBF79F228E2c0d6D749cC72019D411995) 
* SBCWrapper = [0x5159F5ef48310EBdb7daD09A97f4376Bb207A7FE](https://blockscout.chiadochain.net/address/0x5159F5ef48310EBdb7daD09A97f4376Bb207A7FE) 

## Network Config

:::danger

Chiado is current **in-development** and is not ready for public participation. 

Please wait for Core Devs to release official Chiado images before attempting to run a Chiado validator.

:::
## Config Files

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

### Bridges
| Bridge              | Goerli | Chiado |
| ------------------- | ------ | ------ |
| AMB Bridge          | TBD    | TBD    |
| Chiado-xDai Bridge  | TBD    | TBD    |
| Omnibridge Mediator | TBD    | TBD    |

### Common dApps

| DApp      |     |
| --------- | --- |
| Uniswap   | TBD |
| Chainlink | TBD |

## Previous Iterations

### Chiado 0.2

TODO

### Chiado 0.1

TODO