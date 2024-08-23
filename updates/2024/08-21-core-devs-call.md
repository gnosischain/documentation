---
title: Core Devs Call - 2024/8/21
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/xeds8W3Z99U)

Aug 21, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Released v1.28.0 (snap sync client enabled by default)
    * Working on several performance improvements for the next version
    * Still focused on Pectra



* **Erigon**: 
  * Failing a lot of tests (even on Erigon) because of a performance hack
  * Working on the next alpha version of Erigon v3 and Pectra


* **Geth**:
    * Was able to produce blocks on Chiado, but they’re all empty
        * Investigating as to why this might be happening
        * By default, Geth produces an empty block in case there’s not enough time to actually build one
        * Right now it’s sending that empty block despite there being transactions in the mempool
        * Might be related to a blob processing issue



* **Reth**: 
  * Got stuck with a state root mismatch on a devnet
  * Working with Reth to get a dump and Nethermind to get a diff
  * In general, this comes down to a lack of tooling again


# Chain Infra

* **Gateway**
  * No major updates
  * Everything is working well except for one quick restart


# Innovation

* Shutter
    * No major updates
    * Continuing work on dashboard and general stability of the network
    * Updated the specs to align with what’s actually deployed
        * Will open a PR soon

# Testing

* Hive
   * Can now add new clients faster
   * Geth is being added right now
   * Fixed almost all Nethermind tests
* Ethereum/tests
    * Need someone with good Gnosis understanding to craft the test cases
    * Need a repo for those test cases
    * Clients will have to implement the interface those tests because currently clients are bound to the Ethereum protocol
    * Might work differently internally, we’ll have to see on a per-client basis
















































