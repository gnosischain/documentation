---
title: Core Devs Call - 06/14/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![june 14](https://github.com/gnosischain/documentation-1/assets/75987728/38db4350-4c5d-4da8-a29c-9129ae069841)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/DjkAugZ-ONY). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

June 14, 2023

# Client Team Updates
## EL

* **Nethermind**: Working on the shapella todo list. They will take a look at the new contract.

* **Erigon**: No updates.
* **Geth**: No updates. 



## CL

* **Prysm**: No updates.
* **Nimbus**: No updates.

# Chain Infra
**Gateway** : Fixed the launchpad.

# Withdrawals

GNew contract: https://github.com/gnosischain/deposit-contract/pull/45
Audit in progress
Very basic

# To-do

* New devnet
  * 50/50 Nethermind + Erigon

* Shadowfork
Be careful with the contract upgrades because we can get replayed. What are we trying to achieve with this fork? What are the questions we want to answer? We can also disregard this but spam the devnet with a lot of transactions instead so we have more accurate blocks instead of empty ones. The way it worked for Ethereum. Sync mainnet and stop ELs on some block. Take that hash in the beacon chain genesis. Spin up a new beacon chain with shapella scheduled. We also need to upgrade the contract. We can get replayed. We can also deploy the contracts now. (before the shadow fork) As long as we coordinate around deposit UI changes.

* Upgrade contract on Chiado
Deposit UIs

* Mainnet
Make sure that enough core devs are available because the holiday season is going to start


# Hive 

Added more tests to the previous suites. Everything is working. Started to add Erigon, Marcos is in touch with Andrew to fix remaining issues













