---
title: Gnosis Core Devs Call Notes

---

---
title: Core Devs Call - 12/18/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=q9DpEEsAl84&t=3s)

Dec 18, 2024

# Infrastructure
## Gateway
* Private access to CL RPCs is in progress
* Public access to Ethereum RPCs will be deployed this week


# Innovation
## Shutter
* Dappnode has a package to run a Shutter keyper on Dappnode
  * Might not be published yet, but should be shortly
* Working on improving metrics
* Dappnode also already supports the latest Nethermind version with Shutter

 
# Testing
## Hive
 * Mostly focused on consensus spec tests

## Ethereum/tests
* Worked on fixing the test cases
* Everything works with retesteth
* The output of the test cases is going to be tested by Debjit
  * Basically testing Nethermind test cases with Reth


# Client updates
## EL
### Nethermind
* Released 1.30.1
  * Small patch release
  * There was an issue where Nethermind didn’t start when set up with systemd
  * There might still be an issue with database corruption

### Erigon
* Nothing specific

### Geth
* The two full syncs on the latest branch have successfully concluded
Working with the DevOps team to build releases

### Reth
* Still syncing blocks about the merge
* Manually creating RLPs of 50k - 100k blocks
  * If anything breaks, rebuilding smaller chunks to debug
* Peering doesn’t work because the block hash at genesis is different (pre-merge / AuRa isn’t implemented)
  * The genesis hash could still be hardcoded
  * Peers reject connection because of wrong genesis hash and fork id

## CL

## Pectra
* Devnet 5 should be ready last week of this year for Ethereum according to ethPandaOps
  * We’re targeting first week of January for Gnosis Chain
* Things might move fairly quickly on Ethereum testnets for Pectra
## Research
* EIP-4444
  * How does importing ERA1 files actually work? Is it automatic?
  * Import and export are manual processes
Through CLI or RPC
  * The import can be triggered whenever you want for full sync
    * For archive you start by importing every ERA1 file and then sync
  * Sebastian: what are the trust assumptions?
    * The import will work exactly the same way as when you import from p2p, so everything is re-executed and verified
    * You could sync a wrong chain, but at some point you can check with the beacon chain roots or pivot blocks hardcoded in Nethermind that the full chain is correct. At that point you would have to resync again.
  * ERA1 is a first step with Portal potentially coming next
   * The Portal Network will be able to serve arbitrary blocks without having to reimport the full history
   * The Portal Network will also work with light clients
     * Can access headers, receipts and potentially even the state
 * ERA1 files are just defined for pre-merge but not for post-merge
 * Lion: how would file discovery work
   * On Erigon the torrent hashes are saved on a GitHub repo, so it’s centralized
Might be an issue with firewalls for example (e.g. China) 
    * There might be a fix for this
* Importing and exporting works with ERA1 files for Gnosis on Nethermind currently
  * The full flow works, i.e. snap sync + full sync from ERA1
  * Next steps: finalize testing and review PR
  * ETA Q1
  * Geth doesn’t have ERA1 import yet or pre-merge history drop, so if Nethermind drops the history then Geth would never be able to sync
   * Even with snap sync
 * We need to confirm support from every client
   * Erigon doesn’t rely on this (they use their own snapshots)
    * They’re still going to serve all the blocks by default
    * Nethermind will support it
    * Geth doesn’t yet
    * Reth doesn’t matter yet I’d say, it’s not sufficiently advanced yet
* CL ERA files (from Nimbus)
* https://gbc-era.gnosiscoredevs.io/























































