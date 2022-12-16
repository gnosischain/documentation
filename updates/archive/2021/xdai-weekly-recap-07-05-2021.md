---
description: 01 May - 07 May 2021
date: 2021-05-07
---

# ⚔️ xDai Weekly Recap - 07/05/2021

import ArchiveWarning from '@site/src/components/ArchiveWarning';

<ArchiveWarning />

## 👷‍♂️ POSDAO Updates

:::success
The protocol is currently in Epoch **55.**\
****\
****There are **16** validator pools with **261** delegators staking a total of **578,082** STAKE, a 30K+ increase in amount staked from the previous week. \
\
High pool APY is currently **19.07%**, low is **12.89%** _(stats as of 07/05/2021 17:00 UTC)_.

* Staking Statistics: [https://duneanalytics.com/maxaleks/xdai-staking](https://duneanalytics.com/maxaleks/xdai-staking)
* Staking Platform: [https://blockscout.com/xdai/mainnet/validators](https://blockscout.com/xdai/mainnet/validators)
:::

## 📊 Network Statistics

We use a variety of tools to view xDai Metrics including:

* [BlockScout Block Explorer](https://blockscout.com/xdai/mainnet)
* [Dune Analytics](https://duneanalytics.com/maxaleks/xDai-Usage)
* [AnyBlock Analytics](https://dashboards.anyblock.tools/ethereum/poa/xdai/network-metrics/)
* [Ethhole](https://ethhole.link/project/xDai)

### Total OverView: BlockScout

* 1.1Million Wallets
* 23 Million Total Transactions

### April 2021 Usage: AnyBlock Analytics

* 4.2 Million Transactions
* 1 Trillion Gas Usage
* 46 Thousand Distinct Senders



### Utilization by Project: Dune Analytics

#### May 6 Snapshot:

* Other: 83023
* Perpetual Protocol: 54127
* RANDAO (on-chain random number generation): 7103
* Honeyswap: 3811
* Bao Finance: 1426
* AMB Bridge: 1288
* xDai Bridge: 579

### Bridged Token Analytics

* 397 Distinct Tokens bridged from Ethereum ([https://blockscout.com/xdai/mainnet/bridged-tokens/eth](https://blockscout.com/xdai/mainnet/bridged-tokens/eth))
* 74 Distinct Tokens bridged from BSC ([https://blockscout.com/xdai/mainnet/bridged-tokens/bsc](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc))

Bridged Token Heatmap by Value: [https://ethhole.link/project/xDai](https://ethhole.link/project/xDai)

Top 10 according to [https://ethhole.link/project/xDai](https://ethhole.link/project/xDai)

| Name                                                                                                                        | Value   | Note                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------- |
| [HAUS](https://etherscan.io/token/0xf2051511b9b121394fa75b8f7d4e7424337af687?a=0x88ad09518695c6c3712ac10a214be5109a655671)  | $32.13M |                                                                     |
| [BAO](https://etherscan.io/token/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1?a=0x88ad09518695c6c3712ac10a214be5109a655671)   | $17.81M |                                                                     |
| [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?a=0x88ad09518695c6c3712ac10a214be5109a655671)  | $15.16M | stablecoin                                                          |
| [HOPR](https://etherscan.io/token/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da?a=0x88ad09518695c6c3712ac10a214be5109a655671)  | $11.68M |                                                                     |
| [WETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2?a=0x88ad09518695c6c3712ac10a214be5109a655671)  | $10.82M |                                                                     |
| [xMARK](https://etherscan.io/token/0x36b679bd64ed73dbfd88909cdcb892cb66bd4cbb?a=0x88ad09518695c6c3712ac10a214be5109a655671) | $9.9M   |                                                                     |
| [HAKKA](https://etherscan.io/token/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd?a=0x88ad09518695c6c3712ac10a214be5109a655671) | $7.33M  |                                                                     |
| [SUSHISWAP](https://zapper.fi/dashboard?address=0x88ad09518695c6c3712ac10a214be5109a655671)                                 | $6.83M  | protocol                                                            |
| [STAKE](https://etherscan.io/token/0x0ae055097c6d159879521c384f1d2123d1f195e6?a=0x88ad09518695c6c3712ac10a214be5109a655671) | $6.71M  | note: missing locked validator tokens, actual value $13,780,797 USD |
| [LIEN](https://etherscan.io/token/0xab37e1358b639fd877f015027bb62d3ddaa7557e?a=0x88ad09518695c6c3712ac10a214be5109a655671)  | $6.48M  |                                                                     |

## :pencil2: Protocol Updates

### Berlin Hardfork on xDai

The date and block number have been announced for the xDai upgrade to Berlin. All validators and any projects using xDai should update their nodes. (OpenEthereum v3.2.5, Nethermind v1.10.67)

* Date: **May 17**
* Block: **#16101500**

### Client Support

Both OpenEthereum and Nethermind support the latest xDai updates.

https://github.com/openethereum/openethereum/releases/tag/v3.2.5

https://twitter.com/nethermindeth/status/1389479673827037187

## 🌉 OmniBridge Updates

After a successful security audit, OmniBridge upgrades are underway. Documentation was added for the following:

* Alternate Receiver: Bridge tokens from an address on one chain to a second address on another chain).
* Define Custom RPCs: Set your own RPC endpoints for bridge interaction.
* Infinite Unlock: Approve all transfers of a token with a single tx rather than for each transfer.
* Reverse Mode: _Coming Soon_. Bridge tokens minted on xDai to Ethereum/BSC

## :mag\_right: BlockScout Updates

BlockScout now supports EIP1155 Tokens, with recent updates to include Metadata support.

https://twitter.com/blockscoutcom/status/1386748075004370949

### 1155 MetaData Support Added

## :butterfly: Project Updates

### Opium

https://twitter.com/Opium_Network/status/1390681252739653632

### GnosisSafe Application

https://twitter.com/xdaichain/status/1389693232704102400

### Mt Pelerin Bridge Wallet

https://twitter.com/mtpelerin/status/1369297227131273220

