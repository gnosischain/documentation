---
title: xDai Bridge
---

# xDai Bridge

:::info

The xDai bridge can be found at [bridge.gnosischain.com](https://bridge.gnosischain.com/)

:::
## Overview

The [xDai bridge](https://bridge.gnosischain.comd) is a native Dai bridge from Ethereum that is used to mint and burn [xDai](../../about/tokens/xdai-token.md) on Gnosis, the native asset used for gas and transaction fees. 

![xDai Bridge Diagram](/img/bridges/diagrams/dai-bridge.svg) 

Once Dai is bridged into the xDai bridge, the xDai bridge contract on Gnosis mints and sends xDai to the user's corresponding address on Gnosis. This is done through the  [block rewards contract](#block-rewards-contract) and minted in the next block by the consensus algorithm. 

### Parameters

- [ ] To copy over from xDai Bridge docs or Tokenbridge docs (see wishlist)
### Bridge Validators

This process relies on a trusted group of xDai Bridge Validators to perform the role of a cross-chain bridge oracle.

- [ ] Copy over table from https://developers.gnosischain.com/for-validators/for-bridge-validators#xdai-tokenbridge

There is a roadmap to move towards [trustless bridges](../roadmap.md). 
### Bridge Revenue

The xDai bridge currently generates bridge revenue through earned yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](../../about/overview/about-gnosis-dao.md) to fund Gnosis development. 

- [ ] [Explanation on Bridge Revenue](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/dai-compounding)
- [ ] [Dune dashboard for Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges)
### Analytics

- https://dune.com/maxaleks/xDai-Bridge
- https://dune.com/maxaleks/Compounding-in-xDai-bridges
## How it Works

- Use Diagram to explain how it works conceptually
- [ ] [Minting xDai](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/xdai-mechanics-how-xdai-is-minted)
- [ ] How does Burning work?

## Roadmap

- [ ] There is a roadmap to move towards [trustless bridges](../roadmap.md). 
- [ ] How will xDai bridge change with MakerDAO's [Canonical Dai Roadmap](https://medium.com/bankless-dao/canonical-dai-stablecoin-upgrade-aims-to-help-move-dai-off-chain-2a8de6a815c1)
## Resources

- [Tokenbridge Docs on xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
- [xDai Bridge docs](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge)
- [Video Tutorial on how to use the xDai Bridge](https://www.youtube.com/watch?v=oKdh2cOOqUs)

## Docs Wishlist

- [ ] Synthesize [xDai Bridge Docs](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge)
- [ ] Synthesize [Tokenbridge xDai Docs](https://docs.tokenbridge.net/xdai-bridge/about)
- [ ] Does xDai Bridge have an ALM? 