---
title: Core Devs Call - 02/12/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=-wNpEbAG8rg)

Feb 12, 2025

# Infrastructure
## Gateway
* Gateway
   * No Updates

# Innovation
## Shutter
* Working on libp2p
* Nethermind pointed out that there’s a new libp2p release for Go
* Found some libp2p bugs that could be responsible for the issues

# Testing
## Hive
 * No updates

## Ethereum/tests
* Improvements for EIP-6610

# Client updates
## EL
### Nethermind
* Released RC
  * Narrowed down 2 small PRs that still need to be merged
* Full version today or tomorrow for the Ethereum deadline
  * Still investigating the issue for Gnosis Devnet 5 before cutting a new release

### Erigon
* Will have a release ready by tomorrow
* Carlos reported an issue about a request having an incorrect prefix
  * Already fixed and merged, to be tested and confirmed by Carlos before release
* Call later today to decide whether the release will be tomorrow or later

### Geth
* Released 1.15.0, not the final release for devnets, should still be able to join
  * Current release might not be able to create blocks with blobs
* Gnosis Chain Geth
  * Currently rebasing on 1.15.0
  * Blob base fee collector still to be done

### Reth
* Bugs with 2 blobs
  * Was using the blob parameters in some locations but not others (and defaulting to Ethereum’s values)
  * Has now been made consistent everywhere, so it now syncs Cancun correctly
* Synced to ~80 days ago
* Wants to join the Pectra devnet
  * Will need the genesis etc to join
* What are execution speeds for other clients?
  * Reth currently syncs at 40-70 mgas/s
  * Geth is around 6 mgas/s

## CL

## Pectra
* Devnet
  * Consolidations don’t work
    * Linked to churn limit
    * Will spin up a new devnet today
  * Can’t access the GNO after EL exits
    * What happened here?
    * Trying to reproduce, not 100% sure that it’s an issue
    * The exit worked, but the GNO might not be accessible
      * Let’s keep the current devnet 6 as the exit is already done to confirm this
  * Erigon issue with execution requests
    * There is already a new Erigon version that should fix this
      * The last version failed because the CLs didn’t accept the payload
      * Linked to the incorrect prefixes
  * Review deposit contract
    * For EL exits?
    * For batchDeposit
  * Spam with blobs
    * Already running
  * Gnosis Pectra tests on Erigon
    * Pectra tests are ran against Nethermind and work, would be good for Erigon to run those as well
      * Waiting for Yerke to be back from holidays
  * Deploy 7002/7251/6110 contracts
    * Will be done by Philippe today
    * 7002 (0x00000961Ef480Eb55e80D19ad83579A64c007002)
    * 7251 (0x0000BBdDc7CE488642fb579F8B00f3a590007251)
    * 2935 (0x0000F90827F1C53a10cb7A02335B175320002935)
  * Devnet 5 issue
    * Should be close to figuring out what’s happening
    * Pretty much narrowed it down to one PR, building a new image now for testing
    * Might be related to running the wrong spec on Devnet 5
  * Dora issues (low priority)
    * Not a blocker, but might be helpful to fix
  * Tooling issues on Gnosis vs Ethereum (low priority)
    * https://github.com/eth-educators/ethstaker-deposit-cli doesn’t work?
    * Might also be linked to the churn limit


