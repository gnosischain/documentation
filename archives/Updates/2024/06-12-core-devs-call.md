---
title: Core Devs Call - 2024/06/12
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/Zc2XWbj-HRE)

June 12, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Released an RC with block processing improvements
  * Hired a new QA engineer
    * Talked with Lion about state testing GC (because Hive tests don’t cover that)
    * Could help to prepare those tests

* **Erigon**: 
    * Was able to run Erigon v3 on Gnosis up to T-50k blocks
    * Running fine, but there might be some issues with block downloading towards the end (might also be a networking issue though)

* **Geth**:
  * Guillaume is sick

* **Reth**: 
    * We want to bring reth to Gnosis (there’s also demand from CoW and other projects)
   * Reth is close to being considered stable
   * Reth is quite extensible, so it might be possible to implement support for Gnosis without having to maintain a fork
  * Will require a state snapshot from the merge, so we don’t have to implement AuRa, as this would be significantly more difficult
  * Reth doesn’t support snap sync yet

# Chain Infra

* **Gateway**
  * Updated Erigon to the latest version

# Testing
* Planning on forking https://github.com/ethereum/tests
     * Try to fork it with Nethermind as a generator without modifications
        * Should mostly be implemented by Nethermind but wasn’t battle tested
        * Maybe we should try generating tests for mainnet and compare them
    * Likely some tests will fail, and we can adapt them afterwards
* Is Erigon running POSDAO tests?
    * Geth for sure isn’t
* We shouldn’t necessarily assume that passing mainnet tests means that we also pass Gnosis tests, but it might not be reasonable to fork all tests either
  * We should adapt some tests at least
  * The question is where to draw the line

# Research

* EIP-7002 (EL withdrawals)
    * On Ethereum the fee is burned, but we don’t want that on Gnosis Chain
    * Either we keep the same contract and burn the xDAI, or we do a different contract with a different address (which might be worse UX)
  * Burning it shouldn’t be too bad, but it’s not only a “chain revenue” decision, it’s also the fact that the xDAI burned will never be recoverable, which doesn’t really make sense


# Innovation

* Shutter
    * All the signatures are now being verified
        * Keypers haven’t swapped over to blst yet, but they have test vectors that are working
  * Nethermind is feature complete
  * Debugging an issue where some transactions are not being included when there’s too many
  * Debugging high CPU usage
  * Code review is finished












































