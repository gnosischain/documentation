---
title: Core Devs Call - 2024/06/19
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/n_kkvzgc-Rc)

June 19, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Fixing some issues on the release with better processing times
  * Dmytro joined as a QA engineer and will work on Hive testing  and testing in general with Egor
  * Exploring EIP-4444


* **Erigon**: 
    * Nothing Special

* **Geth**:
  * Not much progress
  * Still working on Chiado to get the proper genesis block
    * Geth doesn’t support the constructor config for genesis
    * The 4 first contracts in the file work, but the 5th reverts
    * Maybe we can just fetch the code for those contracts at genesis and then fetch the storage slots so we don’t need to execute the constructors
      * Could be done with Erigon (check with Somnath)
  * Questions
    * Is it possible to trace the genesis block on any of the clients?
    * What was the block building issue on mainnet?
      * Not quite clear, will try to run some validators again


* **Reth**: 
  * Most of the Gnosis specific logic is implemented
  * Lion now wants to run a devnet with Nethermind + Reth
  * Importing state and restarting post-merge can be tough
    * Testing always takes 45-60 minutes to import state
    * In the end, implementing AuRa in Geth took 2 weeks, which was must faster than testing state import


# Chain Infra

* **Gateway**
  * Preparing the migration, should happen this week

# Research

* EIP-7002 (EL withdrawals)
    * Still ongoing

# Innovation

* Shutter
    * Testing transactions from the dApp
        * Call with Marc?
            * Wasn’t able to join
    * Marc applied a fix and is trying to run this code on Chiado


# Testing

* Was https://hive-gno.nethermind.io/ fixed?
    * Yes, but only for Nethermind
        * Some test cases are failing, Marcos will look at them this week
    * There’s an issue on the config for Erigon
* Were Hive tests fixed
    * For Nethermind
    * For Erigon













































