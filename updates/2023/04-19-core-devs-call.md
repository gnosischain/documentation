---
title: Core Devs Call - 2023/04/19
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/yWkAFed.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

[Watch full record on YouTube](https://youtu.be/LInX7dJJ6Ak)

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

April 19, 2023

# Client Team Updates

## EL

- **Nethermind**: No updates.
- **Erigon**: No updates.
- **Geth**: Was able to import the state (simulate snap sync)Is now starting the node in full sync, but it’s not connecting / downloading blocks. Once this is done, Guillaume should have a working prototype

## CL

- **Prysm**: No updates.
- **Nimbus**: No updates.

# Chain Infra

**Gateway**

No peers found on Devnet (probably just the different genesis).

# Devnet

Wrong configuration was shared. There’s now a mismatch for outside nodes. There’s no Erigon node running at this point. 80% attestation rate (all nodes ran by Nethermind) Shapella went through
**Lion: does Nethermind have metrics for the network?**
I.e. withdrawal amounts per block etc. Apparently not.
Might potentially be added. Most credentials are still 0x00. Meaning that no withdrawals are currently happening.

# Research

**Churn coefficient**
https://hackmd.io/@dapplion/gnosis-churn-limit
Defines the number of validators that can join or exit the network in a specific time frame. On Gnosis that number is a bit high, meaning that it would theoretically be possible to get a big stake in the network very quickly. This would require a consensus client code change. Technically a change on the deposit contract could also limit inflow. But that break a lot of assumptions. It doesn’t change anything in the case of outflows.Attacking the light client bridge is exclusively an inflow problem

**Shutterized Beacon Chain: is there progress?**
We’ve got more precise specs on a PR
https://github.com/gnosischain/specs/pull/4
Lion: how specific do you need the spec to be? It seems like EL clients have more lax requirements for specs, is that true? On CL everything is specced quite precisely.

# Tests

- **Hive**

Will start writing Hive tests by the end of this week
Improving the genesis loading for Erigon and Nethermind, but hasn’t been tested on Erigon yet.
**Lion: can we agree on which conditions tests would be considered good enough to move to testnet / mainnet?**
Ruben thinks it would be enough if we can just run the contract specific parts (balances etc)
