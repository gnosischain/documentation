---
---

# Deploying a Basic Contract

Follows the same process as deploying to Ethereum

---

Gnosis is an EVM based chain, meaning deployment steps are the same as deployment to Ethereum or other chains. Check the [network specifications](/about/networks/).

:::note
You will also need a [small amount of xDai](/tools/faucets) to deploy a contract, and for any contract functions.
For testing purposes, it is recommended to first deploy to [Chiado testnet](/about/networks/chiado). After functionality is tested and confirmed, deploy to Gnosis mainnet!
:::

## Tutorials

In general you can choose almost any development environment you wish as they all have their own benefits. A few of the most used environments are shown below. Using the [official ethereum documentation](https://ethereum.org/en/developers/tutorials/hello-world-smart-contract/), you can change the network to Gnosis and deploy a hello world contract.

### Hardhat Deployment

Following the [Official Hardhat documentation](https://hardhat.org/hardhat-runner/docs/guides/project-setup), also how to [configure Hardhat to Gnosis](/developers/smart-contracts/hardhat).

- For Gnosis network Config, you have to export an object from ```hardhat.config.js```

- The ```networks``` config field an optional object where network names map to their configuration.

- There are two kinds of networks in Hardhat: [JSON-RPC](https://eth.wiki/json-rpc/API) based networks, and the built-in Hardhat Network.

- You can customize which network is used by default when running Hardhat by setting the config's ```defaultNetwork``` field. If you omit this config, its default value is ```"hardhat"```.

### Truffle Deployment

[This Tutorial on Kauri](https://kauri.io/#collections/POA%20Tutorial%20series/poa-part-1-develop-and-deploy-a-smart-contract/) shows how to deploy a DApp to the test network. It can be adapted to the Gnosis network with a few minor tweaks.

1. For Gnosis, edit the truffle.js file to the following:

```js showLineNumbers
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
// See <http://truffleframework.com/docs/advanced/configuration>
// for more about customizing your Truffle configuration!
    networks: {
        gnosis: {
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

2. Run the Truffle deployment to Gnosis.

```bash
truffle migrate --network gnosis
```
