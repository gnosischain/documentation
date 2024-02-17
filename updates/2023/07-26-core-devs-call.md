---
title: Core Devs Call - 2023/07/26
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![core devs cover](https://github.com/gnosischain/documentation-1/assets/75987728/ab69071b-49b3-4621-87ea-ad8d56f7f794)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/DYi4jxbSKOY).

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

July 26, 2023

# Client Team Updates

## EL

- **Nethermind**:
  Issue when fetching events (`eth_getLogs`) on a contract that hasn’t emitted said event yet
  \{"jsonrpc":"2.0","result":[]\}\{"jsonrpc":"2.0","error":\{"code":-32016,"message":"Request was canceled due to enabled timeout."\},"id":null\}
  There’s a setting on Json RPC to disable streaming
  Erigon will check the code as well
  No specific updates
  Working on a shadow fork with Carlos
  Not sure if it’s going to be ready before mainnet hard fork
  Withdrawing works just fine on Chiado
  Rechecking everything
  Fixed the “too many concurrent requests” issue

- **Erigon**:
  There was an issue for block syncs for older blocks which was fixed in 2.48.1
  Syncing from genesis works again
  Was probably introduced in 2.46 or 2.47
  Working with Marcos for Hive tests

- **Geth**:
  Nothing significant
  Talked to Philippe and Martin
  Calling the reward contract seems to work and return the correct result
  The root is still wrong
  Guillaume has several hypotheses
  The state might not be saved to the database after a system transaction
  Andrew from Erigon is getting Guillaume some traces for system transactions
  Gateway provided Guillaume with an Erigon archive node

## CL

- **Lighthouse**
  PR to add Chiado
  https://github.com/sigp/lighthouse/pull/4530

- **Nimbus**
  Added Chiado
  https://github.com/status-im/nimbus-eth2/pull/5208

- **Prsym**
  Seems to at least start in the latest stable version (v4.0.7)
  Doesn’t have the Gnosis presets, so works, but only after a good checkpoint sync and until the next sync committee
  More testing needed

# Hive Tests

https://hive-gno.nethermind.io/

# Shapella

All one-click staking solutions are ready
Dappnode
Avado
Stereum
Sedge
Deposit contract proxy upgraded on Monday
Transaction: https://gnosisscan.io/tx/0x38ba82a7fe6aa86d2275207582b3b35a72185ff60fe52ceca5b9f46394c87579
Implementation: https://gnosisscan.io/address/0x4feF25519256e24A1FC536F7677152dA742Fe3Ef#code
Tests
Old deposit: https://gnosisscan.io/tx/0x049476d9e4b42cbd933eb9188a2cd85692cd90950a64124e0dc06e8b03cc1c0e
New deposit: https://gnosisscan.io/tx/0x6966ff5a5fb85d0e2cd252d2e673722f24a498a84450223b1989b220fb44dc48
40% cheaper
Gnosis deposit UI updated shortly afterwards on Monday (and was tested)
But we coordinated badly around this and Gnosis Builders and Gateway weren’t ready / kept in the loop
Totally our fault
We broke a few projects
Dappnode deposit
Gateway launchpad
Ankr liquid staking
Stakewise
Gnosis Builders deposit UI
Party
Streamed online
Who wants to join?

# Block Building

Can we use Nethermind?
There seems to be some functionality, but not updated for Shapella?
Can definitely make it work
Can we use Erigon?
Will check

# Research

Gnosis as a L2 thought experiment
https://docs.google.com/document/d/1zZJswccklwEE3q_HZAQ7kDlKHHa2zzg4Fcw5Rbgf0n4/edit
Polygon and Celo started talks about this

# Chain Infra

- **Gateway**
  Was the deposit UI updated?
  Apparently yes, tests pending
  The issue with Nethermind was fixed
  Decided to sync some Erigon nodes for non-archival mainnet to have some diversity

- **Potential issues for the next hard fork**
  Short block times could be an issue because of bigger blocks and thus higher latency to get a block across the network
  Dapplion is questioning whether we actually even need blobs
  Philippe thinks we should have them to be compatible with mainnet, even if we have to have less than mainnet
  Martin also expected there to be demand
  The zkEVM L2 for Gnosis Pay would be an example
  There’s also some other partnerships with Spark / Fuel building on this
  This might actually become a huge selling point for Gnosis as we (and Lukso now) are the only other chains with a beacon chain and thus 4844 compatibility
  Changing the intervals for block building, attestation and aggregation would require consensus from all client devs
