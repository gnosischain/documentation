---
title: Codex
description: Codex is a blockchain data API providing real-time and historical token data across 70+ networks via GraphQL.
keywords: [codex, data indexing, token data, dex data, api, graphql]
---

[Codex](https://codex.io/) is a blockchain data API that provides real-time and historical token data across 70+ networks via GraphQL, including Gnosis Chain.

With Codex, developers can access:

- **Token prices** — Real-time and historical price data for any token on Gnosis
- **DEX trades** — Swap events across decentralized exchanges
- **Liquidity pools** — Pool data including reserves, volume, and fees
- **Wallet activity** — Token balances and transaction history

## Getting Started

### 1. Get an API key

Sign up at [codex.io](https://codex.io/) to get your API key.

### 2. Query the GraphQL API

```bash
curl -X POST https://graph.codex.io/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: YOUR_API_KEY" \
  -d '{"query": "{ getNetworks { name id } }"}'
```

## Resources

- [Codex API Documentation](https://docs.codex.io/)
- [API Explorer](https://explorer.codex.io/)
- [Supported Networks](https://docs.codex.io/reference/supported-networks)
