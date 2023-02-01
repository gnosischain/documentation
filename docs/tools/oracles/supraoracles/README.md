---
title: SupraOracles
description: SupraOracles provides smart contracts with a next-generation cross-chain oracle solution that has superior data accuracy, speed, scalability and security. 
keywords: [supraoracles, oracle, data feeds, price feeds]
---

:::info testnet
SupraOracles only supports [Chiado testnet](../../../about/networks/chiado.md).
:::

## What is SupraOracles?

[SupraOracles](https://supraoracles.com/) is a novel, high-throughput Oracle & IntraLayer: a vertically integrated toolkit of cross-chain solutions (data oracles, asset bridges, automation network, and more) that interlink all blockchains, public (L1s and L2s) or private (enterprises).


## How to use SupraOracles' Price Feeds

SupraOracles currently supports many Solidity/EVM-based networks, like Gnosis Chiado TestNet.

To see all of the networks SupraOracles supports, please visit [SupraOracles' Networks](https://supraoracles.com/docs/get-started/networks).

To get started, you will want to visit   [SupraOracles' docs site](https://supraoracles.com/docs/get-started/) and review the documentation or continue to follow this guide for a quick start.


### Step 1: Create The S-Value Interface

Add the following code to the Solidity smart contract that you wish to retrieve an S-Value.

```solidity
interface ISupraSValueFeed {
    function checkPrice(string memory marketPair) external view returns (int256 price, uint256 timestamp);
}
```

This creates the interface that you will later apply in order to fetch a price from SupraOracles.


### Step 2: Configure The S-Value Feed Address

To fetch the S-Value from a SupraOracles smart contract, you must first find the S-Value Feed Address for the chain of your choice.

For Gnosis Chiado TestNet, the address is: 

```
0x700a89Ba8F908af38834B9Aba238b362CFfB665F
```

When you have the proper address, create an instance of the S-Value Feed using the interface we previously defined for Gnosis Chiado TestNet:

```solidity
contract ISupraSValueFeedExample {
    ISupraSValueFeed internal sValueFeed;

    constructor() {
        sValueFeed = ISupraSValueFeed(0x700a89Ba8F908af38834B9Aba238b362CFfB665F);
    }
}
```

### Step 3: Get The S-Value Crypto Price

Now you can simply access the S-Value Crypto Price of our supported market pairs. In this step, we'll get the price of ETH/USDT (eth_usdt) by applying the following code to our Smart Contract.

```solidity
function getEthUsdtPrice() external view returns (int) {
    (
        int price,
        /* uint timestamp */
    ) = sValueFeed.checkPrice("eth_usdt");

    return price;
}
```

Here's an example of what your implementation should look like.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


interface ISupraSValueFeed {
    function checkPrice(string memory marketPair) external view returns (int256 price, uint256 timestamp);
}

contract ISupraSValueFeedExample {
    ISupraSValueFeed internal sValueFeed;

    constructor() {
        sValueFeed = ISupraSValueFeed(0x700a89Ba8F908af38834B9Aba238b362CFfB665F);
    }

    function getEthUsdtPrice() external view returns (int) {
        (
            int price,
            /* uint timestamp */
        ) = sValueFeed.checkPrice("eth_usdt");

        return price;
    }
}
```

You now have a method in your Smart Contract that you can call at any time to retrieve the price of ETH in USDT.

### Extra: S-Value Feeds with ethers.js

```js
// example assumes that the ethers library has been imported and is accessible within your scope
const getEthUsdtPrice = async () => {
  const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')
  const abi = [{ "inputs": [ { "internalType": "string", "name": "marketPair", "type": "string" } ], "name": "checkPrice", "outputs": [ { "internalType": "int256", "name": "price", "type": "int256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]
  const address = '0x700a89Ba8F908af38834B9Aba238b362CFfB665F'
  const sValueFeed = new ethers.Contract(address, abi, provider)
  const price = (await sValueFeed.checkPrice('eth_usdt')).price

  console.log(`The price is: ${price.toString()}`)
}

getEthUsdtPrice()
```

For additional tutorials and guides based on example use-cases, please refer to the [Supra docs](https://supraoracles.com/docs/additional-guides).


## Going Further with SupraOracles

If you want to take the next step, consider registering for the  [Supra Network Activate Program (SNAP)](https://join.supraoracles.com/network-activate-program).

The Supra Network Activate Program (SNAP) offers companies discounted oracle credits, technical documentation, and customer support to embed much-needed oracles and VRF/RNG. SNAP supports Web3 scaling and growth to buffer costs which could typically inhibit a company’s success.

The SNAP program is partnered with some of Web3's most prolific names who are helping with project selection and qualification.

## SupraOracles community channels

* [supraoracles.com](https://supraoracles.com)
* [Docs](https://supraoracles.com/docs/overview)
* [Telegram](https://t.me/SupraOracles)
* [Twitter](https://twitter.com/SupraOracles)
* [Discord](https://discord.gg/supraoracles)
* [Youtube](https://www.youtube.com/SupraOfficial)