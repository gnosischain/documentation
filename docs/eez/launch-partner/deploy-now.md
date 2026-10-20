---
sidebar_position: 2
sidebar_label: Deploy now
slug: /launch-partner/deploy-now
title: "Deploy now: from nothing to a verified contract on Gnosis Chain"
description: A 0-1 guide for launch partners. Rehearse on the Chiado testnet, then deploy and verify a contract on Gnosis Chain mainnet. The mainnet deployment carries over to Gnosis EEZ at the fork with the same address. About 45 minutes.
keywords: [deploy, gnosis chain, mainnet, chiado, foundry, forge, verify, gnosisscan, blockscout, launch partner, gnosis eez]
---

# Deploy now: from nothing to a verified contract on Gnosis Chain

**Job:** deploy and verify a contract on Gnosis Chain mainnet. **Time:** about 45 minutes. **Chains:** Chiado testnet, then Gnosis mainnet.

**Prerequisites:** a terminal on macOS or Linux, Git, a free [Blockscout API key](https://dev.blockscout.com/) for verifying on mainnet, and a small amount of xDai on Gnosis Chain for the mainnet step. Around one xDai is far more than you need.

This guide takes you from an empty directory to a contract on Gnosis Chain mainnet whose source anyone can read on the block explorer. You rehearse every step on Chiado first, where nothing costs real money, then repeat it on mainnet.

**Why mainnet matters here.** Gnosis EEZ goes live by hard-forking the state of Gnosis Chain mainnet. A contract you deploy on mainnet today is on Gnosis EEZ at the same address the moment the fork activates. A contract on Chiado is not. Chiado is for rehearsal, and it gets its own fork for testing before mainnet.

Every step ends in something you can see. If a step does not produce the result described, stop there. The next step will not work.

## Install Foundry

Foundry is the toolchain you will use to compile, test, deploy and verify. Install it, or run `foundryup` to update an existing install:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Open a new terminal and run the installer it placed on your path:

```bash
foundryup
```

Check it worked:

```bash
forge --version
```

You should see a version string. You now have three commands: `forge` builds, tests and deploys, `cast` reads and writes single calls, and `anvil` runs a local node.

## Create the project

Make a new Foundry project and move into it:

```bash
forge init gnosis-launch
cd gnosis-launch
```

Confirm it compiles:

```bash
forge build
```

You should see `Compiler run successful`.

## Write the contract

Replace `src/Counter.sol` with a contract that records who deployed it and counts how many times it has been incremented. It is small on purpose: the point of this guide is the deployment loop, not the contract.

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

## Test it locally

Replace `test/Counter.t.sol` with a test that checks both pieces of state:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter counter;

    function setUp() public {
        counter = new Counter();
    }

    function test_RecordsDeployer() public view {
        assertEq(counter.deployer(), address(this));
    }

    function test_Increments() public {
        counter.increment();
        counter.increment();
        assertEq(counter.count(), 2);
    }
}
```

Delete `script/Counter.s.sol`, which the template created for the old contract, then run the tests:

```bash
rm script/Counter.s.sol
forge test
```

You should see two tests passing. Nothing has touched a network yet.

## Rehearse on Chiado

### Create a testnet account

Generate an account and store it encrypted in Foundry's keystore, so no private key ends up in your shell history:

```bash
cast wallet new
```

Copy the private key it prints, then import it under the name `chiado-dev`:

```bash
cast wallet import chiado-dev --interactive
```

Paste the key, choose a password, and confirm it is stored:

```bash
cast wallet list
```

### Fund it from the faucet

Request test xDai for the address at the [Chiado faucet](https://faucet.gnosischain.com/?chain=chiado), then check it arrived:

```bash
cast balance <TESTNET_ADDRESS> --rpc-url https://rpc.chiadochain.net
```

Anything above zero is enough. If it prints `0`, wait a few seconds and try again.

### Deploy and verify

Deploy:

```bash
forge create src/Counter.sol:Counter \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev \
  --broadcast
```

Enter your keystore password. Foundry prints the deployer, the new contract address and the transaction hash. Then verify the source on Blockscout, replacing `<CONTRACT>` with the address it printed:

```bash
forge verify-contract <CONTRACT> src/Counter.sol:Counter \
  --chain 10200 \
  --verifier blockscout \
  --verifier-url https://gnosis-chiado.blockscout.com/api/
```

On success it prints `Contract successfully verified`. Open `https://gnosis-chiado.blockscout.com/address/<CONTRACT>` and check the code tab shows your Solidity source.

