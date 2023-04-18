---
title: Core Devs Call - 01/03/2023
authors: [armaganercan]
tags: [CoreDevsCall, gnosis]
---

![](../../static/img/about/update/CoreDevsCall%20March%201.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

The main topic of discussion during the meeting was the Devnet and Hive test. The team is currently making preparations for the forthcoming Shapella upgrade. Furthermore, updates were given on withdrawal contract, the Client team, Chain infrastructure, and POSDAO test.

Watch on [Gnosis Chain YouTube channel](https://www.youtube.com/watch?v=aJS4CyHWSLc)


### Topics
* Withdrawals Contract
* Shapella Upgrade
* Core Dev Team updates
* Client Team Update
* Chain Infrastructure Updates
* Devnet
* Hive and POSDAO test
* Get rid of mGNO

# Call Notes

# Gnosis Core Devs Call Notes





# Withdrawals contract
* We should try to commit to a date soonish
    * Devnet with actual contract deployed today by Nethermind and joined tomorrow by Erigon
* Semi final state
    * Adam should be taking a look for the audit
        * "I’m still auditing, but also waiting for your response on two threads. I should be able to wrap up the audit shortly after I receive the fixed code."
    * Lion is getting gas numbers to have accurate parameters
    * Coming up with a plan so that Jorge can easily deploy

# Client team updates
## EL
### Nethermind
* Figured out the issue with withdrawal testnet
* Next step: spinning up a new one with the actual withdrawal contract’s bytecode
### Erigon
* Implemented the withdrawal logic for Gnosis chain
    * Not tested yet
### Geth
* Guillaume went back to snap sync, but it makes Nethermind hang up
* Trying some sort of manual snap sync by exporting data from Nethermind and importing directly into geth

## CL
### Prysm
* New release with the Gnosis changes also includes Capella changes
    * Breaks the fork id logic for networks where the Capella fork hasn’t been scheduled yet
    * One can set a Capella fork block far in the future to test it out

# Devnet
* No updates except the ones mentioned in the team updates
* How are we going to split validator duties?
    * Ideally multiple teams should run keys
    * Between 1k and 10k in total
    * A third for Nethermind, Gnosis and Gateway

# Chain infra
## Gateway
* Work on bridge validator
    * Created ansible scripts
* Slowdown while Denver is happening
* Updated the way traffic gets redirected from the Gnosis RPC to Gateway to better track RPS
* Beaconchain
## Additional Workstreams (will join this call in the future)
* Shutterized Beacon Chain
* Account Abstraction
## Tests
### Hive
* Nethermind has been discussing it internally
    * They think it would be bad long term if Nethermind took ownership of testing because they’re the majority client already, and thus don’t really want to do it
    * At the same time, it’s unrealistic to fork without testing in place
* Dapplion thinks that if Nethermind has capacity it would be nice to still do it and diversify later on
    * The shortest path right now to move forward is for Nethermind to implement tests
* On Gnosis, previously Jorge wrote tests (but also implementation, so that’s not great)
    * We don’t have experience in-house for testing
    * We might not have enough work to hire a full-time test developer
* Guillaume thinks that for a short period of time it could occupy a full-time developer position and will ask for finer details from the Ethereum Foundation / tester
* On Ethereum, there’s a dedicated testing team and contributions from clients teams from time to time
    * Ideally, teams give ideas for good tests but don’t implement them
    * They also have tests other than Hive
* Guillaume would be willing to help writing Hive tests with the Nethermind team potentially
* Tests are a blocker right now
    * We have most implementations and devnets, but no tests
* Dapplion: is it a big issue to not have tests if devnets work as expected?
    * Are there code paths that we can’t trigger on a devnet?
        * Failed withdrawals are trivial to trigger on devnet
    * Could be an issue for regression testing, but we could freeze that code
* Dapplion: does Gateway have core devs that could do this?
    * Anna: not sure, will ask
* For consensus-breaking features, tests are essential
    * Also useful for edge cases, which can be difficult to trigger on devnets / testnets
* Guillaume and Marek don’t feel comfortable going to mainnet without tests
* Dapplion: it might take a lot of time to hire someone to work on this, so ideally we should jumpstart it with existing talent to not delay the fork significantly
    * Ask: Find person who is familiar with Hive tests (HR? - ?), in worst-case scenario find Go (but has cold-start problem)
* Next steps
    * Dapplion asks Nethermind to reconsider taking part ownership
    * Nethermind will talk about it internally and keep us up to date
    * Gateway should check if they have talent / capacity
    * Gnosis should consider hiring someone
    * Dapplion and Guillaume will take this offline
    * Stefan: Erigon - Go? (but unable to take it on)
        * The core team is rather small and there probably aren’t any free developers
* POSDAO
    * Written in JS
    * Jorge would prefer to get rid of them
        * The code is quite complex
        * Still makes it possible to tests withdrawals

# Miscellaneous
## mGNO: sole purpose is to allow to use 1 GNO for validators and emulate the 32 ETH on mainnet
* Can we get rid of it?
* Who uses it?
    * Karpatkey
    * Ankr
    * https://www.ankr.com/docs/delegated-staking/gnosis/overview/
* Required updates
    * Deposit UIs
    * https://mgno.validategnosis.com/
* We should do a forum post in the GnosisDAO or a Twitter poll?
    * We should come up with a recommendation first
    * Good practise to use the forum for this
* Why keep it?
    * Good practise in blockchain in case someone relies on it for some reason
