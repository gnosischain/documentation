# Gnosis Core Devs Call Notes

![](https://i.imgur.com/hPdq9m8.png)

Hello everyone from the weekly Gnosis Core Devs Call. This meeting is repeated on Wednesday every week. Watch on Gnosis Chain YouTube channel. ‍

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

In the focus of this meeting, opinions on the implementation of withdrawals contract were evaluated. difficulties and solutions to current problems were discussed. also shared EL and CL team updates.


Topics 

* Withdrawals Contract
* “Native” GNO and mGNO
* Core Dev Team updates
* Client Team Update
* Chain Infrastructure Updates

Feb 15, 2023

* Withdrawals contract
  * https://www.notion.so/Shanghai-Capella-Withdrawals-13fa64960f304abbac23b73187436058
  * Create a PR with a semi-final implementation
    * API described in the spec
    * https://github.com/gnosischain/deposit-contract/pull/25
  * Insolvency Case
    * https://github.com/gnosischain/deposit-contract/pull/25#discussion_r1107069076
   * How many failed withdrawals should the system call process?
     * Should it be hardcoded or a chain parameter?
     * Withdrawals are passed as calldata to the contract
     * Only way to fail is if there’s not enough GNO in the contract -> withdrawal stored as failed
     * On every block, failed withdrawals are processed again, in case there’s now enough GNO
     * The question is: how many of those failed withdrawals can we process per block to keep appropriate block times
     * Martin: this situation should never happen ideally
       * Lion: The withdrawal could also fail for other reasons because we’re calling other contracts (?)
       * Goes back to the discussion of whether there should be minting capabilities or not
         * Not realistic to implement this in a timely fashion
     * Daniel: would having two balances (xDAI + GNO) in execution layer (or CL)be an option?
       * Probably too much work / maintenance to be worth it
     * Guillaume: can we get rid of xDAI as native token? 
       * Replace it with GNO, and then we basically move to the standard Ethereum way
       * Martin: Probably not viable
       * Is this good for the chain?
         * Would force users to convert their $ into GNO
       * Would it even be feasible?
         * xDAI (or wrapper xDAI) is used in many contracts, where it might be assumed that the native currency is worth a dollar
       * Dan: Move xDai balances into ERC-20 registry?
     * Could we mint something on withdrawals that would allow users to get their original GNO back on Ethereum
  * Need to work with Comms team on instruction guides for community
    * 0x00 addresses can’t withdraw, so these addresses would need to be converted
      * [ ] Do we need to build tooling for this?
      * Prysm has something for this -                         * [Check Ethereum Withdrawals FAQ](https://notes.ethereum.org/@launchpad/withdrawals-faq ) 
    * 16 validators withdrawals can be processed per block
      * Dapplion: More withdrawals per block = higher load on processing. Could EL devs benchmark the cost of a withdrawal in gnosis?
      * Cost of withdrawal is more expensive in Gnosis because withdrawals are implemented in EL
      * Marek: best way is to start the devnet and observe block processing time with withdrawals
* “Native” GNO

   * Ihor: Could lead to bad economical effect
      * Martin: We’re removing the ability of the bridge to mint unlimited GNO on Gnosis’ side, which should only increase security
     * Would be putting the burn promise in code by only having 3m tokens on Gnosis side
   * Need to upgrade Bridge Contracts (?)
     * Omnibridge cannot mint addition GNO.gnosis, needs custom code to pull from 3mn minted
     * GNO.ethereum <> GNO.gnosis (from 3mn) thru 3rd party bridges
   * What’s the current plan of releasing GNO rewards on beacon chain?
     * Right now we can just increase the storage slot in the GNO smart contract on the execution layer side so the token doesn’t need to be upgraded for minting
       * Igor: That has to be done on the execution layer anyways
     * The way this works on Ethereum is just to increase the native balance (no contract interaction)
       * The idea is to call a contract that does it (Ihor’s withdrawal contract) instead of hacking it together
  * Dapplion
    * Thinks it’s a good idea
    * But would probably require a team that would dive into this to make sure everything work as it should and analyze how feasible this is
    * To be considered for inclusion in future hardfork
    * Basically we need expertise on this
  * Let’s do an assessment of whether this is doable or not and how much time it would take
* mGNO
  * Should it be “user-facing”?
  * Should we get rid of it?
* Client Team Updates
  * EL
    * Nethermind
      * Dan: https://www.notion.so/Issue-Transfer-beyond-Balance-Bug-for-Nethermind-2418ed72b2ac414c8541fca1d2d7827c 
      * Will be released in v1.18 🥳
      * Going to launch a testnet today or tomorrow
      * Updated the withdrawal code for the function name
      * Transaction pool issue will be released in 1.18 because it’s not critical
    * Erigon
      * Looking into Chiado connectivity issues
      * Nethermind might privilege Nethermind nodes, meaning that they might drop Erigon nodes that are “useless”
      * Nethermind doesn’t think that’s the case and will investigate this
        * `--Network.DiagTracerEnabled true` can be used for debugging
      * Progress on light CL
      * Stable as a read-only node
      * For validators: treat with caution
        * Misses more attestations than Nethermind and Geth on mainnet
        * Sometimes gets stuck, but not for long
        * From Lukasz, regarding useless peers
          * Invalid NetworkId
          * Capabilities not matched
          * TxFlooding (we are spammed with transaction broadcasts)
          * When someone tries to snap sync from us (as we don't implement snap-server)
          * There’s also another issue that Lukasz is investigating
  * Geth
    * No update
* Consensus Layer
   * Prysm
     * Merged the changes
 
   * Nimbus (Philippe Schommers) 
     * ghcr.io/filoozom/gnosis-nimbus-eth2:latest
       * Not used by the public yet
    * Gnosis deployed some nodes for testing and Erigon CL
  * Housekeeping
* Chain infra
   * Gateway
     * Been running an Erigon archival node on Gnosis
       * All the nodes were stuck on the same block number
       * Indexing
     * Figuring out re-org
     * The RPC test is going fine
 * Additional Workstreams (will join this call in the future)
   * Shutterized Beacon Chain
   * Account Abstraction
