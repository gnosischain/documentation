---
---

# POSDAO: Proof of Stake Decentralized Autonomous Organization

:::warning
POSDAO describes the current validator selection method for the xDai Stable Chain.  Validators provide consensus for xDai chain transactions. This method will be deprecated immediately following the merge when the Gnosis Beacon Chain becomes the consensus layer engine.
:::

Validators are selected based on the amount of STAKE they place into the protocol along with an on-chain RNG. The validator set is capped at 19, and validator candidates need to place minimums of 2K STAKE (current minimum) and setup a valid node to be eligible for participation. In addition, public delegators can place STAKE on candidates, increasing their chances of becoming validators in the next set. The validator set can change weekly based on the number of eligible validators and their staking amounts.

:::success [POSDAO Contract Implementation Addresses](https://github.com/poanetwork/poa-chain-spec/blob/dai/contracts.json#L9)
:::

:::info
Prior to Public POSDAO, Permissioned POSDAO was used nominated validators to sign blocks. xDai transitioned to public POSDAO in December, 2020.
:::