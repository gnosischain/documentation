---
---

# Client Setup

## Setup Summary

Before you begin the setup, please check the [Validator Requirements and Responsibilities](/validators/get-started/responsibilities) and [Technical Requirements](/validators/get-started/technical-requirements) for your node.

When you are ready, you will perform the following steps to get things up and running.

:::caution
**Optional:**  [Setup and run a Gnosis Chain Node](/validators/client/nethermind-node-setup): This step is for experienced node runners only. To begin, it is not needed but will be encouraged for the merge. Instructions below include a default option to connect to the public RPC.
:::

1. [Generate Validator Keystores and Deposit Data](#step-1-generate-validator-accounts-and-deposit-data): On an offline machine, generate up to 128 separate validator keys per node.
2. [Choose your Gnosis Beacon Chain (GBC) Client:](#step-2-choose-your-beacon-chain-client--import-validator-keys) Choose to run either Prysm, Lighthouse or Nimbus. Add keystores and env variables.
3. [Start up your GBC Node](#step-3-run-the-beacon-chain-node-with-the-attached-validator-process): Run in the docker container.
4. [Deposit to your Validator(s)](/validators/operations/): Use the Deposit UI to convert GNO to mGNO (metaGNO for staking) and deposit to your validator.
5. [View on Explorer](/validators/operations/#view-your-validator): Wait \~1.5-2 hours for your validator(s) to go live and view at [https://beacon.gnosischain.com](https://beacon.gnosischain.com).

### **Requirements:**

* Terminal access on your node and cli familiarity
* [MetaMask](https://metamask.io) (or equivalent) connected to the Gnosis Chain with 1 GNO per validator and a small amount of xDai for transaction costs.
* Recent [Docker](https://www.docker.com) version (Docker v20.10+)
* Docker compose 2.2.3 (_note default version installed with apt-get may give an error_). To fix:

```
sudo apt-get remove docker-compose 
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose 
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

### Additional Options:

:::tip Hardware Solutions
If preferred, you can use pre-configured hardware to easily run a node with minimal setup.

* **DappNode** supports the Gnosis Beacon Chain! To use services for validation, please see the [guide and instructions here.](https://forum.dappnode.io/t/how-to-setup-a-gnosis-beacon-chain-gbc-validator-on-dappnode/1351)
* [**Avado**](https://ava.do) offers an out-of-the-box validator solution.

Otherwise, proceed to the steps below to setup, run, and deposit to your validators.
:::

:::tip Easy Guide
If you prefer a beginner-friendly walkthrough from start to finish, this excellent deployment guide from community member [GLCStaked](https://twitter.com/GLCstaked) goes in-depth on setting up your environment, firewalls and explains commands in more detail. The guide uses Nethermind + Lighthouse.

> [Easy Guide to Running a Gnosis Validator ](https://mirror.xyz/0xf3bF9DDbA413825E5DdF92D15b09C2AbD8d190dd/wkE51RqApadbSW1GQartYJ5Jz71mnz2y60TNu3XNtNM)
:::

## Step 1) Generate Validator Account(s) and Deposit Data

:::caution
The following processes use [Docker](https://www.docker.com) to generate keystores and spin up clients. Please check that you are running a recent version. For key generation, binaries are also available.
:::

:::note
We highly recommend generating keystores on a safe, completely offline device. To do so, you will need to connect online to pull the docker image-step 1), then disconnect to proceed with key generation (step 2), then finally save your deposit\_data.json file (step 3) to a usb key or other transfer method that does not require online connection.

Securely backup your mnemonic, keystores, and password and keep in a safe place.
:::

1.  Pull the docker image for the data generator.

    ```
    docker pull ghcr.io/gnosischain/validator-data-generator:latest
    ```
2. If this is your first time running the process and there is no an existing mnemonic to generate keystores and deposit data, replace the variables below with your info then run the command.\
   __
   1. `NUM` The number of signing keys (validators) to generate.
   2. `START_NUM` Index for the first validator key. If this is the first time generating keys with this mnemonic, use 0. If keys were previously generated with this mnemonic, use the subsequent index number (eg, if 4 keys have been generated before (keys #0, #1, #2, #3, then enter 4 here).
   3. `WITHDRAWAL_ADDRESS`  Use this parameter to provide a regular Gnosis Chain `0x` address for mGNO withdrawal. This parameter can also be omitted to generate withdrawal credentials with the mnemonic-derived withdrawal public key in the [EIP-2334 format](https://eips.ethereum.org/EIPS/eip-2334#eth2-specific-parameters) (Eth2 address format). Withdrawals will not be available until after the merge.
   4. `/path/to/` should be replaced with a valid and existing path where you want to create the validator\_keys folder. Or, to create the validator\_keys folder in your current working directory, use `$(PWD)/validator_keys:/app/validator_keys`
   5. More details about command line arguments can be found[ here.](https://github.com/gnosischain/validator-data-generator/)

```
docker run -it --rm -v /path/to/validator_keys:/app/validator_keys \
  ghcr.io/gnosischain/validator-data-generator:latest new-mnemonic \
  --num_validators=NUM --mnemonic_language=english \
  --folder=/app/validator_keys --eth1_withdrawal_address=WITHDRAWAL_ADDRESS
```

3\. If you have run the process before, you can prompt the mnemonic during execution:

```
docker run -it --rm -v /path/to/validator_keys:/app/validator_keys \
  ghcr.io/gnosischain/validator-data-generator:latest existing-mnemonic \
  --validator_start_index=START_NUM --num_validators=NUM \
  --folder=/app/validator_keys --eth1_withdrawal_address=WITHDRAWAL_ADDRESS
```

4\.  Choose a secure password and confirm. It should be at least 8 characters. You will see a mnemonic seed phrase. Write down and store your pwd and mnemonic safely offline.

![](/img/validators/mnemonic.png)

Following execution, the path you defined for `/path/to/validator_keys` will contain the keystores and `deposit_data*.json` file.

:::caution
Note: The output will be "Success! Your keys can be found at: /app/validator\_keys/validator\_keys". However, **the validator\_keys folder will be located wherever you set `path/to/`**
:::

:::note
_`Want to learn more about Ethereum 2.0 keys and key generation?`_ 💡[Learn more](#chain-currently-in-beta-deployment)
:::

## Step 2) Choose Your Beacon Chain Client & Import Validator Keys

:::note
To begin, determine which client you want to run, [Lighthouse](https://lighthouse.sigmaprime.io), [Prysm](https://prysmaticlabs.com) or [Nimbus](https://nimbus.guide/intro.html). Instructions differ for the 3 clients, **see below for instructions related to each implementation.**

Make sure your machine conforms to the [Technical Requirements](/validators/get-started/technical-requirements#beacon-chain-node-requirements) for running a node, including opening the following pair of ports:

* **12000 UDP, 13000 TCP**
:::

### Prysm

The Prysm client has been modified slightly. The underlying go-ethereum library used for execution layer block hash calculation is adapted to account for a different block structure. No other changes are made to the client, however, **the original Prysm binary will not work as expected for the Gnosis Chain - use the binary below**.

1. Go to a root directory where the node configuration and data will be stored. E.g. `cd /opt`.
2.  Clone the repo that includes the required configs.

    ```
    git clone https://github.com/gnosischain/prysm-launch.git gbc
    ```
3. Switch to the cloned directory: `cd gbc`.
4. Copy the validator keystore files generated in _Step 1_ to the `keys/validator_keys` directory. **Keystores should only be used on a single node.**\
   ****_Note: Depending on your setup, you may need to_ [_change file ownership parameters_](https://linuxize.com/post/chmod-command-in-linux/) _to copy keys._
5. Write the keystore password from Step 1 to  `keys/keystore_password.txt` file (create this file).
6. Generate a wallet password and place it in  `./keys/wallet_password.txt`. Create a strong password (1 uppercase, 1 number, 1 special character, at least 8 characters long) using any password generation method and save it as `wallet_password.txt`. This password will be used by Prysm to access the validator's private keys following the import. [More info](https://docs.prylabs.network/docs/wallet/nondeterministic/#usage)
7. Create an `.env` file from the example at `.env.example` (note the `.` in front makes it hidden, either enable hidden files or use `ls -la` to find). \
    \
   Fill in the valid external `PUBLIC_IP` __ address of your node, this will help other peers find you.
   1. Use the `curl ifconfig.me ; echo ''` command to get the IP of your node.
   2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/validators/client/connect-to-a-gc-node) **** rather than the public RPC.\

8.  Run the following command to import all added keystore files:

    ```
    docker-compose up validator-import; docker-compose down
    ```

### Lighthouse

The Lighthouse client natively supports Gnosis Beacon Chain. Further instructions are using officially distributed binaries and docker images.

1. Go to a root directory where the node configuration and data will be stored. E.g. `cd /opt`.
2.  Clone the repo that includes the required configs.

    ```
    git clone https://github.com/gnosischain/lighthouse-launch.git gbc
    ```
3. Switch to the cloned directory: `cd gbc`.
4. Copy validators’ keystore files generated on _the Step 1_ to the `keys/validator_keys` directory. **Keystores should only be used on a single node.**\
   ****_Note: You may need to_ [_change file ownership parameters_](https://linuxize.com/post/chmod-command-in-linux/) _to copy._
5. Write the keystore password from Step 1 to  `keys/keystore_password.txt` file (create this file).
6.  Create an `.env` file from the example at `.env.example`. (note the `.` in front makes it hidden, either enable hidden files or use `ls -la` to find). \


    Fill in the valid external `PUBLIC_IP` __ address of your node, this will help other peers find you.

    1. Use the `curl ifconfig.me ; echo ''` command to get the IP of your node.
    2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/validators/client/connect-to-a-gc-node) **** rather than the public RPC.


7.  Run the following command to import all added keystore files:

    ```
    docker-compose up validator-import; docker-compose down
    ```

### Nimbus

Official binaries or docker images for Ethereum Mainnet **do not** currently support Gnosis Beacon Chain, however, the Nimbus client can be specifically built from source to support the Gnosis Beacon Chain. Use the process below to run a Nimbus beacon node on the Gnosis Beacon Chain.

1. Go to a root directory where the node configuration and data will be stored. E.g. `cd /opt`.
2.  Clone the repo that includes the required configs.

    ```
    git clone https://github.com/gnosischain/nimbus-launch.git gbc
    ```
3. Switch to the cloned directory: `cd gbc`.
4. Copy validators’ keystore files generated in _Step 1_ to the `keys/validator_keys` directory. **Keystores should only be used on a single node.**\
   ****_Note: You may need to_ [_change file ownership parameters_](https://linuxize.com/post/chmod-command-in-linux/) _to copy._
5.  Create an `.env` file from the example at `.env.example`. (note the `.` in front makes it hidden, either enable hidden files or use `ls -la` to find). \


    Fill in the valid external `PUBLIC_IP` __ address of your node, this will help other peers find you.

    1. Use the `curl ifconfig.me ; echo ''` command to get the IP of your node.
    2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/validators/client/connect-to-a-gc-node) **** rather than the public RPC. Make sure to use a WSS connection instead of HTTPS.
6.  Run the following command to import all added keystore files, you will be interactively prompted to enter a keystore password:

    ```
    docker-compose run validator-import; docker-compose down
    ```

## Step 3) Run the Beacon Chain node with the attached Validator Process

**Lighthouse & Prysm**\
On the same machine as _Step 2_ run the following commands:

```
docker-compose up -d node
docker-compose up -d validator
```

**Nimbus** \
The validator client and beacon node run inside a single container, so you only need to start one container (on the same machine as _step 2_):

```
docker-compose up -d node
```

Observe the logs by `docker-compose logs -f node` to check that the node started successfully.

A similar command can be used to look at the validator process logs: `docker-compose logs -f validator`. But since deposits have not been made to the validators yet, there should not be much activity.

## Step 4) Make a Deposit

Making deposits is a 2 part process. See the [Validator Deposits section](/validators/operations/) for details.

##
