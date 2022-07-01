---
description: >-
  Use the NFT OmniBridge extension to transfer EIP1155 NFTs between Gnosis Chain and
  Ethereum
---

# EIP1155-based NFT Transfer Example

The NFT extension is operational, and a UI to transfer NFTs is currently in development. For now, users can access and write to contracts using BlockScout and Etherscan. In the following example, we will bridge an EIP-1155 NFT and an NFT collection from Gnosis Chain to Ethereum and back using methods accessed through these block explorers.

:::warning
The NFT Extension is in Beta and transfers are performed at your own risk. NFT transfers can be very expensive and are not reversible once you initiate a transfer. Keep this in mind when deciding whether or not to bridge NFTs between Gnosis Chain and Ethereum.
:::

:::info
If you want to bridge an [ERC721 NFT, instructions are available here](/specs/bridges/eth-gc/extensions/nft-omnibridge/nft-transfer-example).
:::

## Gnosis Chain to Ethereum

NFTs can be minted on Gnosis Chain inexpensively. These NFTs can then be bridged to Ethereum using the NFT OmniBridge extension. The EIP1155 standard supports batched transfers, so several tokens can be transferred in one bridge operation if these tokens are in the same contract.

The process consists of several steps.

1. Locate your NFT contract and tokenID(s).
2. Initiate a request to transfer.
3. Finalize the transfer request on Ethereum.

:::info
Token contracts must be verified in BlockScout to access write operations. If your token contract is not yet verified, [follow these steps for BlockScout](https://docs.blockscout.com/for-users/smart-contract-interaction/verifying-a-smart-contract).
:::

### 1) Locate your NFT

You will need the contract and token ID(s) for your EIP1155 NFT(s) to start. If you have trouble locating, you can enter your wallet address in the [BlockScout search bar](https://blockscout.com/poa/xdai) and unroll the tokens list in the Balance section. Here you will see your EIP1155s. Find one which you want to bridge and note its **TokenID**:

![](</img/specs/bridges/image-145.png>)

Click on the NFT link to go to the EIP1155 token page, and click the **View Contract** icon to go to the contract page.

![](</img/specs/bridges/image-148.png>)

On the token contract page go to the **Write Contract** or **Write Proxy** tab depending on the implementation:

![](</img/specs/bridges/image-149.png>)

### 2) Initiate the Transfer

Different methods are used depending on the number of tokens you are bridging (one token or a batch of tokens).

#### Transfer one token

1. Press the **Connect to MetaMask** button to connect the address that holds the NFT.
2. In the `safeTransferFrom` method, add the following:
   1. from (address): the address that holds the NFT
   2.  to (address): `0x2c0bF58cC87763783e35a625ff6a3e50d9E05337`

       _This is the Gnosis Chain mediator contract._
   3. id (uint256): TokenID for your EIP1155
   4. value (uint256): Number of tokens with this TokenID you will bridge, in most cases - `1`
   5. data (bytes): `0x`
3. Click the **Write **button and confirm in MetaMask.

![](</img/specs/bridges/image-151.png>)

#### Transfer several tokens

1. Press the **Connect to MetaMask** button to connect the address that holds the NFT
2. In the `safeBatchTransferFrom` method, add the following:
   1. from (address): the address that holds the NFT
   2.  to (address): `0x2c0bF58cC87763783e35a625ff6a3e50d9E05337`

       _This is the Gnosis Chain mediator contract._
   3. ids (uint256\[]): list of TokenIDs for your EIP1155 in square brackets delimited by commas
   4. values (uint256\[]): Number of tokens with this TokenID you will bridge, in most cases - `1`, in square brackets delimited by commas. The number of values must correspond to the number of TokenIDs
   5. data (bytes): `0x`
3. Click the **Write **button and confirm in MetaMask.

![](</img/specs/bridges/image-155.png>)

### 3) Finalize the Transfer on Ethereum

The Arbitrary Message Bridge oracles will use the Gnosis Chain to collect confirmations of the NFT token(s) transfer. As soon as the confirmations are collected, they will be relayed to Ethereum for finalization.

1\) Find and copy the transaction hash id of the previous transaction (`safeTransferFrom` or `safeBatchTransferFrom`). You can find this in your MetaMask wallet in the Activity section. Click on the Contract Interaction and the Details icon to copy the tx hash.

![](</img/specs/bridges/image-152.png>)

2\) Go to the the ALM Monitoring tool here: [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com) and paste in the tx hash.

