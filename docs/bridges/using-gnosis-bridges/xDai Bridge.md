---
title: Using xDai Bridge
description: Bridge DAI to xDAI and vice versa.
keywords:
  [amb bridge, arbitrary message bridge, using amb, bridge, gnosis bridge, omnibridge, OmniBridges]
---

:::note
You will need some Dai to transfer and some ETH for gas (transaction fees). Bridge minimum/maximum amounts are set by the bridge governors. Bridge may take some time to update chain stats, try refreshing or waiting a minute if you receive any errors. You can also select a different RPC in the Settings dropdown

:::

## Moving Dai from Ethereum to xDai on Gnosis

1.  Go to the xDai Bridge UI and connect your wallet to the Ethereum Mainnet.
2.  Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page.
- If you change the dropdown on the page (ETH Mainnet) but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. Switching chains in MetaMask however will automatically update the interface.
3.  Enter the amount of Dai you would like to transfer to Gnosis, and click the Transfer button.
4. The web3 wallet window will open with transaction details. The default gas price is fine, if you would like a faster transaction you can increase. Click Submit or Confirm (depending on wallet) to initiate the transaction.
5. Wait for the transaction confirmation (this can take some time if the network is super congested). The transaction is considered finalized after 8 blocks. To check on a pending transaction, click on the tx in the UI.

6. Once the initial transfer confirmation is successful, you will see consecutive 'Transfer Pending' notifications with:
    - 20 of 20 block confirmations
    - Countdown with continue until 1 block confirmation is left.
    - Waiting for execution on Gnosis Chain side.
    - Transfer Complete.

7. Click on View on BlockScout to see details about the transaction. If you scroll down you will see the address (your address where the xdai was sent), value (amount sent in wei), and transactionHash, which will match the hash from the initial transaction.


## Moving xDai from Gnosis back to Dai on Ethereum

:::note
It is recommended to use Google Chrome and MetaMask without Ad Blockers to complete this process.
You will need a small additional amount of xDai to process the first transaction, and an additional amount of Eth to process the claim transaction on Ethereum.

:::

1. Go to the xDai Bridge UI and connect your wallet to Gnosis Chain. Once connected, you will see your address populated in the header, and your DAI and xDai balance displayed on the page.

2. If you change the dropdown on the page but not in MetaMask, the interface will update but your wallet will not auto-connect to the chain. Switching chains in MetaMask however will automatically update the interface.

3. Enter the amount of xDai you would like to transfer to Dai, and click the Request button. Note that there exists a minimum amount.
4. Confirm that you will need to perform 2 transactions, and will need xDai and Eth to complete the transfer. Click Confirm to process the transaction on Gnosis Chain.
 - Your web3 wallet window will open with transaction details.
 - Wait for 8 block confirmations. You will see several popups with block confirmation info.
 - You will see a modal instructing you switch networks in your MetaMask (or other web3 wallet) to the Ethereum Mainnet.
 - After you switch networks the Claim button will appear. Press to proceed.
5.  Confirm the second claim transaction in MetaMask (you will need some Eth for gas fees). Once processed, the Dai should be available in your wallet.

:::info
If you are interested in converting Dai to xDai without the UI see how to use xDai Bridge without UI


:::