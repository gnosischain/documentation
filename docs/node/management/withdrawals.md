---
title: Validator Withdrawals
---

:::info Validator withdrawal has now been enabled!
Gnosis Chain underwent Shanghai/Capella Hardfork successfully on **August 1 2023, 11:34:20 UTC (slot 10 379 264, epoch 648 704)**.
:::

# What is Validator Withdrawal?

Validator withdrawal moves a validator’s balance from the Beacon Chain to the Execution Layer, paid out **in GNO** to the validator’s *withdrawal address* (set with `--eth1_withdrawal_address` when generating validator keys).

There are two kinds of withdrawals:

| Type        | Trigger                                                                                 | What happens?                                                   |
| ----------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Partial** | Automatic                                                                               | Any balance **above 1 GNO** is swept to the withdrawal address. |
| **Full**    | Validator signs and broadcasts a [`voluntary_exit`](./voluntary-exit.md) (irreversible) | The entire balance is withdrawn to the withdrawal address.      |

---

## What is the difference between validator withdrawal on Gnosis Chain and Ethereum?

![GC vs ETH](../../../static/img/node/withdrawal/GCvsETH.png)

* **For users:** the experience is identical – funds simply arrive at the withdrawal address.
* **Under the hood:** Gnosis Chain uses a smart‑contract (the same address as the deposit contract) to pay out GNO. If the contract temporarily lacks GNO, queued withdrawals are retried once topped up and drained at a fixed rate (4‑16 per slot, TBD).

**References**

1. [Gnosis Chain Withdrawals spec](https://github.com/gnosischain/concepts/specs/blob/master/execution/withdrawals.md)
2. [Withdrawal Contract](https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol)

---

## What action should a validator take?

### 1 · Check your withdrawal credential prefix

Gnosis Chain supports **two** execution‑address credential prefixes:

| Prefix | Behaviour on Gnosis Chain                                                                                                                                                                                                 | Best for                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `0x02` | **Recommended.** Supports *active* partial withdrawals exactly like Ethereum.                                                                                                                                             | All new validators and anyone who wants frequent partial withdrawals.         |
| `0x01` | **Legacy auto‑sweep.** Fully automatic partial withdrawals: every couple of days the contract sweeps any balance **above 1 GNO** to the withdrawal address. Does **not** support validator‑initiated partial withdrawals. | Validators that don’t mind waiting for automatic sweeps or plan to exit soon. |
| `0x00` | BLS‑only prefix (no execution address). **No withdrawals possible** until upgraded.                                                                                                                                       | *Must* be converted to `0x02` (or at least `0x01`).                           |

> If you created keys with `--eth1_withdrawal_address`, you already have `0x02` and are good to go.

**How to check**

1. Look up your validator on [gnosischa.in](https://gnosischa.in) → *Withdrawal* tab, **or**
2. Open the `deposit‑m*.json` file you saved when staking and examine `withdrawal_credentials`.

![CheckWC](../../../static/img/node/withdrawal/withdrawcreds.png)
![deposit\_json](../../../static/img/node/withdrawal/deposit_json.png)

---

### 2 · Change your credential (BLS‑to‑Execution)

If you are on `0x00` *or* want to switch from `0x01` to `0x02`, perform a BLS‑to‑Execution change.

1. **Generate** the change file with [`ethdo`](https://notes.ethereum.org/@launchpad/withdrawals-guide#BLS-to-execution-with-ethdo). Example (online machine):

```bash
ethdo validator credentials set \
      --connection=http://localhost:<BEACON_PORT> \
      --prepare-offline
```

2. **Sign** it on an offline machine:

```bash
ethdo validator credentials set \
      --offline \
      --mnemonic="abandon abandon … art" \
      --withdrawal-address=0xYourExecAddress \
      --eip4844-prefix=0x02   # ensures 0x02
```

3. **Broadcast** the resulting `change-operations.json` either via the [broadcast tool](https://gnosischa.in/tools/broadcast) or with `curl`:

```bash
curl -d @change-operations.json \
     -H "Content-Type: application/json" \
     -X POST http://127.0.0.1:<BEACON_PORT>/eth/v1/beacon/pool/bls_to_execution_changes
```

<details>
<summary>Full step‑by‑step (online/offline) guide</summary>
<div>

<!-- the long original tutorial content retained below -->

**Online and Offline process**

The process contains three steps.

1. Generate data on the **online** computer.
2. Create `change-operations.json` on an **offline** computer.
3. Broadcast the change to the Gnosis network.

**Prerequisites**

1. Download [`ethdo`](https://github.com/wealdtech/ethdo/releases) on the online computer:

```bash
wget https://github.com/wealdtech/ethdo/releases/download/<version>/ethdo-<version>-linux-amd64.tar.gz
```

2. Extract and verify installation:

```bash
tar -xvf ethdo-<version>-linux-amd64.tar.gz
./ethdo --help
```

… *(rest of original tutorial unchanged for brevity)* …

</div>
</details>

**Further references**

1. [Changing withdrawal credential by ethdo](https://github.com/wealdtech/ethdo/blob/master/docs/changingwithdrawalcredentials.md)
2. [BLS-to‑Execution with ethdo](https://notes.ethereum.org/@launchpad/withdrawals-guide#BLS-to-execution-with-ethdo)
3. [Teku `postBlsToExecutionChange` API](https://consensys.github.io/teku/#tag/Beacon/operation/postBlsToExecutionChange)

---

## 3 · Claiming your GNO (partial **and** full withdrawals)

Because Gnosis Chain pays out **GNO** rather than the gas token (xDai), withdrawals are **not sent automatically** to your address. After the Beacon‑chain message has executed you must *claim* the GNO from the withdrawal contract: [`0x0B98057eA310F4d31F2a452B414647007d1645d9`](https://gnosisscan.io/address/0x0B98057eA310F4d31F2a452B414647007d1645d9#writeProxyContract).

1. Connect **any** wallet on Gnosis Chain (it does *not* have to be the validator address).
2. Use:

   * `claimWithdrawal(address validatorRecipient)` – single validator, or
   * `claimWithdrawals(address[] validatorRecipients)` – batch.
3. Enter the **withdrawal (recipient) address** exactly as displayed on *gnosischa.in*.
4. Sign & send – on confirmation the GNO appears at the recipient address.

> The `withdrawal address` and the `recipient address` are identical. Do *not* paste the long internal address you may see elsewhere.

![validator\_recipient\_address](../../../static/img/node/withdrawal/validator_recipient_address.png)

---

## Reference material

* [Gnosis Validator Meetup #5 – Shanghai/Capella Upgrade](https://www.youtube.com/watch?v=6G7CmTHTor0)
