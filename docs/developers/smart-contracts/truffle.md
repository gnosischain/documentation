--- 
---

# Using Truffle

#### Truffle is a development enviornment used for smart contract compiling, deploying, testing and debugging.

Follow the [Truffle documentation](https://trufflesuite.com/docs/truffle/) for general installation and overview. 

## Config Truffle for Gnosis

- Update the config with Gnosis credentials

```tsx
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

## Compile your Gnosis contract

```
truffle compile [--list <filter>] [--all] [--network gnosis] [--quiet]
```

## Deploy your Contract

```
truffle migrate --network gnosis
```

View your deployed contract any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

Verify with Truffle by using [Truffle Plugin Verify](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy)

Visit our [Contract Verfication Page](/developers/verify/) for more documentation on verification tools.

## Additional Truffle Documentation

- For more contract verification documentation, refer to this [page](/developers/verify/).

- Additonal Truffle command documenation is located [here](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy).