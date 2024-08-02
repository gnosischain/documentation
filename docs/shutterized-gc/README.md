---
sidebar_position: 1
title: Shutter Network on Gnosis Chain
description: Shutter Embedded Encryption on Gnosis Chain tackles significant issues, focusing on base-layer neutrality, countering the risk of malicious Maximal Extractable Value (MEV), and maintaining censorship resistance.

keywords: [shutter network shutterized gnosis chain MEV attacks frontrunning] 
---

import React from 'react';
import Button from '@site/src/components/Button';
import { changeOrAddNetwork } from '@site/src/utils/changeNetwork';

### Protecting Against MEV Attacks: Shutter embedded Gnosis Chain

Maximal Extractable Value (MEV) refers to the maximum value that can be extracted from block production in blockchain protocols, particularly in Ethereum. It represents the profits that can be made by miners or validators by reordering, including, or censoring transactions within a block. 
To combat this, the Shutter network on Gnosis Chain introduces a mechanism for submitting transactions that resist censorship and front-running attacks by allowing users to encrypt their transactions.

Transactions on the Shutterized enabled Gnosis Chain are only decrypted and executed after their inclusion in the blockchain is confirmed and the order of preceding transactions is finalized. Consequently, any third-party attempting to censor or front-run the transaction will be unable to do so without knowledge of its content, thereby nullifying their efforts. This ensures that transactions are protected from MEV attacks, safeguarding users from financial exploitation and maintaining the integrity of the decentralized system.

### Add the RPC endpoint to your wallet: Take the first step towards secure and private trades on the Gnosis Chain.

<Button
  label="Add Shutter access on Gnosis Chain"
  onClick={changeOrAddNetwork}
/>

### Shutter Protocol and Threshold Encryption

The Shutter Protocol employs threshold encryption to shield transactions. By encrypting transactions before they enter the public mempool, the protocol prevents malicious actors from exploiting them to their advantage. Participating validators on the Gnosis Chain commit to including these encrypted transactions, making it virtually impossible for front-runners to interfere. This level of protection ensures that end-users are shielded from financial losses and market manipulation, maintaining the integrity of the decentralized system.

With the contribution from teams of [Shutter Network](https://shutter.network/), [Gnosis](https://www.gnosis.io/) and [Nethermind](https://www.nethermind.io/), we released shutter access on chiado testnet followed by mainnet release.

### Shutter access Chiado Testnet and Gnosis Mainnet


| Network Name       | Gnosis (mainnet)                 | Chiado (testnet)                  |
| ------------------ | -------------------------------- | ------------------------------------ |
| Native (fee) token | xDAI                             | Chiado xDAI                          |
| Chain ID           | 100                              | 10200                                |
| New RPC URL        | https://erpc.gnosis.shutter.network   | https://erpc.chiado.staging.shutter.network       |
| Block Explorer     | https://gnosis.blockscout.com/        | https://blockscout.com/gnosis/chiado |
| Faucet             | https://faucet.gnosischain.com/       | https://faucet.chiadochain.net/      |


### Shutterized Chiado Test dApp

You can test out the test version of Shutterized Chiado [here](https://gnosis-shutter.web.app)