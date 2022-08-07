---
title: Full Stack Dapp
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

- Select one of the [wallets](/tools/wallets/) to store Gnosis gas token (xDai).
- Fund your wallet with xDai using one of the [faucets](/tools/faucets/).
- To interact with dApps, we recommend to [setup and configure MetaMask](/tools/wallets/metamask/).

## Setting up your project

### Tech Stack:
* [Waffle](https://ethereum-waffle.readthedocs.io/en/latest/), a library for writing and testing smart contracts.
* [Hardhat](https://hardhat.org/), a development enviornment used for smart contract compiling, deploying, testing and debugging.
* [Ethers.js](https://docs.ethers.io/v5/), a library for interacting with Ethereum Virtual Machine (EVM) chains.

First lets initialize your project:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="package-manager">
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

<Tabs groupId="package-manager">
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