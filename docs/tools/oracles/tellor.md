---
title: Tellor
description: The Tellor protocol enables smart contracts to get any verifiable data onchain using a censorship-resistant network of reporters.
keywords: [tellor, oracle, data feeds, price feeds]
---

# Tellor Data Feeds

Tellor is an immutable decentralized oracle protocol that incentivizes an open, permissionless network of data reporting and data validation, ensuring that data can be provided by anyone and checked by everyone.

:::info
[Watch a video walkthrough](https://youtu.be/1UMa9TACx48) of setting up data feeds using Tellor. 
:::

## Addresses

[List of current token & oracle contracts available in the Tellor Documentation](https://docs.tellor.io/tellor/the-basics/contracts-reference#gnosis-chain)


## Basic Tutorial: Price Feeds

This beginner’s guide is here to showcase how to get up and running with Tellor, providing your project with a fully decentralized and censorship-resistant oracle. 

See the [Tellor documentation](https://docs.tellor.io/) for more advanced tutorials and information. 


## Overview 

Tellor is an oracle system where parties can request the value of an off-chain data point (e.g. BTC/USD) and reporters compete to add this value to an on-chain data-bank, accessible by all Ethereum smart contracts. The inputs to this data-bank are secured by a network of staked reporters. Tellor utilizes crypto-economic incentive mechanisms, rewarding honest data submissions by reporters and punishing bad actors through the issuance of Tellor’s token, Tributes (TRB) and a dispute mechanism.

In this tutorial we'll go over:

- Setting up the initial toolkit you'll need to get up and running.
- Walk through a simple example.
- List out testnet addresses of networks you currently can test Tellor on.

## UsingTellor

The first thing you'll want to do is install the basic tools necessary for using Tellor as your oracle. Use [this package](https://github.com/tellor-io/usingtellor) to install the Tellor User Contracts:

`npm install usingtellor`

Once installed this will allow your contracts to inherit the functions from the contract 'UsingTellor'.

Great! Now that you've got the tools ready, let's go through a simple exercise where we retrieve the bitcoin price:

### BTC/USD Example

Inherit the UsingTellor contract, passing the Tellor address as a constructor argument:

Here's an example:

### Example Code

```solidity
import "usingtellor/contracts/UsingTellor.sol";

contract BtcPriceContract is UsingTellor {

  //This Contract now has access to all functions in UsingTellor

  bytes btcPrice;
  bytes32 btcQueryId = 0x0000000000000000000000000000000000000000000000000000000000000002;

  constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) public {}

  function setBtcPrice() public {
    bool _didGet;
    uint256 _timestamp;

    (_didGet, btcPrice, _timestamp) = getCurrentValue(btcQueryId);
  }
}
```

#### For a more robust implementation of the Tellor oracle, check out the full list of available functions [here.](https://github.com/tellor-io/usingtellor/blob/master/README.md)

#### Still have question? Reach out to us on Discord [here.](https://discord.gg/tellor) 

#### Have a specific Data Feed Request? [Fill out this form.](https://github.com/tellor-io/dataSpecs/issues/new?assignees=&labels=&template=new_query_type.yaml&title=%5BNew+Data+Request+Form%5D%3A+)
