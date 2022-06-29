---
description: Configuring a contract
---

# Configuration

A definition of all configuration parameters that can change the bridge behavior are available in the [xDai Bridge Management API](/specs/bridges/xdai/contracts-management/management-api). We describe the steps for changing the daily limit of the Bridge Home contract (`0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6`, deployed in the Gnosis Chain).

:::info
The instructions use [NiftyWallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid) to invoke contract methods. An example how to use this functionality is available [here](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)

Any tool that can create transactions based on contract source code or the ABI may be used.
:::

These steps can also be used on other parameters of this or another contract:

1. Use the `setDailyLimit` method from `HomeBridgeErcToNative` ABI and a new daily limit (in this example the new limit is 50000 xDai coins) to encode the data for the transaction. Example of the data: `b20d30a9000000000000000000000000000000000000000000000a968163f0a57b400000`.
2. Open NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The destination must be `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6`. The data field must be filled with the bytes received on the previous step.
3. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with the other multisig wallet owners.
4. (for the rest of owners) Use NiftyWallet to invoke `confirmTransaction` of the multisig wallet contract (`0x0d3726e5a9f37234d6b55216fc971d30f150a60f`). Set the gas limit two times bigger than the gas estimator suggests.
5. Since any modification of the daily limit on one side must be reflected on another side,  as described below, steps 1 - 4 need to be executed on the ETH Mainnet. Use the `setExecutionDailyLimit` method from `ForeignBridgeErcToNative` ABI and the same daily limit used in step 1 to encode the data for the transaction. Example of the data: `3dd95d1b000000000000000000000000000000000000000000000a968163f0a57b400000`.
6. Use NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the ETH Mainnet). The destination must be `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016`. The data field must be filled with the bytes received on the previous step.
7. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with the other multisig wallet owners.
8. (for the rest of owners) Use NiftyWallet to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd`). Set the gas limit two times bigger than the gas estimator suggests.
