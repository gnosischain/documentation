---
description: >-
  A guide on using block explorers to transfer Wrapped ETH from the Gnosis Chain
  to the Ethereum Mainnet in the form of ETH native tokens.
---

# Transfer WETH from GC to ETH on Mainnet

## Background

In some cases it is convenient to use ETH, the native token for the Ethereum Mainnet, in form of ERC20 token - this allows to unify interfaces for the operations with assets. The recent Wrapped ETH token contract is [WETH9](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2).

When the ETH-GC OmniBridge first started, wrapped ETH was bridged to the Gnosis Chain in form of ERC677 token: [Wrapped ETH on GC](https://blockscout.com/xdai/mainnet/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1).

Although the bridged token can be transferred back to ETH,  it is still be in form of the ERC20 token, and it cannot be used in transactions to pay for gas fees. In this case, if a user has no ETH, it is impossible for them to unwrap these ETH tokens.

This set of instructions demonstrates how the Wrapped ETH can be bridged from the Gnosis Chain directly to ETH tokens using a new `relay-and-call` feature implemented recently in the OmniBridge contracts. In the last section of the manual there is also an instruction on how to transfer ETH to WETH on the Gnosis Chain using a single operation. This may not be used often but some users may find it handy.

This instruction assumes that you have access to [BlockScout](https://blockscout.com/xdai/mainnet) and [Etherscan](https://etherscan.io). You also must have a bit of xDai to pay for gas fees for a bridge transaction on the Gnosis Chain.

## Bridge WETH on GC to ETH

1\. Change the chain to GC in MetaMask/NiftyWallet.

2\. Find the Wrapped ETH token in [BlockScout](https://blockscout.com/xdai/mainnet/):

![](</img/specs/bridges/image-182.png>)

WETH token in the Gnosis Chain: [`0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1`](https://blockscout.com/xdai/mainnet/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1).

3\. Go to the [Write Proxy](https://blockscout.com/xdai/mainnet/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/write-proxy) tab.

![](</img/specs/bridges/image-181.png>)

4\. Scroll to the `transferAndCall` method.

![](</img/specs/bridges/image-141.png>)

Enter the following information to the fields:

* `_to` (address) the address of the OmniBridge contract on the Gnosis Chain: `0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`
* `_value` (uint256) with amount of WBNB to be bridged (bridge fees will be subtracted from this value)
*   `_data` (bytes) with two pieces concatenated:

    * the address of the WETH OmniBridge helper contract on the Ethereum Mainnet (`0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a`)
    * the address of the ETH recipient without `0x`.

    E.g. for the recipient `0xbf3d6f830ce263cae987193982192cd990442b53` the value in `_data` field is `0xa6439ca0fcba1d0f80df0be6a17220fed9c9038abf3d6f830ce263cae987193982192cd990442b53`

Press **Write** to send the transaction.

5\. As soon as the transaction is included in the block, click on the transaction link to get the transaction details:

![](</img/specs/bridges/image-177.png>)

6\. Use "**View in ALM App**" link on the page with transaction details to track status of the transfer and finalize the bridging operation if required.

![](</img/specs/bridges/image-179.png>)

7\. Eventually, when an executing transaction on the Mainnet will be processed, the WETH will be unlocked and unwrapped to ETH native tokens:

![](</img/specs/bridges/image-185.png>)

## Bridge ETH to the Gnosis Chain

1\. Visit the WETH OmniBridge helper contract on [Etherscan](https://etherscan.io): [`0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a`](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a)``

2\. Go to the [Write Contract](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a#writeContract) tab:

![](</img/specs/bridges/image-183.png>)

and connect your wallet.

3\. Scroll to the `wrapAndRelayTokens` method and enter the amount of ETH to bridge to the Gnosis Chain:

![](</img/specs/bridges/image-138.png>)

Press **Write** to send the transaction.

4\. As soon as the transaction is included in the block, press the "View you transaction" button to get the transaction hash which can be used in [the AMB Live Monitoring app](https://alm-xdai.herokuapp.com) to track the status of the transaction.

![](</img/specs/bridges/image-178.png>)
