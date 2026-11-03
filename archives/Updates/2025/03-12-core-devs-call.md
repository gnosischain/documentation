---
title: Core Devs Call - 03/12/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

No record available

March 12, 2025

# Infrastructure
## Gateway

* After Chiado hard fork all good


# Innovation
## Shutter

* Small issue in Chiado fork, updating to new libp2p version. Unrelated to Gnosis impl, should be ok by this week.
  * Testing on-going


# Testing
## Hive

* Tried to run generated tests, but Hive doesn’t support Gnosis. Need to adjust to make it compatible. Probably a Genesis issue


## Ethereum/tests
* Ethereum/tests
  * No updates, not yet merged


# Client updates
## EL
### Nethermind

* Spent time on Holesky recovery, Chiado all good, pending testing results. One issue, which may not affect Chiado. Asked input to Gnosis devops about CPU info.

* Reviewing Pectra post audit, but nothing important found yet

* Working on history expiry


### Erigon
* New release 3.0.0-rc.3 small fix for syncing from scratch post-pectra. One small issue in RPC for estimateGas.

### Geth
* No updates, not ready yet for Pectra.

### Reth

* Made compatible with Chiado, synced up until Cancun stopping before Pectra. Stuck on a post-execution issue.

* Second mainnet sync on-going

* Attempt to be ready by Pectra


## CL

* PR to baked in Chiado, didn’t make it on time for the fork. But for the mainnet release they will be released

## Pectra
* Fork date on Ethereum is unclear at the moment.

* Geth network share appears negligible at the moment.

* We commit to schedule Gnosis date whenever Ethereum schedules, choosing a date that’s a few days earlier. Temptative date of April 1st is dropped.

* DAppNode packages ownership: we should claim ownership of those
  * Nethermind: In their CI already
  * Erigon: Gnosis should CI it
  * Geth: Gnosis should CI it
  * Reth: Gnosis should CI it
  * Lighthouse: Gnosis should CI it
  * Teku: ?, maybe Gnosis should CI it
  * Nimbus: ?, wrapping the release anyway. Gnosis should CI it
  * Lodestar: In their CI, Nico owns it

## Research
* History expiry in Chiado: activation date? 
  * Geth may not be ready, but we will keep at least one node able to serve history.
  * Reth already starts from merge state, need to look into support




