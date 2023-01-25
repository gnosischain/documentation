---
title: Gnosis Chain Core Devs Call - January 25, 2023
authors: [alebanzas, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/i8hjL8X.png)


## Call Info

Hello everyone from the weekly Gnosis Core Devs Call. This meeting is repeated on Wednesday every week. Watch on [Gnosis Chain YouTube channel](https://www.youtube.com/watch?v=UUDl-Zyl6pA)
‍
Participants: Erigon, Gateway, Nethermind, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team and the contributors.

### Topics:

* Shanghai upgrades details from Nethermind
* RPC updates from Gateway
* Suggestion from Stefan: Increase base fee to 1GWEI?

Let's take a look at the core devs call updates.

## Erigon

* Chiado: Might be finished this month
* Mainnet: Erigon got stuck while syncing mainnet twice, reboot helped
* Also affects other networks
* Not seen in 2.36.1 yet
* Work going on for withdrawals (for Ethereum mainnet)
* We should review the specs for Gnosis when everyone is back, because there’s some new context

## Gateway

* Launched archival RPC (Gnosis mainnet)
* Will launch a website with the new public RPC
* Launching checkpoint sync for Chiado (probably today)
* Fixed an issue with the rate limiter that was too eager
* Looking into looking a bridge validator on Chiado, and then on mainnet
* Waiting for Giacomo to accept traffic on the RPC

## Nethermind

* Implementation for withdrawals on Gnosis (and mainnet)
* Only missing part is the smart contract used for withdrawals
* Stefan: Ihor will write the contracts (WIP, ETA: 1 month)

### Stefan: Increase base fee to 1GWEI? ‍
* Allows us to make constant spamming very costly. Currently it is too cheap.
* Current base fee: 7 wei -> extremely cheap to spam the network for a long time
* Increasing the base fee to 1 gwei would make it expensive to spam the network even for 10 minutes
* Would require a simple hard fork, which could be included in another hard fork
‍
#### Jorge (Nethermind)‍
* No strong opinion
* The computation limit is bound by the gas limit anyways
* Sustained loads would increase the gas price exponentially as per EIP-1559
* On Chiado, a spam of 30 - 60 minutes increased the base fee to hundreds of gwei
* The main idea is to prevent nefarious actors to put relevant transactions on hold for some time, which would degrade user experience

##Gnosis DevOps

* Chiado RPC routing implemented (testing with Gateway), then mainnet
* 2 Chiado long-term bootnodes
* Update configs


