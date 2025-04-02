---
title: Core Devs Call - 03/26/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/va89vpPhTW8?feature=shared)

March 26, 2025

# Infrastructure

## Gateway

* No update

# Innovation

## Shutter

* Found an issue in the validator registration on Chiado
  * Working on a fix

* Found an issue on Chiado where Shutter validators aren’t including encrypted transactions
  * Keypers aren’t producing decryption keys

* Libp2p fixes still in progress for communication issues between validators and keypers

* On mainnet everything is fine


# Testing

## Hive

* Rebase on upstream

* Removed some pre-merge related code from the simulator because the TTD was removed from Geth and Erigon clients

## Ethereum/Test

* Working on adding a constructor field to t8n and EEST
  * Because only Gnosis Chain uses them

# Client updates
## EL
### Nethermind

* No major updates

* Preparing for Hoodi: monitoring, etc

* Marc fixed a performance issue related to Shutter, not released yet

### Erigon

* Do you also add some type of extra data to your blocks, and if not, why?
  * For now on Erigon it’s empty
  * What does Geth do?
    * Maybe Geth + version number
  * They’ll add it

* Released stable Erigon 3.0
  * Encouraging everyone to transition from v2 to v3

  * Deprecating Erigon starting on May 1, 2025

  * Ideally 64 GB of RAM, but should likely run fine with 32 GB
    * With Caplin integrated
    * Erigon is running a mainnet validator with 32 GB and the performance seems to be acceptable
      * Some corner cases are still being ironed out
    * Andrew will profile memory consumption for GC
    * Might even work with 16 GB with Caplin, but to be verified

  * Shutter support is pretty much ready
    * Managed to build a few Shutterized blocks
    * Might include it in the 3.1 or 3.2 Erigon release


### Geth

* Geth released 1.15.6, which is the one that should go through Hoodi and be the mainnet one too

* Guillaume is almost done with rebasing

* Still needs to implement Gnosis specific Pectra changes

### Reth

* Pectra ready, on chain tip on Chiado right now

* Currently running a full sync from merge to tip to verify if everything still works

## CL

## Pectra

* Will send invites today for Friday

## Miscellaneous

* Pre-merge history
  * Erigon
    * Andrew needs to check what the difference between minimal and pre-merge history dropping is
    * Erigon v2 can not support this

  * Nethermind is ready

  * Geth is not going to be ready on May 1st
    * We’ll have to run some full nodes for a bit at least
    * Gnosis will run them as will Nethermind

  * Sepolia will drop pre-merge history on May 1st, but it’s delayed a bit for mainnet

  * There’s an EIP for hardware requirements
    * Ideally 64 GB RAM, minimum 32 GB

