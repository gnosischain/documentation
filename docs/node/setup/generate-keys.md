---
description: Generate Keys
---

# Generate Keys


**Generate Validator Account(s) and Deposit Data- Gnosis or Chiado Testnet**

	 	 	 	

1. **Download Key Generator**


```
cd
docker pull ghcr.io/gnosischain/validator-data-generator:latest

```



2. **Generate Keys 1<sup>st</sup> time**

	• `new-mnemonic` to generate a new seed, or `existing-mnemonic` for an existing seed you own.

	• `NUM`: The number of signing keys (validators) to generate.

	• `WITHDRAWAL_ADDRESS`: Use this parameter to provide a regular Gnosis 0x address for mGNO withdrawal. This parameter can also be omitted to generate withdrawal credentials with the mnemonic-derived withdrawal public key in the EIP-2334 format (Eth2 address format). Withdrawals will not be available until after the merge.

	• `/path/to/`: should be replaced with a valid and existing path where you want to create the validator_keys folder. Or, to create the validator_keys folder in your current working directory, use $(PWD)/validator_keys:/app/validator_keys

	• More details about command line arguments can be found [here](https://github.com/gnosischain/validator-data-generator/).

:::note
The validator data generator defaults to gnosis, should you wish to create keys for chiado you must add the following flag `--chian chiado` to the docker run command. 
:::


```
docker run -it --rm -v /path/to/validator_keys:/app/validator_keys \
  ghcr.io/gnosischain/validator-data-generator:latest new-mnemonic \
  --num_validators=NUM --mnemonic_language=english \
  --folder=/app/validator_keys --eth1_withdrawal_address=WITHDRAWAL_ADDRESS
```
Example command

```
docker run -it --rm -v /home/glc/validator_keys:/app/validator_keys \
  ghcr.io/gnosischain/validator-data-generator:latest new-mnemonic \
  --num_validators=10 --mnemonic_language=english \
  --folder=/app/validator_keys –eth1_withdrawal_address=0xf3bF9DDbA413825E5DdF92D15b09C2AbD8d190dd
```


Choose a secure password and confirm. It should be at least 8 characters. You will see a mnemonic seed phrase. Write down and store your password and mnemonic safely offline.

![](/img/node/mnemonic.png)

:::caution
Your seed phrase is the ONLY way to recover your GNO, ensure this is written down securely, ensure your decrypt key (password.txt) is also backed up
:::

3. **Decrypt key for validator:**

you will need to create a `password.txt` file which contains your password created in Step 2. 

:::caution
Ensure that the password is Exactly the same as input for Step 2, or this will lead to errors when running.
::: 



4. **Import Keys to Validator Node**

Following execution of Step 3, the path you defined for `/path/to/validator_keys` will contain the keystores and `deposit_data*.json` file.

You now need to Import your validator keys to your CL (see validator import section of your chosen client) to do this you will need to move your **keystores** and `password.txt` to the CL client directory (directory specified in validator import).

:::caution
Backup keystores: at this stage it is advised to backup your keystores and deposit data.json
:::


**Generating more Keys **

should you wish to add more validators at a later stage you need to use the `--validator_start_index` from the last key generated under the same seed, if you generated 10 keys and wish to add more your start index is 10.


example command

```
docker run -it --rm -v /path/to/validator_keys:/app/validator_keys \
  ghcr.io/gnosischain/validator-data-generator:latest existing-mnemonic \
  --validator_start_index=10 --num_validators=10 \
  --folder=/app/validator_keys --eth1_withdrawal_address=0xf3bF9DDbA413825E5DdF92D15b09C2AbD8d190dd
```