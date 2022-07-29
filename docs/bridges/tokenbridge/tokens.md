---
title: Bridging Tokens
---

- Need to identify what is happening with ERC677 - with the hardfork, do we still mint ERC677 on Gnosis Chain? Or are they vanilla ERC20s?

Diagrams
https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals

- https://forum.gnosis.io/t/gip-31-should-gnosis-chain-perform-a-hardfork-to-upgrade-the-token-contract-vulnerable-to-the-reentrancy-attack/4134

Bridged tokens are non-standard and hav a hook that calls token receiver on every transfer

Do Bridged tokens still come out on the other side as ERC-677 tokens?
- Need to emphasize wtf is going on

## Multiple Token Instances

In a multi-chain world, some assets (e.g. USDC) can be bridged over from different chains. This is because the two bridges create different representation of the token on Gnosis Chain, even if the underlying asset is the same. 

For example, there are two different representations of USDC on Gnosis Chain: 

| Asset                      |                                                                                                        |     |
| -------------------------- | ------------------------------------------------------------------------------------------------------ | --- |
| USDC from Ethereum | [0xDDA...7A83](https://blockscout.com/xdai/mainnet/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) |     |
| USDC from BSC      | [0xD10...51E2](https://blockscout.com/xdai/mainnet/address/0xD10Cc63531a514BBa7789682E487Add1f15A51E2)                                                                                                       |     |

Gnosis adopts a naming convention where the "chain of origin" is added as a suffix to the token name. 

```
USDC from Ethereum
USDC from Binance Smart Chain
```

## Bridged Token Registries

- [Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)


## Hardfork

## ERC-677
- Hardfork
- What is the actual representation
- New ERC677 contract is created for each new token bridged over

## Bridge Revenue
