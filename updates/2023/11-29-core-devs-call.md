---
title: Core Devs Call - 2023/11/29
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/oKKvWRfcfuc).

November 29, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * No updates

* **Erigon**: 
  * No updates


* **Geth**:
  * Was able to sync the whole mainnet up to the head block
  * However, none of the progress is getting saved to the database, so restarting the node requires a new sync every time. It also restarts after a full sync.
    * Probably related to the difficulty. Geth seems to expect the difficulty to be the TTD rather than an empty array.
    * This is likely the last issue to fix


# Chain Infra

* **Gateway**
  * worked on enabling eth_getProof on our Gnosis RPC by forwarding it to the Nethermind nodes, at least for certain customers 
  * genome (.gno domains) infra is ready, we are waiting for them to complete whatever legalities


# Hive Tests

* Having some issues with fees regarding blobs

# Devnet

* Added 3 Erigon nodes
  * No issues for now
* Started transaction fuzzers
  * Already had blob generators
* Some reorgs are happening, but all nodes fixed themselves (both Erigon and Nethermind)
* Might have a fix ready for the Nethermind syncing issue but are still testing
* eth/68 issue potentially resolved as well

























