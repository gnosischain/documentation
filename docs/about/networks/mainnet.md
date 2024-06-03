---
description: Gnosis mainnet infrstructure details.
keywords:
  [gnosis mainnet, mainnet, gnosis infrastructure, gnosis faucet, gno, xdai]
---

# Gnosis (Mainnet)

[Add to MetaMask](https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x64&params[0][chainName]=Gnosis&params[0][rpcUrls][0]=https://rpc.gnosischain.com&params[0][nativeCurrency][name]=xDAI&params[0][nativeCurrency][symbol]=XDAI&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://gnosisscan.io)

## Summary

| Network Name       | Gnosis                    |
| ------------------ | ------------------------- |
| Native (fee) token | [xDai](/about/tokens/xdai.md) |
| Staking token      | [GNO](/about/tokens/gno.md)   |
| Chain ID           | 100                       |

## Key Infra

### Execution Layer

| Execution Layer          |                                             |
| ------------------------ | ------------------------------------------- |
| Execution Layer RPC      | https://rpc.gnosis.gateway.fm               |
| Execution Layer RPC      | https://rpc.gnosischain.com                 |
| More RPC endpoints       | [RPC Providers](../../tools/RPC%20Providers/README.md) |
| Execution Layer Explorer | https://gnosisscan.io                       |
| Execution Layer Explorer | https://blockscout.com/xdai/mainnet         |
| Fork monitor             | https://forkmon.gnosischain.com             |
| EthStats                 | https://ethstats.gnosischain.com            |
| Forked Blocks            | https://blockscout.com/xdai/mainnet/reorgs  |
| Faucet                   | https://gnosisfaucet.com                    |

### Consensus Layer

| Consensus Layer          |                                             |
| ------------------------ | ------------------------------------------- |
| Consensus Layer RPC      | https://rpc-gbc.gnosischain.com             |
| Beacon Explorer          | https://gnosischa.in/                       |
| Beacon Explorer Backup 1 | https://beacon-v1.gnosischain.com           |
| Beacon Explorer Backup 2 | https://beacon-v2.gnosischain.com           |
| Beacon Checkpoint Sync   | https://checkpoint.gnosis.gateway.fm        |
| Beacon Checkpoint Sync   | https://checkpoint.gnosischain.com          |
| Beacon Checkpoint Sync   | https://checkpoint-sync-gnosis.dappnode.io/ |

### Other Tools

| Other Tools      |                                |
| ---------------- | ------------------------------ |
| GnosisPools.info | https://gnosispools.info       |
| D14N Info        | https://d14n.info/             |
| Bordel           | https://bordel.wtf/            |
| More tools       | [Tools](../../tools/README.md) |

## Key Parameters

| Param             | Value    |
| ----------------- | -------- |
| Slot Time         | 5s       |
| Epoch             | 16 slots |
| Finalization Time | 2.7 min  |
| Staking Deposit   | 1 GNO    |

## Native Tokens

- Fee Token: [xDai](/about/tokens/xdai)
- Staking Token: [GNO](/about/tokens/gno)

You can find a list of contract addresses for Gnosis Mainnet tokens in the [Useful Addresses](/developers/Usefulcontracts) page.

## Network Config

### Config Repo

Gnosis maintains a [Configs Repo](https://github.com/gnosischain/configs/) that is the canonical source for Gnosis Chain networks.

- [config.yaml](https://github.com/gnosischain/configs/blob/main/mainnet/config.yaml)
- [genesis.json](https://github.com/gnosischain/configs/blob/main/mainnet/genesis.json)
- [GnosisDAO's Recommended CL Bootnodes](https://github.com/gnosischain/configs/blob/main/mainnet/bootnodes.yaml)
- [GnosisDAO's Recommended EL Bootnodes](https://github.com/gnosischain/configs/blob/main/mainnet/bootnodes_execution.yaml)
- [Nethermind's Recommended CL Bootnodes](https://github.com/NethermindEth/ansible-deployments/blob/main/poa_networks/gnosis/inventory/data/bootnodes-beacon.json)
- [Nethermind's Recommended EL Bootnodes](https://github.com/NethermindEth/ansible-deployments/blob/main/poa_networks/gnosis/inventory/data/bootnodes-execution.json)

## Key Contracts

- [xDai Bridge](/bridges/tokenbridge/xdai-bridge#key-contracts)
- [AMB Bridge](/bridges/tokenbridge/amb-bridge#key-contracts)
- [OmniBridge](/bridges/tokenbridge/omnibridge#key-contracts)
- [Beacon Chain](/about/specs/gbc/README.md)
