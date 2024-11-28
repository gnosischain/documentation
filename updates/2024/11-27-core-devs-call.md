---
title: Gnosis Core Devs Call Notes

---

---
title: Core Devs Call - 11/27/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=FoxMqyalY5k)

Nov 27, 2024

# Infrastructure
## Gateway
* Everything’s working well
* Progressing with a Nimbus CL endpoint

# Innovation
## Shutter
   * Still working on the peer discovery issue

# Testing
## Hive
 * No updates
## Ethereum/tests
* Working on solving the issues with Nethermind t8n

# Client updates
## EL
### Nethermind
* Fixed the most blocking issue for the next release
* Still working on an issue that happens after restarts
    * Difficult to reproduce, fairly rare
    * Seems to happen on very fast machines
* Next release
    * Performance improvements
    * Bug fixes
    * Pectras PRs
    * Shutter in the main branch

### Erigon
* Supports Gnosis Pectra Devnet 1
    * Fix for importing genesis
* Pectra Devnet 4 is live on 2.61.0-beta1
* A v3 version should also work on Gnosis Devnet 1

### Geth
* Finished a full sync on Geth
* Rebased on the latest official release of Geth: 1.14.12
    * Working on a clean PR
    * Able to follow the chain and produce blocks on Chiado
    * Will do a full resync on this latest rebase
* Implemented tracing for system calls
* Cleaned code and removed temporary stuff
* Not sure what Pectra needs to be done on Gnosis
    * https://github.com/gnosischain/specs/blob/master/network-upgrades/pectra.md
* Helped Debjit for Reth
* Missing for a public release
    * The rebase on the right branch
    * Validate everything on the latest rebase with a full sync

### Reth
* Got the post-merge state dump from Geth
* Was able to sync ~70 blocks after importing the state
    * Debugging issues with block execution now, invalid block roots

# Research
* Native rollups
    * [A debate between Martin and Justin Drake: ](https://www.youtube.com/watch?v=IPR7ctfcerY)

* Misc
    * https://eips.ethereum.org/EIPS/eip-7639
        * Generally the consensus is to drop pre-merge history in 6 months
            * Because in 6 months, 2 TB will no longer be sufficient to run a full node
            * Will require support for ERA files, but keep the Portal network optional
                * Nethermind has a PR for ERA files, should be merged soon
                    * https://github.com/NethermindEth/nethermind/pull/6547
                    * Compatible with both Ethereum and Gnosis
    * We could do the same for Gnosis Chain as a first step
    * Might be problematic for clients like Reth that need to sync the full chain
    * After this, to sync an archive node you’ll need to download and import ERA files manually and the rest would work like it does currently






















































