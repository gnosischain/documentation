---
title: Core Devs Call - 2023/05/10
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

![Core Devs May 10](https://github.com/gnosischain/documentation-1/assets/75987728/13514dd0-c1a3-427a-8023-db4b124f91ce)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=RXI-ObxMnfs).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

May 10, 2023

# Client Team Updates

## EL

- **Nethermind**: Not much. Still working on Shutter
- **Erigon**: Fixed an issue where trace_block was not returning correct rewards because of the block rewards contract. Was merged yesterday.
- **Geth**: Small update: Struggling with the rewards computation code. We'll be in touch with Andrew.

## CL

- **Prysm**: No updates.
- **Nimbus**: No updates.

# Chain Infra

**Gateway** : All set up for EDCON (May 19-23) Shared the API key yesterday, hasn’t received any updates from Burner Wallet. Would like to get a version of the wallet in order not to have any updates. Gateway is fine with increasing rps and nodes.
Need information from Gnosis. Deposit UI needs to be updated for the hard fork.

# Devnet

Gnosis ran manual tests, everything seems to be ok. No updates from Nethermind.

# Testnet

No objections from Nethermind. Should be doable on Erigon’s side as well

- Suggested slots
  Conditions. Slot mod 8192 = 0 (aligns with historical beacon vector)
  Is weekday?
  Is between 14:00 and 20:00 CET?
  Within the next 2-4 weeks
  Matches

* Slot 3874816: 22/05/2023, 16:41:20
* Slot 3891200: 23/05/2023, 15:26:40
* Slot 3907584: 24/05/2023, 14:12:00
* Slot 3997696: 29/05/2023, 19:21:20
* Slot 4014080: 30/05/2023, 18:06:40
* Slot 4030464: 31/05/2023, 16:52:00
* Slot 4046848: 01/06/2023, 15:37:20
* Slot 4063232: 02/06/2023, 14:22:40
* Slot 4153344: 07/06/2023, 19:32:00

Can we try for May 24, 2023? Consensus chain variables. We’ll keep the same ones as Ethereum mainnet. How many withdrawal blocks should we accept?. On Ethereum it’s 16. Worst case it’s around 1.3 million gas per block. This would iterate over all partial withdrawals in ~8 hours, which is very fast. We could do 8 withdrawals per block. In any case we’ll add 550k gas per block. We have to define a list of KPI we want to reach on Chiado to consider it a success.

# Research

**Shutterized Beacon Chain** No updates.

**Withdrawals**: Right now it’s fairly complicated to track information regarding withdrawals. We might need to change the signature of the withdrawal function. Should not be too complicated for Nethermind and Erigon. The contract would also require an update to track these changes

# Tests

**Hive**:Added the integration with the withdrawal contract. Adding the way to test the balance of the contract and the amount on the accounts that have done withdrawals. Should be done by end of this week
No ETA for the rest yet.
