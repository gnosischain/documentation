---
title: Gnosis Core Devs Call Notes

---

---
title: Core Devs Call - 2024/07/24
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://www.youtube.com/watch?v=z01gVu0v4Ro)

July 24, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Released hotfix version v1.27.1
    * Hot fix for post Aura
    * Enabled pre-warming blocks on Aura and OP chains
    * Could also run v1.26 or lower fine

  
* **Erigon**: 
  * Released the first alpha version for Erigon 3!
  * All in one EVM node
  * Sync archive node in a matter of hours not days
  * Also the granularity of state history is reduced from the block level to the transaction level
  * Highly recommend that people start playing with it and experimenting


* **Geth**:
    * 2 issues
        * Block produced are invalid
        * block production is working simply it produces invalid blocks
        * triggered an issue and uncovered a bug in Nethermind
            * Still debugging
  * other problem this one is a bit more difficult to debug
    * Contract creation is fail in everytime
    * Possibility of tracing and system contracts


* **Reth**: 
  * [PR to Reth](https://github.com/dapplion/reth_gnosis)
    * They want to support it
    * current strategy is not to fork the client
    * build on it its extensibility importing
    * Genesis blocks on devnet worked

# Chain Infra

* **Gateway**
  * No updates

# Innovation

* Shutter
    -  Researching latency
	-  Building a dashboard to observe the status of the general system 
        * Investigating the performance and stability
        * Way to for users to inspect the transaction lifecycle of their individual transactions
        * Additional information about decryption keys/slot



# Testing

* Hive
    * Developed a technical plan for the hive tests
        * final improvements will be divided into five parts and we have already merged part one which includes all the latest upstream
        * working on the second part which will be include genesis refactoring to use the same approach as substream
        * adding new scripts and tools to speed up test development
  * Started working on the ethereum test to migration Gnosis
    * Working on progress

# Research

* Nethermind v1.26 issue
    * A bug in Nethermind led to invalid block production; a fix has been implemented.
    * Shutter version is also updated so shutter validators can go back to the v1.27.1 if needed














































