---
description: Gnosis Beacon Chain has the ability to upgrade contracts
keywords: [gnosis beacon chain, gnosis upgradeability]
---

# Upgradeability

One differentiator for the Gnosis Beacon Chain relative to the Ethereum Beacon chain is the ability to upgrade contracts. A proxy pattern allows for this functionality, which can be extremely useful if an update is required (a bug is found, new functionality added etc).

However, this also introduces issues of administrative responsibility. No one entity should solely control contract updates.

A multi-sig Gnosis Safe is used to expand admin responsibilities to a larger entity. The controlling assembly is a Governance Board consisting of known and active projects who have contributed to the Gnosis and Ethereum community for some time.

A proposed upgrade is presented to this board and a minimum of 7 signatures are required to enact any proposal.

[Governance Board Members](/bridges/governance#current-bridge-governors)

### Contracts managed by the Governance Board

- Deposit Contract: [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9/read-contract)

