---
sidebar_position: 2
description: Learn how to deploy your first contract on Gnosis Chain
keywords: [gnosis chain, quickstart]
title: Quickstart
---

# Gnosis Chain Quickstart

This guide shows you how to deploy a smart contract to Gnosis Chain using Remix IDE.

## Prerequisites

- Basic understanding of programming
- Firefox or any Chromium-based browser (Chrome, Brave, Edge, etc.)

## Web3 Setup

### Create a wallet

Gnosis Chain requires a Web3 wallet to interact with the network. In this tutorial, we'll cover MetaMask as an example. You can download and install MetaMask from the [official website](https://metamask.io/download/). Follow the instructions in the app and create your new wallet. Make sure to save your 12-word mnemonic phrase in a secure location.

### Add Chiado to your wallet

After you create a wallet, add the Chiado network to the list of available networks:

1. Go to [Chainlist](https://chainlist.org/?search=gnosis&testnets=true)
2. Search for Gnosis
3. Connect your wallet
4. Approve a new network

![chainlist](/img/developers/quickstart/chainlist.png)

### Fund your wallet

Lastly, top up the wallet with xDAI that you'll use for contract deployments on one of the environments: Chiado Testnet or Gnosis Mainnet. It's recommended to deploy contracts on the testnet first and use the mainnet only after you've done proper security audits.

Testnets on any EVM-compatible chains don't require real funds to pay for transactions. Instead, they use faucets that represent free tokens. You can use the following faucets to get xDAI on the Chiado testnet:
- [Chiado faucet](https://faucet.chiadochain.net/)

![faucet](/img/developers/quickstart/faucet.png)

## Deploy a contract

Your first contract is a simple `Hello World` that can set and retrieve variables.

```solidity
// SPDX-License-Identifier: MIT

pragma solidity 0.8.22;

contract HelloWorld {
    string public value;

    constructor(string memory initialValue) {
        value = initialValue;
    }

    function updateName(string memory newValue) public {
        value = newValue;
    }
}
```

You can deploy this contract as follows:

1. Open [Remix IDE](https://remix.ethereum.org/)

2. Create a new file `HelloWorld.sol`

3. Paste the above code or write your own contract

4. Compile your contract

Go to `Solidity compiler` and select `Compile HelloWorld.sol`. You can leave the default compilation settings.

![compile-contract](/img/developers/quickstart/compile.png)

5. Select deployment environment

Go to `Deploy & run transactions` and select `Injected Provider - MetaMask` as your environment.

![select-environment](/img/developers/quickstart/environment.png)

6. Deploy contract

Lastly, put the initial value in the constructor and click `Deploy`.

![deploy-contract](/img/developers/quickstart/deploy.png)

7. Check result

If the deployment is successful, you'll see the result in your logs that looks as follows:

![check-result](/img/developers/quickstart/result.png)

Make sure to save the contract address. You'll need it in the future.

8. Interact with the contract

Now that your contract is deployed, you can retrieve the current value or set a new one as follows:


![interact](/img/developers/quickstart/interact.png)
