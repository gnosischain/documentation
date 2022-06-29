---
description: The xDai bridge is used to transform Dai into xDai, and xDai back to Dai
---

# xDai Bridge

There are currently two bridges on Gnosis Chain that connect it to the Ethereum Mainnet. The ERC-20 to Native Bridge, and the [GC <-> ETH AMB](/specs/bridges/eth-gc/). This sections covers the ERC20-Native Bridge.

|  |  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bridge Type             | ERC20 to Native                                                                                                                                                                                                                      |
| UI                      | [https://bridge.gnosischain.com/](https://bridge.gnosischain.com/)                                                                                                                                                                   |
| Ethereum Proxy Contract | [0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract)                                                                                              |
| GC Proxy Contract       | [0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://blockscout.com/xdai/mainnet/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-proxy)                                                                                      |
| Bridge Governance       | [https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge#what-is-the-bridge-governance-board](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge#what-is-the-bridge-governance-board) |
| Validators              | [https://www.xdaichain.com/for-validators/for-bridge-validators#current-xdai-bridge-validators](https://www.xdaichain.com/for-validators/for-bridge-validators#current-xdai-bridge-validators)                                       |
| Max per day             | Updated to 10,000,000 per day in either direction with [governance decision](https://forum.poa.network/t/increase-daily-limit-for-xdai-withdrawals-from-the-xdai-to-the-mainnet/3823). Day resets at 00:00 UTC.                      |
| FAQs                    | [https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge)                                                                         |

The Gnosis Chain uses the ERC20 to Native TokenBridge functionality to provide fast, inexpensive and stable transactions. This bridge allows users to transform DAI (an ERC20 stable token) on the mainnet into xDAI on a compatible chain. xDAI tokens can then be sent quickly and with minimal cost on the Gnosis Chain. The Gnosis Chain has been a breakout success in the Ethereum community, providing an easy way for vendors to accept a stable cryptocurrency.

![](/img/specs/bridges/xdai-bridge.png)
