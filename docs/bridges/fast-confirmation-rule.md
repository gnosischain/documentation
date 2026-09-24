---
sidebar_position: 9
title: Fast Confirmation Rule integration
keywords:
  [gnosis bridge, bridge architecture, fast confirmation rule, fcr, finality]
---

# Fast Confirmation Rule integration

Gnosis Bridges use the Fast Confirmation Rule (FCR) to process transfers that originate on Ethereum. This page explains what FCR is, how the bridge uses it, and what it means for bridge users.

## What is FCR?

The Fast Confirmation Rule is a new Ethereum feature, implemented in consensus clients, that tells a node when a recent block can be considered confirmed, that is, when it will not be reorged. FCR usually confirms a block within one slot, about 13 seconds after it is proposed. Waiting for finality takes at least about 13 minutes, so this is a reduction of roughly 98%.

### Background: confirmation and finality

Ethereum adds a new block every slot (12 seconds). Until a block is **finalized**, it can in principle be replaced by a competing block in a chain reorganization (_reorg_). Finalization happens after two epochs, at least about 13 minutes.

Applications that act on Ethereum transactions, such as bridges and exchanges, need to know that a transaction will not be reverted before acting on it. Until now, the only strong guarantee available was finality, which means waiting at least about 13 minutes.

### How it works

In every slot, validators publish votes (_attestations_) for the block they see as the head of the chain. FCR counts these attestations for every slot. When a block receives overwhelming support from validators and passes additional robustness checks, it becomes **fast-confirmed**.

For applications, fast-confirmed blocks are exposed through the existing `safe` block tag of the JSON-RPC API. No hard fork and no new API endpoints are required.

### Assumptions

FCR's guarantee relies on two assumptions:

1. **Network synchrony:** attestations are delivered to all honest validators within about 8 seconds, i.e. before the end of the slot in which they are sent.
2. **Honest majority:** at least 75% of total stake is honest and participating. For comparison, finality can withstand an adversary with up to 33% of the stake.

If both assumptions hold, a fast-confirmed block is guaranteed to be finalized. These conditions are reasonable and usually hold on Ethereum mainnet.

### What happens if the assumptions do not hold

If the assumptions break down, for example during severe network disruption, one of two things can happen:

