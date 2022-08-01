---
title: Omnibridge
---

# Omnibridge

:::info

Omnibridge can be accessed at [omni.gnosischain.com](https://omni.gnosischain.com/)

:::

![](../diagrams/token-bridge.svg)

## Overview

[Omnibridge](tokenbridge/omnibridge.md) a native token bridge that mints the canonical representations of bridged assets on Gnosis. It is built on top of the [Arbitrary Message Bridge (AMB)](./amb-bridge.md) and thus relies on the same group of [Trusted Bridge Validators](tokenbridge/amb-bridge.md#bridge-validators) as the AMB. 

The Omnibridge currently connects Gnosis to Ethereum and Binance Smart Chain.

The Omnibridge mints bridged tokens as [ERC-677](https://github.com/ethereum/EIPs/issues/677) tokens, with a canonical [Bridged Token Registry](#bridged-token-registries) maintained for each bridged chain. 

### Parameters

### Bridge Validators

- [ ] Refer the user over to the [AMB Bridge](./amb-bridge.md) list of validators (verify if they are the same)

### Analytics

- [ ] Dune dashboards for Omnibridge?
- [ ] https://dune.com/maxaleks/Omnibridge-Stablecoins
- [ ] https://dune.com/maxaleks/Omnibridge
- [ ] https://dune.com/maxaleks/Bridge-gas-fees

## How it works

- [ ] [Diagrams showing how Omnibridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)
- [ ] ERC-677 instead of ERC-20 (however, does the hardfork remove the `transferAfterCall` for non-bridge callers)? New ERC-677 registry created for every new token bridged over
- [ ] Reference the aftereffects of the [GIP-31 Hardfork](https://forum.gnosis.io/t/gip-31-should-gnosis-chain-perform-a-hardfork-to-upgrade-the-token-contract-vulnerable-to-the-reentrancy-attack/4134) on Omnibridge bridged tokens (also see https://hackmd.io/@koal/SJiDiO0bc)
### Canonical Token Registries

- [Canonical Registry of Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Canonical Registry of Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

### Multiple Representations

In a multi-chain world, some assets (e.g. USDC) can be bridged over from different chains. This is because the two bridges create different representation of the token on Gnosis Chain, even if the underlying asset is the same. 

For example, there are two different representations of USDC on Gnosis Chain: 

| Asset              |  Token Contract                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| USDC from Ethereum | [0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://blockscout.com/xdai/mainnet/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) |
| USDC from BSC      | [0xD10Cc63531a514BBa7789682E487Add1f15A51E2](https://blockscout.com/xdai/mainnet/address/0xD10Cc63531a514BBa7789682E487Add1f15A51E2) |

Gnosis adopts a naming convention where the "chain of origin" is added as a suffix to the token name (e.g. USDC from Ethereum, USDC from BSC)

## Bridge Revenue

The Omnibridge currently generates [bridge revenue](tokenbridge/omnibridge.md#bridge-revenue) through earned yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](../about/treasury.md) to fund Gnosis development. 

## Resources
- [Omnibridge Docs](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension)
- [Diagrams showing how Omnibridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)
