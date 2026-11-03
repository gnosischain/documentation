---
sidebar_position: 3
title: How it works
description: A high-level overview of how Gnosis EEZ works. Blocks every 2 seconds, settled to Ethereum once per Ethereum block, with calls into Ethereum mainnet landing in the same Ethereum block or not at all.
keywords: [gnosis eez, how it works, sequencer, composer, sync block, proof signer, settlement, synchronous composability, eez-rollup0]
---

import EezCallReturn from '@site/src/components/EezCallReturn';

# How it works

## The EEZ protocol underneath

Gnosis EEZ is built on the EEZ protocol. EEZ provides the contract machinery for synchronous composability between Ethereum and the rollups that join it, and it is designed for based rollups that share Ethereum's sequencing. On Gnosis EEZ, it is what lets a contract call a contract on Ethereum through a local proxy and get the predicted return value back inside its own transaction. That makes flows possible such as calling back into Ethereum while an Ethereum-to-Gnosis EEZ operation is still open, or borrowing, using the funds across chains and repaying, all within one composed operation.

<EezCallReturn />

EEZ combines **precomputation, proof verification and local execution**. On Gnosis EEZ, they fit together like this:

1. **Precompute.** The Gnosis EEZ [composer](/knowledge-hub/glossary#composer) simulates the cross-chain operation and builds an execution table for each chain. A table describes the calls, their expected results, how they nest and how they roll back.
2. **Prove.** The proof system attests the batch posted to Ethereum, including Gnosis EEZ's state transitions and the entries to execute on Ethereum. On Gnosis EEZ this starts as the [proof signer's attestation](/knowledge-hub/glossary#attestation) and moves to ZK proofs.
3. **Verify on Ethereum.** The `EEZ` contract on Ethereum verifies the proofs. It runs any immediate entries in the same transaction and queues the rest. As each entry executes, it runs the calls that belong on Ethereum and checks their results.
4. **Execute on Gnosis EEZ.** The `EEZL2` contract on Gnosis EEZ executes the tables supplied by the Gnosis EEZ node, which it trusts. It checks local execution against those tables, but does not verify proofs itself.

So a proxy call on Gnosis EEZ resolves locally, using data prepared in advance. Gnosis EEZ and Ethereum do not share an EVM call stack. Cross-chain consistency depends on the proofs and the node integration connecting the two local executions correctly. Solidity rollback makes each execution frame atomic, but on its own it does not guarantee that every posted entry is delivered on both chains.

## Why you can trust it

- **Ethereum is the source of truth.** Gnosis EEZ adds each block straight away, but keeps it only if Ethereum confirms it. If a batch does not land on Ethereum, the block is rolled back.
- **All or nothing.** A cross-chain call completes on both chains or on neither.
- **No need to trust the operator.** Anyone can run a follower that rebuilds the same chain from Ethereum alone.

## What stays the same for developers

Gnosis EEZ runs the standard EVM. Contracts that work on Gnosis Chain work unchanged: no new opcodes, no required SDK and no changes to Solidity. A contract that calls Ethereum calls a normal contract address, a cross-chain proxy, and the composer does the rest. Fees stay in xDai.

To see a call run step by step, or to read the protocol in full, go to [EEZ References & Demos](/eez/demos-and-docs).
