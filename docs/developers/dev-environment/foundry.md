---
sidebar_position: 2
title: Using Foundry
description: Using Foundry with Gnosis
keywords: [Foundry, Forge, Gnosis, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Foundry

#### Foundry is a smart contract development toolchain.

Follow the [Foundry documentation](https://www.getfoundry.sh/introduction/installation) for general installation and overview.

Foundry consists of:

- [Forge](https://www.getfoundry.sh/forge): Ethereum testing framework (like Truffle, Hardhat and DappTools).
- [Cast](https://www.getfoundry.sh/cast): Swiss army knife for interacting with EVM smart contracts, sending      transactions and getting chain data.
- [Anvil](https://www.getfoundry.sh/anvil): local Ethereum node, akin to Ganache, Hardhat Network.

## Compile your Gnosis Contract

Compile your contract with this command:

```bash
forge build
```


Additional compilation options can be found [here](https://www.getfoundry.sh/reference/forge/build).

## Deploy your Contract

Forge can only deploy one contract at a time.

Because Solidity files may contain multiple contracts, ```:<YourContract>``` (Seen below) specifies which contract to deploy.

#### Deploy your contract on Gnosis with the following Forge command:

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
forge create --rpc-url https://rpc.chiadochain.net --private-key <your_private_key> src/<YourContract>.sol:<YourContract> --broadcast
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
forge create --rpc-url https://rpc.gnosischain.com --private-key <your_private_key> src/<YourContract>.sol:<YourContract> --broadcast
```
</TabItem>
</Tabs>

#### Deploy with constructor arguments:

Use the ```--constructor-args``` flag to pass arguments to the constructor:

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
forge create --rpc-url https://rpc.chiadochain.net \
    --constructor-args <argument-1> <argument-2...>\
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --broadcast
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
forge create --rpc-url https://rpc.gnosischain.com \
    --constructor-args <argument-1> <argument-2...>\
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --broadcast
```
</TabItem>
</Tabs>

## Verify your Contract

#### Verify your Gnosis contract on deployment using Blockscout:

Get a free API key from the [Blockscout developer portal](https://dev.blockscout.com/).

 Use the ```--verify``` flag as shown below:

<Tabs groupId="networks">
<TabItem value="chiado" label="Chiado Testnet">

```bash
forge create --rpc-url https://rpc.chiadochain.net \
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --broadcast \
    --verify \
    --verifier blockscout \
    --verifier-url https://gnosis-chiado.blockscout.com/api/ \
    --verifier-api-key <your_blockscout_api_key>
```
</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```bash
forge create --rpc-url https://rpc.gnosischain.com \
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --broadcast \
    --verify \
    --verifier blockscout \
    --verifier-url https://gnosisscan.io/api/ \
    --verifier-api-key <your_blockscout_api_key>
```
</TabItem>
</Tabs>

For information regarding pre-existing contract verification, visit the [official Forge documentation](https://www.getfoundry.sh/guides/deploying-contracts#manual-verification).

For further Contract Verification information, visit our [official page](/developers/Verify%20Smart%20Contracts/)