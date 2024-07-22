---
title: Gnosis Core Devs Call Notes

---

---
title: Core Devs Call - 2024/07/17
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/XSQegfYa5tQ)

July 17, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Focused on Shutter and Pectra
  
* **Erigon**: 
    * Agreed to add Shutter support to Erigon v3

* **Geth**:
  * The difficulty code had to be rewritten, but doesn’t completely work yet
  * Can still connect to Nethermind nodes and sync blocks (using snap sync)


* **Reth**: 
  * Stuck on testing post-merge on a devnet
  * Customizability for consensus / custom properties in blocks is still fairly lacking in Reth
      * Cannot add the step and signature fields
      * For genesis this is only an issue on devnets with TTD = 0
  * Upgrading from 1.0.0 to 1.0.1 produced a huge diff on our side, highlighting some potential long-term maintainability issues
  * Not quite clear to Lion what needs to be implemented (we just need verification, not capability to produce blocks etc)


# Chain Infra

* **Gateway**
  * No updates

# Innovation

* Shutter
    * Launched last week
    * ~5% of validators producing blocks (one every ~3 minutes)
    * There’s a lot of latency until the validator sees the key, which can result in missed blocks
        * If the key is too late, a normal block is produced instead
    * Want to onboard more validators and work on client diversity too
    * How to do block builders for Shutter?
        * Currently keys are public anyways so it’s fine, but there were talks about encrypting them for specific validators


# Testing

* Hive
    * Up to date with upstream
    * Improved the repo to make it easier to add new tests and new clients
* Ethereum/tests
    * No updates


# Research

* Gas markets
    * 3 open fronts
        * Research: deciding on the primary sell mechanism
            * Potentially the most difficult part
                * Sell vs strike price, difficult to calculate on-chain 
        * “Gas Markets” group on Telegram
     * Prove that it’s safe, as we’re messing with EIP-1559
        * Instead of mining, we’ll refund the costs to the users
        * Miners could buy the futures, and then miners get reimbursed, which may break things (and negate the base fee burning introduced by EIP-1559)
  * Execution: how to consume this
    * Buy the option
    * Send specific transactions in a way that will get you a refund
        * Currently doesn’t use pay masters
        * We need to work on good dev experience for this














































