---
sidebar_position: 3
title: Launch a tokenised asset
description: Issue a capped-supply token bound to an off-chain asset, with an on-chain document reference and issuance controls you have tested. 45 minutes.
keywords: [tokenisation, rwa, tokenised asset, erc20, cap, foundry, backed, securities]
---

# Launch a tokenised asset

**Job:** tokenise an asset. **Time:** about 45 minutes. **Chain:** Chiado testnet.

**Prerequisites:** [deploy your first contract](/start/guides/deploy-your-first-contract), Foundry installed, and an account funded on Chiado.

Tokenising an asset means issuing a token whose supply is bound to something that exists off-chain: a property, a bond, a warehouse of coffee. The on-chain part is the easy half, and this guide covers it honestly: a capped-supply ERC-20, a documented reference to the asset, and controls over who can hold it.

Read the scope note before you build anything.

## Scope: what this guide is not

The contract below is the ledger. It is not the product.

A real tokenised asset needs a legal structure that makes the token a claim on the asset: a special purpose vehicle, a custodian, a prospectus or an exemption from one, and a transfer agent. Without that, holders own a token that references an asset they have no enforceable right to. Which structure applies depends on the asset, the jurisdiction, and who you sell to, and getting it wrong is a securities matter rather than an engineering one.

The RWA projects in the [ecosystem directory](https://build.gnosischain.com/) have done this work. Backed issues tokens tracking listed securities against a custodian; that arrangement, not its Solidity, is what makes the token meaningful.

Build the contract to understand the mechanics. Get advice before you issue anything to anyone.

## Set up the project

```bash
forge init gnosis-tokenised-asset
cd gnosis-tokenised-asset
forge install OpenZeppelin/openzeppelin-contracts
```

Add the remapping in `remappings.txt`:

```text
@openzeppelin/=lib/openzeppelin-contracts/
```

Confirm it builds:

```bash
forge build
```

`Compiler run successful`.

## Decide what the token represents

Before writing code, fix three things, because they determine the contract:

- **The unit.** Does one token equal one unit of the asset, or a fractional share of a whole? This guide uses fractional shares of a single asset.
- **The cap.** A tokenised asset has a fixed supply matching the asset. Minting beyond it dilutes existing holders' claim, so the cap is enforced in code rather than by policy.
- **The reference.** Something on-chain must point at the off-chain documents. A URI to the legal documentation and a hash of them is the minimum: the URI can be re-hosted, the hash proves the document has not changed.

The example: a property valued at £500,000, divided into 500,000 shares of £1.

## Write the contract

Create `src/TokenisedAsset.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/// @notice Capped-supply token representing fractional shares in one off-chain asset.
/// @dev The on-chain ledger only. The claim it represents lives in the legal
///      documentation referenced by documentUri and documentHash.
contract TokenisedAsset is ERC20, Ownable {
    /// @notice Maximum tokens that can ever exist, set at deployment.
    uint256 public immutable cap;

    /// @notice Where the legal documentation is published.
    string public documentUri;

    /// @notice keccak256 of the documentation, so re-hosting cannot change the terms.
    bytes32 public documentHash;

    event DocumentUpdated(string uri, bytes32 hash);

    error CapExceeded(uint256 requested, uint256 remaining);

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 cap_,
        string memory documentUri_,
        bytes32 documentHash_
    ) ERC20(name_, symbol_) Ownable(msg.sender) {
        cap = cap_;
        documentUri = documentUri_;
        documentHash = documentHash_;
    }

    /// @notice Issue shares to a holder, up to the cap.
    function issue(address to, uint256 amount) external onlyOwner {
        uint256 remaining = cap - totalSupply();
        if (amount > remaining) revert CapExceeded(amount, remaining);
        _mint(to, amount);
    }

    /// @notice Redeem shares, for example when the asset is sold.
    function redeem(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }

    /// @notice Point at re-published documentation. The hash must match the new document.
    function setDocument(string calldata uri, bytes32 hash) external onlyOwner {
        documentUri = uri;
        documentHash = hash;
        emit DocumentUpdated(uri, hash);
    }
}
```

The owner can issue and redeem but cannot exceed the cap. That limit is immutable and holds even against the issuer. `redeem` burning from an arbitrary holder is a deliberate choice: a transfer agent needs it to settle a real-world redemption. It is also a power holders must be told about, which is the sort of thing the documentation exists to state.

Build it:

```bash
forge build
```

## Test the cap

The cap is the contract's only real guarantee, so test it. Create `test/TokenisedAsset.t.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TokenisedAsset} from "../src/TokenisedAsset.sol";

contract TokenisedAssetTest is Test {
    TokenisedAsset asset;
    address holder = address(0xBEEF);

    function setUp() public {
        asset = new TokenisedAsset(
            "12 Example Street", "EX12", 500_000e18, "ipfs://placeholder", bytes32(uint256(1))
        );
    }

    function test_IssuesUpToCap() public {
        asset.issue(holder, 500_000e18);
        assertEq(asset.totalSupply(), 500_000e18);
        assertEq(asset.balanceOf(holder), 500_000e18);
    }

    function test_RevertsAboveCap() public {
        asset.issue(holder, 499_999e18);
        vm.expectRevert(abi.encodeWithSelector(TokenisedAsset.CapExceeded.selector, 2e18, 1e18));
        asset.issue(holder, 2e18);
    }

    function test_OnlyOwnerIssues() public {
        vm.prank(holder);
        vm.expectRevert();
        asset.issue(holder, 1e18);
    }
}
```

Run them:

```bash
forge test
```

Three tests pass. The middle one is the important one: it proves the cap holds against the owner.

## Hash the documentation

The token points at a document. Produce the hash from the actual file so the on-chain value means something:

```bash
cast keccak "$(cat legal/offering.pdf)"
```

For this walkthrough, hash a placeholder so you have a real value to deploy with:

```bash
cast keccak "placeholder-offering-document-v1"
```

Copy the resulting `0x…` value as `<DOCHASH>`.

## Deploy to Chiado

```bash
forge create src/TokenisedAsset.sol:TokenisedAsset \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev \
  --broadcast \
  --constructor-args \
    "12 Example Street" \
    "EX12" \
    500000000000000000000000 \
    "ipfs://placeholder" \
    <DOCHASH>
```

Note the address as `<ASSET>`. Verify it:

```bash
forge verify-contract <ASSET> src/TokenisedAsset.sol:TokenisedAsset \
  --chain 10200 \
  --verifier blockscout \
  --verifier-url https://gnosis-chiado.blockscout.com/api/ \
  --constructor-args $(cast abi-encode \
    "constructor(string,string,uint256,string,bytes32)" \
    "12 Example Street" "EX12" 500000000000000000000000 "ipfs://placeholder" <DOCHASH>)
```

`Contract successfully verified`.

## Issue shares

Issue 100,000 shares to yourself:

```bash
cast send <ASSET> "issue(address,uint256)" <YOUR_ADDRESS> 100000000000000000000000 \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

`status  1 (success)`.

Now try to exceed the cap, to see the guarantee hold on-chain rather than only in a test:

```bash
cast send <ASSET> "issue(address,uint256)" <YOUR_ADDRESS> 500000000000000000000000 \
  --rpc-url https://rpc.chiadochain.net \
  --account chiado-dev
```

This reverts with `CapExceeded`. A failed transaction here is the correct result.

## Read the supply on-chain

Check what exists against what can ever exist:

```bash
cast call <ASSET> "totalSupply()(uint256)" --rpc-url https://rpc.chiadochain.net
cast call <ASSET> "cap()(uint256)" --rpc-url https://rpc.chiadochain.net
```

The first prints `100000000000000000000000` and the second `500000000000000000000000`. 100,000 of 500,000 shares issued, and the remainder cannot be exceeded.

Confirm the document reference survived deployment:

```bash
cast call <ASSET> "documentHash()(bytes32)" --rpc-url https://rpc.chiadochain.net
```

It matches `<DOCHASH>`.

Through the MCP server, `chain_read_contract` gives your agent the same reading:

```json
{
  "address": "<ASSET>",
  "abi_fragment": "function totalSupply() view returns (uint256)",
  "function": "totalSupply",
  "chain_id": 10200
}
```

And `chain_get_token_info` returns the name, symbol, decimals and holder count as Blockscout has indexed them.

## Switch to mainnet

The contract deploys unchanged against `https://rpc.gnosischain.com` with `--chain 100`.

What changes is everything around it. Before issuing on mainnet you need the legal structure from the scope note, a real document at a durable URI whose hash you have committed, and a decision about transfer restrictions. Most regulated instruments cannot trade freely to any address, which means an allowlist or a permissioned transfer hook this contract does not have.

## What you have

A capped, verified token on Chiado with an immutable supply limit, an on-chain reference to its documentation, and issuance controls you have tested against the owner. That is a sound ledger.

The claim it represents is a legal artefact, not a Solidity one. Look at how the RWA projects in the [ecosystem directory](https://build.gnosischain.com/) have structured theirs before going further.
