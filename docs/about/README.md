

# Overview 
## What is Gnosis Chain?
Gnosis Chain, formerly xDAI chain, is a blockchain that enables the development of applications and organizations, as well as the management of assets, transactions, and communication without the need for a centralized authority. It is an Ethereum [sidechain](https://ethereum.org/en/developers/docs/scaling/sidechains/), powered by stable payments [EVM](https://ethereum.org/en/developers/docs/evm/#top) for fast and inexpensive transactions.


## What is the difference between Ethereum and Gnosis Chain?
Gnosis Chain utilizes a dual-token model: [xDai](/about/tokens/xdai/) is a stable token used for transactions, payments, and fees, and Proof of Stake protection will be provided by [GNO](/about/tokens/gno/) with the consensus-layer Gnosis Beacon Chain.

In the [consensus layer](../specs/README.md), a slot takes 5 seconds in Gnosis Chain, and an epoch consisting of 16 slots, resulting in faster finalization time in contrast to Ethereum. 

## Gnosis Chain in EthereumVerse
Gnosis Chain provides a lower entry barrier for both developer and node runner to participate in EthereumVerse.
### For developer
Gnosis Chain is fully EVM compatible.
Transaction fee in Gnosis is significantly cheaper, allowing developers to test and deploy their [smart contract](https://ethereum.org/en/developers/docs/smart-contracts/) on Gnosis Chain before moving to the Ethereum mainnet, without compromising the experience.

Learn how to build and interact a Gnosis Dapp in [Developers](../developers/README.md) and [Tools](../tools/README.md) section.
### For node runner
With the same [Execution and Consensus Layer clients](../node/README.md#getting-the-client-software), running a node on Gnosis is no different than running a node on Ethereum. Only with minor configuration tweaks, i.e. `--network`. 
1GNO is needed for running a validator on Gnosis Chain (32ETH for Ethereum), and the validator is eligible for rewards, just like in Ethereum mainnet.

Learn how to run a Gnosis node in [Run a Node](../node/README.md) section.

## Who runs Gnosis Chain?
**Gnosis Chain is run by the community.**  

Individuals and businesses from all over the globe run Gnosis Chain by running client's software on hardware, namely consumer-grade computers.
A diverse set of node running provides resiliency to the Gnosis network infrastructure. 
**Gnosis has a stretch goal to have a node in every country by 2025.** 

## Ecosystem
Gnosis Chain supports a variety of Dapps, DAOs, and infrastructure on the [ecosystem](../ecosystems/README.md). 

## Bridge
Gnosis Bridges allow tokens and data to be send to and from Ethereum. For instance, Gnosis Chain's native token xDAI, is bridged from Ethereum's DAI.    
Understand the mechanism of bridges in Gnosis Chain in [Bridges](../bridges/README.md) section.