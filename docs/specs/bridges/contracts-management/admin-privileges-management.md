---
---

# Admin Privileges Management

Each admin account type has certain rights and permissions:

1. **Admin to manage the validators set** -  add and remove validators, and change the number of required confirmations.
2. **Admin to manage bridge parameters** -  adjust transaction limits, change the fallback gas price and finalization threshold.
3. **Upgradability admin** -  upgrade the bridge contract and the validators contract. This type of admin is very powerful, and is the only admin with permission to claim tokens sent to the bridge contract by mistake.

By default, the multisig wallet of the xDai bridge validators is associated with all three roles.

:::info
The instructions use [NiftyWallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid) to invoke contract methods. An example how to use this functionality is available [here](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)

Any tool that can create transactions based on contract source code or the ABI may be used.
:::

## **Change the admin to manage the validators set**

1. Use the `transferOwnership` method from `BridgeValidators` ABI and a new admin account to encode the data for the transaction. Example of the data: `f2fde38b000000000000000000000000715e5837c903d0b52ec2b576d70406f095f72ac5`.
2. Use NiftyWallet  to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The destination must be either `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the new admin is for the validators contract on the ETH Mainnet side or `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the new admin is for the contract on the Gnosis Chain. The data field must be filled with the bytes received on the previous step.
3. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with other multisig wallet owners.
4. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit two times bigger than the gas estimator suggests. 

## **Change the admin to manage bridge parameters**

1. Use the `transferOwnership` method from `ForeignBridgeErcToNative` or `HomeBridgeErcToNative` ABI and a new admin account to encode the data for the transaction. Example of the data: `f2fde38b000000000000000000000000715e5837c903d0b52ec2b576d70406f095f72ac5`.
2. Use NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The destination must be either `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the new admin is for the bridge contract on the ETH Mainnet side or `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the new admin is for the contract on the Gnosis Chain. The data field must be filled with the bytes received on the previous step.
3. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step included into a block and share it with other multisig wallet owners.
4. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit two times bigger than the gas estimator suggests. 

## **Change the upgradability admin**

1. Use the `transferProxyOwnership` method from `EternalStorageProxy` ABI and a new admin account to encode the data for the transaction. Example of the data: `ff1739cae000000000000000000000000715e5837c903d0b52ec2b576d70406f095f72ac5`.
2. Use NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The data field must be filled with the bytes received on the previous step. The destination depends on the contract:
   * `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the upgradability admin is being changed for _the bridge contract_ on _the ETH Mainnet_.
   * `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the upgradability admin is being changed for _the validators contract_ on _the ETH Mainnet_.
   * `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the upgradability admin is being changed for _the bridge contract_ on _the Gnosis Chain_.
   * `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the upgradability admin is being changed for _the validators contract_ on _the Gnosis Chain_.
3. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step ia included into a block and share it with other multisig wallet owners.
4. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit two times bigger than the gas estimator suggests.