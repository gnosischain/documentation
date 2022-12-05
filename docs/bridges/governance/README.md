---
title: Governance
description: The Bridge Governance Board is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.
keywords: [governance board, bridge governance]
---


## Key Information

### Overview
In response to increased usage and value locked in the xDai bridge, a proposal was introduced to extend security and decision making powers to a wider group of participants (governors).
The proposal was accepted, and governance by means of a multi-signature Gnosis Safe was put into place initially on the Ethereum side on 2 October, 2020. Once Gnosis Safe was deployed to xDai, updated governance was enacted on the xDai chain on 23 October, 2020.  
The governing board is responsible for managing bridge operations on both sides of the bridge (contracts are deployed on the Ethereum and Gnosis side). 7 signatures are required to approve any management proposal. 
Operations may include:
* Bridge contract updates.
* Contract parameters updates such as bridge limits, finality threshold, gas price fallback etc.
* Bridge validator parameter updates like changing the validators set or signatures threshold.  
All actions are managed through Gnosis Safe accounts, one on the Ethereum mainnet for Ethereum contract side operations and one on Gnosis for xDai contract operations.

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
* [xDai Bridge Validators](../tokenbridge/xdai-bridge.md#bridge-validators)  
* [OmniBridge Validators](../tokenbridge/omnibridge#bridge-validators)


### Bridge Limits

Different limits are set for the [xDai Bridge](../tokenbridge/xdai-bridge.md#fees--daily-limits) and the [OmniBridge](../tokenbridge/omnibridge.md#fees--daily-limits) by the bridge governors. Please see their respective documentation pages for more information. 
