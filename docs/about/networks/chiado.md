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

Chiado is named after the [Chiado train station](https://en.wikipedia.org/wiki/Baixa-Chiado_(Lisbon_Metro) in Lisbon, Portugal. 

## Key Information

| Network Name       | Chiado                             |
| ------------------ | ---------------------------------- |
| Native (fee) token | Chiado-xDAI                        |
| Staking token      | Chiado-GNO                         |
| Chain ID           | 10200                              |
| EL RPC             | https://rpc.chiadochain.net        |
| EL Explorer        | https://blockscout.chiadochain.net |
| CL Explorer        | https://beacon.chiadochain.net/    |
| Fork monitor       | TBA                                |
| EthStats           | https://ethstats.chiadochain.net/  |
| Faucet             | https://gnosisfaucet.com           |

## Native Tokens

### Fee Token

Name: `Chiado-xDai`

Icon: <a href="/img/tokens/chiado-xdai.png"><img src="/img/tokens/chiado-xdai.png" style={{width: '100px', height: '100px', display: 'inline'}} /></a>


### Staking Token

* Name: `Chiado-GNO`
* Ticker: `GNO`
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

* [https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/README.md](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/README.md)

### Consensus Layer

:::danger

Warning! These are subject to further changes

:::

* [config.yaml](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/config.yaml)
* [genesis.ssz](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/genesis.ssz)
* [bootnodes_consensus.txt](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/bootnodes_consensus.txt)

### Execution Layer

:::danger

Warning! These are subject to further changes

:::

* [nethermind_genesis.json](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/nethermind_genesis.json)
* [bootnodes_execution.txt](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/bootnodes_execution.txt)
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
| Uniswap   |     |
| Chainlink |     |
|           |     |
|           |     |

### How to Use:

Go to:[ https://abi.hashex.org/](https://abi.hashex.org/)

Copy the ABI from [https://etherscan.io/address/0x0#code](https://etherscan.io/address/0x0#code)


