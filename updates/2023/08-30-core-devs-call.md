---
title: Core Devs Call - 2023/08/30
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

![Event](https://github.com/gnosischain/documentation-1/assets/75987728/c4bea84f-47c9-4e14-aa08-78d338d6c3aa)

Gnosis Core Devs Call Notes

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/exku4k8v91g). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

# Client Team Updates
## EL

* **Nethermind**: 
A new state layout is being worked on, which will optimize block processing significantly
80% to 20% of the block processing time
Will introduce snapshots with this update or soon after
Will allow for snap sync for Gnosis Chain
Might ship end of year, but no guarantee
Geth has been working on something similar for 2 years and will be shipping soon


* **Erigon**: 
No updates

* **Geth**:
Guillaume got pre-shapella and post-shapella states
He’s going to implement the hard fork and see if he gets the right post-state after
A Nethermind archive node was set up for Guillaume so he can trace and get states

## CL

* **Lighthouse**
Merged the Chiado config


# Chain Infra

* **Gateway**
No updates


# Mainnet

Auto claim


# Hive Tests

Fixed the last issue for Erigon
Related to warm coinbase
Working on merging dencun tests
Will likely break some tests, but that makes sense

# Research

 * Big block experiment
We’re going to deliberately spam the network with big blocks to see if it causes issues
Latency
Slower slots / propagation
Less attestations / falling behind
 * History of Gnosis Chain, specifically regarding spamming and attacks
Started by implementing AuRa in 2019 and then POSDAO
Not much recollection of the different attacks
It would be quite cheap to fill blocks, and having somewhat full blocks could cause a lot of nodes to struggle
Right now we’re at 5-10% of block capacity
It should still be in spec, be it for block producing or propagation
Block production should stay under 150ms
Might be a bit more expensive for node operators, but that makes sense
Lion’s concern: we now have a very decentralized network, where users might not have sufficiently powerful systems or network connections. Could this introduce risks?
Of course, some users with under specced systems could be left behind, but that shouldn’t be an issue
For the cheap spamming issue, we had talks about increasing the minimum base fee
We were quite against this though, as the costs should scale automatically based on needs
















