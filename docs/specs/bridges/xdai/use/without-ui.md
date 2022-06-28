---
description: Transfer Dai to xDai and back again, without the UI
---

# Without the UI

:::success
There is no need to use the Bridge UI if you want transfer your DAI to xDai or xDai to DAI. The instructions below show how to relay your assets without the UI.
:::

## Transfer Dai from the Ethereum Mainnet to the Gnosis Chain

* Make a usual transfer of DAI tokens (`0x6b175474e89094c44da98b954eedeac495271d0f`) on the ETH Mainnet with any wallet software designed for ERC20 transfers (e.g. [NiftyWallet ](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?hl=en), [MyEtherWallet.com](http://myetherwallet.com), [TrustWallet](https://trustwallet.com)).
  * Use the Token Bridge address `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` as the recipient of the payment.
* Wait for transaction confirmation in the ETH Mainnet (transaction time depends on the gas price you setup for the transfer transaction and the network throughput).
* Wait for the relay confirmation by the bridge validators (time depends on the number of blocks  the bridge validators wait for to consider the chain finalized, currently set at  `8`).
* Check your balance on the Gnosis Chain.

![Sending Dai to xDai on Ethereum](/img/specs/bridges/screenshot_20191009-095817.jpg)

### Transfer xDai from the Gnosis Chain to the Ethereum Mainnet

:::info
The following demonstrates interaction with contract methods using BlockScout and Etherscan
:::

1\) Send xDai coins to the Token Bridge address `0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6` on the xDai Сhain using any wallet software.

2\) Wait for the transaction confirmation on the Gnosis Chain (5 seconds).

3\) Copy the transaction hash of the confirmation and connect to the Ethereum mainnet.

4\) Visit the helper contract: [https://blockscout.com/xdai/mainnet/address/0x6A92e97A568f5F58590E8b1f56484e6268CdDC51/read-contract](https://blockscout.com/xdai/mainnet/address/0x6A92e97A568f5F58590E8b1f56484e6268CdDC51/read-contract)

5\) In the `getMessageHash` method field add the following information from your originating transaction and press the Query button. The method will return a hashed message.

* DAI recipient (typically the transaction sender but may differ if the ‘relayTokens’ functionality is used)
* Value (in **Wei** - do not include fees, only amount sent (Wei converter at [http://eth-converter.com/](http://eth-converter.com))
* Originating transaction hash

6\) Copy the message hash and paste into the `getMessage` method. If you receive 0x0 it means either the bridge oracles did not send a confirmation for the withdrawal yet or the data entered in the step 3 is incorrect. Double check the info and if it is correct you will eventually receive the message.

7\) Once you receive the message, use the message hash again this time with the `getSignatures` method. It will return a blob with packed signatures provided by the validator. The method could fail if not enough signatures are collected.

![](/img/specs/bridges/blockscout1.jpg)

8\) Go to Etherscan and connect a web3 wallet: [https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract)

9\) Enter the message (from `getMessage` method above) and the signatures blob to the `executeSignatures` method, press the **Write** button and complete the transaction with a Web3 wallet. If the method reverts, the withdrawal was likely already executed. You can check all input for the recipient here: [https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f?a=0x](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f?a=0x)..., where the recipient's address follows after “a=“.

![](/img/specs/bridges/etherscan1.jpg)

Once you have written to the contract method, a View your **transaction** button will appear. Click to view the pending transaction.

![](/img/specs/bridges/etherscan3.jpg)

![A completed transaction](/img/specs/bridges/etherscan2.jpg)

:::success
Instructions migrated from the POA forum [https://forum.poa.network/t/how-to-relay-dai-stablecoins-without-usage-of-the-bridge-ui/1876](https://forum.poa.network/t/how-to-relay-dai-stablecoins-without-usage-of-the-bridge-ui/1876)
:::
