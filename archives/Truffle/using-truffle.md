---
title: Using Truffle
description: Deploying to Gnosis with Truffle. Archived - Truffle was sunset by Consensys in 2023 and is no longer maintained.
keywords: [truffle, deprecated, sunset, gnosis, deployment, smart contract, archived]
---

# Using Truffle with Gnosis (Archived)

:::danger Archived
Truffle is **no longer a supported way to build on Gnosis Chain**. It was [sunset by Consensys in 2023](https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat) and receives no further maintenance or security updates; its own documentation is now frozen at [archive.trufflesuite.com](https://archive.trufflesuite.com/).

This page is kept for historical reference only and is not published on [docs.gnosischain.com](https://docs.gnosischain.com).
:::

Truffle was a development environment used for smart contract compiling, deploying, testing and debugging.

Follow the [archived Truffle documentation](https://archive.trufflesuite.com/docs/truffle/) for general installation and overview. 

## Config Truffle for Gnosis

Update the config with Gnosis credentials

```js showLineNumbers title=truffle-config.js
module.exports = {
  // See <https://archive.trufflesuite.com/docs/truffle/reference/configuration/>
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

Verify with Truffle by using [truffle-plugin-verify](https://www.npmjs.com/package/truffle-plugin-verify)

Visit our [Contract Verification Page](/developers/Verify%20Smart%20Contracts/) for more documentation on verification tools.

## Additional Truffle Documentation

- Additional Truffle command documentation is located [here](https://archive.trufflesuite.com/docs/truffle/reference/truffle-commands/).
