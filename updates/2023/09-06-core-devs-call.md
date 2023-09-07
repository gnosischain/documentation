---
title: Core Devs Call - 2023/09/06
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![core devs call](https://github.com/gnosischain/documentation-1/assets/75987728/b40a5aae-b361-46f9-aac9-732811f165f4)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/exku4k8v91g). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

September 6, 2023

# Client Team Updates
## EL

* **Nethermind**: 
Met the Shutter guys
There were some questions and answers
Asked for priorities
  1) Cancun
We want EIP-4844 as soon as possible
  2) Shutter


* **Erigon**: 
No updates

* **Geth**:
Got some Chiado data but it was missing the code, so waiting for a new dump
Requesting more details about the system address being or not being in the state
Guillaume will contact Lukasz on Telegram
EIP-158 needs to be disabled for system transactions


# Chain Infra

* **Gateway**
No updates


# Mainnet

Deposit UI somewhat fixed
The previous deposits cache is now kept up to date on every build
But we’re still getting RPC issues a lot of the times, making deposits quite painful
The RPC error wa actually fixed by Nethermind, but not released
There was a custom release for Gateway
Auto claim
Some sample contracts were written but there’s nothing concrete

# Dencun

We should start launching devnets
There will be some differences for shadow forks as well
We need a copy of the deposit / withdrawals contract, so that the shadow forked network doesn’t have all validators deposited
We just have to deploy the deposit contract on Gnosis mainnet
Will require some changes in Nethermind and Erigon to support deposit contract swaps

# Hive Tests

No updates

# Research

* Big blocks experiment
What size should we allocate to 4844? Just parameter changes
* Cancun: there are definitely some differences
  * 4844 requires eth/68, but we don’t have that because we don’t have snap sync
    * Nethermind has a client for snap sync but doesn’t serve that data
    * Erigon also doesn’t serve the data
    * A clean solution might be to introduce a new way to sync data?
  * System transaction differences between Gnosis and mainnet for 4337
    * Erigon would prefer to do all the system transactions the same way for Gnosis, so use the current concept for Gnosis and a different one for Ethereum
    * There are some downsides
  * Hive tests will have to be different
  * Lion: why not keep the same code as for Ethereum?
We already have hacks for AuRa, and we would have to add hacks to the new system transaction way as well

Next week DappCon
















