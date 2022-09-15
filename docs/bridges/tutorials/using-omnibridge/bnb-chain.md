---
title: Binance Smart Chain
---
# BNB Chain

### Using Omnibridge to transfer to BNB Chain
The Binance Smart Chain (BSC) Omnibridge allows users to move ERC20 tokens between Gnosis Chain and BSC. It is available as a dropdown item from the OmniBridge UI in the top right corner.
:::info
BSC OmniBridge and OmniBridge UI are beta software, use at your own risk.
You will need xDai on Gnosis Chain and BNB on the Binance Smart Chain to complete a bridge transfer.  
__Bridge Interfaces:__
* [OmniBridge UI](https://omni.gnosischain.com/bridge)
* [OmniBridge BSC Transaction Monitor](https://alm-bsc-xdai.herokuapp.com/)
* [BSC Bridged Tokens on GC List](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)
:::
  
:::caution
Tokens bridged cross-chain are appended with the "from Ethereum" or "on BSC". There are instances where bridging across multiple chains creates token names such as "GNO from Ethereum on BSC" for example.

Double bridging also can result in multiple instances of the same token on a single chain. For example, USDC can be bridged to xDai from Ethereum and also bridged to xDai from BSC. This results in 2 separate USDC token instances on xDai. These tokens cannot be merged into a single instance after they are minted.
:::
  
:::info
[Component.Finance](https://xdai.component.finance/) is an available tool to swap between stable tokens. This can be used to convert:
* [Binance-Peg Dai Token](https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3) / [wxDai](https://blockscout.com/xdai/mainnet/tokens/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/token-transfers)
* [Binance-Peg USDC Token](https://blockscout.com/xdai/mainnet/tokens/0xD10Cc63531a514BBa7789682E487Add1f15A51E2/token-transfers) / [USDC on xDai](https://blockscout.com/xdai/mainnet/tokens/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83/token-transfers).
* 💡 [More info on this process is available here](#binance-pegged-dai-token-on-gnosis).
:::
[__Additional Information__](https://yostari.medium.com/traversing-the-eth-polygon-xdai-bsc-cross-chain-bridges-cfe3b29d49d4)


### Example transfer from Gnosis to BNB Chain

In the following steps, we walk through the steps to transfer STAKE from Ethereum. __Currently, the bridging of STAKE tokens has been disabled. GNO tokens are now used for staking. However, the example is still relevant as the steps are the same__ . 

#### What you will need
* Tokens on Gnosis Chain that you would like to swap
* a small amount of xDai to complete the transfer. [You can use a faucet for a small amount of free tokens if you need some](/tools/faucets/). 
* BNB tokens on the Binance Smart Chain for the gas needed to claim/transfer
* RPC setup in Metamask for BSC (Network Name: BSC Mainnet New RPC URL: https://bsc-dataseed.binance.org/ ChainID: 56 Symbol: BNB Block Explorer URL: https://bscscan.com/) and [Gnosis Chain](/tools/wallets/metamask/). 
:::info
If planning to bridge so you can trade an asset on BSC or Gnosis (Honeyswap, BaoSwap etc), check liquidity for that asset on the chain where you want to trade prior to bridging.
:::

#### Example: Bridging STAKE fro Gnosis Chain to BSC
:::note
As mentioned above, bridging STAKe has been disabled. However, this example is still relevant and is still a useful resource.
:::
1. Go to the [Omnibridge UI](https://omni.gnosischain.com/bridge), connect your wallet and Select BSC <-> Gnosis in the top right corner dropdown.
2. Select the token you wish to bridge
3. Select the amount
4. Click unlock. (_you can also[ enable infinite unlocks](#infinite-unlock)_)
![](/img/bridges/omni-bsc1.png)
5. Confirm the Unlock transaction in Metamask
6. Once the unlock transaction is complete, the request button will become active. Click request, and then confirm in Metamask.
![](/img/bridges/omni-bsc2.png)
7. Continue with the transfer (noting that there are 2 transactions to complete, on on Gnosis Chain and one on the BSC).
![](/img/bridges/omni-bsc3.png)
8. Confirm in Metamask, then wait for Block Confirmations and Signature Collections. Once complete, you will see the message to switch the network to the Binance Smart Chain
![](/img/bridges/omni-bsc4.png)
9. Once you switch networks, you will see the claim button
 1. Click Claim to initiate claim the process.
 2. If the claim button does not work for some reason, you can click on the linked sending tx hash to process execute the transaction in the [live monitor](https://alm-bsc.herokuapp.com/).
 ![](/img/bridges/omni-bsc5.png)
 3. If using the ALM, click on the execute button to finalize the claim. Make sure you have enough BNB tokens to complete the transaction, and be sure to add the tokens to your BSC wallet.
 ![](/img/bridges/omni-bsc6.png)


### WBNB auto-conversion to BNB

The Gnosis to BSC Bridge now supports wrapped BNB (WBNB) to BNB conversions directly from Gnosis Chain. Tokens are transferred AND unwrapped to native BNB during the bridging process!  
Process overview:
1. __Swap__ your token(s) for WBNB on Gnosis Chain
2. __Bridge__ WBNB to native BNB on the Binance smart chain!

#### 1) Swap for wBNB on Gnosis Chain
Use a DEX to swap your token on Gnosis for WBNB. In this example we use [HoneySwap](https://app.honeyswap.org/#/swap) to convert xDai to WBNB.
1. Go to [Honeyswap](https://app.honeyswap.org/#/swap) and connect your wallet. Select the pairs you want to trade (xDai -> wBNB in this example)
![](/img/bridges/omni-swap-wbnb1.png)
2. If wBNB is not in the dropdown, you can [add the token contract address](https://blockscout.com/xdai/mainnet/tokens/0xCa8d20f3e0144a72C6B5d576e9Bd3Fd8557E2B04/token-transfers)
![](/img/bridges/omni-swap-wbnb2.png)
3. Enter the amount to swap and it will calculate the amount of wBNB you will receive. Click Swap to continue.
![](/img/bridges/omni-swap-wbnb3.png)
4. Confirm the swap in Metamask to continue.
#### 2) Bridge wBNB to BNB on the Binance SMart Chain (BSC)
1. Go to the [Omnibridge UI](https://omni.gnosischain.com/bridge)
2. Select BSC <-> GC from the Dropdown. Your MetaMask should still be connected to the Gnosis Chain.
3. Choose Wrapped BNB on Gnosis and enter the amount you want to bridge.
4. Toggle to Receive BNB. When your transaction is bridged, the WBNB is also unwrapped on the Binance Smart Chain as a part of the transaction! This gives you native BNB on BSC.
![](/img/bridges/omni-swap-wbnb4.png)
5. Click __Request__ to begin bridging. You can monitor the transaction using the [ALM app](https://alm-bsc.herokuapp.com/). After the process is complete, be sure to claim your token(s)
:::note
You may see an Insufficient Funds warning in MetaMask for a few moments while unwrap is processed, added to your account and reflected on MM. This should resolve fairly quickly and you can proceed. Once the claim is processed, you will have native BNB in your wallet on the Binance Smart Chain. You can use this for transactions as needed, and to pay tx costs for bridging over other tokens from Gnosis Chain.
:::

### Binance-peg Dai token on Gnosis

The [Binance-Peg Dai Token](https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3) can be bridged to xDai using the beta BSC-xDai Omnibridge. __However, this process DOES NOT mint native xDai__. Instead, the Dai Token from BSC is bridged across networks.
![](/img/bridges/omni-pegged-dai1.png)
Using xDai tools, it only takes a few steps to convert Binance-Peg Dai to xDai. The process can also be completed in the reverse direction where xDai is converted to Binance-Peg Dai. Once converted from xDai, Binance-Peg Dai can be bridged back to the BSC.  
This option gives users the ability to convert Dai/xDai when mainnet bridging fees are expensive. A similar process should also be considered for Binance-Peg USDC tokens.
#### Token Addresses
##### Dai:
* [Binance-Peg Dai Token on Binance](https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3)
* [Binance-Peg Dai Token on xDai (Named Dai Token from BSC)](https://blockscout.com/xdai/mainnet/tokens/0xFc8B2690F66B46fEC8B3ceeb95fF4Ac35a0054BC/token-transfers)
##### USDC:
* [Binance-Peg USDC Token on Binance](https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d)
* [Binance-Peg USDC Token on xDai (Named USDC Coin from BSC)](https://blockscout.com/xdai/mainnet/tokens/0xD10Cc63531a514BBa7789682E487Add1f15A51E2/token-transfers)
##### Tools Used:
* [Wrapeth](https://wrapeth.com/): Convert xDai to wrapped xDai / unwrap wrapped xDai
* [Component Finance](https://xdai.component.finance/): Swap stable tokens on xDai
* [OmniBridge](https://bsc-to-xdai-omnibridge.web.app/): Bridge with option(in Beta) to bridge between Gnosis Chain and Binance Smart Chain.

#### Gnosis -> BSC: Swap xDai to Binance-Peg DAI Example
1. Go to [https://wrapeth.com/](https://wrapeth.com/)
2. set MetaMask to the Gnosis Chain Network
3. Enter the amount of xDai to wrap
![](/img/bridges/omni-pegged-dai1.png)
4. Press Submit.
5. Once the tx is complete, and wxDai is deposited, you can add wxDai ([0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://blockscout.com/xdai/mainnet/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/transactions)) [as a custom Custom Token](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) in MetaMask.

#### 2) Swap wxDai for Binance-Peg Dai on Gnosis using Component.

1. Go to [https://xdai.component.finance/](https://xdai.component.finance/)
2. Connect your Web3 Wallet (MetaMask) to the application and confirm you are connected to the Gnosis network.
3. Press the Swap tab and select the **WXDAI/DAI \[BSC]** pair.
4. Press Swap. You will need to approve the first transaction with amount to swap or you can select unlimited.
5. Complete this first approve transaction in Metamask.
6. Press Swap again and confirm the second transaction to swap.
7. Once complete, add Binance-Peg Dai on Gnosis to your MetaMask custom tokens. The address is [0xFc8B2690F66B46fEC8B3ceeb95fF4Ac35a0054BC](https://blockscout.com/xdai/mainnet/tokens/0xFc8B2690F66B46fEC8B3ceeb95fF4Ac35a0054BC/token-transfers). In BlockScout it is called Dai Token from BSC.
:::info
The same process can be used to swap USDC to USDC (BSC)
:::

#### 3) Move to BSC (if desired) with the BSC Bridge

You can [follow this tutorial](#example-bridging-stake-fro-gnosis-chain-to-bsc) to bridge with the Omnibridge. Note you will need some BNB on the Binance Smart Chain to complete the process (to pay the claiming fee). If you have BNB on BEP2 you will need to swap it to BSC.

##### BSC -> xDai: Swap Binance-Peg Dai to Gnosis

You will follow the same process in reverse to convert Binance-Peg Dai from BSC to xDai.

###### 1) Bridge Dai from BSC to Gnosis.

You can [follow this tutorial](#example-transfer-from-gnosis-to-bnb-chain) to bridge with the [Omnibridge](https://omni.gnosischain.com/bridge).

###### 2) Swap Dai (BSC) token for wxDai using Component.

1. Go to [https://xdai.component.finance/](https://xdai.component.finance/)
2. Connect your Web3 Wallet (MetaMask) to the application and select the Gnosis network.
3. Press the Swap tab and select the Dai \[BSC]/ wxDai pair. Follow the instructions in section 2 above to approve 2 transactions and swap.

##### 3) Unwrap wxDai into xDai with Wrapeth.

1. Go to [https://wrapeth.com/](https://wrapeth.com/)
2. Set MetaMask to the Gnosis Chain Network.
3. Select the Unwrap wxDai tab and enter the amount of wxDai to wrap.
4. Press Submit.
