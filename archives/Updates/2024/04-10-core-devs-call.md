---
title: Core Devs Call - 2024/04/10
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/b6OEAy3mccg)

April 10, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Nothing new
    * Working on Pectra and half-path / snap sync server

* **Erigon**: 
  * Working on Pectra and Erigon 3

* **Geth**:
  * Issue when the first blob was included in a block
  * Currently less than 2 weeks behind head
  * Then will test snap sync with a new geth node

# Chain Infra

* **Gateway**
  * No updates

# Innovation

* Shutter
    * The first Shutter transaction was included!
    * Transaction submitted to sequencer contract and included in a block
    * However, keypers are mocked for now, so the keys are hard coded
        * Because the keypers are still using the BN curve rather than BLS
        * Will require some changes from Shutter and then some testing
        * No ETA yet
    * The libp2p issue hasn’t been resolved yet, so the connection breaks after around half a hour

* Verkle Tree Integration
    * Gnosis Chain has less time per block to do the transition
    * What’s the upper bound for time we can take to do the transition?
        * One issue is that snap sync is not entirely figured out for the transition yet, so syncing could be a bit more difficult (but at most nodes would have to sync 2 months worth of blocks, which on Gnosis Chain is not that huge of an issue, and it likely doesn’t change anything for Erigon at least)
    * Ethereum is targeting 2 weeks, on Gnosis Chain with identical parameters it would take 4x longer, so 2 months (mental math, to be checked)









































