---
title: Binance Smart Chain
description: The Binance Smart Chain (BSC) Omnibridge allows users to move ERC20 tokens between Gnosis Chain and BSC.
keywords: [bsc, omnibridge, tokens, transfer]
---

# BNB Chain

:::danger
BSC to GC has been deprecated on Omnibridge UI. This page provides a way for user to bridge token back to "original" chain, where the canonical token contract is deployed.
:::
| Contract| Address|
|---|---|
|AMB (BSC)| [0x05185872898b6f94aa600177ef41b9334b1fa48b](https://bscscan.com/address/0x05185872898b6f94aa600177ef41b9334b1fa48b#readProxyContract) |
|AMB (GC)| [0x162e898bd0aacb578c8d5f8d6ca588c13d2a383f](https://gnosisscan.io/address/0x162e898bd0aacb578c8d5f8d6ca588c13d2a383f#readProxyContract)|
|Omnibridge (BSC) |[0xF0b456250DC9990662a6F25808cC74A6d1131Ea9](https://bscscan.com/address/0xf0b456250dc9990662a6f25808cc74a6d1131ea9)|
| Omnibridge(GC)|[0x59447362798334d3485c64d1e4870fde2ddc0d75](https://gnosisscan.io/address/0x59447362798334d3485c64d1e4870fde2ddc0d75)|
| Validator Contract (BSC)|[0xFCE050274760d7C1AB809271Fb753dCEdac811b8](https://bscscan.com/address/0xFCE050274760d7C1AB809271Fb753dCEdac811b8)|
|Validator Contract(GC)|[0x6f00218e7D985FE1211f5d47B350708fF915A842](https://gnosisscan.io/address/0x6f00218e7d985fe1211f5d47b350708ff915a842#writeProxyContract)|

## Gnosis -> BSC

The steps below assume that the account performing the actions is funded with some xDai to cover gas fees.  
Also, the MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for BlockScout.
:::info
Make sure that the token contract is verified in BlockScout. Token contracts deployed as part of the multi-token mediator operations are not verified automatically, so if the token does not allow read and write in the block explorer, [follow the steps](https://docs.blockscout.com/for-users/verifying-a-smart-contract) to verify the contract before starting.
:::

1. **Call the transferAndCall method to transfer tokens**
   The token contract deployed by the mutli-token mediator supports the ERC677 standard, so instead of calling `approve` and `relayTokens`, a single method `transferAndCall` can be used to transfer tokens to the mediator contract and notify it regarding this action at the same time.
   Go to the "Write Proxy" tab of the token contract in BlockScout
   ![](/img/bridges/omni-gno-eth-manual1.png)
   In the transferAndCall method enter the multi-token mediator contract address on Gnosis chain (`0x59447362798334d3485c64d1e4870fde2ddc0d75`), amount of tokens to transfer, and "0x" in the \_data field. Press Write to send the transaction.
   ![](/img/bridges/omni-gno-eth-manual2.png)
   The MetaMask window will appear. Gas price should be 1 GWei, adjust if needed. Once the transaction is confirmed in MetaMask, wait for verification by the Gnosis chain validators. This is typically completed in a few seconds.
   Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for one more block. After that, they will collect confirmations on Gnosis chain and transfer them to BSC. The transaction sent by a validator to BSC will execute the request to unlock the tokens.

## BSC -> Gnosis Chain

The steps below assume:

- The account performing the actions owns some amount of an ERC20 token on BSC.
- The account is funded with some ether to cover gas fees.
- The MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for BinanceScan.  
  For demonstration purposes we transfer Sai tokens.
  ![](/img/bridges/omni-erc20manual1.png)

1. **Approve the mediator contract to transfer tokens.** The mediator contract uses the `transferFrom` functionality of the ERC20 token contract to lock the tokens; it must be explicitly approved to perform this operation.
   ![](/img/bridges/omni-erc20manual2.png)
   First, connect to the Web3 provider (MetaMask or other). Next, click on Write Contract and go to the approve method. Enter the following:
   `guy (address)` field: the mediator contract address on BSC (`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`)
   `wad (uint256)`: the amount of tokens to transfer in wei
   ![](/img/bridges/omni-erc20manual3.png)
   Press the "Write" button to send the transaction.
   ![](/img/bridges/omni-erc20manual4.png)
   The wallet window will appear. Gas price can be adjusted to speed up transaction verification. After the transaction is confirmed in the wallet, it is necessary to wait for verification. Depending on the gas price specified and traffic congestion it can take several seconds to several minutes.
2. **Initiate the transfer request.**  
   Copy the contract address before proceeding:
   ![](/img/bridges/omni-erc20manual5.png)
   Next, open the mediator contract ([`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9#readProxyContract)) in Etherscan.
   ![](/img/bridges/omni-erc20manual6.png)
   The mediator contract is a proxy contract; Click contract then click the "Write as Proxy" tab.
   ![](/img/bridges/omni-erc20manual7.png)
   Since you are opening a new contract in Etherscan, you will connect to the Web3 provider (your wallet of choice) again. Then, in the `relayTokens` method enter the token contract address and the amount of tokens to transfer.
   ![](/img/bridges/omni-erc20manual8.png)
   Press the "Write" button to send the transaction.
   ![](/img/bridges/omni-erc20manual9.png)  
   The MetaMask/NiftyWallet will appear and the gas price can be adjusted to speed up the transaction verification. Once the transaction is confirmed in MetaMask, wait for confirmation. Depending on the gas price specified and traffic congestion it could take from several seconds to several minutes.
   Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for 8 additional blocks. Then, they will send confirmations to Gnosis chain to invoke the multi-token mediator contract and complete the tokens transfer.

For more details, check out [here](README.md#transfer-tokens-without-the-ui)
