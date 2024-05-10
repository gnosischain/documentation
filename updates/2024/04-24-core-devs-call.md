---
title: Core Devs Call - 2024/04/24
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/wtQ8oVIRVlU)

April 24, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Working on Pectra, close to be ready for devnet0 (expected next week but will be announced at ACD)
    * Testing snap sync
    * Release planned for tomorrow
        * One potential bug remaining
        * Includes half-path and snap sync server for newly synced nodes by default
        * Snap sync in ~45 minutes with one peer
            * Nethermind ↔ Nethermind snap sync tested and working
            * Nethermind from Geth also worked


* **Erigon**: 
  * Working on Pectra

* **Geth**:
  * Fully syncs on GC!
  * Serving snap sync, was able to snap sync a few nodes from it
  * 3 official Geth nodes were deployed an synced, can be used for snap syncing
    * Enodes to be sent in the Telegram group
  * Working on a rebase from a more recent Geth version
  * Block building seems to be broken
  * There’s a bug for full sync that needs to be addressed
  * Very positive in general, just some housekeeping left


# Chain Infra

* **Gateway**
  * Fixed the checkpointz endpoint
  * Observed OOM issues with 1.25.4
    * The node was killed and couldn’t resync after restarting
    * Will keep Nethermind posted with logs and information


# Innovation

* Shutter
    * Pushed a new update with the new curves in keypers
        * Working on integrating with that
    * Working on the libp2p stability issue (probably linked to GossipSub implementation)


# Research

* EIP-3074 + EIP-5003









































