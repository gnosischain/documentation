---
sidebar_position: 2
title: "Gnosis EEZ: the first instance"
sidebar_label: Gnosis EEZ
description: Gnosis EEZ is Gnosis Chain re-based onto Ethereum. State, contracts and addresses carry over in a hard fork. The validator set retires and blocks are ZK-proven and settled on Ethereum.
keywords: [gnosis eez, hard fork, validator set, xdai, gno, zk proofs, zisk, ethereum settlement, no redeploy]
---

# Gnosis EEZ: the first instance

Gnosis EEZ is not a new chain. It is Gnosis Chain, re-based onto Ethereum through a hard fork of the existing state. If you have a contract on Gnosis Chain today, it will be on Gnosis EEZ at the same address with the same storage the moment the fork activates. You do not redeploy, migrate liquidity or ask users to switch networks.

The transition is planned for Q1 2027. Gnosis Chain continues to run as a Layer 1 until then, and the rest of this documentation stays accurate for building on it.

## What stays the same

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Contracts and state | Deployed and verified on Blockscout | Carried over unchanged, same addresses, same storage |
| Gas token | xDai | xDai, with no change at launch |
| GNO | Secures consensus and governs through GnosisDAO | Continues as the instance's governance and economic token. Its role in block production is set through a GIP. |
| EVM | Standard EVM, Foundry, Hardhat, viem, ethers | Standard EVM. No new opcodes, no new SDK, no Solidity changes. |
| Tooling | Blockscout, RPC providers, indexers | The same tooling, pointed at the same chain |
| Components | Monerium EURe, Safe, CoW Protocol, Gnosis Pay, Spark, Aave, Balancer, Curve, Backed, Circles | All carried over with their contracts and liquidity |

## What changes

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Block production | A proof-of-stake validator set of over 200,000 validators | A composer operated by Gnosis, using sequencing and prover technology from Zisk |
| Consensus | Beacon chain, GBC | The validator set retires. Node operators drop their consensus-layer client. |
| Security | Validator economic security | ZK proofs verified on Ethereum, with a multi-prover threshold across more than one proof system |
| Settlement | Gnosis Chain is its own settlement layer | Blocks settle to Ethereum. Data is published to Ethereum blobs. |
| Block time | 5 seconds | Several blocks per 12-second Ethereum slot. The exact figure will be fixed in the published specification. |
| Finality | Around 2.5 minutes to hard finality | Soft confirmation in seconds. Hard finality when the proof lands on Ethereum. |
| Reaching Ethereum | Native bridge, or a third-party bridge | A call from Ethereum into Gnosis EEZ in the same block, with no bridge or wrapped asset |
| Fees | One fee, paid in xDai | Priced by route (instance only, instance to Ethereum, Ethereum to instance), still paid in xDai |

## For validators and node operators

The Gnosis Chain validator set is retired when the fork activates. The timing and the withdrawal process go through GnosisDAO governance as a Gnosis Improvement Proposal, and the [announcement bar](/) on this site links to the live proposal once it is published. Until then, validators keep running, keep earning, and nothing about deposits or withdrawals changes.

Node operators who run RPC or archive nodes keep running an execution client. The consensus-layer client is no longer needed after the fork.

## What is not in the first release

The brand rule for EEZ is to name limits before anyone else does, so here they are.

- **One direction of synchronous calls.** At launch, Ethereum can call into Gnosis EEZ synchronously. The reverse direction, Gnosis EEZ calling Ethereum in the same block, uses an intent-based path first and becomes synchronous in a later release.
- **Most, not all, of real-time proving.** The first release carries around four fifths of the real-time proving design. The trust model starts with a signer threshold alongside proofs and moves to proofs alone as prover latency comes down.
- **Audits.** The core contracts are an early-stage implementation and have not been audited. Audit results are published before mainnet activation.
- **Instance-to-instance composability.** Calls between EEZ instances come after Ethereum-to-instance calls.

Progress against each of these is tracked on the [timeline](/eez/timeline).

## What this means if you build on Gnosis Chain

Deploy now and your application is on Gnosis EEZ at launch without a second deployment. The teams live before the fork are the first to run on ZK-proven blocks that settle to Ethereum, with mainnet assets, liquidity and prices in reach from the same transaction. [Become a launch partner](/eez/launch-partner) sets out what that includes.
