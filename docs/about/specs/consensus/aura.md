---
description: Gnosis Consensus model, POSDAO with Authority Round Consensus
---

# AuRa with POSDAO Consensus

:::caution The merge
Gnosis transitioned to PoS using the [GNO Token](/concepts/tokens/gno), this page defines the pre-merge consensus model. Learn more [about The Merge](https://ethereum.org/en/upgrades/merge/).
:::

Consensus refers to the agreement process between nodes in a network. The nodes must agree on which transactions to include in the next block on the chain before these transactions are committed.

There are 2 aspects to the process - the actual consensus mechanism to add transactions to blocks, and sybil protection, which prevents malicious actors.

Gnosis currently uses Parity's AuRa (Authority Round) proof-of-authority consensus model to append blocks to Gnosis. In this model, selected validators ([selected through the POSDAO dPOS process](/concepts/specs/consensus/posdao)) take turns signing blocks. A signed block is broadcast to all validators, and if the majority agree it is valid, it is added to the chain. A new block is added every 5 seconds, regardless of whether any transactions occurred during that time. _Note: POSDAO offers a pluggable consensus feature, so different or additional consensus processes may be added in the future._

Gnosis uses delegated Proof of Stake to provide sybil protection. Validators and delegators must add GNO to the protocol. If the nodes participate as expected, they receive additional GNO rewards. If they engage in malicious behavior (like not revealing random numbers) the validator is banned and their GNO (and delegators GNO) is frozen. These behavioral rewards act as incentives to promote an honest group of validators participating in consensus.

[Learn more in the Whitepaper](/concepts/specs/consensus/posdao#whitepaper)

View current Gnosis validator pools in the [BlockScout Staking Application](https://blockscout.com/xdai/mainnet/validators).

:::info
Finality delay
A minimum of `n_v/2 + 1` validations being required, with `n_v` the number of validators. At least `2(n_v/2 + 1) = n_v + 2` message round trips are therefore necessary before a block is finalized by all validators. In the worst case, after exactly `n_v` validations, the delay will instead be of `2n_v + 2`. For Gnosis running with 19 validators, this is the equivalent of 40 blocks.
:::

:::success [Additional Information on AuRa](https://openethereum.github.io/Aura)
:::