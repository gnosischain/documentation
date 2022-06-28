---
description: ETH-xDai Arbitrary Message Bridge information
---

# About the ETH-xDai AMB

An Arbitrary Message Bridge (AMB) between the Ethereum Mainnet and the xDai chain extends the number of the applications that can leverage cross-chain communications.

Any application can [build its own AMB extension](https://docs.tokenbridge.net/amb-bridge/how-to-develop-xchain-apps-by-amb). This is represented by two mediator contracts so that either assets or arbitrary data can be transferred between chains. The deployed mediator contracts **do not** require a set of oracles to be setup, allowing an application to launch quickly and reducing the cost of application ownership.

The mediator contracts rely on the following information about the ETH-xDai Arbitrary Message Bridge:

* **Ethereum Mainnet**:
  * AMB contract: [`0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e`](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e)
  * Gas limit to call method in the Gnosis chain: `2000000`
  * Finalization rate: `20` blocks
* **Gnosis Chain**:
  * AMB contract: [`0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59`](https://blockscout.com/xdai/mainnet/address/0x75df5af045d91108662d8080fd1fefad6aa0bb59/transactions)
  * Gas limit to call method in the Ethereum Mainnet: `2000000`
  * Finalization rate: `20` blocks

## Transactions

It is possible to get an AMB transaction status by using [the Live Monitoring app](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application): [http://alm-xdai.herokuapp.com/](http://alm-xdai.herokuapp.com/). Transactions require a multi-sig (for bridge validators, not users) for a successful transfer. Current validators can be viewed with the live monitoring application.

* Example transaction:  [http://alm-xdai.herokuapp.com/1/0x28c8e26e3bac936d8780ba177266f94d36f8c4cb88d49e161fffc3adf3d076aa](http://alm-xdai.herokuapp.com/1/0x28c8e26e3bac936d8780ba177266f94d36f8c4cb88d49e161fffc3adf3d076aa)
* [More on Gnosis Chain AMB Bridge Validators](https://www.xdaichain.com/for-validators/for-bridge-validators#current-amb-bridge-validators)

## Fees

While there are no additional fees to bridge between GC and Ethereum, there are gas costs for transactions, which can be quite substantial depending on Ethereum gas prices. When moving from Ethereum to GC, there is a gas cost to unlock the tokens for transfer. When moving from GC to Ethereum, there is a gas cost to claim the token on Ethereum.

Additional fees may be introduced at a later time to cover expenses incurred by validators when bridging. These fees will be assessed with the transferring asset.

## Withdrawal Requests

Withdrawal requests call the `transfer` method of the token contracts with the mediator contract address as the recipient (the multitoken/erc20-to-erc20 extension for AMB).

{% hint style="success" %}
A detailed description of the AMB and examples of AMB extensions are available here: [Arbitrary Message Bridge (AMB)](https://docs.tokenbridge.net/amb-bridge/about-amb-bridge).
{% endhint %}
