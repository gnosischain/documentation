---
title: xDai Bridge
---

# xDai Bridge

:::info

The xDai bridge can be found at [bridge.gnosischain.com](https://bridge.gnosischain.com/)

:::

## Docs Wishlist

INDIVIDUAL DOCS
- [ ] [How xDai is minted](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/xdai-mechanics-how-xdai-is-minted)
- [ ] [Dai Compounding](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge/dai-compounding)
- [ ] [Bridge Daily Limits](https://developers.gnosischain.com/for-users/bridges/bridge-daily-limits)
- [ ] [About xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
- [ ] Bridge Governance Parameters
  - [ ] What are the actual parameters that can be amended?
- [ ] Bridge validators
  - [ ] Need to verify addresses for each of the organizations - which are on Ethereum, and which are on Gnosis?
- [ ] Roadmap
  - [ ] Link to Roadmap
- [ ] How it works
  - [ ] How does the reverse bridge-out process work?
  - [ ] [xDai Withdrawal Flow](https://docs.tokenbridge.net/xdai-bridge/using-the-xdai-bridge/withdrawal-authorization-flow)
- [ ] What is the address 0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd do?
	- [ ] Owner of the Validator Management proxy on Gnosis Chain


OVERALL
- [ ] Synthesize [xDai Bridge Docs](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge)
- [ ] Synthesize [Tokenbridge xDai Docs](https://docs.tokenbridge.net/xdai-bridge/about)
- [ ] Does xDai Bridge have an ALM? No


The [xDai bridge](https://bridge.gnosischain.comd) is a native Dai bridge from Ethereum that is used to mint and burn [xDai](../../about/tokens/xdai-token.md) on Gnosis, the native asset used for gas and transaction fees. 

![xDai Bridge Diagram](/img/bridges/diagrams/dai-bridge.svg) 

Once Dai is bridged into the xDai bridge, the xDai bridge contract on Gnosis mints and sends xDai to the user's corresponding address on Gnosis. This is done through the  [block rewards contract](#block-rewards-contract) and minted in the next block by the consensus algorithm. 

## Key Information

### Overview

|            | Detail                  |
| --------------------- | ----------------------------------------------- |
| Frontend URL             | https://bridge.gnosischain.com                  |
| Trust Model           | [4-of-6 Validator Multisig](#bridge-validators) |
| Governance Model      | 7-of-16 Multisig TODO                               |
| Governance Parameters | Validator Set, Daily Limits, Fees               |
| Bug Bounty                      |  TODO                                               |
| Bug Reporting         | TODO                                            |


### Contract Addresses

#### Ethereum

| Contract                      | Ethereum Address                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Proxy Contract               | [eth:0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) |
| Validator Management Contract | [eth:0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)                                                                                                                                            |

#### Gnosis
| Contract                      | Gnosis Address                                                                                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Proxy Contract               | [gno:0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://blockscout.com/xdai/mainnet/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6/read-proxy#address-tabs) |
| Block Reward Contract         | [gno:0x481c034c6d9441db23Ea48De68BCAe812C5d39bA](https://blockscout.com/xdai/mainnet/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)                         |
| Validator Management Contract | [gno:0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D](https://blockscout.com/xdai/mainnet/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)                                                                                                                                                                 |

### Fees & Daily Limits

| Type               | Ethereum -> Gnosis | Gnosis -> Ethereum |
| ------------------ | ------------------ | ------------------ |
| Bridge Fees        | 0%                 | 0%                 |
| Approx. Gas Cost   | TODO               | TODO               |
| Min Transfer   | 0.005 Dai          | 10 xDai            |
| Max Single Deposit | 9,999,999 Dai      | 9,999,999 xDai     |
| Daily Limit        | 10,000,000 Dai     | 10,000,000 Dai     |
| Daily Limit Reset  | 00:00 UTC          | 00:00 UTC          |

### Bridge Validators

This process relies on a trusted group of xDai Bridge Validators to perform the role of a cross-chain bridge oracle. There is a roadmap to move towards [trustless bridges](../roadmap.md). 

Bridge transaction execution currently requires signatures from 4 of 6 validators.

| Organization | Ethereum Address                             | Gnosis Address                                                                                                                           |
| ------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Giveth       | [eth:needsToBeValidated](https://google.com) | [gno:0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506](https://blockscout.com/xdai/mainnet/address/0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506) |
| Protofire    |                                              | [gno:0x4d1c96b9a49c4469a0b720a22b74b034eddfe051](https://blockscout.com/xdai/mainnet/address/0x4D1c96B9A49C4469A0b720a22b74b034EDdFe051) |
| Syncnode     |                                              | [gno:0xfe24cfb2f8872e9ed097c451de065a9f6048915b](https://blockscout.com/xdai/mainnet/address/0xfe24Cfb2F8872e9ed097C451dE065A9F6048915b) |
| GnosisDao    |                                              | [gno:0x32e6C5e2132792B407424EBa19e48668Ebf80B14](https://blockscout.com/xdai/mainnet/address/0x32e6C5e2132792B407424EBa19e48668Ebf80B14) |
| CowProtocol  |                                              | [gno:0xF81A2768BEDB8Ab805A2DF5Fb7D58685C224b9b6](https://blockscout.com/xdai/mainnet/address/0xF81A2768BEDB8Ab805A2DF5Fb7D58685C224b9b6) |
| GnosisSafe   |                                              | [gno:0xebd33d099Dd31D32923f0A033Df6F7FC264Ef214](https://blockscout.com/xdai/mainnet/address/0xebd33d099Dd31D32923f0A033Df6F7FC264Ef214) |

### Bridge Revenue

The xDai bridge currently generates bridge revenue through earned yield on stablecoins deposited on the bridge, which is then used by the [GnosisDAO treasury](../../about/overview/about-gnosis-dao.md) to fund Gnosis development. 

### Analytics

- https://dune.com/maxaleks/xDai-Bridge
- https://dune.com/maxaleks/Compounding-in-xDai-bridges

### Roadmap

## How it Works

The xDai token is minted when Dai is transferred from Ethereum to the Gnosis Chain using the xDai Bridge. During the transfer process, a block reward contract is invoked to mint xDai to a user's account. Because contract calls are made from the consensus engine to create xDai tokens, balance updates are more difficult to trace than simple value transfers. [See this diagram above for a visualization of the process](/bridges/tokenbridge/xdai-bridge#overview).

### Ethereum -> Gnosis
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

### Gnosis -> Ethereum 

1. User sends a transaction to the bridge contract on xDai to initiate a withdrawal.  
2. The requested xDai withdrawal amount is "burned" (sent to address 0x0 where it can never be withdrawn), and the `UserRequestForSignature` method is called. Example tx: https://blockscout.com/xdai/mainnet/tx/0x8e23cf0ab01476c2df5b71a72603f2c229d3d9a63ad6ca71ce164798f3733826/internal-transactions
3. The request generates an event on the xDai side.
4. Bridge validator nodes catch this event and send confirmation (signatures) to the contract on the xDai side.
5. Once enough signatures are collected (currently 4 of 6), one of the bridge validators* sends the signatures and message to Ethereum. * Anyone can extract this information and send to Ethereum. If a transaction stalls due to congestion, this transaction can be re-submitted by any user with a higher gas price. 
6. The bridge contract on Ethereum checks that the signatures are valid. If they are,  the requested Dai is unlocked for the user.  

:::note
This final step may be delayed if Ethereum mainnet is congested.
:::

### Interest on Bridge Deposits

- [ ] Verify if Compound deposits have been deprecated
- [ ] Verify if we currently only leave 1,000,000 as float

A portion of Dai locked in the Bridge contract (on the Ethereum side) are deposited in [Aave](https://aave.com) and [Compound](https://compound.finance) and  to earn yield. The proportion of the Bridge Deposits is determined by bridge's governance. Currently, 1,000,000 Dai are held in reserves, and the remaining balance is used to earn yield.

![Dai Compounding Diagram](/img/bridges/diagrams/xdai-compounding.svg)

Bridge withdrawal requests from xDai to Ethereum first use the Dai in the reserve. If a request is initiated that exceeds the available reserve amount, the requested amount exceeding the reserve + 1,000,000 Dai (required reserve) is withdrawn immediately from Compound. The 1,000,000 Dai replenishes the reserve.
Interest earned on the Dai supplied to Compound and COMP tokens will be collected periodically (approximately monthly) and transferred to an EOA through a manual method call. Funds will be used to support bridge operations such as gas refunds for users or other tbd mechanisms which can be discussed and decided on by the bridge governors.
In the case where the amount of Dai requested for withdrawal is not available in Compound (likely due to high borrowing demand), the user will need to wait until Compound liquidity is available to execute the request. 

## Smart Contracts

- [ ] xDai Bridge Contracts Management
  - [ ] [xDai Contracts Management](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management)
  - [ ] [Upgrading xDai Bridge Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/upgrade-contracts)
  - [ ] [Configuring Contracts](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/configuration)
  - [ ] [Admin Privilege Manaement](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/admin-privileges-management)
  - [ ] [ERC20 Token Release](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/erc20-tokens-release)
  - [ ] [xDai Bridge Management API](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-contracts-management/xdai-bridge-management-api)

## Run a Bridge Validator

- [ ] xDai Validator Guide
  - [ ] [Migrating a xDai Validator](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server)
## Resources

- [Tokenbridge Docs on xDai Bridge](https://docs.tokenbridge.net/xdai-bridge/about)
- [xDai Bridge docs](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge)