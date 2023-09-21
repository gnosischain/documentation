---
title: Decisions
description: The Bridge Governance Board is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.
keywords: [governance board, bridge governance]
---

# Governance Decisions

The [Bridge Governance Board](./#current-bridge-governors) is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.

## Upgrade xDAI bridge to support investing in sDAI vault.

🗳 Justification: We [upgrade](https://app.safe.global/transactions/tx?safe=eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6&id=multisig_0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6_0xd8683bccfe39ace95a1da5f58a5c9a83dc324de39ce07f11fcffb5c2397ca96c) [xDAI bridge](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) to new implementation version in order to support investing DAI from the bridge contract into sDAI vault from Spark Protocol. This upgrade only implements changes on Ethereum, and the next phase will be on Gnosis Chain. The implementation contract is [audited by Omega and ChainSafe](../audits.md#xdai-bridge-upgrade-audit-by-omega-and-chainsafe). For more details, please refer to [docs](../tokenbridge/xdai-bridge.md#savings-xdai)

We call the method `upgradeTo()` on the xDAI bridge proxy contract (0x4aa42145aa6ebf72e164c9bbc74fbd3788045016) with parameters: version 8 and impl. 0x166124b75c798cedf1b43655e9b5284ebd5203db.

We call the `initializeInterest()` with the following parameters.

```
- DAI: 0x6b175474e89094c44da98b954eedeac495271d0f
- minCashThreshold: 1000000000000000000000000 (1,000,000 DAI)
- minInterestPaid: 1000000000000000000000 (1,000 DAI)
- interestReceiver: 0x0000000000000000000000000000000000000000
```

We also call `investDAI()` to invest the DAI into MakerDSR. 25m DAI have been [deposited into sDAI vault](https://etherscan.io/tx/0x291d48fdfd430165b2b7f62c3ae806ea28ab34b4dc8a2e4d7d01693f19b780c9) earning interest.

[refillBridge()](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#writeProxyContract#F3) will be called periodically (once per day at the moment) by the Karpatkey team to ensure that there is enough DAI for withdrawal on Ethereum.

✅ Implemented: Sept 20, 2023

## Add Telepathy Validator in the AMB

🗳 Justification: Adding the Telepathy validator in the AMB as the 8th validator.

Telepathy is a light client based validator developed by SuccinctLabs. Main goal is to increase security of the bridge by adding a validator that is not based on trusted off-chain agents but on verifying the transactions based on the Ethereum consensus layer.
We are also increasing the minimum required block confirmations to 100 blocks so that the Telepathy validator has enough time to participate in the transaction affirmation process.  
This initiative is part of this proposal that started a year ago:
https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421  
More details on the design: https://hackmd.io/@wdyZgTm3RrOsm-rhXDXEHA/BJ_7ExKgn

✅ Implemented: Jul 3, 2023

## Remove two governor wallets, add three new governor wallets and remove HAUS token fee.

🗳 Justification: We removed two inactive governor wallets from ex-xDAI team and add three new governor wallets: Succinct Labs, Agave, Gnosis Bridge team. Additionally, we increased governance Safe wallet’s threshold from 7 to 8, resulting in 8-of-16 requirement to pass a proposal, strengthening the resilience of the bridge governance. Besides, as requested from DAOHAUS team, we removed HAUS token fee, making it a complete fee-less operation to bridge HAUS token between ETH and Gnosis Chain.

✅ Implemented: Jun 12, 2023

## Upgrade BNB-GC Omnibridge mediator to stop accepting any new token locks and mints

🗳 Justification: As part of the longer term plan to decommission the BNB-GC Omnibridge (more info [https://forum.gnosis.io/t/bridge-to-binance-update/6624](https://forum.gnosis.io/t/bridge-to-binance-update/6624)), we want to stop any new token locks and mints from either BNB chain or Gnosis Chain.

✅ Implemented: April 4, 2023

## Safe contract updates, two new governor wallets and Gateway validator addition.

🗳 Justification: We executed a regular/routine update for all Safe contracts. Additionally, we added one more validator (7 in total), strengthening even further the resilience of the bridges. Finally, we replaced two recently inactive wallets with new participants that will participate in the governance more actively.

✅ Implemented: March 20, 2023

## Adjust limits on ETH-GC OmniBridge for WETH, WBTC, GNO, CLNY, DXD, HOPR, HAUS

🗳 Justification: For risk management purposes, the daily limits for transactions from Gnosis Chain to Ethereum where raised for major assets and were adjusted to reasonable values for some smaller assets.

✅ Implemented: February 23, 2023

## Add Karpatkey and remove Syncnode from the set of validators of AMB & xDAI Bridges

🗳 Justification: Syncnode team requested to be removed from the validator set. In the same time addition of Karpatkey validator creates additional reliability and decentralization of validators set.

✅ Implemented: December 4, 2022

## Remove Funds from lending protocols AAVE and Compound and disable Interest Function on Omni Bridge and xDAI Bridge

🗳 Justification: reduce risk and exposure during the uncertainty that came with the merge. After the merge, a new strategy must be developed in order to define how to approach this type of investment considering the implications related to transparency to the users and the risk involved.

✅ Implemented: September 14, 2022

## Remove Former xDai Team Validators from AMB & xDAI Bridges

🗳 Justification: xDai validators were important at the early stages of the project to ensure operational execution and bridge functionality. Now, with increased community involvement and ecosystem maturity, the next step is to further decentralize processes and remove the former xDai team.

✅ Implemented: June 14, 2022

## Disable Deposit Function in StakingAura POSDAO contract

🗳 Justification: Staking is deprecated in POSDAO. Current validators will continue until the Gnosis Chain <-> Gnosis Beacon Chain merge but no new deposits are allowed.

✅ Implemented: June 14, 2022

## Swap Governance Account Address

🗳 Justification: Account for the former xDai team needs to be updated in the Governance Gnosis Safe.

✅ Implemented: June 03, 2022

## Decrease Withdrawal Fee on OmniBridge for CommonGround

🗳 Justification: The Common Ground token withdrawal fees should be set to 0 when bridging from Gnosis Chain to Ethereum to help promote adoption.

✅ Implemented: May 30, 2022

## Remove Validator from the AMB Validator Set

🗳 Justification: This odd-numbered validator run by the xDai team is redundant and should be removed from the set.

✅ Implemented: May 24, 2022

## Increase Limits for xDAI, USDC and USDT

🗳 Justification: Due to market conditions, stablecoin bridge limits should be temporarily raised to ensure leveraged positions are not liquidated due to inability to bridge.

✅ Implemented: May 12, 2022

## Increase Default Daily Limits of AMB Bridge

🗳 Justification: To support projects looking to move large amount of tokens from Ethereum to Gnosis Chain, increase the limits from 10^9 to 10^18 to enable transfer in a single tx.

✅ Implemented: May 11, 2022

## Update Bridge Fee Receiver to GnosisDAO

🗳 Justification: Bridge responsibility is migrating to GnosisDAO, and fees should be sent to a GnosisDAO owned safe.

- Added new fee recipient
- Removed existing recipient

✅ Implemented in batch: May 03, 2022

## Update Bridge Fee Receiver to GnosisDAO

🗳 Justification: Bridge responsibility is migrating to GnosisDAO, and fees should be sent to a GnosisDAO owned safe.

- Added new fee recipient
- Removed existing recipient

✅ Implemented: May 03, 2022

## Update Bridge Validator Set

🗳 Justification: Remove unresponsive validator and add new validators to both the AMB Omnibridge and xDai Tokenbridge.

- Removed 1 inactive validator, Mariano Conti
- Added 2 new validators, Cow Protocol and Gnosis Safe

✅ Implemented in batch: May 01, 2022

## Interest Received by Bridge Compounding Redirected to KarpatkeyDAO

🗳 Justification: As part of the agreement between xDai/Gnosis Chain token merge the interest received on bridged funds should be managed by KarpatkeyDAO.

✅ Implemented: April 26, 2022

## Decrease Daily Limit Amounts for Bridge Transactions

🗳 Justification: Increase the bridge security by decreasing the allowable daily limits for the following assets:

- xDAI - 3’000’000 (4%)
- USDC - 2’500’000 (3%)
- USDT - 1’500’000 (4%)
- WETH - 250 (3%)
- WBTC - 2 (2.5%)
- GNO - 5’000 (2%)

✅ Implemented (in series of txs): April 11, 2022

## Add Bridge Validator & Increase Requires Sigs

🗳 Justification: Add an additional validator to xDai Bridge and AMB OmniBridge. A second proposal increased the number of signatures required for bridge execution.

- xDai: 4/6
- AMB OmniBridge 5/8

✅ Implemented (in series of txs) March 26, 2022

## Update Governing Body

🗳 Justification: Add additional governors to increase decentralization and remove several inactive validators. A series of related proposals accomplished the following:

- Removed 2 inactive governors, Burner Wallet and Request
- Added 3 new governors, KarpatkeyDAO, Cow Protocol and Gnosis Safe

✅ Implemented (in several txs) March 26, 2022

## Rotate AMB validator

🗳 Justification: Maintain active participation by rotating a signer address on the ETH-GC Arbitrary Message Bridge

✅ Implemented: February 21, 2022

## Increase gas limit to 4m gas for AMB messages

🗳 Justification: Necessary for Cow token deployment. Blocks can handle this capability with EIP1559 implementation.

​✅ Implemented: January 30, 2022

## Decrease OmniBridge withdrawal fee for WBTC

🗳 Justification: Reduce fees to 0 to attract participants to protocols on the Gnosis Chain.

✅ Implemented: January 24, 2022

## Decrease OmniBridge withdrawal fee for GNO

🗳 Justification: Incentivize users to move operations to the Gnosis Chain

✅ Implemented: January 17, 2022

## Adjust Perpetual Finance contract auto-execution functionality

🗳 Justification: Perpetual Finance is no longer subsidizing transaction for users - users will need to deposit/withdraw/ and pay tx fees themselves. The bridge no longer needs to auto-execute transactions for this contract.

✅ Implemented: December 22, 2021

## Decrease OmniBridge withdrawal fee for WETH

🗳 Justification: Incentivize users to move operations to the Gnosis Chain

✅ Implemented: December 03, 2021

## Add Tornado cash contracts to Omnibridge forwarding rules manager

🗳 Justification: Add Tornado Cash contracts for proper routing and subsidized exits. This was done in several transactions from Oct 27 to Dec 10 to account for all contract functionality.

✅ Implemented: October 27, November 9, November 15, 2021, December 10, 2021

## Increase finalization time to 20 blocks

🗳 Justification: To increase security, finalization time on Gnosis for the xDAI TokenBridge and for the ETH-xDAI Arbitrary Message Bridge increased to 20 blocks from previous 8-12.

✅ Implemented: October 18, 2021

## Update Contracts

🗳 Justification: Last in a series of upgrades to allow reverse bridging and deploy contracts included in the Chainsecurity audits.

✅ Implemented: October 15, 2021

## Include Compounding for xDai Bridge

🗳 Justification: Add compounding to support bridge operations.

✅ Implemented: October 6, 2021

## Upgrade Bridge Contracts

🗳 Justification: Add new functionality including increased AMB request ability, contracts to send requests, and fix a security vulnerability identified through the Bug Bounty program.

✅ Implemented: October 4, 2021

## Add 1Hive Representative to the Governance Board

🗳 Justification: Increase decentralization by extending the governance and the bridge validators set.

✅ Implemented: October 4, 2021

## Add 01Node & Peerion Representatives to the Governance Board

🗳 Justification: Increase decentralization by extending the governance and the bridge validators set.

✅ Implemented: September 22, 2021

## Increase finalization time on Ethereum Mainnet

🗳 Justification:  
Increase the amount of blocks required for confirmation on the Ethereum Mainnet to 20, increaseing bridge operation reliability and security (less chances for re-orgs). This update slightly delays user transfers from 2.5 minutes to \~4 minutes.

✅ Implemented: August 20, 2021

## Reduce USDC withdrawal fees to 0 for 3 months

🗳 Justification: Current exit fees for USDC transfers on OmniBridge are currently 0.1%. The primary purpose of this temporary 3-month reduction to 0 fees is to attract more protocols utilizing USDC and OmniBridge for their activities.

✅ Implemented: June 15, 2021

## Return user funds

🗳 Justification: A user accidentally [sent over 2000 USDC](https://blockscout.com/xdai/mainnet/tx/0x2837cd89972f2e37a1cb631e60dbb761213010fe526a089c99f48ed483f63956) to the USDC token contract on Gnosis. After confirming the users identity, the board agreed to call the `claimTokensFromTokenContract` method and return the amount to the user.

✅ Implemented: April 15, 2021

## Upgrade Bridge Contracts

🗳 Justification: A number of updates were made to the contracts to facilitate user engagement, support costs for xDai transfers, and provide logic for rebasing tokens. The minimum amount per token transaction was reduced to 1 wei (primarily to support LP tokens or other token fractions) and fees were set to 0.1% for xDai to Dai transfers.

✅ Implemented: March 15, 2021

## Add Syncnode as Governor / xDai Bridge Oracle

🗳 Justification: Increase decentralization by extending the governance and the bridge validators set to include Syncnode.

✅ Governor Set Implemented: January 22, 2021  
✅ Oracle Implemented: January 7, 2021
