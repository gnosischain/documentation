---
title: Run a Node
---

# Run a Node

<img src="/img/node/nodes-map-nov-2022.png" width="100%" />

Image: Gnosis nodes around the world, circa Nov 2022 (source: [Nodewatch](https://nodewatch.gnosischain.com/))

## A Community-run Chain

- Gnosis is a community-run chain that is created by nodes run by thousands of ordinary people around the globe. As a distributed network, a diverse set of nodes ensure that the network is resilient to technical failures. A diversity of nodes run across many countries ensures the network can remain [credibly neutral infrastructure](https://nakamoto.com/credible-neutrality/). 
- Running a node is perhaps the most profound way to contribute to a blockchain network. By running a node, you -are- the network. Together with other nodes run by others around the planet, you form part of a global network that is anti-fragile and resilient.
- Gnosis has a strong culture of homestakers running nodes from their homes, that are not reliant on cloud providers or datacenters. 
- Gnosis has a stretch goal to have a node in every country by 2025. 

### Gnosis vs. Ethereum

- Gnosis runs the same client software and tooling stack as Ethereum
- In some cases, Gnosis clients are just Ethereum clients run with a `--network` flag! (e.g. [Nethermind](https://downloads.nethermind.io/), [Lighthouse](https://lighthouse.sigmaprime.io/), etc)
- Gnosis aims to to be a learning ground for a new generation of node runners, requiring only 1 GNO (~$100 at Nov 2022) instead of the 32 ETH (~$38,400 at Nov 2022) minimum required for Ethereum
- Gnosis runs the same client software as Ethereum, with minor parameter tweaks. As such, Gnosis is a Proof-of-Stake network that uses Ethereum's Beacon Chain consensus. 

### Proof-of-Stake

:::caution

Validator deposits are currently one-way, non-reversible transactions. Similar to Ethereum, no concrete date has been set for withdrawals of GNO staked in validators. 

:::

- Gnosis minimum stake is [1 GNO](../about/tokens/gno.md) to run a validator.
- 1 GNO is turned into [32 mGNO](../about/tokens/gno.md#mgno-token), to mirror the [32 ETH](https://ethereum.org/en/staking/) for Ethereum staking
- Nodes receive [rewards](./overview/rewards-penalties.md) for being an active validator, and suffer [penalties](./overview/rewards-penalties.md) for malicious or negligent behavor. 

### Execution vs Consensus

- Gnosis has the same proof-of-stake consensus as Ethereum, and requires validators to run an [Execution Layer client](../node/advanced/execution-layer/README.md) as well as a [Consensus Layer client](../node/advanced/consensus-layer/README.md). 
- Gnosis and Ethereum utilize two networks that run side-by-side, the Execution Layer and the Consensus Layer, each of which offers users a choice of multiple clients
- For the **Consensus Layer**, Gnosis currently supports [Lighthouse](https://github.com/sigp/lighthouse), [Prysm](https://github.com/prysmaticlabs/prysm), [Nimbus](https://github.com/status-im/nimbus-eth2), or [Teku](https://github.com/ConsenSys/teku).
- For the **Execution Layer**, Gnosis currently supports [Nethermind](https://nethermind.io/nethermind-client/). (In progress: [Geth](https://geth.ethereum.org/) and [Erigon](https://github.com/ledgerwatch/erigon))
- You can refer to [this post](https://hackmd.io/@n0ble/ethereum_consensus_upgrade_mainnet_perspective) on the different responsibilities of the Execution Layer and Consensus Layer, and how they interact with each other. 

## How to run a Node

### Guided Setups

### Advanced Setups

## Technical Requirements

### Types of Nodes
- [ ] Node types
- [ ] Full Nodes
- [ ] Validators
- [ ] Architectural diagram of a node

### Hardware

Gnosis is designed to run on average consumer-grade computers. It's recommended to run a node on dedicated hardware to eliminate the performance impact on their machine and minimize node downtime.

Requirements vary client to client, for more detail see the associated system requirements below.

#### Execution Layer

- [Nethermind: System Requirements](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/system-requirements) 
- [Besu: System Requirements](https://besu.hyperledger.org/en/stable/public-networks/get-started/system-requirements/) 
- [Erigon: System Requirements](https://github.com/ledgerwatch/erigon#system-requirements)
- [Geth: Hardware](https://geth.ethereum.org/docs/interface/hardware) 

#### Consensus Layer

- [Lighthouse: System Requirements](https://lighthouse-book.sigmaprime.io/system-requirements.html) 
- [Lodestar: Specifications](https://chainsafe.github.io/lodestar/#specifications) 
- [Nimbus: Hardware](https://nimbus.guide/hardware.html) 
- Teku
- [Prysm: Prerequisites](https://docs.prylabs.network/docs/install/install-with-script/#step-1-review-prerequisites-and-best-practices)

**Storage**

- Disk I/O is very critical as the Execution client relies heavily on IOPS, or "operations per second"
- NVMe SSDs are recommended, followed by SATA or external USB3.0 SSDs. 
- HDD drives will not work as they cannot keep up

### Network Connectivity

A reliable internet connection is key: bandwidth should not be throttled or capped. Upload bandwidth should be a minimum of 700 MB/hour with increases likely. Brief periods offline may result in small inactivity penalties, but this will typically be recouped quickly as long as the outage is short.

Note that synching the execution layer of Gnosis may take up to 1-3 days, depending on your setup.

For better understanding of the network throughput requirements, a benchmark was conducted on the Lighthouse v2.2.1 client running a GBC on 04.05.22.

The client was configured to maintain 100 simultaneous peer connections. Inbound and outbound traffic consumption was measured while altering the number of active validators connected to the beacon node.

Validators are advised to consider those numbers when planning their infrastructure and budget. With growth of the overall validator set, these requirements will increase over time as well. Make sure to allocate enough spare resources to account for future network growth.

| Number of validators | Inbound traffic | Outbound traffic | Approximate monthly traffic |
| -------------------- | --------------- | ---------------- | --------------------------- |
| 10                   | 1.0 MB/s        | 1.8 MB/s         | 7.2 TB                      |
| 32                   | 2.4 MB/s        | 3.15 MB/s        | 14.2 TB                     |
| 64                   | 4.5 MB/s        | 3.8 MB/s         | 21.2 TB                     |
| 128                  | 4.6 MB/s        | 3.8 MB/s         | 21.5 TB                     |
| >256                 | 4.6 MB/s        | 3.9 MB/s         | 21.7 TB                     |
