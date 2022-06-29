---
description: Instructions how to replace the interim token by the DAOstack token contract
---

# Change the token contract on the Gnosis Chain

For demonstration purposes we use [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet)  to replace one token contract on the Gnosis Chain by another one. These actions may be applied to any other wallet with similar capabilities.

:::warning
Before changing the token from the interim token contract (`0x3E12081DD66A3600FC0A2E6cc9e6b5B3b8f037f6`) to the DAOstack token contract (`0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf`) **it is necessary to make sure** that the balance of the GEN-xGEN bridge extension is zero - the mediator contract of the extension on the side of the Ethereum Mainnet does not own any amount of GEN tokens. If so, withdraw all the xGEN tokens from the Gnosis Chain.
:::

### Assign the mediator contract as the DAOstack token contract owner

1\. Choose the Gnosis Chain in the browser wallet extension and login to [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet) by using the account which is **the current owner of the DAOstack token contract**. Select to the **Interact with Contract** item in the side navigation menu.

2\. Initialize the DAOstack (bridgeable) token contract interface:

* 1\) Add the token **Contract Address **`0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf`.
* 2\) Add the following JSON in the **`ABI/JSON Interface`** field:

```javascript
[{"type":"function","stateMutability":"nonpayable","payable":false,
"outputs":[],"name":"transferOwnership","inputs":[{"type":"address",
"name":"newOwner"}],"constant":false}]
```

* 3\) Click **Continue.**

![](</img/specs/bridges/image-22.png>)

3\. Change the owner of the DAOstack token contract to the GEN-xGEN AMB extension mediator contract:

* 1\) Select _transferOwnership_ from the the **Select an Item **dropdown
* 2\) Enter in the **NewOwner** address: `0xe47097ceF3B0bcbb0095A21523714bF0022E2DB8`. This is the  mediator contract serving the bridge extension in the Gnosis Chain.
* 3\) Click **Write.**

![](</img/specs/bridges/image-23.png>)

4\. Check the gas price, then **Submit** the transaction through the web3 wallet extension and wait until it is included in the chain.

### Set the new token contract in the mediator contract

1\. Choose the Gnosis Chain in the browser wallet extension and login to [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet) by using the account which is** the current owner of the mediator contract**. Select to the **Interact with Contract** item in the side navigation menu.

2\. Initialize the mediator contract serving the GEN-xGEN AMB extension interface:

* 1\) Add the token **Contract Address **`0xe47097ceF3B0bcbb0095A21523714bF0022E2DB8`.
* 2\) Add the following JSON in the **`ABI/JSON Interface`** field:

```javascript
[{"type":"function","stateMutability":"nonpayable","payable":false,
"outputs":[],"name":"setBridgeableToken","inputs":[{"type":"address",
"name":"_token"}],"constant":false}]
```

* 3\) Click **Continue.**

![](</img/specs/bridges/image-24.png>)

3\. Set the new token contract to be used as the bridgeable token the GEN-xGEN AMB extension on the Gnosis Chain:

* 1\) Select _setBridgeableToken_ from the the **Select an Item **dropdown
* 2\) Enter in the **\_token** address: `0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf`. This is the DAOstack token contract.
* 3\) Click **Write.**

![](</img/specs/bridges/image-26.png>)

4\. Check the gas price, then **Submit** the transaction through the web3 wallet extension and wait until it is included in the chain.
