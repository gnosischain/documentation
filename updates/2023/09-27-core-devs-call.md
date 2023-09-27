---
title: Core Devs Call - 2023/09/20
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/qR-OG_PK-zo). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

September 27, 2023

# Client Team Updates
## EL

* **Nethermind**: 
Exploring Shutter and waiting for some answers
Probably going to release a new version of Nethermind end of this week

* **Erigon**: 
No updates

* **Geth**:
Found the previous problem thanks to Somnath
The contracts weren’t properly imported, but the logic works correctly
Was able to sync 145k blocks
After this, one transaction has an invalid gas usage (more expensive on geth)
https://gnosisscan.io/tx/0x05a1fdb3888007224b13b425e7c2442b3f462919a52f8785b857c15dd255d5d2
Comparing traces as we speak
Has to rebuild the current state (~14 hours)
Needs access to an S3 bucket in order not to have to sync from scratch constantly
Implemented the withdrawal contract to be able to go through the transition once it gets there


# Chain Infra

* **Gateway**
No one present

# Dencun

* Devnets
  * Empty system address?
  We’ll try to send a few wei to the system account on Chiado first
  * Devnets
Carlos is preparing configurations for the devnet
Should be ready for end of this week or start of the next one
Working on the max churn limit



# Hive Tests

Started working on the dencun tests
As soon as tests are ready, they’ll be shown in the dashboard https://hive-gno.nethermind.io/
Work on upstreaming will be done after dencun tests are implemented
Somnath can help for that
Will speak with Egor about adding older Hive tests



# Research

* AuRa contracts
Should be cleaned up
Jorge was exploring this topic but gave up
Marek will ask him about his opinion
* What about BEACON_ROOTS_ADDRESS?
Will we have the same address or a different one?
We should be able to create it at the same address
Worst case we can just hardcode it in the genesis file (ideally CREATE2 though)
Guillaume asked Matt
Might rely on a dependency on EF, in which case we can just make the address configurable and deploy it with our own keys
* Are legacy transactions disabled?
Might still be enabled in Erigon, but not in Geth and Nethermind?
Andrew will check
Geth disabled legacy transactions (without chain id) in the transaction pool, but still accepts them in the block


















