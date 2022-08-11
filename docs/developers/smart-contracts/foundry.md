---
title: Using Foundry
description: Using Foundry with Gnosis Chain
keywords: [Foundry, Forge, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Foundry

#### Foundry is a smart contract development toolchain.

Follow the [Foundry documentation](https://book.getfoundry.sh/getting-started/installation) for general installation and overview.

Foundry consists of:

- [Forge](https://github.com/foundry-rs/foundry/blob/master/forge): Ethereum testing framework (like Truffle, Hardhat and DappTools).
- [Cast](https://github.com/foundry-rs/foundry/blob/master/cast): Swiss army knife for interacting with EVM smart contracts, sending      transactions and getting chain data.
- [Anvil](https://github.com/foundry-rs/foundry/blob/master/anvil): local Ethereum node, akin to Ganache, Hardhat Network.

## Compile your Gnosis Contract

Compile your contract with this command:

```bash
forge build
```


Additional compilation options can be found [here](https://book.getfoundry.sh/reference/forge/forge-build).

## Deploy your Contract

Forge can only deploy one contract at a time.

Because Solidity files may contain multiple contracts, ```:<YourContract>``` (Seen below) specifies which contract to deploy.

#### Deploy your contract on Gnosis Chain with the following Forge command:

```bash
forge create --rpc-url https://rpc.gnosischain.com --private-key <your_private_key> src/<YourContract>.sol:<YourContract>
```
#### Deploy with constructor arguments:

Use the ```--constructor-args``` flag to pass arguments to the constructor:

```bash
forge create --rpc-url https://rpc.gnosischain.com \
    --constructor-args <argument-1> <argument-2...>\
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
```

## Verify your Contract

#### Verify your Gnosis Chain contract on deployment using Etherscan:

 Use the ```--verify``` flag as shown below:

```bash
forge create --rpc-url https://rpc.gnosischain.com \
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --etherscan-api-key <your_etherscan_api_key> \
    --verify
```

For information regarding pre-existing contract verification, visit the [offical Forge documentation](https://book.getfoundry.sh/forge/deploying#verifying-a-pre-existing-contract).

For further Contract Verification information, visit our [official page](../verify/)