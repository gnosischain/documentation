---
title: Introduction
description: Hashi is an EVM oracle aggregator
keywords: [hashi, oracle aggregator]
---

# What is Hashi

:::info
Check out the latest update for Hashi in [Hashi docs](https://hashi-doc.gitbook.io/hashi/v0.1/deployment)!
:::

Hashi is an EVM Hash Oracle Aggregator, designed to facilitate [a principled approach to cross-chain bridge security.](https://ethresear.ch/t/hashi-a-principled-approach-to-bridges/14725)

The primary insight being that the vast majority of bridge-related security incidents could have had minimal impact if the systems relying on them had built in some redundancy. In other words, it's much more secure to require messages be validated by multiple independent mechanisms, rather than by just one.

Hashi aims to create “additive security” to cross-chain messages by aggregating block headers from different sources. A block header will be considered valid only when a number of block sources (oracles) above a certain threshold report the same result.
Hashi is the first step towards a principled approached to bridges and will play a key role in the Gnosis Chain interoperability roadmap.

Apart from block header, Hashi also provides arbitrary message relaying option. Check out [Message Dispatching with Yaho and Yaru](Application.md#message-dispatching-using-yaho-and-yaru) for more details.

## Oracles

Oracles consists of the bridge solutions available in the market, such as AMB, Telepathy, Dendreth, etc. To provide an universal interface for Hashi, an adapter contract is designed specifically for each oracle. Some of the oracles require header reporter to report block header in certain slot.

Existing oracle adapters:

- [Telepathy ZK light client](https://docs.telepathy.xyz/)
- [Dendreth ZK light client](https://github.com/metacraft-labs/DendrETH)
- [Gnosis AMB bridge](../tokenbridge/amb-bridge.md)
- [Sygma protocol](https://buildwithsygma.com/)
- [Wormhole](https://wormhole.com/)

In progress:

- [Celer](https://cbridge-docs.celer.network/)
- [LayerZero](https://layerzero.network/)
- [Multichain](https://multichain.xyz/)
- [Axelar](https://axelar.network/)

## Resources

- Repository: [github.com/gnosis/hashi](https://github.com/gnosis/hashi)
- Intro discussion: [ethresear.ch/t/hashi-a-principled-approach-to-bridges](https://ethresear.ch/t/hashi-a-principled-approach-to-bridges/14725)
- Intro thread: [twitter.com/auryn_macmillan/status/1632696493525323778](https://twitter.com/auryn_macmillan/status/1632696493525323778?s=20)
- Ask questions on the [Gnosis Chain discord](https://discord.gg/gnosischain) - #hashi channel
