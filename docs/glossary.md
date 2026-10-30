---
title: Glossary
slug: /knowledge-hub/glossary
description: Plain-language definitions of the terms used across the Gnosis EEZ pages, from attestation and composer to rollup, settlement and ZK proof.
keywords: [gnosis eez glossary, eez terms, rollup, settlement, sequencer, composer, proof signer, attestation, synchronous call, zk proof, tee, finality]
---

# Glossary

Short definitions of the terms used in the Gnosis EEZ pages. Each one describes the term as these pages use it.

### Activation block

The block at which the fork takes effect and Gnosis Chain becomes Gnosis EEZ. It is announced closer to [genesis](#genesis) and published on the [timeline](/eez/timeline).

### Attestation

A signed statement from the [proof signer](#proof-signer) that it re-ran a [batch](#batch) and got the same result. The EEZ contract on Ethereum checks it before anything [settles](#settlement). It will be replaced by [ZK proofs](#zk-proof).

### Audit

An independent security review of smart contract code. The core contracts have not been audited yet. Audit results are published before mainnet activation.

### Batch

The group of Gnosis EEZ blocks that the [composer](#composer) posts to Ethereum together, once per Ethereum block.

### Blob

Space in an Ethereum block where rollups publish their data. Gnosis EEZ publishes its data to Ethereum blobs.

### Bridge

A separate system that moves assets from one chain to another, often as a [wrapped asset](#wrapped-asset). Gnosis Chain reaches Ethereum through bridges today. Gnosis EEZ reaches Ethereum mainnet with a [synchronous call](#synchronous-call) instead.

### Chiado

The Gnosis Chain testnet, where nothing costs real money. It gets its own fork for testing before mainnet does.

### Composer

The part of Gnosis EEZ that, once per Ethereum block, builds a [Sync block](#sync-block) and posts the [batch](#batch) to Ethereum. It is operated by Gnosis and replaces the [validator set](#validator-set) as the block producer.

### Consensus-layer client

The software a node runs to take part in [proof-of-stake](#proof-of-stake) consensus. After the fork it is no longer needed. Node operators keep only their [execution client](#execution-client).

### Cross-chain proxy

A normal contract address on Gnosis EEZ that stands in for a contract on Ethereum. A contract calls the proxy, and the [composer](#composer) does the rest.

### Ethereum Economic Zone (EEZ)

A neutral, open source [rollup](#rollup) framework, co-led by Gnosis and Zisk and co-funded by the Ethereum Foundation. It is stewarded by the EEZ Association and is not a Gnosis product.

### Ethereum mainnet

The main Ethereum network, as opposed to its testnets or the [rollups](#rollup) built on top of it. Also called L1.

### EVM

The Ethereum Virtual Machine, the engine that runs smart contracts. Gnosis EEZ runs the standard EVM, so contracts work unchanged.

### Execution client

The software a node runs to process transactions and keep the chain's state. RPC and archive node operators keep it after the fork.

### Finality

The point at which a transaction can no longer be undone. On Gnosis EEZ a transaction is confirmed in seconds, and becomes final once its batch is [settled](#settlement) on Ethereum.

### Follower

A node that rebuilds the Gnosis EEZ chain from Ethereum data alone. Anyone can run one, so nobody has to trust the operator.

### Genesis

The first moment Gnosis EEZ runs, when the fork activates.

### GNO

The Gnosis governance token. Today it is also staked by validators to secure Gnosis Chain. Staked GNO unlocks when the [validator set](#validator-set) retires.

### Hard fork

A change to a chain's rules that every node must adopt. Gnosis Chain becomes Gnosis EEZ through a hard fork that carries its full state across, so contracts keep their addresses and storage.

### Hybrid app

An app that keeps its settlement and liquidity on Ethereum and runs its engines, such as matching or risk, on Gnosis EEZ.

### Instance

One chain built on the EEZ framework. Gnosis EEZ is the first instance. Any team can run another.

### L1 and L2

Layer 1 (L1) is a base chain that secures itself, like Ethereum, or Gnosis Chain today. Layer 2 (L2) is a chain that relies on an L1 for its security. Most people will call Gnosis EEZ an L2.

### Nested call

A chain of calls that goes back and forth, for example from Gnosis EEZ into Ethereum and back again, all in one transaction. Nested calls follow after launch.

### Proof signer

The part of Gnosis EEZ that re-runs each [batch](#batch) independently and signs the result. The signature is its [attestation](#attestation).

### Proof-of-stake

A way of securing a chain where [validators](#validator-set) lock up tokens and can lose them if they misbehave. Gnosis Chain uses proof-of-stake today, with staked GNO.

### Rollup

A chain that runs its own blocks but [settles](#settlement) them to Ethereum, which acts as the source of truth. Gnosis EEZ is a rollup.

### Sequencer

The part of Gnosis EEZ that puts transactions in order and makes a block every 2 seconds.

### Settlement

When a [batch](#batch) is confirmed on Ethereum. Gnosis EEZ keeps a block only if Ethereum confirms it. If a batch does not land, the block is rolled back.

### Slot

Ethereum's 12-second time step. One Ethereum block can be produced in each slot. Gnosis EEZ makes six blocks in that time.

### Sync block

The extra block the [composer](#composer) builds once per Ethereum block. It carries the cross-chain work, such as a call into Ethereum.

### Synchronous call

A call from a contract on Gnosis EEZ to a contract on Ethereum mainnet that returns its result in the same transaction, with no [bridge](#bridge). It completes on both chains or on neither. Being able to make these calls is called synchronous composability.

### TEE

A trusted execution environment: a secure area of a computer chip that runs code in isolation. The first release will likely use a TEE-based proving setup until real-time [ZK proofs](#zk-proof) are ready.

### Validator set

The group of validators that produce and secure Gnosis Chain blocks today. It retires at the fork.

### Wrapped asset

A token on one chain that represents an asset held on another, usually created by a [bridge](#bridge). With synchronous calls, Gnosis EEZ apps can use mainnet assets directly instead.

### xDai

The gas token on Gnosis Chain, used to pay transaction fees. It stays the gas token on Gnosis EEZ.

### ZK proof

A zero-knowledge proof: a short piece of maths that proves a batch of blocks was computed correctly, which Ethereum can check quickly. Gnosis EEZ moves to real-time ZK proofs, built with Zisk, after launch.
