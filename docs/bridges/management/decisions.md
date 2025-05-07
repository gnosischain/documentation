---
title: Governance Decisions
description: The Bridge Governance Board is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.
keywords: [governance board, bridge governance]
---

# Governance Decisions

The [Bridge Governance Board](./#current-bridge-governors) is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.

## Upgrading Deposit Contract: Introducing new batchDeposit function

🗳 Justification:

1. Upgrade the deposit contract proxy to new implementation contract, which introduced a new `batchDeposit` function that allows specifying a different deposit amount for each validator. This is required for batching for 0x02-type withdrawal credentials which have variable amounts instead the previous default of 1 GNO.
   1. Deposit contract proxy contract: 0x0B98057eA310F4d31F2a452B414647007d1645d9
   2. Old implementation contract: [\*0x4feF25519256e24A1FC536F7677152dA742Fe3Ef](https://gnosisscan.io/address/0x4feF25519256e24A1FC536F7677152dA742Fe3Ef)\*
   3. New implementation contract: [0x49de1aced385334f1a66d86db363264eb5b6a708](https://gnosisscan.io/address/0x49de1aced385334f1a66d86db363264eb5b6a708#code)

✅ Implemented: May 2, 2025

## Upgrade xDAI implementation contract for Hashi integraion, replacing Metacartel with Monerium

🗳 Justification:

1. Upgrade xDAI proxy contract to the new Hashi integrated bridge contract according to https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245:
   1. Foreign xDAI implementation contract: [0xb54042F5bA4B048fEa54aaE70abbbe41AC716299](https://etherscan.io/address/0xb54042F5bA4B048fEa54aaE70abbbe41AC716299#readContract), version: 9
   2. Home xDAI Implementation contract: [0xb740472c650fe949931b9df0cb253b48c80c82de](https://gnosisscan.io/address/0xb740472c650fe949931b9df0cb253b48c80c82de#readContract), version: 6
2. set Hashi Manager for xDAI Bridge
   1. Hashi Manager on ETH: [0x9acCFAD714A1e670CD1f6dc666FE892d1d5547BD](https://etherscan.io/address/0x9acCFAD714A1e670CD1f6dc666FE892d1d5547BD)
   2. Hashi Manager on Gnosis Chain: [0x60Aa15198a3AdfC86FF15B941549A6447B2dDB49](https://gnosisscan.io/address/0x60Aa15198a3AdfC86FF15B941549A6447B2dDB49)
3. Replace MetaCartel in Bridge governors with Monerium
   1. MetaCartel: 0xd945325557f1FB4374fBf10Ae86D385632Df870A
   2. Monerium: 0xB646B8b5Fe6cBc7770578B7679208337ef747ae4

✅ Implemented: Apr 15, 2025

## Replacing bridge governors

🗳 Justification:
Add signers:

- Aavechan: 0x329c54289Ff5D6B7b7daE13592C6B1EDA1543eD4
- Kleros: 0xb2a33ae0E07fD2ca8DBdE9545F6ce0b3234dc4e8
- Erigon: 0xcF9ebF877688Ed88a7479A6e63457Fd78D4275cE
- Nethermind: 0x544cE64C3Fc6Da72CEB2456CC4cF19E7c7972eFA

Remove Signers:

- DaoHaus: 0x1685324Bf373670ad5C9c56bd88A1dc1C063b0f9
- RaidGuild: 0xd26a3F686D43f2A62BA9eaE2ff77e9f516d945B9
- Succinct: 0x72Ff26D9517324eEFA89A48B75c5df41132c4f54
- 01node: 0x0101016044726994aFd16f4A99f0d960090D35e7

✅ Implemented: Jan 31, 2025

## Increase required block confirmation for AMB to 175 blocks, replace CowSwap’s lost address, and replace 1Hive with Hopr

🗳 Justification:

1. Governor wallet: Replace CowSwap’s lost address `0xAC0622953d25e1a6c4e0f32Ffc1A9C1cE350B60E` with new address `0xf59e447e97bc03c2b0c5719e2e551f0b15b724e5`
2. Governor wallet: Replace 1Hive `0x86Da253817DC599059e3AD5A1F098F7b96aBf34c` with Hopr `0xA07888742c18d7e658132AE0148fF205fFF46481`.
3. Foreign AMB: Increase `requiredBlockConfirmation` from 130 to 175 to wait for Light Client based oracle to generate the event proof.

✅ Implemented: Dec 16, 2024

## Upgrade AMB implementation contract for Hashi integraion, remove Telepathy validator, refund TRAC token due to accidental transfer

🗳 Justification:

1. Upgrade AMB proxy contract to the new Hashi integrated bridge contract according to https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245:
   1. Foreign AMB implementation contract: [0x098f51bdfb5D6d319DD4FDf06b64773d25bD1316](https://etherscan.io/address/0x098f51bdfb5D6d319DD4FDf06b64773d25bD1316#readContract), version: 6
   2. Home AMB Implementation contract: [0xA033535983d1aBcc2648af730EDCb198909903D7](https://gnosis.blockscout.com/address/0xA033535983d1aBcc2648af730EDCb198909903D7#code), version: 6
2. Remove Telepathy from AMB’s validator list
   1. Succinct Labs is deprecating the Telepathy platform; thus, we are removing Telepathy [0x456c255A8BC1F33778603A2a48Eb6B0C69F4d48E](https://gnosisscan.io/address/0x456c255A8BC1F33778603A2a48Eb6B0C69F4d48E) from validator list. We will add the new SP1 based implementation when ready.
3. Unlock TRAC token to users
   1. Users transferred TRAC token directly into Omnibridge instead of calling relayTokens, resulting in TRAC token locked in Omnibridge: https://etherscan.io/tx/0xf1192bff538080c848ecbf9385a63656ddc5312e51e97d09debf7b06a25316e9. We will bridge the locked TRAC token to Gnosis Chain so that users can receive the token.

✅ Implemented: Sept 23, 2024

## Unlock 5.4k EURe due to a Bridge App bug

🗳 Justification:
Due to a bug in the new Bridge App (calling `transfer` instead of `relayTokens` ), which in the meantime has been fixed, 5.4k EURe were accidentally locked in the bridge.
The proposal will mint 5.4k Omnibridge EURe (not canonical EURe) on Ethereum (based on the 5.4k canonical EURe that were locked on Gnosis chain side), so that the user can send it back to Omnibridge and unlock their EURe on Gnosis Chain.

✅ Implemented: Apr 22, 2024

## Onboarding EURC.e to Gnosis Chain, reset default dailyLimit and executionDailyLimit, remove fees for existing tokens, replace Telepathy validator address

🗳 Justification:

1. To comply with Circle’s bridged token standard, we have deployed Bridged EURC on the Gnosis Chain. Unlike the typical bridged token from Omnibridge, Bridged EURC on Gnosis Chain uses the latest version of the FiatToken standard, v2.2. Therefore, registering Bridged EURC on Gnosis Chain’s Omnibridge and setting default values for dailyLimit and executionDailyLimit are necessary to meet the token bridge limit requirements. Setting default dailyLimit and executionDailyLimit will not affect the current bridged token, but only newly bridged token, and it can be reset for individual tokens by calling setDailyLimit and setExecutionDailyLimit through governance process.
   - Bridged EURC on Gnosis Chain (EURC.e): 0x54E4cB2a4Fa0ee46E3d9A98D13Bea119666E09f6
   - new default dailyLimit: 10000000000000000000000000000000000010
   - new default executionDailyLimit: 10000000000000000000000000000000000010
2. Removing the fee of the following tokens as well as setting default fee to 0, meaning all the future newly bridged token from Omnibridge will be zero fee.
   BAL, PNK, CRV, CRVUSD, LINK, HOPR, COW, DXD, WSTETH
3. Increasing the daily and transactions limits for: WETH, WBTC, GNO, USDC, USDT, HOPR
4. Replacing Telepathy validator address with a new one.

✅ Implemented: Mar 13, 2024

## Increase required block confirmation for AMB to 130 blocks, remove Autonolas LP token fee

🗳 Justification: To increase the participation of the Telepathy light client on the AMB, we [increase the required block confirmations](https://app.safe.global/transactions/tx?safe=eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6&id=multisig_0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6_0xbd070bf3e3a1047b073d00c34fb73b39dd24678dd41c6f0c6855fec8411de165) from 100 blocks (~20 mins) to 130 blocks (~26 mins). This will ensure that the majority of the txs can be signed by Telepathy. End users should expect 6 more minutes delay.
Besides, as requested from Autonolas team, we [remove the Autonolas LP token fee](https://app.safe.global/transactions/tx?safe=gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd&id=multisig_0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd_0x27127a754307d26d7a9a4bfdcb01242103212ebec979039702e12de615125af5) on ETH↔GC Omnibridge, from previously 0.01% to 0.

✅ Implemented: Dec 18, 2023

## Remove OLAS token fee from ETH-GC Omnibridge

🗳 Justification: As requested from Autonolas team, we [removed OLAS token fee](https://app.safe.global/transactions/tx?safe=gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd&id=multisig_0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd_0x4efc19db4b29b2812b17e74cf4f8c91eef02a68a966a64617810c74589f5ab8b) on ETH↔GC Omnibridge, from previously 0.01% to 0.  
OLAS on Ethereum: https://etherscan.io/address/0x0001a500a6b18995b03f44bb040a5ffc28e45cb0  
Bridged OLAS token on Gnosis: https://gnosisscan.io/address/0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f

✅ Implemented: Nov 9, 2023

## Savings xDAI launch - Initiate sDAI interest bridging and increase xDAI bridge limits.

🗳 Justification: This is a follow-up on the previous proposal. After the successful upgrade of the xDAI bridge to deploy reserves on the sDAI vault, we launched the Savings xDAI vault on Gnosis chain which will distribute the interest earned on mainnet to holders of the sDAI token on Gnosis chain. We [set interest receiver](https://app.safe.global/transactions/tx?safe=eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6&id=multisig_0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6_0x933bd8409a8f46789ee29d50af1c10ed40378e05705681c8530aa744eb322ac5) to the interest receiver contract on Gnosis Chain.

We [increased the limits](https://app.safe.global/transactions/tx?safe=gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd&id=multisig_0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd_0x330f022997f6cb47b9d9643ebf032871bc0ffb82a0a3ee8e1020649de22dc6ec) for incoming xDAI transactions to Gnosis chain as we are anticipating higher volumes due this launch. Previous value: 10 million. New value: 15 million.

✅ Implemented: Oct 5, 2023

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

🗳 Justification: Staking is deprecated in POSDAO. Current validators will continue until the Gnosis Chain {'<->'} Gnosis Beacon Chain merge but no new deposits are allowed.

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
