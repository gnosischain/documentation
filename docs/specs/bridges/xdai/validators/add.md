---
description: >-
  Instructions for current bridge validators who are adding an additional
  validator to the set.
---

# Add New Bridge Validator

After a ballot is finalized, the new validator is added to the bridge management multisignature wallets (one on each side of the bridge).

The submitter will execute these methods: `addValidator` and (optionally) `setRequiredSignatures` method. After encoding the data for each of these methods, it is sent to each contract (one on either side of the bridge) using the `submitTransaction` execution method.

**Multisignature wallet addresses (for reference):**

* **ETH Mainnet:** 0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd
* **Gnosis Chain:** 0x0d3726e5a9f37234d6b55216fc971d30f150a60f

:::info
**Before starting, current validators should determine (through Slack or other means):**

**1)** Who will add the new validator (the submitter)

**2)** Coordinate a time when the other validators will confirm the transaction, as the bridge will be stopped to complete the upgrade.

**3)** Ask the Gnosis team to add a new bridge validator to the Certifier contract and confirm it has been added. This enables the node to relay bridge transactions with zero gas price.
:::

## Steps to add a new bridge validator

1\) Use the addValidator method from the [BridgeValidators](https://raw.githubusercontent.com/poanetwork/poa-chain-spec/dai/abis/bridge/BridgeValidators.json)[ ABI](https://raw.githubusercontent.com/poanetwork/poa-chain-spec/dai/abis/bridge/BridgeValidators.json) and the new validator account to encode the data for the transaction. This can be accomplished in different ways, this example uses [https://abi.hashex.org/](https://abi.hashex.org/)

* Scroll down to enter the parameters manually
* 1\. Select ‘your function’ for function type and add `addValidator` function
* 2\. Select `address` for Argument, paste in the new bridge validator’s address
* 3\. Copy the example output. It should have a similar format to: `4d238c8e0000000000000000000000000d3726e5a9f37234d6b55216fc971d30f150a60f`

![Add in parameters manually and copy ABI](/img/specs/bridges/abi.png)

2\) Use Nifty Wallet (or another tool that can build transactions based on contract source code/ABI) to invoke the `submitTransaction` method of the multisig wallet contract. You will do this for the ETH Mainnet **and** the Gnosis Chain. The following example uses Nifty Wallet.

## SubmitTransaction

### **2.1 ETH Mainnet**

* a. Open Nifty Wallet, make sure you are on the Eth Mainnet, and select the **ETH Mainnet** contract account `0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd`. (Import Account -> Contract account -> Paste in Address). For additional instructions see [https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)
* b. Click **Execute Methods**, and choose the `submitTransaction` method
* c. Destination address is `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E`
* d. Value is 0
* e. Data is the bytecode generated in 2d. Add 0x before the value. In our example it is `0x4d238……..`
* f. Click **Next**

![Enter parameters in Nifty wallet](</img/specs/bridges/nifty1.png>)

* g. Choose the contract to execute this transaction. Select your **Bridge Validator** account and click Next.
* h. You should see a transaction confirmation popup to complete the process. Once the transaction is complete, identify the index of the transaction returned in the `Submission` event and make a note of it.

### **2.2 Gnosis Chain**

* a. Open Nifty Wallet, switch to the Gnosis Chain and go to **xDai** contract account `0x0d3726e5a9f37234d6b55216fc971d30f150a60f`. If you have not used this feature before and need to import the contract, see [https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)
* b. Click **Execute Methods**, and choose the `submitTransaction` method
* c. Destination address is `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d`
* d. Value is 0
* e. Data is the bytecode generated in 2d. Add 0x before the value. In our example, it is 0x4d238……..
* f. Click **Next**
* g. Choose the contract to execute this transaction. Select your **Bridge Validator** address.
* h. Once this is complete, identify the index of the transaction returned in the `Submission` event and make a note of it.

## setRequiredSignatures

3\) Use the `setRequiredSignatures` method from the [BridgeValidators](https://raw.githubusercontent.com/poanetwork/poa-chain-spec/dai/abis/bridge/BridgeValidators.json)[ ABI](https://raw.githubusercontent.com/poanetwork/poa-chain-spec/dai/abis/bridge/BridgeValidators.json) and the new validator account to encode the data for the transaction. This can be accomplished in different ways, this example uses [https://abi.hashex.org/](https://abi.hashex.org/)

* a. Scroll down to enter the parameters manually
  * b. Select ‘your function’ for function type and add `setRequiredSignatures` function
  * c. Select `Uint256` for Argument, paste in the number of required signatures to account for the new validator. This number should be at least a majority of validators, the current set of validators decides this number.
  * d. Example output should have a similar format `aec452390000000000000000000000000000000000000000000000000000000000000005`

4\) Complete steps as in #3, using the new ABI value with the `submitTransaction` method to send this transaction to both the ETH Mainnet and the Gnosis Chain.

5\) Share Submission event indexes for all transactions with current validators through the Slack channel or another means.

| Chain | Contract        | Method                | Index |
| ----- | --------------- | --------------------- | ----- |
| ETH   | 0xff1a8...Be2dd | addValidator          | 3     |
| ETH   | 0xff1a8...Be2dd | setRequiredSignatures | 5     |
| Gnosis  | 0x0d...a60f     | addValidator          | 2     |
| Gnosis  | 0x0d...a60f     | setRequiredSignatures | 4     |

6\) The current validators must then confirm these transactions on both sides of the bridge. Nifty Wallet (or another tool) may be used to confirm the transactions.

:::warning
_**All bridges must be stopped before the last required validator submits a signature, then restart after it is submitted,**_**\*** as this signature changes the value stored in the bridge contract. Validators need to coordinate here in order to stop and restart the bridge contracts.
:::

* a. Stop bridge instance `sudo service poabridge stop`
* b . Open Nifty Wallet, make sure you are on the Eth Mainnet, and select the **ETH Mainnet** contract account `0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd`
* c. Click Send, and choose the `confirmTransaction` method
* d. Select Index as transaction ID
* e. Choose your **Bridge Validator address** to execute the transaction
* f. Set the gas limit **two times larger** than the gas estimator suggests. As soon as enough confirmations are received, the method is invoked automatically.
* g. Repeat for the second method - ie `setRequiredSignature`
* h. Switch to the xDai network and select the xDai contract account `0x0d3726e5a9f37234d6b55216fc971d30f150a60f`
* i. Repeat steps b-f to confirm transactions on the Gnosis Chain.

7\) Restart the bridge after the last validator signature is submitted. `sudo service poabridge start`

:::success The new validator should now be added
:::

## Additional Details

* For more details regarding bridge contracts management, see [https://forum.poa.network/t/xdai-bridge-contracts-management/1777](https://forum.poa.network/t/xdai-bridge-contracts-management/1777)
* For more information on Nifty wallet smart contract interaction, see [https://forum.poa.network/t/nifty-wallet-now-supports-interactions-with-smart-contracts/1906](https://forum.poa.network/t/nifty-wallet-now-supports-interactions-with-smart-contracts/1906)
