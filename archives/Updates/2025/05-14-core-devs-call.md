---
title: Core Devs Call - 05/14/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.

Watch the call record [here](https://youtu.be/UlcEdNY0gmA).

May 14, 2025

# Infrastructure

## Gateway

* There was an issue on Friday that caused Gnosis Pay transactions to get rejected

  * Erigon and Nethermind had diverging results in pending transaction counts

  * That’s a design flaw in Gnosis Pay tbh

* Working on a feature to choose which clients will serve requests on Gateway

  * ETA early summe


# Innovation

## Shutter

* Fixed some issues and contacted the keypers to update

  * Some issues in the dht libp2p library
  
  * Some keyper were offline

# Testing

## Hive

* No updates

## Ethereum Test

* No updates

## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* Bigger release soon to come with a bunch of smaller improvements and fixes

### Erigon

* There are Caplin nodes on the network that are still on Deneb and advertising mainnet Electra (ending with 00 instead of 64) as the next fork
https://probelab.io/gnosis/dht/2025-19/#next-forks

  * I’m assuming that it’s just nodes that weren’t up to date and where Electra wasn’t scheduled, so doesn’t sound like a big issue
 
* Validating performance with Caplin seems suboptimal on mainnet (lots more attestation misses)

  * Functionality-wise Caplin is considered stable

  * Some performance optimizations are still coming

  * Validating performance is a priority right now, so we can expect this to improve in the future

* Started working on Fusaka

* Erigon 3.1 should contain Shutter and should be more robust in terms of performance and snapshots, as well as eth_getLogs
  
* New snapshots will enable faster eth_getLogs


### Geth

* Released 1.15.11, contains a couple of small fixes

* Work necessary to support Shutter

  * Support the encryption to fetch and decrypt transactions from the sequencer contract
  
  * P2p layer based on libp2p

  * Can contact Marc from Nethermind and Milen from Erigon


### Reth

* Upgraded Reth upstream to 1.3.12 with minor refactors

## Pectra

* Testing to do


## Research
