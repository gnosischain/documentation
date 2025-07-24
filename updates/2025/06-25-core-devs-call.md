---
title: Core Devs Call - 06/25/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted, aiming to foster innovation within the community.

Watch the call record [here](https://youtu.be/fD_Nbn-2aq4).

June 25, 2025

# Infrastructure

# Innovation

## Shutter

* New Dappnode package

* Improved metrics to resolve issues with keypers’ online status

* Plans to increase keyper set size


# Testing

* EEST fork release upstream, scripts to debug the tests

* T8b issues being fixed

* Lion gained context on testing and Hive, writing tests

# Client updates

## Nethermind

* Release 1.32.0 after final tests

* Seb referenced eth_getLogs issue: 8860

  * Doesn’t have index to serve long ranges effectively

  * Working on an index, will be done hopefully by next month
  
  * Long range queries suffer from a bad design from the starting

## Erigon

* Setting up Gnosis prod validators

* Working on Fusaka


## Geth

* 1.16 release includes archive node and a rewrite of the log indexer


## Reth

* Dappnode release pending signature from DappNode

* Working on custom headers to support pre-merge

* Reth is producing around ~6.5% of GC mainnet blocks


## Fusaka

* Following ethereum 1:1

* Most changes are on networking



## Research
