---
title: Core Devs Call - 01/015/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/AyKGL-z2dLU)

Jan 15, 2025

# Infrastructure
## Gateway
* Added beacon API RPC endpoints for Ethereum based on Lighthouse
    * More information on Telegram
    * Next step: add Nimbus

# Innovation
## Shutter
* Call with Marc to debug libp2p issues
* Working on devtooling to make testing easier
* Not present next week

 
# Testing
## Hive
 * No major update

## Ethereum/tests
* Working on bug fixes for Pectra

# Client updates
## EL
### Nethermind
* Got 2 reports about missing receipts on archive nodes
    * Potentially found the issue
    * A recovery method could be possible
    * Quite a big edge case

### Erigon
* Shutter
    * Basic p2p connection working for Shutter
    * Will join the Shutter libp2p call
    * Working on reading data from the Shutter smart contract needed for sequencing and decrypting
    * Potentially something could work mid-February
* Pectra Devnet 5 changes were almost all merged into the main branch


### Geth
* Waiting for the person who had a stack trace to try to reproduce it
* New release process hasn’t been tested yet because there hasn’t been a new upstream release
* There’s a potential issue with the bloom filter code
    * Caused a missing block, but should be an edge case
    * Could also happen in mainline

### Reth
* Crossed Shanghai and everything works fine!
* Can now connect to the p2p network
    * Currently fetching / executing ~2.8m blocks in debug mode directly from peers instead of manually
    * Outgoing connections work fine but incoming are getting blocked
* Syncing until ~600 blocks before Cancun now, will then sync manually during the hard fork
* Not tested with CL yet


## CL

## Pectra
* Are we increasing the blob count on Gnosis Chain?
    * No, keeping at 1/2
* Are we adapting pricing as on Ethereum?
    * Yes, do the same as Ethereum

























































