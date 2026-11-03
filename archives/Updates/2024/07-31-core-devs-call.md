---
title: Core Devs Call - 2024/07/31
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/0v1wraXESIs)

July 31, 2024

# Client Team Updates
## EL

* **Nethermind**: 
   * Working on new release: v1.28.0 -  Next week
     * Will enable snap sync by default for Gnosis Chain
     * Should make it possible to sync Nethermind in ~30 minutes
     * Includes the fix for Chiado, like v1.27.1
   * Not much progress on EIP-4444 yet

* **Erigon**: 
  * Busy working on Pectra
    * Announced an alpha of Erigon v3
    * Still takes around two days to sync on a 32 GB of RAM machine
    * Because the most recent snapshot is one year old
        * Should be updated next week

* **Geth**:
    * Still debugging what’s happening with Chiado

* **Reth**: 
  * No updates

# Chain Infra

* **Gateway**
  * The mainnet and Chiado configs were not identical
  * Filter queries were disabled on Chiado when they were properly configured in mainnet
  * Now the config is identical

# Innovation

* Shutter
    * Working on general stability improvements
        * Was related to latency
        * A new keyper release helped a lot on the p2p side
        * Some slots are still missed
        * Yesterday night, all keypers stopped sending keys, which was fixed this morning
          * By restarting one of the bootnodes, which seemingly unstuck the keypers
        * On the dashboard side
            * No work on the frontend yet
            * Lot of progress on the backend (network observer, collecting data


# Testing

* Hive
    * Worked on tools to make debugging of hive tests easier

# Research

* No updates
  
