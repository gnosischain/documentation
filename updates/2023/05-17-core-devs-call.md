---
title: Core Devs Call - 05/17/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![may 17 core devs call](https://github.com/gnosischain/documentation-1/assets/75987728/2a8654a5-ef6b-4c8b-80b4-ac407c260991)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=Sz2YXykvRzk). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

May 17, 2023

# Client Team Updates
## EL

* **Nethermind**: Configs for Chiado shapella are ready on the main branch. Released an RC that already includes this. Stable should be released with it before chiado
* **Erigon**: Configs ready on devel.
* **Geth**: No updates.

## CL

* **Prysm**: No updates.
* **Nimbus**: No updates.

# Chain Infra
**Gateway** : Worked on provisioning L2 for Gnosis Chain. New configs for Bedrock regarding the fraud proof window mostly

# Devnet

No updates.

# Withdrawals

No need to update the system call signature in the end. https://github.com/gnosischain/deposit-contract/pull/42. We’re tracking the withdrawal ID internally.

# Testnet

Who’s running the nodes? Gateway?
- Gateway runs Nethermind + Lighthouse
- Nethermind 2k?
- Gnosis 2k?


# Research

**Mempool** Transactions that are way too expensive to be executed and can’t be replaced
https://gnosisscan.io/tx/0x187037824111a2bbc106c63881e34115cc1f4daf9d5e50899bc8e74b1ae3ad04
https://gnosisscan.io/tx/0x767da6692a34117f42869b9780f4752f61d8119b3e2d62d0f79e72c406e428f0
Transactions that are too cheap and will never be executable
https://blockscout.com/xdai/mainnet/tx/0x0adeb6c464c37c86145f135fb9e9252ca504d5706226b7b250ddfb05e42075b8
Small oversight because it’s a local transaction, but shouldn’t be an issue
Nethermind will fix this, but it’s no big deal
Will get evicted if a more appropriate transaction comes in

# Tests
**Hive**: Good progress pre and post-shanghai. Implement tests for post-shanghai scenarios.
Syncing status:  Producing blocks and sending transactions. Verified that withdrawals work like expected. Not getting the expected results. But the root is built correctly and the withdrawals are indeed being executed. Later (timeline: 2-3 weeks)
Block reorgs and syncing issues. Edge cases: Integrate Erigon. Making sure that everything integrated with Nethermind also works with Erigon.
 









