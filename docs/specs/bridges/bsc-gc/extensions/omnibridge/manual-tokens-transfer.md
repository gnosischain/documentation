---
description: How to transfer tokens manually through the BSC-GC OmniBridge
---

# Manual tokens transfer (No UI)

The OmniBridge is a decentralized application. Tokens can be transferred through the extension without using a dedicated UI.

:::warning
Manual token transfers through the OmniBridge extension require that each step is performed properly. Funds may be lost if not performed properly. Proceed at your own risk.
:::

## BSC -> GC: Transfer from the Binance Smart Chain to the Gnosis Chain.

:::info
The instructions below uses [MyEtherWallet](https://www.myetherwallet.com) to interaction with the token contract. This is due to currently limitations of  [BscScan](https://bscscan.com) where some token contracts cannot be verified and interaction is not possible.\
\
_One could find more convenient ways to interact with the token contracts._
:::

1\. Login to [MyEtherWallet](https://www.myetherwallet.com). If MetaMask is used to login, the Binance Smart Chain must be [added to MetaMask](https://docs.binance.org/smart-chain/wallet/metamask.html) first.

![](</img/specs/bridges/image-96.png>)

2\. Choose "Interact with Contract" in the main menu

![](</img/specs/bridges/image-98.png>)

3\. Enter:

* Token Contract Address ([_Wrapped BNB_](https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c)_ is used in the example_) in the Binance Smart Chain
* Copy and paste the following ABI JSON to the form
* Press "Continue".

```javascript
[
  {
    "constant":false,
    "inputs":[
      {
        "name":"spender",
        "type":"address"
      },
      {
        "name":"value",
        "type":"uint256"
      }
    ],
    "name":"approve",
    "outputs":[
      {
        "name":"",
        "type":"bool"
      }
    ],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  }
]
```

![](</img/specs/bridges/image-100.png>)

4\. Choose the `approve` method from the dropdown list and fill in the following:

* "Spender" is the OmniBridge mediator contract [`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9)
* Value" is the amount of tokens that is going to be transferred through the bridge. The value is specified in Wei and must be [within the limits on the bridge operations](/specs/bridges/bsc-gc/extensions/omnibridge#transfer-limits).
* Press the "Write" button and confirm the transaction in your wallet (MetaMask or other).
* Wait until the transaction is included in a block.

![](</img/specs/bridges/image-101.png>)

5\. Go to the BscScan site to access the OmniBridge mediator on the Binance Smart Chain and go to "Write as Proxy" tab: [https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9#writeProxyContract](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9#writeProxyContract).

6\. Connect your Web3 wallet to the BscScan app, this will allow you to interact with the contract.

![](</img/specs/bridges/image-103.png>)

7\. Scroll down to the `relayTokens` method and fill the token contract address and value which is going to be sent through the bridge (this must be the same or less than the value specified in the `approve` method). \
\
Press the "Write" button and confirm the transaction in your web3 wallet. Wait for the transaction inclusion into the blockchain.

![](</img/specs/bridges/image-104.png>)

8\. Press to the "View your transaction" button to get the hash of the transaction. Reference this hash in [the AMB Live Monitoring (ALM) app](https://alm-bsc-xdai.herokuapp.com) to find the bridging process status.

9\. Press the link in the "Executed by" section of ALM to refer to the transaction in BlockScout that causes token transfer finalization (_3 minutes ago in the example below_).

![](</img/specs/bridges/image-105.png>)

In the "Tokens Transfers" tab in BlockScout you can see the amount of tokens transferred through the bridge and token receiver.

:::warning
The origin of the token will determine the operation mentioned. Token Origin:

* Binance Smart Chain: Token Minting
* Gnosis Chain: Token Transfer
:::

![](</img/specs/bridges/image-106.png>)

10\. Press the token symbol to get the address of the bridged token and add to your wallet if necessary.

![](</img/specs/bridges/image-107.png>)

![](</img/specs/bridges/image-108.png>)

## GC -> BSC: Transfer from the Gnosis Chain to the Binance Smart Chain

:::warning
The token transfer process from the Gnosis Chain to the Binance Smart Chain requires a user to send transactions on both chains. That is why the xDai native tokens and BNB native tokens are required to pay gas fees for these transactions.
:::

1\. Choose the Gnosis Chain in MetaMask. If it is not configured in MetaMask follow [these instructions](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup) to set it up.

2\. Use the [BlockScout site](https://blockscout.com/xdai/mainnet) to find the token you want to bridge.

![](</img/specs/bridges/image-109.png>)

3\. Go to the "Write Proxy" tab on the token contract page. Connect your web3 wallet to BlockScout.

![](</img/specs/bridges/image-110.png>)

4\. Scroll down to the "approve" method and fill data in the form where "spender" is the OmniBridge mediator contract [`0x59447362798334d3485c64D1e4870Fde2DDC0d75`](https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/transactions) and "value" is the amount of tokens to transfer through the bridge. The value is specified in Wei and must be [within the limits on the bridge operations](/specs/bridges/bsc-gc/extensions/omnibridge#transfer-limits). \
\
Press the "Write" button and confirm the transaction in your wallet. Wait until the transaction is included in a block.

![](</img/specs/bridges/image-111.png>)

5\. Switch to the OmniBridge mediator in BlockScout and go to the  "Write as Proxy" tab: [https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/write-proxy](https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/write-proxy)

6\. Scroll to the `relayTokens` method and fill the token contract address and value  to be sent through the bridge (it must be the same or lesser than the value specified in the `approve` method). Press the "Write" button, confirm the transaction in your wallet. Wait for the transaction inclusion into the blockchain.

![](</img/specs/bridges/image-112.png>)

7\. When the Success modal window appears press the transaction link to get the tx hash. Reference this hash on [the AMB Live Monitoring (ALM) app](https://alm-bsc-xdai.herokuapp.com) to find the bridging process status.

![](</img/specs/bridges/image-114.png>)

8\. Switch the chain to the Binance Smart Chain in MetaMask and press the "Execute" button to finalize the token transfer. This action collects the Arbitrary Message Bridge oracles confirmations and delivers them to BSC. BNB native tokens are required to pay for gas fees to finalize this transfer.

:::info
The transfer finalization can be performed without ALM by [collecting and delivering the oracles' confirmations manually](https://docs.tokenbridge.net/bsc-xdai-amb/about-the-bsc-xdai-amb/submit-confirmations-manually).
:::

:::warning
MetaMask will show a high gas estimate for this transaction. In most cases the final gas consumption will be significantly lower. Please refer to [the OmniBridge UI FAQ](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge#metamask-is-showing-very-high-fees-to-claim-a-transaction-on-ethereum-tokens-bridged-from-xdai-to-ethereum-is-this-estimate-accurate) to learn more. Although the FAQ is for the OmniBridge between Ethereum Mainnet and the Gnosis Chain the reason why MetaMask provides higher gas usage estimate is the same.
:::

![](</img/specs/bridges/image-115.png>)

As soon as the submitted transaction is included in the block the "Executed by" section of ALM will contain the link to the token transfer transaction.

![](</img/specs/bridges/image-116.png>)

9\. Press the link in the "Executed by" section to see transfer details.

![](</img/specs/bridges/image-117.png>)

10\. Press the token name to get the [address of the bridged token](https://www.bscscan.com/token/0x24e5cf4a0577563d4e7761d14d53c8d0b504e337) and add it to your BSC wallet.

![](</img/specs/bridges/image-118.png>)
