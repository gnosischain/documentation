---
title: Core Devs Call - 2024/04/18
authors: [dapplion, armaganercan, filoozom]
tags: [CoreDevsCall, Gnosis Chain]
---

# Gnosis Core Devs Call Notes

Welcome to the Gnosis Core Devs weekly gathering. Every Wednesday, key members from the Gnosis team, contributors, and various team representatives convene to discuss, collaborate, and update one another on the Gnosis ecosystem's progression.

Participants represent teams:

Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team.

With a diverse set of voices present, our discussions are rich, multifaceted, and aim to foster innovation within the community.

Missed the meeting? Catch the [full recording on Gnosis Chain YouTube channel.](https://youtu.be/JZ8fvYYAVYc)

April 18, 2024

## Innovation

* Account abstraction
  * https://eips.ethereum.org/EIPS/eip-3074
  * https://eips.ethereum.org/EIPS/eip-5003
    * https://github.com/ethereum/pm/issues/1016#issuecomment-2056927690
  * 5003 would allow to fully transition from EOA to contract based accounts
    * If it’s not done in the next hard fork, the wait for the next one would be quite long and capabilities would not be “complete” for 3074
  * Would be interesting to hear about security considerations for 5003
  * Would be great to have 5003 in addition to 3074 to have the full account abstraction picture
  * Issues
    * Signing messages would still be possible
      * For permit transactions for example
        * Could be fixed by changing the `ecrecover` precompile for example, but then that would create a dependency on the state, which is a first for precompiles
    * Would break composability
      * The key would work on some chains as an EOA but wouldn’t work at all on others
    * This should be discussed in ACD calls
  * Bound historical data
    * https://eips.ethereum.org/EIPS/eip-4444
    * First step being considered by EF
       * https://github.com/ethereum/EIPs/pull/8266
       * Basically drop all blocks before the merge
    * Data
      * Portal
        * Dedicated team at the EF
        * It’s a parallel network of DHTs
        * You have to custody data based on your node ID
          * Issues
            * Can be spammed because you can mine IDs
            * Network needs sufficient replication in order not to lose data, which introduces more bandwidth and storage requirements
        * Not really proven to work yet
      * Bittorrent
        * Currently employed by Erigon (but not for EIP-4444)
          * They don’t have a state snapshot yet, meaning that you couldn’t sync without doing the whole current process
          * Will be possible with Erigon v3
            * Would only need to store historical data for RPCs or if you need to serve historical data
          * Each node creates checkpoints and seed that data
            * Hashes are added to clients to be able to find them
        * Should be sufficient, because the data can be verified anyways, and is unlikely to disappear because it’s easy to seed and back up
        * ERA1 format
          * https://github.com/ethereum/go-ethereum/pull/26621
          * Potentially not compatible with AuRa
          * Only compatible with pre-merge blocks yet
      * IPFS
      * Swarm
      * Something else in the meantime?
  * Issues
    * Would create two different types of nodes, one of which would be parasitic
      * If everyone stops serving historical data, older nodes would no longer be able to sync
      * https://eips.ethereum.org/EIPS/eip-7542
       * Potential solution
    * Can every CL sync deposits?
      * Lodestar not yet but every team supports this so they’ll implement it soon too
    * Syncing from a state rather than history is not possible on Erigon v2 and will require v3, which is yet to be released
      * Even in v3, historical data would be done in their proprietary format for now, and the client would require changes to support ERA1
  * Questions
   * What’s good enough for Gnosis Chain?
     * In terms of decentralization
  * Why do we care about historical data?
    * Tax reasons, archiving reasons, …
  * Requirements
    * Data doesn’t get lost
    * Newcomers are able to access that data eventually (not necessarily quickly)










































