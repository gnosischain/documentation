---
sidebar_position: 2
title: Accept stablecoin payments
description: Deploy a verified payment receiver that pulls a stablecoin, records who paid and what for, and lets you withdraw. 40 minutes.
keywords: [stablecoin, payments, eure, usdc, erc20, foundry, payment receiver, monerium]
---

# Accept stablecoin payments

**Job:** accept stablecoin payments in your app. **Time:** about 40 minutes. **Chain:** Chiado testnet.

**Prerequisites:** [deploy your first contract](/start/guides/deploy-your-first-contract), Foundry installed, and an account funded on Chiado.

A payment receiver is the smallest useful piece of on-chain payment infrastructure: a contract that accepts a stablecoin, records who paid and what for, and lets you withdraw. Everything else, invoicing, reconciliation, refunds, builds on this shape.

You will deploy a mock stablecoin on Chiado to pay yourself with, then the receiver, then put a payment through it. On mainnet you would use a real stablecoin; the last section shows how to look up the canonical address rather than guessing it.

## Understand the pattern

ERC-20 tokens do not notify a contract when they arrive. A plain `transfer` to your contract address moves the tokens but triggers no code, so your contract cannot tell who paid or why. Two patterns solve this:

1. **Approve then pull.** The payer calls `approve` on the token, then calls your contract, which calls `transferFrom`. Two transactions, works with every ERC-20.
2. **Transfer with callback.** Token standards like ERC-777 or ERC-1363 call your contract on receipt. One transaction, but only works with tokens that support it.

This guide uses approve-then-pull, because it works with every stablecoin on Gnosis today.

## Set up the project

Work in the project from the previous guide, or start a fresh one:

```bash
forge init gnosis-payments
cd gnosis-payments
```

Install OpenZeppelin for its ERC-20 implementation and interfaces:

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

Add the remapping so imports resolve. Create or edit `remappings.txt`:

```text
@openzeppelin/=lib/openzeppelin-contracts/
```

Confirm the project still builds:

```bash
forge build
```

`Compiler run successful`.

## Deploy a mock stablecoin

Chiado has no canonical stablecoin, so deploy one to test against. Create `src/MockEURe.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @notice Test-only stand-in for a real stablecoin. Anyone can mint.
contract MockEURe is ERC20 {
    constructor() ERC20("Mock EUR e-money", "mEURe") {}

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
```

Deploy it:

```bash
forge create src/MockEURe.sol:MockEURe \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev \
  --broadcast
```

Note the address as `<TOKEN>`. Mint yourself 1,000 tokens:

```bash
cast send <TOKEN> "mint(address,uint256)" <YOUR_ADDRESS> 1000000000000000000000 \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

Check the balance landed:

```bash
cast call <TOKEN> "balanceOf(address)(uint256)" <YOUR_ADDRESS> \
  --rpc-url https://rpc.chiadochain.net
```

This prints `1000000000000000000000`, 1,000 tokens at 18 decimals.

## Write the payment receiver

Create `src/PaymentReceiver.sol`. It accepts payments in one specified token, tags each with a reference so your backend can match it to an order, and lets only the owner withdraw.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract PaymentReceiver {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;
    address public immutable owner;

    uint256 public totalReceived;

    event PaymentReceived(address indexed payer, uint256 amount, bytes32 indexed orderRef);
    event Withdrawn(address indexed to, uint256 amount);

    error NotOwner();
    error ZeroAmount();

    constructor(IERC20 token_) {
        token = token_;
        owner = msg.sender;
    }

    /// @notice Pull `amount` from the caller. The caller must approve first.
    function pay(uint256 amount, bytes32 orderRef) external {
        if (amount == 0) revert ZeroAmount();

        token.safeTransferFrom(msg.sender, address(this), amount);
        totalReceived += amount;

        emit PaymentReceived(msg.sender, amount, orderRef);
    }

    function withdraw(address to) external {
        if (msg.sender != owner) revert NotOwner();

        uint256 balance = token.balanceOf(address(this));
        if (balance == 0) revert ZeroAmount();

        token.safeTransfer(to, balance);
        emit Withdrawn(to, balance);
    }
}
```

Two details worth noting. `SafeERC20` handles tokens that return no boolean from `transfer`, which several older stablecoins do. Indexing `orderRef` lets your backend filter logs for one order without scanning every payment.

Build it:

```bash
forge build
```

`Compiler run successful`.

## Test it before deploying

