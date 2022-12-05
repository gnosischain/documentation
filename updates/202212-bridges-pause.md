---
title: Bridges Pause
authors: [barichek, plato-gno]
tags: [bridges, merge]
---

TL;TD: OmniBridge and xDai Bridge contracts will be "paused" ~8 hours prior to the Merge.

We aimed to prevent users from initiating any bridge during this process.

<!--truncate-->

# How are we going to pause the Bridges?


* For **XDAI Bridge**, their **DailyLimit** value will be set to 0 on the smart contracts on both ends, preventing any transaction to go thru. 
* For **Omni Bridge**, the the analogous property **SetMaxGasPerTx** will change its value to 0 on the smart contracts on both ends. 

**Once the Merge is confirmed, each value will be rolled back to their initials.**

A detailed list of the contracts involved in this operation, with their initial value for reference follow:


## XDAI Bridge


### HomeBridgeErcToNative

Proxy Contract **[0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6](https://gnosisscan.io/address/0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6#readProxyContract)**

DailyLimit Initial Value **_10000000000000000000000001_**

DailyLimit New Value **_0_**


### ForeignBridgeErcToNative

Proxy Contract **[0x4aa42145aa6ebf72e164c9bbc74fbd3788045016](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readProxyContract)**

DailyLimit Initial Value **_10000000000000000000000000_**

DailyLimit New Value **_0_**


## Omni Bridge


### HomeAMB

Proxy Contract **[0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59](https://gnosisscan.io/address/0x75df5af045d91108662d8080fd1fefad6aa0bb59#readProxyContract)**

MaxGasPerTx Initial Value **_2000000_**

MaxGasPerTx New Value **_0_**


### ForeignAMB

Proxy Contract **[0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#readProxyContract)**

MaxGasPerTx Initial Value **_4000000_**

MaxGasPerTx New Value **_0_**


### HomeGC&lt;->BSC

Proxy Contract **[0x162E898bD0aacB578C8D5F8d6ca588c13d2A383F](https://gnosisscan.io/address/0x162e898bd0aacb578c8d5f8d6ca588c13d2a383f#readProxyContract)**

MaxGasPerTx Initial Value **_2000000_**

MaxGasPerTx New Value **_0_**


### ForeignGC&lt;->BSC

Proxy Contract **[0x05185872898b6f94AA600177EF41B9334B1FA48B](https://bscscan.com/address/0x05185872898b6f94aa600177ef41b9334b1fa48b#readProxyContract)**

MaxGasPerTx Initial Value **_5000000_**

MaxGasPerTx New Value **_0_**


# Will the AMB continue to function during this time?

The Arbitrary Message Bridge (AMB) will continue relaying messages between the supported networks.

Both the OmniBridge and xDai Bridge won’t initiate since the established values will prevent it. **Although, contracts will remain active.**

The pause operation consides all tokens on Omni Bridge due to the fact limits are at AMBs layer and Token Registries are behind the Mediator.


# What are the conditions by which the bridges will be enabled again?

After confirming the successful merge of Gnosis mainnet and the beacon chain, we will restore OmniBridge and xDai Bridge initial values, enabling both again.

We plan on pausing them ~8 hours before the Merge and resume a few hours after.
