---
title: Core Devs Call - 2024/08/28
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes Aug 28, 2024

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=mc834-V4rQY)

Aug 28, 2024

# Client Team Updates

## EL

- **Nethermind**:

  - Working on the next release

    - Improvement on performance
    - Probably mid next month

- **Erigon**:

  - Nothing new

- **Geth**:

  - Started rebasing from 1.13 to 1.14 (which actually changed many things in the miner)

    - 1.14 can no longer sync pre-merge chains
    - So one has to sync with 1.13 and then update to 1.14

- **Reth**:

  - No update

# Chain Infra

- **Gateway**

  - No major updates
  - Everything is working well except for one quick restart

# Innovation

- Shutter

  - Still working on the last 10% in missed transactions

    - New keyper version with floodsub discovery mechanism

  - Also working on the Shutter explorer

# Testing

- Hive

  - Good progress
  - Fixed all Nethermind tests
  - 2 new tests suits (13 new tests) for Nethermind
  - Fixing in progress for Erigon
  - New PR with new engine suite

- Ethereum/tests

  - Started to integrate the Nethermind implementation
  - Might require a new repo
