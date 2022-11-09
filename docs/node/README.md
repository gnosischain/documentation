---
title: Overview
---

# Run a Node

## What is a Node

Node Software, known as a 'Execution layer client', downloads a copy of the blockchain and verifies the validity of every block, then keeps it up-to-date with new blocks and transactions, and helps others download and update their own copies. 

Anyone can run a node: Gnosis chain is designed to run a node on average consumer-grade computers. It's recommended to run a node on dedicated hardware to eliminate the performance impact on their machine and minimize node downtime.

## Why Run a Node?

**Staking**

Proof of Stake (POS): refers to the method of consensus which secures Gnosis chain, this is how the network comes to agreement among many distributed nodes. Validators are responsible for storing data, processing transactions, and adding new blocks to the blockchain. Anyone can become a validator by staking 1 GNO as collateral for security to activate validator node software and earn native block rewards.

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

# Gnosis Beacon Chain

Gnosis Beacon Chain (GBC) brings extendable and accelerated beacon-network functionality to the Ethereum ecosystem. Applications can iterate through real-world strategies, stage important applications, or choose to run DApps in a faster, lower-stakes environment while enjoying the benefits of massive scalability.

GBC is optimized for certain parameters (block/epoch time) and can serve in a frontrunning capacity to important Ethereum consensus-layer updates. For example, the merge will first take place on testnets. Once thorough testing is complete, updates can then move to a production-level, real-world value environment (Gnosis Beacon Chain).

Validating on the GBC only requires the equivalent of 1 [GNO](/about/tokens/gno), opening up validation opportunities for diverse groups of individuals across the globe. When you go to make the deposit, that 1 GNO is split into 32 mGNO to more closely mirror Ethereum, where you stake 32 ETH.

## What is Staking?
Currently, Gnosis uses Parity's [AuRa](https://openethereum.github.io/Aura) proof-of-authority consensus model. In this model, selected validators (selected through the POSDAO dPOS process) take turns signing blocks. However, after the merge, Gnosis will be running a consensus protocol known as [Proof of Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp). To secure the network and disincentivize bad actors from validating invalid or non-existent transactions, validators "stake" a non-trivial amount of assets. If they are caught lying by other validators, their stake gets "slashed" (taken away), and they can be permanently removed from the validator pool. In order for the network to be compromised, bad actors would have to control 51% of the staked assets, in what's known as a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp). Therefore, the more validators, the more coins there are being staked, and the more expensive and infeasible a 51% attack becomes. In exchange for being a good validator, a portion of transaction fees are paid out. On Gnosis, rewards are paid out in mGNO (1 mGNO = 1/32 GNO).  

## What is a Node?
A 'node' on Gnosis is very similar to a node on Ethereum. [Read more here](https://ethereum.org/en/run-a-node/)

## What is Meant by 'Consensus Layer' and 'Execution Layer'?
The ***Consensus Layer*** is responsible for the blockchain's consensus. Pre-merge, this is known as the ***Beacon Chain***. This is where the validators check and make sure that blocks are valid. To run this, we can use clients such as [Lighthouse](https://github.com/sigp/lighthouse), [Prysm](https://github.com/prysmaticlabs/prysm), [Nimbus](https://github.com/status-im/nimbus-eth2), or [Teku](https://github.com/ConsenSys/teku).

The ***Execution Layer*** is responsible for transaction bundling and execution. To run this, we use clients like Nethermind. 

In order to check validity, the Consensus Layer sends a list of transactions and other data required to execute and validate them. The execution layer then assembles whats known as an execution block, verifies some pre-conditions, executes the transactions and then verifies the post-conditions. The result is then sent to the Consensus Layer. [This HackMD post](https://hackmd.io/@n0ble/ethereum_consensus_upgrade_mainnet_perspective) goes into more detail on how the layers interact. Note that any mention of transition from Proof of Work (PoW) does not apply to Gnosis. 


:::tip
🙋🏼‍♀️ Want to run a GBC validator node with ease? [DappNode](https://dappnode.io) provides hardware solutions and step-by-step setup, plus an opportunity to get up to 4 validators free with purchase. [Learn More](https://shop.dappnode.io/product/dappnodextreme-gnosis/).
:::

:::tip
Liquid staking is the easiest way to participate, and you can do so with [Stakewise](https://app.stakewise.io). [Read more here](/tools/beacon-chain/liquid-staking).
:::

