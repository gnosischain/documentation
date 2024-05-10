---
title: Specific Tokens
---

# Specific Tokens

In some cases it is convenient to use ETH, the native token for the Ethereum Mainnet, in the form of a wrapped ERC20 token. This allows to unify interfaces for operations with assets. The recent Wrapped ETH token contract is [WETH9](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2).
When the ETH-Gnosis OmniBridge first started, wrapped ETH was bridged to the Gnosis chain in form of ERC677 token: Wrapped ETH on xDai.
Although the bridged token can be transferred back to ETH, it is still be in form of the ERC20 token, and it cannot be used in transactions to pay for gas fees. In this case, if a user has no ETH, it is impossible for them to unwrap these ETH tokens.
This set of instructions demonstrates how the Wrapped ETH can be bridged from Gnosis chain directly to ETH tokens using a new `relay-and-call` feature implemented in the OmniBridge contracts. In the last part of this guide there is also an instruction on how to transfer ETH to WETH on Gnosis chain using a single operation. This may not be used often but some users may find it handy.
This instruction assumes that you have access to BlockScout and Etherscan. You also must have a bit of xDai to pay for gas fees for a bridge transaction on Gnosis chain.

In the second part of the tutorial, you will learn how to bridge GNO between Goerli and Chiado testnet. You are required to have some xDAI on Chiado and ETH on Goerli to complete the transaction.

## Bridge wEth on Gnosis to Native Eth on Ethereum

1. Change the chain to Gnosis in MetaMask
2. Find the wEth token in BlockScout, and go to the [Write Proxy](https://gnosis.blockscout.com/address/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1?tab=write_proxy) tab.
   ![](/img/bridges/omni-bridge-to-native-eth1.png)
3. Scroll to the `transferAndCall` method:
   ![](/img/bridges/omni-bridge-to-native-eth2.png)
4. Enter the following information as parameters to call the method:

- `_to`(address): `0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d` . This is sthe address of the OmniBridge contract on Gnosis.
- `_value`(uint256): amount of wETH to be bridged (bridge fees wikll be subtracted from this value).
- `_data`(bytes): the concatenation of the following:
- the address of the wETH OmniBridge helper contract on the Ethereum Mainnet (`0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a`)
- the address of the ETH recipient without the leading `0x`
  For example, for the recipient `0xbf3d6f830ce263cae987193982192cd990442b53`, the value in `_data` field is `0xa6439ca0fcba1d0f80df0be6a17220fed9c9038abf3d6f830ce263cae987193982192cd990442b53`
  Click **Write** to send the transaction.

5. When the transaction is included in the block, click on the transaction link to get the transaction details
   ![](/img/bridges/omni-bridge-to-native-eth3.png)
6. Use the "View in ALM App" link on the page with transaction details, or use the transaction hash and go to the [ALM site](https://alm-bridge-monitor.gnosischain.com/) and enter it manually to track status of the transfer and finalize bridge operations if required.  
   ![](/img/bridges/omni-bridge-to-native-eth4.png)
7. Eventually, when an executing transaction on the Mainnet is processed, the WETH will be unlocked and unwrapped to ETH native tokens:
   ![](/img/bridges/omni-bridge-to-native-eth5.png)

---

## Bridge Eth to Gnosis Chain

1. Visit the WETH OmniBridge helper contract on [Etherscan](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a#writeContract) and connect your wallet.
2. Scroll to the `wrapAndRelayTokens` method and enter the amount of ETH to bridge to Gnosis chain:
   ![](/img/bridges/omni-bridge-from-native-eth1.png)
   Click **Write** to send the transaction
3. When the transaction is included in the block, press the "View you transaction" button to get the transaction hash which can be used in the [AMB Live Monitoring app](https://alm-bridge-monitor.gnosischain.com/) to track the status of the transaction.

---

## GNO: Goerli -> Chiado

Bridging GNO from Goerli to Chiado requires 2 txs.

#### Transaction 1

Allow Foreign OmniBridge Mediator to transfer GNOs, by calling approve() on GNO contract.

**[Called Function](https://goerli.etherscan.io/address/0x7f477c3F03213970d939104CC436Dc995CF615b5)**: `GNO.approve(address Foreign OmniBridge Mediator, uint256  amount)`  
**[Transaction Parameter Example](https://docs.metamask.io/guide/sending-transactions.html)**:

```
to: 0x7f477c3F03213970d939104CC436Dc995CF615b5 (GNO on Goerli)
value: 0
data: 0x095ea7b300000000000000000000000000147c84f13764dcdabaf1cbae622fa6f683908500000000000000000000000000000000000000000000d3c21bcecceda1000000
```

#### Transaction 2

Relay GNO tokens from Foreign Omnibridge Mediator.

**[Called Function](https://goerli.etherscan.io/address/0x00147c84f13764dcdabaf1cbae622fa6f6839085)**: `Foreign_OmniBridge_Mediator.relayTokens(address _receiver, uint256 _value)`  
**[Transaction Parameter Example](https://docs.metamask.io/guide/sending-transactions.html)**:

```
to: 0x00147c84f13764dcdabaf1cbae622fa6f6839085 (Foreign OmniBridge Mediator)
value: 0
data: 0x01e4f53a0000000000000000000000007f477c3f03213970d939104cc436dc995cf615b50000000000000000000000000000000000000000000000000de0b6b3a7640000
```

After a few minutes the exact amount of relayed tokens will be available on Chiado side.

---

## GNO: Chiado -> Goerli

Bridging GNO from Chiado to Goerli also requires 2 txs.

#### Transaction 1

Allow Home OmniBridge Mediator to transfer GNOs.

**[Called Function](https://blockscout.com/gnosis/chiado/address/0x19C653Da7c37c66208fbfbE8908A5051B57b4C70)**: `GNO.approve(address Home OmniBridge Mediator, uint256 amount)`  
 **[Transaction Parameter Example](https://docs.metamask.io/guide/sending-transactions.html)**:

```
to: 0x19C653Da7c37c66208fbfbE8908A5051B57b4C70 (GNO on Chiado)
value: 0
data: 0x095ea7b300000000000000000000000009d549a48ac52f3f9945e7de6402c609c92aa2e100000000000000000000000000000000000000000000d3c21bcecceda1000000
```

#### Transaction 2

Relay GNO tokens from Home Omnibridge Mediator.

**[Called Function](https://blockscout.com/gnosis/chiado/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1)**: `Home_OmniBridge_Mediator.relayTokens(address _receiver, uint256 _value)`  
 **[Transaction Parameter Example](https://docs.metamask.io/guide/sending-transactions.html)**:

```
to: 0x09D549a48AC52F3f9945E7de6402c609c92aa2E1  (Home OmniBridge Mediator)
value: 0
data: 0x01e4f53a00000000000000000000000019C653Da7c37c66208fbfbE8908A5051B57b4C700000000000000000000000000000000000000000000000000de0b6b3a7640000
```

After a few minutes the exact amount of relayed tokens will be available on Goerli side.
