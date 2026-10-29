---
title: Core Devs Call - 03/05/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/3LipaWjKElU)

March 05, 2025

# Infrastructure
## Gateway

* Updated all the clients to the latest releases
* Still need to look into potential web3signer changes


# Innovation
## Shutter

* New test release that includes an updated libp2p
  * Probably released this afternoon in the Chiado release
  * Will test better connectivity with this release

# Testing
## Hive

* Python client for Hive to run EEST tests on CI

## Ethereum/tests
* Ethereum/tests
  * Rebasing the EEST repo with upstream

# Client updates
## EL
### Nethermind

* Nothing specific except related to Pectra on Holesky, Sepolia and Chiado

* Prepared some monitoring stack for the Chiado hard fork

* New release for the Sepolia / Chiado issue: v1.31.4


### Erigon
* Prepared releases for the Sepolia issue 3.0.0-rc2, and 2.61.3
  * Same release for Chiado


### Geth
* Not present

### Reth

* Pushed Pectra related changes for Chiado

## CL

## Pectra
* Sepolia issue
  * Reproduced on devnet 2 and would appear on Chiado as well
  * The chain would still be progressing but with empty blocks as long as the buggy transaction stays in the mempool
  * We need to upgrade all the Chiado nodes

## Research
* Testing
  * We should test important contract upgrades (namely the deposit contract) in a shadow fork. Had we not caught the issue on Sepolia, we would have instantly broken the chain with a very basic `setImplementation` call on the deposit contract.

* Marc’s encrypted mempool research
  * https://ethresear.ch/t/smart-account-encrypted-mempools/21834

