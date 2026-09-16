---
title: "Enable Withdrawals (0x00 → 0x01)"
sidebar_position: 1
---

If your validator is still on `0x00`, a one‑time **BLS‑to‑Execution change** attaches an execution withdrawal address to it. Not sure which prefix you're on? Check the [prefix table](./withdrawals.md#check-withdrawal-credential) first.

:::note This step can only produce `0x01`
A `BLSToExecutionChange` requires the current prefix to be `0x00` and always writes the `0x01` prefix — see [`process_bls_to_execution_change`](https://github.com/ethereum/consensus-specs/blob/master/specs/capella/beacon-chain.md#new-process_bls_to_execution_change) in the consensus specs. It cannot produce `0x02`, and it cannot be applied to a validator that is already on `0x01`. To end up on `0x02`, complete this step first and then [switch to compounding](./switch-to-compounding.md).
:::

:::tip Recommended tool: ethstaker-deposit-cli
This is the same tool most validators already used to generate their keys (see the [Command Line Tool](../../manual/validator/generate-keys/cli/) page), now extended with a `generate-bls-to-execution-change` command. It natively understands the `gnosis` and `chiado` networks (correct fork version and genesis validators root built in), so there's no need for the offline/online two-machine dance or fork-version guesswork that `ethdo` requires. `ethdo` still works and is kept as a fallback below, but for most validators this is the simpler path.
:::

### Prerequisites

* The 24‑word mnemonic used to generate this validator's keys.

  :::danger Never share your mnemonic
  Your mnemonic can derive every key controlled by it, so anyone who obtains it can steal your funds — this is true for the tool used in this step just as much as for `ethdo`, or any other tool. Only ever type it into a tool running on a machine you control (offline/air‑gapped, ideally), never into a website or an app you didn't verify yourself, and never share it with anyone claiming to help you "support", "validate", or "fix" your validator.
  :::

* Your validator's **index**. Look your validator up on the [Beacon chain explorer](https://beaconchain.gnosischain.com/) (search by its public key) — the number in the page title, e.g. "Validator 2190", is its index. The [validators app](https://validators.gnosischain.com/) shows the same number in its **Index** column.
* Your validator's current **`0x00` withdrawal_credentials** (the full value, not just the prefix) — used only to verify locally that you're operating on the right key; it is never transmitted anywhere. The most reliable source is the `deposit_data-*.json` (or `deposit-m*.json`) file you saved when you originally staked — its `withdrawal_credentials` field is the complete, untruncated value. The explorer's *Deposits* tab also shows it (under "Your current withdrawal credentials are: …"), but often truncated for display — the JSON file is the safer source to copy from.
* The **execution address** you want withdrawals paid to. Use an address you fully control — a hardware wallet is strongly recommended. **Never use an exchange address**: this change is irreversible.
* Ideally, do this on an offline/air‑gapped machine — the command needs your mnemonic.

### Step A — Get the tool

If you still have the `ethstaker-deposit-cli` folder you used to generate your validator keys, skip ahead to Step B — it's the same binary.

Otherwise, go to the [ETHstaker Deposit CLI releases page](https://github.com/ethstaker/ethstaker-deposit-cli/releases). The entry at the very top is the latest version. Its downloadable files are listed under **Assets** — on GitHub this list is collapsed by default, so click the word **Assets** (or the small triangle next to it) to expand it.

You'll see a handful of files named like `ethstaker_deposit-cli-<version>-<os>-<arch>.tar.gz` (or `.zip` for Windows). Pick the one matching your computer:

| Your computer               | File to click              |
| ---------------------------- | --------------------------- |
| Windows                      | `...-windows-amd64.zip`     |
| macOS, Apple Silicon (M1/M2/M3/M4) | `...-darwin-arm64.tar.gz` |
| macOS, Intel                  | `...-darwin-amd64.tar.gz`  |
| Linux, Intel/AMD              | `...-linux-amd64.tar.gz`   |
| Linux, ARM                    | `...-linux-arm64.tar.gz`   |

Ignore the matching `.sha256` file next to each — that's only needed if you want to verify your download wasn't corrupted.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

- Back on the [releases page](https://github.com/ethstaker/ethstaker-deposit-cli/releases), under **Assets**, click the filename you identified above to download it — or from a terminal (replace the URL with the one for your OS/arch):
    ```shell
    wget https://github.com/ethstaker/ethstaker-deposit-cli/releases/download/<version>/<FILE_NAME>.tar.gz
    ```
- Extract it:
    ```shell
    tar -xvf <FILE_NAME>.tar.gz
    ```
- Move into the extracted folder — this is where the `./deposit` program lives:
    ```shell
    cd ethstaker_deposit-cli-...
    ```

</TabItem>
<TabItem value="win">

- Back on the [releases page](https://github.com/ethstaker/ethstaker-deposit-cli/releases), under **Assets**, click the `...-windows-amd64.zip` file to download it, then extract the zip (right‑click it → *Extract All...*).
- Open a terminal (PowerShell or Command Prompt) in the extracted folder — this is where `deposit.exe` lives. In File Explorer, you can `Shift + right‑click` inside the folder and choose *Open PowerShell window here*.

</TabItem>
</Tabs>

### Step B — Run the tool and answer its questions

Launch it, telling it up front which network you're on (this saves you one generic prompt about "mainnet or testnet"):

```bash
./deposit generate-bls-to-execution-change --chain gnosis
```

Use `--chain chiado` instead if you're testing this on the Chiado testnet. On Windows, replace `./deposit` with `deposit.exe`.

The tool will then ask you a short series of questions, one at a time. Here is exactly what to expect and what to type at each one:

1. `Please enter your mnemonic separated by spaces (" ")...`
   Type the 24‑word mnemonic you used to generate **this validator's** keys, separated by spaces, then press Enter. This is processed entirely on your machine and is never sent anywhere — which is exactly why you should be doing this on an offline computer if at all possible.

2. `Please enter the index position for the keys to start generating withdrawal credentials in ERC-2334 format. [0]:`
   This is *not* your beacon‑chain validator index — it's the position in your mnemonic's derivation path (the order you generated keys in). If this validator was the first (or only) one you ever generated from this mnemonic, just press Enter to accept the default `0`.

3. `Please enter a list of the validator index number(s) of your validator(s) as identified on the beacon chain...`
   This *is* the number from the Prerequisites above — the index shown on the [Beacon chain explorer](https://beaconchain.gnosischain.com/). Type it and press Enter. If you're doing several validators at once, separate the indices with commas or spaces, e.g. `1234, 1235`.

4. `Please enter a list of the old BLS withdrawal credentials of your validator(s)...`
   Paste the `0x00…` value from the Prerequisites above, in the **same order** as the indices you just entered. The tool uses this only to double‑check, locally, that the mnemonic you typed actually matches this validator — it will refuse to continue if it doesn't.

5. `Please enter the withdrawal address. Note that you CANNOT change it once you have set it on chain.:`
   Type the execution address you want withdrawals paid to — one you fully control. A hardware wallet is strongly recommended; **never enter an exchange address**. The tool will print a warning reminding you this can't be changed later.

6. `Repeat your withdrawal address for confirmation.:`
   Type the exact same address again.

The tool then re‑derives your keys locally to verify everything matches, and finishes with:

```
Success!
Your SignedBLSToExecutionChange JSON file can be found at: ./bls_to_execution_changes
```

### Step C — Verify before broadcasting

Open the generated `bls_to_execution_change-<index>.json` file and check, before doing anything else with it:
   * `message.validator_index` matches the validator you intended to change.
   * `message.to_execution_address` matches the address you fully control.

### Step D — Broadcast

This step is public and irreversible. Either:

   * Paste/upload the file to the [Gnosis broadcast tool](https://beaconchain.gnosischain.com/tools/broadcast), **or**
   * Submit it to any beacon node you have API access to:

   ```bash
   curl -X POST -H "Content-Type: application/json" \
        -d @bls_to_execution_changes/bls_to_execution_change-<index>.json \
        http://127.0.0.1:<BEACON_PORT>/eth/v1/beacon/pool/bls_to_execution_changes
   ```

### Step E — Confirm

Look your validator up again on the [Beacon chain explorer](https://beaconchain.gnosischain.com/) — `withdrawal_credentials` should now read `0x01` followed by your execution address. Propagation is typically near‑instant; any balance already above 1 GNO will be swept to the deposit contract on the next sweep cycle, ready to [claim](./claiming-your-gno.md).

<details>
<summary>Show the <code>ethdo</code> alternative</summary>
<div>

### Prefer ethdo? (alternative method)

`ethdo` also supports BLS‑to‑execution changes, but requires an online step to fetch `--prepare-offline` state and a separate offline machine to sign, and needs the correct Gnosis fork version supplied manually. It can only ever produce `0x01` credentials too — there is no `0x02`/compounding flag for this command, regardless of what you may have read elsewhere.

1. **Generate** `offline-preparation.json` on your **online** machine:

```bash
ethdo validator credentials set \
      --connection=http://localhost:<BEACON_PORT> \
      --prepare-offline
```

2. **Sign** it on an **offline** machine — copy `offline-preparation.json` across first; `ethdo` writes `change-operations.json` next to it:

```bash
ethdo validator credentials set \
      --offline \
      --mnemonic="your 24 word mnemonic" \
      --withdrawal-address=0xYourExecAddress
```

3. Broadcast the resulting `change-operations.json` the same way as in Step D above.

See the [ethdo changing‑withdrawal‑credentials guide](https://github.com/wealdtech/ethdo/blob/master/docs/changingwithdrawalcredentials.md) for full detail.

</div>
</details>

---

## Reference material

* [ethstaker-deposit-cli releases](https://github.com/ethstaker/ethstaker-deposit-cli/releases)
* [ethdo changing‑withdrawal‑credentials guide](https://github.com/wealdtech/ethdo/blob/master/docs/changingwithdrawalcredentials.md) (fallback method)
