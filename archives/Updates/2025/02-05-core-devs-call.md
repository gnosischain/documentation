---
title: Core Devs Call - 02/05/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/AMEiUMTObnM)

Feb 05, 2025

# Infrastructure
## Gateway
* Gateway
   * Added an Erigon v3 node for testing

# Innovation
## Shutter
* Waiting for the next validator release for more tests
* Asking for a license on a Shutter related repo from the dApp dev team

# Testing
## Hive
 * No updates

## Ethereum/tests
* Generated all of the Pectra test cases
* https://github.com/yerke26/gnosis-fixtures/tree/main
* Fixing some issues on the Nethermind side
* Not integrated with any other client yet
  * Will be added once all issues with test generation are resolved

# Client updates
## EL
### Nethermind
* Will release an RC today
* Main release delayed to likely next week
* Will start discussing around ERA files this week with Yaroslav
  * Found a couple of new issues

### Erigon
* Busy with Pectra Devnet 6
  * Had an issue on Devnet 5 on a certain block
    * There’s a protocol difference with Nethermind unrelated to Pectra
    * Is the blob fee collector implemented in Erigon? Might be an issue
    * It’s a create transaction
      * Tried to access an account that was not in the access list, and Erigon charges a full cold load whereas Nethermind doesn't. The transaction has a different cost on both clients.
    * Could be an issue on Chiado and mainnet too
  * Devnet 6: erigontech/erigon:pectra6
    * Candidate branch that is still missing some PRs

### Geth
* New security release (1.14.13) for geth, not threatening to Gnosis Chain
  * Not 1.15.0, which will contain almost everything for Pectra
  * Planned second release 1.15.1 that should be ready for the new Devnet
* Rebased the Gnosis Chain node
* Will need someone from DevOps to set up CI again
* Current state for Gnosis Chain Pectra
  * The spec is up to date
  * Nothing has been done in Geth yet, and the rebase on 1.15.0 might be complicated

### Reth
* Upgraded to a new version that has access to the configurable blob schedule
* There’s an issue in the block after one where 2 blobs are included
  * After fixing this, Reth should be ready for Cancun except for the networking issues
* Peers reject connections when requesting any data

## CL

## Nimbus
* Need the blob schedule to be changed in the preset
* Lion will go through all CLs

## Pectra
* Devnet 5 was decommissioned, so we lost the transaction that caused the fork between Erigon and Nethermind
  * Transaction to debug
* Devnet 6
  * Already set up, but the explorers have yet to be fully configured
  * Make sure every core dev has access to devnet traces
  * Try to replay the buggy transaction from Devnet 5
* Mainnet
  * The consolidation contract has new addresses

