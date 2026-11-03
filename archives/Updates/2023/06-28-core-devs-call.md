---
title: Core Devs Call - 2023/06/28
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes
![Event june 28](https://github.com/gnosischain/documentation-1/assets/75987728/5d3977d9-81ba-4a71-90b4-d2eaafab838b)
Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/zH7kl165USo).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

June 28, 2023

# Client Team Updates

## EL

- **Nethermind**: No updates Running devnets internally, monitoring, etc.So far everything looks good.Staying focused on monitoring and testing

- **Erigon**: No updates
- **Geth**: The reward contract was reverting. It was actually upgraded, so the right one is now being called. The node is now syncing, so we’ll have more information soon

## CL

- **Prysm**: No updates.
- **Lighthouse** No updates.

# Mainnet

**Clients**

Consensus Layer

- Nimbus is ready
- Teku and Lighthouse have PRs merged
- Lodestar will do a quick patch release

Execution Layer

- Nethermind: Released yesterday: 1.19.3
- Erigon: Not released yet. Will be done soonish

**“Easy setups”**

- Dappnode
- Avado
- Deposit UI

PR open to remove mGNO
We also need to add a claim button
https://mgno.validategnosis.com/

- Explorers: They should not increase any balance on withdrawals

- Deposit contract
  Audit: Ongoing, Upgrade it, Fund it

Pause bridges during the hard fork
3 different proposals
Pause and resume bridge
Upgrade deposit contract

# Chain Infra

Gateway: No updates

# Chiado

Upgraded the deposit contract to be identical to the one we’re deploying on mainnet. Store layout fixed. Add debug logs to system level transactions to see how much gas they consume

# Hive

Warm coinbase. Egor is working on this
Looks like the contract code is missing in the genesis.
We will see today if they can fix it together.

- Updated to the new withdrawal contract
- Focused on adding Erigon to the pipeline
