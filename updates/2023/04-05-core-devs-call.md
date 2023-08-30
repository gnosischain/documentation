---
title: Core Devs Call - 2023/04/05
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/117yrRw.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

[Watch full record on YouTube](https://youtu.be/auE36ggq98c)

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

April 5, 2023

# Client Team Updates

## EL

- **Nethermind**:

Merged withdrawals to the master branch

- **Erigon**:

No updates

- **Geth**:

Was still syncing on Monday (~1 month left to sync)

## CL

- **Prysm**:

No updates

# Chain Infra

- **Gateway**

Has been helping quite a few teams. Giveth to setup their bridge validator. Max helped Marcos with Hive tests. Took all the traffic from the main Gnosis RPC because Gnosis was experiencing issues. Everything went fine

- **Gnosis**

Had an outage on the public RPC. Redirected all the traffic to Gateway

# Devnet

- Gateway (on 4 nodes for 5k validators) that 3 validators are on the right chain and working correctly
  - 2 have Nethermind
  - 1 has Erigon: The last Erigon forked away on the block that it created by itself (#88092). A previous block by the same node has been accepted by the network. Except by the broken Erigon node. The failed block has a different state root and an additional withdrawal. This specific node rejected a block that was considered valid by all other nodes. We don’t exactly know why the broken node rejected the valid block. There was an unwind right before on the broken node. Logs for both Erigon nodes are in the Telegram group
- Nethermind (5-6 Nethermind nodes, out of which 2 had issues)
- Lodestar: Seemingly peering issue
  Ping-pongs between having enough peers and not having enough, so it wasn’t able to keep in sync
- Teku (although another one was working fine)
  Started sending FCUs of the same blocks over and over again around 1k blocks before it lost sync
  Might have been connected to Gateway’s broken Erigon node
- Gnosis
  Experiencing issues as well (running Erigon, Nethermind, Teku and Lighthouse, 2.5k keys total).Nodes are stuck on different block numbers. Currently debugging more in depth. None of the 4 validator combinations are working correctly and are on different forks. Giacomo and Igor will keep in touch to debug this.
- Next steps
  - Find the issue (Andrew)
  - Launch a new devnet
    Alerts (Lion)

The objective is to track everything that can go bad and send alerts to the relevant parties. Has a private repo with a bunch of alerts. Covered basically everything on the consensus side. Will add the relevant people on the repo async. Will be set up by Gnosis DevOps, Giacomo knows about it already. Ruben tested failed withdrawals on Apr 4, 2023

The current implementation executes withdrawals transactions after standard transactions. This means that the event logs are missed. We might want to drop them, as they are thus useless. To track specific parameters we could add more variables. Erigon behaves in the same way. Instead of using events to check if a withdrawal was successful, we could check the state of the contract to see if the transaction was added to the failed transactions. If not, it should be considered successful
This is not super accurate though and doesn’t give great visibility.

Lion thinks it might be possible to do it with the current withdrawal contract implementation, but if not we can add some primitives. There might be something with public variables on the contract:

`failedWithdrawalsPointer`
`numberOfFailedWithdrawals`

Lion want to know how exactly the devnet was bootstrapped. ruben@nethermind.io will send this offline

# Tests

- Hive

Had a call last Thursday regarding what our objectives were defined a overview of what things should look like.
Hopefully more information next week.

# Withdrawal Contrat

No updates
