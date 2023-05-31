---
title: Core Devs Call - 15/03/2023
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/V1RaujR.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

At this meeting, the team talked about xDAI's base fee and options are being evaluated. Research is underway on Home stakers affected by ISP bandwidth limitation. Also shared updates from CL and EL teams.

Watch on [Gnosis Chain Youtube](https://www.youtube.com/watch?v=do-slVs50jU)

Mar 15, 2023

# Client Team Updates
## EL
* **Nethermind**: Aiming to automate the contract deployment But having issues with the deploy contract. Going with truffle deployments. Contracts work as expected. Issues with deployment only.

* **Erigon**: Working on documentation internally. Andrew is in holiday so wasn’t able to join the devnet yet. Maybe can next week (back on Monday)

* **Geth**: Managed to rebuild the trie. Needs to finish importing blocks, after which it should be possible to follow the chain. Needed because snapshot sync doesn’t work. Will then serve snapsyncs to other instances of Geth

## CL
* **Prysm**: Doesn’t work with the “CAPELLA_FORK_EPOCH: 9999999999999” “hack” either, more investigations to do. 
* **Guillaume**: Might work when building locally instead of using their Docker image

# Chain Infra
* **Gateway** 

Provisioned bridges on Chiado. If everything goes right -> mainnet. Serving half of the requests on the official RPC. Service 75% of the Chiado RPC requests. Figured out issues with The Graph. Figured out an issue with Erigon sometimes stopping to sync. Because of invalid blocks produced by Nethermind. Not super focused on withdrawals right now. 

Provided Ethereum archival nodes for Gnosis Bridge validators


# Devnet
New one to be spun up after deployments are automated (probably today or tomorrow)

Target configs: Monday
Target launch date: Tuesday

* Testnet

Tentative date for Chiado hard fork
Nethermind: 10 days to 2 weeks (maybe a bit optimistic)
Erigon: the code is ready and they don’t expect any big issues, so the hard fork could come relatively soon

# Tests
* Hive

It’s actually a lot of work to adapt Hive tests for Gnosis. The Erigon team is meeting IRL to discuss this
Updating tests will take at least a few weeks, maybe a month or two. It’s a bigger task than anticipated

# People
Nethermind agreed to take on DevOps and QA roles and is looking for people

# Research
* Home stakers affected by ISP bandwidth limitation (because of CL). Workaround?

Idea: Reduce transaction pool size (EL)
Several members of community receiving letters from ISP saying their service will be cancelled due to high bandwidth consumption
### Past Research

* Research: 5s Blocktimes for Gnosis

There would be an advantage of having 4 or 6s block times to be in sync with Ethereum. Connected block builders could be used to have optimistic mechanisms in contracts for cross-chain arbitrage.

* Also requires Genesis times to be aligned

Gnosis Dec-08-2021 07:55:40 PM
Ethereum Dec-01-2020 12:00:23 PM
Meaning that have one block time be a multiple of the other one would probably still not work either way

# xDAI as base fee

Nothing actionable right now. The last weekend showed the problem. Gnosis wants to be decentralized and resilient. The base token (DAI) is essentially wrapped USD bank deposits at this point. Mostly USDC (60-70%). DAI is very affected by potential US banking problems.

* Problematic for credible neutrality

Problematic because it’s linked to a specific “region” (i.e. the USA)
Moving to GNO as a base token

The idea of a stable coin as a base token is nice and many like it based on an internal poll. How bad is it actually if DAI has an issue?

Having fees be twice cheaper is not a huge issue, as in any case there’s still an auction for block space
DAI is not integral to the security of the chain, whatever its price.

It still impacts all the users that are forced to hold DAI because of Gnosis.

It would impact a lot of DeFi as well
Using a less centralized stable instead of GNO would be a nice option.

There’s some very early research. We could schedule an open research call.

* Option: fork Maker on Gnosis

In the same way that Maker accepts 1 USDC as collateral to get 1 DAI, we could start with that and then add options to add GNO or other crypto assets as collateral. Gives a lot more flexibility. We can limit the amount of xDAI minted through DAI and force more of it to be minted through decentralized collateral

* Thought Experiment: GNO as a Native Token

Some ideas (lacking expertise)
Different opcodes for "legacy" native asset transfers vs. GNO transfers
Different txn types (e.g. type 1, EIP-1559, and GNO-native txns)
Utilizing legacy RPC URLs to relay txns using a JIT airdrop of GNO

# Misc
Figure out deploy strategy on Chiado so that we can replicate it on Mainnet
I.e. go through the same deposit contract upgrades etc