If both commands worked, the mainnet steps below will work the same way. The differences are the account, the RPC URL, the chain ID, and the explorer: Chiado uses Blockscout, and mainnet uses [Gnosisscan](https://gnosisscan.io).

## Deploy to Gnosis Chain mainnet

### Create a separate mainnet account

Do not reuse the testnet key. Generate a fresh one and import it under a different name:

```bash
cast wallet new
cast wallet import gnosis-deployer --interactive
```

:::warning
This account will hold real funds. Keep the private key out of chat windows, files you might commit, and shared machines. For a production deployment, Foundry also accepts `--ledger` or `--trezor` in place of `--account`, so the key never leaves a hardware wallet.
:::

### Fund it with xDai

xDai is the gas token on Gnosis Chain. A deployment like this one costs a fraction of a cent. Get xDai to your new address in either of two ways:

- **Bridge from Ethereum** at [bridge.gnosischain.com](https://bridge.gnosischain.com). [Use Gnosis Bridge](/bridges/usebridges) walks through it.
- **Withdraw directly to Gnosis Chain** from an exchange or wallet that supports it.

Check it arrived:

```bash
cast balance <MAINNET_ADDRESS> --ether --rpc-url https://rpc.gnosischain.com
```

### Deploy

```bash
forge create src/Counter.sol:Counter \
  --rpc-url https://rpc.gnosischain.com \
  --account gnosis-deployer \
  --broadcast
```

Copy the contract address it prints. From here `<CONTRACT>` means the mainnet address.

### Verify

Mainnet verification goes to Gnosisscan, the Gnosis Chain explorer, which is run by Blockscout. Get a free API key from the [Blockscout developer portal](https://dev.blockscout.com/) and put it in your environment rather than on the command line:

```bash
export BLOCKSCOUT_API_KEY=<YOUR_KEY>
```

Then verify:

```bash
forge verify-contract <CONTRACT> src/Counter.sol:Counter \
  --chain 100 \
  --verifier blockscout \
  --verifier-url https://gnosisscan.io/api/ \
  --verifier-api-key $BLOCKSCOUT_API_KEY
```

On success it prints `Contract successfully verified`. Open `https://gnosisscan.io/address/<CONTRACT>`. The **Contract** tab shows your source with a verified tick, and **Read Contract** and **Write Contract** are available.

If you would rather not create a Blockscout account, Sourcify verifies Gnosis Chain contracts with no key. Swap the last three flags for `--verifier sourcify`. The source is then published on [Sourcify](https://sourcify.dev) rather than shown on Gnosisscan.

## Read it back

Change the state once:

```bash
cast send <CONTRACT> "increment()" \
  --rpc-url https://rpc.gnosischain.com \
  --account gnosis-deployer
```

The receipt shows a `status` of `1 (success)`. Read the count and the deployer:

```bash
cast call <CONTRACT> "count()(uint256)" --rpc-url https://rpc.gnosischain.com
cast call <CONTRACT> "deployer()(address)" --rpc-url https://rpc.gnosischain.com
```

The first prints `1`. The second prints your mainnet deployer address.

If you use the Gnosis EEZ MCP server, your agent can make the same read with the `chain_read_contract` tool:

```json
{
  "address": "<CONTRACT>",
  "abi_fragment": "function count() view returns (uint256)",
  "function": "count",
  "chain_id": 100
}
```

## What happens at the fork

Nothing you need to do. When Gnosis EEZ activates, this contract keeps:

| | Today | After the fork |
| --- | --- | --- |
| Address | `<CONTRACT>` | `<CONTRACT>` |
| Storage | `count` is `1` | `count` is `1` |
| Verified source | On Gnosisscan | On Gnosisscan |
| Gas token | xDai | xDai |
| Your keys and tooling | `gnosis-deployer`, Foundry | Unchanged |

What changes is around it: blocks every 2 seconds, proven and settled on Ethereum (an interim proving setup at genesis, then real-time ZK proofs), and the ability to call Ethereum mainnet contracts in the same transaction. See [what stays the same and what changes at the fork](/eez/gnosis-eez) for the full comparison.

## Register as a launch partner

You now have a verified contract on the chain that becomes Gnosis EEZ. Two steps make it count:

1. **Register the deployment** in the [ecosystem directory](https://build.gnosischain.com/). Addresses are checked before they are listed, and the listing is what developers and agents see through the Gnosis EEZ MCP server.
2. **Book a call** with the [ecosystem team](https://calendar.app.google/nG7XU4gvtqZgY9Cm9) to confirm the partnership and get access to the Chiado fork when it opens.

## Next steps

- Replace `Counter` with your own contracts. The loop is the same: test, rehearse on Chiado, deploy and verify on mainnet.
- [Accept stablecoin payments](/developers/guides/accept-stablecoin-payments) puts an EURe or USDC transfer through a contract you control.
- [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow) calls a protocol that lives at the same address on Gnosis Chain and Ethereum.
- [What is Gnosis EEZ](/eez) explains what changes at the fork.
