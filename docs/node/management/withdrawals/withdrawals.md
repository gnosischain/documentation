---
title: Validator Withdrawals
slug: /node/management/withdrawals
---

:::info Validator withdrawal has now been enabled!
Gnosis Chain underwent Shanghai/Capella Hardfork successfully on **August 1 2023, 11:34:20 UTC (slot 10 379 264, epoch 648 704)**.
:::

# What is Validator Withdrawal?

Validator withdrawal moves a validator’s balance from the Beacon Chain to the Execution Layer, paid out **in GNO** to the validator’s *withdrawal address* — the execution address recorded in the validator’s withdrawal credentials.

There are three kinds of withdrawals:

| Type                          | Trigger                                                                                                                                                       | What happens?                                                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Partial — automatic sweep** | Automatic                                                                                                                                                     | Any balance above the validator’s maximum effective balance (**1 GNO** with `0x01`, **64 GNO** with `0x02`) is swept to the [deposit contract](./claiming-your-gno.md), ready to claim. |
| **Partial — on request**      | The withdrawal address submits an [EIP‑7002](https://eips.ethereum.org/EIPS/eip-7002) withdrawal request. **Requires `0x02` credentials.**                     | The requested amount is queued and swept to the deposit contract, ready to claim, down to the 1 GNO activation minimum.                                                                |
| **Full**                      | Validator signs and broadcasts a [`voluntary_exit`](../voluntary-exit.md), or the withdrawal address submits an EIP‑7002 full‑exit request (both irreversible) | The entire balance is swept to the deposit contract, ready to claim. See [timing](./claiming-your-gno.md#how-long-does-it-take) for what to expect.                                                                                        |

---

## What is the difference between validator withdrawal on Gnosis Chain and Ethereum?

![GC vs ETH](../../../../static/img/node/withdrawal/GCvsETH.png)

* **For users:** the experience is identical – funds simply arrive at the withdrawal address.
* **Under the hood:** Gnosis Chain uses a smart‑contract (the same address as the deposit contract) to pay out GNO. If the contract temporarily lacks GNO, queued withdrawals are retried once topped up and drained at a fixed rate (4‑16 per slot, TBD).

**References**

1. [Gnosis Chain Withdrawals spec](https://github.com/gnosischain/concepts/specs/blob/master/execution/withdrawals.md)
2. [Withdrawal Contract](https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol)

---

## 1 · Check your withdrawal credential prefix {#check-withdrawal-credential}

The first byte of a validator’s `withdrawal_credentials` is its *withdrawal prefix*. Three prefixes exist on Gnosis Chain:

| Prefix | Behaviour on Gnosis Chain                                                                                                                                                                                                                                                                                                              | Max effective balance |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `0x02` | **Compounding — recommended.** Rewards stay in the validator and compound instead of being swept away. Supports validator‑initiated partial withdrawals ([EIP‑7002](https://eips.ethereum.org/EIPS/eip-7002)) and can be the target of a consolidation. Can be set at deposit time or switched to later. Available since the [Pectra upgrade](../../../about/specs/hard-forks/pectra.md) (30 April 2025). | **64 GNO**            |
| `0x01` | **Execution address, auto‑sweep.** Any balance above 1 GNO is automatically swept to the deposit contract on a rolling basis, ready to claim. Rewards do **not** compound, and validator‑initiated partial withdrawals are **not** available.                                                                                                         | 1 GNO                 |
| `0x00` | **BLS‑only** — no execution address is set, so **no withdrawals are possible** until you upgrade to `0x01`.                                                                                                                                                                                                                             | 1 GNO                 |

**Why `0x02` exists:** the `0x01` sweep is automatic, but it is also unavoidable — it forces everything above 1 GNO out of the validator, so those rewards stop earning. [EIP‑7251](https://eips.ethereum.org/EIPS/eip-7251) raises the ceiling to 64 GNO so rewards compound in place, lets a single validator hold what previously needed 64 of them, and replaces the forced sweep with withdrawals you request when you actually want them.

:::warning `--eth1_withdrawal_address` does not tell you your prefix on its own
In the [ETHstaker Deposit CLI](https://deposit-cli.ethstaker.cc/) — the tool used in the [key generation guide](../../manual/validator/generate-keys/cli/README.md) — `--eth1_withdrawal_address` is only an alias for `--withdrawal_address`. Which prefix you ended up with depends on the tool and the version:

| How the keys were generated                                                                          | Prefix |
| ---------------------------------------------------------------------------------------------------- | ------ |
| ETHstaker Deposit CLI **v1.2.0 or later** (April 2025) with a withdrawal address — compounding is the default | `0x02` |
| ETHstaker Deposit CLI v1.1.0, or any version run with `--regular_withdrawal`                         | `0x01` |
| Ethereum `staking-deposit-cli`, Wagyu Key Gen, or the legacy `validator-data-generator`              | `0x01` |
| No withdrawal address supplied at all                                                                | `0x00` |

Don’t assume — read the credential itself, as described below.
:::

:::tip New validators can be created as `0x02` directly
You do **not** have to deposit as `0x01` and convert afterwards. The ETHstaker Deposit CLI generates compounding deposit data for Gnosis directly, and the deposit contract has accepted the variable deposit amounts that `0x02` allows since its [`batchDeposit` upgrade](../../../bridges/management/decisions.md) (2 May 2025):

```shell
./deposit new-mnemonic --chain gnosis \
          --withdrawal_address 0xYourExecAddress \
          --compounding \
          --amount 64
```

On Gnosis, `--amount` is denominated in **GNO**: it defaults to the 1 GNO activation minimum and can go up to 64 GNO. Use [`partial-deposit`](https://deposit-cli.ethstaker.cc/partial_deposit.html) to top a validator up later.
:::

**How to check**

1. Look up your validator on the [Beacon chain explorer](https://beaconchain.gnosischain.com/) → *Withdrawal* tab, **or**
2. Open the [validators app](https://validators.gnosischain.com/) and read the *Type* column (`Type 1` = `0x01`, `Type 2` = `0x02`), **or**
3. Open the `deposit‑m*.json` file you saved when staking and examine `withdrawal_credentials` — the first byte is the prefix.

![CheckWC](../../../../static/img/node/withdrawal/withdrawcreds.png)
![deposit\_json](../../../../static/img/node/withdrawal/deposit_json.png)

---

## 2 · What should I do next?

* **Still on `0x00`?** [Enable withdrawals](./bls-to-execution-change.md) — a one‑time step to attach an execution withdrawal address, using `ethstaker-deposit-cli`.
* **On `0x01` and want compounding rewards / partial withdrawals on request?** [Enable compounding rewards](./switch-to-compounding.md) (`0x01` → `0x02`) via the validators app or a direct contract call.
* **Already exited, or have a balance sitting in the deposit contract?** Head to [claiming your GNO](./claiming-your-gno.md) — plus how long the whole process typically takes.

---

## Reference material

* [Gnosis Validator Meetup #5 – Shanghai/Capella Upgrade](https://www.youtube.com/watch?v=6G7CmTHTor0)
