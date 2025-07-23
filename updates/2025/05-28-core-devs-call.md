---
title: Core Devs Call - 05/28/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.

May 28, 2025

# Infrastructure

# Innovation

## Shutter

* No major updates

* Working on fixing a bug that prevents starting a new keyper because it can’t sync new events

* Last tests on Chiado: 100% inclusion rate

* Keypers are consistently releasing keys on mainnet

# Testing

## Hive

* Found some issues in Nethermind master, discovered by Hive

 * Already fixed


## Ethereum Test

* No updates

## Ethereum/Test

* Started work with Marcos

# Client updates
## EL
### Nethermind

* Question: how are pre-merge ERA1 files for GC different from Ethereum ones? Is there a spec for it?

* Released 1.31.11

  * Fixes small memory leaks

  * Also includes changes unrelated to Gnosis Chain

* Release candidate (v1.32.0)
  
* New performance improvements around pruning and block building

### Erigon

* Working on Fusaka

### Geth

* No present


### Reth

* Updated the upstream to 1.4.3

* Working on the custom headers for pre-merge

  * Will not implement pre-merge execution, only implement headers and import historical data with ERA1

* Implemented tagged releases and Docker image builds (currently v0.1.0)

* Will investigate implementing snap sync for Reth

  * Reth doesn’t implement snap sync at all at the moment

  * We want to help them implement this if possible

  * For Nethermind it was complicated because

    * The protocol wasn’t super well specified

    * Some assumptions turned out wrong

* Compressed the initial post-merge state for Chiado and GC so that it’s easier to download on initial sync

## Fusaka

* There’s already devnet0 for mainnet, should we already spin some up for Gnosis Chain?
  
  * Probably not worth it and a waste of time at this point
  
  * For PeerDAS specifically, because Gnosis Chain has faster block times it could be an issue
  
    * Would need big devnets for testing though

* Devnet1 should happen in around a week

## Research
