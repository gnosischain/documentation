---
title: xDai Bridge
---

# xDai Bridge

:::info

The xDai bridge can be found at [bridge.gnosischain.com](https://bridge.gnosischain.com/)

:::

The [xDai bridge](https://bridge.gnosischain.comd) is a native Dai bridge from Ethereum that is used to mint and burn [xDai](../../about/tokens/xdai-token.md), the native asset used for gas and transaction fees on Gnosis. 

![xDai Bridge Diagram](/img/bridges/diagrams/dai-bridge.svg) 

Once Dai is bridged into the xDai bridge, the xDai bridge contract on Gnosis notifies the [block rewards contract](#block-rewards-contract). The consensus algorithm then mints xDai to the user's corresponding address on Gnosis in the next block. 

References: 

* [xDai Docs: xDai Bridge FAQs](https://github.com/gnosischain/xdaichain.com/tree/master/about-gc/faqs/bridges-xdai-bridge-and-omnibridge#xdai-bridge-faqs)
## Key Information

### Overview

|                       | Detail                                          |
| --------------------- | ----------------------------------------------- |
| Frontend URL          | https://bridge.gnosischain.com                  |
| Trust Model           | [4-of-6 Validator Multisig](#bridge-validators) |
| Governance            | [7-of-16 Multisig](#bridge-governance)          |
| Governance Parameters | Validator Set, Daily Limits, Fees               |
| Bug Bounty            | TODO                                            |
| Bug Reporting         | TODO                                            |

References: 
* [TokenBridge Docs: About xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about) 
### Key Contracts

#### Ethereum

| Contract                      | Ethereum Address                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Proxy Contract                | [eth:0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) |
| Validator Management Contract | [eth:0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)              |

#### Gnosis
| Contract                      | Gnosis Address                                                                                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proxy Contract                | [gno:0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://blockscout.com/xdai/mainnet/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-proxy#address-tabs) |
| Block Reward Contract         | [gno:0x481c034c6d9441db23Ea48De68BCAe812C5d39bA](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)                         |
| Validator Management Contract | [gno:0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D](https://blockscout.com/xdai/mainnet/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)              |

References: 
* [TokenBridge Docs: About xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
* [TokenBridge Docs: Bridge Contract Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
### Fees & Daily Limits

| Type               | Ethereum -> Gnosis | Gnosis -> Ethereum |
| ------------------ | ------------------ | ------------------ |
| Approx. Gas Cost   |                |                |
| Bridge Fees        | 0%                 | 0%                 |
| Daily Limit Reset  | 00:00 UTC          | 00:00 UTC          |
| Min Transfer       | 0.005 Dai          | 10 xDai            |
| Daily Limit        | 10,000,000 Dai     | 10,000,000 Dai     |
| Max Single Deposit | 9,999,999 Dai      | 9,999,999 xDai     |

References: 

* [xDai Docs: Daily Bridge Limits](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/bridge-daily-limits)
### Bridge Validators

The xDai bridge relies on trusted xDai Bridge Validators as cross-chain bridge oracle. There is a roadmap to move towards [trustless bridges](../roadmap.md). 

Bridge transactions currently requires signatures from 4 of 6 validators.

| Organization | Ethereum Address | Gnosis Address                                                                                                                           |
| ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GnosisDao    | TODO             | [gno:0x32e6C5e2132792B407424EBa19e48668Ebf80B14](https://blockscout.com/xdai/mainnet/address/0x32e6C5e2132792B407424EBa19e48668Ebf80B14) |
| Protofire    | TODO             | [gno:0x4d1c96b9a49c4469a0b720a22b74b034eddfe051](https://blockscout.com/xdai/mainnet/address/0x4D1c96B9A49C4469A0b720a22b74b034EDdFe051) |
| CowProtocol  | TODO             | [gno:0xF81A2768BEDB8Ab805A2DF5Fb7D58685C224b9b6](https://blockscout.com/xdai/mainnet/address/0xF81A2768BEDB8Ab805A2DF5Fb7D58685C224b9b6) |
| Giveth       | TODO             | [gno:0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506](https://blockscout.com/xdai/mainnet/address/0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506) |
| GnosisSafe   | TODO             | [gno:0xebd33d099Dd31D32923f0A033Df6F7FC264Ef214](https://blockscout.com/xdai/mainnet/address/0xebd33d099Dd31D32923f0A033Df6F7FC264Ef214) |
| Syncnode     | TODO             | [gno:0xfe24cfb2f8872e9ed097c451de065a9f6048915b](https://blockscout.com/xdai/mainnet/address/0xfe24Cfb2F8872e9ed097C451dE065A9F6048915b) |

References: 
* [xDai Docs: Bridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators#current-xdai-bridge-validators)
### Bridge Governance

* See [Bridge Governance](../governance.md)

References: 
- [xDai Docs: Bridge Governance Board](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/governance/bridge-governance-board)
- [xDai Docs: Bridge Daily Limits](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/bridge-daily-limits)

### Bridge Revenue

The xDai bridge currently generates bridge revenue through earned yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](../../about/overview/about-gnosis-dao.md) to fund Gnosis development. 

References: 

* [xDai Docs: Dai & Stablecoin Compounding](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/converting-xdai-via-bridge/dai-compounding)
* [Dune Analytics: xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges) 

### Analytics

- [Dune Analytics on xDai Bridge Usage](https://dune.com/maxaleks/xDai-Bridge)
- [Dune Analytics on xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges)

## How it Works
### Ethereum -> Gnosis

![xDai Bridge Diagram](/img/bridges/diagrams/dai-bridge.svg) 

The xDai token is minted when Dai is transferred from Ethereum to the Gnosis Chain using the xDai Bridge. During the transfer process, a block reward contract is invoked to mint xDai to a user's account. Because contract calls are made from the consensus engine to create xDai tokens, balance updates are more difficult to trace than simple value transfers.

1. User sends a transaction to the [bridge contract](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#code) on Ethereum
2. The transfer is approved on the Ethereum side and the user's Dai balance is reduced
3. Bridge validator oracles invoke the `executeAffirmation` function to confirm the transfer request
4. When enough confirmations are collected (4/6 majority), a message is relayed to the bridge contract on Gnosis to call the [block reward contract](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)
5. The block reward contract records the receiver(s) and amount(s) of xDai to mint. There may be more than 1 bridge transaction per block.
6. The block reward contract is called by the AuRa consensus engine (post-merge this will be the PoS consensus algorithm) to update the EVM state and update the user's xDai balance.

You can view a receiver's address and amount of xDai received in the [block reward contract's](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA) logs. Whenever the `executeAffirmation` method is called, it registers the following:

```
AddedReceiver(
	uint256 amount, 
	address indexed receiver, 
	address indexed bridge
)
```

Example: https://blockscout.com/xdai/mainnet/tx/0x5892a695860f6087a2d93140f05e6365142ff77fd7128e39dbc03128d5797ac4/logs

References: 

* [xDai Docs: How xDai is Minted](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/converting-xdai-via-bridge/xdai-mechanics-how-xdai-is-minted)
### Gnosis -> Ethereum 

1. User sends a transaction to the bridge contract on xDai to initiate a withdrawal.  
2. The requested xDai withdrawal amount is "burned" (sent to address 0x0 where it can never be withdrawn), and the `UserRequestForSignature` method is called (see [example transaction](https://blockscout.com/xdai/mainnet/tx/0x8e23cf0ab01476c2df5b71a72603f2c229d3d9a63ad6ca71ce164798f3733826/internal-transactions))
3. The request generates an event on the xDai side.
4. Bridge validator nodes catch this event and send confirmation (signatures) to the contract on the xDai side.
5. Once enough signatures are collected (currently 4 of 6), one of the bridge validators* sends the signatures and message to Ethereum. * Anyone can extract this information and send to Ethereum. If a transaction stalls due to congestion, this transaction can be re-submitted by any user with a higher gas price. 
6. The bridge contract on Ethereum checks that the signatures are valid. If they are,  the requested Dai is unlocked for the user.  

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

* [xDai Docs: Dai & Stablecoin Compounding](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/converting-xdai-via-bridge/dai-compounding)
* [Dune Analytics: xDai Bridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges) 
## Managing Bridge Contracts

References: 
* [TokenBridge Docs: xDai Contracts Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
* [TokenBridge Docs: Upgrading xDai Bridge Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/upgrade-contracts)
* [TokenBridge Docs: Configuring Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/configuration)
* [TokenBridge Docs: Admin Privilege Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/admin-privileges-management)
* [TokenBridge Docs: ERC20 Token Release](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/erc20-tokens-release)
* [TokenBridge Docs: xDai Bridge Management API](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/xdai-bridge-management-api)

## Managing Bridge Validators

References:

* [xDai Docs: Bridge Validators](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators)
* [xDai Docs: Bridge Node Setup](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators/bridge-node-setup)
* [xDai Docs: How to setup a new Bridge Validator](https://github.com/gnosischain/xdaichain.com/tree/master/for-validators/for-bridge-validators/current-validators-how-to-add-a-new-bridge-validator)
* [TokenBridge Docs: Migrating Oracle to new Server](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server)
## Resources

- [Tokenbridge Docs on xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
- [xDai Bridge docs](https://github.com/gnosischain/xdaichain.com/tree/master/for-users/bridges/converting-xdai-via-bridge)