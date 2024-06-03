---
title: Using the xDai Bridge
description: Complete guide on how to use the xdai bridge to flow dai to Gnosis or xdai to Ethereum
keywords: [xdai bridge, token bridge, ethereum, gnosis, gnosis bridge]
---

## xDai Bridge

### Moving Dai from Ethereum to xDai on Gnosis

:::note
You will need some Dai to transfer AND some ETH for gas (transaction fees). [Bridge minimum/maximum amounts](../../Token%20Bridge/xdai-bridge.md#fees--daily-limits) are set by the [bridge governors](../../Token%20Bridge/xdai-bridge.md#bridge-governance). Bridge may take some time to update chain stats, try refreshing or waiting a minute if you receive any errors. You can also select a [different RPC](#custom-rpc) in the Settings dropdown.
:::


1. Go to the [Legacy xDai Bridge UI](https://bridge.legacy.gnosischain.com/) and connect your wallet to the Ethereum Mainnet. Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page. If you change the dropdown on the page (ETH Mainnet) but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. _Switching chains in MetaMask_ however will automatically update the interface.
2. Enter the amount of Dai you would like to transfer to Gnosis, and click the Transfer button.
3. The web3 wallet window will open with transaction details. The default gas price is fine, if you would like a faster transaction you can increase. Click Submit or Confirm (depending on wallet) to initiate the transaction.
4. Wait for the transaction confirmation (this can take some time if the network is super congested). The transaction is considered finalized after 8 blocks. To check on a pending transaction, click on the tx in the UI.
5. Once the initial transfer confirmation is successful, you will see consecutive 'Transfer Pending' notifications with:
   1. 20 of 20 block confirmations
   2. Countdown with continue until 1 block confirmation is left.
   3. Waiting for execution on Gnosis Chain side.
   4. Transfer Complete.
6. Click on View on BlockScout to see details about the transaction. If you scroll down you will see the `address` (your address where the xdai was sent), `value` (amount sent in wei), and `transactionHash`, which will match the hash from the initial transaction.

### Moving xDai from Gnosis back to Dai on Ethereum

:::note
It is recommended to use Google Chrome and MetaMask without Ad Blockers to complete this process.  
You will need a **small additional amount of xDai** to process the first transaction, and an **additional amount of Eth** to process the claim transaction on Ethereum.
:::

1. Go to the [Legacy xDai Bridge UI](https://bridge.legacy.gnosischain.com/) and connect your wallet to Gnosis Chain. Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page. If you change the dropdown on the page but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. _Switching chains in MetaMask_ however will automatically update the interface.
2. Enter the amount of xDai you would like to transfer to Dai, and click the Request button. Note that there exists a [minimum amount](../../Token%20Bridge/xdai-bridge.md#fees--daily-limits).
3. Confirm that you will need to perform 2 transactions, and will need xDai and Eth to complete the transfer. Click **Confirm** to process the transaction on Gnosis Chain.
4. Your web3 wallet window will open with transaction details.
5. Wait for 8 block confirmations. You will see several popups with block confirmation info.
6. You will see a modal instructing you switch networks in your MetaMask (or other web3 wallet) to the Ethereum Mainnet.
7. After you switch networks the **Claim** button will appear. Press to proceed.
8. **Confirm** the second claim transaction in MetaMask (you will need some Eth for gas fees). Once processed, the Dai should be available in your wallet.
   :::info
   If you are interested in converting Dai to xDai without the UI see [how to use xDai Bridge without UI](#using-xdai-bridge-without-the-ui)
   :::

### How To Use the xDai Bridge with Safe (formerly Gnosis Safe)

The xDai Bridge is included as a native Safe application, and Multisig Wallets on both Ethereum and Gnosis can interact with the bridge directly from the safe. The following instructions are for bridging **xDai to Dai** and vice versa. To bridge any other ERC20s, see the [Leacy Omnibridge + Gnosis Safe](../using-omnibridge/README.md) instructions.

#### Initiating a Transaction

1. Go to your [Safe](https://gnosis-safe.io/app), login and connect. You will want to access the safe you are bridging from first (if moving xDai to Dai, start with the Gnosis one). **Safe addresses are distinct for each chain**. You can toggle which network you are using in the top right corner dropdown.

2. Go to **Apps** and find the [**xDai Bridge** App](https://gnosis-safe.io/app/share/safe-app?appUrl=https://bridge.xdaichain.com&chainId=1). Apps are typically displayed in alphabetical order. Click to access.

3. Open the application and interact with the bridge as you normally would to begin the transfer process. \*\*\*\* In the following example we bridge xDai on Gnosis chain to Dai on Ethereum. Note that there exists a [minimum amount](../../Token%20Bridge/xdai-bridge.md#fees--daily-limits). Enter:

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

## More guides

- [Alternate Receiver](./alternate-receiver.md)
- [Custom RPC endpoint in Bridge](./custom-rpc.md)
- [Using Safe App](./safe.md)
- [Without UI](./no-ui.md)
- [Troubleshooting](./troubleshooting)
