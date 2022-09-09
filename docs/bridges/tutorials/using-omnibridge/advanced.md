---
title: Advanced
---
# Advanced
## Alternate Receiver
The default bridge mode sends funds to the same address across chains, as the same algorithm is used to derive an address from a private key across the chains where the OmniBridge is deployed. However, it is easy to specify another address to receive funds on the chain you are bridging to. This may be desirable when sending funds from a multi-sig wallet (like Gnosis Safe), or as a transfer method to another address on a secondary chain.
### Set and Alternate Receiver
1. Click on the "Advanced" link on the Omnibridge UI. A text field will appear.
2. Paste the `0x...` address you are transferring funds to on the receiving chain.
3. Proceed with the Request
![](/img/bridges/omni-alternate-receiver.gif) 
  
:::info
Claims on the receiving chain can be completed using any address with enough funds. Copy the tx hash from the first transaction (it will be linked during tx processing or when complete in the history tab of the bridge. You can also find in your MetaMask wallet) and paste into https://alm-xdai.herokuapp.com/ to search and execute.
:::


## Set Custom RPC Endpoints
If you are experiencing an issue with an Ethereum or Gnosis Chain RPC endpoint when trying to bridge you can easily set your own endpoint in the interface.
Note that these are Read Only, if you need to use the RPCs to process transactions, you can [set custom RPCs in your web3 wallet like MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-Network-RPC-and-or-Block-Explorer) as well.
### RPC Endpoints:
* [Gnosis RPC's](/tools/rpc/)
* [Ethereum Default RPC's](https://mainnet.infura.io/), [Alternate Ethereum RPC's](https://ethereumnodes.com/)
1. Go to [the bridge UI](https://omni.gnosischain.com/bridge) and click settings at the top.
2. Add your RPC of choice and click __Save__. Note that the URL options change based off which networks you have selected to bridge between.
![](/img/bridges/omni-custom-rpc1.png)


## Infinite Unlock
You must give approval to the bridge contracts to access and send ERC-20 tokens. This is similar to Uniswap or another DEX that asks for approval to spend your tokens.
You can give this permission on a per transaction basis, or you can unlock an unlimited amount to transfer with the infinite unlock option. Infinite unlock saves on transaction fees, but does introduce security risk if the contract is compromised. If compromised, a malicious 3rd party may have the ability to access all funds rather than a finite approved amount.

### Set Infinite Unlock
1. Go to Settings on the top of the page
2. Toggle "Infinite Unlock" and click __Save__. When you process your next unlock, the transaction will allow all transfers of that token without needing to unlock again.
![](/img/bridges/omni-infinite-unlock1.png)
3. If you don't wish to use infinite unlock but would like te instead set a custom limit, when the MetaMask window pops up to ask for approval you have the option to set a spend limit. Click "Edit Permission" and it will take you to the following screen:
![](/img/bridges/omni-custom-limit.png)


## Using Omnibridge with Gnosis Safe
OmniBridge is compatible with the Gnosis Safe apps interface, allowing for bridge interaction and ERC20 transfers between xDai and Ethereum using a Multisig Wallet. The following instructions are for bridging ERC20s between Ethereum and Gnosis. To transfer xDai to Dai and vice versa, see the [xDai Bridge + Gnosis Safe instructions](using-xdai-bridge).
:::danger
Each Gnosis Safe is deployed independently on Gnosis chain and/or Ethereum. Cross-chain safes do not share the same contract addresses (even when they have the same owners etc), so it is important to use the Alternate Recipient Address feature when bridging with a safe.
:::
### Add the App
1. Go to your Gnosis Safe and login and connect as you normally would
* [Gnosis Safe on Gnosis Chain](https://gnosis-safe.io/app/gno)
* [Gnosis Safe on Ethereum](https://gnosis-safe.io/app/)
2. Go to Apps -> Add Custom App, and add the app url https://omni.gnosischain.com/ . The App name should populate as OmniBridge
![](/img/bridges/omni-gnosis-safe1.png)
3. Agree to the terms and click "Add". The app will now be added to the interface.

### Bridge App on Receiving Chain: Claiming a Bridge Transaction
In this example, we sent STAKE from xDai to a Gnosis Safe address on Ethereum. To claim this transaction, login to Gnosis Safe on Ethereum and open the OmniBridge Application (you may need to add it using the [steps above](#add-the-app) if you have not added previously)
1. You should see the claim screen, click the __Claim__ button to begin the process. If you do not see this screen, click on __History__ at the top of the OmniBridge app.
![](/img/bridges/omni-gnosis-safe2.png)
2. Click the __Claim__ button
![](/img/bridges/omni-gnosis-safe3.png)
3. All required owners must confirm the transaction before it is processed. Once completed, the funds will be added to the safe. 
![](/img/bridges/omni-gnosis-safe4.png)

