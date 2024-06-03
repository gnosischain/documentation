---
description: Chiado is a Gnosis long-lived testnet with tooling for developers
keywords:
  [
    chiado,
    testnet,
    gnosis testnet,
    gnosis faucet,
    gno on chiado,
    xdai on chiado,
  ]
---

# Chiado (Testnet)

[Add to MetaMask](https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x27D8&params[0][chainName]=Chiado&params[0][rpcUrls][0]=https://rpc.chiadochain.net&params[0][nativeCurrency][name]=Chiado%20xDAI&params[0][nativeCurrency][symbol]=XDAI&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://blockscout.com/gnosis/chiado)

![Chiado Train Station](../../../static/img/about/chiado.jpg)
Image: Trams in Lisbon (credit: [Lisa Fotios](https://www.pexels.com/photo/people-at-city-1534560/))

## Overview

### Purpose

- Chiado is a Gnosis testnet that was launched in October 2022
- Chiado's primary purpose is to be a long-lived testnet with tooling for developers
- Chiado's secondary purpose was to test "The Merge", Gnosis' transition from [Proof-of-Authority](../../about/specs/consensus/aura.md) to the [Beacon Chain](../../about/specs/gbc/README.md).
- Chiado is named after the [Chiado metro station](<https://en.wikipedia.org/wiki/Baixa-Chiado_(Lisbon_Metro)>) in Lisbon, Portugal.

### Validators

- Chiado is optimized for testnet stability for developers, and has a semi-permissioned validator set similar to Ethereum's [Sepolia testnet](https://blog.ethereum.org/2022/06/30/sepolia-merge-announcement)
- Chiado is not intended for broad public validator participation, as frequent cycling of validators affect Testnet stability and make it unreliable for developers (e.g. Ethereum's Prater testnet)
- Chiado validators are run by core contributor teams at [Nethermind](https://nethermind.io/), [Gateway](https://gateway.fm/) and [Gnosis](https://gnosis.io/) (and possibly more in the future)
- 6,000 validator keys were defined in the genesis of Chiado Beacon Chain for Gateway, Nethermind and Gnosis to run as validators

### Public Participation

- Community members can still run a full node and go through the Chiado merge as it happens
- 1,000 Testnet GNO on Chiado may be available in the future for community public validator participation
- Community participation will be limited to 14% of the Chiado Network to ensure network stability
- 1 Testnet GNO is required to run a validator, similar to Gnosis mainnet
- Requests for Chiado participation keys can be made in the #chiado-testnet channel in Discord

### How to Participate

- [Running a Chiado node](https://docs.sedge.nethermind.io/docs/networks/chiado) with [Nethermind Sedge](https://docs.sedge.nethermind.io/)
- (Here by Dragons): If you can get your hands on Testnet GNO on Chiado, you will need to interact with the [deposit contract](https://blockscout.com/gnosis/chiado/address/0xc5be8bf53755a41c2385e7aa86f6a9e28746f466) programmatically, or deploy your own [Deposit UI](/node/manual/validator/deposit#depositing-for-chiado-testnet) with the updated config files

## Summary

### Key Infra

| Network Name                  | Chiado                                |
| ----------------------------- | ------------------------------------- |
| Native (fee) token            | Testnet xDai on Chiado                |
| Staking token                 | Testnet GNO on Chiado                 |
| Chain ID                      | 10200                                 |
| Execution Layer RPC (archive) | https://rpc.chiado.gnosis.gateway.fm  |
| Execution Layer RPC           | https://rpc.chiadochain.net           |
| Execution Layer RPC (WS)      | wss://rpc.chiadochain.net/wss         |
| Execution Layer Explorer      | https://gnosis-chiado.blockscout.com/ |
| Consensus Layer Explorer      | https://beacon.chiadochain.net        |
| Beacon Checkpoint Sync        | https://checkpoint.chiadochain.net    |
| Fork monitor                  | https://forkmon.chiadochain.net       |
| EthStats                      | https://ethstats.chiadochain.net      |
| Faucet                        | https://faucet.chiadochain.net/       |

### Key Parameters

| Param             | Value                   |
| ----------------- | ----------------------- |
| Slot Time         | 5s                      |
| Epoch             | 16 slots                |
| Finalization Time | 2.7 min                 |
| Staking Deposit   | 1 Testnet GNO on Chiado |

## Native Tokens

### Fee Token

- Name: Testnet xDai on Chiado
- Type: Native Asset

You can find a list of contract addresses for Chiado tokens in the [Useful Addresses](/developers/UsefulContracts) page.

## Network Config

### Config Repo

Gnosis maintains a [Configs Repo](https://github.com/gnosischain/configs/) that is the canonical source for Gnosis Chain networks.

### Consensus Layer

- [config.yaml](https://github.com/gnosischain/configs/blob/main/chiado/config.yaml)
- [genesis.ssz](https://github.com/gnosischain/configs/blob/main/chiado/genesis.ssz)
- [GnosisDAO's Recommended Bootnodes](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes.yaml)

### Execution Layer

- [genesis.json](https://github.com/gnosischain/configs/blob/main/chiado/genesis.json)
- [nethermind.cfg](https://github.com/gnosischain/configs/blob/main/chiado/nethermind.cfg)
- [GnosisDAO's Recommended Bootnodes](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes_execution.yaml)
- [Nethermind's Recommended Bootnodes](https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Chains/chiado.json#L85)

### DApps

| DApp      |     |
| --------- | --- |
| Uniswap   | TBD |
| Chainlink | TBD |

## Previous Iterations

### Chiado 0.2

Chiado was previously launched with network ID 100100. Soon after launch, the network entered a forked state. The root causes were identified and fixed as part of the Chiado relaunch.

<!-- ### Chiado 0.1

TODO -->

### Appendix

[1]: See [Github Issue on Testnet GNO on Chiado Staking Contracts](https://github.com/gnosischain/pm/issues/100)

[2]: See [Github Issue on Goerli-Chiado Bridge Deployment](https://github.com/gnosischain/pm/issues/40)
