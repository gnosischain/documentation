---
title: Core Devs Call - 2023/03/08
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/VYvhOTj.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday. [Watch](https://youtu.be/1dy8ZhAxqcE) on Gnosis Chain YouTube channel. ‍

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

In this meeting, after a quick update was received from Chain Infra and Client teams, devnet planning was discussed in the Withdrawals process. Test processes continue. In addition, new positions were evaluated for needs.

Mar 8, 2023

# Client Team Updates

## EL

- Nethermind: Managed to get the contract deployed on devnet. Will figure things out with Lion async
- Erigon: No update
- Geth: No update

## CL

- Prysm: No update

# Chain Infra

- Gateway : Close to final setup for a bridge validator for Chiado. Hopefully this week. If it works, they’ll go to mainnet with the same config

# Withdrawals contract

- Adam reached out, the audit is ready
- Lion will follow up with that

# Devnet

- Contract deployment issues
- Ownership: See hiring
- Nethermind is maintaining the current DevNet short term
  Carlos, Lion and maybe someone from Gateway will maintain them. The current devnet is mostly internal for Nethermind
  It has a very low amount of validators. For a public one we should create a new devnet. Maybe we can still open it at least to Erigon so they can start testing
  Infra (explorers etc) are already mostly set up
  Lion is suggesting to use Nimbus’ explorer (which is way more minimal) in case beaconcha.in can’t keep up
  The withdrawal address contract isn’t known in advance, which is a bit problematic. Ideally we should have `create2` deployments so that the address is known in advance
  The address should be identical across deployments to make things easier
- Needs to be deployed with the same EOA. Ruben will try to get this to work
- New larger devnet: We’ll give one week of notice to allow everyone to spin up infra

# Tests

- Hive
  Max brought in by Anna. He’s working with the Gateway team and moved to Erigon. Worked on the Hive tests to figure out the differences between Ethereum and Gnosis
  Crafted a new genesis for Gnosis. Went down a rabbit hole with dependencies and adapting the tests to work with Gnosis. Will ask questions regarding the network
  Commitment unclear

# People

Philippe officially taking over as TPM “Core Devs”!

- Hiring Roles
  QA: maintain test suite (Hive tests, etc)
  DevOps: DevNets, Shadowforks, Testnets
  Where headcount will sit: Gnosis, or with a core team
  Need help with JDs + recruiting
