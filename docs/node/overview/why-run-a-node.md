---
title: Why Run a Node?
---

# Why Run a Node?

**Staking**

Proof of Stake (POS): refers to the method of consensus which secures Gnosis chain, this is how the network comes to agreement among many distributed nodes. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Anyone can become a validator by staking 1 GNO as collateral for security to activate validator node software and earn native block rewards.

**What is a Node**

Node Software, known as a 'Execution layer client', downloads a copy of the blockchain and verifies the validity of every block, then keeps it up-to-date with new blocks and transactions, and helps others download and update their own copies. 

Anyone can run a node: Gnosis chain is designed to run a node on average consumer-grade computers. It's recommended to run a node on dedicated hardware to eliminate the performance impact on their machine and minimize node downtime.

**What is a Validator**

Validator node software, known as a ‘Consensus Layer client’ implements the proof-of-stake consensus algorithm, which enables the network to achieve agreement based on validated data from the execution client.

Anyone can run a validator node, provided they have the minimum required stake of 1GNO

## Why run a Node

**Censorship resistance:** your own node will ensure access when you need it, as you have direct access to the blockchain without needing a third party.

**Privacy and security:** Stop leaking your personal information to third party nodes.

**Participate in security of the network decentralization:** Don’t trust verify, help strengthening the network and reduce centralized points of failure.

**Earn network rewards as a validator:** running a node (also called an Execution layer client) is the first step in running a validator and earning rewards for securing the network.

:::caution
As a validator, you are providing security and receiving rewards (or penalties) as you would with Ethereum staking. Primary points to consider:
:::

1. The validator deposit is a non-reversible, one-way transaction. For now, until withdrawals are enabled post merge update.
2. You are responsible for your node, including ensuring uptime, correct behavior, and monitoring. If your node is not responding properly, or is displaying dishonest behavior (like running keys on 2 nodes at the same time), you will be penalized in the form of deposit slashing.
3. You are responsible for your keys (deriving and storing your keys and mnemonic securely). If you lose them or your keys are compromised, there is no recourse to recover your funds.

## Validator Rewards

## Gnosis Beacon Chain Validator Rewards

The minimum requirement to run a validator is 1 [GNO](/about/tokens/gno) (staked as 32 mGNO tokens).  Rewards are based on the number of validators securing the chain.

| GNO staked | % of GNO validating | reward for validators | Total GNO rewards | Overall inflation p.a. |
| ---------- | ------------------- | --------------------- | ----------------- | ---------------------- |
| 4096       | 0.23%               | 83.85%                | 3434.496          | 0.19%                  |
| 50000      | 2.78%               | 23.01%                | 11505             | 0.64%                  |
| 100000     | 5.56%               | 16.65%                | 16650             | 0.93%                  |
| 200000     | 11.11%              | 11.89%                | 23780             | 1.32%                  |
| 400000     | 22.22%              | 8.45%                 | 33800             | 1.88%                  |
| 800000     | 44.44%              | 5.99%                 | 47920             | 2.66%                  |
| 1800000    | 100.00%             | 4.00%                 | 72000             | 4.00%                  |

:::note
[APY Calculator](https://www.desmos.com/calculator/7pzueggivw) for the rewards curve. The Y axis is APR and the X axis is the number of validators multiplied by 100.

Following parameters set for the calculation.

F:  Block reward factor = 25

T: Time between blocks = 5

S: Slots in an epoch= 16

N: amount of validators required for the launch = 4096
:::

## Current Yield View

To view the current validator reward percentage and other deposit statistics, see the [Gnosis Beacon Chain Dune Analytics dashboard](https://dune.xyz/maxaleks/Gnosis-Beacon-Chain-\(Deposits\)).
