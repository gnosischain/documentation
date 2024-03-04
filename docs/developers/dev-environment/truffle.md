---
sidebar_position: 3
title: Using Truffle
description: Using Truffle with Gnosis
keywords: [Truffle, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide]
---

# Using Truffle with Gnosis

Truffle is a development environment used for smart contract compiling, deploying, testing and debugging.

Follow the [Truffle documentation](https://trufflesuite.com/docs/truffle/) for general installation and overview. 

## Config Truffle for Gnosis

Update the config with Gnosis credentials

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
    chiado: {
          provider: function() {
                return new HDWalletProvider(
               process.env.MNEMONIC,
               "https://rpc.chiadochain.net")
          },
          network_id: 10200,
          gas: 500000,
          gasPrice: 1000000000
    },
  }
};
```

## Compile your Gnosis contract

### Default Compile

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
truffle compile --network chiado
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
truffle compile --network gnosis
```
</TabItem>
</Tabs>


### Compile with Options

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
truffle compile [--list <filter>] [--all] [--network chiado] [--quiet]
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
truffle compile [--list <filter>] [--all] [--network gnosis] [--quiet]
```
</TabItem>
</Tabs>

## Deploy your Contract

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
truffle migrate --network chiado
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
truffle migrate --network gnosis
```
</TabItem>
</Tabs>

View your deployed contract any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

Verify with Truffle by using [Truffle Plugin Verify](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy)

Visit our [Contract Verification Page](/developers/verify/) for more documentation on verification tools.

## Additional Truffle Documentation

- Additional Truffle command documentation is located [here](https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy).
