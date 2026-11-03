---
title: Core Devs Call - 2023/10/25
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

Gnosis Core Devs Call Notes

![core devs call october 25](https://github.com/gnosischain/documentation-1/assets/75987728/2c9a5982-9b48-44b6-b24a-58ff67c2c33e)

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? [Catch the full recording on YouTube](https://youtu.be/gcpeO4PxILw).

October 25, 2023

# Client Team Updates
## EL

* **Nethermind**: 
  * New release with the incident fix and removal of deprecated xdai configs after this call
  * Now has more time to work on Shutter

* **Erigon**: 
  * Maybe the pruning is suboptimal because the node storage size is fairly big
  * Low priority because they’re focused on Erigon 3 which will change storage significantly anyways

* **Geth**:
  * Kept digging into why the new branch isn’t connecting
  * Only works with eth/66 clients but gets rejected by the other side
  * Asked Tanishq and Somnath to sync nodes to get logs / information


# Mainnet

* Mainnet missed epochs: what happened?
  * Nethermind proved that it was possible to build bad blocks with integration tests
    * https://github.com/NethermindEth/nethermind/pull/6212
    * 100% sure that they fixed an edge case
    * Those blocks were built on incorrect state roots
    * There’s a high probability that this was the edge case that happened on mainnet
    * A release for this bug fix is coming very soon
      * This will also include the `--config xdai(_archive)` removal
    * This bad block situation requires some conditions
      * Specific transactions
      * Specific combination of fork choice request
      * Specific order of events
      * A different transaction pool, restarted Nethermind nodes or Erigon produced blocks could all be reasons to break out of this issue
   * Nethermind is going to go through logs a bit more to confirm
 * Lion: Thank you to the Nethermind team for the debugging efforts even throughout the weekend
   * Wants to write a postmortem because it was quite significant of an issue
   * What can we do to improve this type of situation?
     * Monitoring. We’ve already set up
     * Forkly
     * Loki logs in Grafana
     * Grafana metrics for all client combinations
     * Big block experiment and associated dashboards (in ClickHouse)
   * Access to partners / logs
   * We could also add additional non-pruning nodes (not necessarily archive)
     * We already run archive nodes on dev machines where we can SSH and run arbitrary code
   * Add alerts to post on Telegram
     * In case we see bad blocks
     * If we’re not finalizing
   * In this event we learned it too late (from Butta from Beaconcha.in rather than our own alerts)
   * Nethermind could implement a bad block metric
* This issue really highlight the need of client diversity
  * Could moving a large portion of the network to Erigon cause more issues?

# Chain Infra

* **Gateway**
  * Looked at metrics and noticed the issue as well because the RPC had issues
  * Will soon be able to quickly provision rollups on Chiado

# Hive Tests

* No updates

# Devnet

* New devnet (devnet-1) was expected to be spun up today, but this is going to be postponed, most likely to tomorrow
  * Does this work with the mainnet KZG?
    * Nethermind updated it as well, so it should
  * Somnath is going to work on the configs for Erigon

# Research
 
* Automatic sync tests
  * Lion will check






















