---
title: Core Devs Call - 2023/12/20
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/uaywKDkksEc)

December 20, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * Communications with the Shutter team
  * New version was released
    * This one isn’t downgradeable
  * New version early next year with the JSON-RPC improvements
    * Much better processing without state redesign as well

* **Erigon**: 
  * No updates
  * Was not able to reproduce the OOM in Docker issue

* **Geth**:
  * No updates

# Chain Infra

* **Gateway**
  * No specific updates
  * Nethermind should send over a Docker image with the JSON-RPC changes so that it can be deployed by Gateway and be tested
    * Ideally this week or it will be moved to next year

# Hive Tests

* Solved issues with multi-clients from last week
* Merged our branch with the upstream one, which caused issues
  * They are being looked into


# Devnet

* Monitoring and investigating issues but no specific results
* Restarting fast-synced nodes didn’t work but was fixed

# Innovation

* Shutterized Beacon Chain
  * Nethermind had some questions regarding the transaction database (events or in-contract)
    * Seems like both teams are on the same page about drawbacks and consequences




























