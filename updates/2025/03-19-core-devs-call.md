---
title: Core Devs Call - 03/19/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/va89vpPhTW8)

March 19, 2025

# Infrastructure
## Gateway

* Allocated more resources to the CL endpoints


# Innovation
## Shutter

* Working on the libp2p updates
* Following up on validator registration issues on Chiado


# Testing
## Hive

* Working on EEST integration for Hive

* Had a meeting with EF Testing Team and created a plan for EEST implementation on Gnosis

* Hive as test runner, EEST is implementation of tests


# Client updates
## EL
### Nethermind

* Monitoring some small issues for Pectra
  * Small issue on old CPUs, fixed in new release
  * Small issue in trace transactions, related to Hoodi

* New release today for Hoodi support

* Would be good for Chiado validators to upgrade to the latest version, which will also be ran on mainnet



### Erigon
* Release for Hoodi should happen on Monday

* Will implement new Hive and RPC tests

* Testing the Shutter integration on Shutter
  * There seems to be an issue with registering validators, but the Shutter team is looking into it
  * The Erion validators aren’t getting any decryption keys
  * There might be a version mismatch for registration messages


### Geth
* Not present

### Reth

* Upgrading the upstream dependency
  * The diff is huge so it will take some time



## CL

## Pectra
* What would the risks be to still do Pectra on April 1st
  * Some teams might not have had enough time to do all e2e tests yet, for example Lido

* Easter Holidays are April 18th - April 21st

* We’ll reconvene on March 28 to talk about setting a date
  * To potentially set a date for April 14-15
  * And cut releases on April 1



