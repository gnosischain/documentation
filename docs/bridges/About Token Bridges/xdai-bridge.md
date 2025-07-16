---
title: xDai Bridge
sidebar_position: 2
description: The xDai bridge is a native Dai bridge from Ethereum that is used to mint and burn xDai, the native asset used for gas and transaction fees on Gnosis.
keywords: [xdai bridge, bridge, dai, ethereum, gnosis bridge]
---

# xDai Bridge

:::info
The xDAI bridge can be used in https://bridge.gnosischain.com by selecting DAI/xDAI.  
Please avoid using the legacy xDai bridge: https://bridge.legacy.gnosischain.com/.

:::

:::danger

xDAI bridge contract is undergoing a critical upgrade: DAI will be replaced with USDS as the default accepted token on Ethereum, while xDAI will continue to be minted on Gnosis Chain. Please refer to [xDaiBridge-usds-migration page](usds-xdaibridge-migration.md) for more details.

:::

The [xDai bridge](https://bridge.gnosischain.com) is a native DAI bridge from Ethereum that is used to mint and burn [xDai](/about/tokens/xdai), the native asset used for gas and transaction fees on Gnosis.

Once Dai is bridged into the xDai bridge, the xDai bridge contract on Gnosis notifies the [block rewards contract](https://gnosis.blockscout.com/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA). The consensus algorithm then mints xDai to the user's corresponding address on Gnosis in the next block.

## Key Information

### Overview

|                       | Detail                                                |
| --------------------- | ----------------------------------------------------- |
| Frontend URL          | https://bridge.gnosischain.com                        |
| Trust Model           | [4-of-7 Validator Multisig](#bridge-validators)       |
| Governance            | [8-of-16 Multisig](#bridge-governance)                |
| Governance Parameters | Validator Set, Daily Limits, Fees                     |
| Bug Bounty            | [Up to $2m](https://immunefi.com/bounty/gnosischain/) |
| Bug Reporting         | [Immunefi](https://immunefi.com/bounty/gnosischain/)  |

### Key Contracts

<Tabs>
<TabItem value="ethereum" label="Ethereum">

### Ethereum

| Contract                      | Ethereum Address                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| xDAI Bridge Contract          | [eth:0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) |
| Validator Management Contract | [eth:0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)              |

</TabItem>
<TabItem value="gnosis" label="Gnosis">

### Gnosis

| Contract                      | Gnosis Address                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| xDAI Bridge Contract          | [gno:0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6#address-tabs) |
| Block Reward Contract         | [gno:0x481c034c6d9441db23Ea48De68BCAe812C5d39bA](https://gnosis.blockscout.com/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)              |
| Validator Management Contract | [gno:0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D](https://gnosis.blockscout.com/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)   |
| ERC20ToNative Helper Contract | [gno:0x2D51EAa266eafcb59bB36dD3c7E99C515e58113A](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a#readContract) |

</TabItem>

<TabItem value="sepolia" label="Sepolia-Chiado">

### Sepolia - Chiado


| Contract                       | Address                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| xDAI Bridge Contract (Sepolia) | [0x180ff98e734415ecd35fac3d32940e1b45fad0a2](https://sepolia.etherscan.io/address/0x180ff98e734415ecd35fac3d32940e1b45fad0a2)                      |
| Validator Contract (Sepolia)   | [0x3Ea1A9f92A99bC8e820541E7bed5d1F2419fFe59](https://goerli.etherscan.io/address/0x3Ea1A9f92A99bC8e820541E7bed5d1F2419fFe59)                       |
| xDAI Bridge Contract (Chiado)  | [0xccA0Dc2A058884e62082312F09541cC7566406f0](https://gnosis-chiado.blockscout.com/address/0xccA0Dc2A058884e62082312F09541cC7566406f0)              |
| Validator Contract (Chiado)    | [0x138190e157d7604B8f89637AA10508Abd4c673B2](https://gnosis-chiado.blockscout.com/address/0x138190e157d7604B8f89637AA10508Abd4c673B2)              |
| ERC20ToNative Helper Contract  | [0x9866D9d242Ac9D7EC4AC56ce61D0d957A02FD8e2](https://gnosis-chiado.blockscout.com/address/0x9866D9d242Ac9D7EC4AC56ce61D0d957A02FD8e2#readContract) |


</TabItem>

</Tabs>

:::info
The current deployment of xDAI bridge contract is from https://github.com/gnosischain/tokenbridge-contracts/tree/xdaibridge, with the commit hash `fb6bae7589a102613b48c12addb425b72836574e`
:::

References:  
\*\* Some of the information from TokenBridge Docs are outdated, please verify the information before you bridge.

- https://github.com/tokenbridge/docs

:::note
Daily Limit is reset according to the following logic: the smart contract stores total amount of processed tokens per current day and reverts on a new transfer if it exceeds the daily limit. Id of the day is calculated using the formula `timestamp / (number of seconds in 1 day)`, where `timestamp` is the Unix timestamp.
:::

### Bridge Validators

- See [Bridge Validator](../management/validators#xdai-bridge)

### Bridge Governance

- See [Bridge Governance](../management/README.md)

## How it Works

### Ethereum -> Gnosis Chain.

![](/img/bridges/diagrams/dai-bridge-01.png)

The [xDai token](/concepts/tokens/xdai) is minted when Dai\*\* is transferred from Ethereum to Gnosis using the xDai Bridge. During the transfer process, a block reward contract is invoked to mint xDai to a user's account. Because contract calls are made from the consensus engine to create xDai tokens, balance updates are more difficult to trace than simple value transfers.

:::danger

\*\*xDAI bridge contract is undergoing a critical upgrade: DAI will be replaced with USDS as the default accepted token on Ethereum, while xDAI will continue to be minted on Gnosis Chain. Please refer to [xDaiBridge-usds-migration page](usds-xdaibridge-migration.md) for more details.

:::

:::warning

Calling `transfer` on Foreign xDAI bridge will no longer mint xDAI on Gnosis Chain, and users must use `relayTokens` instead.
For more detail, please check [here](https://forum.gnosis.io/t/decommissioning-of-the-transfer-function-on-xdai-bridge/8575).

:::

1. Users initiate the relay transaction on Ethereum by approving the bridge contract and calling the [bridge contract](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016) `relayTokens(address recipient, uint256 value)`.
2. `UserRequestForAffirmation(address recipient, uint256 value, bytes32 nonce)` event is emitted from the [bridge contract](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016).
3. Bridge validators observe the event and call `executeAffirmation(address recipient, uint256 value, bytes32 nonce)` function on [Home xDAI bridge contract](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6) on Gnosis Chain.
4. When enough confirmations are collected (4/7 majority), the bridge contract on Gnosis Chain calls the block reward contract to record the receiver(s) and amount(s) of xDAI to mint. Hashi acts as an additional bridge valdiator who validates transactions but no actually calling `executeAffirmation` on Home xDAI Bridge. For more details about how Hashi works in this case, check out [here](./hashi-integration.md)
5. The [block reward contract](https://gnosis.blockscout.com/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA) is called by the consensus engine to update user's xDAI balance. `AddedReceiver(uint256 amount, address indexed receiver, address indexed bridge)` event is emitted within the same transaction and receiver address will be credited for the equivalent xDAI amount.

User may check the balance change visually using Blockscout's [coin balance history](https://gnosis.blockscout.com/address/0xE05FB316eB8C4ba7288D43c1bd87BE8a8d16761C?tab=coin_balance_history) or programmatically using [eth_getBalance](https://docs.infura.io/api/networks/ethereum/json-rpc-methods/eth_getbalance) API by querying the balance on block number where `AddedReceiver` event is emitted.

You can also view a receiver's address and amount of xDai received in the [block reward contract's](https://gnosis.blockscout.com/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA) logs. Whenever the `executeAffirmation` method is called and enough signatures has been collected from bridge valdiators, it emits the `AddedReceiver` event:

```
AddedReceiver(
	uint256 amount,
	address indexed receiver,
	address indexed bridge
)
```

Example: https://gnosis.blockscout.com/tx/0x5892a695860f6087a2d93140f05e6365142ff77fd7128e39dbc03128d5797ac4?tab=logs

---

### Gnosis Chain -> Ethereum.

![](/img/bridges/diagrams/dai-bridge-02.png)

1. User transfer xDAI to or call `relayTokens(address receiver, uint256 value)` on [Home xDAI bridge contract](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6) on Gnosis Chain. The equivalent amount of xDAI is burned.
2. `UserRequestForSignature(address recipient, uint256 value, bytes32 nonce)` event is emitted from [Home xDAI bridge contract](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6). [Example](https://gnosis.blockscout.com/tx/0x2657493921d5dd1f6d225e23ab578a0d0c6e19c2dfaaef36f305cf4a333686fc?tab=logs)
3. Bridge validators observe the event and call `submitSignature(bytes signature, bytes message)` function on [Home xDAI bridge contract](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6) on Gnosis Chain. Hashi acts as an additional bridge valdiator who validates transactions but no actually calling `submitSignature` on Home xDAI Bridge. For more details about how Hashi works in this case, check out [here](./hashi-integration.md).
4. After enough signatures are collected, `CollectedSignatures` event is emitted/
5. Anyone can execute the withdrawal on Ethereum by calling `executeSignatures(bytes message, bytes signatures)` on [Foreign xDAI bridge](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016) on Ethereum. To fetch the calldata value, please check the [guideline below](#how-to-claim-dai-on-ethereum). DAI\*\* is unlocked to the receiver on Ethereum.
6. `RelayedMessage(address recipient, uint256 value, bytes32 transactionHash)` emitted on Foreign xDAI Bridge. Please be aware that after Hashi upgrade, `transactionHash` has been replaced with the value of `nonce`. Please check [here](./hashi-integration.md) for more information on how it works.

### Savings xDAI

Application: https://agave.finance/sdai/

#### Rationale

MakerDAO’s DSR current rate is 5%. Since the increase of the DSR to ~3.5%, ~7M DAI have fled out of the xDAI bridge, as can be seen on this [dashboard](https://dune.com/queries/2650075/4403805?d=11). Bridging the DSR yield into Gnosis Chain will help regain these deposits. In order to provide the needed catalyst for Gnosis Chain Defi to boom, interest rates on Gnosis Chain have to pick up or reach parity with Ethereum or other chains with higher borrowing demand.

Introducing Savings DAI (sDAI), a DSR(Dai Savings Rate) module in xDAI Bridge between Ethereum and Gnosis Chain.

By depositing most of the DAI in xDAI bridge into sDAI vault from Spark Protocol on Ethereum, which is a ERC4626 vault depositing all DAI into the Maker DSR, interest is accrued from Maker DSR and relayed to Gnosis Chain. xDAI holders on Gnosis Chain can mint sDAI with their xDAI, and enjoy the interest accumulating from Ethereum.

Check out the proposal from Karpatkey to **[Deposit DAI of the xDAI bridge in sDAI vault from Spark](https://forum.gnosis.io/t/deposit-dai-of-the-xdai-bridge-in-sdai-vault-from-spark/7236)**

#### Interest rate

Assuming the amount of “Savings DAI on GC” minted is lower than the one held by the bridge, then the yield will be higher than the Dai savings Rate. The bridge currently holds roughly 25M DAI and the DSR yield is 5%, assuming 25M get wrapped into sDAI and only 10M xDAI get deposited into the vault on GC, the yield will be 12.5% .

The expectation is that the sDAI rate will always be higher on GC than Mainnet, as only if almost 100% of all DAI bridged is staked will we achieve rate parity.

Considering the current 25M DAI sitting in the bridge, that represents ~1.25M yearly to incentivise GC.

DSR yield is risk-free if you are already holding DAI. All the risks derived from the collateral are borne by all DAI holders, regardless of them depositing in the DSR. Karpatkey team have written a research piece [here.](https://www.karpatkey.com/contents/makerdaos-game-changing-move) The only newly introduced risk is smart contract risk in how the integration is made with the sDAI vault on Ethereum and the implementation of the sDAI vault on GC.

#### Architecture

![](../../../static/img/bridges/xdaibridge/DSRonGnosis.png)

#### Ethereum

A new implementation upgrade in xDAIForeignBridge contract: [SavingsDAI Connector](https://github.com/gnosischain/tokenbridge-contracts/blob/xdaibridge-upgrade-sdai/contracts/upgradeable_contracts/erc20_to_native/SavingsDaiConnector.sol) is added as a dependency in the contract. Compare to the old implementation of the [Compound Connector](https://github.com/gnosischain/tokenbridge-contracts/blob/master/contracts/upgradeable_contracts/erc20_to_native/CompoundConnector.sol), the [payInterest](https://github.com/gnosischain/tokenbridge-contracts/blob/xdaibridge-upgrade-sdai/contracts/upgradeable_contracts/erc20_to_native/InterestConnector.sol#L138-L148) function in SavingsDai Connector is used to transfer interest received from vault to receiver address on Gnosis Chain rather than to receiver address on Ethereum.

[sDAI](https://github.com/gnosischain/tokenbridge-contracts/blob/xdaibridge-upgrade-sdai/contracts/interfaces/ISavingsDai.sol) is deployed on Ethereum. Any future DAI deposited to the Bridge will be wrapped into sDAI, with caveat that it will always keep the buffer of the minimumCashThreshold when investing.

**minimumCashThreshold:** This value determines what is the recommended amount of DAI that should be held in the bridge at all times, in order to create a buffer for withdrawals without added operations and thus lower gas costs.

#### Gnosis Chain

There are two contracts being deployed on Gnosis.

The first one is the sDAI vault, also an ERC 4626 which is the most popular standard for vaults which makes it extremely useful for Defi integrations from Lending Protocols like Agave and Spark,  to DEXes like Curve and Balancer with their boosted pools. The only modification to the standard vault (OZ implementation) is that it will allow for direct deposits and withdrawals in xDAI, rather than exclusively the ERC20 WXDAI.

The second contract is the Interest Receiver. This will be the address provided on Mainnet bridge as the interest receiver. What this contract does is quite simple, it distributes the balance it holds in xDAI and WXDAI into sDAI at a fixed block rate that gets updated every 1-2 days to adjust for interest rate changes coming from mainnet. The goal of this contract is to not make it possible to front run the bridging process of the interest, and to make sure there is a fairly frequent update of the sDAI shares value and exchange rate. This contract has the perk of being very easy to switch for a different one by simply setting a new receiver on the bridge, without impacting any of the operations. This means if we want to make modifications such as add a fee or normalize rates in the future, that will be very easy to plug-in.

#### Role and responsibilities

**xDAI/wxDAI holder**

1. Deposit xDAI/wxDAI and get sDAI shares:
   1. xDAI/wxDAI holders can deposit xDAI/wxDAI in https://agave.finance/sdai/, in return for sDAI, and their corresponding shares in the vault are recorded.
   2. Bridge Interest Receiver receives interest from mainnet and distribute to sDAI vault.
   3. sDAI holders withdraw/redeem xDAI/wxDAI (interest+original amount) according to their shares, that has gone up because of the interest received in step 2

**Keeper**

1. Call `investDAI()` `refillBridge()` `payInterest()`. On Ethereum, anyone is allowed to `investDAI()` into the sDAI vault, anyone is allowed to `refillBridge()` right back up to the threshold, and also anyone is allowed to `payInterest()`. These processes are permissionless, and it’s also costly which is why we will have a bot to automate these 3 maintenance procedures in the most efficient way possible.
2. [Keeper](https://etherscan.io/address/0xC5cD1e53839eeD4d0A38f80C610e77bD07120c90) is maintained by [Karpatkey team](https://www.karpatkey.com/). [Source Code](https://github.com/Luigy-Lemon/XDaiBridge-Keeper/tree/main)

#### Contracts

<Tabs>
<TabItem value="ethereum" label="Ethereum">

| Contract | Address                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| sDAI     | [0x83F20F44975D03b1b09e64809B757c47f942BEeA](https://etherscan.io/token/0x83f20f44975d03b1b09e64809b757c47f942beea)   |
| DAI      | [0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f)   |
| Keeper   | [0xC5cD1e53839eeD4d0A38f80C610e77bD07120c90](https://etherscan.io/address/0xC5cD1e53839eeD4d0A38f80C610e77bD07120c90) |

</TabItem>
<TabItem value="gnosis" label="Gnosis">

| Contract                 | Address                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| sDAI                     | [0xaf204776c7245bF4147c2612BF6e5972Ee483701](https://gnosisscan.io/address/0xaf204776c7245bF4147c2612BF6e5972Ee483701) |
| wxDAI                    | [0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://gnosisscan.io/address/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d) |
| SavingsXDAI Adapter      | [0xD499b51fcFc66bd31248ef4b28d656d67E591A94](https://gnosisscan.io/address/0xD499b51fcFc66bd31248ef4b28d656d67E591A94) |
| Bridge Interest Receiver | [0x670daeaF0F1a5e336090504C68179670B5059088](https://gnosisscan.io/address/0x670daeaF0F1a5e336090504C68179670B5059088) |

</TabItem>
<TabItem value="goerli" label="Goerli">

| Contract | Address                                    |
| -------- | ------------------------------------------ |
| sDAI     | 0xD8134205b0328F5676aaeFb3B2a0DC15f4029d8C |
| DAI      | 0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844 |

</TabItem>
<TabItem value="chiado" label="Chiado">

| Contract                 | Address                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| sDAI                     | [0x20e5eB701E8d711D419D444814308f8c2243461F](https://gnosis-chiado.blockscout.com/address/0x20e5eB701E8d711D419D444814308f8c2243461F) |
| wxDAI                    | [0x18c8a7ec7897177E4529065a7E7B0878358B3BfF](https://gnosis-chiado.blockscout.com/address/0x18c8a7ec7897177E4529065a7E7B0878358B3BfF) |
| SavingsXDAI Adapter      | [0xc1529e13A5842D790da01F778Bf23a3677830986](https://gnosis-chiado.blockscout.com/address/0xc1529e13A5842D790da01F778Bf23a3677830986) |
| Bridge Interest Receiver | [0x65e75819E4e8250a03958Ba303E8f95F8f578168](https://gnosis-chiado.blockscout.com/address/0x65e75819E4e8250a03958Ba303E8f95F8f578168) |

</TabItem>

</Tabs>

### How to claim DAI on Ethereum

1. Fetch the value of `recipient`, `value` and `nonce` from `UserRequestForSignature(address recipient, uint256 value, bytes32 nonce)` from the transction which is emitted by [Home xDAI Bridge](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6) Gnosis Chain.
   ![](../../../static/img/bridges/xdaibridge/gc-xdai-tx.png)
2. Go to the [xDAI bridge helper contract on Gnosis Chain](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a#readContract).

   1. Call [`getMessageHash(address _recipient,  uint256 _value, _origTxHash)`](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a?tab=read_write_contract#0x30322ce7) : with `recipient` and `value` from the `UserRequestForSignature` and `_origTxHash` as `nonce` from `UserRequestForSignature` (not the transaction hash!). Fetch the returned message hash.
   2. Call [`getMessage(bytes32 _msgHash)`](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a?tab=read_write_contract#0x0139a221) & [`getSignatures(bytes32 _msgHash)`](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a?tab=read_write_contract#0x9bc51068) with the message hash from the previous step.
      ![](../../../static/img/bridges/xdaibridge/xdai-helper.png)

3. Use the value returned from the previous step to call `executeSignatures(bytes message, bytes signatures)` on [xDAI Foreign Bridge on Ethereum](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#writeProxyContract#F7).
   ![](../../../static/img/bridges/xdaibridge/xdai-execute-signatures.png)
