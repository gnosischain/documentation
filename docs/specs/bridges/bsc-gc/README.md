---
description: BSC-GC Arbitrary Message Bridge information
---

# BSC-GC Bridge

The main goal of the Arbitrary Message Bridge between the Binance Smart Chain and the Gnosis Chain is to provide a platform for the OmniBridge connecting both chains.

Similar to other AMBs deployed between other chains, anyone is able to develop and deploy a pair of contracts -- mediators to implement their own logic of interchain communication. Read more about the AMB mediators [here](/tutorials/bridges/amb/development-of-a-cross-chain-application/).

The mediator contracts rely on the following information about the BSC-GC Arbitrary Message Bridge:

* **Binance Smart Chain**:
  * AMB contract: [`0x05185872898b6f94AA600177EF41B9334B1FA48B`](https://bscscan.com/address/0x05185872898b6f94AA600177EF41B9334B1FA48B)
  * Gas limit to call method in the Gnosis Chain: `2000000`
  * Finalization rate: `12` blocks
* **Gnosis Chain**:
  * AMB contract: [`0x162E898bD0aacB578C8D5F8d6ca588c13d2A383F`](https://blockscout.com/xdai/mainnet/address/0x162E898bD0aacB578C8D5F8d6ca588c13d2A383F)``
  * Gas limit to call method in BSC: `2000000`
  * Finalization rate: `20` blocks

### Transactions

It is possible to get the status of an AMB transaction using [the Live Monitoring app](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application): [https://alm-bsc-xdai.herokuapp.com/](https://alm-bsc-xdai.herokuapp.com). Transactions require a multi-sig (for bridge validators, not users) for a successful transfer. Current validators can be viewed with the live monitoring application.

For transactions from the Gnosis Chain [manual execution](/specs/bridges/bsc-gc/submit-confirmations-manually) is required. This action delivers the validator confirmations gathered on the Gnosis Chain to the Binance Smart Chain and triggers the transferred message handling.
