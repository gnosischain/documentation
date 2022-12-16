---
title: Add / Remove
description: Instructions for current bridge validators who are adding an additional validator to the set.
keywords: [bridge validator, gnosis bridge]
---

# Add a New Bridge Validator

After a ballot is finalized, the new validator is added to the bridge management multisignature wallets (one on each side of the bridge).

The submitter will execute these methods: addValidator and (optionally) setRequiredSignatures method. After encoding the data for each of these methods, it is sent to each contract (one on either side of the bridge) using the submitTransaction execution method.

Multi-signature wallet addresses (for reference):
- ETH Mainnet: [eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6](https://etherscan.io/address/0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6)
- Gnosis Mainnet: [gno:0x7a48dac683da91e4faa5ab13d91ab5fd170875bd](https://gnosisscan.io/address/0x7a48dac683da91e4faa5ab13d91ab5fd170875bd)
- BSC Mainnet: [bnb:0xCD29E5C0031c42F9E78291ef5d5148a5e618e5BC](https://bscscan.com/address/0xCD29E5C0031c42F9E78291ef5d5148a5e618e5BC)

### Steps to add a new bridge validator​
Use Transaction Builder tool on safe multisig wallet to create new transactions. Propose and execute transactions to both sides of the bridge. Targets of transactions should be contracts mentioned in Bridge Validator Management Contracts​ section.

1. Use the addValidator method to add a new validator.
2. Use setRequiredSignatures​ (if needed) to change the number of needed signatures from validators.

:::info Important!
When proposing transaction to the governance multisig ask governance to leave one more signature to be signed (for example if it is 7/15 multisig ask governance to proceed with 6 signatures) – this is necessary to prevent the execution of the transaction by a third party.
:::