---
title: Core Devs Call - 2024/05/29
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

May 29, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Big push for optimizing the head processing
    * Soon to be released
    * Big focus on Pectra of course
    * Fix for snap sync server (it was incompatible with geth)

* **Erigon**: 
    * No particular updates
    * Andrew wasn’t able to reproduce the issue
        * Philippe will open a fresh issue
        * Will publish a new version if the specific issue can be reproduced
    * Erigon v3
        * Works on Gnosis
        * Might not be integrated with Caplin yet
        * Will have to test internally to see if it works and how it performs
        * 2-3x higher requirements (mostly RAM)
            * V2 required 16 GB of RAM
            * V3 requires 64 GB of RAM
                * Working on optimizations
        * ETA ~6 months based on stability
            * Contingency for Pectra if it takes too long?
                * V2 can backport Pectra changes in the worst case


* **Geth**:
  * Working on adding Chiado to Geth to test block proposals at all
      * Problematic because there’s custom contracts and state in the genesis

# Chain Infra

* **Gateway**
  * No update

# Research

* Stable Fees With Gas Futures
    * Gnosis Chain can fairly easily do gas futures using the fee collector
    * Checking with economists if this is safe and makes sense
      * It might break EIP-1559
    * Private auctions might be complicated to select sell parameters

# Innovation

* Shutter
    * No updates
    * Launch on Chiado went well
    * Worked on some documentation about setting up validators
    * Has stayed connector on both machines since launch
    * There’s still the BLST hack because of incompatibilities between Shutter and Nethermind’s libraries











































