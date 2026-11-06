---
title: Gas Price
description: Get a recommended gas price for Gnosis Chain and Chiado from any node's fee methods, or from the Blockscout explorer's gas price oracle.
keywords: [gas price, oracle, recommended gas price, gnosisscan api, blockscout api, eth_gasPrice, eth_feeHistory]
---

# Gas Price Oracle

Gnosis Chain uses [EIP-1559](/about/specs/hard-forks/eip-1559) fees: each block has a base fee, and a transaction adds a priority fee, a tip for the block proposer. Most wallets and libraries such as viem and ethers fill both in for you. Use the endpoints below when you need the numbers yourself, for example to show a fee estimate in your app.

## From a node

Every Gnosis Chain RPC endpoint answers the standard fee methods. With Foundry's `cast`:

```bash
cast gas-price --rpc-url https://rpc.gnosischain.com
cast rpc eth_maxPriorityFeePerGas --rpc-url https://rpc.gnosischain.com
```

Or with curl:

```bash
curl -s -X POST https://rpc.gnosischain.com \
  -H 'content-type: application/json' \
  --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":1}'
```

Both return values in wei. `eth_feeHistory` returns the base fees and priority fee percentiles of recent blocks, which is what libraries use to estimate EIP-1559 fees. For Chiado, use `https://rpc.chiadochain.net`.

## Blockscout gas price oracle

Blockscout, the Gnosis Chain explorer at [gnosisscan.io](https://gnosisscan.io), shows current prices on its [gas tracker](https://gnosisscan.io/gas-tracker). Its oracle endpoint recommends a slow, average and fast gas price:

```bash title="Gnosis Chain mainnet"
curl https://gnosisscan.io/api/v1/gas-price-oracle
```

```bash title="Chiado testnet"
curl https://gnosis-chiado.blockscout.com/api/v1/gas-price-oracle
```

### Example response

```json
{"slow":0.05,"average":0.07,"fast":1.25}
```

The values are in gwei, not wei like the node methods above.

The same values appear under `gas_prices` in `https://gnosisscan.io/api/v2/stats`, with the time they were last updated. The [Blockscout API documentation](https://docs.blockscout.com/devs/apis) describes the other endpoints.
