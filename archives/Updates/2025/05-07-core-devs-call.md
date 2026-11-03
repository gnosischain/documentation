---
title: Core Devs Call - 05/07/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the call record [here](https://youtu.be/1rCcfp_kAig).

May 7, 2025

# Infrastructure

## Gateway

* Issues related to channel/consensus layer/ etc.
* Enables to use caching and metrics, proper RPC integration for CL
* Get_code mismatch:
  * Needs a client-side fix: Erigon is working on it


# Innovation

## Shutter

* Issue with nodes not being upgraded
* Can’t generate keys, in contact with keypers
* Increasing keypers on the roadmap
* Libp2p stability improvements being worked on
  * Testing on Chiado, very promising, no disconnects

# Testing

## Hive

* Updated branch to reflow, new instructions and jobs (8)
  * All 4 clients included in daily test runs

## Ethereum Test

* Updated branch to reflow, new instructions and jobs (8)

* All 4 clients included in daily test runs

## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* No updates

* Pectra monitoring going good

### Erigon

* No update

### Geth

* Config issue with deposit contract address being set incorrectly

* Fixed soon afterwards, no issues since


### Reth

* Removed setup script, state download/import from within binary

* Upgrade upstream reth


## Pectra

* Dappnode

  * Erigon Dappnode managed by Dappnode itself

  * Nethermind manages their own DNP releases


## Research
