--- 
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

```tsx showLineNumbers  title="/packages/hardhat-ts/hardhat.config.ts"
    const config: HardhatUserConfig = {
  defaultNetwork,
  namedAccounts: {
    deployer: {
      default: 0, 
    },
  },
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: getMnemonic(),
      },
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    cache: './generated/cache',
    artifacts: './generated/artifacts',
    deployments: './generated/deployments',
  },
  typechain: {
    outDir: '../vite-app-ts/src/generated/contract-types',
  },
};
```

3. Change the TNetworkInfo variable to gnosis

```tsx title="/packages/[your-app]/hardhat.config.ts"
export const targetNetworkInfo: TNetworkInfo = NETWORKS.gnosis;
```

## Compile your Gnosis contract

```
npx hardhat compile
```

## Deploy your Contract

```
npx hardhat run --network <your-network> scripts/deploy.js
```

View your deployed contract any of the [explorers](/tools/explorers).

Visit our [Tools page](/tools) for other support.

## Verify Contract

```
hardhat --network mainnet sourcify
```

Visit our [Contract Verfication Page](/developers/verify/) for more documentation on verification tools.

## Additional Hardhat Documentation

- For more contract verification documentation, refer to this [page.](/developers/verify/README.md)

- Additonal Hardhat deployment documenation is located [here.](https://hardhat.org/hardhat-runner/docs/guides/deploying)