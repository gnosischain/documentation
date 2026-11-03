---
title: Core Devs Call - 2024/08/07
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=Jr4cBtp6Q1M)

Aug 7, 2024

# Client Team Updates
## EL

* **Nethermind**: 
    * RC 1.28.0 https://github.com/NethermindEth/nethermind/releases/tag/1.28.0-rc 
    * Would enable snap sync client by default
    * Full release early next week
    * Includes bug fixes and eth_simulate
        * Potentially some block processing improvement
    * Depending on the node: 2-3% or 10-15%
    * Focus on stability
    * Next version should be more performance oriented


* **Erigon**: 
  * Second alpha of Erigon v3 
    * Introducing OtterSync, which makes it extremely fast to sync minimal, full and archive nodes
        * Most of the time is spent downloading data
        * A minimal node is like a full node without history (EIP-4444)
            * Should be able to validate
            * Should consume less than 100 GB of SSD
  * Started working on Shutter
  * Automated QA testing for tracking the tip on Erigon v2 and Erigon v3
    * Erigon v3 is likely failing Hive tests on Gnosis
    * There’s an ongoing issue with snapshot availability for Chiado
        * There might not be enough Erigon Chiado nodes

* **Geth**:
    * Was able to sync Chiado
        * It can produce blocks but they are incorrect
        * Wanted to sync Erigon for Chiado but that’s quite slow and runs out of memory
        * Needs to be able to debug one specific block
    * How can one attach a debugger when a specific block is being executed?


* **Reth**: 
  * Testing post merge implementation with self generated blocks from Nethermind using engine api and feeding them to reth
 * Currently stuck with wrong state root on block
 * Different state root that might be related to AuRa
    * Is it possible to export state diffs about everything in Erigon? If not, Nethermind is willing to implement some tools to that effect.
        * Erigon has state diffs for transactions and system transactions, but not sure if there’s a tool to consume that data
        * This is really necessary and slowing everything down for Guillaume and Reth on GC as well
        * In Erigon v3 there’s state diffs for virtual transactions at the beginning and end of block

# Chain Infra

* **Gateway**
  * The RPC was offline for a few seconds during the day because of the provider
  * Recently updated one of the nodes

# Innovation

* Shutter
    * Working on the dashboard
    * Finished the data collection part
    * Start a Grafana dashboard and web dashboard
    * Debugging remaining issues with a long-running test
        * 90% of the transactions got included immediately
        * Looking into why the remaining 10% are not being included
            * Potentially latency issues
    * Ongoing discussion about p2p discovery because the current one used by the keypers is a bit difficult to implement in the C# library
    * Nethermind is checking if they can implement a simpler version of Kademlia DHT


# Testing

* Hive
    * Setting up proper debugging
* Ethereum/tests
    * https://github.com/NethermindEth/nethermind/pull/6833
    * This would allow Nethermind to run the Ethereum tests
    * Looking into how to make this work for Gnosis

# Research

* Gas Market
    * No updates














































