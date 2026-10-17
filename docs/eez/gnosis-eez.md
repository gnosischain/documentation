---
sidebar_position: 2
title: "Gnosis Chain now and Gnosis EEZ"
sidebar_label: Now vs Gnosis EEZ
description: Gnosis EEZ is Gnosis Chain re-based onto Ethereum. State, contracts and addresses carry over in a hard fork. The validator set retires and blocks are proven and settled on Ethereum, starting with an interim proving setup before real-time ZK proofs.
keywords: [gnosis eez, hard fork, validator set, xdai, gno, zk proofs, zisk, ethereum settlement, no redeploy]
---

# Gnosis Chain now and Gnosis EEZ

The [Ethereum Economic Zone](/eez) (EEZ) is a neutral rollup framework with no token of its own. Gnosis EEZ is its first instance, operated by Gnosis.

Gnosis EEZ is not a new chain. It is Gnosis Chain, re-based onto Ethereum through a hard fork of the existing state. If you have a contract on Gnosis Chain today, it will be on Gnosis EEZ at the same address with the same storage the moment the fork activates. You do not redeploy, migrate liquidity or ask users to switch networks.

The transition is planned for Q1 2027. Gnosis Chain continues to run as a Layer 1 until then, and the rest of this documentation stays accurate for building on it.

## What stays the same

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Contracts and state | Deployed and verified on Gnosisscan | Carried over unchanged, same addresses, same storage |
| Gas token | xDai | xDai, with no change at launch |
| GNO | Secures consensus and governs through GnosisDAO | Continues as the governance token. Under the transition approved by GnosisDAO, staked GNO is unlocked when the validator set sunsets, and former validators may operate proof systems. |
| EVM | Standard EVM, Foundry, Hardhat, viem, ethers | Standard EVM. No new opcodes, no new SDK, no Solidity changes. |
| Tooling | Gnosisscan, RPC providers, indexers | The same tooling, pointed at the same chain |
| Components | Monerium EURe, Safe, CoW Protocol, Gnosis Pay, Spark, Aave, Balancer, Curve, Backed, Circles | All carried over with their contracts and liquidity |

## What changes

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Block production | A proof-of-stake validator set of over 200,000 validators | A composer operated by Gnosis, using sequencing and prover technology from Zisk |
| Consensus | Beacon chain, GBC | The validator set retires. Node operators drop their consensus-layer client. |
| Security | Validator economic security | Proofs verified on Ethereum. An interim proving setup, likely TEE-based, at genesis, moving to real-time ZK proofs across more than one proof system. |
| Settlement | Gnosis Chain is its own settlement layer | Blocks settle to Ethereum. Data is published to Ethereum blobs. |
| Block time | 5 seconds | 2 seconds, with a composing block every 12-second Ethereum slot |
| Finality | Around 2.5 minutes to hard finality | Soft confirmation in seconds. Hard finality when the proof lands on Ethereum. |
| Reaching Ethereum | Native bridge, or a third-party bridge | A call from Gnosis EEZ into Ethereum in the same transaction, with no bridge or wrapped asset |
| Fees | One fee, paid in xDai | Priced by route (instance only, instance to Ethereum, Ethereum to instance), still paid in xDai |

## For validators and node operators

The Gnosis Chain validator set is retired when the fork activates. GnosisDAO has approved the transition, including the sunset, the unlocking of staked GNO and the option for former validators to operate proof systems. Until the fork, validators keep running, keep earning, and nothing about deposits or withdrawals changes.

Node operators who run RPC or archive nodes keep running an execution client. The consensus-layer client is no longer needed after the fork.

The [validator and node operator runbook](/validators/eez-transition) has a checklist for each role.

## What is not in the first release

Here are the limits of the first release.

- **One direction of synchronous calls.** At launch, a contract on Gnosis EEZ can call a contract on Ethereum and use the result in the same transaction. The reverse direction, Ethereum calling into Gnosis EEZ, and full nested calls follow in 2027.
- **Interim proving at genesis.** The first release uses an interim proving setup, likely TEE-based, and moves to real-time ZK proving as the Zisk prover reaches its latency target.
- **Audits.** The core contracts are an early-stage implementation and have not been audited. Audit results are published before mainnet activation.
- **Instance-to-instance composability.** Calls between EEZ instances come after bidirectional calls with Ethereum.

Progress against each of these is tracked on the [timeline](/eez/timeline).

## What this means if you build on Gnosis Chain

Deploy now and your application is on Gnosis EEZ at launch without a second deployment. The teams live before the fork are the first to run on blocks that are proven and settled on Ethereum, with mainnet assets, liquidity and prices in reach from the same transaction. [Become a launch partner](/launch-partner) sets out what that includes.
