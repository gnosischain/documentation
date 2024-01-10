---
title: Core Devs Call - 2024/01/10
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/aLNxcgz4qjs)

January 10, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Shutter
    * Working on Shutter’s cryptographic implementation
    * Still no Docker image for the testnet
* Released 1.25.0 with performance improvements, geth compatible tracers and JSON-RPC improvements (was a preview last week)


* **Erigon**: 
  * We need to test the image for aggressive pruning provided by Somnath
  * Checked the logs for Nimbus + Erigon missed slots for devnet 3
    * Could not find a reason why the payloads would be invalid
    * The sequence of requests for payloads might not be optimal on Nimbus’ side (some type of race condition?)
    * There might be a bug in the transaction pool for Erigon during block building
      * Discovered because of a Hive test failure on Ethereum
      * Somnath is looking into it
  * Released a new version



* **Geth**:
  * Not present
  * There’s still the issue about the synced state not being considered as the canonical one
  * Guillaume is looking into implementing full sync with AuRa


# Shadow Fork

* We want to shadow fork Chiado to make sure that everything works
* We need a copy of the deposit contract deployed on Chiado
   * I.e. just a new proxy that points to the same implementation
     * https://gnosis-chiado.blockscout.com/address/0xb97036A26259B7147018913bD58a774cf91acf25


# Chain Infra

* **Gateway**
  * updated a couple of nethermind nodes to nethermindeth/nethermind:release-1.25.0-rc,

# Dencun

* Chiado
  * Hard fork scheduled for
    * Epoch: 516608
      Slot: 8265728
      Timestamp: 1706724940
      Date: UTC Wed 31/01/2024, 18:15:40
    * Chosen to align with the historical roots
      * For example era files use this
      * Ethereum does it as well
  * Dependencies
    * 4788: https://gnosis-chiado.blockscout.com/address/0x000F3df6D732807Ef1319fB7B8bB8522d0Beac02

# Hive Test

* Fixed the actions that were failing, which were due to misconfiguration in the clients
* Erigon is still missing 3 tests that should not be failing
* Building a tool to push hive test logs to Telegram every day



# Devnet

* Running devnet 3 that started this week
  * Overall the network is healthier than devnet 2
* Two issues
  * Nimbus + Erigon pair, Somnath is looking at it currently
    * Other Erigon pairs seem to work fine
  * Blob fuzzing script has issues






























