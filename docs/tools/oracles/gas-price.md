---
title: Gas Price
description: The BlockScout and Gnosisscan gas price api endpoints show a recommended gas price
keywords: [gar price, oracle, recommended gas price, gnosisscan api, blockscout api]
---

# Gas Price Oracle

## Gnosisscan Endpoint

Gnosisscan has a [gas tracker page](https://gnosisscan.io/gastracker) and an API endpoint to query the value.

```bash title="Gnosisscan endpoint - Gnosis Mainnet"
https://api.gnosisscan.io/api?module=proxy&action=eth_gasPrice
```

Check the [Gnosisscan APIs documentation](https://docs.gnosisscan.io/) for more endpoints.

### Example response

```json
{"jsonrpc":"2.0","result":"0xa83efbe0","id":73}
```

![Gas price display on Gnosisscan](</img/tools/gasprice-gs.png>)


## Blockscout Endpoint

The BlockScout gas price api endpoint shows a recommended gas price for average, fast and slow transactions based on recently accepted transactions. Users can decide whether to increase the gas price to speed up a transaction or input a lower gas price which may take longer but is still likely to be successful.

```bash title="Blockscout endpoint - Gnosis Mainnet"
https://blockscout.com/xdai/mainnet/api/v1/gas-price-oracle
```

```bash title="Blockscout endpoint - Chiado Testnet"
https://blockscout.chiadochain.net/api/v1/gas-price-oracle
```

* Response calculated for **previous 200 blocks** and **updated every 30 seconds**.
* Response criteria for average, fast and slow gas estimates follow [EthGasStation recommendations](https://github.com/ethgasstation/gasstation-express-oracle/blob/master/gasExpress.py#L16-L18).

### Example response

```json
{"average":2.0,"fast":3.0,"slow":1.51}
```

| Response | Denomination | <p>Response Threshold <br/>(Min gas price per block from previous 200 blocks)</p> |
| -------- | ------------ | ---------------------------------------------- |
| average  | gwei         | 60th percentile of min gas price txs           |
| fast     | gwei         | 90th percentile of min gas price txs (top 10%) |
| slow     | gwei         | 35th percentile of min gas price txs           |

![Gas price display on BlockScout](</img/tools/gasprice.png>)