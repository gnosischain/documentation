---
title: Core Devs Call - 01/02/2023
authors: [alebanzas, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/VY5RkbN.png)

Hello everyone from the weekly Gnosis Core Devs Call. This meeting is repeated on Wednesday every week. Watch on [Gnosis Chain YouTube channel ‍](https://youtu.be/NxPWQLd8H7g) 

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

**TL;DR**

During this week's meeting, the topic of the Withdrawal Contract was thoroughly discussed. The latest updates regarding xDai fees, which were brought to the table last week, were also discussed. Additionally, updates from the Core Dev Team (Erigon, Gateway, Nethermind, Geth, Prysm) were included in the agenda.


## Topics:​
* Withdrawals Contract
* xDai “fees”
* Core Dev Team updates 
* InterOp update
* Base Fee

Let's take a look at the core devs call updates.

## Call Notes

* Chain Infra
  * Updating of configs repos
    * Chiado Config vars https://github.com/gnosischain/configs/pull/7 
    * Nethermind will help to update
 * Ale: from Discord
   * Source of “block rewards” GNO
     * Withdrawals contract (with Ihor)
     * Option 1: Large reserve that pays out GNO rewards (bridged from ETH)
     * Option 2: Hardfork to “mint” GNO on-chain native to Gnosis Chain

* Withdrawals Contract
  * Current status
    * Dapplion has written a spec https://hackmd.io/@dapplion/BkjQTn13j 
    * Ihor is working on these contracts
  * Need to decide on approach given differences between ETH & GNO
    * Ethereum = ETH is native, while mGNO is not
    * Withdrawals on GNO will “withdraw” it from the deposit contract
  * The “deposit contract” option is being taken for now
    * Withdrawal contract will rely on “reserve” contract that will be funded before/after
    * Treasury will need to send more GNO to the Withdrawal contrat to account for block rewards
https://etherscan.io/token/0x6810e776880c02933d47db1b9fc05908e5386b96#balances 
https://github.com/gnosischain/specs/blob/master/execution/withdrawals.md
  * Alternative approach
    * Minting mGNO on Gnosis Chain thru increment the mGNO token registry thru system call (i.e. “issue” mGNO)
    * Ihor: how do we maintain total token balance (i.e. sum(GNO on Ethereum chain) == 3_000_000)
  * There is no way to convert mGNO to GNO
    * Ihor is implementing mGNO to GNO unwrapping logic in the mGNO wrapper
    * Upgradeable contract
  * Long-term business direction
    * GNO on Ethereum is a “claim” against native GNO on Gnosis
    * Reduce dependency of GNO on GNO on Etheruem or Bridges
  * Need to write a forum post on Gnosis Forum
* xDai “fees”
  * 1559 fees = imbalance on ETH Bridge Deposit vs. Gnosis claims
  * This will grow as fees increase
  * Jorge - 1559 xDai is not burnt, sent to a special address
   * Analytics
    * Should start keeping track of xDai (issued minus 1559)
    * Erigon’s state = easiest to keep track 
  * 1559 Fee Collector address
    * 0x6BBe78ee9e474842Dbd4AB4987b3CeFE88426A92
    * https://github.com/NethermindEth/nethermind/blob/master/src/Nethermind/Chains/xdai.json#L73 
* Core Dev Team updates
  * Erigon
    * Fixing issues with eth_blockNumber
    * Prep EIP-170 with Shanghai update 
      * Contract code size limit
      * Previously omitted in Gnosis Chain - POSDAO had code size limit in POSDAO contract (permissionContract)
      * EIP-3860 - relies on EIP-170
    * Prep for Withdrawals work
  * Nethermind
    * Waiting on Withdrawals spec
    * Proof-of-concept implementation based on what Nethermind team knows about withdrawals
    * Can do some local testing on
    * Scanning chain for opcodes + 
  * Gateway
    * Igor: This week we finalized Chiado checkpoint sync endpoint, I fixed some tracing issue in Erigon reported by our users, waiting for more traffic from Gnosis RPC
  * Geth
    * Full Sync
    * Snap Sync - some issues
  * Prysm
    * Merged the PR 
    * Should be able to run stock on Prysm - pass in config file
    * Let Guillaume know if we encounter issues
* Any other issues
  * Philippe: Erigon + Nimbus are publishing blocks
* Base Fee
   * Spam protection 
   * 1 gwei would allow it to kick in within ~10min of full blocks, vs hours
  * Tomasz had strong objections - should table it
* InterOp update?
  * Withdrawals + Shanghai - shadowforks are working
  * SSZ in execution layer (vs RLP for txns)
    * SSZ (CL) vs RLP (EL)
    * Backward compatibility of txns in SSZ
  * EOF - shelved
  * Specs
    * Danube - 4844
    * Electra - verkle (Guillaume)
* Consensus Spec tests
  * Needed for Nimbus merge