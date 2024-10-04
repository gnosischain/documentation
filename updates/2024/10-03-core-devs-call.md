---
title: Core Devs Call - 10/02/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/GZQ8pvOcOq4)

Oct 02, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Testing a new release: 
        * performance improvements, fixes, engine_getBlobs -> 
        * might be useful for gnosis validators a little bit who are struggling with bandwidth,
    * A lot of work on Pectra
        * Generally a lot of progress in the performance area

* **Erigon**: 
  * Busy with Erigon 3
      * Small forks for Pectra
      * Forcing to users from Erigon 2 to Erigon 3
      * User have to resync
      * Sync time will significantly reduce
  * General availability Erigon 3 
      * Changing UX 
      * Config and storing everything will change
      * Trade-off: optimizing RAM 
      * Dealing with hive issues
          * will fix it soon

* **Geth**:
    * Still debugging the rebase

* **Reth**: 
  * Welcome Debjit!
  * Fixed the differences between production and verification

# Pectra

* Which path should we follow for Gnosis
    * See Ethereum ACD
    * https://github.com/gnosischain/specs/pull/51 
* When should we start testing?
	* Gnosis specific devnet
	* Nethermind: we are starting slowly

# Chain Infra

* **Gateway**
  * Gateway: Created new extended feature batch limit
  * RPC works well with the latest version.

# Innovation

* Shutter
    * Finalized engine room. Scheduled next week.
    * Explorer.shutter.network is ready
    * Working on next iteration. Tomorrow will be live
        * New deployment on Chiado
    * Nethermind: 
        * Started pay discovery
    * Erigon: 
        * Team working on for implementation
        * New team member!

# Testing

* Hive
    * Updated new test
* Ethereum/tests:
    * Fix some operational issues
    * Still working on it

















































