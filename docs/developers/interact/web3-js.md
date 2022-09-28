---
---

# Using Web3.js

[web3.js](https://web3js.readthedocs.io/en/v1.7.5/web3.html) is a collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC or WebSocket. Since Gnosis and Ethereum are very similar, web3.js can also be used in the same way. This page will go over some of the basics to get started. The web3.js docs have a lot more on the full features and functionality of the library and can be found [here](https://web3js.readthedocs.io/en/v1.7.5/). You can view RPCs to connect to [here](/tools/rpc/). 

## Adding web3.js to your Project

<Tabs groupId="package-manager">
<TabItem value="yarn" label="yarn">

```bash
yarn add web3
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm install web3
```
</TabItem>

<TabItem value="pure js" label="purejs">

Link the `dist/web3.min.js`
</TabItem>
</Tabs>

After installing, you need to create a web3 instance and set a provider. Most Ethereum supported wallets, such as Metamask, have an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compliant provider at `window.ethereum`. This works for connecting to Gnosis as well. 

```javascript
// From web3.js docs:
// In Node.js use: const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider);
```

## Interacting with a Contract
[Official Docs here](https://web3js.readthedocs.io/en/v1.7.5/web3-eth-contract.html).

To connect to and interact with a deployed contract, you can do the following:
```javascript
var contract = new web3.eth.Contract(jsonInterface[, address][, options])
```
More on the parameters [here](https://web3js.readthedocs.io/en/v1.7.5/web3-eth-contract.html#new-contract).

## Setting Gnosis as a Custom Chain
When using web3.js, the default chain for signing transactions locally will be Ethereum mainnet. You can, however, [set a custom chain using the default common property](https://web3js.readthedocs.io/en/v1.7.5/web3-eth.html#id19):
<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```javascript
web3.eth.defaultCommon = {customChain: {name: 'Chiado Testnet', chainId: 10200, networkId: 10200}};
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```javascript
web3.eth.defaultCommon = {customChain: {name: 'Gnosis', chainId: 100, networkId: 100}};
```
</TabItem>
</Tabs>