--- 
---

# Using Hardhat

#### Hardhat is a development enviornment used for smart contract compiling, deploying, testing and debugging.

Follow the [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#installation) for general installation and overview.

## Config Hardhat for Gnosis

1. Change the default Network to xdai.

```tsx title="/packages/hardhat-ts/hardhat.config.ts"
const defaultNetwork = 'xdai';
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
    xdai: {
      // deprecated url: 'https://rpc.xdaichain.com/',
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

3. Change the TNetworkInfo variable to xdai

```tsx title="/packages/[your-app]/hardhat.config.ts"
export const targetNetworkInfo: TNetworkInfo = NETWORKS.xdai;
```

## Compile your Gnosis contract

```npx hardhat compile```

## Deploy your Contract

```npx hardhat run --network <your-network> scripts/deploy.js```

View your contract with [AnyBlock](https://explorer.anyblock.tools/ethereum/poa/xdai/), [Blockscout](https://blockscout.com/xdai/mainnet/), or [Beacon Chain](https://beacon.gnosischain.com/).

Visit our [Tools page](../../tools) for other support.

## Verify Contract

``` hardhat --network mainnet sourcify ```

Visit our [Contract Verfication Page](../verifying-contracts/) for more documentation on verification tools.

## Additional Hardhat Documentation

- For more contract verification documentation, refer to this [page.](../../developers/verifying-contracts/README.md)

- Additonal Hardhat deployment documenation is located [here.](https://hardhat.org/hardhat-runner/docs/guides/deploying)