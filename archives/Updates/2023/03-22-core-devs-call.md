---
title: Core Devs Call - 2023/03/22
authors: [dapplion, armaganercan]
tags: [CoreDevsCall, gnosis]
---

# Gnosis Core Devs Call Notes

![](https://i.imgur.com/iQTcEI1.png)

Greetings everyone, and welcome to the weekly Gnosis Core Devs Call. Just a quick reminder that this meeting takes place every Wednesday.

Participants: Erigon, Gateway, Nethermind, Geth, Gnosis DevOps, Gnosis Core Devs, Gnosis DevRels, Gnosis Comms team and the contributors.

Mar 22, 2023

# Client Team Updates

## EL

- **Nethermind**: Bad block fix was shipped.
- **Erigon**: No updates
- **Geth**: Imported some blocks, but there’s issues with the freezer, hopefully that’s the last hurdle

## CL

- **Prysm**: No updates

# Chain Infra

- **Gateway**

Increasing mainnet RPC to 75% traffic. Implementing monitoring for the Chiado bridge. As soon as this is done, they’ll deploy both bridges for mainnet

# Devnet

Some issues: 3 phases

- Launching chain

  - No problem

- Merge

  - Issues caught before the merge and fixed in time

- Shapella hard fork
  - Erigon nodes got stuck with “known bad hash”. Erigon now stuck with another bug
- Gateway switched Erigon nodes to Nethermind
  - Issues regarding sync committees
    Mar 22 13:01:07.055 WARN Error processing HTTP API request method: POST, path: /eth/v1/beacon/pool/sync_committees, status: 400 Bad Request, elapsed: 4.13746ms
- Erigon
  - Was a good test, revealed some issues. DDoS protection from geth was problematic but is fixed. Missing gas limit implementation. The withdrawal contract reverts on Erigon, but works fine on Nethermind. Missing all the slots (or most?)
    Bad blocks on Sepolia, but works on Goerli. If any bad block is detected on Goerli, please tell Andrew. Could be linked to an old version of Erigon. Andrew will check on their Sepolia validators
- Nethermind
  - Consensus issues need to be investigated separately. We need consensus between both clients to test client diversity / parity

Igor: where do (automatic) withdrawals go for genesis validators? Do they have a withdrawal address?
Lion: the default tooling sets addresses to 0
Jorge: they sometimes set withdrawal addresses on genesis or after, depending on what’s to be tested
Ruben: can help on how to check if withdrawals are happening or not
The failed withdrawals per slot are fixed to 4 on Nethermind’s side for now
Lion: this should be a consensus config
Marek: how can we be sure that we are triggering all testing paths?
Lion: we could add coverage tools from Solidity to automate those tests
Igor: we need tooling to automatically test withdrawals, because they happen on both consensus and execution
Lion: for the withdrawal contract we can easily test it on chain now because it’s insolvent at genesis anyways, as the validators are created in genesis and thus there’s no GNO in the contract
Jorge: instead of deploying a new devnet or messing with the current one, we can create a shadow fork and modify some storage there to test specific scenarios
I.e. removing the GNO in the contract for example
Marek: downside is that this is not automated testing for the future
Jorge: indeed, but we don’t have automated tests yet and that’s the best we have

- Testnet

Was supposed to hard fork next week: still realistic?
Igor: probably wise to postpone until Erigon is ready

# Tests

- Hive

Max not present: no update

# Withdrawal Contrat

- mGNO is getting removed
  Would require a contract upgrade on devnet. Will be tested on devnet by triggering actions that provide good solidity coverage
