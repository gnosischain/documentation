---
title: Core Devs Call - 08/02/2023
authors: [alebanzas, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes February 8, 2023

![](https://i.imgur.com/kTqmelS.png)


Hello everyone from the weekly Gnosis Core Devs Call. This meeting is repeated on Wednesday every week. Watch on Gnosis Chain YouTube channel. ‍

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

**TL;DR**

At this week's short meeting, the latest status updates on the withdrawal contract was talked and possible implementation scenarios were evaluated. In addition, opinions were shared about Shanghai testing tools and POSDAO testnet. Updates from Core Dev Team updates on Erigon, Gateway, Nethermind, Geth, Prysm were included in the agenda.Additionally, updates from the Core Dev Team updates about Erigon, Gateway, Nethermind, Geth, Prysm were included in the agenda.

Topics:​
* Withdrawals Contract
* Core Dev Team updates
* Shanghai testing tools
* Base Fee


Let’s take a look at the core devs call updates.

# Call Notes

## Withdrawals Contract
  * Not many changes since last week
  * Waiting for feedback before continuing the implementation
    * 3 possibilities
      1. Declare that the GNO token on the GC is a canonical token 
        * Mint it when the contract has not enough tokens 
        * Violates the first principles of the GNO token
      2. Mint an GNO on GC token when the contract has not enough tokens
        * Violates the bridge pledge logic
      3. Do not issue a token when the contract has not enough tokens, but instead leave a note that in the future the user will be able to receive funds if they will be on the withdrawal contract (violates the logic of creating an mGNO token because of staking)
E.g. “promissory”GNO
##  Chain Infra
  * Gateway
    * 20% of Chiado traffic goes to Gateway RPC
    * Need to start getting traffic from Mainnet RPC
## Core Dev Team updates
  * EL
     * Erigon
       * No updates
    * Nethermind
      * Working on running devnets for withdrawals with mock contracts
      * The withdrawal spec is going to be different on Gnosis than on mainnet, so testing would be quite useful
      * Wrote a script to verify if some bytecodes are used
      * Resource utilization is apparently lower than before
    * Geth
     * Philippe
       * Added Chiado chainspec to Lodestar
       * Added deposit blocks for Gnosis and Chiado to 
    * Erigon
      * To allow for –prune=r without having to specify –prune.r.before=firstDepositBlock
      * WIP: Light clients for CL for Gnosis and Erigon
      * WIP: Nimbus + Erigon
## Other issues
  * Bridge Coordinator
     * Will update in subsequent week
## Issues
  * Gateway
     * Shanghai testing tools?
     * Igor might have been working on this already
     * Waiting for him and dapplion
 * POSDAO tests? 
   * Need to add withdrawals tests

