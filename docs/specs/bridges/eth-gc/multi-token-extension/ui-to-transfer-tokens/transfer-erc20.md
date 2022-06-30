---
---

# Transfer any ERC20 from Ethereum to Gnosis Chain

It is possible to use the OmniBridge UI to transfer any ERC20 from Ethereum to Gnosis Chain. Any user can initiate this initial transfer. Once the token exists on Gnosis Chain, it can be transferred back and forth using the same UI.

:::warning
OmniBridge and OmniBridge UI are experimental Beta software, use at your own risk. Access the unofficial OmniBridge UI: [https://omni.gnosischain.com/](https://omni.gnosischain.com)
:::

## Token Transfer

In this example, we transfer the Basic Attention Token (BAT) from Ethereum to Gnosis Chain. When we start, this token does not yet exist on Gnosis Chain. It takes less than 5 minutes and some ETH for gas fees.

1\) Go to the OmniBridge UI at [https://omni.gnosischain.com/](https://omni.gnosischain.com)

1. Connect your MetaMask to Ethereum Mainnet
2. Select the Token you want to transfer (here we select BAT) and enter the amount.
3. Click Unlock to approve account interaction.

![](/img/specs/bridges/omni1.jpg)

2\) Confirm the transaction to approve Omnibridge.

![](/img/specs/bridges/omni2.jpg)

3\) Once approve TX is complete, you can now Transfer BAT to BAT on GC. Click **Transfer.**

![](/img/specs/bridges/omni3.jpg)

4\) Press **Confirm** to approve the transfer and pay the gas fees. These may be expensive depending on network congestion. We recommend checking current gas prices ([https://ethgas.watch/](https://ethgas.watch)), and it also may make sense to bridge over a larger amount of tokens in a single transaction.

![](/img/specs/bridges/omni4.jpg)

5\) The bridge transaction will begin to process. While you are waiting for block confirmations, you can click on the ALM monitor link to view progress with your transfer.

![](/img/specs/bridges/omni5.jpg)

6\) Transfer processing in ALM.

![](</img/specs/bridges/omni6a-1.jpg>)

![Successful after 2 validator approvals](/img/specs/bridges/omni6b.jpg)

7\) After a successful transfer, you can check the token on BlockScout to see that it exists. Check Bridged tokens at [https://blockscout.com/xdai/mainnet/bridged-tokens](https://blockscout.com/xdai/mainnet/bridged-tokens).

a. Prior to transaction

![](</img/specs/bridges/bridge1-1.jpg>)

b. After transaction

![BAT added to GC, you can see the new contract address here](/img/specs/bridges/bridge2.jpg)

## Add the New Token to MetaMask

Now that you have bridged to Gnosis Chain, you will need to add the token to MetaMask to view.

1\) Switch your MetaMask to the Gnosis Chain (if you haven't setup yet, instructions here). Click on Assets, then scroll down and click Add Token.

![](</img/specs/bridges/mmx1-1.jpg>)

2\) Select **Custom Token** and paste in the address from your newly bridged token. You can find this in several ways. The remaining fields should autopopulate (Symbol and Decimals of Precision). Click Next.\
_Note: Do not use the search feature, as this will search for tokens on Ethereum Mainnet._

![](/img/specs/bridges/mmx2.jpg)

3\) Click **Add Tokens** to add to your wallet on the Gnosis Chain.

![](/img/specs/bridges/mmx3.jpg)

## Find a Custom Token Address on Gnosis Chain

There are several ways to find the Custom token address on GC using BlockScout.

1\) BlockScout Bridged Token List. If you successfully bridged a token with the OmniBridge, you can find it at [https://blockscout.com/xdai/mainnet/bridged-tokens](https://blockscout.com/xdai/mainnet/bridged-tokens).

2\) Via your address on BlockScout. Paste your address into the BlockScout Search bar at [https://blockscout.com/xdai/mainnet](https://blockscout.com/xdai/mainnet) and click the Tokens tab to see all the tokens associated with your address on Gnosis Chain.

![](/img/specs/bridges/blockscout-search.jpg)

3\) Search by the token name in BlockScout.

![](/img/specs/bridges/search.jpg)

4\) When bridging, you can click on the executed ALM Transaction to locate newly minted tokens.

![](/img/specs/bridges/alm1.jpg)

![](/img/specs/bridges/alm2.jpg)

![](/img/specs/bridges/alm3.jpg)

## Switch Bridges & Networks in UI

### Bridges

The OmniBridge UI supports several bridges. To switch chains, click on the Bridge Selector to choose. Once selected, a popup will instruct you to change networks in MetaMask. Click the buttons directly in the popup to complete the process.

![](/img/specs/bridges/switch-bridge-1.png)

![](/img/specs/bridges/switch-bridge-2.png)

### Networks

When switching between networks within the same bridge, press the arrows icon then confirm the network switch in MetaMask.

![](/img/specs/bridges/switch-networks.png)