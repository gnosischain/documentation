---
title: Core Devs Call - 2023/10/04
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![core devs call 4 october](https://github.com/gnosischain/documentation-1/assets/75987728/7e56f6e3-7766-4cd8-a2dd-fb9570bf432e)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=A1LI7l5s9G0). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

October 4, 2023

# Client Team Updates
## EL

* **Nethermind**: 
Working on Shutter
No more `xdai(_archive)` configs in the new Nethermind release (1.21.0)
Potential issues in Avado


* **Erigon**: 
The header download functionality is acting up a bit from time to time
Somnath is working on it
Transaction pool should work on Gnosis but hasn’t gone through extensive testing
Same for validating


* **Geth**:
Was able to sync 1.5m blocks
Geth is now running out of memory on the old branch
Did a rebase and is cleaning up some code, but that new branch isn’t syncing



# Chain Infra

* **Gateway**
Is running 100% of the RPC traffic of the Gnosis RPC

# Dencun

* EIP-4788
  * We believe that the `HISTORY_BUFFER_LENGTH` variable doesn’t matter that must
    * Having 1.14 days or 0.47 days give roughly the same UX
* We’re going to keep that number and thus deploy the exact same contracts
  * Gnosis: https://gnosis.blockscout.com/address/0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02
  * Chiado: https://gnosis-chiado.blockscout.com/address/0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02

# EIP-4844

* Big block experiment
  * The network suffers from big blocks (we spammed it super cheaply for a 10 - 20 minutes)
  * The head participation went down quite a bit (close to 20%)
* Min gas price will be 1 gwei to be on the same scale as normal transactions (1 gwei minimal priority fee)
* Nethermind wrote a tool to spam blobs and it broke a lot of clients
  * These might just have been early implementation bugs
* EIP-7514
  * https://hackmd.io/jWVHqjmrQ1aXtpt6iTNTdw?view
  * An attacker could get a 67% share in the network in 2.5 days because the entry queue scaled way too quickly

# Hive Tests

* Merged the dencun tests from upstream
* Will work with Egor to catch up as fast as possible


# Devnet

* We have a Devnet with Nethermind, Teku and Lodestar
  * Lighthouse doesn’t work for custom configs anymore, Carlos is in communication with them
* There are some issues, probably related to peering
* Also deployed the blob scanner and spammer



















