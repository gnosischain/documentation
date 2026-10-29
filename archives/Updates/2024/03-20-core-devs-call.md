---
title: Core Devs Call - 2024/03/20
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://www.youtube.com/watch?v=rLSc62dy92A)

March 20, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * Nothing in particular
    * Starting to think about the next release
        * Might potentially include half-path and a snap sync server
        * Expected in a few weeks
    * Progressive on paprika as well, which can’t fast sync and would thus require snap sync servers

* **Erigon**: 
  * Going to make a new release with post-dencun fixes today 
  * Includes a feature for more aggressive pruning of logs and receipts
    * Will only be enabled for new nodes (i.e. synced from scratch)
    * Existing nodes will have to resync
  * Transaction logs are filling the network quite a lot, at least in the last 1-2m blocks
    * This behavior doesn’t happen in Chiado / Sepolia
    * This causes the bloating issue
    * With the default pruning flags, full nodes should be around ~500 GB and archive nodes should be ~1.3 TB
    * One can also use a more aggressive pruning strategy (i.e. last 1k - 5k blocks), which of course would also result in a smaller node. Default is 90k blocks.



* **Geth**:
  * Not present

# Chain Infra

* **Gateway**
  * Deployed Erigon + Lighthouse on mainnet before Dencun and went fine

# Hive Tests

* No updates

# Innovation

* Shutter
    * Managed to register the validators
    * Looking into a couple of issues
        * Race condition
        * Libp2p library on MacOS specifically
    * 2 week ETA should still be realistic

# Mainnet

* 95% attestations immediately after the hard fork
  * Some issues with the Gateway RPC
  * Might be fixed, Alex will double check






































