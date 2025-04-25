---
title: Optimism
description: Optimism implementation is deployed on Gnosis. Gnosis functions as the L1 (akin to Ethereum) and Optimism on Gnosis as the L2.
keywords: [optimism, gnosis optimism]
---

# Optimism on Gnosis

:::danger DEPRECATED
Optimism on Gnosis was deprecated on March 2023. We keep this page for reference.
Do NOT deposit funds, they will not be withdrawable.
:::

An Optimism implementation is deployed on Gnosis. Gnosis functions as the L1 (akin to Ethereum) and Optimism on Gnosis as the L2.

Deployment processes are similar to using [Optimism with Ethereum](https://community.optimism.io/) with updated configs to match the Gnosis chain setup.

| Parameter    | Value              |
| ------------ | ------------------ |
| Network Name | Optimism on Gnosis |
| Chain ID     | 300                |

## Make a Deposit

:::danger DEPRECATED NETWORK!
Do NOT deposit funds, they will not be withdrawable.
:::

Deposits are initiated through the [Proxy\_\_OVM_L1StandardBridge contract](https://gnosis.blockscout.com/address/0x184a119d4C1D08A459FCfBFe7ECc051c163B4c80/transactions) on the Gnosis Chain with the **`depositETH`** method and the following inputs:

- \_l2Gas: **`200000`**
- data: **`0x`**
- value: **`Deposit value in xDai (ie. 0.1 = 0.1 xDai)`**

:::info
Some smart contract wallets are blocked from calling the `depositETH (and depositERC20) methods`. If you want to deposit using a smart contract wallet you can use the `depositETHTo function instead.`
:::

<details>
    <summary>Example using BlockScout</summary>

1. Go to [https://gnosis.blockscout.com/address/0x184a119d4C1D08A459FCfBFe7ECc051c163B4c80/write-proxy](https://gnosis.blockscout.com/address/0x184a119d4C1D08A459FCfBFe7ECc051c163B4c80/write-proxy)

2. Connect a web3 wallet like MetaMask that contains some xDai for funding and gas fees.

![](/img/about/optimism/connect-wallet.png)

3. Scroll down to the **`depositETH`** method and enter the following:

- \_l2Gas: **`200000`**
- \_data: **`0x`**
- value: **`Deposit value in xDai`**
- Click **Write** and complete the transaction with your wallet.

![](/img/about/optimism/method.png)

</details>

:::info
It may take several minutes for the deposit to be processed and the balance to update on the Optimism on GC Chain.
:::

## L1 Contract Addresses

Additional Info related to specific contracts is [available here](https://github.com/ethereum-optimism/optimism/tree/56961f9208af8a43a25a138cce21ef488c418141/packages/contracts/docs).

| Contract                            | Address                                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BondManager                         | [0x730fE4431a00286Ff8dc7E9B03c661E63Ef05121](https://gnosis.blockscout.com/address/0x730fE4431a00286Ff8dc7E9B03c661E63Ef05121/transactions) |
| CanonicalTransactionChain           | [0x636434F59e52D50423bD8272FEB3B2bff5dF586b](https://gnosis.blockscout.com/address/0x636434F59e52D50423bD8272FEB3B2bff5dF586b/transactions) |
| ChainStorageContainer-CTC-batches   | [0xEc64fee4f95E48A3BAd799A5912F183d222086A8](https://gnosis.blockscout.com/address/0xEc64fee4f95E48A3BAd799A5912F183d222086A8/transactions) |
| ChainStorageContainer-SCC-batches   | [0x26EbaD990cC56ef36166d1C4114CEF25F024b75D](https://gnosis.blockscout.com/address/0x26EbaD990cC56ef36166d1C4114CEF25F024b75D/transactions) |
| ChugSplashDictator                  | [0x77fAf5Aa4EB7874a676F773fc308e0FD8e9400f7](https://gnosis.blockscout.com/address/0x77fAf5Aa4EB7874a676F773fc308e0FD8e9400f7/transactions) |
| ERC1820Registry                     | [0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24](https://gnosis.blockscout.com/address/0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24/transactions)  |
| L1StandardBridge                    | [0x3804bA4ecC886AAe91A6D57dE880616E17C8269C](https://gnosis.blockscout.com/address/0x3804bA4ecC886AAe91A6D57dE880616E17C8269C/transactions) |
| OVM_L1CrossDomainMessenger          | [0x6A52b1dbE0293F1ba1bc136b0f8C8f0395F940b9](https://gnosis.blockscout.com/address/0x6A52b1dbE0293F1ba1bc136b0f8C8f0395F940b9/transactions) |
| OVM_Proposer                        | [0xE57cfefE4B7EddE88af28d4ffB3BD63b272f578A](https://gnosis.blockscout.com/address/0xE57cfefE4B7EddE88af28d4ffB3BD63b272f578A/transactions) |
| OVM_Sequencer                       | [0xFDCa025dB7368A84deeCc0d82598eB90638D52DF](https://gnosis.blockscout.com/address/0xFDCa025dB7368A84deeCc0d82598eB90638D52DF/transactions) |
| Proxy\_\_OVM_L1CrossDomainMessenger | [0x4324fdD26161457f4BCc1ABDA87709d3Be8Fd10E](https://gnosis.blockscout.com/address/0x4324fdD26161457f4BCc1ABDA87709d3Be8Fd10E/transactions) |
| Proxy\_\_OVM_L1StandardBridge       | [0x184a119d4C1D08A459FCfBFe7ECc051c163B4c80](https://gnosis.blockscout.com/address/0x184a119d4C1D08A459FCfBFe7ECc051c163B4c80/transactions) |
| StateCommitmentChain                | [0xbAE5EA90F4A1dFBC1b0D145453f371E06287a6D8](https://gnosis.blockscout.com/address/0xbAE5EA90F4A1dFBC1b0D145453f371E06287a6D8/transactions) |

## L2 Contract Addresses

- Optimism L2 contracts can be explored at [https://blockscout.com/xdai/optimism](https://blockscout.com/xdai/optimism)
- Additional Info related to specific contracts is [available here](https://github.com/ethereum-optimism/optimism/tree/56961f9208af8a43a25a138cce21ef488c418141/packages/contracts/docs).
- Summaries for [relevant predeploys here](https://github.com/ethereum-optimism/optimism/blob/8d67991aba584c1703692ea46273ea8a1ef45f56/specs/protocol/components/predeploys.md).

| Contract                    | Address                                    |
| --------------------------- | ------------------------------------------ |
| OVM_L2ToL1MessagePasser     | 0x4200000000000000000000000000000000000000 |
| OVM_L1MessageSender         | 0x4200000000000000000000000000000000000001 |
| OVM_DeployerWhitelist       | 0x4200000000000000000000000000000000000002 |
| OVM_ECDSAContractAccount    | 0x4200000000000000000000000000000000000003 |
| OVM_SequencerEntrypoint     | 0x4200000000000000000000000000000000000005 |
| OVM_ETH                     | 0x4200000000000000000000000000000000000006 |
| OVM_L2CrossDomainMessenger  | 0x4200000000000000000000000000000000000007 |
| Lib_AddressManager          | 0x4200000000000000000000000000000000000008 |
| OVM_ProxyEOA                | 0x4200000000000000000000000000000000000009 |
| OVM_L2StandardBridge        | 0x4200000000000000000000000000000000000010 |
| OVM_SequencerFeeVault       | 0x4200000000000000000000000000000000000011 |
| OVM_ExecutionManagerWrapper | 0x420000000000000000000000000000000000000B |
| OVM_GasPriceOracle          | 0x420000000000000000000000000000000000000F |

## Graph Protocol

When starting the graph-node the network key is: **`optimism`**

- Graph [https://graph-optimism.gnosischain.com/](https://graph-optimism.gnosischain.com/)
- Admin [https://admin-graph-optimism.gnosischain.com/](https://admin-graph-optimism.gnosischain.com/)
