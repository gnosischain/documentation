---
title: Specific Tokens
---

# Specific Tokens

In some cases it is convenient to use ETH, the native token for the Ethereum Mainnet, in the form of a wrapped ERC20 token. This allows to unify interfaces for operations with assets. The recent Wrapped ETH token contract is [WETH9](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2). 
When the ETH-Gnosis OmniBridge first started, wrapped ETH was bridged to the Gnosis chain in form of ERC677 token: Wrapped ETH on xDai.
Although the bridged token can be transferred back to ETH, it is still be in form of the ERC20 token, and it cannot be used in transactions to pay for gas fees. In this case, if a user has no ETH, it is impossible for them to unwrap these ETH tokens.
This set of instructions demonstrates how the Wrapped ETH can be bridged from Gnosis chain directly to ETH tokens using a new `relay-and-call` feature implemented in the OmniBridge contracts. In the last part of this guide there is also an instruction on how to transfer ETH to WETH on Gnosis chain using a single operation. This may not be used often but some users may find it handy.
This instruction assumes that you have access to BlockScout and Etherscan. You also must have a bit of xDai to pay for gas fees for a bridge transaction on Gnosis chain. 
## Bridge wEth on Gnosis to Native Eth on Ethereum
1. Change the chain to Gnosis in MetaMask
2. Find the wEth token in [BlockScout](https://blockscout.com/xdai/mainnet/token/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/token-transfers/), and go to the [Write Proxy](https://blockscout.com/xdai/mainnet/token/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/write-proxy) tab.
![](/img/bridges/omni-bridge-to-native-eth1.png)
3. Scroll to the `transferAndCall` method: 
![](/img/bridges/omni-bridge-to-native-eth2.png)
4. Enter the following information as parameters to call the method:
* `_to`(address): `0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d` . This is sthe address of the OmniBridge contract on Gnosis.
* `_value`(uint256): amount of wETH to be bridged (bridge fees wikll be subtracted from this value).
* `_data`(bytes): the concatenation of the following:
 * the address of the wETH OmniBridge helper contract on the Ethereum Mainnet (`0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a`)
 * he address of the ETH recipient without the leading `0x`
 For example, for the recipient `0xbf3d6f830ce263cae987193982192cd990442b53`, the value in `_data` field is `0xa6439ca0fcba1d0f80df0be6a17220fed9c9038abf3d6f830ce263cae987193982192cd990442b53`
Click __Write__ to send the transaction.
5. When the transaction is included in the block, click on the transaction link to get the transaction details
![](/img/bridges/omni-bridge-to-native-eth3.png)
6. Use the "View in ALM App" link on the page with transaction details, or use the transaction hash and go the the [ALM site](https://alm-bridge-monitor.gnosischain.com/) and enter it manually to track status of the transfer and finalize bridge operations if required.   
![](/img/bridges/omni-bridge-to-native-eth4.png)
7. Eventually, when an executing transaction on the Mainnet is processed, the WETH will be unlocked and unwrapped to ETH native tokens:
![](/img/bridges/omni-bridge-to-native-eth5.png)

## Bridge Eth to Gnosis Chain
1. Visit the WETH OmniBridge helper contract on [Etherscan](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a#writeContract) and connect your wallet.
2. Scroll to the `wrapAndRelayTokens` method and enter the amount of ETH to bridge to Gnosis chain:
![](/img/bridges/omni-bridge-from-native-eth1.png)
Click __Write__ to send the transaction
3. When the transaction is included in the block, press the "View you transaction" button to get the transaction hash which can be used in the [AMB Live Monitoring app](https://alm-bridge-monitor.gnosischain.com/) to track the status of the transaction.