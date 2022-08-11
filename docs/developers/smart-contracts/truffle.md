--- 
title: Using Truffle
description: Using Truffle with Gnosis Chain
keywords: [Truffle, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide]
---

# Using Truffle with Gnosis Chain

#### Truffle is a development environment used for smart contract compiling, deploying, testing and debugging.

Follow the [Truffle documentation](https://trufflesuite.com/docs/truffle/) for general installation and overview. 

## Config Truffle for Gnosis

- Update the config with Gnosis credentials

```js showLineNumbers title=truffle-config.js
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
  }
};
```

## Compile your Gnosis contract

### Default Compile

```bash
truffle compile --network gnosis
```

### Compile with Options

```bash
truffle compile [--list <filter>] [--all] [--network gnosis] [--quiet]
```

## Deploy your Contract

```bash
truffle migrate --network gnosis
```

View your deployed contract any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

Verify with Truffle by using [Truffle Plugin Verify](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy)

Visit our [Contract Verfication Page](/developers/verify/) for more documentation on verification tools.

## Additional Truffle Documentation

- Additonal Truffle command documenation is located [here](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy).
