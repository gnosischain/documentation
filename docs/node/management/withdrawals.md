---
title: Validator Withdrawals
---

:::info Validator withdrawal has now been enabled!
Gnosis Chain underwent Shanghai/Capella Hardfork successfully on August 1, 2023 at 11:34.20 UTC, slot 10379264, epoch 648704.
:::

# What is Validator Withdrawal?

Validator withdrawal allows a validator's account balance get withdrawn from Beacon Chain to Execution Layer, in the form of GNO. The GNO will be accrued on validator's withdrawal address on the Execution Layer, which is set using `eth1_withdrawal_address` option during validator key generation.

There are 2 types of withdrawals: Partial Withdrawal and Full Withdrawal.  
**Partial Withdrawal**: Any balance in excess of 1 GNO from the account balance get withdrawn back to withdrawal address.  
**Full Withdrawal**: All the balance from validator's account get withdrawn back to withdrawal address. This has to be initiated by validator, signing [voluntary_exit](./voluntary-exit.md) message and broadcasting it to the network. It is irreversible.

## What is the difference between validator withdrawal in Gnosis Chain and Ethereum?

![](../../../static/img/node/withdrawal/GCvsETH.png)

**For users: it is the same!**

**Technically:**
Withdrawals are handled by a smart contract on Gnosis Chain

- specifically implemented for Gnosis in execution layer clients
- same contract as the deposit one
- pays out in GNO
- If there's no GNO left in the contract, withdrawals are retried whenever it's topped up
  - The failed withdrawal queue is cleared at a constant rate per slot (4-16/slot, TBD), in addition to new withdrawals.

**Reference**

1. [Gnosis Chain Withdrawals spec](https://github.com/gnosischain/specs/blob/master/execution/withdrawals.md)
2. [Withdrawal Contract](https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol)

## What action should a validator take?

### Check Withdrawal Credential

For any type of withdrawals, a validator need to have `0x01` withdrawal credential. You’re fine if you used `--eth1_withdrawal_address` to create your validator keys. If not, tooling will be made available.

There are 2 ways to check withdrawal credential of a validator:

1. Search on [https://gnosischa.in/](https://gnosischa.in/)
2. Search on deposit*m*\*.json file of your validator.

![](../../../static/img/node/withdrawal/CheckWC.png)

![](../../../static/img/node/withdrawal/deposit_json.png)

### How to change the withdrawal credential?

Tools are being developed for Gnosis Chain.
The general steps to change withdrawal credential will be:

1. Generate BLStoExecution file using tools like [ethdo](https://notes.ethereum.org/@launchpad/withdrawals-guide#BLS-to-execution-with-ethdo) or manually.

2. Post the file to the BLStoExecution pool.

```mdx-code-block
<details>
<summary>Step-by-Step tutorial</summary>
<div>
```

**Online and Offline process**

The online and offline process contains three steps.

1. Generate data on the online computer.
2. Generate change-credential.json on an offline computer.
3. Broadcast the credential change operations to the Gnosis Network.

**Prerequisite**

1. On your online computer, open a terminal and download [ethdo v1.31.0](https://github.com/wealdtech/ethdo/releases) from Github/

```
wget https://github.com/wealdtech/ethdo/releases/download/v1.31.0/ethdo-1.31.0-linux-amd64.tar.gz
```

2. Extract ethdo

```
tar -xvf ethdo-1.31.0-linux-amd64.tar.gz
```

3. Check that ethdo is installed correctly by running

```
./ethdo --help
```

**Step 1: Obtain `offline-preparation.json` file**

1. Connect to your consensus node, and generate `offline-preparation.json`

```
./ethdo --connection=http://localhost:<Beacon_Node_Port> validator credentials set --prepare-offline
```

Check the port of your consensus node, i.e. Lighthouse's default http port is 5052.  
An `offline-preparation.json` file will be created.

2. Copy the `offline-preparation.json` file and ethdo software into a USB.

**Step 2: Generate `change-operations.json` file offline**

1. Use the file you've copied into the USB and run the following command on an offline computer.

   Make sure your `offline-preparation.json` is at the same directory where ethdo software is running.

```
./ethdo validator credentials set --offline --mnemonic="abandon abandon abandon … art" --withdrawal-address=0x0123…cdef
```

Replace `mnemonic` with the validator's mnemonic and `withdrawal-address` with a gnosis address for your validator's withdrawal reward.
A `change-operations.json` file will be created.

2. Copy the `change-operations.json` file from offline computer to an online computer.

**Step 3: Broadcast `change-operations.json` to the network**  
There are two ways to broadcast the operations:  
i. Using UI  
ii. Using curl to broadcast the data to your beacon node(advanced)

**Using UI:**

Upload `change-operations.json` to https://gnosischa.in/tools/broadcast, and click 'Submit & Broadcast'.  
![](../../../static/img/node/withdrawal/changeWithdrawalCredentialBroadast.png)

**Using curl**  
This option is only recommended for advanced user. Please use it at your own risk.

1. Open a terminal, navigate to the same directory as you store your `change-operations.json`.
   Make sure to change the beacon_node_port according to your consensus client.  
   Run the following command.

```
curl -d @change-operations.json -H "Content-Type: application/json"  -X POST http://127.0.0.1:<beacon_node_port>/eth/v1/beacon/pool/bls_to_execution_changes
```

```mdx-code-block
</div>
</details>
```

![](../../../static/img/node/withdrawal/conversion_tool.png)

**Reference**

1. [Changing withdrawal credential by ethdo](https://github.com/wealdtech/ethdo/blob/master/docs/changingwithdrawalcredentials.md)
2. [BLS to execution with ethdo](https://notes.ethereum.org/@launchpad/withdrawals-guide#BLS-to-execution-with-ethdo)
3. [BLS To Execution Change from Ethereum](https://launchpad.ethereum.org/en/btec/#broadcast-message)
4. [Teku's postBlsToExecutionChange API ](https://consensys.github.io/teku/#tag/Beacon/operation/postBlsToExecutionChange)

### Update your clients

Please refer to #Update your client section above.

# How to withdraw?

## Partial Withdrawal

As we have modified some specs regarding the withdrawals to enable withdrawing GNO instead of the native gas token xDai, unlike Ethereum, partial withdrawals currently do not happen automatically. So, for now, you will need to call [`claimWithdrawal`](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) function on the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract). However, it is in our plans to automate and subsidize partial withdrawals in the future.

## Full Withdrawal

Similar to [Partial Withdrawal](#partial-withdrawal), GNO will not be withdrawn back to the validator's withdrawal address automatically.
After initiating [voluntary exit](./voluntary-exit.md), you will need to call [`claimWithdrawal`](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) function on the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract) to receive all the GNO from your validator account.

:::info
Navigate to https://gnosischa.in/validators/withdrawals to search for the withdrawal status of your validator.
Please note that even if your validator is shown in the withdrawal list, you will still need to call `claimWithdrawal` to claim the GNO.
:::

## Reference

1. [Gnosis Validator Meetup #5: Shanghai/Capella Upgrade](https://www.youtube.com/watch?v=6G7CmTHTor0)
