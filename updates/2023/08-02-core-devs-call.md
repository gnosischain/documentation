---
title: Core Devs Call - 2023/08/02
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Core devs call](https://github.com/gnosischain/documentation-1/assets/75987728/e1bcaad2-4e45-4fad-8819-8fb0ccd997a4)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=BYR2lA9dF90).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

August 2, 2023

# Client Team Updates

## EL

- **Nethermind**:
  No particular updates
  Looking into the contractAddress issue in receipts
  Has some ideas about improvements for eth_getLogs

- **Erigon**:
  No specific news
  Busy working on dencun
  Helping Marcos with the Hive tests

- **Geth**:
  No updates
  Waiting for input from Erigon
  Traces from Erigon

## CL

- **Nimbus**
  Merged Chiado

- **Lighthouse**
  Accepted the PR for Chiado

# Chain Infra

- **Gateway**
  Post mortem for the slashing issue
  Looking into the checkpoint sync logs
  Launchpad updated?
  Checking with DevOps

# Mainnet

Shapella went through smoothly
Checkpoint sync
Investigation needed
Forgot to check that web3signer was updated
Was discovered less than 24 hours before the fork
Had to put out urgent comms to update this on Dappnode and for users who need web3signer in their infra (i.e. StakeWise)
Participation dropped from 96 to 90% for a few epochs but went up to 95% very quickly right after
Went really well
Erigon nodes weren’t synced for the hard fork (forkmon, ethstats, grafana)

# Hive Tests

From the 20 tests passing on Nethermind, only 14 tests pass for Erigon right now
