---
title: Core Devs Call - 2024/02/07
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/WMBfbdNvmyQ)

February 07, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * No particular update
    * Preparing a new release


* **Erigon**: 
  * Working on changes in the blob transaction pool to limit spamming
  * Working on testing their final release before Dencun
  * No other specific updates


* **Geth**:
  * Guillaume was able to fix the syncing issue from block 1301 and is now syncing
    * Currently at block 1.7m


# Chain Infra

* **Gateway**
  * Working on client diversity for Chiado and mainnet
    * Will have Nimbus + Erigon and Nimbus + Nethermind pairs


# Mainnet

* We’re ready for the hard fork with a window of 1-2 months for releases and time for users to update
  * Nethermind and Erigon are committing to it


# Chiado

* Issues during the hard fork
  * Erigon: the new pending transaction filter might leak memory (issue #9356), especially for blobs
* Gnosis nodes were not up to date
* One Gateway Erigon node was not up to date for 500 keys, but was fixed immediately
* We should prepare diversity better for the next hard fork
  * EL: We kind of got there, but still more Nethermind nodes than Erigon
  * CL: No validators on Nimbus
    * Needs to be tested before mainnet

# Devnet

* We should spin up a devnet for Aura Contract work

# Hive Tests

* No updates

# Innovation

* Shutter
  * Received some traffic from the Shutter test system
  * Their documentation is a bit out of date, so working on figuring out some things
  * In general there’s some progress

# Shadow Fork

* Deploy same contract on mainnet than Chiado (deposit contract proxy)
  * Philippe will prepare it




 


































