---
description: The hardfork will replace Gnosis’ current “proof-of-authority” consensus with the “proof-of-stake” system as it merges with the Gnosis Beacon Chain. 
keywords: [gnosis beacon chain, merge, the merge, wen gnosis merge]
---

# The Merge

Gnosis, as a closely-related fork of Ethereum, will soon undergo a “Merge” hardfork similar to that of Ethereum. The hardfork will replace Gnosis’ current “proof-of-authority” consensus with the “proof-of-stake” system as it merges with the Gnosis Beacon Chain. 

This hardfork is a critical one for Gnosis in its move towards parity with Ethereum, crucial for Gnosis’ future roadmap as an experimental playground for Ethereum features. 

This change is also significant as Gnosis now is similar to Ethereum in being fully permissionless now, with the deprecation of previous “proof-of-authority” features.

You can read more on the Ethereum merge here: [https://ethereum.org/en/upgrades/merge/](https://ethereum.org/en/upgrades/merge/).


## **How will this affect me? **


### Users

You do not need to do anything. Your funds will remain as-is during the transition. There will NOT be any new token issued before, during or after the Merge. The [$GNO token](/about/tokens/gno) will continue to be used for staking, while the [$xDai token](/about/tokens/xdai) will be used as the native gas token. 

:::danger scammer alert
Please be vigilant of scammers who may use this occasion to launch scam tokens, or phish for seed phrases.  
:::

### Developers

Gnosis' “Merge” will be near 1:1 to the Ethereum Merge in its impact on developers. 

For a full understanding of the changes, please read “[How The Merge Impacts Ethereum’s Application Layer](https://blog.ethereum.org/2021/11/29/how-the-merge-impacts-app-layer/)”. 

At a high level, the Merge will result in the following changes: 

* `BLOCKHASH` opcode is mostly deprecated
* `DIFFICULTY` opcode returns output of randomness beacon
* Block structure contains more proof-of-stake fields, zeros out proof-of-work fields 
* Block time is reduced to ~12s from ~13s
* Block finalization is tracked via `safe head` and `finalized` blocks. 


#### Deprecation of AuRa RANDAO

The Merge will result in the deprecation of the [legacy AuRa RANDAO random number generator](https://developers.gnosischain.com/for-developers/on-chain-random-numbers/randomness-faqs), as part of the larger deprecation of AuRa consensus.  

In its place, developers are advised to move to the Beacon Chain’s Randomness, which implements EIP-4399. Please note that this randomness is still biasable, and take precautions.

[EIP-4399](https://eips.ethereum.org/EIPS/eip-4399) explains the process for developers to switch over to the new Beacon Chain Randomness, which can be accessed via the `DIFFICULTY` opcode. 

Additionally, changes proposed by this EIP allow for smart contracts to determine whether the upgrade to the PoS has already happened. This can be done by analyzing the return value of the DIFFICULTY opcode. A value greater than 2**64 indicates that the transaction is being executed in the PoS block.


### Node runners

You must **run a consensus client before the merge** alongside your existing execution client. Not doing so will cause your node to fork and not follow the right chain. Node operators can also check out the [Merge Readiness Checklist](https://launchpad.ethereum.org/en/merge-readiness/) on the Staking Launchpad for more information, as many of the details apply to all node operators.


### Stakers

You must **run an execution client before the merge** alongside your existing consensus client. Not doing so will cause your node to fork and not follow the right chain. You must set a fee recipient address to receive your earned transaction fee tips/MEV. Stakers are encouraged to follow the [Merge Readiness Checklist](https://launchpad.ethereum.org/en/merge-readiness/) from the Staking Launchpad to ensure readiness for The Merge.

## More info

- [Testnet Deployments](https://github.com/gnosischain/consensus-deployment-ansible#readme)
- [Chiado Testnet](/about/networks/chiado)


## Pre-merge consensus articles

- [POSDAO](/specs/consensus/posdao)
- [AURA](/specs/consensus/aura)