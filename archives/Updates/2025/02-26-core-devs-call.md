---
title: Core Devs Call - 02/26/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/iPZAVNm-Vbs)

Feb 26, 2025

# Infrastructure
## Gateway
* No updates

# Innovation
## Shutter
* No updates

* Focusing on the Shutter API release


# Testing
## Hive
* Finished Pectra testing on QA

* Updated Gnosis Hive repo with upstream

## Ethereum/tests
* Ethereum/tests
  * Almost finished generating Prague tests for Gnosis (95%

# Client updates
## EL
### Nethermind

* Prepared a release for the fix regarding Ethereum testnets (Holesky fail)

* Will release Pectra configs for Chiado by end of this week


### Erigon
* Going to release the first release candidate for Erigon v3
  * Should include the Chiado configs


### Geth
* Not present

### Reth

* Second post-merge full-sync is running
  * 25% processed since Monday

* The new features were implemented for Pectra
  * Deb needs a reference to compare his implementation with and is having some issues with Nethermind for this. Will debug on Gnosis QA


## CL

## Pectra
* Check the timestamps for Chiado and Mainnet
  * Nethermind’s automated tests checked the epoch boundaries and that test passed
    * Will still check manually

* Erigon will check
  * The timestamp has to match the slot number
  * The epoch boundary ideally should be checked as well

* Max blob count
  * https://github.com/gnosischain/specs/issues/32
  * On the devnet, Milen had to update some configs for Caplin to work
    * Might be related to the blob count
    * Milen will check what was actually changed, will discuss offline
  * Lion is very confident that going from 6 to 2 max blob is fine

* Blob base fee update fraction
  * Remains unchanged
  * Already documented in the PR on the spec repo

* Holesky failure
  * What if this happens on mainnet?
    * We canonicalize the wrong chain
      * Some deposits will not get counted
      * We have to implement custom rules
    * We slash the wrong chain
  * In any case we need better tools to potentially recover a broken chain if this happens on mainnet
  * Could a shadowfork catch this?	
    * In this case not
  * Is it possible to add tests for this type of issue?
    * At the moment there’s nothing universal
    * Client specific
   
## Research

* Era import / export
  * We’ll work on it after Pectra
  * There’s a tentative consensus around dropping pre-merge history after May 1st







