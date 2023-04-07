---
title: xDai Bridge
description: The xDai bridge is a native Dai bridge from Ethereum that is used to mint and burn xDai, the native asset used for gas and transaction fees on Gnosis. 
keywords: [xdai bridge, bridge, dai, ethereum, gnosis bridge]
---

# xDai Bridge

:::info

The xDai bridge can be found at [bridge.gnosischain.com](https://bridge.gnosischain.com/)

:::

The [xDai bridge](https://bridge.gnosischain.com) is a native Dai bridge from Ethereum that is used to mint and burn [xDai](/about/tokens/xdai), the native asset used for gas and transaction fees on Gnosis. 

![xDai Bridge Diagram](/img/bridges/diagrams/dai-bridge-01.png) 

Once Dai is bridged into the xDai bridge, the xDai bridge contract on Gnosis notifies the [block rewards contract](#block-rewards-contract). The consensus algorithm then mints xDai to the user's corresponding address on Gnosis in the next block. 

## Key Information

### Overview

|                       | Detail                                                |
|-----------------------|-------------------------------------------------------|
| Frontend URL          | https://bridge.gnosischain.com                        |
| Trust Model           | [4-of-7 Validator Multisig](#bridge-validators)       |
| Governance            | [7-of-15 Multisig](#bridge-governance)                |
| Governance Parameters | Validator Set, Daily Limits, Fees                     |
| Bug Bounty            | [Up to $2m](https://immunefi.com/bounty/gnosischain/) |
| Bug Reporting         | [Immunefi](https://immunefi.com/bounty/gnosischain/)  |


### Key Contracts

<Tabs>
<TabItem value="ethereum" label="Ethereum">

### Ethereum


| Contract                      | Ethereum Address                                                                                                                            |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Proxy Contract                | [eth:0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) |
| Validator Management Contract | [eth:0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)              |
| Admin Multisignature Wallet   | [eth:0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd](https://etherscan.io/address/0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd)                   |

</TabItem>
<TabItem value="gnosis" label="Gnosis">

### Gnosis

| Contract                      | Gnosis Address                                                                                                                                                     |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Proxy Contract                | [gno:0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://blockscout.com/xdai/mainnet/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-proxy#address-tabs)   |
| Block Reward Contract         | [gno:0x481c034c6d9441db23Ea48De68BCAe812C5d39bA](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)                           |
| Validator Management Contract | [gno:0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D](https://blockscout.com/xdai/mainnet/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)                |
| Admin Multisignature Wallet   | [gno:0x0d3726e5a9f37234d6b55216fc971d30f150a60f](https://blockscout.com/xdai/mainnet/address/0x0D3726e5a9f37234D6B55216fC971D30F150a60F/transactions#address-tabs) |
| ERC20ToNative Helper Contract | [gno:0x2D51EAa266eafcb59bB36dD3c7E99C515e58113A](https://gnosisscan.io/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a#readContract)                            |

</TabItem>
<TabItem value="goerli" label="Goerli">

### Goerli

| Contract               |                                                                                       Address                                       |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| OmniBridge Mediator (Foreign) | [0x00147c84f13764dCDAbAF1cbAe622fa6f6839085](https://goerli.etherscan.io/address/0x00147c84f13764dCDAbAF1cbAe622fa6f6839085) |
| AMB Contract Proxy (Foreign)  | [0x87A19d769D875964E9Cd41dDBfc397B2543764E6](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6) |



</TabItem>
<TabItem value="chiado" label="Chiado">

### Chiado

| Contract            |                Address                            |
|----------------------------|--------------------------------------------|
| OmniBridge Mediator (Home) | [0x09D549a48AC52F3f9945E7de6402c609c92aa2E1](https://gnosisscan.io/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1) |
| AMB Contract Proxy (Home)  | [0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a](https://gnosisscan.io/address/0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a) |

</TabItem>

</Tabs>

References: 
* [TokenBridge Docs: About xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
* [TokenBridge Docs: Bridge Contract Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
### Fees & Daily Limits

| Type               | Ethereum -> Gnosis | Gnosis -> Ethereum    |
|--------------------|--------------------|-----------------------|
| Approx. Gas Cost   |                    |                       |
| Bridge Fees        | 0%                 | 0%                    |
| Min Transfer       | 0.005 Dai          | 10 xDai               |
| Daily Limit        | 10,000,000 Dai     | 10,000,000 xDai       |
| Max Single Deposit | 9,999,999 Dai      | 10,000,000 xDai       |

:::note
Daily Limit is reset according to the following logic: the smart contract stores total amount of processed tokens per current day and reverts on a new transfer if it exceeds the daily limit. Id of the day is calculated using the formula `timestamp / (number of seconds in 1 day)`, where `timestamp` is the Unix timestamp.
:::

### Bridge Validators

The xDai bridge relies on trusted xDai Bridge Validators as cross-chain bridge oracle. There is a roadmap to move towards [trustless bridges](/bridges/roadmap). 

Bridge transactions currently requires signatures from 4 of 7 validators.


| Organization | Gnosis Address                                                                                                                           |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| GnosisDao    | [gno:0x97630e2ae609d4104abda91f3066c556403182dd](https://blockscout.com/xdai/mainnet/address/0x97630e2ae609d4104abda91f3066c556403182dd) |
| Protofire    | [gno:0x4d1c96b9a49c4469a0b720a22b74b034eddfe051](https://blockscout.com/xdai/mainnet/address/0x4D1c96B9A49C4469A0b720a22b74b034EDdFe051) |
| CowProtocol  | [gno:0x587c0d02b40822f15f05301d87c16f6a08aaddde](https://blockscout.com/xdai/mainnet/address/0x587c0d02b40822f15f05301d87c16f6a08aaddde) |
| Giveth       | [gno:0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506](https://blockscout.com/xdai/mainnet/address/0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506) |
| GnosisSafe   | [gno:0x1312e98995bbcc30fc63db3cef807e20cdd33dca](https://blockscout.com/xdai/mainnet/address/0x1312e98995bbcc30fc63db3cef807e20cdd33dca) |
| Karpatkey    | [gno:0xfa98b60e02a61b6590f073cad56e68326652d094](https://blockscout.com/xdai/mainnet/address/0xfa98b60e02a61b6590f073cad56e68326652d094) |
| Gateway      | [gno:0x3e0A20099626F3d4d4Ea7B0cE0330e88d1Fe65D6](https://blockscout.com/xdai/mainnet/address/0x3e0A20099626F3d4d4Ea7B0cE0330e88d1Fe65D6) |

### Bridge Validator Flow

![](/img/bridges/diagrams/xdai-bridge-validator-flow.png)


### Bridge Governance

* See [Bridge Governance](/bridges/governance)

### Bridge Revenue

The xDai bridge currently generates bridge revenue through earned yield on stablecoins deposited on the bridge, which is then used by the GnosisDAO treasury to fund Gnosis development. 

### Analytics

- [Dune Analytics on xDai Bridge Usage](https://dune.com/maxaleks/xDai-Bridge)
- [Dune Analytics on xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges)

## How it Works


###  Ethereum -> Gnosis Chain.  
![](/img/bridges/diagrams/dai-bridge-01.png)

The [xDai token](/about/tokens/xdai) is minted when Dai is transferred from Ethereum to Gnosis using the xDai Bridge. During the transfer process, a block reward contract is invoked to mint xDai to a user's account. Because contract calls are made from the consensus engine to create xDai tokens, balance updates are more difficult to trace than simple value transfers.

1. Users lock an amount of DAI on the [bridge contract](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#code) on Ethereum 
2. `UserRequestForAffirmation` event is triggered 
3. Validators observe the deposit and invoke `executeAffirmation` function on Gnosis bridge contract
4. When enough confirmations are collected (4/6 majority),  the bridge contract on Gnosis Chain calls the block reward contract to  record  the receiver(s) and amount(s) of xDAI to mint. 
5. The [block reward contract](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA) is called by the consensus engine to update user's xDAI balance. 

You can view a receiver's address and amount of xDai received in the [block reward contract's](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA) logs. Whenever the `executeAffirmation` method is called, it registers the following:

```
AddedReceiver(
	uint256 amount, 
	address indexed receiver, 
	address indexed bridge
)
```

Example: https://blockscout.com/xdai/mainnet/tx/0x5892a695860f6087a2d93140f05e6365142ff77fd7128e39dbc03128d5797ac4/logs

---
### Gnosis Chain -> Ethereum.
 
![](/img/bridges/diagrams/dai-bridge-02.png)
1. User -> Gnosis Chain bridge: initiate a withdrawal: xDAI is burned.
2. `UserRequestForSignature` event emitted (see [example transaction](https://blockscout.com/xdai/mainnet/tx/0x8e23cf0ab01476c2df5b71a72603f2c229d3d9a63ad6ca71ce164798f3733826/internal-transactions)).
3. Validators listen to the event: call `submitSignature` on Gnosis chain.
4. After consensus: `CollectedSignatures` event is emitted
5. Anyone can execute the withdrawal on Ethereum (user via UI or validator). DAI is unlocked.
6. `RelayedMessage` emitted on mainnet


:::note
This final step may be delayed if Ethereum mainnet is congested.
:::

References: 

* [TokenBridge Docs: Withdrawing xDai to Dai](https://docs.tokenbridge.net/xdai-bridge/using-the-xdai-bridge/withdrawal-authorization-flow)




### Earning Yield on Bridge Deposits

A portion of Dai locked in the Bridge contract (on the Ethereum side) are deposited in [Aave](https://aave.com) and [Compound](https://compound.finance) and  to earn yield. The proportion of the Bridge Deposits is determined by bridge's governance. Currently, 1,000,000 Dai are held in reserves, and the remaining balance is used to earn yield.

![Dai Compounding Diagram](/img/bridges/diagrams/xdai-compounding.svg)

Bridge withdrawal requests from xDai to Ethereum first use the Dai in the reserve. 

If a request is initiated that exceeds the available reserve amount, the requested amount exceeding the reserve + 1,000,000 Dai (required reserve) is withdrawn immediately from Compound. The 1,000,000 Dai replenishes the reserve.

Interest earned on the Dai supplied to Compound and COMP tokens will be collected periodically (approximately monthly) and transferred to an EOA through a manual method call. Funds will be used to support bridge operations such as gas refunds for users or other tbd mechanisms which can be discussed and decided on by the bridge governors.

In the case where the amount of Dai requested for withdrawal is not available in Compound (likely due to high borrowing demand), the user will need to wait until Compound liquidity is available to execute the request. 

References: 
* [Dune Analytics: xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges) 

## Managing Bridge Contracts
### Upgrading a Contract
There are two possible scenarios for how the bridge or validators contracts can be upgraded:
* a security fix when only the contract implementation is changed
* an improvement when the contract implementation upgrade requires initialization of storage values.

#### Basic Process
![](/img/bridges/diagrams/xdaibridge-contract-mgmt.svg)
1. One of the multisig wallet owners ABI encodes a method call with parameters (if any). This can be done with the [ABI Encoding Service](https://abi.hashex.org/). The encoded sequence of bytes is used to create a transaction for the multisig wallet contract. This is done with the `submitTransaction` method of the multisig wallet contract.
2. The method raises the event `Submission` containing the index of the registered transaction. The index is shared with the other owners of the wallet.
3. The rest of the owners confirm the transaction by invoking `confirmTransaction` from the multisig wallet contract.
4.  As soon as enough confirmations are received, the method encoded in step 1 is invoked automatically. This is important because adequate gas limits must be set for that transaction and set of confirmations sent by the wallet owner finalizing the operation. If the method is not invoked because the gas limit is exceeded, the owners can execute the confirmed transaction manually by sending `executeTransaction`. 

#### Security Upgrade
1. Deploy a new implementation of the bridge or validators contract.
2. Depending on the contract and the chain use one of the links below to get the current version of the contract implementation:
    * The bridge contract on _ETH Mainnet_: [Etherscan](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readContract), 
    * The validators contract on _ETH Mainnet_: [Etherscan](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#readContract) 
    * The bridge contract on _Gnosis_: [Blockscout](https://blockscout.com/poa/xdai/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-contract)
    * The validators contract on _Gnosis_: [Blockscout](https://blockscout.com/poa/xdai/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-contract)
3. Use the upgradeTo method from EternalStorageProxy ABI, the address of the new implementation, and the incremented version number to encode the data for the transaction. Example of the data: `3ad06d160000000000000000000000000000000000000000000000000000000000000004000000000000000000000000f097137c7ec5e582b5704065f72ac5903d0b526d`.
4. Invoke `submitTransaction` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on Gnosis chain). The data field must be filled with the bytes received from the previous step. The destination depends on the contract:
    * `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the security upgrade is made for the bridge contract on  ETH Mainnet. 
    * `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the security upgrade is made for the validators contract on the ETH Mainnet. 
    * `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the security upgrade is made for the bridge contract on the xDai chain.
    * `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the security upgrade is made for the validators contract on the xDai chain.
5. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with the other multisig wallet owners.
6. (for the rest of owners) Invoke `confirmTransaction` on the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on the Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on Gnosis chain). Set the gas limit to _three times bigger_ than the gas estimator function suggests.

#### Bridge Improvement
1. Identify the method to call as part of the new implementation initialization. In the following steps we assume that the method's name is `upgradeFrom3to4()` which takes no arguments. 
2. Use the method mentioned above from the new contract implementation code or ABI to encode the data to be passed to `upgradeToAndCall()` method. Example of the data: `50d28adb`. 
3. Deploy a new implementation of the bridge or validators contract.
4. Depending on the contract and the chain, use one of the links below to get the current `version` of the contract implementation:
    * The bridge contract on _the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0x4aa42145aa6ebf72e164c9bbc74fbd3788045016#readContract), 
    * The validators contract on _the ETH Mainnet_: [Etherscan](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#readContract) 
    * The bridge contract on _Gnosis Chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-contract)
    * The validators contract on _Gnosis chain_: [Blockscout](https://blockscout.com/poa/xdai/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-contract)
5. Use the upgradeToAndCall method from the EternalStorageProxy ABI, the address of the new implementation, and the incremented version number to encode the data for the transaction. Example of the data: `0xa9c45fcb0000000000000000000000000000000000000000000000000000000000000004000000000000000000000000692a70d2e424a56d2c6c27aa97d1a86395877b3a0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000450d28adb00000000000000000000000000000000000000000000000000000000`.
6. Invoke `submitTransaction` on the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on Gnosis chain). The data field must be filled with the bytes received on the previous step. The destination depends on the contract:
    * `0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016` if the security upgrade is made for the bridge contract on ETH Mainnet. 
    * `0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E` if the security upgrade is made for the validators contract on ETH Mainnet. 
    * `0x7301cfa0e1756b71869e93d4e4dca5c7d0eb0aa6` if the security upgrade is made for the bridge contract on Gnosis chain.
    * `0xb289f0e6fbdff8eee340498a56e1787b303f1b6d` if the security upgrade is made for the validators contract on Gnosis chain.
7. Identify the index of the transaction returned in the `Submission` event as soon as the transaction from the previous step is included into a block and share it with other multisig wallet owners.
8. (for the rest of owners) Invoke `confirmTransaction()` of the multisig wallet contract (`0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd` on Mainnet ETH, `0x0d3726e5a9f37234d6b55216fc971d30f150a60f` on Gnosis chain). Set the gas limit to _four times bigger_ than the gas estimator suggests.

References: 
* [TokenBridge Docs: xDai Contracts Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
* [TokenBridge Docs: Upgrading xDai Bridge Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/upgrade-contracts)
* [TokenBridge Docs: Configuring Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/configuration)
* [TokenBridge Docs: Admin Privilege Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/admin-privileges-management)
* [TokenBridge Docs: ERC20 Token Release](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/erc20-tokens-release)
* [TokenBridge Docs: xDai Bridge Management API](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/xdai-bridge-management-api)

## Resources
- [Tokenbridge Docs on xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
- [xDai Bridge docs](/bridges/tutorials/using-xdai-bridge/)
- [TokenBridge Docs: Migrating Oracle to new Server](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server)