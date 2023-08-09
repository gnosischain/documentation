---
title: Core Devs Call - 08/02/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Core Devs Call ](https://github.com/gnosischain/documentation-1/assets/75987728/c07e8c24-bf37-4f25-85b9-0b41eebb32f3)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/32qBQyAKn8o). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

August 9, 2023

# Client Team Updates
## EL

* **Nethermind**: 
No updates


* **Erigon**: 
No updates
Busy with dencun
Looking into Geth issues with Guillaume


* **Geth**:
There’s an issue with a specific transaction
Fee collection seems to work correctly
If the reward contract writes anything to the state it might cause issues
The block root is still incorrect
Could be linked to incorrect import of all the previous data
Something could be missing (from AuRa?)
The reward contract could write something to the state, thus changing the root

## CL

* **Lighthouse**
Fixed some testing related issue for Chiado
https://github.com/sigp/lighthouse/pull/4530/commits/b35c1dcb71239bb8f074dd0994d6a39191e07133


# Chain Infra

* **Gateway**
Launchpad tested on mainnet

# Mainnet

Checkpoint sync fixed
Fairly janky though
Lot of dependencies to update, fork and maintain
Automatic claims
We’re likely going with an opt-in solution with signature to confirm
If spamming become an issue (as anyone can claim for any address) we can update the deposit contract to require a signature


# Hive Tests

No updates














