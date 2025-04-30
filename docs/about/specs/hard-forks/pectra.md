---
title: Pectra Upgrade on Gnosis Chain
description: Pectra hardfork in now live on Gnosis Chain
keywords: [gnosis pectra, gnosis hardfork, pectra upgrade, EIP 7702, pectra hardfork]
---
# Pectra hardfork

This hard fork activates all EIPs also activated on Ethereum mainnet [hard-fork](https://eips.ethereum.org/EIPS/eip-7600) EIP.

The table below lists differences if any.
| EIP |   Scope   |   |
| - | - | - |
| [EIP-2537](https://eips.ethereum.org/EIPS/eip-2537): Precompile for BLS12-381 curve operations | EL      | Not modified
| [EIP-2935](https://eips.ethereum.org/EIPS/eip-2935): Save historical block hashes in state     | EL      | Not modified
| [EIP-6110](https://eips.ethereum.org/EIPS/eip-6110): Supply validator deposits on chain        | EL      | Not modified
| [EIP-7002](https://eips.ethereum.org/EIPS/eip-7002): Execution layer triggerable exits         | EL      | Not modified, same addresses as Ethereum
| [EIP-7251](https://eips.ethereum.org/EIPS/eip-7251): Increase the MAX_EFFECTIVE_BALANCE        | CL      | Not modified
| [EIP-7549](https://eips.ethereum.org/EIPS/eip-7549): Move committee index outside Attestation  | CL      | Not modified
| [EIP-7685](https://eips.ethereum.org/EIPS/eip-7685): General purpose execution layer requests  | Both    | Not modified
| [EIP-7691](https://eips.ethereum.org/EIPS/eip-7691): Blob throughput increase                  | Both    | Constants modified
| [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702): Set EOA account code                      | EL      | Not modified
| [EIP-7840](https://eips.ethereum.org/EIPS/eip-7840): Add blob schedule to EL config files      | EL      | Not modified
| [EIP-4844-pectra](https://eips.ethereum.org/EIPS/eip-4844): Collect Blob Gas Fee               | EL      | Added

* See [Differences with Ethereum mainnet](#differences-with-ethereum-mainnet)



## Impact of Pectra hardfork

- EOAs will have super powers of smart accounts allowing wallets to do batched transactions, sponsored transactions,etc via [EIP 7702](https://eips.ethereum.org/EIPS/eip-7702)

- Validators will have higher potential of earning rewards through increased maximum stake per validator [ EIP 7251](https://eips.ethereum.org/EIPS/eip-7251)

- Auto-compounding for large validators, reduced operational costs through optimized signature aggregation (EIP-7549), and a streamlined withdrawal process via the execution layer (EIP-7002).

- Optimized blob gas pricing via EIP 7691.

## Pectra Timeline
| Network | Timestamp    | Date & Time (UTC)             | Fork Hash  | Beacon Chain Epoch |
| ------- | ------------ | ----------------------------- | ---------- | ------------------ |
| Chiado  | 1741254220   | Mar-06-2025 09:43:40 +UTC     | 0x8ba51786 | 948224             |
| Mainnet | 1746021820   | Apr-30-2025 14:03:40 +UTC     | 0x2f095d4a | 1337856            |

--------

## How to Prepare for upgrade

### For Validators

Update your clients:

   Execution Layer

   - ✅ NethermindEth [v1.31.9](https://github.com/NethermindEth/nethermind/releases/tag/1.31.9)
   - ✅ ErigonEth [v3.0.2](https://github.com/erigontech/erigon/releases/tag/v3.0.2)
   - ✅ Reth [Link to client](https://github.com/gnosischain/reth_gnosis/pkgs/container/reth_gnosis)
   - ✅ Geth [v1.15.10-gc](https://github.com/gnosischain/go-ethereum/releases/tag/v1.15.10-gc)

   Consensus Layer

   - ✅ Lighthouse [v7.0.1](https://github.com/sigp/lighthouse/releases/tag/v7.0.1)
   - ✅ Teku [v25.4.1](https://github.com/Consensys/teku/releases/tag/25.4.1)
   - ✅ Nimbus [v25.4.1](https://github.com/status-im/nimbus-eth2/releases/tag/v25.4.1)
   - ✅ Lodestar [v1.29.0](https://github.com/ChainSafe/lodestar/releases/tag/v1.29.0)
   - ✅ Prysm [v6.0.0](https://github.com/OffchainLabs/prysm/releases/tag/v6.0.0)
