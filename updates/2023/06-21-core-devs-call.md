---
title: Core Devs Call - 21/06/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Core Devs Call Cover June 21](https://github.com/gnosischain/documentation-1/assets/75987728/30cd658c-1b4f-46be-8462-22f6bbdaf392)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/8xKqDJq_l-8)

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

June 21, 2023

# Client Team Updates

## EL

- **Nethermind**: Preparing new release Testing withdrawal related things on Gnosis / Devnets. Comparing pre- and post-shanghai. Working on Hive tests.They will take a look at the new contract.

- **Erigon**: No updates.
- **Geth**: Guillaume not available and is having troubles calling the block reward contract, will contact Andrey

## CL

- **Prysm**: No updates.
- **Nimbus**: No updates.

# Chain Infra

**Gateway** : Issues with Erigon archival nodes caused by snapshots.Erigon team knows, there’s an issue on GitHub. There is a workaround.

# To-do

Shadowfork?
There are two observations for Chiado. The state seems to be increasing way faster than before. It might just be related to the withdrawals in blocks, as previously Chiado blocks were mostly empty. Block processing is ~20ms slower. Might also just be linked to withdrawals in blocks. The gas usage is around the same, but system transactions don’t count towards that limit. Might be worth checking this on mainnet with a shadowfork
**Chiado upgrade**
Add debug logs to system level transactions to see how much gas they consume. It should be the same for mainnet and chiado
Deposit UI: Staking providers, Rocket pool, Stakewise, Etc

# Chiado

Storage layout issue?
https://github.com/gnosischain/deposit-contract/pull/46
Attach storage layout maps comparison to the PR for clarity

# Mainnet

Date
Conditions
Slot mod 8192
Weekday

Time between 11 and 19 UTC
Slots

- Slot 10067968 ts 1689333180 UTC Fri 14/07/2023, 11:13:00
- Slot 10125312 ts 1689619900 UTC Mon 17/07/2023, 18:51:40
- Slot 10141696 ts 1689701820 UTC Tue 18/07/2023, 17:37:00
- Slot 10158080 ts 1689783740 UTC Wed 19/07/2023, 16:22:20
- Slot 10174464 ts 1689865660 UTC Thu 20/07/2023, 15:07:40
- Slot 10190848 ts 1689947580 UTC Fri 21/07/2023, 13:53:00
- Slot 10297344 ts 1690480060 UTC Thu 27/07/2023, 17:47:40
- Slot 10313728 ts 1690561980 UTC Fri 28/07/2023, 16:33:00
- Slot 10362880 ts 1690807740 UTC Mon 31/07/2023, 12:49:00
- Slot 10379264 ts 1690889660 UTC Tue 01/08/2023, 11:34:20
- Slot 10485760 ts 1691422140 UTC Mon 07/08/2023, 15:29:00
- Slot 10502144 ts 1691504060 UTC Tue 08/08/2023, 14:14:20q
- Slot 10518528 ts 1691585980 UTC Wed 09/08/2023, 12:59:40
- Slot 10534912 ts 1691667900 UTC Thu 10/08/2023, 11:45:00
- Slot 10608640 ts 1692036540 UTC Mon 14/08/2023, 18:09:00
- Slot 10625024 ts 1692118460 UTC Tue 15/08/2023, 16:54:20
- Slot 10641408 ts 1692200380 UTC Wed 16/08/2023, 15:39:40
- Slot 10657792 ts 1692282300 UTC Thu 17/08/2023, 14:25:00
- Slot 10674176 ts 1692364220 UTC Fri 18/08/2023, 13:10:20

Agreed on Slot 10379264 ts 1690889660 UTC Tue 01/08/2023, 11:34:20

Most people from Nethermind will be available. Andrew from erigon team will be available. Somebody from Gateways will be available most likely. Giacomo won’t be available. Releases expected as soon as possible with expected date of ~ 2 weeks

Can Ruben independently check the slot and times so we don’t have the same issue as on Chiado? Test to check if timestamp valid were added on Nethermind

# Hive

[Coinbase issue](https://eips.ethereum.org/EIPS/eip-3651)
There are two checks for the account access cost. Hardcoded value that is failing on pre-shanghai
Will check with Mario. On post-shanghai we have warm coinbase due to EIP-3651. So it’s not a blocker for the hard fork at all

Issue with Erigon
Marcos is already checking with Andrew

# Devnet

Script ran and verified the transfer events for withdrawals
Process
Fetch withdrawals and transfer events
https://github.com/filoozom/gnosis-withdrawals-scripts/blob/tests/fetch-withdrawals.js
https://github.com/filoozom/gnosis-withdrawals-scripts/blob/tests/fetch-transfer-events.js
Compare the two
https://github.com/filoozom/gnosis-withdrawals-scripts/blob/tests/check.js
Might want to check all `gno.balanceOf(address)` values in between
How was the contract upgraded regarding the storage layout?