![](</img/specs/bridges/nftalm1-1.png>)

You can follow the status on the monitor. Once 4 validators are successful you can execute the transaction.

![](</img/specs/bridges/image-153.png>)

3\) Switch to **Ethereum Mainnet in MetaMask** and press the **Execute **button**. **Confirm the transaction in MetaMask**.**This will send the transaction to the Arbitrary Message Bridge contract with collected confirmations of the AMB oracles.

![](</img/specs/bridges/image-157.png>)

:::info
Gas fee estimates to transfer may be prohibitively expensive. Note:

* Fees will likely be significantly lower than the estimate.
* You can try return later when fees are lower and execute then. There is no time limit for the transfer.
:::

Once the transaction is verified and included in a block, the token will be transferred to the same account on Ethereum that called the `safeTransferFrom`/`safeBatchTransferFrom`method.

## Ethereum to Gnosis Chain

The following process is similar to the above using Etherscan rather than BlockScout to write transactions. You will not need to manually execute on the Gnosis Chain side, it is automated when bridging NFTs from Ethereum to Gnosis Chain.

### 1) Locate your NFT

Etherscan does not provide a simple way to discover EIP1155 tokens owned by a particular account. So, you either need to know the address of the token contract initially deployed on the Mainnet or, in the case of bridged tokens, use the NFT OmniBridge to discover the address of the bridged token contract.

1. Open the **Read as Proxy** tab of the NFT OmniBridge contract: [https://etherscan.io/address/0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480#readProxyContract](https://etherscan.io/address/0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480#readProxyContract).
2. Using the address of the token contract on the Gnosis Chain, it is possible to call the  `bridgedTokenAddress` method and enter the address of the token contract on the Gnosis Chain here.
3. Press the **Query** button.
4. Press the address of the bridged token contract that appears in the response. Then go to the **Write Contract** / **Write as Proxy** tab in the **Contract** section.

![](</img/specs/bridges/image-156.png>)

![](</img/specs/bridges/image-158.png>)

![](</img/specs/bridges/image-159.png>)

### 2) Initiate the Transfer

Different methods are used depending on the number of tokens you are bridging.

#### Transfer one token

1. Press the **Connect to Web3** button to connect the address that holds the NFT
2. In the `safeTransferFrom` method, add the following:
   1. from (address): the address that holds the NFT
   2.  to (address): `0x6C8d0AFDDBD29a0954feEB73904923fC8f73C480`

       _This is the Ethereum Mainnet mediator contract._
   3. id (uint256): TokenID for your EIP1155
   4. amount (uint256): amount of this TokenID entities it is required to bridge, in most cases - `1`
   5. data (bytes): `0x`
3. Click the **Write **button and confirm in MetaMask.

![](</img/specs/bridges/image-160.png>)

#### Transfer several tokens

1. Press the **Connect to Web3** button to connect the address that holds the NFT
2. In the `safeBatchTransferFrom` method, add the following:
   1. from (address): the address that holds the NFT
   2.  to (address): `0x2c0bF58cC87763783e35a625ff6a3e50d9E05337`

       _This is the Ethereum Mainnet mediator contract._
   3. ids (uint256\[]): list of TokenIDs for your EIP1155 in square brackets delimited by commas (without spaces)
   4. amounts (uint256\[]): amount of this TokenID entities it is required to bridge, in most cases - `1`, in square brackets delimited by commas (without spaces), number of values must correspond to number of TokenIDs
   5. data (bytes): `0x`
3. Click the **Write **button and confirm in MetaMask.

![](</img/specs/bridges/image-163.png>)

### 3) Monitor progress and view in BlockScout when complete

The Arbitrary Message Bridge oracles will send confirmations to the Gnosis Chain. As soon as enough confirmations received, the transfer is executed automatically (does not need manual execution as opposed to GC -> Eth transfers).

You can monitor this progress with the ALM tool at [https://alm-xdai.herokuapp.com/](https://alm-xdai.herokuapp.com). Paste in the tx hash from the contract interaction in MetaMask to monitor.

![Copy and paste the hash into https://alm-xdai.herokuapp.com/](</img/specs/bridges/image-162.png>)

Once the transaction is complete, click on the "Executed By" link in the [ALM](https://alm-xdai.herokuapp.com) to view more information about the transfer in BlockScout.

![Click to view more info](</img/specs/bridges/image-164.png>)

In BlockScout, click on the TokenID to see information more information on the token.

![](</img/specs/bridges/image-165.png>)
