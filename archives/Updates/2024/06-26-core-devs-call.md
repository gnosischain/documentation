---
title: Core Devs Call - 2024/06/26
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Watch the record [here](https://youtu.be/VXtp07L24ng)

June 26, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * No specific updates
  * Working on Pectra testnet
  * Helping Guillaume (tracing the genesis block and the likes)

* **Erigon**: 
    * Made a patch release (v2.60.2)
        * An issue in eth_estimateGas was introduced in the previous patch release and this was reverted

* **Geth**:
  * Tracing the genesis block / extract storage slots from genesis constructors
    * Not needed anymore, Guillaume figured out how to build the right block with constructors rather than code + storage
  * Managed to build the genesis block
  * Now testing if he can snap sync from a Nethermind node for Chiado

* **Reth**: 
  * Looking into pre-merge AuRa

# Chain Infra

* **Gateway**
  * The migration was successfully completed
  * Ingresses got new IPs, and rpc.gnosischain.com had IPs cached to the old datacenter, so had to be refreshed for the new datacenter

# Innovation

* Shutter
    * From Shutter
      * Launch on Jul 11, 2024
      * Deployed mainnet contracts yesterday
      * First keyper set has been set up
        * Further decentralization in progress (or at least more nodes in more zones)
      * Opt-in for validators, and we’re intentionally going to keep the number of enabled validators pretty low to be safe for the network
* On Nethermind
    * Fixed most known issues
    * Some issues with event decoding (could be linked to the validator or the contract)
      * After fixing this, should be ready for testing
      * If it’s in the contracts, some are easy to deploy, some would require a new keyper set deployment
      * Results in not being able to include Shutterized transactions
* Questions
  * Should we release only internally?
    * I.e. Gnosis and partners
      * Erigon, Gateway, Nethermind, Shutter
    * => Yes
    * Would still be available for everyone, but we’re not going to be very public about running it on socials
  * Is there any e2e testing to make sure Nethermind doesn’t break Shutter support for the next release, and to test other client implementations?
    * There’s nothing Shutter-specific right now
    * Can this be implemented in Hive?
    * Shutter should be able to allocate some resources towards testing after the launch
  * Survey for Gnosis validators
    * https://docs.google.com/forms/d/e/1FAIpQLSe_rKQdf1-uITqAEmV6giMuv51d3ml0BoYbfkNaZJ-vdl0RtQ/viewform

# Testing

* Hive
  * Figured out the problem with the Erigon Cancun suit
  * Potentially figured out the issue for withdrawals on Erigon and Nethermind
    * Will contact Marcos to merge those changes and update the dashboard
  * Those were both test issues and not client issues
* Ethereum/tests
  * No updates
  * Once geth syncs, we should be able to use Geth to generate ethereum/tests, but this already works on Nethermind too

# Research

* Block validity verification
  * Huge effort, both on EL and CL, DevOps, infra, …
  * Latency penalty may be more harmful, especially for GC
  * First client generates the witness and pass it to other clients to validate the block / witness
    * However, adding the witness adds latency (+ serializing)
    * Re-executing the block adds latency
  * Lukasz thinks that this effort might be somewhat wasted, because the witnesses will be included in the protocol with verkle trees, so there might not be a need to implement this now
    * It’s also completely incompatible with and would delay verkle
  * Guillaume also thinks that this is wasted time
  * Marek says that if there’s a slow client, it would slow the entire stack down
    * https://gist.github.com/karalabe/e106ac58afc1d611641e543312cf41e3?permalink_comment_id=4765606#gistcomment-4765606
  * Lighthouse is implementing something similar / there are two different ways of passing witnesses, at least this should be standardized
  * If there are very large proofs (because some blocks are created in a malicious way), in the worst case it could add too much latency to be functional, especially on GC
  * Pectra is already huge, and spending time on this might not be great
  * It’s a whole different issue for GC because Nethermind is supposedly dominating
    * On mainnet Geth should be under 60% at this point (based on a self-reported survey), and potentially going in the right direction
    * Maybe Reth’s launch will change this a bit more













































