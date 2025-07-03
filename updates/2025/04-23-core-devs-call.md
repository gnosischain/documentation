---
title: Core Devs Call - 04/23/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.


April 23, 2025

# Infrastructure

## Gateway

* Upgraded Nethermind and consensus layer

* Today they’ll upgrade all the Erigon nodes to v3

* Archive CLs: ~1 week left on Lighthouse


# Innovation

## Shutter

* Inclusion rate on Chiado looks good

* In the process of rolling out a new release for Pectra and the libp2p updates


# Testing

## Hive

* Geth support is in progress, a new Docker build is required

## Ethereum/Tests

* No updates


## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* Released 1.31.8

  * Gnosis Pectra compatible

* Released 1.31.9

  * Shutter improvement, Shutter validators should update, not critical. Fixes a potential issue when an empty block would be produced, which is quite unlikely on mainnet


### Erigon

* Released 3.0.2 last week

  * Compatible with GC Pectra


### Geth

* Found the issue that blocked Chiado sync

* A branch with the fix and Pectra-ready is available

* The CI build doesn’t work

### Reth

* Fixed the traces that were different from Nethermind because of the fee calculation difference (per-block vs per-transaction)

* Ready for a mainnet release, just need to merge one PR


## Pectra

* Checklist
  * Done
    * Checkpointz
    * Deposit CLI: ethstaker
  * To do
    * Update bootnodes
    * Update validators
    * Update all hosted tools
      * Ethstats: doesn’t require an update
      * Forky
      * Forkmon
      * ?
    * Dappnode packages
      * Manual updates today
  * Sedge
  * Avado
  * Upgrade deposit contract
