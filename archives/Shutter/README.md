---
title: Shutter Network on Gnosis Chain
description: Shutter Embedded Encryption on Gnosis Chain tackled malicious MEV and censorship via threshold encryption. Archived - Shutter is no longer part of Gnosis Chain.
keywords: [shutter network, shutterized gnosis chain, MEV, frontrunning, archived]
---

# Shutter Network on Gnosis Chain (Archived)

### Protecting Against MEV Attacks: Shutter embedded Gnosis Chain

Maximal Extractable Value (MEV) refers to the maximum value that can be extracted from block production in blockchain protocols, particularly in Ethereum. It represents the profits that can be made by miners or validators by reordering, including, or censoring transactions within a block.
To combat this, the Shutter network on Gnosis Chain introduced a mechanism for submitting transactions that resist censorship and front-running attacks by allowing users to encrypt their transactions.

Transactions on the Shutterized enabled Gnosis Chain were only decrypted and executed after their inclusion in the blockchain was confirmed and the order of preceding transactions finalized. Consequently, any third-party attempting to censor or front-run the transaction would be unable to do so without knowledge of its content, thereby nullifying their efforts. This protected transactions from MEV attacks, safeguarding users from financial exploitation and maintaining the integrity of the decentralized system.

### Shutter Protocol and Threshold Encryption

The Shutter Protocol employs threshold encryption to shield transactions. By encrypting transactions before they enter the public mempool, the protocol prevents malicious actors from exploiting them to their advantage. Participating validators on the Gnosis Chain committed to including these encrypted transactions, making it virtually impossible for front-runners to interfere.

With the contribution from teams of [Shutter Network](https://shutter.network/), [Gnosis](https://www.gnosis.io/) and [Nethermind](https://www.nethermind.io/), shutter access was released on the Chiado testnet followed by a mainnet release.

### Shutter access Chiado Testnet and Gnosis Mainnet

The RPC endpoints below are **no longer maintained**. They are listed for the record only.

| Network Name       | Gnosis (mainnet)                 | Chiado (testnet)                  |
| ------------------ | -------------------------------- | ------------------------------------ |
| Native (fee) token | xDAI                             | Chiado xDAI                          |
| Chain ID           | 100                              | 10200                                |
| RPC URL            | https://erpc.gnosis.shutter.network   | https://erpc.chiado.staging.shutter.network       |
| Block Explorer     | https://gnosis.blockscout.com/        | https://blockscout.com/gnosis/chiado |
| Faucet             | https://faucet.gnosischain.com/       | https://faucet.gnosischain.com/?chain=chiado      |

The docs site used to render an "Add Shutter access on Gnosis Chain" button here, wired to a
`wallet_addEthereumChain` helper. That helper is archived alongside this page as
[`changeNetwork.js`](./changeNetwork.js).

### Shutterized Chiado Test dApp

A test version of Shutterized Chiado was hosted at https://gnosis-shutter.web.app
