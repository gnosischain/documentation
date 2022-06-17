---
---

# Security Audit

A security audit for the deposit contract was completed by ChainSecurity. The original audit was conducted for the STAKE token, however, the same functionality can be extrapolated for use with the mGNO token

**Audit Report**: [https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/](https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/)

The contract is based on [the original Ethereum beacon chain deposit contract](https://github.com/ethereum/consensus-specs/blob/master/solidity\_deposit\_contract/deposit\_contract.sol), with extended functionality including:

* **ERC20 deposits**: Stakers can deposit ERC20 tokens instead of native tokens.
* **Batch deposits on top of normal deposits**: Batch deposits are fixed at 32 mGNO per deposit and normal deposits are floored to 1 mGNO.
* **Support for ERC677**: Adds a hook on ERC20 tokens transfer to trigger token receiver.
* **Upgradeability**: A proxy pattern is used to have the ability to upgrade the implementation contract.
* **Claimability**: An admin is able to withdraw any mistakenly sent non-mGNO tokens (ERC20 or native) in order to give them back to their owners.
* **Contract can be paused**: This functionality is only available for the admin.
