---
title: Core Devs Call - 2023/10/18
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![core devs call 18 october](https://github.com/gnosischain/documentation-1/assets/75987728/889648ed-ad9a-4985-88bd-090a2844e743)

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/9Y0ILUDFsd8).

October 18, 2023

# Client Team Updates

## EL

- **Nethermind**:

  - Finished some Gnosis-specific features
    - Configurable EIP-4844 configurations
  - Cancun merged to main branch
  - Kickstarted an initiative to rework the `eth_getLogs` system to optimize it

- **Erigon**:

  - Sync issues (OOM on 32 GB nodes also running CL)
    - Exclusively happens in Docker, GOMAXPROC should be a workaround (4 instead of 24 for example)
  - High disk usage (400 GB with `--prune=hrtc` vs 170 GB on Nethermind for the standard `gnosis` preset)
  - Fairly unreliable (I have to restart it every few days at this point, maybe too many attached validators? I miss quite a few epochs on mainnet too but don’t need to restart at least.)
  - Configurable EIP-4844 configurations are merged
  - Working on Erigon 3

- **Geth**:
  - Tried the static peers and it seems to work better
  - Still not getting a connection
    - The old branch systematically uses eth/66 and that works
    - The new branch gets disconnected when trying to connect to eth/66

# Dencun

- Config
  - Max churn limit of 2
  - Target and max blobs per block
  - Security first: 1/2
    - Thoughts of EL devs?
  - https://github.com/gnosischain/specs/pull/24
  - BLOB_GASPRICE_UPDATE_FRACTION=1112826

# Chain Infra

- **Gateway**
  - Discovered a bug in the load balancer that resulted in 0.5 to 1% of errors at the current load
    - Sudden increase in `eth_getLogs`, which are typically quite slow on the nodes, which were subsequently falling behind
    - The solution was to account for this slowness

# Gnosis

- The public RPC was down during the weekend, but that was because of Gnosis.

# Hive Tests

- Solved the configuration issues for Dencun
- Working on an error when sending blobs

# Devnet

- Has Erigon joined?
  - `thorax/erigon:docker_gno_dencun_devnet_0`
  - `--chain=gno_dencun_0`
  - Issues with the internal CL
  - Not tested yet

# Research

- Automatic sync tests
