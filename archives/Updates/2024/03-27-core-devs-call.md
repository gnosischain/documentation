---
title: Core Devs Call - 2024/03/27
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://www.youtube.com/watch?v=PwyrwA0DBDQ)

March 27, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Planning on releasing half-path
    * Still a few weeks away
    * Will have around half the speed of geth for serving snap sync


* **Erigon**: 
  * Small release today with fixes for Caplin (2.59.1)

* **Geth**:
  * Was able to go all the way to Dencun
  * Will have to rebase now for Dencun support


# Chain Infra

* **Gateway**
  * The eth_getLogs service unavailable error happens on the public RPC when the servers are overloaded
    * With an API key that doesn’t happen

# Hive Tests

* No updates

# Innovation

* Shutter
    * Managed to fix the threading issue
    * The validator is able to run but can’t produce blocks yet because there’s an issue with passing the decryption keys
      * Might be the protobuf implementation
      * Once this is done, block production should work







































