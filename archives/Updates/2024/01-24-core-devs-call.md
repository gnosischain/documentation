---
title: Core Devs Call - 2024/01/24
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://www.youtube.com/watch?v=Ls-SmBC2cjc)

January 24, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * No updates

* **Erigon**: 
  * New release out today(with some fixes)

* **Geth**:
  * Blocked at block 1301
  * Validator transition at block 1300 issue as transition contract activation takes place on 1301 height
  * Merkle roots is not correct, but reward execution probably correct, figuring out that
  * Dencun brings a lot of changes to Geth, so Guillaume prioritize to not use very hacky way so that he don't have to start over after the deancun


# Shadow Fork

* Tested creating shadow fork  and had some issue with genesis
  * Were not able to create it properly, Lion will help

# Chain Infra

* **Gateway**
  * No specific news

# Dencun

* Dashboards and metrics for Chiado
  * Nethermind have available dashboard for Chiado
  * Gnosis chain devops dashboard

# Hive Test

* No updates

# Devnet

* Some issues with Erigon
  * Low transactions count issue related to Erigon specifics, but those limit was increased with Somnath help
  * Was undetected bug earlier in a tx pool, PR with fix pushed
  * Have missing slots with erigon+lighthouse and erigon+nimbus
* Nimbus works with Nethermind without any issues
* High memory usage on CL clients
* Erigon new version should be available later today


# Innovation

* Shutter
  * Docker image was published
    * Ruben had a look and communicate with shutter


 


































