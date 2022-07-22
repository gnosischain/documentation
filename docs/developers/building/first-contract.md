---
---

# Deploying a Basic Contract

Follows the same process as deploying to Ethereum

---

The Gnosis Chain is an EVM based chain, meaning deployment steps are the same as deployment to Ethereum or other chains. The required changes consist of directing deployment to the proper RPC and network id.

- **RPC**: https://rpc.gnosischain.com ([more RPCs available here](https://developers.gnosischain.com/for-developers/developer-resources#json-rpc-endpoints))
- **Network_ID**: 100


:::note
You will also need a [small amount of xDai](https://developers.gnosischain.com/for-users/get-xdai-tokens) to deploy a contract, and for any contract functions. There is no current xDai testnet, so your contracts will be live! 
For testing purposes, it is recommended to first deploy to the Sokol testnet. After functionality is tested and confirmed, deploy to the Gnosis Chain!
:::

## Tutorials

In general you can choose almost any development enviornment you wish as they all have their own benefits. A few of the most used enviornments are shown below. 

### Hardhat Deployment

TODO, need to go through more dev practice to get this rollin

```bash showLineNumbers
    truffle migrate --network xdai
```

### Truffle Deployment

[This Tutorial on Kauri](https://kauri.io/#collections/POA%20Tutorial%20series/poa-part-1-develop-and-deploy-a-smart-contract/) shows how to deploy a DApp to the POA Sokol test network. It can be adapted to the xDai network with a few minor tweaks.

1. For Gnosis Chain, edit the truffle.js file to the following:

```js showLineNumbers
        require('dotenv').config();
        const HDWalletProvider = require('truffle-hdwallet-provider');

        module.exports = {
        // See <http://truffleframework.com/docs/advanced/configuration>
        // for more about customizing your Truffle configuration!
            networks: {
                xdai: {
                    provider: function() {
                            return new HDWalletProvider(
                        process.env.MNEMONIC,
                        "https://rpc.gnosischain.com")
                    },
                    network_id: 100,
                    gas: 500000,
                    gasPrice: 1000000000
                },
                development: {
                    host: "127.0.0.1",
                    port: 8545,
                    network_id: "*" // Match any network id
                }
            }
        };
```

2. Run the Truffle deployment to the gnosis Chain.

```bash showLineNumbers
    truffle migrate --network xdai
```

### Remix Deployment

This tutorial uses Nifty Wallet or MetaMask and Remix to deploy to POA Sokol. To change the deployment chain, simply select (or configure with MetaMask) the xDai chain. To view your transactions on xDai, use [BlockScout for xDai](https://blockscout.com/xdai/mainnet)

👩💻[Remix Tutorial](https://forum.poa.network/t/tutorial-deploying-your-dapp-to-poa-network/1804)
