---
title: The Merge - Pausing of Native Bridges
authors: [barichek, alebanzas, plato-gno]
tags: [bridges, merge]
---

# The Merge - Pausing of Native Bridges

## Overview

- Gnosis will be temporarily pausing its Native Bridges for the duration of the [Merge](/concepts/specs/hard-forks/merge)
- This is a risk-management operation that will be rolled back once normal operation of the chain has been verified post-Merge
- This will affect both the [Omnibridge](/bridges/tokenbridge/omnibridge) and [xDai Bridge](/bridges/tokenbridge/xdai-bridge), and any 3rd-party bridges or dApps that utilize the Native Bridge contracts. 

### Pausing of Bridges

24 hours prior to the Merge TTD (currently tracking for ~8th Dec 2022 18:43 UTC), the [Gnosis Bridge Governance Multisig](/bridges/governance) will execute a transaction to set the following bridge parameters. 

| Bridge                                                                                                                             | Details                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [xDai Bridge](/bridges/tokenbridge/xdai-bridge)                                                                          | `DailyLimit` set to 0 on all Bridge Contracts<br /><br /> This will prevent any transaction from going through.                |
| [Arbitrary Message Bridge](/bridges/tokenbridge/amb-bridge)<br />[Omnibridge](/bridges/tokenbridge/omnibridge) | `SetMaxGasPerTx` set to 0 on all Bridge Contracts<br /><br /> This will prevent any arbitrary message call from going through. |

### Unpausing of Bridges

There will be an 96 hour observation period post-merge to ensure that the chain finalizes without incident. Once this observation period has passed without incident, the Gnosis Bridge Governance Multisig will execute the following transactions to restore the pre-Merge bridge limits. GnosisDAO may also elect to unpause the bridges earlier. 

| Bridge                                                                                                                             | Details                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [xDai Bridge](/bridges/tokenbridge/xdai-bridge)                                                                          | Limits restored to [Pre-Merge limits](/bridges/tokenbridge/xdai-bridge#fees--daily-limits)                                          |
| [Arbitrary Message Bridge](/bridges/tokenbridge/amb-bridge)<br />[Omnibridge](/bridges/tokenbridge/omnibridge) | Arbitrary Messages can be sent.<br />Omnibridge limits restored to [Pre-Merge limits](/bridges/tokenbridge/omnibridge#daily-limits) |

## Details

### xDai Bridge

| Bridge Contract                                                                                                                         | Initial Limit                | Temporary Limit |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| [Gnosis](https://gnosisscan.io/address/0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6#readProxyContract) <br /> `HomeBridgeERCtoNative`     | 10000000000000000000000001   | 0         |
| [Ethereum](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readProxyContract) <br /> `ForeignBridgeERCtoNative` | 10000000000000000000000000 | 0         |

### AMB & Omnibridge

#### Ethereum - Gnosis

| Bridge Contract                                                                                                           | Initial Limit | Temporary Limit |
| ------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| [Gnosis](https://gnosisscan.io/address/0x75df5af045d91108662d8080fd1fefad6aa0bb59#readProxyContract) <br /> `HomeAMB`    | 2000000     | 0         |
| [Ethereum](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#readProxyContract) <br /> `ForeignAMB` | 4000000     | 0         |

#### Gnosis - BNBChain

| Bridge Contract                                                                                                                 | Initial Limit | Temporary Limit |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| [Gnosis](https://gnosisscan.io/address/0x162e898bd0aacb578c8d5f8d6ca588c13d2a383f#readProxyContract) <br /> `HomeGC <-> BSC`    | 2000000     | 0         |
| [Ethereum](https://bscscan.com/address/0x05185872898b6f94aa600177ef41b9334b1fa48b#readProxyContract) <br /> `ForeignGC <-> BSC` | 5000000     | 0         |

## FAQs

### Will the Bridge Contracts remain operational during this time?

* Bridge Contracts are smart contracts, and remain active on chain
* The "pause" refers to parameters that are being set on these smart contracts that effectively limit their usage

### Will Bridge Validators continue to operate during this time?

* Bridge Validators will continue to be operational, but will not relay any messages as the events they listen to will not trigger due to the limits set

### Can my dApp continue to use the AMB?

* The Arbitrary Message Bridge (AMB) will not relay messages between the supported networks, as [`_sendMessage`](https://gnosisscan.io/address/0x525127c1f5670cc102b26905dccf8245c05c164f#code#L1428) requires a non-null gas limit.  
* Both the OmniBridge and xDai Bridge won’t initiate since the established values will prevent it. 

### Can I continue to use the Omnibridge?
  
* No, you will not be able to use the Omnibridge as it depends on the Arbitrary Message Bridge, which is unable to relay messages due to the gas limit. 

### What are the conditions by which the bridges will be enabled again?

A few of the conditions we will be monitoring post-Merge: 

* Gnosis Chain should be able to finalize
* Execution Layer and Consensus Layer "merge" without incident
* Validators are not experiencing major issues
* Bridge Validators are operational

After confirming the successful merge of Gnosis mainnet and the beacon chain, we will restore OmniBridge and xDai Bridge initial parameters.  