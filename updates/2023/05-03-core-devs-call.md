---
title: Core Devs Call - 05/03/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes


![](https://i.imgur.com/hKWegwm.png)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=MTaoJ3ksRY8). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

May 3, 2023

# Client Team Updates
## EL

Confirming EIPs
* EIP-3651: Warm COINBASE
* EIP-3855: PUSH0 instruction
* EIP-3860: Limit and meter initcode
* EIP-170 is added as well because it was still missing
https://eips.ethereum.org/EIPS/eip-170
* Regarding max code size
* EIP-6049: Deprecate SELFDESTRUCT
* EIP-4895: Beacon chain push withdrawals as operations** Gnosis modified. These need to be added to our specs repo
https://github.com/gnosischain/specs/issues/5

* **Nethermind**: Started work on the shutter chain. Nothing specific to show yet. Running 50% Erigon nodes
* **Erigon**: No updates
* **Geth**: I got fullsync to kickstart after the database reconstruction: code was missing. I fixed this and now I am debugging the "system call" at the end of the block, where the block reward is distributed. Once this is fixed, and since it's the last thing that gets executed in the block, fullsync should work.

## CL


* **Prysm**: No updates.
* **Nimbus**: No updates.

# Chain Infra
**Gateway** : Nothing specific. Igor is participating in a hackathon today


# Devnet

No updates from Nethermind, Erigon or Gateway.
Nethermind, ran a tool that generates bad blocks to test if the network handles them well. Everything is working well. Tests on Gnosis’ side; we haven’t tested a lot on our side yet. Defined a todo list of what we are going to test this week. https://github.com/gnosischain/consensus-deployment-ansible/issues/67

# Research

**Shutterized Beacon Chain** Being implemented as a Nethermind plugin

# Tests
**Hive** Last week’s issue was solved. Related to geth being hardcoded. Trying to make this more universal. It was recalculating a hash instead of just taking one received by the API. Ensure that we reach the TTD. Generating some post-shanghai blocks. During each step, we check if the chain is working correctly. Should have some withdrawal tests for end of next week.Focused on integrating the withdrawal contract this week









