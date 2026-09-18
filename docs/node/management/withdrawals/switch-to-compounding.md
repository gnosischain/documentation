---
title: "Enable Compounding Rewards (0x01 → 0x02)"
sidebar_position: 2
---

This section covers validators that are **already running** on `0x01`. If you have not deposited yet, create the validator as `0x02` directly instead — see the [prefix overview](./withdrawals.md#check-withdrawal-credential).

Moving an existing validator from `0x01` to `0x02` is **not** a BLS‑to‑Execution change. It is an [EIP‑7251](https://eips.ethereum.org/EIPS/eip-7251) *consolidation request* whose source and target are the same validator — a **self‑consolidation** — submitted on the execution layer through the consolidation system contract. Gnosis Chain has supported it since [Pectra](../../../about/specs/hard-forks/pectra.md) (30 April 2025, epoch 1 337 856).

The following must all be true, per the consensus spec's [`is_valid_switch_to_compounding_request`](https://github.com/ethereum/consensus-specs/blob/master/specs/electra/beacon-chain.md#new-is_valid_switch_to_compounding_request) check:

* the validator is currently on `0x01` — if you are on `0x00`, do the [BLS‑to‑Execution change](./bls-to-execution-change.md) first;
* the request is sent **from the validator’s withdrawal address**, i.e. the execution address in its credentials;
* the validator is active and has not initiated an exit.

Unlike a consolidation of two *different* validators, the switch costs no churn and has no activation‑age requirement.

### Option A — the validators app (recommended)

1. Open the [validators app](https://validators.gnosischain.com/) and connect the wallet that controls your **withdrawal address**.
2. Select the validators listed as `Type 1` that you want to consolidate.
3. Choose **Consolidate** and confirm.

What happens depends on how many validators you select:

* **Select just one.** It's simply self‑consolidated — no merging, no other validator involved. You end up with the same validator, same balance, now on `0x02`.
* **Select several.** You don't need to switch each one individually first. The app designates only as many of them as *targets* — self‑consolidating each to `0x02` (or reusing one you already had on `0x02`, if it has room) — and merges the rest into those targets. A slider lets you choose how much GNO each target should hold (anywhere from 1 up to the 64 GNO cap; it defaults to 40 GNO), and the app packs validators into each target up to that amount before starting a new one. Leave it at the default and selecting, say, 10 one‑GNO validators typically produces **one** resulting `0x02` validator holding all 10 GNO, not ten separate `0x02` validators. A validator merged this way isn't separately switched to `0x02`; its balance moves into the target and it stops being an active validator of its own.

<details>
<summary>Option B — call the system contract directly (advanced, most people won't need this)</summary>
<div>

### Option B — call the system contract directly

Send a transaction from your withdrawal address to the consolidation contract:

| Field   | Value                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------- |
| `to`    | `0x0000BBdDc7CE488642fb579F8B00f3a590007251`                                                   |
| `data`  | Your validator’s 48‑byte public key **repeated twice** — 96 bytes of `source_pubkey ‖ target_pubkey` |
| `value` | The current request fee, in wei                                                                |

The fee is dynamic — it starts at 1 wei and grows with queue pressure, and a request that sends less than the current fee reverts. Read it by calling the contract with empty calldata:

```bash
# Current consolidation request fee, returned in wei (hex)
curl -s -X POST https://rpc.gnosischain.com \
     -H 'Content-Type: application/json' \
     --data '{"jsonrpc":"2.0","id":1,"method":"eth_call",
              "params":[{"to":"0x0000BBdDc7CE488642fb579F8B00f3a590007251","data":"0x"},"latest"]}'
```

Then submit the request. `<PUBKEY>` is your validator’s public key **without** the leading `0x`, written twice so that the calldata is exactly 96 bytes:

```bash
cast send 0x0000BBdDc7CE488642fb579F8B00f3a590007251 \
     --data 0x<PUBKEY><PUBKEY> \
     --value <FEE_IN_WEI> \
     --rpc-url https://rpc.gnosischain.com \
     --ledger    # or --account <keystore>, --private-key <key>
```

The signing key **must** be the validator’s withdrawal address; a request sent from any other address is silently ignored by the consensus layer.

</div>
</details>

:::info The balance above 1 GNO is not paid out
When the switch is processed, the beacon chain moves everything above 1 GNO out of the validator and immediately re‑deposits it into that same validator ([`queue_excess_active_balance`](https://github.com/ethereum/consensus-specs/blob/master/specs/electra/beacon-chain.md#new-queue_excess_active_balance)). The explorer shows this as a `SYSTEM` withdrawal followed by a new deposit — it is bookkeeping, not a payout, and there is nothing to claim.
:::

Once processed, the validator’s prefix becomes `0x02`, its maximum effective balance rises from 1 GNO to 64 GNO, and rewards compound instead of being swept.
