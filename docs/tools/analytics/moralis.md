---
title: Moralis
description: Enterprise-grade APIs and real-time blockchain data that make Web3 development as easy as Web2.
keywords: [moralis, api, query data, wallet data, nft data, token data]
---

[Moralis](https://moralis.io/?utm_source=gnosis-docs&utm_medium=link) is a blockchain data platform that provides developers with all the data they need to build better blockchain applications. From NFT data and token data, through to raw blockchain data, Moralis offers a wide range of products that cover all major crypto and blockchain use cases, and it supports [Gnosis](https://moralis.io/chains/gnosis/?utm_source=gnosis-docs&utm_medium=link) together with all other major EVM chains.

## Moralis APIs

All Moralis APIs are supported on Gnosis and across all other major EVM blockchains. All endpoints support powerful filtering capabilities.

### Wallet API

With Moralis [Wallet API](https://moralis.io/api/wallet/?utm_source=gnosis-docs&utm_medium=link) you can get Wallet balances for tokens, NFTs and native assets, get full wallet history, net worth and a lot more.

### NFT API

With Moralis [NFT API](https://moralis.io/api/nft/?utm_source=gnosis-docs&utm_medium=link) you can get NFT data like collections, owners, prices, images and metadata.

### Token API

With Moralis [Token API](https://moralis.io/api/token/?utm_source=gnosis-docs&utm_medium=link) you can get ERC20 token data like prices, ownership, metadata, transfers, approvals, liquidity, mints and burns.

### Blockchain API

With Moralis [Blockchain API](http://moralis.io/api/blockchain) you can get core blockchain data like blocks, transactions and logs.

## Moralis Streams

Moralis [Streams](https://moralis.io/streams/?utm_source=gnosis-docs&utm_medium=link) allow you to stream blockchain data in real-time via webhooks. Subscribe to any on-chain event, like NFT or token mints, transfers or swaps, add powerful filters and then watch the data flow to your destination in real time.

Use it to build things like wallet notifications, Telegram alerts or just to keep your user balances up to date in real-time by streaming data to your database.

## Getting started with Moralis APIs

In order to use the Moralis APIs you need a Moralis account and a Moralis API key.

1. Go to [admin.moralis.io](https://admin.moralis.io/?utm_source=gnosis-docs&utm_medium=link) and create a Moralis account
2. Login to access the admin interface
3. Go to settings and find your API key
4. Find all endpoints and SDKs in the [Moralis documentation](https://docs.moralis.io)

You can now call any Moralis endpoint, see below for an example.

### Get NFT balances of Wallet

**Request**

```javascript
import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "mmRBnJ94TQu5Fr2FSMCYBAtDtpDKz3axFSqcUZ7wr6skFnJtfrJXW3XRt3AeRyph"
  });

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    "chain": "0x1",
    "format": "decimal",
    "mediaItems": false,
    "address": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}
```

**Response**

```json
{
  "page": 1,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21QYXJhbXMiOnsid2FsbGV0QWRkcmVzcyI6IjB4ZDhkYTZiZjI2OTY0YWY5ZDdlZWQ5ZTAzZTUzNDE1ZDM3YWE5NjA0NSJ9LCJrZXlzIjpbIjE2ODU5MzY5NDQuNTE3Il0sIndoZXJlIjp7Im93bmVyX29mIjoiMHhkOGRhNmJmMjY5NjRhZjlkN2VlZDllMDNlNTM0MTVkMzdhYTk2MDQ1In0sImxpbWl0IjoxMDAsIm9mZnNldCI6MCwib3JkZXIiOltdLCJkaXNhYmxlX3RvdGFsIjp0cnVlLCJleGNsdWRlX3NwYW0iOmZhbHNlLCJ0b3RhbCI6bnVsbCwicGFnZSI6MSwidGFpbE9mZnNldCI6MSwiaWF0IjoxNjkzNDY3ODc0fQ.z5vEhLXquK4l91WxS62KgGzL3zgI8vYuWOe2Uzi64iI",
  "result": [
    {
      "token_address": "0xb365e53b64655476e3c3b7a3e225d8bf2e95f71d",
      "token_id": "1",
      "amount": "1",
      "owner_of": "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      ...
    },
    ...
  ]
}
```

## Getting started with Moralis Streams

1. Go to [admin.moralis.io](https://admin.moralis.io/?utm_source=gnosis-docs&utm_medium=link) and create a Moralis account
2. Login to access the admin interface
3. Go to the Streams page
4. From there you can configure your Moralis Stream from the UI
5. Configure the trigger, what events or what addresses to watch
6. Configure the filters you want
7. Configure which chains you want the Stream to be active on.
8. Set up your destination webhook (where the data should be sent)

You can also set up Streams programmatically, check out the [Moralis Streams documentation](https://docs.moralis.io/streams-api/evm) for a guide on how to do that.

## Tutorials & Guides

### Tutorials

- [How to get all NFTs owned by a wallet address](https://docs.moralis.io/web3-data-api/evm/how-to-get-all-nfts-owned-by-an-address/?utm_source=gnosis-docs&utm_medium=link)
- [How to get the metadata of an NFT](https://docs.moralis.io/web3-data-api/evm/how-to-get-the-metadata-of-an-nft/?utm_source=gnosis-docs&utm_medium=link)
- [How to get all tokens owned by a wallet address](https://docs.moralis.io/web3-data-api/evm/how-to-get-all-erc20-tokens-owned-by-an-address/?utm_source=gnosis-docs&utm_medium=link)
- [How to get the price of any ERC20 token](https://docs.moralis.io/web3-data-api/evm/how-to-get-the-price-of-an-erc20-token/?utm_source=gnosis-docs&utm_medium=link)
- [How to get all token transfers of a wallet address](https://docs.moralis.io/web3-data-api/evm/how-to-get-all-erc20-transfers-by-wallet/?utm_source=gnosis-docs&utm_medium=link)

### Guides

- [How to build an automated Telegram bot](https://docs.moralis.io/guides/automated-blockchain-telegram-bot/?utm_source=gnosis-docs&utm_medium=link)
- [How to build an NFT gates website with NextJS](https://docs.moralis.io/guides/token-gating-website-nextjs/?utm_source=gnosis-docs&utm_medium=link)
- [How to build a ZapperFi clone](https://docs.moralis.io/guides/zapper-clone/?utm_source=gnosis-docs&utm_medium=link)
- [How to get Token Prices](https://www.youtube.com/watch?v=laDsODyofVU)
- [How to build a Blur NFT Marketplace clone](https://www.youtube.com/watch?v=WVEqX8DL4KE)
- [How to build a Metamask portfolio clone](https://www.youtube.com/watch?v=1UD0WqvsKZ8)
