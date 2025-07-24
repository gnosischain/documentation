---
title: Core Devs Call - 05/21/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.

Watch the call record [here](https://youtu.be/_Yy2Kxj7wM4).

May 21, 2025

# Infrastructure

## Gateway

* No major updates

* Monitoring the Circles launch today

* Improving per-api key monitoring

# Innovation

## Shutter

* Keypers are running again
 
 * Downtime between 0 to 2 days, unsure because of an issue in monitoring

* Shutter blocks are being produced

* There was a bug in a libp2p dependency that caused the thread to hang

  * Fix will be released shortly


# Testing

* Fixes a few failing jobs

* Updated upstream version

* Switching to EEST


## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* Preparing for devnet0 (Fusaka)

* Working on Portal network for EIP-44s

* Need to work on post-merge ERA1 import / export

  * Currently exported files might lack some information

* Doing perfnets to find a safe gas limit for Ethereum mainnet

* Released a new version that is not related to GC

### Erigon

* Working on devnet0 (Fusaka)

* Giulio is working on the performance testing / gas increase testing

* Going to release a patch version soon with miscellaneous patches to Erigon 3 (3.0.4)

* There was a state growth issue until 3.0.2, so users should upgrade to 3.0.3 and wipe the “chaindata” folder

  *  The mdbx database will be reconstructed from the snapshots


### Geth

* No present

### Reth

* No present
