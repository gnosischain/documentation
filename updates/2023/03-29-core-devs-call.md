---
title: Core Devs Call - 22/03/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/JhORmO7.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

[Watch full record on YouTube](https://youtu.be/mKJolP4AtKY)

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

Mar 29, 2023

# Client Team Updates
## EL
* **Nethermind**: 

Introducing Marcos for Hive tests. Will have a call tomorrow regarding those tests. 

After Shapella, Nethermind will probably release a very big version with a lot of changes. Huge amounts of optimizations is coming.. Potential new light mode that would reduce memory consumption *a lot*

Improving attestation performance
Better multi-threading
Potentially (but way later) snap sync

* **Erigon**: 

Canceled their agreement with Gateway for developers, thus Max is no longer an Erigon dev. They want to hire new devs, but will take time. Added the max failed withdrawal parameters to the withdrawals system call, which should now work

* **Geth**: 

Guillaume has worked around the issue from last week, and is now importing the data to start syncing the chain. It has been running for two days, and there’s probably one more day to go, after which he’ll be able to give an update.


## CL
* **Prysm**: 

No updates. Guillaume is focused on Geth
* **Nimbus**: 

We’ve written and reviewed our docs to be published soon
After this, we’ll publish client diversity docs, so that validators can start using Nimbus.


# Chain Infra
* **Gateway** 

A mainnet bridge validator is now running and has already processed a few transactions.Extra monitoring was added there.


# Devnet

Withdrawals are working again. Tried partial withdrawals, not full exit yet. Gnosis mostly deployed Nethermind nodes. No one seems to know if Erigon nodes still sync. Andrew’s Erigon nodes still work

There’s close to 100% attestation participation.Ruben can do a full exit on 1024 nodes to drain the GNO in the deposit contract.

There’s a faucet for GNO afterwards.Ruben expects Gnosis to be testing this a bit more

Lion will run Truffle scripts

# Tests
* Hive

There’s a call tomorrow, invite in Telegram
Happening at 3pm CET


# Withdrawal Contrat

Adam’s audit is done, and another external audit should be done by early next week. The minimum amount to deposit is 1/32 GNO, which could be an attack vector. Looking into it. We might want to increase that minimum.






