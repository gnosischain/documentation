---
title: Envio
description: Envio is a feature-rich indexing solution for fast and flexible access to real-time and historical data for any EVM.
keywords: [envio, data indexing, query data, chain data, api]
---

[Envio](https://envio.dev/) is a feature-rich indexing solution that provides developers with a seamless and efficient way to index and aggregate blockchain data for any EVM. The indexed data is easily accessible through custom GraphQL queries, providing developers with the flexibility and power to retrieve specific information.

Envio offers native support for Gnosis (both testnet and mainnet) and has been designed to support high-throughput blockchain applications that rely on real-time data for their business requirements.

Designed to optimize the user experience, Envio offers automatic code generation, flexible language support, quickstart templates, and a reliable cost-effective [hosted service](https://docs.envio.dev/docs/hosted-service).

Indexers on Envio can be written in JavaScript, TypeScript, or ReScript.

## Envio HyperSync 

Envio supports [HyperSync](https://docs.envio.dev/docs/hypersync) on Gnosis mainnet. 

HyperSync is an indexed layer of the Gnosis blockchain, providing accelerated APIs (JSON-RPC bypass) for the hyper-speed syncing of historical data. Developers do not need to worry about RPC URLs, rate-limiting, or managing infrastructure, and can easily sync large datasets in a few minutes, something that would usually take 20-100x longer via JSON-RPC. 


## Other Key Features 

- Contract Import: Autogenerate the key boilerplate for an entire Indexer project off a single smart contract definition. Deploy within minutes. 

- Multi-chain Support: Aggregate data across multiple networks into a single database. Query all your data with a unified GraphQL API. 

- Detailed logging and error messaging are provided for effective troubleshooting and debugging.

- Quickstart templates with pre-defined indexing logic for popular OpenZeppelin contracts.


## Getting Started

The following files are required from the user to run the Envio indexer:

- Configuration (defaults to `config.yaml`)
- GraphQL Schema (defaults to `schema.graphql`)
- Event Handlers (defaults to `src/EventHandlers.*` depending on the language chosen)

These files are auto-generated according to the template and language chosen by running the `envio init` command.

[**Quickstart Guide**](https://docs.envio.dev/docs/quickstart)


```bash
? Would you like to start from a template or migrate from a subgraph?
> "Template"
  "SubgraphMigration"
[↑↓ to move, enter to select, type to filter]

```

Then choose a template out of the possible options

```bash
? Which template would you like to use?
> "Blank"
  "Greeter"
  "ERC-20"
[↑↓ to move, enter to select, type to filter]
```

Then choose a language from **Javascript**, **Typescript**, or **Rescript** to write the event handlers file.

```bash
? Which language would you like to use?
> "Javascript"
  "Typescript"
  "Rescript"
[↑↓ to move, enter to select, type to filter]
```

This will create the config, schema and event handlers files according to the template and language chosen.

:::info Envio Indexer Examples
Click [here](https://docs.envio.dev/docs/example-uniswap-v3) for Envio Indexer Examples.
:::


## Getting Help

Indexing can be a rollercoaster, especially for more complex use cases. Our engineers are available to help you with your data availability needs.

Join our growing community of elite builders, and find peace of mind with Envio. 

* [Discord](https://discord.gg/mZHNWgNCAc)
* Email: [hello@envio.dev](mailto:hello@envio.dev)
