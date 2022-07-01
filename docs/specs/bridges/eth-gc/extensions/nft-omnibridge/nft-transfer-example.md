---
description: >-
  Use the NFT OmniBridge extension to transfer ERC721 NFTs between Gnosis Chain and
  Ethereum
---

# ERC721-based NFT Transfer Example

The NFT extension is operational, and a UI to transfer ERC721 NFTs is currently in development. For now, users can access and write to contracts using BlockScout and Etherscan. In the following example, we will bridge an NFT from Gnosis Chain to Ethereum and back using methods accessed through these block explorers.

:::warning
The NFT Extension is in Beta and transfers are performed at your own risk. NFT transfers can be very expensive and are not reversible once you initiate a transfer. Keep this in mind when deciding whether or not to bridge NFTs between Gnosis Chain and Ethereum.
:::

:::info
If you want to bridge an [ERC1155 NFT or NFT collection, instructions are here](/specs/bridges/eth-gc/extensions/nft-omnibridge/eip1155-based-nft-transfer-example).
:::

## -> Gnosis Chain to Ethereum

NFTs can be minted on Gnosis Chain very inexpensively. These NFTs can then be bridged to Ethereum using the NFT OmniBridge extension. The process consists of several steps.

1. Locate your NFT contract and tokenID.
2. Approve the mediator contract on Gnosis Chain to transfer your NFT.
3. Initiate a request to transfer.
4. Finalize the transfer request on Ethereum.

