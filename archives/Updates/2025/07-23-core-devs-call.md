---
title: Core Devs Call - 07/23/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.

Watch the call record [here](https://youtu.be/VzcgHHwRfaw).

July 23, 2025

# Infrastructure

# Innovation

## Shutter

* Working on improving the validator registration UX

* Working on the keyper releases mentioned last week

# Testing

* Working on EEST, t8n and a new jq mapper

# Client updates

## Nethermind

* Released 1.32.3

  * Fixes around archive nodes and block processing

  * Improved stability
* Working on 1.33

  * Will take more time because there’s a bunch of regressions

* Focus on Fusaka

## Erigon

* No major updates

* A bit slow on the 3.1 timeline, will release a 3.0 patch release soon

* Ready for Devnet 3 on Ethereum mainnet


## Geth

* Not present

## Reth

* Upgrade to Reth 1.5.1

  * Chorus One asked for it

* Reth hasn’t implemented all Fusaka changes yet

  * Would require a rebase on a different upstream Reth branch


## Fusaka

* Devnet 2

  * Added Teku and Lodestar

    * Lighthous was already running

  * Facing some issues with Nimbus

  * Waiting for Deb’s Reth implementation
  
  * Working with Erigon to solve the mismatch on the Genesis	
  
    * The configuration seems to be different from how it was during the last devnets
    
    * Marcos and Somnath will jump on a call tomorrow to figure this out

* Only Nethermind is running now


## Research
