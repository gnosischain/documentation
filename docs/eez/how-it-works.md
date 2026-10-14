---
sidebar_position: 3
title: How it works
description: The EEZ pipeline for Gnosis EEZ. A composer sequences blocks, the Zisk zkVM proves them, Ethereum verifies the proofs and holds the data, and cross-chain calls run inside the same block.
keywords: [eez architecture, zkvm, zisk, risc-v, composer, sequencer, prover, settlement, blobs, cross-chain proxy, synchronous composability]
---

# How it works

This page is for engineers who want the mechanism rather than the pitch. It describes Gnosis EEZ as designed for the first release. Where a number is still open it says so.

## The pipeline

1. **Sequence.** A composer orders transactions into blocks. For Gnosis EEZ the composer is operated by Gnosis and runs several blocks inside each 12-second Ethereum slot.
2. **Prove.** Each block is executed inside a zkVM and a validity proof is produced. The prover is the real-time zkVM developed by Zisk, a 64-bit RISC-V machine with a proof latency target under three seconds. More than one proof system can be appointed, and the instance accepts a block when an M-of-N threshold of them agree.
3. **Settle.** The proof and the block's data go to Ethereum. The settlement contracts verify the proof and the data is published to blobs. From that point the block is final with Ethereum's security.
4. **Compose.** A cross-chain proxy lets a contract on Ethereum call a contract on Gnosis EEZ as part of the same transaction. The call is proven with the block that contains it. At launch this runs from Ethereum into the instance. Calls in the other direction use an intent-based path until the synchronous version ships.

## What the contracts are

The framework is published by the EEZ Association. The pieces an integrator will meet are:

| Contract | Role |
| --- | --- |
| `EEZ` | The registry of instances and the entry point on Ethereum |
| `EEZL2` | The counterpart on each instance |
| `Rollup` | Accepts blocks, data and proofs for one instance |
| `IProofSystem` | The interface a proof system implements. Zisk is one implementation. |
| `CrossChainProxy` | Executes a call on the other side of the Ethereum and instance boundary |

The implementation is early-stage, not audited and has no mainnet deployment yet. Addresses are published here when they exist, and only after they have been checked against Blockscout.

## Execution and the EVM

Gnosis EEZ runs the standard EVM. Contracts that work on Gnosis Chain work unchanged. There are no new opcodes, no required SDK and no changes to Solidity. Cross-chain calls go through the proxy contract, so a contract that wants to reach Ethereum calls a normal contract address.

## Fees

Fees are priced by route and paid in xDai:

- **Instance only.** A transaction that stays on Gnosis EEZ. This is the common case and is priced to stay in the range users see today.
- **Ethereum to instance.** A call that starts on Ethereum and executes on Gnosis EEZ. It carries an Ethereum gas component.
- **Instance to Ethereum.** The intent-based path at launch, priced by the solver that fills it.

Proving and Ethereum settlement are paid in ETH by the operator. How that cost is recovered is a design decision that goes through governance and is open at the time of writing.

## Finality and settlement

| Stage | What it means | Timing |
| --- | --- | --- |
| Sequenced | The composer has ordered the transaction into a block | Seconds |
| Proven | A validity proof exists for the block | Target of a few seconds after sequencing |
| Settled | The proof is verified on Ethereum and the data is in a blob | Within Ethereum's own finality, around 15 minutes |
| Fully settled | Every window for proof challenge and data availability has closed | Up to a few days |

For an application, "sequenced" is what a user sees as confirmed. "Settled" is what a counterparty on Ethereum can rely on.

## Where the first release stops

- Synchronous calls run from Ethereum into Gnosis EEZ. The reverse path is intent-based.
- The trust model starts with a signer threshold alongside proofs, then moves to proofs alone.
- Around four fifths of the real-time proving design ships first. The rest follows in 2027.
- Instance-to-instance calls come after Ethereum-to-instance calls.

The [timeline](/eez/timeline) shows when each of these is expected to close.
