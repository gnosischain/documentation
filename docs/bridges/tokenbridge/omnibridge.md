---
title: Omnibridge
---

# Omnibridge

:::info

Omnibridge can be accessed at [omni.gnosischain.com](https://omni.gnosischain.com/)

:::

![](/img/bridges/diagrams/token-bridge.svg)

## Key Information

[Omnibridge](https://omni.gnosischain.com/) a native token bridge that mints the canonical representations of bridged assets on Gnosis. The Omnibridge is built on top of the [Arbitrary Message Bridge (AMB)](/bridges/tokenbridge/amb-bridge) and thus relies on the same group of [Trusted Bridge Validators](/bridges/tokenbridge/amb-bridge#bridge-validators) and trust model as the AMB. 

The Omnibridge currently connects Gnosis to Ethereum and Binance Smart Chain.

The Omnibridge mints bridged tokens using a variant of the [ERC-677](https://github.com/ethereum/EIPs/issues/677) token standard, with all bridged tokens tracked in the canonical [Bridged Token Registries](#bridged-token-registries). 

References: 
* [xDai Docs: Omnibridge](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/omnibridge)
* [xDai Docs: Omnibridge FAQs](https://github.com/gnosischain/xdaichain.com/tree/master/about-gc/faqs/bridges-xdai-bridge-and-omnibridge#omnibridge-faqs)

### Overview

|                       | Detail                                          |
| --------------------- | ----------------------------------------------- |
| Frontend URL          | https://omni.gnosischain.com                  |
| Trust Model           | [4-of-6 Validator Multisig](#bridge-validators) |
| Governance            | [7-of-16 Multisig](#bridge-governance)          |
| Governance Parameters | Validator Set, Daily Limits, Fees               |
| Bug Bounty            | TODO                                            |
| Bug Reporting         | TODO                                            |

References: 

* [xDai Docs: Omnibridge](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/omnibridge)

### Key Contracts

#### Ethereum

| Contract                      | Ethereum Address |
| ----------------------------- | ---------------- |
| Proxy Contract                |                  |
| Validator Management Contract |                  |

#### Gnosis

| Contract                      | Gnosis Address |
| ----------------------------- | -------------- |
| Proxy Contract                |                |
| Block Reward Contract         |                |
| Validator Management Contract |                |

### Fees & Daily Limits

| Token              | Ethereum -> Gnosis | Gnosis -> Ethereum |
| ------------------ | ------------------ | ------------------ |
| Approx. Gas Cost   |                    |                    |
| Bridge Fees        | 0%                 | 0%                 |
| Daily Limit Reset  | 00:00 UTC          | 00:00 UTC          |
| Min Transfer       | 0.005 Dai          | 10 xDai            |
| USDC               | 10,000,000         | 10,000,000         |
| USDT               | 10,000,000         | 10,000,000         |
| WETH               | 250                | 250                |
| WBTC               | 2                  | 2                  |
| GNO                | 5000               | 5000               |
| Max Single Deposit |                    |                    |

References: 
* [Daily Bridge Limits](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/bridge-daily-limits)

Todo: 
- [ ] Update with new values after governance decision

### Bridge Validators

Please refer to the [Arbitrary Message Bridge (AMB) Bridge Validators](/bridges/tokenbridge/amb-bridge#bridge-validators) as the Omnibridge is built on top of the AMB. 

References: 
* [xDai Docs: Omnibridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/about-gc/faqs/bridges-xdai-bridge-and-omnibridge#omnibridge-validators)

### Bridge Governance

* See [Bridge Governance](/bridges/governance)

References: 
- [xDai Docs: Bridge Governance Board](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/governance/bridge-governance-board)
- [xDai Docs: Bridge Daily Limits](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/bridge-daily-limits)

### Bridge Revenue

The Omnibridge currently generates bridge revenue through earned yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](/about/overview/about-gnosis-dao) to fund Gnosis development. 

References: 

* [xDai Docs: Dai & Stablecoin Compounding](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/converting-xdai-via-bridge/dai-compounding)
* [Dune Analytics: xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges) 

### Analytics

- [Dune Analytics: Omnibridge Stablecoins](https://dune.com/maxaleks/Omnibridge-Stablecoins)
- [Dune Analytics: Omnibridge](https://dune.com/maxaleks/Omnibridge)
- [Dune Analytics: Bridge Gas Fees](https://dune.com/maxaleks/Bridge-gas-fees)
- [Dune Analytics on Omnibridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges)

## How it works

![](/img/bridges/diagrams/token-bridge.svg)

The Omnibridge is built on top of the [Arbitrary Message Bridge](/bridges/tokenbridge/amb-bridge). 

The Omnibridge does not allow the [bridging of rebasing tokens and inflationary tokenns](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/omnibridge/exceptions). 

References: 

* [xDai Docs: Exceptions and Special Cases](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/omnibridge/exceptions)
* [TokenBridge Docs: Diagrams showing how Omnibridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)
* [GIP-31: Hardfork that removed `transferAfterCall` from Bridged Token methods](https://forum.gnosis.io/t/gip-31-should-gnosis-chain-perform-a-hardfork-to-upgrade-the-token-contract-vulnerable-to-the-reentrancy-attack/413)_(also see [writeup](https://hackmd.io/@koal/SJiDiO0bc))

### Canonical Token Registries

- [Canonical Registry of Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Canonical Registry of Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

### Multiple Representations

In a multi-chain world, some assets (e.g. USDC) can be bridged over from different chains. This is because the two bridges create different representation of the token on Gnosis, even if the underlying asset is the same. 

For example, there are two different representations of USDC on Gnosis: 

| Asset              |  Token Contract                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| USDC from Ethereum | [0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://blockscout.com/xdai/mainnet/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) |
| USDC from BSC      | [0xD10Cc63531a514BBa7789682E487Add1f15A51E2](https://blockscout.com/xdai/mainnet/address/0xD10Cc63531a514BBa7789682E487Add1f15A51E2) |

Gnosis adopts a naming convention where the "chain of origin" is added as a suffix to the token name (e.g. USDC from Ethereum, USDC from BSC)

### Earning Yield on Bridge Deposits

The Omnibridge currently generates bridge revenue through yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](/about/overview/about-gnosis-dao) to fund Gnosis development. 

## Managing Bridge Contracts

References: 
* [TokenBridge Docs: xDai Contracts Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
* [TokenBridge Docs: Upgrading xDai Bridge Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/upgrade-contracts)
* [TokenBridge Docs: Configuring Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/configuration)
* [TokenBridge Docs: Admin Privilege Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/admin-privileges-management)
* [TokenBridge Docs: ERC20 Token Release](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/erc20-tokens-release)
* [TokenBridge Docs: xDai Bridge Management API](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/xdai-bridge-management-api)

## Managing Bridge Validators

References: 

* [xDai Docs: Bridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators)
* [xDai Docs: Bridge Node Setup](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators/bridge-node-setup)
* [xDai Docs: How to add a new Bridge Validator](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators/current-validators-how-to-add-a-new-bridge-validator)
* [TokenBridge Docs: Migrating Oracle to new Server](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server)

## Resources

- [xDai Docs: Omnibridge](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/omnibridge)
- [TokenBridge Docs: Omnibridge](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension)
- [Diagrams showing how Omnibridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)
