---
title: Using Hardhat
description: Using Hardhat with Gnosis
keywords: [Hardhat, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Hardhat

#### Hardhat is a development environment used for smart contract compiling, deploying, testing and debugging.

Follow the [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#installation) for general installation and overview.

## Config Hardhat for Gnosis

1. Change the default Network to Gnosis.

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```tsx title="/packages/hardhat-ts/hardhat.config.ts"
const defaultNetwork = 'chiado';
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```tsx title="/packages/hardhat-ts/hardhat.config.ts"
const defaultNetwork = 'gnosis';
```
</TabItem>
</Tabs>

2. Update the config with Gnosis credentials

```js showLineNumbers  title="hardhat.config.js"
    const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
    chiado: {
      url: 'https://rpc.chiadochain.net',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    },
  },
};
```

3. Change the TNetworkInfo variable to gnosis

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```js title=hardhat.config.js
export const targetNetworkInfo: TNetworkInfo = NETWORKS.chiado;
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```js title=hardhat.config.js
export const targetNetworkInfo: TNetworkInfo = NETWORKS.gnosis;
```
</TabItem>
</Tabs>

## Compile your Gnosis contract

```bash
npx hardhat compile
```

## Deploy your Contract

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
hardhat run --network chiado scripts/deploy.js
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
hardhat run --network gnosis scripts/deploy.js
```
</TabItem>
</Tabs>

View your deployed contract on any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
hardhat --network chiado sourcify
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
hardhat --network gnosis sourcify
```
</TabItem>
</Tabs>

Visit our [Contract Verification Page](/developers/verify/) for more documentation on verification tools.

## Additional Hardhat Documentation

- Additonal Hardhat deployment documentation is located [here.](https://hardhat.org/hardhat-runner/docs/guides/deploying)