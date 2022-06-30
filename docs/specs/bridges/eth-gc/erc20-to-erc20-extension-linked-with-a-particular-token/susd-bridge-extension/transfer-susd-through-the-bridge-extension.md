---
description: Instructions on relaying Synth sUSD tokens through the sUSD bridge extension
---

# Transfer sUSD between the ETH Mainnet and the Gnosis Chain using the sUSD bridge extension

One of the simplest ways to transfer Synth sUSD tokens through the bridge extension is to use [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet). MEW may be used for both types of operations: to deposit tokens to the Gnosis Chain and to withdraw tokens from the Gnosis Chain.

:::info
You will need a small amount of Ether for gas fees and an amount of sUSD to transfer for this tutorial. sUSD can be obtained through [Uniswap](https://uniswap.exchange) or other exchanges.
:::

## Deposit sUSD tokens to the Gnosis Chain

1. Activate and open a web3 wallet (like MetaMask or Nifty Wallet) and select the Ethereum Mainnet chain. Go to [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet) and select the option to login with a web3 wallet. Next:
2. 1\) Select the **Interact with Contract** item from the sidebar menu
3. 2\) Initialize the sUSD token contract interface by entering the Synth sUSD token contract address in the **Contract Address** field.`0x57ab1e02fee23774580c119740129eac7081e9d3`
4. 3\) Add the following JSON in the **`ABI/JSON Interface`** field:

```javascript
[{"constant":false,"inputs":[{"name":"spender","type":"address"},
{"name":"value","type":"uint256"}],"name":"approve",
"outputs":[{"name":"","type":"bool"}],"payable":false,
"stateMutability":"nonpayable","type":"function"}]
```

* 4\) Click **Continue**.

![](/img/specs/bridges/susd1.png)

1. Approve the mediator contract to perform operations with tokens:
2. 1\) Select `approve` from the **Select an Item** dropdown
3. 2\) Enter the **Spender** address `0x71F12d03E1711cb96E11E1A5c12Da7466699Db8D` . This is the mediator contract serving the bridge extension on the Ethereum Mainnet
4. 3\) Enter the **Value** - the amount of tokens (in Wei) to transfer.
5. 4\) Press Write to initiate the approval.

:::warning
Note that minimum and maximum transaction amounts are embedded into the bridge.

* **Min** per transaction: **$0.50 sUSD**
* **Max** per transaction: **$1,000.00 sUSD**
* Transaction limit **max per day**: **$3,000.00 sUSD**
:::

![](/img/specs/bridges/susd2.png)

1. Check that the Gas price is not set too high, then **Submit** the transaction with a web3 wallet (like MetaMask or Nifty wallet - here we use Nifty). Wait to proceed until it is included in the chain.

![](/img/specs/bridges/susd3.png)

1. Press the **Back** button. You will now initialize the mediator contract interface:
2. 1\) Enter the mediator contract address`0x71F12d03E1711cb96E11E1A5c12Da7466699Db8D`
3. 2\) Enter the following JSON in the **`ABI/JSON Interface`** field:

```javascript
[{"constant":false,"inputs":[{"name":"_receiver","type":"address"},
{"name":"_value","type":"uint256"}],"name":"relayTokens","outputs":[],
"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":false,"inputs":[{"name":"_from","type":"address"},
{"name":"_receiver","type":"address"},{"name":"_value",
"type":"uint256"}],"name":"relayTokens","outputs":[],"payable":false,
"stateMutability":"nonpayable","type":"function"}]
```

* 3\) Press **Continue**.

![](/img/specs/bridges/susd4.png)

5\) Choose an appropriate `relayTokens` method. There are two possible methods:

