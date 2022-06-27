---
---

# ERC20 Tokens Release

:::info
The instructions use [NiftyWallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid) to invoke contract methods. An example how to use this functionality is available [here](https://medium.com/poa-network/nifty-wallet-now-supports-interactions-with-smart-contracts-5e8c43c19e3a)

Any tool that can create transactions based on contract source code or the ABI may be used.
:::

1. Use the `claimTokens` method from `ForeignBridgeErcToNative` or `HomeBridgeErcToNative` ABI, an address of an ERC20 token contract, and receiver of the tokens to encode the data for the transaction. Example of the data: `69ffa08a0000000000000000000000000dcd2f752394c41875e259e00bb44fd505297caf000000000000000000000000583031d1113ad414f02576bd6afabfb302140225`.
2. Use NiftyWallet to invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). The destination must be either `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the token contract is on the ETH Mainnet or `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the token contract is on the Gnosis Chain. The data field must be filled with the bytes received on the previous step.
3. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step included into a block and share it with other multisig wallet owners.
4. (for the rest of owners) Use NiftyWallet  to invoke `confirmTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on the Gnosis Chain). Set the gas limit three times bigger than the gas estimator suggests. 