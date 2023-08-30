---
description: Set an alternate receiver when bridging tokens to and from Gnosis using the xdai bridge.
keywords: [xdai bridge, alternate receiver, gnosis bridge]
---

# Alternate Receiver

The feature _Alternative Receiver_ has integrated in the contracts of the xDai bridge as part of [an upgrade](https://forum.poa.network/t/migration-of-the-xdai-tokenbridge-completed/3212). With this feature it becomes possible to transfer tokens through the bridge to any account by very simple actions. It means that Alice can send Dai to Bob’s account on Gnosis chain in one transaction, and Bob can send xDai to Clare’s account on the Ethereum Mainnet in one transaction too.

Due to different nature of tokens on two sides of the xDai bridge the operations to transfer assets to an alternative receiver from one chain to another differ as well.

The xDai Bridge Alternative Receiver functionality. The transfer requires 2 transactions, one to unlock the contract and a second to process the transaction. _Manual methods are described below this section._

## Dai to xDai

1. Go to [the bridge UI](https://bridge.gnosischain.com/) and connect your MetaMask Wallet.

![](/img/bridges/xdai-alt-rec-dai-xdai1.png)

2. Determine **Single Tx Unlock** or **Infinite Tx Unlock**. You may want to approve the transfer for a single transaction, or approve the contract to make unlimited transfers from this address to many other addresses. For a Single TX Unlock, proceed directly to step 3 below. For infinite TX unlock, complete the following.

   1. Go to Settings

   ![](/img/bridges/xdai-alt-rec-dai-xdai2.png)

   2. Toggle Infinite Unlock and save. Close the modal and proceed to step 3.

   ![](/img/bridges/xdai-alt-rec-dai-xdai3.png)

3. Click on **Advanced** and add the Recipients Address and the amount to Dai to transfer to Gnosis. Press **Unlock.**

![](/img/bridges/xdai-alt-rec-dai-xdai4.gif)

4. Confirm the Unlock transaction in MetaMask.

5. Click to Transfer and Confirm the transaction.

6. Once the initial transaction is successful, you will see consecutive Transfer Pending notifications with:

   1. 20 of 20 block confirmations.....
   2. Countdown with continue until 1 block confirmation is left.
   3. Waiting for execution on Gnosis side.
   4. Transfer Complete.

7. The transfer is complete. Check the balance of the new account by clicking on the BlockScout link or accessing the address on Gnosis Chain.

## xDai to Dai

1.  With xDai to Dai transfers you do not need to use the Unlock feature. Connect to Gnosis Chain in MetaMask.

        1. Click on Advanced.
        2. Enter the Address that will receive Dai.
        3. Enter Amount.
        4. Click Request.

    ![](/img/bridges/xdai-alt-rec-xdai-dai1.png)

2.  Click Confirm to acknowledge you will need to perform 2 transactions.

3.  Confirm the first tx in MetaMask.

4.  Wait for 20 Block Confirmations on xDai.

5.  Switch to **Ethereum Mainnet** in MetaMask. The Claim button will appear. Click **Claim**.

6.  **Confirm** the second claim transaction in MetaMask. Once processed, the Dai should be available for the alternative receiver on Ethereum.

## Dai to xDai (Manual, Non-UI Method)

1. Open MetaMask and choose the Ethereum Mainnet.

2. Go to the Dai Token Contract -> Write Contract functionality in Etherscan.
   [https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract)

3. Connect to your Web3 Wallet (MetaMask).

4. Approve the bridge contract to perform operations with tokens:

- `usr(address)` -- the address of the xDai bridge contract in the Ethereum Mainnet: `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016`
- `wad(uint256)` -- the amount of tokens (in Wei) approved to send through the bridge (in this case 2 Dai): `2000000000000000000`
- Click **Write**

4. Confirm the transaction in the MetaMask and wait until it is included in the chain.

5. Initialize the xDai bridge contract interface in Etherscan. Here you will write to the proxy contract. [https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract)

6. You will see several `relayTokens` methods. Use Method (1) to send to an alternate address. You can also use a second method (14) if the Dai deposit is performed by another contract of behalf of the user account (like a DEX). There are also 2 other `relayToken` methods (4), (22) that specify a `_token(address)`. These are not in use.

**relayTokens Method (1)**

- `_receiver (address)` - address of the alternate receiver, the account that will be sent native tokens on Gnosis chain
- `_amount (uint256)` - the amount of tokens (in Wei) to transfer; must be less or equal amount of tokens approved for the bridge operations
- Click **Write**

**relayTokens Method(14)**

- `_sender (address)` - optional. Use when the Dai deposit is performed by another contract on behalf of a user account (e.g. by a DEX)
- `_receiver (address)` - address of the alternate receiver, the account that will be sent native tokens on Gnosis chain
- `_amount (uint256)` - the amount of tokens (in Wei) to transfer; must be less or equal amount of tokens approved for the bridge operations
- Click **Write**

7. Submit the transaction in the MetaMask and wait until it is included in the chain.

8. The xDai bridge will take some time to relay the deposit request to Gnosis chain. Once complete, the balance of the `_receiver`account will increase with the corresponding amount of xDai.

## xDai to Dai (Non-UI Method)

1. Go to the [xDai bridge proxy contract on Gnosis Chain](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6?tab=write_proxy)

2. Using the `relayTokens` method under the "Write Proxy" tab, enter the receiver address in the `_receiver` box, and the amount of xDai to transfer (in xDai - no need to convert to WEI). Connect your wallet and confirm the transaction. Copy the transaction hash.
   ![](/img/bridges/xDai-manual-xDai-Dai1.png)

3. Go to the [helper contract](https://gnosis.blockscout.com/address/0x2D51EAa266eafcb59bB36dD3c7E99C515e58113A?tab=write_proxy). In the `getMethodHash()` method, enter the transaction hash from the previous step, the recipient address, and the amount being transferred. When entering the amount, you can use that little "+" icon to add the zeroes, as the amount needs to be entered in wei. Use the 10^18 option to save yourself some typing. Do not include any fees, only the amount to send. Copy the message hash after clicking query.
   ![](/img/bridges/xDai-manual-xDai-Dai-getMsgHash.png)

4. Paste the message hash from the previous step into the `getMessage()` method. If you receive 0x0 it means either the bridge oracles did not send a confirmation for the withdrawal yet or the data entered in the step 3 is incorrect. Double check the info and if it is correct you will eventually receive the message.
   ![](/img/bridges/xDai-manual-xDai-Dai-getMsg.png)
5. Once you receive the message, use the message hash from step 3 and query the `getSignatures()` method with it. It should return a blob packed with the signatures provided by the validator. If enough signatures haven't been collected yet, then the query could fail. If this happens, waiting a few minutes should fix it.
   ![](/img/bridges/xDai-manual-xDai-Dai-getSignatures.png)

6. Copy and paste the signature blob and the output from step 4 into the [Ethereum proxy contract](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#writeProxyContract)'s `executeSignatures` method (you will need some Eth for gas). Connect your wallet and click write. After the transaction processes, the funds should appear in the receiver wallet.
   ![](/img/bridges/xDai-manual-xDai-Dai-execSignatures.png)

- [How to bridge Dai to a different address on Gnosis](/bridges/tutorials/using-xdai-bridge/alternate-receiver)
- [TokenBridge Docs: Alternative Receiver for the xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/using-the-xdai-bridge/alternative-receiver-for-the-xdai-bridge)
