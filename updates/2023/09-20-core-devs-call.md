---
title: Core Devs Call - 2023/09/20
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

Welcome to the weekly Gnosis Core Devs Call, where members of the Gnosis team and contributors gather to discuss the latest developments and updates related to the Gnosis ecosystem. This meeting is held every Wednesday and serves as a platform for participants to collaborate and exchange ideas.

The participants of this call include representatives from various teams such as Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team, and community contributors. The presence of diverse team members ensures that discussions are comprehensive and informative, with insights from multiple perspectives.

For those who missed the live meeting, [a full recording is available on YouTube](https://youtu.be/JauVI0_6xNM). 

The Gnosis Core Devs Call is a crucial component of the Gnosis ecosystem. It provides an opportunity for participants to stay informed, share ideas and collaborate, thus driving innovation and progress within the Gnosis community.

September 20, 2023

# Client Team Updates
## EL

* **Nethermind**: 
Did some work for the optional fast sync protocol (to fix the eth/66 requirement and enable eth/68)
This would be a temporary workaround
Might be able to deliver the new layout + snap server before dencun
Made contact with Shutter
New release planned for next week
Will include the RPC fix (Gnosis and Gateway are using custom images right now)

* **Erigon**: 
Root node dump for Guillaume?
Somnath is on it and syncing Gnosis mainnet
Mostly done with Dencun, probably some small things left
Somnath has been working on improving the transaction pool for blob transactions

* **Geth**:
Tanishq is going to generate traces from the execution of the reward contract to compare them (Nethermind vs Geth)
Can’t sync anymore for some reason and is getting a lot of timeouts
Waiting for Somnath’s dumps

# Chain Infra

* **Gateway**
No one present

# Dencun

* Devnets
  * We’re going to launch a Gnosis Dencun devnet at the same time as devnet 9
    * So we can get the most features included
    * Probably next week or within 10 days
    * Still some issues, but worse case we can launch a bit later
* Empty system address
  * Marek thinks that it’s empty
  * Andrew proposes to remove the system address on the first dencun block if it is empty
    * To be more in line with Ethereum
    * Marek needs to think about this
    * The downside is that it makes the logic more complicated
* System address -> no system address
   * Different AuRa systems that have different properties and the code still needs to be maintained
  * We still have to support it for archive Gnosis
  * Tricky solution: send a few wei to the system account


# Hive Tests

No updates
Andrew would like to talk about upstreaming to the Ethereum repo
We should talk about this when Marcos is back


# Research

* Max churn limit
  * We can set the max value right now, which solves most of the issues
* Big block experiment
  * Clickhouse is now working and we have the data
  * Adapted a Jupyter notebook to handle the data
  * https://colab.research.google.com/drive/1XAnZm4fSboSh8WFb4VujNMwqon7fdwqG?authuser=1
* System transaction differences

















