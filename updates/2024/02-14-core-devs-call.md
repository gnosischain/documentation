---
title: Core Devs Call - 2024/02/14
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/kVQcGwnw3I4)

February 14, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * New release planned this week for Dencun-ready Gnosis

* **Erigon**: 
  * Memory consumption for the RPC filters in the transaction pool is being worked on
    * Question about how to handle filters for blob transactions, as the current version is consuming a lot of RAM
   * New release this week or Monday that will also be Dencun ready

* **Geth**:
  * Has successfully synced all the way until London (~19m) but then crashed because of a null pointer related to config
    * Guillaume knows where to look
  * Next challenge is the consensus change from POSDAO to Merge
    * Next parts up until Cancun should already be implemented and working
  * Marek mentions that snap syncing is now available in Nethermind and could help for Geth as well
    * It’s in an experimental release

# Chain Infra

* **Gateway**
  * Migrating data centers

# Mainnet

* Slot: 14237696 Epoch: 889856 Timestamp: 1710181820 Date: UTC Mon 11/03/2024, 18:30:20

# Chiado

* 100% proposals all the time

# Hive Tests

* No updates

# Innovation

* Shutter
  * Also done with the cryptography part
  * Ready to integrate network and crypto

# Shadow Fork

* Syncing the nodes
  * New deposit contract proxy deployed
    * 0xF110ac616a7BBE7b2a2946432BCF36975DCf0C04





 


