1. `relayTokens(address _receiver, uint256 _amount)`- Used to transfer sUSD tokens to a recipient in the Gnosis Chain.
2. `relayTokens(address _from, address _receiver, uint256 _amount)` - Used in scenarios when the sUSD tokens deposit is performed by another contract on behalf of a user account (e.g. by a DEX).
3. 1\) Select the **first** relayTokens method
4. 2\) `_receiver` - Enter the account that will receive the sUSD tokens on the Gnosis Chain. We assume the same account that deposits the token also receives the token, so enter the address (from your web3wallet & shown in MEW) you are initiating the transfer from.
5. 3\)`_amount` -- the amount of tokens (in Wei) to transfer; it must be less or equal amount of tokens approved for the bridge operations.
6. 4\) Press **Write**.

![](/img/specs/bridges/susd5.png)

1. Check the gas price, then Submit the transaction your web3wallet and wait until it is included in the chain.
2. It will require the AMB bridge a short amount time to relay the deposit request to the Gnosis Chain. After some time the balance of the account specified as `_receiver` in the `relayTokens` method call will increase. The result of the relay operation can be monitored [in Blockscout](https://blockscout.com/xdai/mainnet/tokens/0x4c36d2919e407f0cc2ee3c993ccf8ac26d9ce64e/token-transfers).

## View Balances

9\) To view your sUSD token balance on the Gnosis Chain using Nifty Wallet ( use a similar process with MetaMask):

* 1\) Select the **Gnosis Chain**.
* 2\) Click **Add Token.**
* 3\) Enter the sUSD GC Token Address:  `0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e`
* 4\) Click **Add.**

![](</img/specs/bridges/nifty1-1-2.png>)

![](/img/specs/bridges/nifty2.png)

:::success
You should now see your newly transferred sUSD balance on the Gnosis Chain.
:::

## Withdraw sUSD tokens from the Gnosis Chain

1. Choose the Gnosis Chain in the browser wallet extension and login to [MyEtherWallet (MEW)](https://www.myetherwallet.com/access-my-wallet). Select to the **Interact with Contract** item in the side navigation menu. (_note: you must have sUSD tokens in your wallet on the Gnosis Chain to proceed_)
2. Initialize the sUSD bridgeable token contract interface:
3. 1\) Add the token **Contract Address**`0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e` .
4. 2\) Add the following JSON in the **`ABI/JSON Interface`** field:

```javascript
[{"type":"function","stateMutability":"nonpayable","payable":false,
"outputs":[{"type":"bool","name":""}],"name":"transfer",
"inputs":[{"type":"address","name":"_to"},{"type":"uint256",
"name":"_value"}],"constant":false}]
```

* 3\) Click **Continue.**

![](/img/specs/bridges/send1.png)

1. Transfer the sUSD bridgeable tokens to the mediator contract:
2. 1\) Select transfer from the the **Select an Item** dropdown
3. 2\) Enter in the `_to` address:`0xD9a3039cfC70aF84AC9E566A2526fD3b683B995B` . This is the  mediator contract serving the bridge extension in the Gnosis Chain.
4. 3\) Enter the value to transfer in Wei in the `_value` field.
5. 4\) Click **Write.**

:::warning
Note that minimum and maximum transaction amounts are embedded into the bridge.

* **Min** per transaction: **$0.50 sUSD**
* **Max** per transaction: **$1,000.00 sUSD**
* Transaction limit **max per day**: **$3,000.00 sUSD**
:::

![](/img/specs/bridges/send2.png)

:::info
The `transfer` method of the bridgeable token contract will automatically notify the mediator contract about the new amount of tokens transferred to the mediator contract account. For this reason, no other action is required from the user side to finish the withdrawal request.
:::

1. Check the gas price, then **Submit** the transaction through the web3 wallet extension and wait until it is included in the chain.
2. It will require the AMB bridge some time to transfer tokens to the Ethereum Mainnet. After several minutes, the balance of the account specified as `_to` in the `transfer` method call will increase. The result of the relay operation can be monitored [in Etherscan](https://etherscan.io/token/0x57ab1e02fee23774580c119740129eac7081e9d3?a=0x71f12d03e1711cb96e11e1a5c12da7466699db8d), and should be viewable in your web3 wallet connected to the Ethereum Mainnet.
