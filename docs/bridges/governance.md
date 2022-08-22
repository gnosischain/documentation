---
title: Governance
---


References: 
- [xDai Docs: What is the Bridge Governance Board?](https://developers.gnosischain.com/about-gc/faqs/bridges-xdai-bridge-and-omnibridge#what-is-the-bridge-governance-board)

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
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum | [eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6](https://gnosis-safe.io/app/#/safes/0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6/settings)      |
| Gnosis   | [gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd](https://xdai.gnosis-safe.io/app/#/safes/0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd/settings) |

### Current Bridge Governors

There are currently 16 Bridge Governors, of which 7-of-16 are required to pass a proposal. 

| Name            | Address |
| --------------- | ------- |
| Gnosis DAO      |         |
| Safe Foundation |         |
| Cow Protocol    |         |
| Karpatkey DAO   |         |
| xDai Team       |         |
| TokenBridge     |         |
| Metacartel      |         |
| RaidGuild       |         |
| Lab10           |         |
| Giveth          |         |
| Peerion         |         |
| 1Hive           |         |
| 01Node          |         |
| Syncnode        |         |
| Anyblock        |         |
| Protofire       |         |

References: 
- [xDai Docs: Bridge Governance Board](https://developers.gnosischain.com/for-users/governance/bridge-governance-board)
## Governance Process

### Phase 1: Ideation
Post created on the Gnosis Forum in the [GnosisDAO category 108](https://forum.gnosis.io/c/dao/20). There is no set duration on how long a proposal stays in this stage. There is no formal requirement for a proposal to pass this stage. However, if a proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal.

### Phase 2: Specification
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is created. This stage lasts 5 days. For the proposal to pass this stage, one outcome with a relative majority of votes on the forum poll must be achieved. If the relative majority of votes indicates `Make no changes`, the proposal does not pass to Phase 3.


### Phase 3: Multisig Voting & Execution
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is refined, and there is a [GnosisDAO Snapshot 60](https://snapshot.org/#/gnosis.eth) poll. This stage lasts for 7 days. For proposals to be accepted there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4% of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result Make no changes, the proposal will not be accepted and considered closed.
References: 
- [xDai Docs: Community Governance](https://developers.gnosischain.com/for-users/governance/community-governance)

## Governance Parameters

### Bridge Validators

References:
- [xDai Docs: Bridge Validators](https://developers.gnosischain.com/for-validators/for-bridge-validators)

### Bridge Limits

References: 
- [xDai Docs: Bridge Daily Limits](https://developers.gnosischain.com/for-users/bridges/bridge-daily-limits)

## Governance Decisions

References: 
- [xDai Docs: Governance Decisions](https://developers.gnosischain.com/for-users/governance/governance-board-summary-of-decisions)