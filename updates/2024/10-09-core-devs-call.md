---
title: Core Devs Call - 10/09/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/fesJIYa9NhE)

Oct 09, 2024

# Infrastructure
## Gateway
* RPC working fine with latest EL versions
*Implementing batch rate limits
* Will start working on consensus layer proxy

# Innovation
## Shutter
   * Nethermind
        * Main Shutter PR has been merged
        * Still working on a few p2p improvements
        * Floodsub has been implemented
        * Peer exchange is being implemented as well
        * Some keys are still not received in time
  * Erigon
        * Milen is going to start working on Shutter support
# Testing
## Hive
 * Focused on CI improvements
## Ethereum/tests
* No updates
# Client updates
## EL
### Nethermind
* Testing new release
* Pushing for Pectra
* Talks about gas limit and EIP-4444
* Work on era files for Gnosis will be implemented after 7702
### Erigon
* No updates
* Erigon 2 will support the first fork of Pectra in the end
* Erigon 3 is not yet rock solid stable and the increased RAM requirements might be unfair, especially on Gnosis Chain
### Geth
* Found a bug in the rebase, now syncing the chain
* Will then test block production
* Sync should complete in a few hours
### Reth
* State root mismatch issues after genesis
* Starting on a chain with Shapella but without Dencun
* Only a reward contract call is being made
* Try with 0x0 and system accounts have > 0 balance
## CL
#### Pectra
* Potentially looking at Q1 2025
# Research
* No updates



















































