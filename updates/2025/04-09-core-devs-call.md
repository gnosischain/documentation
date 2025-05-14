---
title: Core Devs Call - 04/09/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/y8g2GT8yuw4)

April 09, 2025

# Infrastructure

## Gateway

* No one joined

# Innovation

## Shutter

* Solved internal blockers and have a fix ready for Chiado that also includes the libp2p updates

* Should be deployed this afternoon


# Testing

## Hive

* Doesn’t support constructors in genesis yet, but we can continue testing without the genesis account

* Working on implementing EEST support in Hive


## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* Monitoring Pectra

* Preparing the release

### Erigon

* Should have a release today or tomorrow without Gnosis Pectra

* The release next week will include Gnosis Pectra


### Geth

* New geth release: 1.15.7
  * Will rebase on 1.15.8 because that’s the official release for mainnet if it arrived early enough. If not: 1.15.7

* Still fighting the Pectra sync bug on Chiado


### Reth

* No major update
  * Instructions for how to run Reth is public

* People can start playing with it and it runs for mainnet and Chiado


## Pectra

* April 30, 2025 at 14:03:40 UTC
  * https://github.com/gnosischain/specs/pull/74/files
    * Epoch: 1337856
    * Slot: 21405696

  * CL clients wouldn’t have shipped in time for an earlier date
  * Will be announced today
  * Client releases will be announced as they come in

* Who wants to participate in the livestream?
  * Nethermind will be there
  * Somnath will be there too



