---
title: Core Devs Call - 12/11/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/QCvY1U05Hio)

Dec 11, 2024

# Infrastructure
## Gateway
* No updates

# Innovation
## Shutter
 * Some issues with the libp2p bootnodes
 * Will soon add more keypers
 * Plan to make the internal observability Grafana dashboard publicly accessible at some point
    * Still need to hide IPs
 * Dashboard
    * https://explorer.shutter.network


# Testing
## Hive
 * Fixed all failing tests
 * Added Reth support
   * Most tests are still failing
   * Allow Deb and others to test their implementation with Hive

## Ethereum/tests
* Depends on Retesteth, which is currently being fixed

## Retesteth
* Fixed some scripts because clients were sending data with extraneous fields
* The Dockerfile had some stable / conflicting dependencies
* Will work on fixing ethereum/tests error messages to be able to fill tests


# Client updates
## EL
### Nethermind
* Released 1.30.0
* Almost done with 44s
    * Still fixing issues about exporting and importing ERA files
    * ERA files will be hosted somewhere public (Swarm, IPFS, S3)

### Erigon
* Released erigon3-alpha6
    * Now by default a full node instead of archive node
    * Focused on performance for validating
        * https://erigon.tech/announcing-erigon-v3-alpha-6-focus-on-staking-and-full-node-performance/
* Beta 1 should be released in a few weeks
    * Stability is improving


### Geth
* The full sync on the latest rebase is working fine for now
* Some tester had a database corruption issue on Geth
* Geth is ready to be publicly released


### Reth
* Had issues with post-block processing, the state wasn’t getting committed to the database
    * This was fixed and ~1000 blocks were synced successfully after the merge
* Working on a Reth <> Hive integration


# Pectra
* All the scripts are ready to deploy a version of Devnet 5 for GC

