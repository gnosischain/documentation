---
title: Core Devs Call - 01/29/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/cJeuxr9UMG4)

Jan 29, 2025

# Infrastructure
## Gateway
* Gateway
   * Deployed the update for the 502 errors

# Innovation
## Shutter
* Meeting to discuss libp2p slowness
* Opened access to the p2p metrics
* Ran a test for transaction inclusion, only 3.6% failed transactions


# Testing
## Hive
 * Nothing new

## Ethereum/tests
* Ran all the tests and fixed some small issues in t8n
* Started generating Prague tests
* Adding Prague logic in t8n to generate Gnosis tests
* Nethermind test runner for GC is ready

# Client updates
## EL
### Nethermind
* Focusing on the next release
  * Everything looks healthy
  * Found a few smaller issues
  * Release planned for Monday depending on Pectra plans
    * Might include configs for testnets, depending on tomorrow’s ACD
    * Might thus be delayed
  * Mostly stability issues and focused around Pectra
  * Fixed issues related to receipts on archive nodes
  * Performance improvements
  * 44s ERA import + export


### Erigon
* Focusing on the next releases as well
* Both Erigon v2 and v3 will support Pectra
* The next hardfork (Fusaka) will not be supported by Erigon v2

### Geth
* Not present

### Reth
* 2 issues
  * State root mismatch with Nethermind
    * Seems to work when the deposit contract is deployed before going through Cancun (in isolated tests for blob production)
    * Same issue with the transition between Shapella and Dencun
  * Reth has the wrong constants for Blobs, but they’re hardcoded so will require some upstream changes or a custom TxPool
    * Might work with the Pectra blob configs (EIP-7840)
      * Worth looking into, but requires a rebase to a more recent version of Reth

## CL

## Pectra
* Devnet
    * Managed to set up the deposited validator on Devnet
    * Seems to have issues with Dora explorer (cannot display the deposited validator, results in timeout)
      * Marek says that Dora is for sure ready for Pectra, might be an old version though
    * Might be worth waiting for Pectra Devnet 6 to start from scratch
      * The date will likely be decided tomorrow
    * Dmytro / Carlos will check the status of Erigon and tell Somnath offline
      * Most Erigon validators seem to be down
    * We have to deploy the contracts for consolidation requests
      * This might change tomorrow though, so let’s wait before deploying


























































