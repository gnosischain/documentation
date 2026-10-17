---
sidebar_position: 3
title: How it works
description: A simple overview of how Gnosis EEZ will work. A composer sequences blocks, a prover proves them, Ethereum verifies the proofs and holds the data, and calls into Ethereum run inside the same transaction.
keywords: [eez architecture, zkvm, zisk, risc-v, composer, sequencer, prover, settlement, blobs, cross-chain proxy, synchronous composability]
---

# How it works

A simple overview of how Gnosis EEZ is designed to work at launch. Where a detail is still open, it says so.

## Four steps

1. **Sequence.** A composer operated by Gnosis will order transactions into blocks, one every 2 seconds, six to each 12-second Ethereum slot.
2. **Prove.** Each block will be executed inside a zkVM and a validity proof produced. The prover is the real-time zkVM developed by Zisk. More than one proof system can be appointed, and a block is accepted when a threshold of them agree. At genesis an interim proving setup, likely TEE-based, stands in while the real-time prover reaches its latency target.
3. **Settle.** The proof and the block's data go to Ethereum. Ethereum verifies the proof and the data is published to blobs. From that point the block is final with Ethereum's security.
4. **Compose.** A contract on Gnosis EEZ will be able to call a contract on Ethereum and use the result in the same transaction. If any step fails, the whole transaction reverts. At launch calls run from Gnosis EEZ into Ethereum. Ethereum calling into Gnosis EEZ, and nested calls, follow in 2027.

## What stays the same for developers

Gnosis EEZ runs the standard EVM. Contracts that work on Gnosis Chain work unchanged: no new opcodes, no required SDK and no changes to Solidity. A contract that wants to reach Ethereum calls a normal contract address.

Fees stay in xDai. A transaction that stays on Gnosis EEZ is priced to stay in the range users see today. A call into Ethereum carries an extra verification cost on Ethereum, so it suits high-value moments such as settlement.

## When a transaction is final

| Stage | What it means | Timing |
| --- | --- | --- |
| Sequenced | The composer has put the transaction in a block | Seconds |
| Proven | A validity proof exists for the block | Target of a few seconds after sequencing |
| Settled | The proof is verified on Ethereum and the data is in a blob | Within Ethereum's own finality, around 15 minutes |

For an application, "sequenced" is what a user sees as confirmed. "Settled" is what a counterparty on Ethereum can rely on.

## Where the first release stops

- Calls run from Gnosis EEZ into Ethereum. The reverse direction and nested calls follow in 2027.
- Proving starts with an interim setup and moves to real-time ZK proving.
- The core contracts are early-stage and not yet audited. Audit results are published before mainnet activation.

The [timeline](/eez/timeline) shows when each of these is expected to close.
