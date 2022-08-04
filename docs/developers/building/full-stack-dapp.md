---
---


# Building a Full Stack Dapp

Welcome to the Gnosis Full stack Dapp tutorial! In the following tutorial we will go through a step-by-step guide on how to create a full-stack Hello World App that interacts with Gnosis Chain! This tutorial is designed for either new developers interested in Dapp development or existing devs interested in migrating to Gnosis Chain development.

Throughout the tutorial, feel free to refrence other pages in our documentation for information with greater depth - however this tutorial will give you a basic understand of how to get up and running!

## Guideline Overview

1. Creating and connecting your wallet to Gnosis Chain
2. Setting up your project
3. Smart-contract development
4. Using Hardhat for contract devlopment
5. Deploying your contract on Gnosis
6. Integrating your smart contract with your project's front end

## Wallet

While there are many options for wallets, one great wallet is **MetaMask**. With MetaMask you can connect to many networks, including Gnosis Chain, and run dApps in-browser. Install it in your browser [here.](https://metamask.io/download/)

TODO Update this stuff with new Gnosis Configuration: [link](https://shanejonas.github.io/metamask-link/?method=wallet_addEthereumChain&params[0][chainId]=0x64&params[0][chainName]=xDAI%20Chain&params[0][rpcUrls][0]=https://dai.poa.network&params[0][iconUrls][0]=https://xdaichain.com/fake/example/url/xdai.svg&params[0][iconUrls][1]=https://xdaichain.com/fake/example/url/xdai.png&params[0][nativeCurrency][name]=xDAI&params[0][nativeCurrency][symbol]=xDAI&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://blockscout.com/poa/xdai/)

Use this [1-click link](https://metamask.io/) for automatic MetaMask configuration with Gnosis Chain

For further information or manual configuration of Gnosis on MetaMask, visit this [page](../gnosis-interaction/metamask.md).

## Setting up your project

### Tech Stack:
* [Waffle](https://ethereum-waffle.readthedocs.io/en/latest/), a library for writing and testing smart contracts.
* [Hardhat](https://hardhat.org/), a development enviornment used for smart contract compiling, deploying, testing and debugging.
* [Ethers.js](https://docs.ethers.io/v5/), a library for interacting with Ethereum Virtual Machine (EVM) chains.

First lets initialize your project:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="yarn" label="yarn">

```bash
yarn init
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm init
```
</TabItem>
</Tabs>

then install required packages:

<Tabs>
<TabItem value="yarn" label="yarn">

```bash
yarn add -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm install -D hardhat @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
</TabItem>
</Tabs>

Create a hardhat project by running ```npx hardhat```