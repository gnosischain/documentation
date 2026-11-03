---
title: Core Devs Call - 2023/12/13
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

December 13, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * Slowly progressing with Shutter for the parts they can do alone
    * Requested a Docker image from Shutter
* Merged JSON-RPC related changes that should result in much better performance
  * There might still be some issues
  * Nethermind wants to test this upgrade on the official Gnosis RPC
    * We’re going to start with one node and look at the metrics
    * Maybe it’s a bit early to upgrade all nodes
    * Sending traffic there in a shadow mode / replicate traffic to it without using the return data would be useful
    * This is currently in the master branch, not officially released
  * Working on one regression for a cancun related issue
* Working on Nethermind 2, a big state redesign that would include performance a lot that would allow for snap servers
  * Probably going to be released after Cancun



* **Erigon**: 
  * No news in particular
  * Busy working on Caplin and Erigon 3



* **Geth**:
  * Can’t join today

# Chain Infra

* **Gateway**
  * Saw an increase in traffic and had to scale the infrastructure
    * This helped to reveal minor issues that are being worked on


# Hive Tests

* Working on multi client tests for receiving blob transactions at the same time

# Devnet

* Still having some general Nethermind-specific issues
  * Sometimes out of sync
  * One node with a specific issue
* No issues with the Erigon nodes



























