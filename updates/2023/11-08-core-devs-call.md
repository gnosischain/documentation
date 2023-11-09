---
title: Core Devs Call - 2023/11/08
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Frame 4490](https://github.com/gnosischain/documentation-1/assets/75987728/ad8f650d-ca71-404f-a75e-2796889f40b2)

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/fnCG-nxt5Pw).

November 08, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * No specific updates
  * Trying to get something ready for Shutter before DevConnect
  * Still seeing bad blocks


* **Erigon**: 
  * No specific updates

* **Geth**:
  * Working on importing receipts from Nethermind
    * New step required in the Shapella branch
    * Issue with the randomness contract
    * Tanishq is going to provide the data from Nethermind

# Chain Infra

* **Gateway**
  * Provisioning the resolver for .gno

# Hive Tests

* Added Erigon for deneb tests
* The current dashboard will include those tests later today


# Devnet

  * We should spin up a new one
  * Erigon has a trie mismatch
  * Nethermind nodes might be having issues
    * A new devnet is required anyways to get better logging
  * New devnet today
    * Lion will review the config (mostly CL)

# Dencun
 
* Finalized all configuration variables
  * https://github.com/gnosischain/configs/pull/18
