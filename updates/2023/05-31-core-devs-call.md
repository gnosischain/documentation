---
title: Core Devs Call - 2023/05/31
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![May 31](https://github.com/gnosischain/documentation-1/assets/75987728/999e5d00-cb8a-486d-b7b8-96b55ac4888c)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/PlcrLPuFK90).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

May 31, 2023

# Client Team Updates

## EL

- **Nethermind**: Nothing major. Released the fix for Chiado in a stable version (1.18.2)
- **Erigon**: No updates.
- **Geth**: Still working on calling the reward contract. Found two bugs and am currently working on a third one. Guillaume will post the results in a little bit.

## CL

- **Prysm**: No updates.
- **Nimbus**: No updates.

# Chain Infra

**Gateway** : Fixed Chiado RPC and other nodes. Deploying the network for Gnosis Pay. Already did a testnet. Working on a block explorer. After that deploying to mainnet. What are the plans for bridges during the hard fork?

# Mainnet Upgrade

Moved to next week

Date?
Conditions: Slot mod 8192
Weekday Time between 14 and 20 UTC

Slots

- Slot 9658368, ts 1687285180, UTC: 20/06/2023, 18:19:40
- Slot 9674752, ts 1687367100, UTC: 21/06/2023, 17:05:00
- Slot 9691136, ts 1687449020, UTC: 22/06/2023, 15:50:20
- Slot 9707520, ts 1687530940, UTC: 23/06/2023, 14:35:40
- Slot 9814016, ts 1688063420, UTC: 29/06/2023, 18:30:20
- Slot 9830400, ts 1688145340, UTC: 30/06/2023, 17:15:40
- Slot 9879552, ts 1688391100, UTC: 03/07/2023, 13:31:40
- Slot 9895936, ts 1688473020, UTC: 04/07/2023, 12:17:00
- Slot 10002432, ts 1689005500, UTC: 10/07/2023, 16:11:40
- Slot 10018816, ts 1689087420, UTC: 11/07/2023, 14:57:00
- Slot 10035200, ts 1689169340, UTC: 12/07/2023, 13:42:20
- Slot 10051584, ts 1689251260, UTC: 13/07/2023, 12:27:40
- Slot 10125312, ts 1689619900, UTC: 17/07/2023, 18:51:40
- Slot 10141696, ts 1689701820, UTC: 18/07/2023, 17:37:00
- Slot 10158080, ts 1689783740, UTC: 19/07/2023, 16:22:20
- Slot 10174464, ts 1689865660, UTC: 20/07/2023, 15:07:40
- Slot 10190848, ts 1689947580, UTC: 21/07/2023, 13:53:00
- Slot 10297344, ts 1690480060, UTC: 27/07/2023, 17:47:40
- Slot 10313728, ts 1690561980, UTC: 28/07/2023, 16:33:00
- Slot 10362880, ts 1690807740, UTC: 31/07/2023, 12:49:00

# Research

GNO Transfer events in withdrawals. Needs to be very clearly documented. Has the potential to break things. Explorers and Indexers (how are they extracting withdrawal information right now?)

- The Graph
- Dune

**Brainstorming**
Withdrawals are system transactions
Potential solutions: It’s still technically possible to emit receipts, but they wouldn’t be linked to a transaction. It’s fine, but it could break some things. When syncing, we expect the number of receipts to be equal to the number of transactions, but in this case there would be transactions + 1 receipts. Could break JSON-RPC because of existing assumptions. Probably not the best way, but Lukasz doesn’t see any other way.

Inside the node, when someone calls `eth_getLogs` we could add some artificial logs to GNO based on withdrawals. Would be very hacky. Only on the JSON-RPC level. Might be complicated because of some specific optimizations. Might not be related only to `eth_getLogs`, because with those logs you should be sure that the withdrawal was applied, which we can’t necessarily do with Gnosis withdrawals. Could work fine without failing withdrawals. We could add a custom transaction that has a receipt for all the GNO transfer events. This would make blocks a bit more specific. Could make it more difficult for block builders. Some more specific code for Gnosis that is different from mainnet.

# Testnet

Timestamp
The shapella hard fork caused the network to no longer accept contract deployments because of a bug in Nethermind related to EIP-3860 and EIP-170
We fixed the network on May 26, 2023 by updating all Nethermind nodes
It didn’t require a hard fork, as it’s the majority client on Chiado and technically didn’t do anything “wrong”, i.e. didn’t produce blocks that are invalid according to our spec

# Hive

Tests for withdrawals
Testing that the balance is applied correctly to the address. Sending transactions and checking that they are performing ok. Checking the storage after withdrawals are applied.

Testing sync
Created blocks and transactions and connected other clients to test if they can sync.

Tested hard forks
Next step is to add Erigon to the tests
