---
title: Using the xDai Bridge
---

## Basics

### Moving Dai from Ethereum to xDai on Gnosis


:::note
You will need some Dai to transfer AND some ETH for gas (transaction fees). [Bridge minimum/maximum amounts](../tokenbridge/xdai-bridge.md#fees--daily-limits) are set by the [bridge governors](../tokenbridge/xdai-bridge.md#bridge-governance). Bridge may take some time to update chain stats, try refreshing or waiting a minute if you receive any errors. You can also select a [different RPC](#custom-rpc) in the Settings dropdown.
:::

1. Go to the [xDai Bridge UI](https://bridge.gnosischain.com/) and connect your wallet to the Ethereum Mainnet. Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page. If you change the dropdown on the page (ETH Mainnet) but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. _Switching chains in Metamask_ however will automatically update the interface.
2. Enter the amount of Dai you would like to transfer to Gnosis, and click the Transfer button.
3. The web3 wallet window will open with transaction details. The default gas price is fine, if you would like a faster transaction you can increase. Click Submit or Confirm (depending on wallet) to initiate the transaction.
4.  Wait for the transaction confirmation (this can take some time if the network is super congested). The transaction is considered finalized after 8 blocks. To check on a pending transaction, click on the tx in the UI.
5. Once the initial transfer confirmation is successful, you will see consecutive 'Transfer Pending' notifications with:
    1. 8 of 8 block confirmations
    2. Countdown with continue until 1 block confirmation is left.
    3. Waiting for execution on Gnosis Chain side.
    4. Transfer Complete.
6. Click on View on BlockScout to see details about the transaction. If you scroll down you will see the `address` (your address where the xdai was sent), `value` (amount sent in wei), and `transactionHash`, which will match the hash from the initial transaction.

- [xDai Docs: How to bridge Dai from Ethereum to Gnosis](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/moving-dai-to-xdai)

### Moving xDai from Gnosis back to Dai on Ethereum
:::note
It is recommended to use Google Chrome and Metamask without Ad Blockers to complete this process.  
You will need a __small additional amount of xDai__ to process the first transaction, and an __additional amount of Eth__ to process the claim transaction on Ethereum.
:::

1. Go to the [xDai Bridge UI](https://bridge.gnosischain.com/) and connect your wallet to Gnosis Chain. Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page. If you change the dropdown on the page but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. _Switching chains in Metamask_ however will automatically update the interface.
2. Enter the amount of xDai you would like to transfer to Dai, and click the Request button. Note that there exists a [minimum amount](../tokenbridge/xdai-bridge.md#fees--daily-limits).
3. Confirm that you will need to perform 2 transactions, and will need xDai and Eth to complete the transfer. Click __Confirm__ to process the transaction on Gnosis Chain. 
4. Your web3 wallet window will open with transaction details. 
5. Wait for 8 block confirmations. You will see several popups with block confirmation info.
6. You will see a modal instructing you switch networks in your MetaMask (or other web3 wallet) to the Ethereum Mainnet.
7. After you switch networks the **Claim** button will appear. Press to proceed.
8. **Confirm** the second claim transaction in MetaMask (you will need some Eth for gas fees). Once processed, the Dai should be available in your wallet.
:::info
If you are interested in converting Dai to xDai without the UI see [how to use xDai Bridge without UI](#using-xdai-bridge-without-the-ui)
::: 

- [xDai Docs: How to bridge Dai from Gnosis to Ethereum](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/moving-xdai-to-dai)

### How To Use the xDai Bridge with Safe (formerly Gnosis Safe)
The xDai Bridge is included as a native Safe application, and Multisig Wallets on both Ethereum and Gnosis can interact with the bridge directly from the safe. The following instructions are for bridging **xDai to Dai** and vice versa. To bridge any other ERC20s, see the [Omnibridge + Gnosis Safe](using-omnibridge) instructions.
#### Initiating a Transaction

1. Go to your [Safe](https://gnosis-safe.io/app), login and connect. You will want to access the safe you are bridging from first (if moving xDai to Dai, start with the Gnosis one). __Safe addresses are distinct for each chain__. You can toggle which network you are using in the top right corner dropdown.


2. Go to **Apps** and find the [**xDai Bridge** App](https://gnosis-safe.io/app/share/safe-app?appUrl=https://bridge.xdaichain.com&chainId=1). Apps are typically displayed in alphabetical order. Click to access.


3. Open the application and interact with the bridge as you normally would to begin the transfer process. **** In the following example we bridge xDai on Gnosis chain to Dai on Ethereum. Note that there exists a [minimum amount](../tokenbridge/xdai-bridge.md#fees--daily-limits). Enter:

    1. xDai Amount
    2. Recipient Address
    3. Click Request.

 The Mainnet amount will show 0 DAI, as your Safe address on the Ethereum Mainnet is different and will not correspond with any Dai amount in a mainnet safe.

 :::danger
 When bridging with a safe you will set a **Recipient Address**. This may be a 2nd safe contract on the receiving chain or an individual address to receive the funds. The app will not let you proceed until you set the Recipient Address.
 :::


 Once you request to bridge xDai, you will see this warning reminding you about the claims process. Some xDai is required on one of the owner's wallets to initiate the transfer process, and Eth on Ethereum is required to claim bridged Dai.


4. On submission, the required number of safe owners each need to **submit** and **sign** to process the request. This does not require any xDai.

 The final signature owner (required number of signatures are set through the gnosis safe settings) then needs to confirm. Any owner can then execute the tx and pay for the initial transfer transaction with xDai once this quorum has been met. In this example, a second owner goes to the **transactions** menu in their safe to find **transaction needs your confirmation**.

5. Execute the transaction on Gnosis. A warning message may appear related to the gas limit which is set too low by the application. To fix, go to **Advanced options** and raise the gas limit. You can set it to be higher if desired - the transaction will only use the amount required within the set limit.

6. Once confirmed, you can close the safe application on xDai. Find the transaction details on BlockScout by clicking on the transaction in the **MetaMask Activity** tab or by following the transaction history in the safe. _Next, switch to a Safe on Ethereum to complete the claim process._

#### Claiming a Bridge Transaction on Ethereum

 In this example, we sent xDai to a Safe address on Ethereum. To claim the transaction and receive Dai, login to [Safe on Ethereum](https://gnosis-safe.io/app/) and open the xDai Bridge Application (located in the Apps menu).

1. You should see the claim screen, click the **History** button to begin the process. If you do not see this screen, click on **History** at the top of the bridge app.


2. Click the **Claim** button.

3. All required owners must confirm the transaction before it is processed. Once the required signatures are collected, an owner can claim the transaction. The claim will require Eth, and can be completed anytime if the current prices are too high. Once completed, you can find the Etherscan link in your MetaMask Activity tab or the pending transaction pop-up.

- [xDai Docs: How to use the xDai Bridge in Gnosis Safe](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/xdai-bridge-+-gnosis-safe-app)

## Alternate Receiver

The feature _Alternative Receiver_ has integrated in the contracts of the xDai bridge as part of [an upgrade](https://forum.poa.network/t/migration-of-the-xdai-tokenbridge-completed/3212). With this feature it becomes possible to transfer tokens through the bridge to any account by very simple actions. It means that Alice can send Dai to Bob’s account on Gnosis chain in one transaction, and Bob can send xDai to Clare’s account on the Ethereum Mainnet in one transaction too.

Due to different nature of tokens on two sides of the xDai bridge the operations to transfer assets to an alternative receiver from one chain to another differ as well.


The xDai Bridge Alternative Receiver functionality. The transfer requires 2 transactions, one to unlock the contract and a second to process the transaction. _Manual methods are described below this section._

### Dai to xDai

1. Go to [the bridge UI](https://bridge.gnosischain.com/) and connect your MetaMask Wallet.  
  
![](/img/bridges/xdai-alt-rec-dai-xdai1.png)

2. Determine **Single Tx Unlock** or **Infinite Tx Unlock**.  You may want to approve the transfer for a single transaction, or approve the contract to make unlimited transfers from this address to many other addresses. For a Single TX Unlock, proceed directly to step 3 below. For infinite TX unlock, complete the following.

    1. Go to Settings  
      
    ![](/img/bridges/xdai-alt-rec-dai-xdai2.png)

    2. Toggle Infinite Unlock and save. Close the modal and proceed to step 3.  
      
    ![](/img/bridges/xdai-alt-rec-dai-xdai3.png)


3. Click on **Advanced** and add the Recipients Address and the amount to Dai to transfer to Gnosis. Press **Unlock.**  
  
![](/img/bridges/xdai-alt-rec-dai-xdai4.gif)

4. Confirm the Unlock transaction in MetaMask.


5. Click to Transfer and Confirm the transaction.


6. Once the initial transaction is successful, you will see consecutive Transfer Pending notifications with:

    1. 8 of 8 block confirmations.....
    2. Countdown with continue until 1 block confirmation is left.
    3. Waiting for execution on Gnosis side.
    4. Transfer Complete.


7. The transfer is complete. Check the balance of the new account by clicking on the BlockScout link or accessing the address on Gnosis Chain.

### xDai to Dai

1. With xDai to Dai transfers you do not need to use the Unlock feature. Connect to Gnosis Chain in MetaMask.

    1. Click on Advanced.
    2. Enter the Address that will receive Dai.
    3. Enter Amount.
    4. Click Request.
![](/img/bridges/xdai-alt-rec-xdai-dai1.png)

2. Click Confirm to acknowledge you will need to perform 2 transactions.


3. Confirm the first tx in MetaMask.


4. Wait for 8 Block Confirmations on xDai.


5. Switch to **Ethereum Mainnet** in MetaMask. The Claim button will appear. Click **Claim**.



6. **Confirm** the second claim transaction in MetaMask. Once processed, the Dai should be available for the alternative receiver on Ethereum.


### Dai to xDai (Manual, Non-UI Method)

1. Open MetaMask and choose the Ethereum Mainnet.

2. Go to the Dai Token Contract -> Write Contract functionality in Etherscan.\
[https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract)

3. Connect to your Web3 Wallet (MetaMask).


4. Approve the bridge contract to perform operations with tokens:

* `usr(address)` -- the address of the xDai bridge contract in the Ethereum Mainnet: `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016`
* `wad(uint256)` -- the amount of tokens (in Wei) approved to send through the bridge (in this case 2 Dai): `2000000000000000000`
* Click **Write**


4. Confirm the transaction in the MetaMask and wait until it is included in the chain.


5. Initialize the xDai bridge contract interface in Etherscan. Here you will write to the proxy contract. [https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract)

6. You will see several  `relayTokens` methods. Use Method (1) to send to an alternate address. You can also use a second method (14) if the Dai deposit is performed by another contract of behalf of the user account (like a DEX). There are also 2 other `relayToken` methods (4), (22) that specify a `_token(address)`. These are not in use.

**relayTokens Method (1)**  

* `_receiver (address)` - address of the alternate receiver, the account that will be sent native tokens on Gnosis chain
* `_amount (uint256)` - the amount of tokens (in Wei) to transfer; must be less or equal amount of tokens approved for the bridge operations
* Click **Write**

**relayTokens Method(14)**

* `_sender (address)` - optional. Use when the Dai deposit is performed by another contract on behalf of a user account (e.g. by a DEX)
* `_receiver (address)` - address of the alternate receiver, the account that will be sent native tokens on Gnosis chain
* `_amount (uint256)` - the amount of tokens (in Wei) to transfer; must be less or equal amount of tokens approved for the bridge operations
* Click **Write**


7. Submit the transaction in the MetaMask and wait until it is included in the chain.

8. The xDai bridge will take some time to relay the deposit request to Gnosis chain. Once complete, the balance of the `_receiver`account will increase with the corresponding amount of xDai.

### xDai to Dai (Non-UI Method)


1. Go to the [xDai bridge proxy contract on Gnosis Chain](https://blockscout.com/xdai/mainnet/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/write-proxy#address-tabs)

2. Using the `relayTokens` method under the "Write Proxy" tab, enter the receiver address in the `_receiver` box, and the amount of xDai to transfer (in xDai - no need to convert to WEI). Connect your wallet and confirm the transaction. Copy the transaction hash.
![](/img/bridges/xDai-manual-xDai-Dai1.png)


3. Go to the [helper contract](https://blockscout.com/xdai/mainnet/address/0x2D51EAa266eafcb59bB36dD3c7E99C515e58113A/read-contract#address-tabs). In the `getMethodHash()` method, enter the transaction hash from the previous step, the recipient address, and the amount being transferred. When entering the amount, you can use that little "+" icon to add the zeroes, as the amount needs to be entered in wei. Use the 10^18 option to save yourself some typing. Do not include any fees, only the amount to send. Copy the message hash after clicking query.
![](/img/bridges/xDai-manual-xDai-Dai-getMsgHash.png)

4.  Paste the message hash from the previous step into the `getMessage()` method. If you receive 0x0 it means either the bridge oracles did not send a confirmation for the withdrawal yet or the data entered in the step 3 is incorrect. Double check the info and if it is correct you will eventually receive the message.
![](/img/bridges/xDai-manual-xDai-Dai-getMsg.png)
5. Once you receive the message, use the message hash from step 3 and query the `getSignatures()` method with it. It should return a blob packed with the signatures provided by the validator. If enough signatures haven't been collected yet, then the query could fail. If this happens, waiting a few minutes should fix it.
![](/img/bridges/xDai-manual-xDai-Dai-getSignatures.png)

5. Copy and paste the signature blob and the output from step 4 into the [Ethereum proxy contract](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract)'s `executeSignatures` method (you will need some Eth for gas). Connect your wallet and click write. After the transaction processes, the funds should appear in the receiver wallet.
![](/img/bridges/xDai-manual-xDai-Dai-execSignatures.png)
- [xDai Docs: How to bridge Dai to a different address on Gnosis](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/alternate-receiver-send-dai-to-another-xdai-address)
- [xDai Docs: Alternative Receiver for the xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/using-the-xdai-bridge/alternative-receiver-for-the-xdai-bridge)
## Debugging Bridge Errors

- [xDai Docs: How to find the transaction hash for a xDai Bridge Transaction](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/find-a-transaction-hash)
- [xDai Docs: How to view see pending xDai bridge transactions to your Gnosis address](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/viewing-inbound-transactions)
- [xDai Docs: How to troubleshoot xDai bridge transactions](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/troubleshooting)

## Custom RPC

- [xDai Docs: How to bridge using a custom RPC Endpoint](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/use-alternate-or-custom-json-rpc-endpoints)

## Interacting with Bridge Contracts
### Bridge Dai by interacting directly with the xDai Bridge Contract
- [xDai Docs: How to bridge Dai by interacting directly with the xDai Bridge Contract](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/transfer-sai-dai-without-the-ui-using-web3-or-mobile-wallet)
### Using xDai Bridge without the UI
- [xDai Docs: How to use xDai Bridge without the UI](https://docs.tokenbridge.net/xdai-bridge/using-the-xdai-bridge/how-to-use-xdai-bridge-without-ui)



