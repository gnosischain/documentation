---
title: Core Devs Call - 12/04/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/bSPHlTz.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

[Watch full record on YouTube](https://www.youtube.com/watch?v=1Yy6TCa23X8)

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

April 12, 2023

# Client Team Updates
## EL
* **Nethermind**: No updates. Steadily progressing with Hive tests
* **Erigon**: No specific updates, waiting for Shanghai to happen. Marcos was asking for an Erigon config for Gnosis. Erigon doesn’t support single file configs for AuRa chains.  It will require some code change. Is this required for Hive tests? Not absolutely necessary, but would be useful so that it’s generic for every client Andrew will take a look at it this week.
* **Geth**: No update


## CL
* **Prysm**: No update
* **Nimbus**
Started working on a [DAppNode package](https://github.com/gnosischain/DAppNodePackage-nimbus-gnosis)



# Chain Infra
* **Gateway** 

Bridge validators up and running and there are successful transactions for both (native and AMD) Helped Giveth team to setup their bridge validators by sharing steps via notion. Looked into the shapella issue on devnet
* Plausible scenario: Lighthouse lost all peers just before it was its time to propose the block, so it began a new chain, then it couldn’t re-connect to reorg so it only proposed blocks when it was its time

Doesn’t seem to be the issue with Erigon or Nethermind
Unlikely to repeat in real life because we won’t have that little actual nodes and that many validators. 
But we need to be careful with Chiado, because the setup is similar

Waiting for the next steps for the next devnet.



* **Gnosis**

Setting up network metrics and alerts Grafana and Prometheus running. Doing some tests. We will follow up with new updates next week. Also have Telegram notifications working. We will invite appropriate teams in due time.

# Devnet

We have consensus on the current broken devnet. We’re going to spin a new one up. Mainnet hardfork is happening today, so it might be a blocker. To be confirmed by Carlos


# Tests
* Hive

How to open up the network to outside validators?
GNO faucet? New testnet for validators to keep Chiado stable for other testing?







