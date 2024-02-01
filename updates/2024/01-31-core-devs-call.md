---
title: Core Devs Call - 2024/01/31
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/LI_O73t9ynM)

January 31, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * No particular update
    * Planning a shadow fork for mainnet after the Chiado hard fork


* **Erigon**: 
  * No particular update

* **Geth**:
  * Still at block 1301, but starting to understand what’s going wrong 
  * EIP-158 is not active (accounts are being deleted when they shouldn’t, easy fix)
  * Some contracts being called with from or to = 0x0 (system calls?)
  * The transition is being detected and happening


# Chain Infra

* **Gateway**
  * No specific news

# Dencun

* Dashboards and metrics for Chiado
  * Nethermind have available dashboard for Chiado
  * Gnosis chain devops dashboard

# Chiado

* Keys
  * Nethermind is running 1.5k Nethermind + Teku / Lodestar / Lighthouse keys
  * Gnosis is running 1.5k Nethermind + Lighthouse keys
  * Gateway is running 2665 nodes
    * Nethermind and Lighthouse
* Useful links
  * https://forkmon.chiadochain.net/
  * https://forky.chiadochain.net/
  * https://ethstats.chiadochain.net/
  * https://beacon.chiadochain.net/validators
  * https://checkpoint.chiadochain.net/
  * https://gnosis-chiado.blockscout.com
  * http://170.187.154.203:8080/ (Forkmon)
  * http://170.187.154.203:8084/explore?schemaVersion=1&panes=%7B%22vcF%22:%7B%22datasource%22:%22loki_ds_1%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22%7Bcontainer_name%3D%5C%22execution%5C%22,%20instance%3D%5C%22chiado-nimbus-0%5C%22%7D%20%7C%3D%20%60%60%22,%22queryType%22:%22range%22,%22datasource%22:%7B%22type%22:%22loki%22,%22uid%22:%22loki_ds_1%22%7D,%22editorMode%22:%22builder%22%7D%5D,%22range%22:%7B%22from%22:%22now-5m%22,%22to%22:%22now%22%7D%7D%7D&orgId=1 (Grafana)

# Devnet

* Same issues as last week
  * Just Erigon + Nimbus issue

# Hive Tests

* Fixed withdrawal tests for Erigon

# Innovation

* Shutter
  * Working on the libp2p library because of some issues
  * Cryptography is largely working now, details to be figured out


# Shadow Fork

* Successfully ran a shadow fork for Chiado
* Fixed the beacon genesis tool
* Was able to go through the Dencun hard fork
  * Blobs work
* Tested with Nethermind and Erigon
* All seems well!



 


































