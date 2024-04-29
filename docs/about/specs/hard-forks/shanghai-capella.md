---
title: Shanghai/Capella
description: Enable validator withdrawals, and execution layer update
keywords: [gnosis hardfork, shanghai/capella, execution and consensus layer]
---

# What is Shanghai/Capella hardfork?

Shanghai/Capella hardfork enables validator withdrawal and several execution layer update on Gnosis Chain. EIPs that are included in this hardfork: EIP-3651, EIP-3855, EIP-3860, EIP-6049.

Validator withdrawal allows a validator's account balance get withdrawn from Beacon Chain to Execution Layer, in the form of GNO. The GNO will be accrued on validator's withdrawal address on the Execution Layer, which is set using `eth1_withdrawal_address` option during validator key generation.

Check out [validator withdrawal](/node/management/withdrawals) for more details.

## Upgrade Schedule

| Network | Timestamp    | Date & Time (UTC)             | Fork Hash | Beacon Chain Epoch |
| ------- | ------------ | ----------------------------- | --------- | ------------------ |
| Chiado  | 1684934220 | May-24-2023 13:17:00 +UTC | 0xa15a4252 | 244224             |
| Mainnet | 1690889660 | Aug-01-2023 11:34:20 +UTC | 0x2efe91ba | 648704             |

## How to Prepare

### For Validators

1. Check Withdrawal Credentials

   For any type of withdrawals, a validator need to have `0x01` withdrawal credential. You’re fine if you used `--eth1_withdrawal_address` to create your validator keys. If not, tooling will be made available.

   Refer to [validator withdrawal](/node/management/withdrawals#check-withdrawal-credential) for more details.

2. Update your clients

   Execution Layer:

   ✅ NethermindEth [v1.19.3](https://github.com/NethermindEth/nethermind/releases/tag/1.19.3)
   ✅ ErigonEth [v2.48.0](https://github.com/ledgerwatch/erigon/releases/tag/v2.48.0)

   Consensus Layer:

   ✅ Lighthouse [v4.3.0](https://github.com/sigp/lighthouse/releases/tag/v4.3.0)
   ✅ Teku [v23.6.1](https://github.com/Consensys/teku/releases/tag/23.6.1)
   ✅ Nimbus v23.6.0 (only with the following Docker image: http://ghcr.io/gnosischain/gnosis-nimbus-eth2:v23.6.0)
   ✅ Lodestar [v1.9.1](https://github.com/ChainSafe/lodestar/releases/tag/v1.9.1)

   DAppNode Packages

   ✅ Teku Gnosis v0.1.9
   ✅ Lighthouse Gnosis v0.1.10
   ✅ Lodestar Gnosis v0.1.2
   ✅ Nethermind xDAI v1.0.34
   ⌛️ Erigon and Nimbus - Forthcoming

## How to claim your withdrawal?

### Partial Withdrawal

As we have modified some specs regarding the withdrawals to enable withdrawing GNO instead of the native gas token xDai, unlike Ethereum, partial withdrawals currently do not happen automatically. So, for now, you will need to call [`claimWithdrawal`](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) function on the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract). However, it is in our plans to automate and subsidize partial withdrawals in the future.

### Full Withdrawal

Please check guide on [voluntary exit](/node/management/voluntary-exit).
