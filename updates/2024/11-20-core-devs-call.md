---
title: Core Devs Call - 11/20/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/Vc2UvbyrRhg)

Nov 20, 2024

# Infrastructure
## Gateway
* Worked on a public RPC for the consensus layer
* Previous version of container deployed by mistake
* Resulted in max 100 batch requests instead of 500
    * Should not happen again
# Innovation
## Shutter
   * Most of the team was at DevCon
   * Working on stability improvements between validators and keepers
   * Looking into discoverability algorithms

# Testing
## Hive
 * Adapted consensus spec tests to Gnosis
## Ethereum/tests
* Discovered the issue on t8ntool but isn’t fixed yet
* Dan and Spencer from the EF joined
    * Want to use EELS/EEST for Gnosis
    * https://notes.ethereum.org/@danceratopz/eest-gnosis
    * This would replace ethereum/tests
    * We would only focus on post-merge tests, as AuRa is too different

# Client updates
## EL
### Nethermind
* Working on the next release (delayed because of DevCon)
     * Found critical issues
* Discussing internally about how to do Shutter testing

### Erigon
* No particular updates
* Shutter implementation is going to take 1-2 months

### Geth
* Finished sync up to merge
* 7m blocks to go
* Working on a dump for Debjit on the merge block

### Reth
* Raised some PRs, waiting for review

## CL
#### Pectra
# Research
* Feedback about Martin’s native rollups
    * Marek thinks that it’s very interesting and would be interested in joining this working group
    * Lukasz has reservations about this idea
        * Mostly social, not technical
        * Ethereum core devs have limited throughput, so decentralizing it through L2s would allow for a faster timeline




















































