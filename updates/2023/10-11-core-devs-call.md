---
title: Core Devs Call - 2023/10/11
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

💬 Participants represent teams such as:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/E_nP81U8QLU).

October 11, 2023

# Client Team Updates
## EL

* **Nethermind**: 
* Working on internal dencun specific things for Gnosis
* Right now 4844 variables are hardcoded in Nethermind and they’re working on making this configurable
* A new release candidate is underway, majorly integrating cancun features along with some fixes.

* **Erigon**: 
No one present

* **Geth**:
  * Not much progress since last week, mostly investigating
  * 2 branches
    * One that extracts the data from the Nethermind DB and creates the DB to use by the next branch
      * Figured out why it was running out of memory: memory leak in the transaction pool, but didn’t spend too much debugging because of the new branch
    * One that is more modern and supports withdrawals, but doesn’t currently sync.
      * Has issues connecting to other nodes in the network.

# Chain Infra

* **Gateway**
No one present

# Hive Tests

* Fixed the withdrawal issues after merge.
* Working on the dencun tests.

# Devnet

* The devnet nodes have been stable and the network is finalizing
* Lighthouse requires the preset to be built in?
* The blob transaction spammer has some issues, it would be better to try to internal Nethermind tool
* Running with the min gas per blob preset since Friday
* Two more parameters need to be updated, and we need to spin up a new devnet with Erigon from the get go




















