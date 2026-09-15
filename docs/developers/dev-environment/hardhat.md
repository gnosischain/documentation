---
sidebar_position: 1
title: Using Hardhat
description: Using Hardhat with Gnosis
keywords: [Hardhat, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Hardhat

Hardhat is a development environment used for smart contract compiling, deploying, testing and debugging.

[Get started with Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#installation) for general installation and overview.

## Config Hardhat for Gnosis

Update the config with Gnosis networks, check the highlighted lines for instructions:

<Tabs groupId="languages">
<TabItem value="typescript" label="Typescript">

```js {6-8,14,44,55} showLineNumbers  title="hardhat.config.ts"
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

//https://hardhat.org/hardhat-runner/docs/config#json-rpc-based-networks

//Note: keep your mnemonic and private keys securely
//Read more: https://hardhat.org/hardhat-runner/docs/config#hd-wallet-config
//1) You can configure private keys or mnemonic:
//let accounts = ["your private key here"]
let accounts = { mnemonic: "your mnemonic here", }

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  //2) select the default network "gnosis" or "chiado"
  defaultNetwork: "gnosis",
  networks: {
    hardhat: {
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: accounts,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: accounts,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          //Blockscout
          apiURL: "https://gnosis-chiado.blockscout.com/api",
          browserURL: "https://gnosis-chiado.blockscout.com",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Explorer used for contract verification (Blockscout)
          apiURL: "https://gnosis.blockscout.com/api",
          browserURL: "https://gnosis.blockscout.com",
        },
      },
    ],
    apiKey: {
      //4) Blockscout verification does not require an API key; any non-empty string works
      chiado: "blockscout",
      gnosis: "blockscout",
    },
  }
};

export default config;

```

</TabItem>
<TabItem value="javascript" label="Javascript">

```js {5-7,14,44,55} showLineNumbers  title="hardhat.config.js"
require("@nomicfoundation/hardhat-toolbox");

//https://hardhat.org/hardhat-runner/docs/config#json-rpc-based-networks

//Note: keep your mnemonic and private keys securely
//Read more: https://hardhat.org/hardhat-runner/docs/config#hd-wallet-config
//1) You can configure private keys or mnemonic:
//let accounts = ["your private key here"]
let accounts = { mnemonic: "your mnemonic here", }

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  //2) select the default network "gnosis" or "chiado"
  defaultNetwork: "gnosis",
  networks: {
    hardhat: {
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: accounts,
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: accounts,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          //Blockscout
          apiURL: "https://gnosis-chiado.blockscout.com/api",
          browserURL: "https://gnosis-chiado.blockscout.com",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Explorer used for contract verification (Blockscout)
          apiURL: "https://gnosis.blockscout.com/api",
          browserURL: "https://gnosis.blockscout.com",
        },
      },
    ],
    apiKey: {
      //4) Blockscout verification does not require an API key; any non-empty string works
      chiado: "blockscout",
      gnosis: "blockscout",
    },
  }
};
```

</TabItem>
</Tabs>

## Compile your contract

```bash
npx hardhat compile
```

## Deploy your contract

<Tabs groupId="languages">
<TabItem value="typescript" label="Typescript">

```bash title="Gnosis Mainnet"
npx hardhat run scripts/deploy.ts --network gnosis
```

```bash title="Chiado Testnet"
npx hardhat run scripts/deploy.ts --network chiado
```
</TabItem>
<TabItem value="javascript" label="Javascript">

```bash title="Gnosis Mainnet"
npx hardhat run scripts/deploy.js --network gnosis
```

```bash title="Chiado Testnet"
npx hardhat run scripts/deploy.js --network chiado
```
</TabItem>
</Tabs>

View your deployed contract on any of the [explorers](/tools/Blockchain%20Explorers).

To verify the contract source, run `npx hardhat verify --network gnosis <CONTRACT_ADDRESS>`. See the [Blockscout Hardhat verification guide](https://docs.blockscout.com/devs/verification/hardhat-verification-plugin) for options and troubleshooting.

Visit our [Tools page](/tools) for other support.

## Verify Contract

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
npx hardhat verify --network chiado <deployed contract address>
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
npx hardhat verify --network gnosis <deployed contract address>
```
</TabItem>
</Tabs>

Visit our [Contract Verification Page](/developers/Verify%20Smart%20Contracts/) for more documentation on verification tools.

## Additional Hardhat Documentation

- Additional Hardhat deployment documentation is located [here](https://hardhat.org/hardhat-runner/docs/guides/deploying).
