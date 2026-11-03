---
title: Core Devs Call - 2024/05/08
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/07-TtrWiBCk)

May 08, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Snap sync and half-path published last week
    * Preparing for Pectra


* **Erigon**: 
  * Switched internal development to Erigon 3
  * Release candidate of Erigon v2.60.0
    * Should be the last significant v2 release
    * There might still be patch releases
    * Includes the `eth_getLogs` regression introduced in v2.59
      * Log pruning issue fix described in the release notes: 
          * https://github.com/ledgerwatch/erigon/releases/tag/v2.60.0-rc1
                * Required for people who ran v2.59 with pruning
  * Erigon v3
    * Syncs way faster (doesn’t have to execute all blocks since genesis)
    * Granularity of state history is much finer
    * Should be cheaper to run because less data has to be on fast drives and colder history can be on cheaper disks


* **Geth**:
  * No update


# Chain Infra

* **Gateway**
  * No update


# Innovation

* Shutter
    * Nethermind now integrates with the keypers, nothing is hardcoded anymore
    * Working on a few stability improvements
        * Syncing / missed slots: fixed
        * Gossipsub disconnection issue still ongoing
        * Not receiving keys on time
        * Discovered an issue on the keyper side for key signing










































