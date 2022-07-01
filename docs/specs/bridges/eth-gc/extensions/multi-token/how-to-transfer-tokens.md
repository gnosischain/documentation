---
description: >-
  Step by step instructions how to transfer tokens by using features provided by
  Etherscan and BlockScout
---

# Transfer tokens manually

The instructions below use the Etherscan UI and the Blockscout UI to demonstrate the token transfer process.

There is an [OMNIBRIDGE UI](https://omni.xdaichain.com) now available which calls the methods of the multi-token mediators contracts described below.

## General Case: ERC20 Token Transfer

The general case describes a "pure" ERC20 token. For tokens compatible with ERC677 and ERC827 token standards the steps may be simplified - see [the separate section below](#simplification-for-erc-677-erc827-tokens).

### Ethereum -> Gnosis Chain

The steps below assume:

1. The account performing the actions owns some amount of an ERC20 token on Ethereum.
2. The account is funded with some ether to cover gas fees.
3. The MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for Etherscan.

For demonstration purposes we transfer Sai tokens.

![](</img/specs/bridges/image-56.png>)

#### Step 1: Approve the mediator contract to transfer tokens

The mediator contract uses `transferFrom` functionality of the ERC20 token contract to lock the tokens; it must be explicitly approved to perform this operation.

![](</img/specs/bridges/image-57.png>)

First, connect to the Web3 provider (MetaMask/NiftyWallet). Next, click on Write Contract and go to the `approve` method. Enter the following:

* guy (address) field:  the mediator contract address on Ethereum (`0x88ad09518695c6c3712AC10a214bE5109a655671`)
* wad (uint256):  the amount of tokens to transfer in wei

![](</img/specs/bridges/image-58.png>)

Press the "Write" button to send the transaction.

![](</img/specs/bridges/image-59.png>)

The MetaMask/NiftyWallet window will appear. Gas price can be adjusted to speed up transaction verification. After the transaction is confirmed in MetaMask/NiftyWallet, it is necessary to wait for verification by the block miners. Depending on the gas price specified and traffic congestion it can take several seconds to several minutes.

#### Step 2: Initiate the transfer request

Copy the contract address before proceeding.

![](</img/specs/bridges/image-60.png>)

Next, open the mediator contract ([`0x88ad09518695c6c3712AC10a214bE5109a655671`](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671))  in Etherscan.

![](</img/specs/bridges/image-61.png>)

The mediator contract is a proxy contract; Click contract then click the "Write as Proxy" tab.

![](</img/specs/bridges/image-62.png>)

Since you are opening a new contract in Etherscan,  you will connect to the Web3 provider (MetaMask/NiftyWallet) again. Then, in the `relayTokens` method enter the token contract address and the amount of tokens to transfer.

![](</img/specs/bridges/image-63.png>)

Press the "Write" button to send the transaction.

![](</img/specs/bridges/image-64.png>)

The MetaMask/NiftyWallet will appear and the gas price can be adjusted to speed up the transaction verification. Once the transaction is confirmed in the MetaMask/NiftyWallet, wait for the block miners to verify. Depending on the gas price specified and traffic congestion it could take from several seconds to several minutes.

Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for 8 additional blocks. Then, they will send confirmations to the Gnosis Chain to invoke the multi-token mediator contract and complete the tokens transfer.

You can monitor the confirmation and AMB request execution with [the AMB Live Monitoring tool](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application): [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com). Specify the hash (tx id) of the transaction used to call `relayTokens`  in the ALM entry page to check the status of the AMB request initiated by this transaction in real time

![The ALM entry page with the transaction id specifed](</img/specs/bridges/image-65.png>)

![The example of ALM response in case of successful execution of the AMB request](</img/specs/bridges/image-66.png>)

If the AMB request is executed successfully:

* **If token has not been transferred with AMB before**: If this is the first transaction for this particular token using the AMB,  a new ERC677 token contract will be deployed to the Gnosis Chain. The token contract will be initialized with the same symbol and decimals as for the original token on Ethereum. The name of the new token will be extended with the letters "on GC" (e.g. "Dai Stablecoin v1.0 on GC"). At the end, the requested amount of tokens will be minted and sent to the account that called `relayTokens`.
* **If token has been previously transferred with AMB:** If If the ERC677 token has already been registered by the mediator for the original ERC20 token, deployment of the contract will be skipped but the requested amount of tokens will be minted and sent to the account that called `relayTokens`.

Once the process is complete and indexed by BlockScout, it is possible to find the token contract on the Gnosis Chain (in the current example, Sai tokens has the symbol "DAI", that's why it is being used to discover the new token contract).

![](</img/specs/bridges/image-67.png>)

The link available on the token name will lead to the token view in BlockScout:

![](</img/specs/bridges/image-68.png>)

![](</img/specs/bridges/image-70.png>)

In token view you can see that the amount of tokens transferred from Ethereum was minted successfully (the sender is the address `0x0000000...000000`).

:::info
This view also informs the viewer that the token is bridged and provides a link to view the original token.
:::

At this point, the token can be added to MetaMask/NiftyWallet and operations (like transferring tokens, sending to other contracts etc) are available for use.

### Gnosis Chain -> Ethereum

The steps below assume that the account performing the actions is funded with some xDai to cover gas fees.

Also, the MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for BlockScout.

:::warning
Make sure that the token contract is verified in BlockScout. Token contracts deployed as part of the multi-token mediator operations are not verified automatically, so if the token does not allow read and write in the block explorer, follow [the steps to verify the contract](/specs/bridges/eth-gc/extensions/multi-token/new-token-contract-verification-in-blockscout) before starting.
:::

#### Step 1: transferAndCall method to transfer tokens

The token contract deployed by the mutli-token mediator supports the ERC677 standard, so instead of calling  `approve` and `relayTokens`, a single method `transferAndCall` can be used to transfer tokens to the mediator contract and notify it regarding this action at the same time.

Go to the "Write Proxy" tab of the token contract in BlockScout:

![](</img/specs/bridges/image-72.png>)

![](</img/specs/bridges/image-73.png>)

In the transferAndCall method enter the multi-token mediator contract address on the Gnosis Chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`), amount of tokens to transfer, and "0x" in the `_data` field. Press Write to send the transaction.

![](</img/specs/bridges/image-74.png>)

The MetaMask/NiftyWallet window will appear. Gas price should be 1 GWei, adjust if needed. Once the transaction is confirmed in the MetaMask/NiftyWallet, wait for verification by the Gnosis Chain validators. This is typically completed in a few seconds.

Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for one more block. After that, they will collect confirmations in the Gnosis Chain and transfer them to Ethereum. The transaction sent by a validator to Ethereum will execute the request to unlock the tokens.

You can monitor this process using [the AMB Live Monitoring tool](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application): [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com). Specify the hash (tx id) of the transaction used to call `transferAndCall` in the ALM entry page and it will check the status of the AMB request initiated by this transaction in real time:

![](</img/specs/bridges/image-75.png>)

The requested amount of tokens - reduced by the fee amount - will be unlocked on Ethereum.

## Simplification for ERC677/ERC827 tokens

If the token on Ethereum is ERC677 or ERC827 compatible it is possible to omit the `approve` method call and only call the `transferAndCall` method in the token contract.

Below is example with the STAKE token contract:

![](</img/specs/bridges/image-76.png>)

Click Write Contract and specify the multi-token mediator contract address on Ethereum (`0x88ad09518695c6c3712AC10a214bE5109a655671`)as the recipient of the tokens, the amount of tokens in wei the "value" field, and 0x in the "data" field. Click Write to execute.

![](</img/specs/bridges/image-77.png>)

## Simplification for token transfers from the GC side

:::danger
Do Not Use the `transfer` method to send tokens to the multi-token mediator on Ethereum. It will lead to loss of tokens.
:::

The token contact deployed on the Gnosis Chain is a customized version of ERC677 standard. It contains [the changes](https://github.com/poanetwork/tokenbridge-contracts/blob/e09bd71bb67cf2ebce3cd7a4ec7130beea733018/contracts/ERC677BridgeToken.sol#L58-L62) that allow calling the `transfer` method to withdraw tokens from the Gnosis Chain instead of `transferAndCall`. So, it is enough to specify the multi-token mediator contract address on the Gnosis Chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`) as the recipient and amount of tokens to initiate request to transfer tokens back to Ethereum.

:::caution
The method described above works only for tokens deployed by the multi-token mediator in the Gnosis Chain.
:::

