---
description: Operations performed by owners of the MultiSig wallet
---

# Contracts Management

## Action flow

Bridge administrators can perform 4 groups of operations with the xDai bridge. All operations are performed by owners of the Multisignature Wallet which requires several accounts to confirm the operation transaction.

Multisignature Wallet Addresses:

* ETH Mainnet: `0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd`, [ABI](https://github.com/poanetwork/poa-chain-spec/blob/4fe29a700b1331c570e20c5424523e522f5ab4d7/abis/bridge/MultiSigWallet.json), [Etherscan](https://etherscan.io/address/0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd)
* Gnosis Chain: `0x0d3726e5a9f37234d6b55216fc971d30f150a60f`, [ABI](https://github.com/poanetwork/poa-chain-spec/blob/4fe29a700b1331c570e20c5424523e522f5ab4d7/abis/bridge/MultiSigWallet.json), [Blockscout](https://blockscout.com/poa/dai/address/0x0d3726e5a9f37234d6b55216fc971d30f150a60f/transactions)

**Example action flow:**

1. One of the multisig wallet owner encodes the method call with a set of parameters (if any). For example, this can be done with [the ABI Encoding Service](https://abi.hashex.org).
2. The encoded sequence of bytes is used to create a transaction for the multisig wallet contract. This is done with the `submitTransaction` method of the multisig wallet contract. The method raises the event `Submission` containing the index of the registered transaction. The index is shared with the other owners of the wallet.
3. The rest of the owners confirm the transaction by invoking `confirmTransaction` from the multisig wallet contract. As soon as enough confirmations are received, the method encoded in step 1 is invoked automatically. This is important because adequate gas limits must be set for that transaction and set of confirmations sent by the wallet owner finalizing the operation.
4. If the method is not invoked because the gas limit is exceeded, the owners can execute the confirmed transaction manually by sending `executeTransaction`.

The particular action flow will vary for different management operations.

* [Upgrade Contracts](/specs/bridges/xdai/contracts-management/upgrade-contracts)
* [Configuration](/specs/bridges/xdai/contracts-management/configuration)
* [Admin Privileges Management](/specs/bridges/xdai/contracts-management/admin-privileges-management)
* [ERC20 Tokens Release](/specs/bridges/xdai/contracts-management/erc20-tokens-release)
