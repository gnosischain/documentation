---
title: Core Devs Call - 12/07/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Core Devs Call](https://github.com/gnosischain/documentation-1/assets/75987728/07e85a2d-60d9-4d06-b94f-5213d12b2964)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/u2OfBdRkSoo).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

July 12, 2023

# Client Team Updates

## EL

- **Nethermind**: yParity mismatch on ethers@v6. Going to look into this. New config variables for Teku (default ones) fixed the issue with newer version. No updates

- **Erigon**: Erigon v3 is a fundamental rearchitecture for the data structures.Old state is read-only and can be stored on IPFS / torrent
  Caplin: New embedded CL, UX improvement. Can save on the disk footprint because you don’t need to duplicate blocks between EL and CL
  Might also become a validator client.

- **Geth**: Burner contract was missing. Rewards are still being figured out because the contract doesn’t return anything despite a reward having to be paid. Wondering if there’s an archive node for Guillaume. Ping Anna from Gateway on Telegram

## CL

- **Lighthouse** No updates.

# Mainnet

Preliminary audit done, waiting for formal approval.
Dappnode packages done.
We need new ones for Erigon and Nimbus.
Sedge: right versions?
Avado, Stereum?

# Hive Tests

Erigon still in progress
Added transfer event checks
Separated execution layer checks from protocol layer checks
The dashboard works and is ready to be deployed
The question is how this is going to fit into the workflow, where it’s going to be hosted and who’s going to manage it
Will be talked about with Marcos
Looking into adding more corner cases before the shapella hard fork

# Chiado

Contract not upgraded yet, will be done today

# Chain Infra

Gateway: Experiences some issues on Nethermind nodes when there’s too many concurrent requests. Still investigating this. Will ping on Telegram

# Research

Verkle trees: On mainnet a billion nodes will have to be updated, which will be done in batches. On Gnosis Chain, as the blocks are faster, there’s less work to calculate those batches. Gnosis Chain seems to have way less accounts: about 1 million according to Gnosisscan, does that seem correct?