- **Liveness failure (most likely):** blocks are not fast-confirmed within 13 seconds. Confirmation takes longer, or falls back to regular finality. Nothing is lost; confirmation is just slower.
- **Safety failure (rare):** a fast-confirmed block is reorged. This requires extreme conditions. When ethPandaOps replayed one year of historical Ethereum beacon chain data, FCR produced [zero false confirmations](https://ethpandaops.io/posts/fcr-simulator/).

### FCR compared to finality

|                               | Fast confirmation (FCR)                                            | Finality                                                                        |
| ----------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Typical time                  | ~13 seconds                                                        | ~13 minutes                                                                     |
| Guarantee                     | Block will be finalized, as long as the two assumptions above hold | Reverting the block would require at least one third of all stake to be slashed |
| Under poor network conditions | Slows down or falls back to finality                               | May be delayed                                                                  |

## How Gnosis Bridge uses FCR

Gnosis Bridge validators wait until a transfer's block is confirmed on the source chain before processing it. With FCR, bridge validators can process transfers from Ethereum as soon as their block is fast-confirmed, instead of waiting for Ethereum finality. This reduces bridging time from Ethereum from minutes to seconds.

### Processing rules

| Source chain | Destination chain | Processing rule | Typical wait on source chain |
| ------------ | ----------------- | --------------- | ---------------------------- |
| Ethereum     | Gnosis Chain      | FCR             | ~13 seconds                  |
| Gnosis Chain | Ethereum          | Block finality  | ~5 minutes                   |

FCR only applies to blocks on Ethereum. Transfers from Gnosis Chain to Ethereum continue to wait for block finality on Gnosis Chain.

### Implementation

- **No smart contract changes.** The bridge contracts are unchanged. FCR only changes when bridge validators consider an Ethereum block safe to process.
- **Own infrastructure.** Each bridge validator runs its own Ethereum nodes to determine fast confirmation, rather than relying on third-party RPC providers.
- **Client diversity.** Bridge validators run different consensus clients with no single client that holds majority , so a bug in a single client implementation cannot cause the bridge to act on an incorrect confirmation.
- **Fallback to finality.** During Ethereum hardforks or periods of network instability, the bridge reverts to waiting for block finality.

### Monitoring

[https://fcr.bridge.gnosischain.com/](https://fcr.bridge.gnosischain.com/)

A dedicated monitor watches the Ethereum nodes that run FCR. Every slot (12 seconds), it reads each node's latest, fast-confirmed (`safe`) and finalized blocks, and records every block that becomes fast-confirmed.

It raises a critical alert in two cases:

- **Early warning:** a block that was already fast-confirmed is replaced by a different block at the same height. This can be detected minutes before finality.
- **Final check:** when finality reaches a height that was fast-confirmed, the finalized block is different from the fast-confirmed one.

Either case means a fast-confirmed block was reorged out. That is the failure FCR is designed to prevent.

The monitor also records, without alerting:

- times when a node withdraws a fast confirmation and falls back to finality, for example during network disruption. This is expected FCR behavior and doesn't mean a block was lost.
- disagreements between consensus clients about which block is fast-confirmed.

## FAQ

<details>
<summary>When?</summary>

We are targeting the production rollout by the end of October 2026.

</details>

<details>
<summary>Which bridge?</summary>

Both xDAI bridge and Omnibridge.

</details>

<details open>
<summary>Can I choose between FCR and block finality for my transfer?</summary>

No. All transfers from Ethereum use FCR by default and all transfers from Gnosis Chain use block finality. The only exception is during network instability or hardforks, when transfers from Ethereum also wait for block finality.

</details>

<details>
<summary>Do I need to do anything differently?</summary>

No. The bridge contracts and the way you use the bridge are unchanged. Transfers from Ethereum are simply processed sooner.

</details>

<details>
<summary>Is FCR less secure than waiting for finality?</summary>

The guarantees are different. Finality is protected by slashing: reverting a finalized block would cost attackers at least one third of all stake. FCR guarantees that a fast-confirmed block will be finalized as long as the network is synchronous and no adversary controls more than 25% of the stake. If these conditions are not met, FCR typically slows down and falls back to finality rather than confirming incorrectly. See [What happens if the assumptions do not hold](#what-happens-if-the-assumptions-do-not-hold).

</details>

<details>
<summary>Why are transfers from Gnosis Chain to Ethereum not faster?</summary>

FCR is used to confirm Ethereum blocks. Transfers originating on Gnosis Chain depend on Gnosis Chain block finality, which is unchanged.

</details>

<details>
<summary>Why did my transfer from Ethereum take longer than usual?</summary>

During Ethereum hardforks or periods of network instability, the bridge falls back to waiting for block finality (~13 minutes). Transfers are processed normally once the block is finalized.

</details>

<details>
<summary>Is this change related to Gnosis becoming an EEZ rollup?</summary>

No. FCR is an Ethereum consensus client feature, and integrating it improves the existing Gnosis bridges today. It is independent of the Ethereum Economic Zone (EEZ), a separate initiative that aims to bring synchronous composability with Ethereum using real-time ZK proofs.

</details>

## Further reading

- [fastconfirm.it](https://fastconfirm.it/): overview of the Fast Confirmation Rule
- [ethPandaOps: FCR simulator results](https://ethpandaops.io/posts/fcr-simulator/)
- [Technical report (arXiv 2405.00549)](https://arxiv.org/abs/2405.00549)
- [Ethereum consensus-specs PR #4747](https://github.com/ethereum/consensus-specs/pull/4747)
- [Bridge validator implementation](https://github.com/gnosischain/tokenbridge/blob/master/oracle/FCR_integration.md)
