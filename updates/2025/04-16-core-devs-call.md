---
title: Core Devs Call - 04/16/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.


April 16, 2025

# Infrastructure

## Gateway

* No major update

* Integrating the CL in the RPC stack
  * Should take a few more weeks


# Innovation

## Shutter

* Deployed the version with the updated libp2p version last week
  * Didn’t improve the communication with the Nethermind validators that much
  * The connection with Erigon is excellent
    * There seems to be an issue between libp2p Go and .NET

* New release with general stability improvements coming out soon


# Testing

## Hive

* Added Reth support to Hive, now running Nethermind, Erigon and Reth

* Can add Geth as well, Guillaume can probably provide the genesis


## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* Prepared a PR with Gnosis hardfork dates
  * Should be released tomorrow at the latest
  * Matches fork hashes with Erigon

### Erigon

* Will release a version compatible with Pectra at the latest on Monday


### Geth

* Still fighting the Pectra bug, although some post-Pectra blocks can still be processed

* Debjit sent some traces to Guillaume for debugging purposes

* Will also still need to do the rebase afterwards

* Should be a fairly simple bug, but not sure yet

### Reth

* Published a new version of the deploy scripts for both Chiado and Gnosis Chain

* Started a new full resync

## Pectra

* There’s going to be a new update for all CLs in any case, should still happen before April 23rd