Write a test so you find mistakes locally rather than on-chain. Create `test/PaymentReceiver.t.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {MockEURe} from "../src/MockEURe.sol";
import {PaymentReceiver} from "../src/PaymentReceiver.sol";

contract PaymentReceiverTest is Test {
    MockEURe token;
    PaymentReceiver receiver;
    address payer = address(0xBEEF);

    function setUp() public {
        token = new MockEURe();
        receiver = new PaymentReceiver(token);
        token.mint(payer, 100e18);
    }

    function test_PaymentIsRecorded() public {
        vm.startPrank(payer);
        token.approve(address(receiver), 25e18);
        receiver.pay(25e18, bytes32("order-1"));
        vm.stopPrank();

        assertEq(receiver.totalReceived(), 25e18);
        assertEq(token.balanceOf(address(receiver)), 25e18);
    }

    function test_OnlyOwnerWithdraws() public {
        vm.startPrank(payer);
        token.approve(address(receiver), 10e18);
        receiver.pay(10e18, bytes32("order-2"));
        vm.expectRevert(PaymentReceiver.NotOwner.selector);
        receiver.withdraw(payer);
        vm.stopPrank();
    }
}
```

Run the tests:

```bash
forge test
```

Both tests pass. `forge test -vvv` shows the traces if you want to see the calls.

## Deploy the receiver

```bash
forge create src/PaymentReceiver.sol:PaymentReceiver \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev \
  --broadcast \
  --constructor-args <TOKEN>
```

Note the address as `<RECEIVER>`. Verify the source so the explorer shows it:

```bash
forge verify-contract <RECEIVER> src/PaymentReceiver.sol:PaymentReceiver \
  --chain-id 10200 \
  --verifier blockscout \
  --verifier-url https://gnosis-chiado.blockscout.com/api/ \
  --constructor-args $(cast abi-encode "constructor(address)" <TOKEN>)
```

`Contract successfully verified`. The constructor arguments must be encoded, or verification fails with a bytecode mismatch.

## Put a payment through

Approve the receiver to pull 25 tokens:

```bash
cast send <TOKEN> "approve(address,uint256)" <RECEIVER> 25000000000000000000 \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

Then pay, tagging it with a reference:

```bash
cast send <RECEIVER> "pay(uint256,bytes32)" 25000000000000000000 $(cast format-bytes32-string "order-1") \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

The receipt shows `status  1 (success)` and two logs: the token's `Transfer` and your `PaymentReceived`.

## Check the balance arrived

Read the running total from the contract:

```bash
cast call <RECEIVER> "totalReceived()(uint256)" --rpc-url https://rpc.chiadochain.net
```

This prints `25000000000000000000`. Confirm the tokens are actually held by the contract, not just counted:

```bash
cast call <TOKEN> "balanceOf(address)(uint256)" <RECEIVER> \
  --rpc-url https://rpc.chiadochain.net
```

Same number. The count and the balance agreeing is the result to look for. If they diverge, the contract accounted for something it did not receive.

Your agent can confirm the same through the MCP server with `chain_read_contract`:

```json
{
  "address": "<RECEIVER>",
  "abi_fragment": "function totalReceived() view returns (uint256)",
  "function": "totalReceived",
  "chain_id": 10200
}
```

Open `https://gnosis-chiado.blockscout.com/address/<RECEIVER>?tab=logs` to see the `PaymentReceived` event with your reference decoded. This is what your backend would watch.

## Withdraw

```bash
cast send <RECEIVER> "withdraw(address)" <YOUR_ADDRESS> \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

Read the contract's token balance again. It is now `0`, and your own balance has gone back up by 25 tokens.

## Switch to mainnet

On Gnosis you use a real stablecoin, and you must not guess its address. Ask the registry for the canonical one. With the MCP server installed, your agent calls `eez_get_contract_addresses`:

```json
{ "app_slug": "monerium", "chain_id": 100 }
```

That returns the EURe token address, checked against Blockscout. You can also read it from the [Monerium record](https://build.gnosischain.com/) in the directory, or from `eez_chain_info`, which lists the canonical tokens for chain 100: EURe, USDC, WXDAI, GNO and sDAI. The same addresses are listed in [useful contracts](/developers/Usefulcontracts).

Deploy the same receiver with that address as the constructor argument, against `https://rpc.gnosischain.com` and `--chain-id 100`.

:::warning
Check the decimals of whichever stablecoin you use. EURe and WXDAI have 18 decimals; USDC on Gnosis has 6. An amount computed for 18 decimals sent to a 6-decimal token is a payment a million million times too large. Read `decimals()` rather than assuming.
:::

## What you have

A verified payment receiver holding real token balances, emitting an indexed event per payment, with an owner-only withdrawal. The pattern scales: add per-order amounts, expiry, or multiple accepted tokens without changing the shape.

Next, [launch a tokenised asset](/start/guides/launch-a-tokenised-asset) issues a token of your own rather than accepting someone else's.
