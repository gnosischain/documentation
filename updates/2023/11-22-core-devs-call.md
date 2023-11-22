---
title: Core Devs Call - 2023/11/22
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/bk2js1FSFxI).

November 22, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * New engineer: Marc
    * Going to explore Shutter with Ruben
  * Noticed 2 bad blocks
    * https://gnosischa.in/slot/12320625 Graffiti: FreeAssangeNow!
    * https://gnosischa.in/slot/12330966 Graffiti: Powered by ⚡Allnodes
  * Had some out of memory issues in edge cases, but those were fixed
    * Not on Gnosis Chain, just Ethereum

* **Erigon**: 
  * Discovered parameter that was causing issues
  * Fixed problem related to OOM, problem for several nodes, incl Gnosis chain
  * An Erigon node is now 700GB with `--prune=hrtc`, which is around the same size as an archive node
    * Maybe there’s some issue with pruning for Gnosis?


* **Geth**:
  * Second branch was able to start syncing this morning
  * Might need some help from Nethermind regarding receipt encoding


# Chain Infra

* **Gateway**
  * No one present

# Hive Tests

* No update

# Devnet

* Erigon updated the configs
* We’re not sure if it’s running because Carlos is not present
* There might be some issue with Nethermind and eth/68
  * Syncing issues
* The chain seems to be progressing
























