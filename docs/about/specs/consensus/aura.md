---
description: The consensus model Gnosis used before the Merge in December 2022, POSDAO with Authority Round (AuRa) consensus
---

# AuRa with POSDAO Consensus

:::caution The merge
Gnosis transitioned to PoS using the [GNO Token](/about/tokens/gno), this page defines the pre-merge consensus model. Learn more [about The Merge](https://ethereum.org/en/upgrades/merge/).
:::

Consensus refers to the agreement process between nodes in a network. The nodes must agree on which transactions to include in the next block on the chain before these transactions are committed.

There were 2 aspects to the process on Gnosis before the Merge: the consensus mechanism that added transactions to blocks, and sybil protection, which kept out malicious actors.

Until the Merge in December 2022, Gnosis used Parity's AuRa (Authority Round) proof-of-authority consensus model to append blocks. In this model, selected validators ([selected through the POSDAO dPOS process](/about/specs/consensus/posdao)) took turns signing blocks. A signed block was broadcast to all validators, and if the majority agreed it was valid, it was added to the chain. A new block was added every 5 seconds, regardless of whether any transactions occurred during that time.

Gnosis used delegated Proof of Stake to provide sybil protection. Validators and delegators had to add GNO to the protocol. If the nodes participated as expected, they received additional GNO rewards. If they engaged in malicious behavior (like not revealing random numbers) the validator was banned and their GNO (and their delegators' GNO) was frozen. These behavioral rewards acted as incentives to promote an honest group of validators participating in consensus.

[Learn more in the Whitepaper](/about/specs/consensus/posdao#whitepaper)

:::info
Finality delay
A minimum of `n_v/2 + 1` validations was required, with `n_v` the number of validators. At least `2(n_v/2 + 1) = n_v + 2` message round trips were therefore necessary before a block was finalized by all validators. In the worst case, after exactly `n_v` validations, the delay was instead `2n_v + 2`. With the 19 validators Gnosis ran, this was the equivalent of 40 blocks.
:::

:::success [Additional Information on AuRa](https://openethereum.github.io/Aura)
:::