---
title: OmniBridge Basics
description: The Omnibridge can be used to bridge ERC-20 tokens between Ethereum and Gnosis, Binance Smart Chain and Gnosis, and the POA Network and Gnosis.
keywords: [omnibridge, token bridge, gnosis, bsc, ethereum]
---

# OmniBridge

:::info
The Legacy OmniBridge and the legacy OmniBridge UI are now deprecated but still available, use it at your own risk. The OmniBridge UI can be accessed here: https://omni.legacy.gnosischain.com/bridge
:::
The Omnibridge can be used to bridge ERC-20 tokens between Ethereum and Gnosis. The first time a token is bridged, a new ERC677 token contract is deployed on GC with an additional suffix to differentiate the token. It will say "token name on xDai", as this was the original chain name prior to re-branding. If a token has been bridged previously, the previously deployed contract is used. The requested token amount is minted and sent to the account initiating the transfer (or an alternative receiver account specified by the sender).

- [Tokenbridge Docs](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/ui-to-transfer-tokens)

## Transfer any ERC-20 token from Ethereum to Gnosis

It is possible to use the [Gnosis Bridge](https://bridge.gnosischain.com) to transfer any ERC20 from Ethereum to xDai. Any user can initiate this initial transfer. Once the token exists on Gnosis, it can be transferred back and forth using the same UI.

### Token Transfer

In this example, we transfer the Basic Attention Token (BAT) from Ethereum to xDai. When this process was started, this token does not yet exist on Gnosis. It takes less than 5 minutes and some ETH for gas fees.

1. Go to the [Legacy OmniBridge UI](https://omni.legacy.gnosischain.com/bridge)

- Connect your wallet to the Ethereum Mainnet
- Select the token you want to transfer (here we select BAT) and enter the amount
- Click Unlock and approve the account interaction.

:::note
These screenshots were taken back when Basic Attention Token (BAT) was first bridged. The steps are the same, but note that the url is old and is now https://omni.legacy.gnosischain.com/bridge
:::
![](/img/bridges/omni-tokentransfer1.jpg) 2. Confirm the transaction to approve
![](/img/bridges/omni-tokentransfer2.jpg) 3. Once transaction approval is complete, you can now Transfer BAT to BAT on xDai. Click Transfer.
![](/img/bridges/omni-tokentransfer3.jpg) 4. Press Confirm to approve the transfer and pay the gas fees. These may be expensive depending on network congestion. We recommend [checking current gas prices](https://ethgas.watch/). Because of high fees, it also may make sense to bridge over a larger amount of tokens in a single transaction rather than several smaller ones.
![](/img/bridges/omni-tokentransfer4.jpg) 5. The bridge transaction will begin to process. While you are waiting for block confirmations, you can click on the ALM monitor link to view progress of your transfer, or you can view the [ALM monitor here](https://alm-bridge-monitor.gnosischain.com/) and look up your transaction by the transaction hash.
![](/img/bridges/omni-tokentransfer5.jpg)  
Viewing the ALM app:  
![](/img/bridges/omni-tokentransfer6.jpg)
:::note
Back when BAT was first bridged, only 2/3 confirmations were required. Now the validator set has expanded so 4/8 confirmations are required.
::: 6. After a successful transfer, you can check the token on BlockScout to see that it exists. Check Bridged tokens at https://blockscout.com/xdai/mainnet/bridged-tokens.
![](/img/bridges/omni-tokentransfer7.jpg) 7. Note the contract address and be sure to [add the token to your wallet](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H).

### Switch Bridges and Networks in the UI

#### Bridges

The OmniBridge UI supports several bridges. To switch chains, click on the Bridge Selector to choose. Once selected, a popup will instruct you to change networks in MetaMask. Click the buttons directly in the popup to complete the process.

1. Choose from selector
   ![](/img/bridges/omni-switchnetwork1.png)
2. Click to switch to target network (Binance Smart Chain in the screenshot)
   ![](/img/bridges/omni-switchnetwork2.png)
3. Click approve to add the network to MetaMask. If you get a warning that the network details don't match, it's likely ok. Be sure to check [chainlist.org](https://chainlist.org/) to verify the network details just in case.
   ![](/img/bridges/omni-switchnetwork3.png)
4. Click "Switch Network" to allow the site to switch the network.
   ![](/img/bridges/omni-switchnetwork4.png)
5. UI should display that you are connected to the new chain. Your wallet address will now change from being highlighted red to blue.
   ![](/img/bridges/omni-switchnetwork5.png)

#### Networks

When switching between networks within the same bridge, press the arrows icon in the top middle, then confirm the network switch in MetaMask.
![](/img/bridges/omni-switchnetwork6.png)

## Transfer Tokens without the UI

The instructions below use the Etherscan UI and the Blockscout UI to demonstrate the token transfer process.
There is [Legacy OMNIBRIDGE UI](https://omni.legacy.gnosischain.com/bridge) also available which calls the methods of the multi-token mediators contracts described below.

### General Case: ERC-20 Token Transfer

The general case describes a "pure" ERC20 token. For tokens compatible with ERC677 and ERC827 token standards the steps may be simplified - see the [separate section below](#simplification-for-erc677erc827-tokens).

#### Ethereum -> Gnosis Chain

The steps below assume:

- The account performing the actions owns some amount of an ERC20 token on Ethereum.
- The account is funded with some ether to cover gas fees.
- The MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for Etherscan.  
  For demonstration purposes we transfer Sai tokens.
  ![](/img/bridges/omni-erc20manual1.png)

1. **Approve the mediator contract to transfer tokens.** The mediator contract uses the `transferFrom` functionality of the ERC20 token contract to lock the tokens; it must be explicitly approved to perform this operation.
   ![](/img/bridges/omni-erc20manual2.png)
   First, connect to the Web3 provider (MetaMask or other). Next, click on Write Contract and go to the approve method. Enter the following:
   `guy (address)` field: the mediator contract address on Ethereum (`0x88ad09518695c6c3712AC10a214bE5109a655671`)
   `wad (uint256)`: the amount of tokens to transfer in wei
   ![](/img/bridges/omni-erc20manual3.png)
   Press the "Write" button to send the transaction.
   ![](/img/bridges/omni-erc20manual4.png)
   The wallet window will appear. Gas price can be adjusted to speed up transaction verification. After the transaction is confirmed in the wallet, it is necessary to wait for verification. Depending on the gas price specified and traffic congestion it can take several seconds to several minutes.
2. **Initiate the transfer request.**  
   Copy the contract address before proceeding:
   ![](/img/bridges/omni-erc20manual5.png)
   Next, open the mediator contract ([`0x88ad09518695c6c3712AC10a214bE5109a655671`](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671)) in Etherscan.
   ![](/img/bridges/omni-erc20manual6.png)
   The mediator contract is a proxy contract; Click contract then click the "Write as Proxy" tab.
   ![](/img/bridges/omni-erc20manual7.png)
   Since you are opening a new contract in Etherscan, you will connect to the Web3 provider (your wallet of choice) again. Then, in the `relayTokens` method enter the token contract address and the amount of tokens to transfer.
   ![](/img/bridges/omni-erc20manual8.png)
   Press the "Write" button to send the transaction.
   ![](/img/bridges/omni-erc20manual9.png)  
   The MetaMask/NiftyWallet will appear and the gas price can be adjusted to speed up the transaction verification. Once the transaction is confirmed in MetaMask, wait for confirmation. Depending on the gas price specified and traffic congestion it could take from several seconds to several minutes.
   Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for 8 additional blocks. Then, they will send confirmations to Gnosis chain to invoke the multi-token mediator contract and complete the tokens transfer.
   You can monitor the confirmation and AMB request execution with the [AMB Live Monitoring tool](https://alm-bridge-monitor.gnosischain.com/). Specify the hash (tx id) of the transaction used to call `relayTokens` in the ALM entry page to check the status of the AMB request initiated by this transaction in real time. If the AMB request is executed successfully:

- **If token has not been transferred with AMB before:** If this is the first transaction for this particular token using the AMB, a new ERC677 token contract will be deployed to Gnosis. The token contract will be initialized with the same symbol and decimals as for the original token on Ethereum. The name of the new token will be extended with the letters "on xDai" (e.g. "Dai Stablecoin v1.0 on xDai"). At the end, the requested amount of tokens will be minted and sent to the account that called `relayTokens`.
- **If token has been previously transferred with AMB:** If If the ERC677 token has already been registered by the mediator for the original ERC20 token, deployment of the contract will be skipped but the requested amount of tokens will be minted and sent to the account that called `relayTokens`.
  Once the process is complete and indexed by BlockScout, it is possible to find the token contract on Gnosis Chain. Check out the [Bridged token registry](https://blockscout.com/xdai/mainnet/bridged-tokens) to view it.

#### Gnosis -> Ethereum

The steps below assume that the account performing the actions is funded with some xDai to cover gas fees.  
Also, the MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for BlockScout.
:::info
Make sure that the token contract is verified in BlockScout. Token contracts deployed as part of the multi-token mediator operations are not verified automatically, so if the token does not allow read and write in the block explorer, [follow the steps](hhttps://docs.blockscout.com/for-users/verifying-a-smart-contract) to verify the contract before starting.
:::

1. **Call the transferAndCall method to transfer tokens**
   The token contract deployed by the mutli-token mediator supports the ERC677 standard, so instead of calling `approve` and `relayTokens`, a single method `transferAndCall` can be used to transfer tokens to the mediator contract and notify it regarding this action at the same time.
   Go to the "Write Proxy" tab of the token contract in BlockScout
   ![](/img/bridges/omni-gno-eth-manual1.png)
   In the transferAndCall method enter the multi-token mediator contract address on Gnosis chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`), amount of tokens to transfer, and "0x" in the \_data field. Press Write to send the transaction.
   ![](/img/bridges/omni-gno-eth-manual2.png)
   The MetaMask window will appear. Gas price should be 1 GWei, adjust if needed. Once the transaction is confirmed in MetaMask, wait for verification by the Gnosis chain validators. This is typically completed in a few seconds.
   Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for one more block. After that, they will collect confirmations on Gnosis chain and transfer them to Ethereum. The transaction sent by a validator to Ethereum will execute the request to unlock the tokens.  
   You can monitor this process using the [AMB Live Monitoring tool](https://alm-bridge-monitor.gnosischain.com/). Specify the hash (tx id) of the transaction used to call transferAndCall in the ALM entry page and it will check the status of the AMB request initiated by this transaction in real time. The requested amount of tokens minus any fees will be unlocked on Ethereum.

#### Simplification for ERC677/ERC827 tokens

If the token on Ethereum is ERC677 or ERC827 compatible it is possible to omit the approve method call and only call the `transferAndCall` method in the token contract.
:::note
This example uses the STAKE token, [whose utility will be depreciated after the merge of xDAI/Gnosis](https://forum.gnosis.io/t/gip-16-gnosis-chain-xdai-gnosis-merge/1904). However, the token will still exist and these steps are still relevant.
:::
Below is example with the STAKE token contract:
![](/img/bridges/omni-erc677-simplification1.png)  
Click Write Contract and specify the multi-token mediator contract address on Ethereum (0x88ad09518695c6c3712AC10a214bE5109a655671) as the recipient of the tokens, the amount of tokens in wei the "value" field, and `0x` in the "data" field. Click Write to execute.
![](/img/bridges/omni-erc677-simplification2.png)

#### Simplification for token transfers from the Gnosis Chain side

:::danger
Do Not Use the `transfer` method to send tokens to the multi-token mediator on Ethereum. It will lead to loss of tokens.
:::
The token contact deployed on Gnosis Chain is a customized version of ERC677 standard. It contains the changes that allow calling the transfer method to withdraw tokens from Gnosis instead of `transferAndCall`. So, it is enough to specify the multi-token mediator contract address on Gnosis chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`) as the recipient and amount of tokens to initiate request to transfer tokens back to Ethereum.

:::warning
The method described above works only for tokens deployed by the multi-token mediator on Gnosis chain.
:::

## Bridging Tokens Minted on Gnosis

Tokens minted natively on Gnosis Chain are now available to bridge to Ethereum. Note that you will need to pay gas costs for the destination chain (which can be quite high for Ethereum) with the destination currency (such as ether) when bridging.
Bridging requires 2 steps:

1. Unlock the Token (allow the application to transfer)
2. Request the Transfer (requires 2 transactions, 1 from sending chain and the 2nd on destination chain to claim)
   Please see the [previous section on bridging from Gnosis to Ethereum](#gnosis---ethereum) for specific instructions, as the steps are the same.
