---
title: Core Devs Call - 22/02/2023
authors: [armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://uploads-ssl.webflow.com/636962bb422ea43a44c85e47/63f65b2841d3f03452a77849_coredevscallcover.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

The main topic of discussion during the meeting was the withdrawals contract. The team is currently making preparations for the forthcoming Shapella upgrade. Furthermore, updates were given on Devnet, the Client team, Chain infrastructure, and POSDAO.

Watch on [Gnosis Chain YouTube channel](https://www.youtube.com/watch?v=1DDKU5OX-Lw)

### Topics
* Withdrawals Contract
* Shapella Upgrade
* Core Dev Team updates
* Client Team Update
* Chain Infrastructure Updates
* Devnet
* POSDAO

# Call Notes

## Withdrawals contract
* Should be finalized
* Being audited by Adam
* If the transfers can’t occur (insolvency case), they will be queued and cleared when new GNO is supplied
* Dapplion is asking for help from Nethermind to pick a safe value of the number of failed transactions to execute per block
* Might be useful to test on mainnet because on devnets the entire state can be cached
* Ruben suggests a default of 16 for both, so 32 in the worst case scenario
* If we have one day worth of failed amounts, then clearing the queue would take a day as well
* In any case, this would be an unlikely scenario
Would require a massive exit
* Lukasz: is there an estimation of gas usage for those transactions?
* Dapplion: we don’t have those numbers but we should compute them
* Based on this, we could choose a number for the failed transactions per block
* Dapplion: will ask Ihor to get some numbers
* Need to assign tokens to Deposit Contract
    * Should have some 0x01 addresses
    * Method 1: Jorge’s “Merge” method of just overwriting storage slots
    * Nethermind and Erigon have support for storage allocations
    * Makes it possible to give tokens to users in contracts
    * Method 2: Assign code as constructor bytecode (?)

## Devnet
* Are there blockers?
    * Actual withdrawals contract (currently using mocks)
* Can we start spinning one up?
* Status‍
    * Nethermind
        * Started an internal devnet using a mock contract a few days ago
        * So far, everything seems to be good
        * Starts with AuRa blocks, then Merges (Bellatrix) and then enables Withdrawals
        * Lighthouse might not be compatible with TTD = 0
        * Devnet is simple to set up because it’s mostly automated
        * Current state‍
            * A dozen of validators
            * Went through Shanghai without any issues
            * Withdrawals have not been tested yet
            * Figuring BLS addresses out
            * The nodes are public, so an RPC can be shared
            * Erigon can also join this devnet, but the mock contract is still used, so that needs to be configured‍
    * Erigon‍
        * Not implemented yet
        * Can be done this week
    * General
        * We can spin up a devnet with both clients end of next week (March 2nd)
    * Gnosis DevOps
        * Will run Nethermind first?

## Client team updates
### Execution Layer
* Nethermind‍
    * Running devnet for withdrawals
    * Issues regarding 1.17
    * Attestations down
    * We’ll investigate and contact Nethermind on Telegram
* Erigon
    * Chiado now works
        * Linked to dead peers on Nethermind
        * Enabled snapshots
    * Light client works for Gnosis and Chiado
        * DevOps is working on spinning up more Nimbus peers
* Guillaume

    * Trying to run latest Prysm on mainnet
    * Will be working on geth sync for the rest of the month
    * Will be working on geth sync for the rest of the month
### Consensus Layer
‍
* Prysm
    * How to configure the Gnosis preset?
        * `--chain-config-file=/configs/mainnet/config.yaml` refers to `PRESET_BASE: gnosis`
* Nimbus

    * Publishing on Gnosis repo
    * https://github.com/gnosischain/gnosis-nimbus-eth2

## Chain Infra
‍
* Gateway‍

    * Half of the traffic on Chiado
    * 25% traffic on mainnet
        * Everything’s good and planning to increase traffic
    * Gnosis Bridge Validator
        * 1-of-7
        * Work can be slow during EthDenver

* Beaconchain

    * Not ready till T+1 after Ethereum Shanghai/Capella
    * For the 0x00 -> 0x01 address conversion

## Timeline
* When is a realistic time for Withdrawals?
    * Need to prep community
    * We should not overpromise‍
* DevNet

    * Next steps (can be done without Erigon)
    * Deploy a new one with the actual smart contract
        * With upgrade from mainnet bytecode if possible, but not essential
        * Can be put in the genesis bytecode
    * The contract should be pre-funded to simulate the current state on mainnet
    * Would be great to test the insolvency case
    * Test the deposit contract update
        * Start with the bytecode of the current deposit contract
        * Go through the upgrade
    * Can probably be done this week
* Shadow forks‍
* Chiado

    * Deposit contract for Genesis
    * Start testing tooling
        * Dappnode
        * Withdrawal credentials in general‍
* Mainnet‍

    * Deposit contract needs to be updated
    * Requires testing
        * On devnet
        * On chiado
        * Emulate it as close to mainnet as possible

## Additional Workstreams

* Shutterized Beacon Chain
* Account Abstraction

## Tests
### Hive
* Dapplion: Should be the option in the long term
    * Marek agrees because Ethereum also supports Hive tests
    * However, the initial effort will be more important as we have nothing yet
### POSDAO
* Currently: Truffle test suites
* Really annoying to work with
* Still-relevant
    * Deprecated, but still necessary for nodes being synced from Genesis:
        * Pre-merge testing of POSDAO - rotation of validator set, voting etc
        * Test that we can still go thru the Merge without going thru forks or nodes getting start
    * Still relevant:
        * xDai Block Rewards
        * Has prevented really bad problems from happening
            * Syncing from Genesis
### None of them are being worked on
* Would anyone have capacity to do either?
    * Nethermind: Hive tests are written in Go
        * Nethermind has devs, but not sure anyone is available
    * Erigon: Andrew will ask around, but probably no capacity
* Would be great to have long term ownership of Gnosis tests
    * Especially for shutterized beacon chain etc in the future
* We wouldn’t need a suite as extensive as Ethereum’s for now
    * The withdrawal tests are relatively succinct
### Miscellaneous
* The xDai team did an attempt at implementing withdrawals
    * https://hackmd.io/@k1rill-fedoseev/SkS0ua5mq#Capella
    * They had a way to pause withdrawals
        * Sounds really bad, we don’t want to be able to stop the network
* There will be no trace (logs) of withdrawals on explorers
    * We need to work with explorers to display them
    * Ideally they add a new tab, similar to “internal” / “ERC-20” for withdrawals
    * We can probably piggy-back from the mainnet implementation
    * Caveat: insolvency case, might require some specific logic
    * Beaconcha.in
    * Gnosisscan
    * Blockscout
* Lukasz: should withdrawals be shown in traces somewhere?
    * Lukasz: mixed feelings
    * We should maybe ask block explorers / users what they want?
    * Dapplion: let’s keep it simple
 