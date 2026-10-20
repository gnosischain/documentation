---
sidebar_position: 2
title: "What stays the same and what changes at the fork"
sidebar_label: Now vs Gnosis EEZ
description: Gnosis EEZ is Gnosis Chain re-based onto Ethereum. State, contracts and addresses carry over in a hard fork. The validator set retires and blocks are proven and settled on Ethereum, starting with an interim proving setup before real-time ZK proofs.
keywords: [gnosis eez, hard fork, validator set, xdai, gno, zk proofs, zisk, ethereum settlement, no redeploy]
---

# What stays the same and what changes at the fork

The [Ethereum Economic Zone](/eez) (EEZ) is a neutral rollup framework. Gnosis EEZ is its first instance, operated by Gnosis.

Gnosis EEZ is not a new ecosystem. It is Gnosis Chain, re-based onto Ethereum through a hard fork of the existing state. If you have a contract on Gnosis Chain today, it will be on Gnosis EEZ at the same address with the same storage the moment the fork activates. You do not redeploy, migrate liquidity or ask users to switch networks. If your deployment needs any configuration for the fork, the Gnosis team will be in touch.

The transition is planned for the future, and no date is set yet. Gnosis Chain continues to run as a Layer 1 until then, and the rest of this documentation stays accurate for building on it.

If you want to be a Gnosis EEZ launch partner, deploy on Gnosis Chain now. A live deployment is how you confirm your place. [Become a launch partner](/launch-partner) sets out the steps.

## What stays the same

<div className="compare-table">

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Contracts and state | Deployed and verified on Gnosisscan | Carried over unchanged, same addresses, same storage |
| Gas token | xDai | xDai |
| GNO | Secures consensus and governs through GnosisDAO | Continues as the governance token. Staked GNO unlocks when the validator set retires |
| EVM | Standard EVM, Foundry, Hardhat, viem, ethers | Standard EVM. No new opcodes, no new SDK, no Solidity changes |
| Tooling | Gnosisscan, RPC providers, indexers | The same tooling, pointed at the same chain |
| Components | Monerium EURe, Safe, CoW Protocol, Gnosis Pay, Spark, Aave, Balancer, Curve, Backed, Circles | All carried over with their contracts and liquidity |

</div>

## What changes

<div className="compare-table">

| | On Gnosis Chain today | After the fork |
| --- | --- | --- |
| Block production | A proof-of-stake validator set of over 200,000 validators | A composer, using sequencing and prover technology |
| Consensus | Beacon chain, GBC | The validator set retires. Node operators drop their consensus-layer client |
| Security | Validator economic security | Proofs verified on Ethereum. An interim proving setup, likely TEE-based, at genesis, moving to real-time ZK proofs across more than one proof system |
| Settlement | Gnosis Chain is its own settlement layer | Blocks settle to Ethereum. Data is published to Ethereum blobs |
| Block time | 5 seconds | 2 seconds, with a composing block every 12-second Ethereum slot |
| Finality | Around 2.5 minutes to hard finality | Soft confirmation in seconds. Hard finality when the proof lands on Ethereum |
| Reaching Ethereum mainnet | Native bridge, or a third-party bridge | A synchronous call from Gnosis EEZ into Ethereum mainnet in the same transaction, with no bridge or wrapped asset |
| Reaching other rollups | A bridge | Still a bridge, unless the rollup is part of the EEZ |
| Fees | One fee, paid in xDai | Priced by route (instance only, instance to Ethereum, Ethereum to instance), still paid in xDai |

</div>

## For validators and node operators

Validators keep running until the fork. At activation the validator set retires and staked GNO unlocks. RPC and archive node operators keep their execution client and drop the consensus-layer client.

The [Validators section](/validators/eez-transition) has the full guide, a checklist for each role, and how to manage withdrawals and exits until then.

## What is not in the first release

Here are the limits of the first release.

- **One direction of synchronous calls.** At launch, a contract on Gnosis EEZ can call a contract on Ethereum and use the result in the same transaction. The reverse direction, Ethereum calling into Gnosis EEZ, and full nested calls follow in 2027.
- **Interim proving at genesis.** The first release uses an interim proving setup, likely TEE-based, and moves to real-time ZK proving as the Zisk prover reaches its latency target.
- **Audits.** The core contracts are an early-stage implementation and have not been audited. Audit results are published before mainnet activation.
- **Instance-to-instance composability.** Calls between EEZ instances come after bidirectional calls with Ethereum.

Progress against each of these is tracked on the [timeline](/eez/timeline).

## What this means if you build on Gnosis Chain

Deploy now and your application is on Gnosis EEZ at launch without a second deployment. The teams live before the fork are the first to run on blocks that are proven and settled on Ethereum, with mainnet assets, liquidity and prices in reach from the same transaction. [Become a launch partner](/launch-partner) sets out what that includes.
