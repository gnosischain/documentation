---
title: Rewards & Penalties
---

## Rewards


### Staking

To secure the network and disincentivize bad actors from validating invalid or non-existent transactions, validators "stake" a non-trivial amount of assets. If they are caught lying by other validators, their stake gets "slashed" (taken away), and they can be permanently removed from the validator pool. 

In order for the network to be compromised, bad actors would have to control 51% of the staked assets, in what's known as a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp). Therefore, the more validators, the more coins there are being staked, and the more expensive and infeasible a 51% attack becomes. In exchange for being a good validator, a portion of transaction fees are paid out. On Gnosis, rewards are paid out in mGNO (1 mGNO = 1/32 GNO).  

### Current Yield

To view the current validator reward percentage and other deposit statistics, see the [Gnosis Beacon Chain Dune Analytics dashboard](https://dune.xyz/maxaleks/Gnosis-Beacon-Chain-\(Deposits\)).

### Rewards Curve

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

1. The validator deposit is a non-reversible, one-way transaction. For now, until withdrawals are enabled post merge update.
2. You are responsible for your node, including ensuring uptime, correct behavior, and monitoring. If your node is not responding properly, or is displaying dishonest behavior (like running keys on 2 nodes at the same time), you will be penalized in the form of deposit slashing.
3. You are responsible for your keys (deriving and storing your keys and mnemonic securely). If you lose them or your keys are compromised, there is no recourse to recover your funds.

## Penalties