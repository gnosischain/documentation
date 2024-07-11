---
sidebar_position: 1
title: Shutterized Gnosis Chain
description: The Shutterized Gnosis Chain tackles significant issues, focusing on base-layer neutrality, countering the risk of malicious Maximal Extractable Value (MEV), and maintaining censorship resistance.

keywords: [shutter network shutterized gnosis chain MEV attacks frontrunning] 
---

### Protecting Against MEV Attacks: Shutterized Gnosis Chain

Maximal Extractable Value (MEV) refers to the maximum value that can be extracted from block production in blockchain protocols, particularly in Ethereum. It represents the profits that can be made by miners or validators by reordering, including, or censoring transactions within a block. 
To combat this, the Shutterized Gnosis Chain introduces a mechanism for submitting transactions that resist censorship and front-running attacks by allowing users to encrypt their transactions.

Transactions on the Shutterized Gnosis Chain are only decrypted and executed after their inclusion in the blockchain is confirmed and the order of preceding transactions is finalized. Consequently, any third-party attempting to censor or front-run the transaction will be unable to do so without knowledge of its content, thereby nullifying their efforts. This ensures that transactions are protected from MEV attacks, safeguarding users from financial exploitation and maintaining the integrity of the decentralized system.

### Shutter Protocol and Threshold Encryption

The Shutter Protocol employs threshold encryption to shield transactions. By encrypting transactions before they enter the public mempool, the protocol prevents malicious actors from exploiting them to their advantage. Participating validators on the Gnosis Chain commit to including these encrypted transactions, making it virtually impossible for front-runners to interfere. This level of protection ensures that end-users are shielded from financial losses and market manipulation, maintaining the integrity of the decentralized system.

With the contribution from teams of [Shutter Network](https://shutter.network/?ref=blog.shutter.network), [Gnosis](gnosis.io) and [Nethermind](https://www.nethermind.io/?ref=blog.shutter.network), we released shutterized chiado testnet followed by mainnet release.

### Shutterized Chiado Testnet and Gnosis Mainnet


| Network Name       | Gnosis (mainnet)                 | Chiado (testnet)                  |
| ------------------ | -------------------------------- | ------------------------------------ |
| Native (fee) token | xDAI                             | Chiado xDAI                          |
| Chain ID           | 100                              | 10200                                |
| New RPC URL        | https://erpc.gnosis.shutter.network   | https://erpc.chiado.staging.shutter.network       |
| Block Explorer     | https://gnosis.blockscout.com/        | https://blockscout.com/gnosis/chiado |
| Faucet             | https://gnosisfaucet.com              | https://faucet.chiadochain.net/      |


### Shutterized Chiado Test dApp

You can test out the test version of Shutterized Chiado [here](https://gnosis-shutter.web.app)