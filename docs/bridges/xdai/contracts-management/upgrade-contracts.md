---
description: Upgrading bridge or validators contracts
---

# Upgrade Contracts - Instructions

There are two possible scenarios for how the bridge or validators contracts can be upgraded:

* a security fix when only the contract implementation is changed
* an improvement when the contract implementation upgrade requires initialization of storage values

:::info
The instructions use [NiftyWallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid) to invoke contract methods. An example how to use this functionality is available [here](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)

Any tool that can create transactions based on contract source code or the ABI may be used.
:::

## **Security upgrade**

1. Deploy a new implementation of the bridge or validators contract.
2. Depending on the contract and the chain use one of the links below to get the current `version` of the contract implementation:
   * The bridge contract_ on \_the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readContract),
   * The validators contract_ on \_the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#readContract)
   * The bridge contract_ on \_the Gnosis Chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-contract)
   * The validators contract_ on \_the Gnosis Chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-contract)
3. Use the `upgradeTo` method from `EternalStorageProxy` ABI, the address of the new implementation, and the incremented version number to encode the data for the transaction. Example of the data: `3ad06d160000000000000000000000000000000000000000000000000000000000000004000000000000000000000000f097137c7ec5e582b5704065f72ac5903d0b526d`.
4. Use [NiftyWallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid) to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The data field must be filled with the bytes received from the previous step. The destination depends on the contract:
   * `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the security upgrade is made for _the bridge contract_ on _the ETH Mainnet_.
   * `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the security upgrade is made for _the validators contract_ on _the ETH Mainnet_.
   * `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the security upgrade is made for _the bridge contract_ on _the Gnosis Chain_.
   * `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the security upgrade is made for _the validators contract_ on _the Gnosis Chain_.
5. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with the other multisig wallet owners.
6. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit to **three times bigger** than the gas estimator function suggests.

## **Improvement introduction**

1. Identify the method to call as part of the new implementation initialization. In the following steps we assume that the method's name is `upgradeFrom3to4` which takes no arguments.
2. Use the method mentioned above from the new contract implementation code or ABI to encode the data to be passed to `upgradeToAndCall` method. Example of the data: `50d28adb`.
3. Deploy a new implementation of the bridge or validators contract.
4. Depending on the contract and the chain, use one of the links below to get the current `version` of the contract implementation:
   * The bridge contract_ on \_the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readContract),
   * The validators contract_ on \_the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#readContract)
   * The bridge contract_ on \_the Gnosis Chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-contract)
   * The validators contract_ on \_the Gnosis Chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-contract)
5. Use the `upgradeToAndCall` method from the `EternalStorageProxy` ABI, the address of the new implementation, and the incremented version number to encode the data for the transaction. Example of the data: `0xa9c45fcb0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000692a70d2e424a56d2c6c27aa97d1a86395877b3a0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000450d28adb00000000000000000000000000000000000000000000000000000000`.
6. Use NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The data field must be filled with the bytes received on the previous step. The destination depends on the contract:
   * `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the security upgrade is made for _the bridge contract_ on _the ETH Mainnet_.
   * `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the security upgrade is made for _the validators contract_ on _the ETH Mainnet_.
   * `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the security upgrade is made for _the bridge contract_ on _the Gnosis Chain_.
   * `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the security upgrade is made for _the validators contract_ on _the Gnosis Chain_.
7. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with other multisig wallet owners.
8. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit to four times bigger than the gas estimator suggests.

:::success
This page was moved from: [https://forum.poa.network/t/xdai-bridge-contracts-management/1777](https://forum.poa.network/t/xdai-bridge-contracts-management/1777)
:::
