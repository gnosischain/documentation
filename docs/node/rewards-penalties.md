---
title: Rewards & Penalties
---

## Overview

You are responsible for your node, including ensuring uptime, correct behavior, and monitoring. If your node is not responding properly, or is displaying dishonest behavior (like running keys on 2 nodes at the same time), you will be penalized.

### Proof-of-Stake
- Gnosis (and Ethereum) utilize a Proof-of-Stake cryptoeconomic incentive system to secure the network and disincentivize malicious behavior by nodes. 
- Nodes that play an active role in validating the network are required to stake [32 mGNO](../about/tokens/gno.md) (i.e. 1 GNO) per validator. They receive periodic rewards for each epoch that they stay online and performing their duties. 
- However, if they engage in malicious or disruptive activity on the network, their stake gets "slashed", and they can also be permanently removed from the validator pool. 
- Nodes that go offline also attract a penalty for "inactivity leaks", although these are significantly less harsh if the node is offline only for a short period of time. 

## Rewards
### Current Yield

- The current yield on GNO staking can be found in this [Dune Dashboard](https://dune.xyz/maxaleks/Gnosis-Beacon-Chain-\(Deposits\)). 
- As of Nov 2022, GNO staking has a ~15-16% yield.

### Rewards Calculation:
- **Block Proposals**: The reward for proposing a block consists of a base reward and an additional reward proportional to the validator's index. While the base reward remains constant, the additional reward decreases as the validator's index increases, ensuring equal block proposal opportunities for all validators.

Example: A validator with index 10 proposes a block. The base reward for proposing a block is 100, and the additional reward is 10 / 100 = 0.1. The total reward for the validator is 100 + 0.1 = 100.1.

- **Block Attestations**: The reward for attesting to a block features a base reward that diminishes over time. Initially set at 100%, the base reward decreases by 1% for every 1000 slots, maintaining the attractiveness of block proposal rewards even as the number of validators grows.

Example: A validator with index 100 attests to a block. The base reward for attesting to a block is 100, and the additional reward is 99%. The total reward for the validator is 100 * 0.99 = 99.

### 

### Rewards Curve

:::info

Gnosis' rewards curve was [proposed in Nov 2021](https://forum.gnosis.io/t/launch-parameters-for-gnosis-beacon-chain-gbc/2200) in a Gnosis Forum post. 

:::

- The minimum requirement to run a validator is [32 mGNO](/about/tokens/gno) (i.e. 1 GNO).  
- The reward rate drops with more active validators

| GNO staked | % of GNO validating | reward for validators | Total GNO rewards | Overall inflation p.a. |
| ---------- | ------------------- | --------------------- | ----------------- | ---------------------- |
| 4096       | 0.23%               | 83.85%                | 3434.496          | 0.19%                  |
| 50000      | 2.78%               | 23.01%                | 11505             | 0.64%                  |
| 100000     | 5.56%               | 16.65%                | 16650             | 0.93%                  |
| 200000     | 11.11%              | 11.89%                | 23780             | 1.32%                  |
| 400000     | 22.22%              | 8.45%                 | 33800             | 1.88%                  |
| 800000     | 44.44%              | 5.99%                 | 47920             | 2.66%                  |
| 1800000    | 100.00%             | 4.00%                 | 72000             | 4.00%                  |

## Penalties

Gnosis follows Ethereum's Proof-of-Stake penalties.

### "Offline" Penalties

:::tip Read more
[Upgrading Ethereum: Penalties](https://eth2book.info/bellatrix/part2/incentives/penalties/) 
:::

The most common "penalty" validators encounter is if they are offline, or are late in performing their duties of attesting or proposing blocks. 

- Generally speaking, the penalties for being offline (or late) are equal to the rewards that a validator would have received if they were online
- If your validator is [online more than 42.5% of the time](https://eth2book.info/bellatrix/part2/incentives/penalties/#attestation-penalties), you will be earning a positive return
- Missed, late or incorrect attestations are penalized.
- There is no penalty for missing the head vote.
- There is no penalty for failing to propose a block.
- There is no penalty for missing a sync committee (except the lost rewards).
### Inactivity Leak

:::tip Read more
[Upgrading Ethereum: Inactivity Leak](https://eth2book.info/bellatrix/part2/incentives/inactivity/)
:::

Gnosis will move into a "inactivity leak" mode, if a large number (i.e. >1/3) of validators are offline at the same time causing the network to not finalize. 

- "Offline" validators receive increasingly large penalties based on their track records
- This is designed to restore finality by reducing the stake of "offline" validators, who may get ejected from the network if their stake drops below the minimum required (i.e. 16 mGNO)
### Slashings

:::tip Read more
- [Ethereum.org: Slashing](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)
- [Upgrading Ethereum: Slashing](https://eth2book.info/bellatrix/part2/incentives/slashing/)
:::

Slashing is the most serious penalty and results in losing a potentially significant amount of stake, and possible ejection of a validator from the network. This is when validators break very specific protocol rules that prevent the network from functioning effectively. 

In these cases, 1/32 of a validator's staked GNO is immediately burned, and the validator enters a removal process from the chain. 

- "Double signing" is the most common slashing offence, where a validator proposes and signs two different blocks at the same slot. This often happens when a validator is run in two machines at once (e.g. redundancy). 
- "Double voting" by attesting to two candidates for the same block
- Attesting to a block that "surrounds" another one (i.e. changing history)

### Resources

We recommend the following readings for a more in-depth understanding of validator penalties. 

- [Ethereum.org on Proof-of-stake Rewards and Penalties](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/)
- [Upgrading Ethereum on "The Incentive Layer"](https://eth2book.info/bellatrix/part2/incentives/)
