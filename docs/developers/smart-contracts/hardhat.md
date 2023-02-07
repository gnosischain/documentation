---
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
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Select to what explorer verify the contracts
          // Gnosisscan
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
          // Blockscout
          //apiURL: "https://blockscout.com/xdai/mainnet/api",
          //browserURL: "https://blockscout.com/xdai/mainnet",
        },
      },
    ],
    apiKey: {
      //4) Insert your Gnosisscan API key
      //blockscout explorer verification does not require keys
      chiado: "your key",
      gnosis: "your key",
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
          apiURL: "https://blockscout.com/gnosis/chiado/api",
          browserURL: "https://blockscout.com/gnosis/chiado",
        },
      },
      {
        network: "gnosis",
        chainId: 100,
        urls: {
          // 3) Select to what explorer verify the contracts
          // Gnosisscan
          apiURL: "https://api.gnosisscan.io/api",
          browserURL: "https://gnosisscan.io/",
          // Blockscout
          //apiURL: "https://blockscout.com/xdai/mainnet/api",
          //browserURL: "https://blockscout.com/xdai/mainnet",
        },
      },
    ],
    apiKey: {
      //4) Insert your Gnosisscan API key
      //blockscout explorer verification does not require keys
      chiado: "your key",
      gnosis: "your key",
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

View your deployed contract on any of the [explorers](/tools/explorers).

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

Visit our [Contract Verification Page](/developers/verify/) for more documentation on verification tools.

## Additional Hardhat Documentation

- Additonal Hardhat deployment documentation is located [here](https://hardhat.org/hardhat-runner/docs/guides/deploying).