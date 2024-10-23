---
title: Gnosis Core Devs Call Notes

---

---
title: Core Devs Call - 10/23/2024
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/Vc2UvbyrRhg)

Oct 23, 2024

# Infrastructure
## Gateway
* No issues the past week
* Implemented rate limits for batch requests
* In the process of releasing CL endpoints
    * ETA this or next week


# Innovation
## Shutter
   * Nethermind
        * Engine room release
        * Working on refinements and improvements of the Shutter explorer
        * Testing the latest version on Chiado
            * The stability is looking very good
                * 24 failures out of 8k+
        * Planning for the mainnet release
        * Implementation started by Milen from Erigon
            * Frederik will set a call up

# Testing
## Hive
 * The execution API suite will get moved
 * Some suites rely on t8n
## Ethereum/tests
* Integrating t8n by Nethermind
# Client updates
## EL
### Nethermind
* 1.29.1 solves the block creation problem
    * Official release and pushed to Dappnodes etc
    * No missing slots anymore
* Worked on a new Shutter release for 1.29.1, which was released as 1.29.2
* Release 1.30 planned in 1-2 weeks
* Worked with Twinstake
* Should be able to focus more on 44s
* Implemented an endpoint that should allow Nethermind to be used as a block builder
### Erigon
* No particular updates
* Working on devnet 4 and devnet 5
* Will start working on joining Gnosis Devnet 1 as soon as it’s published
### Geth
* This the rebase to the latest 1.14 version (1.14.11)
    * Which should support live tracer
    * Should be ready for Gnosis Devnet 1
        * Missing blob fee collector change
* Snap sync works
* Block building works on mainnet (Gnosis is running 52 validators)
* Still in the process of doing a full sync, but will last at least 2-3 weeks
    * Still pre-merge currently, everything works until there at least

### Reth
* Working on importing the post-merge state from geth or any other client
    * Geth seems to have a command to export the state
        * Guillaume thinks that it might not work
* Waiting for t8ntool

## CL
#### Pectra
* Gnosis Devnet 0
    * Based on devnet 3
    * Should probably move to devnet 4 (for Gnosis Devnet 1)
        * Both Nethermind and Erigon agrees, especially because 3 is not compatible with 4 at all

# Research
* No updates



















































