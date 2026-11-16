---
title: Proof of Stake
description: How proof of stake secures Gnosis Chain. Validators stake GNO, Gasper combines the LMD GHOST fork choice with Casper FFG finality, and new nodes sync from a recent checkpoint.
keywords: [proof of stake, gasper, casper ffg, lmd ghost, finality, weak subjectivity, checkpoint sync, gno staking]
---

# Proof of Stake

Gnosis Chain uses [proof of stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/), with the same protocol and client software as Ethereum. Instead of spending computing power, validators lock up stake, and they lose part of it if they break the protocol rules.

## Validators and stake

A Gnosis validator needs at least 1 GNO to activate, where Ethereum requires 32 ETH. Since the Pectra upgrade in April 2025, a validator with compounding (`0x02`) [withdrawal credentials](/validators/withdrawals) can stake up to 64 GNO, the counterpart of Ethereum's 2048 ETH. A validator with `0x01` credentials stays at 1 GNO, because anything above that is withdrawn automatically.

Time is divided into 5-second slots, and 16 slots make an 80-second epoch. In each slot, one validator, chosen pseudo-randomly in proportion to its stake, proposes a block. Every validator attests once per epoch, voting for the block it sees as the head of the chain.

Validators that do their duties earn GNO. Validators that go offline lose a small amount. Validators that sign conflicting blocks or votes are slashed: they lose part of their stake and are removed from the validator set. [Rewards and penalties](/node/rewards-penalties) has the details.

## Gasper

[Gasper](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/gasper/) is the name for the two protocols that together decide which chain is canonical. Both work purely from validators' votes, and neither involves mining.

On Gnosis Chain, a block is finalized after about two epochs, roughly 2.7 minutes, compared with about 13 minutes on Ethereum.

## Weak subjectivity

A node that sees the chain for the first time cannot tell the real history from a fake one signed by validators that have since exited, because exited validators can no longer be slashed. Proof of stake handles this with [weak subjectivity](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/weak-subjectivity/): a node that joins the network, or returns after a long time offline, starts from a recent state it trusts, called a weak subjectivity checkpoint, and syncs forward from there.

Gnosis consensus clients do this through checkpoint sync. Point the client at a checkpoint sync endpoint, such as the ones listed for [Gnosis Chain](/about/networks/mainnet#consensus-layer) and [Chiado](/about/networks/chiado#key-infra), and check the checkpoint against a second source you trust, such as another endpoint or a beacon chain explorer.
