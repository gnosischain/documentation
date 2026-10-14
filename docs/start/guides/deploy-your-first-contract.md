---
sidebar_position: 1
title: Deploy your first contract
description: Go from an empty directory to a verified contract on Gnosis, with a state change you read back two ways. 30 minutes.
keywords: [foundry, forge, deploy, verify, blockscout, chiado, solidity]
---

# Deploy your first contract

**Job:** go from nothing to a verified contract on Gnosis. **Time:** about 30 minutes. **Chain:** Chiado testnet.

**Prerequisites:** a terminal on macOS or Linux, and Git installed.

This guide takes you from an empty directory to a contract whose source code anyone can read on the block explorer. You will work on Chiado, the Gnosis testnet, so nothing costs real money. The last section shows what changes for mainnet.

Every step ends in something you can see. If a step does not produce the result described, stop there. The next step will not work.

## Install Foundry

Foundry is the toolchain you will use to compile, deploy and verify. Install it:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Then open a new terminal and run the installer it placed on your path:

```bash
foundryup
```

Check it worked:

```bash
forge --version
```

You should see a version string. You now have three commands available: `forge` builds and deploys, `cast` reads and writes single calls, and `anvil` runs a local node.

## Create the project

Make a new Foundry project and move into it:

```bash
forge init gnosis-first-contract
cd gnosis-first-contract
```

`forge init` writes a working project with a sample contract and test. Confirm it compiles:

```bash
forge build
```

You should see `Compiler run successful`. An `out/` directory now holds the compiled artefacts.

## Write the contract

Replace `src/Counter.sol` with a contract that records who deployed it and counts how many times it has been incremented. Small, but enough to have state worth reading back.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    address public immutable deployer;
    uint256 public count;

    event Incremented(address indexed by, uint256 newCount);

    constructor() {
        deployer = msg.sender;
    }

    function increment() external {
        count += 1;
        emit Incremented(msg.sender, count);
    }
}
```

Compile it:

```bash
forge build
```

`Compiler run successful` again. If the compiler complains about the pragma, check the `solc` version in `foundry.toml` is 0.8.20 or later.

## Create an account

You need an account to deploy from. Foundry can generate one and store it encrypted, so no private key ends up in a shell history or a file.

```bash
cast wallet new
```

This prints an address and a private key. Import the key into Foundry's keystore under the name `chiado-dev`:

```bash
cast wallet import chiado-dev --interactive
```

Paste the private key when prompted, then choose a password. Confirm the account is stored:

```bash
cast wallet list
```

You should see `chiado-dev` listed.

:::warning
This account is for testnet work only. Never import a key that holds real funds into a development keystore, and never paste a private key into a chat window or a file you might commit.
:::

## Fund the account on Chiado

Chiado is the Gnosis testnet. Its chain ID is 10200 and its gas token is a valueless test xDai.

Copy your address from the previous step and request funds from the faucet at [faucet.chiadochain.net](https://faucet.chiadochain.net).

Check the balance arrived:

```bash
cast balance <YOUR_ADDRESS> --rpc-url https://rpc.chiadochain.net
```

The command prints a number in wei. Anything above zero is enough to continue. If it prints `0`, wait a few seconds and run it again. The faucet takes a moment.

## Deploy to Chiado

Deploy the contract, passing the RPC endpoint and the account you imported:

```bash
forge create src/Counter.sol:Counter \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev \
  --broadcast
```

Enter your keystore password when prompted. Foundry prints three things: the deployer address, the new contract address, and the transaction hash.

Copy the contract address. The rest of the guide refers to it as `<CONTRACT>`.

Open `https://gnosis-chiado.blockscout.com/address/<CONTRACT>` in a browser. You should see the contract, its creation transaction, and a balance of zero. The code tab shows bytecode but no source. That comes next.

## Verify the contract on Blockscout

Verification publishes your source code and links it to the deployed bytecode, so anyone can read what the contract actually does. Until you do this, the explorer shows only opaque bytes.

```bash
forge verify-contract <CONTRACT> src/Counter.sol:Counter \
  --chain-id 10200 \
  --verifier blockscout \
  --verifier-url https://gnosis-chiado.blockscout.com/api/
```

The command polls until Blockscout responds. On success it prints `Contract successfully verified`.

Reload the explorer page. The code tab now shows your Solidity source, and two new tabs appear: **Read contract** and **Write contract**. That green tick is the observable result of this step.

## Change the state

Call `increment()` so the contract has something to read back:

```bash
cast send <CONTRACT> "increment()" \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

The command prints a transaction receipt with `status  1 (success)`. The receipt also lists one log, the `Incremented` event.

## Read it back on-chain

Read the count directly, without the explorer:

```bash
cast call <CONTRACT> "count()(uint256)" --rpc-url https://rpc.chiadochain.net
```

This prints `1`. Read the deployer as well, and check it matches the address you deployed from:

```bash
cast call <CONTRACT> "deployer()(address)" --rpc-url https://rpc.chiadochain.net
```

If you have the Gnosis EEZ MCP server installed, your agent can do the same read without leaving the conversation, using the `chain_read_contract` tool:

```json
{
  "address": "<CONTRACT>",
  "abi_fragment": "function count() view returns (uint256)",
  "function": "count",
  "chain_id": 10200
}
```

It returns `{ "result": "1" }`, the same value, from the same chain, through a different route. Your agent can also call `chain_get_contract_source` on the address to confirm the source is verified.

## Switch to mainnet

Everything above works identically on Gnosis mainnet. Three things change:

|  | Chiado | Gnosis |
| --- | --- | --- |
| Chain ID | 10200 | 100 |
| RPC URL | `https://rpc.chiadochain.net` | `https://rpc.gnosischain.com` |
| Explorer | `https://gnosis-chiado.blockscout.com` | `https://gnosisscan.io` |

The gas token on mainnet is xDai, and it is worth real money, though a deployment like this one costs a fraction of a cent. Fund the account by bridging at [bridge.gnosischain.com](https://bridge.gnosischain.com) rather than from a faucet.

:::warning
Use a different account for mainnet than the one you generated here. A testnet key that has been pasted around should never hold value.
:::

## What you have

A deployed contract, verified source on Blockscout, and one state change you read back two ways. That is the full loop: write, deploy, verify, read.

Next, [accept stablecoin payments](/start/guides/accept-stablecoin-payments) puts a token transfer through a contract you control.
