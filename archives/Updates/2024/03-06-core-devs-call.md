---
title: Core Devs Call - 2024/03/06
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/lsQV_cHmHX4)

March 06, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Nothing in particular
  * Released an experimental version with snap server enabled
    * We can slowly start deploying nodes that are can serve snap sync
    * Enabling the snap server requires a full resync
    * Working on 3 solutions for the state db
      * Path based
      * Half path
      * Paprika
    * Release schedule not defined yet, and will depend on development progress, because paprika will require a new hard fork again after half-path
    * Considered for the next release, but after Dencun for sure
    * Might be a locked behind a flag rather than being a default to start with
    * When snap sync becomes faster than fast sync this feature will be enabled by default

* **Erigon**: 
  * Nothing in particular
    * Looking into why the database is bloating up still


* **Geth**:
  * Found the issue after London and started syncing again
  *  Was missing a location for the free transactions in London
     * At 300k blocks past the last issue (which was on block 11 after London)
  * Next issue will likely be the merge, and after the merge everything has already been tested to work
  * Will then have to rebase for the latest Dencun changes

# Chain Infra

* **Gateway**
  * The RPC nodes with Lighthouse for both Erigon and Nethermind
    * Will likely deliver validators with Erigon this week


# Hive Tests

* No updates

# Innovation

* Shutter
    * Made some progress on p2p connections
    * Working on integrating the different parts together
    * Will then setup a test validator
    * The first test validator might be ready in 1-2 weeks


# Mainnet

* Issue with blob gas being burned instead of added to the fee collector
  * Going to be postponed

# Shadow Fork

* Nodes still aren’t done syncing
  * They’re very close to tip but don’t catch up
  * Only Erigon nodes





































