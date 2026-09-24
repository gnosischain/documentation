---
title: Envio
description: Envio HyperIndex is an indexing framework for real-time and historical Gnosis Chain data, with HyperSync as its data source.
keywords: [envio, data indexing, query data, chain data, api]
---

[Envio](https://envio.dev/) HyperIndex is an indexing framework for real-time and historical blockchain data. You define the contracts and events to index, write handlers that turn those events into entities, and query the result through a GraphQL API.

HyperIndex supports Gnosis Chain mainnet (chain ID 100) and the Chiado testnet (chain ID 10200). Handlers are written in TypeScript (the default) or ReScript. You can run an indexer locally, self-host it, or deploy it to [Envio Cloud](https://docs.envio.dev/docs/HyperIndex/hosted-service), Envio's managed hosting.

## Envio HyperSync

[HyperSync](https://docs.envio.dev/docs/HyperSync/overview) is Envio's data retrieval layer, used as an alternative to JSON-RPC. It is available on Gnosis at `https://gnosis.hypersync.xyz` and on Chiado at `https://gnosis-chiado.hypersync.xyz`.

HyperIndex uses HyperSync as its default data source, so you don't need to configure RPC URLs or handle rate limits. HyperSync is also available as a standalone API through the [Python, Rust, Node.js, and Go clients](https://docs.envio.dev/docs/HyperSync/hypersync-clients). HyperSync requires an [API token](https://docs.envio.dev/docs/HyperSync/api-tokens).

## Other key features

- Contract import: generate an indexer from the address of a verified contract, or from a local ABI file.
- [Multichain indexing](https://docs.envio.dev/docs/HyperIndex/multichain-indexing): index several chains into one database and query them through one GraphQL API.
- [Factory contracts](https://docs.envio.dev/docs/HyperIndex/dynamic-contracts): index contracts that other contracts create at runtime.
- [Testing](https://docs.envio.dev/docs/HyperIndex/testing): test handler logic without syncing the chain.

## Getting started

You need [Node.js](https://nodejs.org/en/download) 22 or newer, and [Docker Desktop](https://www.docker.com/products/docker-desktop/) to run the indexer locally. [pnpm](https://pnpm.io/installation) is recommended.

Run the following command and follow the prompts:

```bash
pnpx envio init
```

Select `Evm` as the blockchain ecosystem, then choose how to start:

```bash
? Choose an initialization option
> From Address - Lookup ABI from block explorer
  From ABI File - Use your own ABI file
  Template: ERC20
  Template: Greeter
  Feature: External Calls
  Feature: Factory Contract
[↑↓ to move, enter to select, type to filter]
```

With `From Address`, select `gnosis` (or `gnosis-chiado` for the testnet) and enter the contract address. The CLI fetches the ABI from a block explorer and lets you choose which events to index. At the end, it asks you to add an Envio API token to the project's `.env` file.

You can also run contract import without prompts:

```bash
pnpx envio init contract-import explorer -b gnosis -c <CONTRACT_ADDRESS> --single-contract --all-events -n my-indexer -d my-indexer
```

The command generates these files:

- Configuration (`config.yaml`)
- GraphQL schema (`schema.graphql`)
- Event handlers (`src/handlers/`)

To start the indexer locally, make sure Docker is running and run `pnpm dev` from the project folder. See [running the indexer locally](https://docs.envio.dev/docs/HyperIndex/running-locally) and the [HyperIndex quickstart](https://docs.envio.dev/docs/HyperIndex/quickstart).

:::info Envio indexer examples
See the [HyperIndex tutorials](https://docs.envio.dev/docs/HyperIndex/tutorial-erc20-token-transfers) for examples.
:::

## Getting help

- [Envio documentation](https://docs.envio.dev/docs/HyperIndex/overview)
- [Discord](https://discord.gg/envio)
- Email: [hello@envio.dev](mailto:hello@envio.dev)
