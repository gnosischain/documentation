# Gnosis Core Devs Call Notes Feb, 1, 2023

![](https://i.imgur.com/VY5RkbN.png)


Hello everyone from the weekly Gnosis Core Devs Call. This meeting is repeated on Wednesday every week. Watch on Gnosis Chain YouTube channel ‍ Participants: Erigon, Gateway, Nethermind, Gnosis DevOps, Gnosis Core Devs, Gnosis Comms team and the contributors.


## Topics:​
* Withdrawals Contract
* xDai “fees”
* Core Dev Team updates 
  * Erigon
  * Nethermind
  * Gateway
  * Geth
  * Prysm
* InterOp update
* Base Fee

Let's take a look at the core devs call updates.

**Feb 1, 2023** 

* Chain Infra
  * Updating of configs repos
    * Chiado Config vars https://github.com/gnosischain/configs/pull/7 
    * [ ] Nethermind will help to update
 * Ale: from Discord
   * Source of “block rewards” GNO
     * Withdrawals contract (with Ihor)
     * Option 1: Large reserve that pays out GNO rewards (bridged from ETH)
     * Option 2: Hardfork to “mint” GNO on-chain native to Gnosis Chain
     * ... Can you help me understanding something about GC? So validators are paid with the priority fees of each block they create in XDAI to an address they specify. The rewards for all other activities (attestations etc.) are paid in mGNO to the deposit address. The base fee of each tx is burned. Where do the additional mGNO come from? From the treasury? Also, I don't get what happened to the DAI burned blocked on the Ethereum side (dai locked amount != xdai in the network?)

* Withdrawals Contract
  * Current status
    * Dapplion has written a spec https://hackmd.io/@dapplion/BkjQTn13j 
    * Ihor is working on these contracts
  * Need to decide on approach given differences between ETH & GNO
    * Ethereum = ETH is native, while mGNO is not
      * Sending ETH to deposit contract conceptually sends from EL to CL
    * Withdrawals on GNO will “withdraw” it from the deposit contract
  * The “deposit contract” option is being taken for now
    * Withdrawal contract will rely on “reserve” contract that will be funded before/after
    * Treasury will need to send more GNO to the Withdrawal contrat to account for block rewards
https://etherscan.io/token/0x6810e776880c02933d47db1b9fc05908e5386b96#balances 
https://github.com/gnosischain/specs/blob/master/execution/withdrawals.md
  * Alternative approach (jorge@nethermind.io) 
    * Minting mGNO on Gnosis Chain thru increment the mGNO token registry thru system call (i.e. “issue” mGNO)
    * Ihor: how do we maintain total token balance (i.e. sum(GNO on Ethereum chain) == 3_000_000)
  * There is no way to convert mGNO to GNO
    * Ihor is implementing mGNO to GNO unwrapping logic in the mGNO wrapper
    * Upgradeable contract
  * Long-term business direction
    * GNO on Ethereum is a “claim” against native GNO on Gnosis
    * Reduce dependency of GNO on GNO on Etheruem or Bridges
  * Need to write a forum post on Gnosis Forum
    * DAO vote?
* xDai “fees”
  * 1559 fees = imbalance on ETH Bridge Deposit vs. Gnosis claims
  * This will grow as fees increase
  * jorge@nethermind.io- 1559 xDai is not burnt, sent to a special address
 * Have not specified anything yet
   * “DAO is in charge of this Dai”
   * Possibility 1: GNO buybacks
   * Possibility 2: GnosisDAO can figure out what to do with 1559 protocol fees
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

