---
description: Gnosis Beacon Chain Documentation
slug: ./
---

# Gnosis Beacon Chain

Gnosis Beacon Chain (GBC) brings extendable and accelerated beacon-network functionality to the Ethereum ecosystem. Applications can iterate through real-world strategies, stage important applications, or choose to run DApps in a faster, lower-stakes environment while enjoying the benefits of massive scalability.

GBC is optimized for certain parameters (block/epoch time) and can serve in a frontrunning capacity to important Ethereum consensus-layer updates. For example, the merge will first take place on testnets. Once thorough testing is complete, updates can then move to a production-level, real-world value environment (Gnosis Beacon Chain).

[Validating on the GBC](/node/client/) only requires the equivalent of 1 GNO, opening up validation opportunities for diverse groups of individuals across the globe. When you go to make the deposit, that 1 GNO is split into 32 mGNO to more closely mirror Ethereum, where you stake 32 ETH.

## What is Staking?
Gnosis Chain runs a consensus protocol known as [Proof of Stake](https://www.investopedia.com/terms/p/proof-stake-pos.asp). To secure the network and disincentivize bad actors from validating invalid or non-existent transactions, validators "stake" a non-trivial amount of assets. If they are caught lying by other validators, their stake gets "slashed" (taken away), and they can be permanently removed from the validator pool. In order for the network to be compromised, bad actors would have to control 51% of the staked assets, in what's known as a [51% attack](https://www.investopedia.com/terms/1/51-attack.asp). Therefore, the more validators, the more coins there are being staked, and the more expensive and infeasible a 51% attack becomes. In exchange for being a good validator, a portion of transaction fees are paid out. On Gnosis chain, rewards are paid out in mGNO (1 mGNO = 1/32 GNO).  

## What is a Node?
A 'node' on Gnosis chain is very similar to a node on Ethereum. [Read more here](https://ethereum.org/en/run-a-node/)

## What is Meant by 'Consensus Layer' and 'Execution Layer'?

The ***Consensus Layer*** is responsible for the blockchain's consensus. Pre-merge, this is known as the ***Beacon Chain***. This is where the validators check and make sure that blocks are valid. To run this, we can use clients such as [Lighthouse](https://github.com/sigp/lighthouse), [Prysm](https://github.com/prysmaticlabs/prysm), [Nimbus](https://github.com/status-im/nimbus-eth2), or [Teku](https://github.com/ConsenSys/teku).

The ***Execution Layer*** is responsible for transaction bundling and execution. To run this, we use clients like Nethermind. 

In order to check validity, the Consensus Layer sends a list of transactions and other data required to execute and validate them. The execution layer then assembles whats known as an execution block, verifies some pre-conditions, executes the transactions and then verifies the post-conditions. The result is then sent to the Consensus Layer. [This HackMD post](https://hackmd.io/@n0ble/ethereum_consensus_upgrade_mainnet_perspective) goes into more detail on how the layers interact. Note that any mention of transition from Proof of Work (PoW) does not apply to Gnosis Chain. 


:::tip
🙋🏼‍♀️ Want to run a GBC validator node with ease? [DappNode ](https://dappnode.io)provides hardware solutions and step-by-step setup, plus an opportunity to get up to 4 validators free with purchase. [Learn More](https://shop.dappnode.io/product/dappnodextreme-gnosis/).
:::

:::tip
💧 Liquid staking is the easiest way to participate, and it has arrived with [Stakewise](https://app.stakewise.io). Connect your wallet to the GC to start staking __ today! [Instructions here](https://stakewise.medium.com/stakewise-liquid-staking-now-on-gnosis-beacon-chain-b732d81480b9).
:::

