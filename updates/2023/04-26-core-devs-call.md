---
title: Core Devs Call - 26/04/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes


![](https://i.imgur.com/Xz5wUTd.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

[Watch full record on YouTube](https://youtu.be/bbMrJN6ry9U)

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

April 26, 2023

# Client Team Updates
## EL
* **Nethermind**: Got close to releasing the first hive tests. Maybe later today or tomorrow. Preparing a new major release. Found some issues, mostly optimizations and bug fixes. Probably going to be released next week. Will send the release notes once they have them
 
* **Erigon**: New release (2.43) Replaced the light consensus client with a more experimental full consensus version. As it’s a full blown CL implementation, it should also be able to work for Gnosis in the future`--externalcl` is now default (and the flag was removed).Use `--internalcl` now to use the new experimental CL. Looking to hire a new core developer. Gnosis HR has been helping. New diagnostic tool https://github.com/ledgerwatch/diagnostics. Idea is to also use it as a recruitment tool

* **Geth**: Still has a sync problem. Nethermind hangs up without telling why. Spent some time with Nethermind to fix this. Related to a wrong chain ID. Resulted in the need to resync everything

## CL
* **Prysm**: No updates.
* **Nimbus**: No updates.

# Chain Infra
**Gateway** : No peers found on Devnet (probably just the different genesis).

# Devnet

No major updates. Withdrawals look good. Activated ~80% of the keys and withdrawals work. Failure scenario works as well.Exiting worked a few times as well.


# Research

**Shutterized Beacon Chain** The EL specs seem to be clear enough. Nethermind can start prototyping something until libp2p is made available.



# Tests
**Hive** Ran into issues regarding the config. Five basic withdrawal tests should be delivered today or tomorrow. The blocker is regarding the payload. The payload isn’t communicated correctly between CL and EL.








