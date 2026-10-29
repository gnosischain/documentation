---
title: Core Devs Call - 04/02/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Shutter Network, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/-RU30O27j2s)

April 02, 2025

# Infrastructure

## Gateway

* Upgraded Erigon nodes to 3

# Innovation

## Shutter

* Solved one Chiado issue

  * Registration is fixed in a PR but not released yet
  * Still missing decryption keys

* Still working on the libp2p upgrades


# Testing

## Hive

* Updated some CI workflows

* Some tests failed in Nethermind and it was fixed in Nethermind

## Ethereum/Test

* No updates

# Client updates
## EL
### Nethermind

* No major updates

* Preparing for Pectra

### Erigon

* Monitoring Chiadoa and Hoodi
  * Discovered one issue on Caplin, a fix is ready and being tested


### Geth

* Working on the rebase to 1.15.6 which has a bad issue that affects archive nodes (fixed in 1.15.7)
  * Rebase to .7 is not a huge priority because probably no one is running an archive node on GC
  * Still some issues on Chiado post-Pectra
    * Potentially linked to the fee collection contract

* Was trying to run a testnet on RISC-V
  * Geth is running
  * Wasn’t able to compile any CL for that architecture though


### Reth

* Second full-sync for Chiado with Pectra until tip is finalized
  * So no issues have been introduced with the latest changes

* Reth built some blocks on Chiado
  * https://beacon.chiadochain.net/slot/15637636

* The repo now contains documentation to run Reth on Chiado and Mainnet with the initial state

## Pectra

### Mainnet Schedule

* Two weeks prior to mainnet
  * Slot 21127168 ts 1744629180 UTC Mon 14/04/2025, 11:13:00
  * Slot 21143552 ts 1744711100 UTC Tue 15/04/2025, 09:58:20
  * Slot 21159936 ts 1744793020 UTC Wed 16/04/2025, 08:43:40

* One week prior to mainnet
  * Slot 21266432 ts 1745325500 UTC Tue 22/04/2025, 12:38:20
  * Slot 21282816 ts 1745407420 UTC Wed 23/04/2025, 11:23:40
  * Slot 21299200 ts 1745489340 UTC Thu 24/04/2025, 10:09:00
  * Slot 21315584 ts 1745571260 UTC Fri 25/04/2025, 08:54:20

* Batch deposits for variable amounts implemented and being audited
  * https://github.com/gnosischain/deposit-contract/pull/56

### Miscellaneous

* EL ERA1 files: https://gc-era.gnosiscoredevs.io/
* CL ERA files: https://gbc-era.gnosiscoredevs.io/


