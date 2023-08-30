---
title: SubQuery
description: SubQuery is a fast, flexible, and reliable open-source data indexer that provides you with custom APIs for your web3 project across all of our supported chains (including Gnosis). 
keywords: [subquery, data indexing, query data, chain data, api]
---

# SubQuery Data Indexing

[SubQuery](http://www.subquery.network/) is a leading data indexer that gives you fast, reliable, decentralised, and customised APIs for your web3 projects. We empower developers from over 80+ ecosystems (including Gnosis) with rich indexed data to allow them to build intuitive and immersive experiences for their users.

The SubQuery Network powers your unstoppable apps with a resilient and decentralised infrastructure network. Use our blockchain developer toolkit to build the web3 applications of the future, without wasting time building a custom backend for data processing activities

## Creating a custom Gnosis Indexer with SubQuery

:::info
See [SubQuery's Documentation](https://academy.subquery.network/quickstart/quickstart_chains/gnosis.html) for more details.
:::

The goal of this quick start guide is to index all [POAP](https://poap.xyz/) mints and transactions on the Gnosis mainnet.

## Steps:

First, install SubQuery CLI globally on your terminal by using NPM `npm install -g @subql/cli`. Use the `subql` CLI to bootstrap a clean project in the network of your choosing by running `subql init` and following the prompts to initialise a Gnosis project.

Don't forget to install dependencies with `npm install` or `yarn install`!

In every SubQuery project, there are 3 key files to update. Let's begin updating them one by one.

### 1. Your Project Manifest File

The Project Manifest (`project.yaml`) file works as an entry point to your Gnosis project. It defines most of the details on how SubQuery will index and transform the chain data. For Gnosis, there are three types of mapping handlers (and you can have more than one in each project):

- [BlockHanders](https://academy.subquery.network/build/manifest/gnosis.html#mapping-handlers-and-filters): On each and every block, run a mapping function
- [TransactionHandlers](https://academy.subquery.network/build/manifest/gnosis.html#mapping-handlers-and-filters): On each and every transaction that matches optional filter criteria, run a mapping function
- [LogHanders](https://academy.subquery.network/build/manifest/gnosis.html#mapping-handlers-and-filters): On each and every log that matches optional filter criteria, run a mapping function

Note that the manifest file has already been set up correctly and doesn’t require significant changes, but you need to import the correct contract definitions and update the datasource handlers.

As we are indexing all transfers and mints for the POAP ERC721 contract, the first step is to import the contract abi definition which can be obtained from [here](https://gnosisscan.io/token/0x22c1f6050e56d2876009903609a2cc3fef83b415#code). Copy the entire contract ABI and save it as a file called `poap.abi.json` in the `/abis` directory.

This section in the Project Manifest now imports all the correct definitions and lists the triggers that we look for on the blockchain when indexing.

**Since we are indexing all mints and transfers for the POAP ERC721 contract, you need to update the `datasources` section as follows:**

```yaml
dataSources:
  - kind: ethereum/Runtime # We use ethereum runtime since Gnosis is a layer-2 that is compatible
    startBlock: 12188423 # When the POAP contract was deployed https://gnosisscan.io/tx/0x2e4873cb1390f5328d389276624d1ffa833e3934657d5a791ee145defff663a2
    options:
      # Must be a key of assets
      abi: poap
      address: "0x22c1f6050e56d2876009903609a2cc3fef83b415" # this is the contract address for POAPs on Gnosis https://gnosisscan.io/token/0x22c1f6050e56d2876009903609a2cc3fef83b415
    assets:
      poap:
        file: "./abis/poap.abi.json"
    mapping:
      file: "./dist/index.js"
      handlers:
        - handler: handleTokenMint
          kind: ethereum/TransactionHandler # We use ethereum handlers since Gnosis is a layer-2 that is compatible
          filter:
            ## The function can either be the function fragment or signature
            # function: '0xaf68b302'
            function: mintToken(uint256 eventId, address to)
        - handler: handleTokenTransfer
          kind: ethereum/LogHandler
          filter:
            topics:
              ## Follows standard log filters https://docs.ethers.io/v5/concepts/events/
              - Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```

The above code indicates that you will be running `handleTokenMint` and `handleTokenTransfer` mapping functions whenever there is a transaction with the function `mintToken` or a log with the signature `Transfer` on any transaction from the [POAP smart contract](https://gnosisscan.io/token/0x22c1f6050e56d2876009903609a2cc3fef83b415).

Check out our [Manifest File](https://academy.subquery.network/build/manifest/gnosis.html) documentation to get more information about the Project Manifest (`project.yaml`) file.

### 2. Update Your GraphQL Schema File

The `schema.graphql` file determines the shape of your data from SubQuery due to the mechanism of the GraphQL query language. Hence, updating the GraphQL Schema file is the perfect place to start. It allows you to define your end goal right at the start.

Remove all existing entities and update the `schema.graphql` file as follows. Here you can see we are indexing token information such as the `id` and the `mintBlockHeight` along with all transfers of that token. There are [foreign keys](https://academy.subquery.network/build/graphql.html#entity-relationships) between all entities.

```graphql
type Event @entity {
  id: ID!
}

type Token @entity {
  id: ID!
  mintBlockHeight: BigInt!
  mintTx: String!
  mintDate: Date!
  mintReceiver: Address!
  currentHolder: Address!
  event: Event!
}

type Address @entity {
  id: ID!
}

type TokenTransfer @entity {
  id: ID! # transactionHash
  txHash: String!
  date: Date!
  blockHeight: BigInt!
  from: Address!
  to: Address!
  token: Token!
}
```

::: warning Important
When you make any changes to the schema file, please ensure that you regenerate your types directory.
:::

SubQuery makes it easy and type-safe to work with your GraphQL entities, as well as smart contracts, events, transactions, and logs. SubQuery CLI will generate types from your project's GraphQL schema and any contract ABIs included in the data sources.

::: code-tabs
@tab:active yarn

```shell
yarn codegen
```

@tab npm

```shell
npm run-script codegen
```

:::

This will create a new directory (or update the existing one) `src/types` which contains generated entity classes for each type you have defined previously in `schema.graphql`. These classes provide type-safe entity loading, and read and write access to entity fields - see more about this process in [the GraphQL Schema](../../build/graphql.md). All entities can be imported from the following directory:

```ts
import { Token, Event, Address, TokenTransfer } from "../types";
```

If you're creating a new Etheruem based project, this command will also generate ABI types and save them into `src/types` using the `npx typechain --target=ethers-v5` command, allowing you to bind these contracts to specific addresses in the mappings and call read-only contract methods against the block being processed. It will also generate a class for every contract event to provide easy access to event parameters, as well as the block and transaction the event originated from. All of these types are written to `src/types/abi-interfaces` and `src/types/contracts` directories. In this example SubQuery project, you would import these types like so.

```ts
import {
  EventTokenLog,
  MintTokenTransaction,
  TransferLog,
} from "../types/abi-interfaces/PoapAbi";
```

Check out the [GraphQL Schema](https://academy.subquery.network/build/graphql.html) documentation to get in-depth information on `schema.graphql` file.

Now that you have made essential changes to the GraphQL Schema file, let’s proceed ahead with the Mapping Function’s configuration.

### 3. Add a Mapping Function

Mapping functions define how chain data is transformed into the optimised GraphQL entities that we previously defined in the `schema.graphql` file.

Navigate to the default mapping function in the `src/mappings` directory. You will be able to see two exported functions: `handleLog`, and `handleTransaction`.

```ts
import { Token, Event, Address, TokenTransfer } from "../types";
import assert from "assert";
import {
  EventTokenLog,
  MintTokenTransaction,
  TransferLog,
} from "../types/abi-interfaces/PoapAbi";
import { BigNumberish } from "ethers";

async function checkGetEvent(id: BigNumberish): Promise<Event> {
  let event = await Event.get(id.toString().toLowerCase());
  if (!event) {
    event = Event.create({
      id: id.toString().toLowerCase(),
    });

    await event.save();
  }
  return event;
}

async function checkGetAddress(id: string): Promise<Event> {
  let address = await Address.get(id.toLowerCase());
  if (!address) {
    address = Address.create({
      id: id.toLowerCase(),
    });

    await address.save();
  }
  return address;
}

export async function handleTokenMint(tx: MintTokenTransaction): Promise<void> {
  logger.info(`New Token Mint transaction at block ${tx.blockNumber}`);
  assert(tx.args, "No tx.args");

  // logger.info(JSON.stringify(tx.args));
  const [eventId, receiverId] = tx.args;
  const event = await checkGetEvent(await eventId);
  const receiver = await checkGetAddress(await receiverId);

  // The tokenID is from the logs from this transaction
  // This searches by the function fragment signature to get the right log
  const log = tx.logs?.find((log) =>
    log.topics.includes(
      "0x4b3711cd7ece062b0828c1b6e08d814a72d4c003383a016c833cbb1b45956e34"
    )
  ) as EventTokenLog;

  if (log) {
    const tokenId = log.args?.tokenId;
    assert(tokenId, "No tokenID");

    const newToken = Token.create({
      id: tokenId.toString(),
      mintTx: tx.hash,
      mintBlockHeight: BigInt(tx.blockNumber),
      mintDate: new Date(Number(tx.blockTimestamp) * 1000), // Saved as a seconds epoch
      mintReceiverId: receiver.id,
      currentHolderId: receiver.id,
      eventId: event.id,
    });

    await newToken.save();
  }
}

export async function handleTokenTransfer(log: TransferLog) {
  logger.info(`New Token Transfer log at block ${log.blockNumber}`);
  assert(log.args, "No log.args");

  // We ignore all transfers from 0x0000000000000000000000000000000000000000 since they are from the original mint
  if (log.args.from != "0x0000000000000000000000000000000000000000") {
    const from = await checkGetAddress(await log.args.from);
    const to = await checkGetAddress(await log.args.to);
    let token = await Token.get(await log.args.tokenId.toString());

    if (!token) {
      token = Token.create({
        id: log.args.tokenId.toString(),
        mintBlockHeight: BigInt(log.blockNumber),
        mintDate: new Date(Number(log.block.timestamp) * 1000), // Saved as a seconds epoch
        mintReceiverId: to.id,
        currentHolderId: to.id,
      });
    }

    const newTokenTransfer = TokenTransfer.create({
      id: log.transactionHash,
      txHash: log.transactionHash,
      date: new Date(Number(log.block.timestamp) * 1000), // Saved as a seconds epoch
      blockHeight: BigInt(log.blockNumber),
      fromId: from.id,
      toId: to.id,
      tokenId: token.id,
    });

    await newTokenTransfer.save();

    token.currentHolderId = to.id;
    await token.save();
  }
}
```

The `handleTokenMint` function receives a `tx` parameter of type `MintTokenTransaction` which is typed from the POAP ABI. This includes transaction function payload data. We first check that we already have an entity for the `Event` and `receiver` address. We then also search through the attached transaction logs for the specific log that includes the resulting `tokenId` that was minted. We extract this data and then save this to the store using the `.save()` function (_Note that SubQuery will automatically save this to the database_).

The `handleTokenTransfer` receives a typed `TransferLog` that contains information about a transfer event of a specific POAP token. It extracts this, ignores if the transfer is from the root account (`0x0000000000000000000000000000000000000000`), and then saves this transfer data. It also retrieves and updates the `currentHolderId` of the token itself.

Check out our [Mappings](https://academy.subquery.network/build/mapping/gnosis.html) documentation to get more information on mapping functions.

### 4. Build Your Project

Next, build your work to run your new SubQuery project. Run the build command from the project's root directory as given here:

::: code-tabs
@tab:active yarn

```shell
yarn build
```

@tab npm

```shell
npm run-script build
```

:::

::: warning Important
Whenever you make changes to your mapping functions, you must rebuild your project.
:::

Now, you are ready to run your first SubQuery project. Let’s check out the process of running your project in detail.

### 5. Run Your Project Locally with Docker

The simplest way to run your project is by running `yarn dev` or `npm run-script dev`. This does all of the following:

1.  `yarn codegen` - Generates types from the GraphQL schema definition and contract ABIs and saves them in the `/src/types` directory. This must be done after each change to the `schema.graphql` file or the contract ABIs
2.  `yarn build` - Builds and packages the SubQuery project into the `/dist` directory
3.  `docker-compose pull && docker-compose up` - Runs a Docker container with an indexer, PostgeSQL DB, and a query service. This requires [Docker to be installed](https://docs.docker.com/engine/install) and running locally. The configuration for this container is set from your `docker-compose.yml`

You can observe the three services start, and once all are running (it may take a few minutes on your first start), please open your browser and head to [http://localhost:3000](http://localhost:3000) - you should see a GraphQL playground showing with the schemas ready to query. [Read the docs for more information](https://academy.subquery.network/run_publish/run.html) or [explore the possible service configuration for running SubQuery](https://academy.subquery.network/run_publish/references.html).

### 6. Query your Project

For this project, you can try to query with the following GraphQL code to get a taste of how it works (open your browser and head to `http://localhost:3000`).

```graphql
# Write your query or mutation here
query {
  tokens(first: 5, orderBy: MINT_BLOCK_HEIGHT_DESC) {
    nodes {
      id
      mintBlockHeight
      mintReceiverId
      mintDate
      eventId
    }
  }
  addresses(first: 5, orderBy: TOKENS_BY_CURRENT_HOLDER_ID_COUNT_DESC) {
    nodes {
      id
      tokensByCurrentHolderId(first: 5) {
        totalCount
        nodes {
          id
        }
      }
    }
  }
}
```

You will see the result similar to below:

```json
{
  "data": {
    "tokens": {
      "nodes": [
        {
          "id": "16947",
          "mintBlockHeight": "12293177",
          "mintReceiverId": "0xbcb0d39073ad99aa68fb6d7b2c2a433892af6fb3",
          "mintDate": "2020-10-01T17:04:40",
          "eventId": "361"
        },
        {
          "id": "16946",
          "mintBlockHeight": "12292651",
          "mintReceiverId": "0x05b512f909daae5575afb47b3eeb0b0afeb14c00",
          "mintDate": "2020-10-01T16:20:30",
          "eventId": "69"
        },
        {
          "id": "16945",
          "mintBlockHeight": "12291133",
          "mintReceiverId": "0x0542e8f95f765b81cd6a08db37d914f664db5d3e",
          "mintDate": "2020-10-01T14:13:20",
          "eventId": "405"
        },
        {
          "id": "16944",
          "mintBlockHeight": "12290462",
          "mintReceiverId": "0xa615f34b170329507b37c142f8f812b8e1393beb",
          "mintDate": "2020-10-01T13:16:35",
          "eventId": "405"
        },
        {
          "id": "16943",
          "mintBlockHeight": "12290460",
          "mintReceiverId": "0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e",
          "mintDate": "2020-10-01T13:16:25",
          "eventId": "405"
        }
      ]
    },
    "addresses": {
      "nodes": [
        {
          "id": "0xb8d7b045d299c9c356bc5ee4fe2dddc8a31280a5",
          "tokensByCurrentHolderId": {
            "totalCount": 1,
            "nodes": [
              {
                "id": "16924"
              }
            ]
          }
        },
        {
          "id": "0xba993c1fee51a4a937bb6a8b7b74cd8dffdca1a4",
          "tokensByCurrentHolderId": {
            "totalCount": 1,
            "nodes": [
              {
                "id": "16912"
              }
            ]
          }
        },
        {
          "id": "0x2b098ce1d5a4f9c2729268a4a3f04b387d4cc7ec",
          "tokensByCurrentHolderId": {
            "totalCount": 1,
            "nodes": [
              {
                "id": "16921"
              }
            ]
          }
        },
        {
          "id": "0x60df279f7cc51d2f0ff903f68c3a8dfcf65419f7",
          "tokensByCurrentHolderId": {
            "totalCount": 1,
            "nodes": [
              {
                "id": "16916"
              }
            ]
          }
        },
        {
          "id": "0x626ea6d1e5ea3fbaba22f5d4005d98e7039d0c99",
          "tokensByCurrentHolderId": {
            "totalCount": 1,
            "nodes": [
              {
                "id": "16919"
              }
            ]
          }
        }
      ]
    }
  }
}
```

You can explore the different possible queries and entities to help you with GraphQL using the documentation draw on the right.

::: tip Note
The final code of this project can be found [here](https://github.com/subquery/subquery-example-gnosis-poap).
:::

## Publish your project

SubQuery is open-source, meaning you have the freedom to run it in the following three ways:

- Locally on your own computer (or a cloud provider of your choosing), [view the instructions on how to run SubQuery Locally](https://academy.subquery.network/run_publish/run.html)
- By publishing it to our enterprise-level [Managed Service](https://managedservice.subquery.network), where we'll host your SubQuery project in production ready services for mission critical data with zero-downtime blue/green deployments. We even have a generous free tier. [Find out how](https://academy.subquery.network/run_publish/publish.html)
- [Coming Soon] By publishing it to the decentralised [SubQuery Network](https://subquery.network/network), the most open, performant, reliable, and scalable data service for dApp developers. The SubQuery Network indexes and services data to the global community in an incentivised and verifiable way

## What Next?

Take a look at some of our advanced features to take your project to the next level!

- [**Multi-chain indexing support**](https://academy.subquery.network/build/multi-chain.html) - SubQuery allows you to index data from across different layer-1 networks into the same database, this allows you to query a single endpoint to get data for all supported networks.
- [**Dynamic Data Sources**](https://academy.subquery.network/build/dynamicdatasources.html) - When you want to index factory contracts, for example on a DEX or generative NFT project.
- [**Project Optimisation Advice**](https://academy.subquery.network/build/optimisation.html) - Some common tips on how to tweak your project to maximise performance.
- [**GraphQL Subscriptions**](https://academy.subquery.network/run_publish/subscription.html) - Build more reactive front end applications that subscribe to changes in your SubQuery project.

## Need Help?

The fastest way to get support is by [searching our documentation](https://academy.subquery.network), or by [joining our discord](https://discord.com/invite/subquery) and messaging us in the `#technical-support` channel.