:::info
Token contracts must be verified in BlockScout to access write operations. If your token contract is not yet verified, [follow these steps for BlockScout](https://docs.blockscout.com/for-users/smart-contract-interaction/verifying-a-smart-contract).
:::

## 1) Locate your NFT

You will need the contract and token ID for your NFT to start. If you have trouble locating, you can enter your wallet address in the [BlockScout search bar](https://blockscout.com/poa/xdai) and go to the **Tokens** tab. Here you will see your ERC-721s.  Click on the contract to find more information including:

1. **ERC721 Contract Address**
2. **TokenID **you wish to transfer.

![](/img/specs/bridges/nftbridge1.png)

![](/img/specs/bridges/nft2.png)

## 2) Approve Contract to Transfer

ERC721`transferFrom` functionality allows the contract to transfer your token and must be approved.

1. Go to the token contract page and click on the Write Contract (or Write as Proxy if using a Proxy contract).
2. Press the **Connect to MetaMask** button to connect the address that holds the NFT
3. In the `approve` method, add the following:
   1. to (address): [`0x80199C8D04Af4c5cEB532adF4463b18BB4B59ffC`](https://blockscout.com/poa/xdai/address/0x80199C8D04Af4c5cEB532adF4463b18BB4B59ffC) \
      _This is the Gnosis Chain mediator contract._
   2. tokenId (uint256): TokenID for your ERC721\
      _May vary in size depending on how ids are created for this NFT. _
4. Click the **Write **button and confirm in MetaMask.

![](/img/specs/bridges/nft3.png)

## 3) Initiate theTransfer

Open the mediator contract ([`0x80199C8D04Af4c5cEB532adF4463b18BB4B59ffC`](https://blockscout.com/poa/xdai/address/0x80199C8D04Af4c5cEB532adF4463b18BB4B59ffC) )  in BlockScout and go to the "Write Proxy" tab. Metamask should still be connected.

![](/img/specs/bridges/nft5.png)

1. Scroll to the `relayToken` method and enter the NFT details from step 1.
   1. token (address) field: the ERC721 token contract address
   2. tokenId (uint256) field: the id of the token to transfer
2. Click the **Write** button and confirm in MetaMask.

![](/img/specs/bridges/nft6.png)

## 4) Finalize the Transfer on Ethereum

The Arbitrary Message Bridge oracles will use the Gnosis Chain to collect confirmations of the NFT token transfer. As soon as the confirmations are collected, they will be relayed to Ethereum for finalization.

1\) Find and copy the transaction hash id of the previous transaction (`relayToken`). You can find this in your MetaMask wallet in the Activity section. Click on the Contract Interaction and the Details icon to copy the tx hash.

![](/img/specs/bridges/nft7.png)

2\) Go to the the ALM Monitoring tool here: [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com) and paste in the tx hash.

![](</img/specs/bridges/nftalm1-1.png>)

You can follow the status on the monitor. Once 4 validators are successful you can execute the transaction.

![](/img/specs/bridges/nftalm2.png)

3\) Switch to **Ethereum Mainnet in MetaMask** and press the **Execute **button**. **Confirm the transaction in MetaMask**.**This will send the transaction to the Arbitrary Message Bridge contract with collected confirmations of the AMB oracles.

![](/img/specs/bridges/allmy.png)

:::info
Gas fee estimates to transfer may be prohibitively expensive. Note:

* Fees will likely be significantly lower than the estimate.
* You can try return later when fees are lower and execute then. There is no time limit for the transfer.
:::

Once the transaction is verified and included in a block, the token will be transferred to the same account on Ethereum that called the `relayTokens` method.

## -> Ethereum to Gnosis Chain

The following process is similar to the above using Etherscan rather than BlockScout to write transactions. You will not need to manually execute on the Gnosis Chain side, it is automated when bridging NFTs from Ethereum to Gnosis Chain.

## 1) Locate your NFT

You will need the contract and token ID for your NFT to start. If you have trouble locating, you can enter your wallet address in the [E](https://blockscout.com/poa/xdai)therscan search bar and go to Erc721 Tokn Txns (or view your tokens in the Token dropdown). You will need the following:

1. **ERC721 Contract Address**
2. **TokenID **you wish to transfer.

![](/img/specs/bridges/etherscan1.png)

## 2) Approve Contract to Transfer

ERC721`transferFrom` functionality in allows the contract to transfer your token and must be approved. You can access the write functionality with [Etherscan](https://etherscan.io).

1. Go to the token contract page and click on Contract ABI ->  Write Contract (or Write as Proxy if using a Proxy contract).
2. Press the **Connect to Web3** button to connect the address that holds the NFT
3. In the `approve` method, add the following:
   1.  to (address): [`0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480`](https://etherscan.io/address/0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480)

       _This is the mediator contract on the Ethereum side._
   2. tokenId (uint256): TokenID for your ERC721\
      _May vary in size depending on how ids are created for this NFT. _
4. Click the **Write **button and confirm in MetaMask.

![](/img/specs/bridges/etherscan-2.png)

## 3) Initiate theTransfer

Open the mediator contract ([`0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480`](https://etherscan.io/address/0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480))in [Etherscan ](https://etherscan.io)and go to Contract -> "Write as Proxy". Metamask should still be connected.

1. Scroll to the `relayToken` method and enter the NFT details from step 1.
   1. token (address) field: the ERC721 token contract address
   2. tokenId (uint256) field: the id of the token to transfer
2. Click the **Write** button and confirm in MetaMask. _(note that gas estimate is gas limit, cost will likely be lower)_

![](/img/specs/bridges/etherscan3.png)

## 4) Monitor progress and view in BlockScout when complete

The Arbitrary Message Bridge oracles will send confirmations to the Gnosis Chain. As soon as enough confirmations received, the transfer is executed automatically (does not need manual execution as opposed to GC -> Eth transfers).

You can monitor this progress with the ALM tool at [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com). Paste in the tx hash from the contract interaction in MetaMask to monitor.

![Copy and paste the hash into https://alm-xdai.herokuapp.com/](/img/specs/bridges/mm2.png)

Once the transaction is complete, click on the "Executed By" link in the [ALM](https://alm-xdai.herokuapp.com) to view more information about the transfer in BlockScout.

![Click to view more info](/img/specs/bridges/alm-1.png)

In BlockScout, click on the TokenID to see information more information on the token.

![Token Minting Transaction](</img/specs/bridges/bs-1-1.png>)

![Click the Metadata tab for details on the ERC721 in your account.](</img/specs/bridges/bs-2-metadata.png>)















