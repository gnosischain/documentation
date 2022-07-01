---
description: Find the analogous token address for tokens bridged on Ethereum and GC
---

# Corresponding token contract addresses (ETH - GC)

There are several approaches to discover the token contract on the Ethereum Mainnet that corresponds to the token contract on the Gnosis Chain.

## Approach #1: BlockScout

BlockScout allows you to see if a token was bridged using the multi-token extension.

![](</img/specs/bridges/image-67.png>)

The link available on the token name leads to the token view in the BlockScout:

![](</img/specs/bridges/image-68.png>)

This view contains information that this token was bridged and a link to the original token.

![](</img/specs/bridges/image-84.png>)

BlockScout also distinguishes bridged tokens at the _Top of the tokens_ page by specifying the bridged property. A worker which fetches this property checks new unprocessed tokens every 1 minute and updates bridged status and it is bridged, adds a link to the original token.

![](</img/specs/bridges/image-2-1.png>)

## Approach #2: Mediator storage

The multi-token mediator on the Gnosis Chain ([`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`](https://blockscout.com/xdai/mainnet/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d)) provides methods for viewing correspondence of bridgeable tokens:

* `foreignTokenAddress` - returns the address of the token contract on the Ethereum Mainnet by specifying the address the token contract on the Gnosis Chain.
* `homeTokenAddress` - returns the address of the token contract on the Gnosis Chain by specifying the address of the token contract on the Ethereum chain.

![The contract page in the BlockScout allows to read the contract's data](</img/specs/bridges/image-85.png>)

![The method to get correspondence for the token contract on the Gnosis Chain](</img/specs/bridges/image-86.png>)

![The method returns the address of the token contract on the Ethereum Mainnet](</img/specs/bridges/image-87.png>)
