---
title: Core Devs Call - 2024/01/17
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/P6ntfPuam-E)

January 17, 2024

# Client Team Updates
## EL

* **Nethermind**: 
  * Released a bug fix version that is also Chiado ready ([v1.25.1](https://github.com/NethermindEth/nethermind/releases/tag/1.25.1))
    * There might still be another release before Chiado

* **Erigon**: 
  * Philippe still hasn’t tested the pruning image
  * Will do a new release this week for Chiado

* **Geth**:
  * Not present

# Shadow Fork

* Deployed a new proxy to the deposit contract implementation
  * 0x4A9Eaee643070823afC7477bC0910585E5855e19
* Carlos already started some nodes, so we’re moving into the shadow fork slowly but surely
  * Potentially ready this week, but will require a custom Erigon image
  * Would be nice to fix `erigon init` command so that we don’t require custom images constantly for devnets / shadow forks etc
    * There’s another linked issue to this so not straightforward to solve


# Chain Infra

* **Gateway**
  * No specific news

# Dencun

* Chiado
  * Everything should be ready
  * No concerns at this point


# Hive Test

* Fixed the actions that were failing, which were due to misconfiguration in the clients
* Erigon is still missing 3 tests that should not be failing
* Building a tool to push hive test logs to Telegram every day

# Devnet

* Issues with Nimbus
  * Wasn’t including the KZG ceremony for Gnosis
    * Fixed in 7443a4ac086000b1d2a7d5af6685cc5ef9537b9d
  * Still forks off
* Issues with Erigon
  * Creates empty blocks (or at least with less transactions)
    * There might be a bug in the transaction pool
    * Some recent commits fix different issues related to overflowing in relation to warning logs from the failing nodes
    * Pending PR for a mdbx race condition
    * Somnath will update the image for devnet 3
    * Somnath will also work on another suspected issue
 * Issues with Caplin (experimental) are expected
 * Erigon also has occasional issues with block production on Ethereum mainnet
   * Their transaction pool likely needs some love
* Carlos will check if clearing the txpool and restarting the node solves the issue for some time
* Goerli’s devnet is probably mostly Geth + Nethermind so maybe the block production bug for Erigon hasn’t been caught there
* Somnath will release a new version later today when the PRs are approved
* Some issue with Erigon + Lighthouse
  * Lighthouse lost its peers, restarted the node and now it works again

# Innovation

* Shutter 
  * Still no Docker image for testing
    * Promised one for end of this week
    * Probably busy with their DAO launch
    * Required to work on the networking layer, so it’s blocking the Nethermind implementation significantly
    * The block building and cryptography parts can be worked on currently at least
      * Lot of things to implement for cryptography and the Nethermind team is discussing with Shutter to change some cryptography protocols (BLS12-381 vs  BN254)

 


































