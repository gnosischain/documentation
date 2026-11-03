---
title: Core Devs Call - 01/08/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/q9DpEEsAl84?si=6tBFkhc6fNzBTVN_)

Jan 08, 2025

# Infrastructure
## Gateway
* About to finish CLs for Ethereum mainnet
* Solved the issue with the 500 requests / batch
    * Should not happen again

# Innovation
## Shutter
* Still some issues with the p2p communication between validators and keypers
    * Not optimally connected
    * Looked into by Shutter and Nethermind
 
# Testing
## Hive
 * No major update

## Ethereum/tests
* Generating some Shanghai tests with Deb

# Client updates
## EL
### Nethermind
* Got 2 reports about missing receipts on archive nodes
    * Potentially found the issue
    * A recovery method could be possible
    * Quite a big edge case

### Erigon
* Shutter
    * Working on libp2p to get the decryption keys

### Geth
* Worked on updating the documentation
* Reported a stack trace in production
    * Seems to happen from time to time during block building
    * In the AuRa code for some reason
* What’s the default gas limit on Geth right now?
    * 30m, should maybe be changed down to 17m
        * For both mainnet and Chiado
* Will likely go to 36m in the next release
Releases should work and build Docker image
    * Will test with the new release, or can be tried with an rc


### Reth
* Fixed 2 issues
    * Related to the native bridge contract
* Synced around 2.5m blocks and reached Shanghai
    * Will manually go through Shanghai because some issue happened in Geth during that fork, so might as well play it safe
        * The issue on Geth was linked to the smart contract bytecode size, around 5 hours after Shanghai activation
        * Linked to EIP-170

## CL

## Pectra
* Waiting for EF to release Devnet 5
* Dmytro is testing Pectra for Gnosis Chain in the meantime
    * The deposit scripts and UI don’t work with the devnet
    * Tools are not ready to work with consolidation
        * You can’t deposit more than 1 GNO

## Research
* EIP-7843
    * The SLOT precompile could be used by Shutter to cancel a transaction if it’s not executed in the correct slot
    * This can already be done by using the block timestamp, but that would break if the slot length changes
* EIP-7793
    * The TXINDEX precompile can be used to get the index of the currently running transaction in the block
    * Could cancel a transaction if it’s not executed at the top of the block
        * Or introduce slashing potentially
* Guillaume says that EL devs generally don’t like this type of EIP because this can’t be patched out once people start deploying contracts with them. Introspection makes a lot of things more complicated in the EVM.
