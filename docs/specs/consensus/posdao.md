---
---

# POSDAO

:::caution The merge
Gnosis is transitioning to PoS, this page defines the pre-merge consensus model. Learn more [about The Merge](/specs/consensus/) and the near future consensus model.
:::

## Proof of Stake Decentralized Autonomous Organization

POSDAO describes the current validator selection method for the Gnosis Chain.  Validators provide consensus for Gnosis Chain transactions. This method will be deprecated immediately following the merge when the Gnosis Beacon Chain becomes the consensus layer engine.

Validators are selected based on the amount of GNO they place into the protocol along with an on-chain RNG. The validator set is capped at 19, and validator candidates need to place minimums of 2K GNO (current minimum) and setup a valid node to be eligible for participation. In addition, public delegators can place GNO on candidates, increasing their chances of becoming validators in the next set. The validator set can change weekly based on the number of eligible validators and their staking amounts.

:::success [POSDAO Contract Implementation Addresses](https://github.com/poanetwork/poa-chain-spec/blob/dai/contracts.json#L9)
:::

:::info
Prior to Public POSDAO, Permissioned POSDAO was used nominated validators to sign blocks. Gnosis transitioned to public POSDAO in December, 2020.
:::

## Whitepaper

> Barinov, I., Arasev, V., Fackler, A., Komendantskiy, V., Gross, A., Kolotov, A. and Isakova, D. POSDAO: Proof of Stake Decentralized Autonomous Organization (April 29, 2019). Available at SSRN: [https://ssrn.com/abstract=3368483](https://ssrn.com/abstract=3368483) or [http://dx.doi.org/10.2139/ssrn.3368483](https://dx.doi.org/10.2139/ssrn.3368483)

:::success [Summary and PDF version of the latest whitepaper version](https://forum.poa.network/t/posdao-white-paper/2208)
:::