---
title: Core Devs Call - 02/19/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=iPZAVNm-Vbs)

Feb 19, 2025

# Infrastructure
## Gateway
* Upgraded Ethereum nodes for Pectra

# Innovation
## Shutter
* Close to a new release for Chiado
* Working with the QA team to set up a Shutter-enabled validator on the Devnet
* Nethermind is testing the fixes but would like Shutter to update their Go libp2p library

# Testing
## Hive
 * No updates

## Ethereum/tests
* Ethereum/tests
  * Generated 4/8 Pectra test suites for Gnosis Chain
  * There are new tests by the EF we could use, Kamil is looking into it
    * https://github.com/ethpandaops/assertoor

# Client updates
## EL
### Nethermind
* Released 1.31, including Pectra changes for testnets

### Erigon
* Released v3.0.0-beta2, which includes changes for testnets
* Still looking into the eth_estimateGas issue for Coswap
* Code complete for Shutter regarding main functionality
  * Will spend the next 2 weeks testing this on Chiado

### Geth
* Not present

### Reth
* Syncing mainnet, cancun ready
* Started working on Pectra features
  * Issue with pending non-blob transactions
  * eth_sendRawTransaction RESPONSE {"jsonrpc":"2.0","error":{"code":-32010,"message":"Syncing"},"id":1}


## CL

## Pectra
* Devnet
  * -[SOLVED] consolidation doesn't work (high priority)  
  * -[SOLVED] blob fee collector works
  * -[SOLVED] EL exists - no access to GNO (high priority)
  * -[SOLVED] Erigon issue with execution requests (high priority)
  * -[SOLVED] Erigon runs gnosis pectra tests
  * -[Deployed for gnosis_mainnet, not sure about Chiado] deploy 7002/7251/6110 contracts
  * -[SOLVED] devnet-5 issue
    * Most likely a mismatch in the versions (Erigon was using Devnet 6 configs, Nethermind Devnet 5)
    * Anders from Nethermind is still looking into it
    * Not reproducible on Devnet 6, but was reproduced on Devnet 5
  * -[DISCUSSED with @filoozom] review deposit contract (high priority)
  * Fork on Erigon with Lodestar
    * Niko from Lodestar is looking into it
    * Didn’t manage to reproduce it with either Lodestar or Erigon
    * Might not be Gnosis-specific
  * -[Low priority] dora issues
  * -[Low priority, can be ignored if consolidations works] the tooling for deposits doesn't work for ethereum-devnet, on gnosis-devnet we managed to do deposits
  * Deploy contracts
    * Done on mainnet
    * Need a node with unsafe EIP-155 support
      * Does anyone have one?
  * Run Pectra tests on Erigon
    * Done
  * Chiado schedule
    * Slot 15171584 ts 1741254220 UTC Thu 06/03/2025, 09:43:40
  * Mainnet schedule
    * Slot 20717568 ts 1742581180 UTC Fri 21/03/2025, 18:19:40
    * Slot 20766720 ts 1742826940 UTC Mon 24/03/2025, 14:35:40
    * Slot 20783104 ts 1742908860 UTC Tue 25/03/2025, 13:21:00
    * Slot 20799488 ts 1742990780 UTC Wed 26/03/2025, 12:06:20
    * Slot 20815872 ts 1743072700 UTC Thu 27/03/2025, 10:51:40
    * Slot 20832256 ts 1743154620 UTC Fri 28/03/2025, 09:37:00
    * Slot 20889600 ts 1743441340 UTC Mon 31/03/2025, 17:15:40
    * **Slot 20905984 ts 1743523260 UTC Tue 01/04/2025, 16:01:00**
    * Slot 20922368 ts 1743605180 UTC Wed 02/04/2025, 14:46:20
    * Slot 20938752 ts 1743687100 UTC Thu 03/04/2025, 13:31:40
    * Slot 20955136 ts 1743769020 UTC Fri 04/04/2025, 12:17:00
    * Slot 21028864 ts 1744137660 UTC Tue 08/04/2025, 18:41:00
    * Slot 21045248 ts 1744219580 UTC Wed 09/04/2025, 17:26:20
    * Slot 21061632 ts 1744301500 UTC Thu 10/04/2025, 16:11:40
    * Slot 21078016 ts 1744383420 UTC Fri 11/04/2025, 14:57:00
  * We should push for consolidations after mainnet to make the network more efficient





