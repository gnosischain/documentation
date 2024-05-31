---
sidebar_position: 2
description: List of JSON RPC endpoints and providers to connect your dapp to Gnosis or Chiado
keywords: [rpc, node, rpc node, json rpc, infrastructure, rpc provider, rpc endpoint]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# RPC Providers

Gnosis encourages developers to work with our ecosystem of professional RPC providers that provide high-availability, reliable RPCs for access to the network.

RPC Providers implement the JSON RPC API that Dapps and developers can interact with:

- [JSON RPC API reference](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [JSON RPC Postman](https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest)
- [Start developing in Gnosis](/developers)

## Gateway

[Gateway](https://gateway.fm/) are one of the Core Devs and Core Contributors to Gnosis Chain. Gateway provides a high-availability public RPC as part of their Core Contributor agreement in [GIP-70](https://snapshot.org/#/gnosis.eth/proposal/0xbdc138180bec423df7b1d84c3ff4a85f3d1b62efba5db8f88a29bee2c4e515bb).

Gateway also provides an Archival RPC upon request.

<Tabs>

<TabItem label="Mainnet" value="mainnet">

```
https://rpc.gnosis.gateway.fm
```

</TabItem>
<TabItem label="Chiado (archival)" value="chiado">

```
https://rpc.chiado.gnosis.gateway.fm
```

</TabItem>
</Tabs>

## Gnosis

Gnosis' Core Team provides a free "starter" RPC without any SLA or availability guarantees.

We encourage projects and developers to work with professional RPC providers in the ecosystem, who are better equipped to serve their needs.

<Tabs>
<TabItem label="Mainnet" value="Mainnet">

```shell
# HTTP RPC
https://rpc.gnosischain.com/

# WSS RPC
wss://rpc.gnosischain.com/wss
```

</TabItem>
<TabItem label="Chiado" value="Chiado">

```shell
# HTTP RPC
https://rpc.chiadochain.net

# WSS RPC
wss://rpc.chiadochain.net/wss
```

</TabItem>
</Tabs>

## Nodies DLB

[Nodies DLB](https://nodies.app) offers free public endpoints for Gnosis Mainnet and Chiado (available on request), in addition to Pay-As-You-Go and enterprise plans that cater to the individual needs of developers.

- [Docs](https://docs.nodies.app/)

```
https://lb.nodies.app/v1/406d8dcc043f4cb3959ed7d6673d311a
```

## Ankr

- [Ankr's Docs for Gnosis RPCs](https://www.ankr.com/protocol/public/gnosis/)

<Tabs>
<TabItem label="Mainnet" value="Mainnet">

```
https://rpc.ankr.com/gnosis
```

</TabItem>
<TabItem label="Chiado" value="Chiado">

```
https://rpc.ankr.com/gnosis_testnet
```

</TabItem>
</Tabs>

## Chainnodes

Chainnodes provides low-latency archival nodes for Gnosis, including debug and trace APIs.
Once signed up you can use your dedicated HTTP and Websocket RPC URL with
high throughput for your production grade projects.

- [Chainnodes](https://www.chainnodes.org/)
- [Docs](https://www.chainnodes.org/docs)

Free API keys after signing up.

## Quicknode

- [Quicknode's Docs for Gnosis RPCs](https://www.quicknode.com/docs/gnosis)

## Chainstack

- [Chainstack's Docs for Gnosis RPCs](https://chainstack.com/build-better-with-gnosis-chain/)

## POKT

- [POKT's Docs for Gnosis Chain RPCs](https://docs.pokt.network/supported-blockchains/)

```
https://gnosis-pokt.nodies.app
```

## Blast

- [Blast's Docs for Gnosis RPCs](https://blastapi.io/public-api/gnosis)

```shell
# HTTP RPC
https://gnosis-mainnet.public.blastapi.io

# WSS RPC
wss://gnosis-mainnet.public.blastapi.io
```

## GetBlock

- [GetBlock's Docs for Gnosis Chain RPCs](https://getblock.io/nodes/gno/)

```shell
# HTTP RPC
https://go.getblock.io/<ACCESS_TOKEN>

# WSS RPC
wss://go.getblock.io/<ACCESS_TOKEN>
```

## BlockPI Network

- [BlockPI's Docs for Gnosis RPCs](https://docs.blockpi.io/documentations/api-reference/gnosis)

```
https://gnosis.blockpi.network/v1/rpc/<API_KEY>
```

## Chain49

Free API keys available after signing up.

Archive data for Mainnet and Chiado Testnet is available for paid subscriptions.

- [Chain49.com](https://chain49.com/)
- [Chain49 Docs for EVM-based chains](https://chain49.readme.io/reference/evm-based)

```shell
# Gnosis Mainnet RPC
https://rpc.chain49.com/gnosis/<API_KEY>

# Gnosis Chiado Testnet RPC
https://rpc.chain49.com/gnosis-chiado/<API_KEY>
```

## OnFinality

- [OnFinality](https://onfinality.io)
- [OnFinality's Docs for Gnosis RPCs](https://onfinality.io/networks/gnosis)

```
https://gnosis.api.onfinality.io/public
```

## All That Node

Free API keys available after signing up.

All That Node provides lowest latency archival nodes for Gnosis, including debug and trace APIs. 

- [All That Node](https://www.allthatnode.com/)

```shell
# Gnosis Mainnet RPC
https://gnosis-mainnet.g.allthatnode.com/full/evm/<API_KEY>
```
