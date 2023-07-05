
---
title: Core Devs Call - 07/05/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=PZqWkFgwyTA). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

July 5, 2023

# Client Team Updates
## EL

* **Nethermind**: No updates
* **Erigon**: No updates except latest release that supports shapella
* **Geth**: No updates


## CL

* **Prysm**: No updates.
* **Lighthouse** No updates.

# Mainnet

Audit still ongoing
All the clients have created releases
Working on Dappnode packages now

**Sedge**
Can we add Erigon?
Can we add Nimbus?
Probably not

Can we update all the client versions for shapella?

# Deposit Contract

We added a `executeSystemWithdrawals` with the first argument removed. This can be used instead of the one with the deprecated argument if we deprecate Chiado at some point. Alternatively, we can also implement branching logic for Chiado specifically and use that new function for Gnosis mainnet. **Needs to be 4 for Chiado for now.**


# Chain Infra

Gateway: No updates

# Chiado

8 withdrawals consume ~45k gas
Slot cleanup script done
Next step: upgrade to the latest contract version


# Hivetest

We solved the warm coinbase issue. 
Some contracts were missing.
Start to look into claim events
Building a dashboard, similar to what the EF has
To show the test results for different clients
https://hivetests.ethdevops.io/
Running the entire suit takes a few hours, so it can sometimes time out on CI
GitHub Actions only allows for up to 6 hours
This might have been fixed?












