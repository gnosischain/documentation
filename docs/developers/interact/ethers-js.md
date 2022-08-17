---
---

# Using Ethers.js

[Ethers.js](https://docs.ethers.io/v5/) is a compact library for interacting with Ethereum Virtual Machine (EVM) based blockchains. With Gnosis Chain being an EVM chain, you can use Ethers.js to interact with the Gnosis ecosystem.

## Adding Ethers.js to your Project

<Tabs groupId="package-manager">
<TabItem value="yarn" label="yarn">

```bash
yarn add ethers
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm install --save ethers
```
</TabItem>

</Tabs>

To import the ethers library into your project using Node.js, use the following:

```js
const { ethers } = require("ethers");
```

```js
import { ethers } from "ethers";
```

## Connecting to Gnosis Chain with MetaMask

After installing, you need to create a web3 instance and set a provider. Most Ethereum supported wallets, such as Metamask, have an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compliant provider at `window.ethereum`. This works for connecting to Gnosis Chain as well. 

```js
// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner()
```
View the official Ethers.js MetaMask docs [here](https://docs.ethers.io/v5/getting-started/#getting-started--connecting).

## Connecting to Gnosis Chain via RPC

```js
// If you don't specify a //url//, Ethers connects to the default 
// (i.e. ``http:/\/localhost:8545``)
const provider = new ethers.providers.JsonRpcProvider();

// The provider also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, we need the account signer...
const signer = provider.getSigner()
```

View the official Ethers.js RPC docs [here](https://docs.ethers.io/v5/getting-started/#getting-started--connecting-rpc).

## Interacting with a Contract

To connect to and interact with a deployed contract, you can do the following:
```js
// The Contract object
const Contract = new ethers.Contract(Address, Abi, provider);
```
View the official Ethers.js contract docs [here](https://docs.ethers.io/v5/getting-started/#getting-started--contracts).
