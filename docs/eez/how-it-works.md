---
sidebar_position: 3
title: The four steps behind every Gnosis EEZ block
sidebar_label: How it works
description: A high-level overview of how Gnosis EEZ works. Blocks every 2 seconds, settled to Ethereum once per Ethereum block, with calls into Ethereum mainnet landing in the same Ethereum block or not at all.
keywords: [gnosis eez, how it works, sequencer, composer, sync block, proof signer, settlement, synchronous composability, eez-rollup0]
---

import EezPipeline from '@site/src/components/EezPipeline';

# The four steps behind every Gnosis EEZ block

:::caution For review by the core development team

This page is a draft based on the reference implementation, [eez-rollup0](https://github.com/eez-association/eez-rollup0). Before it is published, please confirm:

- **Proving at launch.** This page describes the proof signer's attestation used in eez-rollup0. Other pages still describe an interim setup that is "likely TEE-based". Which is correct for launch?
- **Call directions at launch.** eez-rollup0 already handles calls in both directions. This page says calls into Ethereum ship first and calls from Ethereum follow. Is that still the plan?
- **Timings.** The 2-second block time, six blocks per Ethereum block, and the finality table.

:::

Gnosis EEZ will produce a block every 2 seconds. Once per Ethereum block, it settles everything to Ethereum in one go, including any calls into Ethereum mainnet. Either all of it lands in that Ethereum block, or none of it does.

<EezPipeline />

## The four steps

1. **Sequence.** The sequencer orders transactions into a Gnosis EEZ block every 2 seconds: six blocks to each 12-second Ethereum block.
2. **Compose.** Once per Ethereum block, the composer builds a Sync block. It carries the cross-chain work: a call into Ethereum is held, simulated and packed in alongside the ordinary blocks.
3. **Attest.** A proof signer re-runs the batch independently and signs the result. This attestation will be replaced by ZK proofs.
4. **Settle.** The composer posts the batch, the attestation and the Ethereum side of any cross-chain calls together, so they land in the same Ethereum block. The EEZ contract on Ethereum checks the attestation before anything settles.

{/* TODO(ben): confirm the proving setup at launch. eez-rollup0 uses the signer attestation described above, verified on Ethereum by ECDSAProofSystem; other pages still describe an interim setup that is "likely TEE-based". */}

## Why you can trust it

- **Ethereum is the source of truth.** Gnosis EEZ adds each block straight away, but keeps it only if Ethereum confirms it. If a batch does not land on Ethereum, the block is rolled back.
- **All or nothing.** A cross-chain call completes on both chains or on neither.
- **No need to trust the operator.** Anyone can run a follower that rebuilds the same chain from Ethereum alone.

## What stays the same for developers

Gnosis EEZ runs the standard EVM. Contracts that work on Gnosis Chain work unchanged: no new opcodes, no required SDK and no changes to Solidity. A contract that calls Ethereum calls a normal contract address, a cross-chain proxy, and the composer does the rest. Fees stay in xDai.

## When a transaction is final

| Stage | What it means | Timing |
| --- | --- | --- |
| Sequenced | The transaction is in a Gnosis EEZ block | Seconds |
| Attested | The proof signer has re-run and signed the batch | Before the batch is posted to Ethereum |
| Settled | The batch is confirmed on Ethereum | Within Ethereum's own finality, around 15 minutes |

For an application, "sequenced" is what a user sees as confirmed. "Settled" is what a counterparty on Ethereum can rely on.

## Before launch

- The signer attestation moves to ZK proofs.
- At launch, calls run from Gnosis EEZ into Ethereum. Ethereum calling into Gnosis EEZ, and nested calls, follow later.
- The core contracts are early-stage and not yet audited. Audit results are published before mainnet activation.

{/* TODO(ben): eez-rollup0 already handles calls in both directions (separate L1-to-L2 and L2-to-L1 entry points). Confirm whether both ship at launch and update this list and the timeline. */}

The [timeline](/eez/timeline) shows when each of these is expected to close.

## For engineers

The reference implementation is open source:

- [eez-rollup0](https://github.com/eez-association/eez-rollup0): the rollup node, with the sequencer, composer, proof signer and follower.
- [eez-core-protocol](https://github.com/eez-association/eez-core-protocol): the smart contracts on Ethereum.
- [specs-draft](https://github.com/eez-association/specs-draft): the draft specification.
