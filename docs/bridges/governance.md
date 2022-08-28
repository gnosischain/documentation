---
title: Governance
---


## Key Information

### Overview
In response to increased usage and value locked in the xDai bridge, a proposal was introduced to extend security and decision making powers to a wider group of participants (governors).
The proposal was accepted, and governance by means of a multi-signature Gnosis Safe was put into place initially on the Ethereum side on 2 October, 2020. Once Gnosis Safe was deployed to xDai, updated governance was enacted on the xDai chain on 23 October, 2020.  
The governing board is responsible for managing bridge operations on both sides of the bridge (contracts are deployed on the Ethereum and xDai side). 7 signatures are required to approve any management proposal. 
Operations may include:
* Bridge contract updates.
* Contract parameters updates such as bridge limits, finality threshold, gas price fallback etc.
* Bridge validator parameter updates like changing the validators set or signatures threshold.  
All actions are managed through Gnosis Safe accounts, one on the Ethereum mainnet for Ethereum contract side operations and one on xDai for xDai contract operations.

### Bridge Governor Multisig

| Network  | Safe Address                                                                                                                                  |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Ethereum | [eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6](https://gnosis-safe.io/app/#/safes/0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6/settings)      |
| Gnosis   | [gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd](https://xdai.gnosis-safe.io/app/#/safes/0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd/settings) |

### Current Bridge Governors

There are currently 16 Bridge Governors, of which 7-of-16 are required to pass a proposal.  

|                    |              |             |
|--------------------|--------------|-------------|
| GnosisDAO          | Metacartel   | RaidGuild   |
| Protofire          | TokenBridge  | Lab10       |
| Anyblock Analytics | Gnosis Team  | Giveth      |
| Syncnode           | 1Hive        | Peerion     |
| 01Node             | Cow Protocol | Gnosis Safe |
| KarpatkeyDAO       |              |             |


## Governance Process

### Phase 1: Ideation
Post created on the Gnosis Forum in the [GnosisDAO category 108](https://forum.gnosis.io/c/dao/20). There is no set duration on how long a proposal stays in this stage. There is no formal requirement for a proposal to pass this stage. However, if a proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal.

### Phase 2: Specification
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is created. This stage lasts 5 days. For the proposal to pass this stage, one outcome with a relative majority of votes on the forum poll must be achieved. If the relative majority of votes indicates `Make no changes`, the proposal does not pass to Phase 3.


### Phase 3: Multisig Voting & Execution
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is refined, and there is a [GnosisDAO Snapshot 60](https://snapshot.org/#/gnosis.eth) poll. This stage lasts for 7 days. For proposals to be accepted there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4% of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result Make no changes, the proposal will not be accepted and considered closed.

## Governance Parameters

### Bridge Validators

Bridge validators are separate from chain validators, and currently composed of a subset of Gnosis Chain validators. This is a dynamic set, as the bridge governors can vote to increase the current set as well as propose and vote on other bridge related measures. 
Organizations are represented by an individual within that organization who is responsible for node operation & validation duties and/or participation in governance.  
* [xDai Bridge Validators](tokenbridge/xdai-bridge.md#bridge-validators)  
* [OmniBridge Validators](tokenbridge/omnibridge#bridge-validators)


### Bridge Limits

Different limits are set for the [xDai Bridge](tokenbridge/xdai-bridge.md#fees--daily-limits) and the [OmniBridge](tokenbridge/omnibridge.md#fees--daily-limits) by the bridge governors. Please see their respective documentation pages for more information. 

## Governance Decisions

The [Bridge Governance Board](./#bridge-governance-board) is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.

### 2022

#### Decrease OmniBridge withdrawal fee for GNO

🗳 **Justification:** Incentivize users to move operations to the Gnosis Chain

✅ **Implemented:** January 17**,** 2022&#x20;

#### Decrease OmniBridge withdrawal fee for WBTC

🗳 **Justification:** Reduce fees to 0 to attract participants to protocols on the Gnosis Chain.

✅ **Implemented:** January 24**,** 2022&#x20;

#### Increase gas limit to 4m gas for AMB messages

🗳 **Justification:** Necessary for Cow token deployment. Blocks can handle this capability with EIP1559 implementation.

​**​**✅ **Implemented:** January 30**,** 2022

#### Rotate AMB validator

🗳 **Justification:**  Maintain active participation by rotating a signer address on the ETH-GC Arbitrary Message Bridge

✅ **Implemented:** February 21**,** 2022&#x20;

#### Update Governing Body

🗳 **Justification:**  Add additional governors to increase decentralization and remove several inactive validators. A series of related proposals accomplished the following:

* Removed 2 inactive governors, Burner Wallet and Request
* Added 3 new governors, KarpatkeyDAO, Cow Protocol and Gnosis Safe

✅ **Implemented (in several txs):** March 26, 2022&#x20;

#### Add Bridge Validator & Increase Requires Sigs

🗳 **Justification:**  Add an additional validator to xDai Bridge and AMB OmniBridge. A second proposal increased the number of signatures required for bridge execution.&#x20;

* xDai: 4/6
* AMB OmniBridge 5/8

✅ **Implemented (in series of txs):** March 26**,** 2022&#x20;

#### Decrease Daily Limit Amounts for Bridge Transactions

🗳 **Justification:**  Increase the bridge security by decreasing the allowable daily limits for the following assets:

* xDAI - 3’000’000 (4%)
* USDC - 2’500’000 (3%)
* USDT - 1’500’000 (4%)
* WETH - 250 (3%)
* WBTC - 2 (2.5%)
* GNO - 5’000 (2%)

✅ **Implemented (in series of txs):** April 11**,** 2022&#x20;

#### Interest Received by Bridge Compounding Redirected to KarpatkeyDAO

🗳 **Justification:**  As part of the agreement between xDai/Gnosis Chain token merge the interest received on bridged funds should be managed by KarpatkeyDAO.  

✅ **Implemented:** April 26**,** 2022&#x20;

#### Update Bridge Validator Set

🗳 **Justification:**  Remove unresponsive validator and add new validators to both the AMB Omnibridge and xDai Tokenbridge.

* Removed 1 inactive validator, Mariano Conti
* Added 2 new validators, Cow Protocol and Gnosis Safe

✅ **Implemented in batch:** May 01, 2022&#x20;

#### Update Bridge Fee Receiver to GnosisDAO

🗳 **Justification:**  Bridge responsibility is migrating to GnosisDAO, and fees should be sent to a GnosisDAO owned safe.

* Added new fee recipient
* Removed existing recipient

✅ **Implemented:** May 03, 2022&#x20;

#### Update Bridge Fee Receiver to GnosisDAO

🗳 **Justification:**  Bridge responsibility is migrating to GnosisDAO, and fees should be sent to a GnosisDAO owned safe.

* Added new fee recipient
* Removed existing recipient

✅ **Implemented in batch:** May 03, 2022&#x20;

#### Increase Default Daily Limits of AMB Bridge&#x20;

🗳 **Justification:**  To support projects looking to move large amount of tokens from Ethereum to Gnosis Chain, increase the limits from 10^9 to 10^18 to enable transfer in a single tx.

✅ **Implemented:** May 11, 2022&#x20;

#### Increase Limits for **xDAI, USDC and USDT**&#x20;

🗳 **Justification:**  Due to market conditions, stablecoin bridge limits should be temporarily raised to ensure leveraged positions are not liquidated due to inability to bridge.

✅ **Implemented:** May 12, 2022&#x20;

#### **Remove Validator from the AMB Validator Set**&#x20;

🗳 **Justification:**  This odd-numbered validator run by the xDai team is redundant and should be removed from the set.  

✅ **Implemented:** May 24, 2022&#x20;

#### **Decrease Withdrawal Fee on OmniBridge for CommonGround**

🗳 **Justification:**  The Common Ground token withdrawal fees should be set to 0 when bridging from Gnosis Chain to Ethereum to help promote adoption.  

✅ **Implemented:** May 30, 2022&#x20;  

#### Swap Governance Account Address

🗳 **Justification:**  Account for the former xDai team needs to be updated in the Governance Gnosis Safe.

✅ **Implemented:** June 03, 2022&#x20;

#### Disable Deposit Function in StakingAura POSDAO contract

🗳 **Justification:**  Staking is deprecated in POSDAO. Current validators will continue until the Gnosis Chain <-> Gnosis Beacon Chain merge but no new deposits are allowed.&#x20;

✅ **Implemented:** June 14, 2022&#x20;

#### Remove Former xDai Team Validators from AMB & xDAI Bridges

🗳 **Justification:**  xDai validators were important at the early stages of the project to ensure operational execution and bridge functionality. Now, with increased community involvement and ecosystem maturity, the next step is to further decentralize processes and remove the former xDai team.

✅ **Implemented:** June 14, 2022&#x20;

### 2021

#### Add Syncnode as Governor / xDai Bridge Oracle

🗳 **Justification:**  Increase decentralization by extending the governance and the bridge validators set to include Syncnode.

✅ **Governor Set Implemented:** January 22, 2021   
✅ **Oracle Implemented:** January 7, 2021&#x20;

#### Upgrade Bridge Contracts

🗳 **Justification:**  A number of updates were made to the contracts to facilitate user engagement, support costs for xDai transfers, and provide logic for rebasing tokens. The minimum amount per token transaction was reduced to 1 wei (primarily to support LP tokens or other token fractions) and fees were set to 0.1% for xDai to Dai transfers.

✅ **Implemented:** March **** 15, 2021&#x20;

#### **Return user funds**

🗳 **Justification:**  A user accidentally [sent over 2000 USDC ](https://blockscout.com/xdai/mainnet/tx/0x2837cd89972f2e37a1cb631e60dbb761213010fe526a089c99f48ed483f63956)to the USDC token contract on xDai. After confirming the users identity, the board agreed to call the `claimTokensFromTokenContract` method and return the amount to the user.&#x20;

✅ **Implemented:** April 15, 2021

#### Reduce USDC withdrawal fees to 0 for 3 months&#x20;

🗳 **Justification:** Current exit fees for USDC transfers on OmniBridge are currently 0.1%. The primary purpose of this temporary 3-month reduction to 0 fees is to attract more protocols utilizing USDC and OmniBridge for their activities.

✅ **Implemented:** June 15, 2021&#x20;

#### Increase finalization time on Ethereum Mainnet

🗳 **Justification:**  
Increase the amount of blocks required for confirmation on the Ethereum Mainnet to 20, increaseing bridge operation reliability and security (less chances for re-orgs). This update slightly delays user transfers from 2.5 minutes to \~4 minutes.

✅ **Implemented:** August 20, 2021&#x20;

#### Add 01Node & Peerion Representatives to the Governance Board

🗳 **Justification:**  Increase decentralization by extending the governance and the bridge validators set.

✅ **Implemented:** September **** 22, 2021&#x20;

#### Add 1Hive Representative to the Governance Board

🗳 **Justification:**  Increase decentralization by extending the governance and the bridge validators set.

✅ **Implemented:** October **** 04**,** 2021&#x20;

#### Upgrade Bridge Contracts

🗳 **Justification:** Add new functionality including increased AMB request ability, contracts to send requests, and fix a security vulnerability identified through the Bug Bounty program.

✅ **Implemented:** October 4**,** 2021&#x20;

#### Include Compounding for xDai Bridge

🗳 **Justification:** Add compounding to support bridge operations. [Details here.](tokenbridge/xdai-bridge.md#earning-yield-on-bridge-deposits)

✅ **Implemented:** October 6**,** 2021&#x20;

#### Update Contracts

🗳 **Justification:** Last in a series of upgrades to allow reverse bridging and deploy  contracts included in the Chainsecurity audits.

✅ **Implemented:** October 15**,** 2021&#x20;

#### Increase finalization time to 20 blocks

🗳 **Justification:** To increase security, finalization time on the xDai chain for the xDAI TokenBridge and for the ETH-xDAI Arbitrary Message Bridge increased to 20 blocks from previous 8-12.

✅ **Implemented:** October 18**,** 2021&#x20;

#### Add Tornado cash contracts to Omnibridge forwarding rules manager

🗳 **Justification:** Add Tornado Cash contracts for proper routing and subsidized exits. This was done in several transactions from Oct 27 to Dec 10 to account for all contract functionality.

✅ **Implemented:** October 27**,** November 9**,** 2021,  November 15, 2021, December 10, 2021.

#### Decrease OmniBridge withdrawal fee for WETH

🗳 **Justification:** Incentivize users to move operations to the Gnosis Chain

✅ **Implemented:** December 03**,** 2021

#### Adjust Perpetual Finance contract auto-execution functionality

🗳 **Justification:** Perpetual Finance is no longer subsidizing transaction for users - users will need to deposit/withdraw/ and pay tx fees themselves. The bridge no longer needs to auto-execute transactions for this contract.

✅ **Implemented:** December 22**,** 2021&#x20;
