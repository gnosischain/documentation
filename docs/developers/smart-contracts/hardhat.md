---
title: Using Hardhat
description: Using Hardhat with Gnosis Chain
keywords: [Hardhat, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Hardhat

#### Hardhat is a development enviornment used for smart contract compiling, deploying, testing and debugging.

Follow the [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#installation) for general installation and overview.

## Config Hardhat for Gnosis

1. Change the default Network to Gnosis.

```tsx title="/packages/hardhat-ts/hardhat.config.ts"
const defaultNetwork = 'gnosis';
```

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
  },
};
```

3. Change the TNetworkInfo variable to gnosis

```js title=hardhat.config.js
export const targetNetworkInfo: TNetworkInfo = NETWORKS.gnosis;
```

## Compile your Gnosis contract

```bash
npx hardhat compile
```

## Deploy your Contract

```npx hardhat run --network gnosis scripts/deploy.js```

View your deployed contract on any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

``` hardhat --network gnosis sourcify ```

Visit our [Contract Verification Page](/developers/verify/) for more documentation on verification tools.

## Additional Hardhat Documentation

- Additonal Hardhat deployment documentation is located [here.](https://hardhat.org/hardhat-runner/docs/guides/deploying)