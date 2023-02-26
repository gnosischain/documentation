---
description: Network information about Gnosis Mainnet and Chiado Testnets
keywords: [network, gnosis mainnet, chiado, testnet, gnosis testnet, gnosis faucet, rpc, explorer]
---

# Networks

## Networks summary

| Network Name       | [Gnosis (mainnet)](./mainnet.md)  | [Chiado (testnet)](./chiado.md)           |
|--------------------|-----------------------------------|-------------------------------------------|
| Native (fee) token | xDAI                              | Chiado xDAI                               |
| Chain ID           | 100                               | 10200                                     |
| EL RPC             | https://rpc.gnosischain.com       | https://rpc.chiadochain.net               |
| EL Explorer        | https://gnosisscan.io             | https://blockscout.com/gnosis/chiado      |
| CL Explorer        | https://beacon.gnosischain.com    | https://beacon.chiadochain.net            |
| Fork monitor       | https://forkmon.gnosischain.com   | https://forkmon.chiadochain.net           |
| EthStats           | https://ethstats.gnosischain.com  | https://ethstats.chiadochain.net          |
| Faucet             | https://gnosisfaucet.com          | https://gnosisfaucet.com                  |

## Chiado reset

:::warning 
Chiado testnet was rebooted with a new chain id, explorer and RPC endpoints.
:::

If you are developing on Chiado:
- Re-synchronize your nodes
- Point your app to the new RPC endpoint
- Get help on [discord](https://discord.gg/gnosischain)

## Optimism on Gnosis

An Optimism implementation is deployed on Gnosis. Gnosis functions as the L1 (akin to Ethereum) and Optimism on Gnosis as the L2.

[More details](./optimism.md)