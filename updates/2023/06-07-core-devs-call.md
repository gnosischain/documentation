---
title: Core Devs Call - 06/7/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![core dev 7 june](https://github.com/gnosischain/documentation-1/assets/75987728/1fee95f7-5ea8-42b1-914b-427def283789)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/7QZPO-IU3pY). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

June 7, 2023

# Client Team Updates
## EL

* **Nethermind**: No updates.
* **Erigon**: New team member who will be working on Gnosis Chain. 
* **Geth**: No updates. 



## CL

* **Prysm**: No updates.
* **Nimbus**: No updates.

# Chain Infra
**Gateway** : No updates.

# Withdrawals

GNO transfer events issue. Impacted services / tools
https://www.notion.so/gnosischain/Scope-3fc9a72e49ab469092403cc931b4aa46

It should definitely be addressed.
Solutions 
	- There are a cost for staying ERC20 compliant
	- Need more research 
	- System lvl Tx that may be added at the end of the block . It should be synced properly. No matter if it will contain all withdrawals or we will create transaction per every withdrawal. It will have its own hash.

OPTION F 
https://hackmd.io/@dapplion/BJoPtyI82#Option-F-withdraw-contract-pull-distribution
Use Aura ‘prioritized’ Tx for withdrawals call
This approach considered good and clear

# Research

Need to research if Rocket pool might brake by withdrawals issue fix (approach ‘F’)
Contact StakeWise

# Mainnet

Hardfork is delayed.


# Testnet

Don’t need hardfork to for withdrawals issue fix (approach ‘F’)

# Hive 

Hive test are done. Finalized on changes. Finalized Nethermind node sync. Withdrawals simulation created. Sync test also created. 

**Upcoming**
Erigon: Repo organization for Erigon and Nethermind












