---
title: Core Devs Call - 2023/08/16
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

![Event](https://github.com/gnosischain/documentation-1/assets/75987728/7ad9b758-c0ec-40a6-9074-9f23da5bcb42)

Gnosis Core Devs Call Notes

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/7aYifygdqxo).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

August 16, 2023

# Client Team Updates

## EL

- **Nethermind**:
  Nethermind
  Started developing the shutter implementation

- **Erigon**:
  Finishing bits and pieces of dencun

- **Geth**:
  Pretty much at a dead end at this point
  Still getting the wrong root and started making experiments
  Confirmed that the initial state root is correct
  Confirmed that updates to the state are correct
  Alternatives explored
  Test on Chiado because the state is way smaller
  Getting two consecutive states from Chiado, which archive nodes can’t easily do
  Call with Andrew tomorrow

# Chain Infra

- **Gateway**
  Missing transactions on Omni Bridge and AMB
  Seems related to a container that is constantly restarting
  Working on this today

# Mainnet

Automatic withdrawals
Not much progress

# Hive Tests

Progress with fixing them for different Nethermind versions
1.19.0 to 1.19.3 seem to work, next ones don’t
The first post-shapella block can’t sync
Failing withdrawal test
Merging latest changes from hive upstream

# Research

Shutterized Beacon Chain
Potential competitor: https://writings.flashbots.net/the-future-of-mev-is-suave/
