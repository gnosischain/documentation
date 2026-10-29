---
title: Core Devs Call - 01/22/2025
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members of the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With diverse voices present, our discussions are rich and multifaceted and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/tXM55fJG_4k)

Jan 22, 2025

# Infrastructure
## Gateway
* Gateway
   * No specific updates
   * Finished fixing the 502 error
      * Now returning proper errors, like 404 for example
   * Also fixed services rebooting

# Innovation
## Shutter
* Focused on improving libp2p stability

# Testing
## Hive
 * Synced the Gnosis fork with upstream and fixed all merge conflicts

## Ethereum/tests
* Started working on generating ethereum-spec-tests
* Tweaking the code to be able to run it on Gnosis Chain


# Client updates
## EL
### Nethermind
* Nothing specific

### Erigon
* Released beta 1 of Erigon v3
* Mostly stability differences from the latest alpha

### Geth
* Nothing specific
* Waiting for the new upstream release
  * 1.15.0 and not 1.14.13, so bigger than expected
  * Big update before Pectra
* The issue one person had might be linked to a dying drive
* ETA for Pectra readiness?
  * Shooting for Monday
  * Also needs some changes specific to Gnosis Chain


### Reth
* Restarted a sync from post-merge on the VM instead of uploading it from the laptop
* Debugging an issue specific to blobs
  * Getting some state root mismatches
* Incoming requests on the VM

## CL

## Pectra
* Mainnet shadow fork maybe by end of this month
* Then a hard fork every 2 weeks
* Mainnet could happen as early as the beginning of March


























































