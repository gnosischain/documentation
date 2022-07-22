---
---

# Running a Conensus Layer (Beacon Chain) Node

Before getting started, it is important to have an understanding of your responsibilities as a validator. As an Ethereum-mirrored environment with lower stakes, validating on the GBC involves many of the same responsibilities as validating on the Ethereum Beacon Chain.

:::note
💡Educating and familiarizing yourself with the [Eth Launchpad Advisories](https://launchpad.ethereum.org/en/overview) is a good way to get up to speed quickly.
:::

## Before Starting 
On GBC you can validate blocks with a more reasonable staking amount, providing security and receiving rewards (or penalties) as you would with Ethereum staking. Primary points to consider:

1. The validator deposit is a **non-reversible, one-way transaction**. Withdrawal will not be possible until the Gnosis Chain merge occurs joining the execution layer with the consensus layer.
2. You are **responsible for your node**, including ensuring uptime, correct behavior, and monitoring. If your node is not responding properly, or is displaying dishonest behavior (like running keys on 2 nodes at the same time), you will be penalized in the form of deposit slashing.
3. You are **responsible for your keys** (deriving and storing your keys and mnemonic securely). If you lose them or your keys are compromised, there is no recourse to recover your funds.
4. You should follow the instructions and processes outlined here or with a provider of your choosing (ie DAppNode or Liquid Staking provider). **Failure to follow instructions correctly can result in lost funds.**
5. You provide decentralization and security for the network. **You are vital to the proper functioning of GBC**.

If you are ready to proceed, please see the technical prerequisites which include hardware requirements to get started.

## The Basics

Since GBC is a lower-stakes environment, it is a great place to learn and refine new skills. Be sure to read the instructions carefully and ask questions ([discord channel](https://discord.com/invite/pjHjQwycV8)) as needed.

* **Using the Terminal**:  You will be required to enter commands into a terminal window. These will be simple copy-paste instructions, but familiarity with using a terminal is helpful.
* **Key Management**: You will use the command line to derive a key-pair for validating blocks, as well as a mnemonic you will use later to derive a withdrawal pair. It is important to store these safely (offline ledger highly recommended).

![](/img/node/Gnosis-Validator-diagram.png)
<p align = "center"> Visualization of Gnosis Node</p>


### Connectivity

A reliable internet connection is key: bandwidth should not be throttled or capped. Upload bandwidth should be a minimum of 700 MB/hour with increases likely. Brief periods offline may result in small inactivity penalties, but this will typically be recouped quickly as long as the outage is short.

Note that synching the execution layer Gnosis Chain may take up to 12 hours depending on your setup.

### Security

When setting up hardware or a VM, use proper security measures. This includes securing the root account, setting up a firewall, and forwarding necessary ports to the correct machines from the router.

* Nethermind: 30303 TCP/UDP
* Prysm & Lighthouse: 12000 UDP, 13000 TCP

### Time Sync

Your clock should be synchronized to prevent skipping block sealing.

Enter `timedatectl status` , you should see similar output:

```bash
Local time: Tue 2020-06-30 17:16:19 UTC
Universal time: Tue 2020-06-30 17:16:19 UTC
RTC time: Tue 2020-06-30 17:16:19
Time zone: Etc/UTC (UTC, +0000)
System clock synchronized: yes
systemd-timesyncd.service active: yes
RTC in local TZ: no
```

If **`System clock synchronized`** displays **`yes`**   you are good to go.

If not, you can either:

* [x] synchronize clock with NTP servers (allow **UDP** port **123** for both incoming and outgoing traffic) or
* [x] use the following script to sync with google.com:

Create `fixtime.sh` script and run it with `watch -n 60` command in a `screen`

```bash
echo sudo date -s '"$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"' > fixtime.sh
chmod +x fixtime.sh
screen -S time
watch -n 60 ./fixtime.sh
```

Press `Ctrl+A+D` to leave the `screen`

##  Beacon Chain Node Requirements

:::note
Recommended requirements are met when using DappNode preconfigured hardware or a liquid staking service.
:::

:::info
Sadly, an HDD (hard disk) is too slow. You need a machine equipped with an SSD.
:::

Minimum & recommended specifications for running GBC clients are as follows:

### Prysm Client

**Prysm Minimum**

* Operating System: 64-bit Linux, Mac OS X 10.14+, Windows 64-bit
* Processor: Intel Core i5–760 or AMD FX-8100 or better
* Memory: 8GB RAM
* Storage: 128GB available space SSD
* Internet: Broadband connection

**Prysm Recommended**

* Processor: Intel Core i7–4770 or AMD FX-8310 or better
* Memory: 16GB RAM
* Storage: 256GB available space SSD
* Internet: Broadband connection

### Lighthouse Client

**Lighthouse Minimum**

* Dual-core CPU, 2015 or newer
* 8 GB RAM
* 128 GB solid state storage
* 10 Mb/s download, 5 Mb/s upload broadband connection

**Lighthouse Recommended**

* Quad-core AMD Ryzen, Intel Broadwell, ARMv8 or newer
* 16 GB RAM
* 256 GB solid state storage
* 100 Mb/s download, 20 Mb/s upload broadband connection

**Network utilization benchmark**

For better understanding of the network throughput requirements, a benchmark was conducted on the Lighthouse v2.2.1 client running a GBC on 04.05.22.

The client was configured to maintain 100 simultaneous peer connections. Inbound and outbound traffic consumption was measured while altering the number of active validators connected to the beacon node.

Validators are advised to consider those numbers when planning their infrastrusture and budget. With growth of the overall validator set, these requirements will increase over time as well. Make sure to allocate enough spare resources to account for future network growth.

| Number of validators | Inbound traffic | Outbound traffic | Approximate monthly traffic |
| -------------------- | --------------- | ---------------- | --------------------------- |
| 10                   | 1.0 MB/s        | 1.8 MB/s         | 7.2 TB                      |
| 32                   | 2.4 MB/s        | 3.15 MB/s        | 14.2 TB                     |
| 64                   | 4.5 MB/s        | 3.8 MB/s         | 21.2 TB                     |
| 128                  | 4.6 MB/s        | 3.8 MB/s         | 21.5 TB                     |
| >256                 | 4.6 MB/s        | 3.9 MB/s         | 21.7 TB                     |

### Nimbus Client

**Nimbus Minimum**

* Dual-core CPU, 2015 or newer
* 4 GB RAM
* 128 GB solid state storage
* 10 Mb/s download, 5 Mb/s upload broadband connection

**Nimbus Recommended**

* Quad-core CPU
* 8 GB RAM
* 256 GB solid state storage
* 100 Mb/s download, 20 Mb/s upload broadband connection

### Additional Options:

If preferred, you can use pre-configured hardware to easily run a node with minimal setup.

* **DappNode** supports the Gnosis Beacon Chain! To use services for validation, please see the [guide and instructions here.](https://forum.dappnode.io/t/how-to-setup-a-gnosis-beacon-chain-gbc-validator-on-dappnode/1351)
* [**Avado**](https://ava.do) offers an out-of-the-box validator solution.

Otherwise, proceed to the steps below to setup, run, and deposit to your validators.

:::tip Easy Guide
If you prefer a beginner-friendly walkthrough from start to finish, this excellent deployment guide from community member [GLCStaked](https://twitter.com/GLCstaked) goes in-depth on setting up your environment, firewalls and explains commands in more detail. The guide uses Nethermind + Lighthouse.

> [Easy Guide to Running a Gnosis Validator ](https://mirror.xyz/0xf3bF9DDbA413825E5DdF92D15b09C2AbD8d190dd/wkE51RqApadbSW1GQartYJ5Jz71mnz2y60TNu3XNtNM)
:::

****

## Setup Instructions


1. [Generate Validator Keystores and Deposit Data](#step-1-generate-validator-accounts-and-deposit-data): On an offline machine, generate up to 128 separate validator keys per node.
2. [Choose your Gnosis Beacon Chain (GBC) Client:](#step-2-choose-your-beacon-chain-client--import-validator-keys) Choose to run either Prysm, Lighthouse or Nimbus. Add keystores and env variables.
3. [Start up your GBC Node](#step-3-run-the-beacon-chain-node-with-the-attached-validator-process): Run in the docker container.
4. [Deposit to your Validator(s)](/node/operations/): Use the Deposit UI to convert GNO to mGNO (metaGNO for staking) and deposit to your validator.
5. [View on Explorer](/node/operations/#view-your-validator): Wait \~1.5-2 hours for your validator(s) to go live and view at [https://beacon.gnosischain.com](https://beacon.gnosischain.com).

### Additional Software/Access Requirements:

* Terminal access on your node and cli familiarity
* Admin level access on your local network to set up a port forward
* [MetaMask](https://metamask.io) (or equivalent) connected to the Gnosis Chain with 1 GNO per validator and a small amount of xDai for transaction costs.
* Recent [Docker](https://www.docker.com) version (Docker v20.10+)
* Docker compose 2.2.3 (_note default version installed with apt-get may give an error_). To fix:
```
sudo apt-get remove docker-compose 
sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
sudo chmod +x /usr/local/bin/docker-compose 
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```


## Step 1) Generate Validator Account(s) and Deposit Data

:::caution
The following processes use [Docker](https://www.docker.com) to generate keystores and spin up clients. Please check that you are running a recent version. For key generation, binaries are also available.
:::

:::note
We highly recommend generating keystores on a safe, completely offline device. To do so, you will need to (1) connect online to pull the docker image, then  (2) disconnect to proceed with key generation, and then (3) finally save your deposit\_data.json file to a usb key or other transfer method that does not require online connection.

***Securely backup your mnemonic, keystores, and password and keep them in a safe place.***
:::

1.  Pull the docker image for the data generator.

    ```
    cd
    docker pull ghcr.io/gnosischain/validator-data-generator:latest
    ```
2. If this is your first time running the process and there is no an existing mnemonic to generate keystores and deposit data, replace the variables below with your info then run the follwoing command with these variables:
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

4\.  Choose a secure password and confirm. It should be at least 8 characters. You will see a mnemonic seed phrase. Write down and store your password and mnemonic safely offline.

![](/img/node/mnemonic.png)

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

Make sure your machine conforms to the [Technical Requirements](/node/run-consensus-layer-node/consensus-layer-validator#beacon-chain-node-requirements) for running a node, including opening the following pair of ports:

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
   2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/node/client/connect-to-a-gc-node) **** rather than the public RPC.\

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
    `sudo cp -r /home/<user>/vkeys/validator_keys/validator_keys /home/<user>/gbc/keys/`
   ****_Note: You may need to_ [_change file ownership parameters_](https://linuxize.com/post/chmod-command-in-linux/) _to copy._
5. Write the keystore password from Step 1 to  `keys/keystore_password.txt` file (create this file).
6.  Create an `.env` file from the example at `.env.example`. (note the `.` in front makes it hidden, either enable hidden files or use `ls -la` to find). `sudo cp /home/<user>/gbc/.env.example /home/<user>/gbc/.env`
Fill in the valid external `PUBLIC_IP` __ address of your node, this will help other peers find you.
1. Use the `curl ifconfig.me ; echo ''` command to get the IP of your node.
2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/node/client/connect-to-a-gc-node) **** rather than the public RPC.


7.  Run the following commands to import all added keystore files:

    ```
    cd /home/<user>/gbc 
    docker-compose up validator-import; docker-compose down
    ```
:::note
If you have errors, ensure that your decryt key is correct in the earlier seps (it is case sensitive). The previous command imports the keys from `/home/<user>/gbc/keys/validator_keys` to `/home/<user>/gbc/validators` .  After imoprting, it's a good idea to archive the old keystores from `/home/<user>/gbc/keys/validator_keys` somewhere safe. 
:::
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
    2. Other values can remain unchanged. **If you are experienced and want to run your own GC node,** [**connect to your own node**](/node/client/connect-to-a-gc-node) **** rather than the public RPC. Make sure to use a WSS connection instead of HTTPS.
6.  Run the following command to import all added keystore files, you will be interactively prompted to enter a keystore password:

    ```
    docker-compose run validator-import; docker-compose down
    ```
7. Edit docker-compose files for restart. If your device goes down/restarts for any reason, we want our nodes to start back up as soon as they can. to do this, edit the docker-compose to have the restart field set to `always` like so:
```
version: '3.3'
services:
  node:
    image: sigp/lighthouse:v2.2.1-modern
    hostname: node
    restart: always
    command: |
      lighthouse beacon_node
      --network gnosis
      --checkpoint-sync-url https://rpc-gbc.gnosischain.com
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

Once your node has synced (can take a few hours depending on setup) and the node and validator are running without any errors, you are ready to make a deposit. To check if your validator is synced, open the logs and you should see a message saying that the validator is awaiting activation. Making deposits is a 2 part process. See the [Validator Deposits section](/node/validator-deposits) for details.
##


## Connect to a GC Node

If you choose not to use the public RPC and want to connect to a different Gnosis Chain node ([including a 3rd party provider](/node/client/nethermind-node-setup)), set `XDAI_RPC_URL`=https://\&lt;your-endpoint&gt;

### **Fallback IPs (Lighthouse only)**

Use comma-separated RPC urls for the `XDAI_RPC_URL` variable to set fallback IPs in Lighthouse. This is useful if your node goes offline. For example:

* `XDAI_RPC_URL`=https://\&lt;your-endpoint&gt;, [https://rpc.gnosischain.com](https://rpc.gnosischain.com)

### **Sharing machines for GC and GBC clients**

If you decide to run a Gnosis Chain client (Nethermind) and a Gnosis Beacon Chain client (Lighthouse or Prysm) on the same machine, we recommend [running both in the same docker-compose.yml ](https://docs.docker.com/compose/extends/)file to enable RPC access by container name.

If you have questions about config details for this type of setup, please [ask in our discord.](https://discord.com/invite/pjHjQwycV8)


