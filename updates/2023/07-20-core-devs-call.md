---
title: Core Devs Call - 07/19/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![Event](https://github.com/gnosischain/documentation-1/assets/75987728/60687c52-b819-410b-b91d-50da771fc6d6)

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://www.youtube.com/watch?v=3WhPnFLQdyo). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

July 19, 2023

# Client Team Updates
## EL

* **Nethermind**: Issue with ethers@v6 fixed
Eth_call currently investigated
Released not Geth compatible version with ethers@v6 fix on the last week

* **Erigon**: No updates

* **Geth**: No updates


## CL

* **Lighthouse** No updates.

# Mainnet

Withdrawal contract fully audited by ChainSafe
Will be deployed after the call and than be proposed to the DAO (process takes ~9 days)
All clients up to date and released
Make sure that gnosisscan and blockscout follow the updates.

# Hive Tests

Dashboard up https://hive-gno.nethermind.io/
Erigon upcoming
Error with Gas was fixed

# Chiado

Deposit contract deployed and verified (same as mainnet)
Need to call claim function to be sure there are no issue with new contract. Possibly run other withdrawals checks.

# Shadowfork

Modify proxy owner in genesis.json to avoid reply
Make sure we are avoid any other replay attack
Nethermind team will take care of shadowfork setup

# Sedge

Will be ready for the end of the week
Wait for nethermind release


# Chain Infra

Gateway: Helping Nethermind team
Provided Erigon node to Guillaume













