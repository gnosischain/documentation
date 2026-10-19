---
sidebar_position: 1
sidebar_label: The move to Gnosis EEZ
title: "Validators and node operators: the move to Gnosis EEZ"
slug: /validators/eez-transition
description: What validators, RPC node operators and archive node operators do before, at and after Gnosis Chain becomes Gnosis EEZ in Q1 2027. Keep running until activation. The validator set then retires, staked GNO is unlocked, and nodes keep only an execution client.
keywords: [validators, node operators, gnosis eez, validator set, staked gno, unlock, rpc node, archive node, execution client, consensus client, proof systems]
---

# Validators and node operators: the move to Gnosis EEZ

Gnosis Chain becomes Gnosis EEZ, the first instance of the [Ethereum Economic Zone](/eez), in Q1 2027. GnosisDAO has approved the transition. This page sets out what it means for the people who run the chain today: validators, and operators of RPC and archive nodes.

The short version: keep running until activation. Nothing changes before then.

## The end of Gnosis Chain as a Layer 1

Gnosis Chain continues to run as a proof-of-stake Layer 1 until the fork. At activation, its state is hard-forked onto Gnosis EEZ. Contracts, balances and addresses carry over unchanged, so the chain and its users continue. What ends is the way blocks are produced and secured.

| | Gnosis Chain today | Gnosis EEZ, after activation |
| --- | --- | --- |
| Block production | A proof-of-stake validator set | A composer operated by Gnosis |
| Consensus | Beacon chain, GBC | The validator set retires |
| Security | Validator economic security | Proofs verified on Ethereum |
| Node software | Execution client and consensus-layer client | Execution client only |

[Gnosis Chain now and Gnosis EEZ](/eez/gnosis-eez) has the full comparison.

## Between now and activation

- **Validators keep running and keep earning.** Nothing about deposits or withdrawals changes before the fork.
- **There is no action to take** before the activation block is announced.
- **RPC and archive nodes run as they do today**, with both an execution client and a consensus-layer client.

Managing a validator before activation works as it always has:

- [Validator withdrawals](/validators/withdrawals): withdrawal credentials, enabling withdrawals (`0x00` to `0x01`), switching to compounding (`0x01` to `0x02`) and claiming your GNO.
- [Voluntary exit](/validators/voluntary-exit): stop validating and withdraw your full balance.

## At activation

- **The validator set retires.** Block production moves to the composer, and blocks are proven and settled on Ethereum.
- **Staked GNO is unlocked** when the validator set sunsets.
- **GNO continues as the governance token** through GnosisDAO.

{/* TODO(ben): add the unlock mechanics for staked GNO (what validators do, if anything, to receive it, and whether it is automatic) and the timings between activation and unlock. */}

## Operating proof systems

Former validators may operate proof systems for Gnosis EEZ. Blocks on Gnosis EEZ will be accepted when a threshold of appointed proof systems agree, and proving will start with an interim setup before real-time ZK proofs. [How it works](/eez/how-it-works) describes the proving pipeline.

{/* TODO(ben): add how a former validator applies to operate a proof system, and the requirements. */}

## RPC and archive node operators

Keep your execution client. After activation, the consensus-layer client is no longer needed and can be shut down. The chain ID is not planned to change. If any network parameter changes, it will be published in the [network details](/about/networks/) before activation.

## When it happens

The launch window is Q1 2027. The activation block for the mainnet fork will be published on the [timeline](/eez/timeline) when it is set.

{/* TODO(ben): confirm where else the activation block will be announced (for example Discord, the forum or a client release), and the timings for client releases ahead of the fork. */}

## Checklist

**Validators**

- [ ] Keep your validator running until activation. Nothing changes for deposits or withdrawals.
- [ ] Watch the [timeline](/eez/timeline) for the activation block.
- [ ] At activation, expect the validator set to retire and your staked GNO to be unlocked.
- [ ] If you want to keep contributing, look at operating a proof system.

**RPC and archive node operators**

- [ ] Keep running both clients until activation.
- [ ] Watch the [timeline](/eez/timeline) for the activation block.
- [ ] After activation, keep the execution client and shut down the consensus-layer client.
- [ ] Check the [network details](/about/networks/) for any parameter changes before activation.

Other questions are answered in the [transition FAQ](/eez/faq).
