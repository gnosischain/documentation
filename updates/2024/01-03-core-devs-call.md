---
title: Core Devs Call - 2024/01/03
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/MVqT9Rjas04)

January 03, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * No specific updates
  * Preparing a new release with performance improvements
    * RC this week
    * Next week full release
  * One more release with experimental state db changes with large improvements
    * Initial tests were very promising

* **Erigon**: 
  * Testing change to make validator nodes lighter (better pruning, i.e. just keep receipts for the deposit contract)
  * Somnath will work on a release so we can test it on the devel branch


* **Geth**:
  * Not present

# Chain Infra

* **Gateway**
  * No specific updates
  * Can test new Nethermind releases, just ping Anton on Telegram
    * nethermindeth/nethermind:release-1.25.0

# Dencun

* Chiado
   * Tentative date around end of January, ideally Jan 31st (during the core dev call)
  * Around the same time as Sepolia
  * Lion will run the script to find optimal epochs (right time and epoch boundaries)

# Hive Test

* Migrated more tests for Cancun, but in the process broke withdrawal tests
  * These are being worked on currently


# Devnet

* Solved Nethermind related issues
* Some issues with Erigon-Teku
* We had one node missing slots (Erigon + Teku)
  * Technically one forked, but it’s likely because it was out of sync with the network and then produced a block itself
* We need to add Lighthouse (unstable) and Nimbus (v23.11.0)
* We need to observe the network a bit more
* How are Teku nodes configured currently, as the preset isn’t set up in the code base yet?





























