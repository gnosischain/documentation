---
title: Gas Price
description: The Blockscout gas tracker and gas price api endpoint show a recommended gas price
keywords: [gas price, gas tracker, oracle, recommended gas price, blockscout api]
---

# Gas Price Oracle

## Blockscout Gas Tracker

Blockscout has a gas tracker page that shows the current recommended gas price for slow, average and fast transactions, together with recent gas usage.

- Gnosis Mainnet: [gnosis.blockscout.com/gas-tracker](https://gnosis.blockscout.com/gas-tracker)
- Chiado Testnet: [gnosis-chiado.blockscout.com/gas-tracker](https://gnosis-chiado.blockscout.com/gas-tracker)

## Blockscout Endpoint

The BlockScout gas price api endpoint shows a recommended gas price for average, fast and slow transactions based on recently accepted transactions. Users can decide whether to increase the gas price to speed up a transaction or input a lower gas price which may take longer but is still likely to be successful.

```bash title="Blockscout endpoint - Gnosis Mainnet"
https://gnosis.blockscout.com/api/v1/gas-price-oracle
```

```bash title="Blockscout endpoint - Chiado Testnet"
https://gnosis-chiado.blockscout.com/api/v1/gas-price-oracle
```

* Response calculated for **previous 200 blocks** and **updated every 30 seconds**.
* See the [Blockscout API documentation](https://docs.blockscout.com/devs/apis) for the REST and RPC endpoints.
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