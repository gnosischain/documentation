---
title: "Prerequisite"
---
# Prerequisite

## Checking Hardware Requirements
You should understand the hardware requirements for the execution clients and consensus clients in order to choose the suitable clients for your machine, either running locally or on cloud. 
Check out [Hardware Requirements](../README.md#requirements) to find out the relevant requirements for each clients.

To check the requirements on an Ubuntu machine, run the following commands on the terminal:

| System Specification | Command |
|----------------------|---------|
| Memory               | `free -m` |
| Disk Space           | `df -H`   |
| CPU                  | `lscpu`   |


## Configure Server

We recommend the following steps to configure your server with sensible system and security defaults. We currently provide a guide for **Ubuntu** users, but the principles extend to whichever OS you intend to use. 

### Update Server

Update Ubuntu with the latest software and security updates.

```shell
$ sudo apt -y update && sudo apt -y upgrade
$ sudo apt dist-upgrade && sudo apt autoremove
$ sudo reboot
```

### Setup folder structure
Create the following folder structure on your disk, the entire tutorial will assume it:

```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

```shell
mkdir gnosis && cd gnosis &&
mkdir jwtsecret && mkdir execution && mkdir consensus &&
cd consensus &&
mkdir data && mkdir keystores && mkdir validators 
```

### Configure Timekeeping

Consensus Layer clients are very sensitive to time, and require accurate timekeeping for proper synchronization with the blockchain network. 

For Ubuntu machines, we recommend using the [NTP service](https://ubuntu.com/server/docs/network-ntp), which helps ensure system time is synchronized. 

```shell
## Check time and date
$ timedatectl

## Setup NTP service
$ sudo timedatectl set-ntp on
```

:::tip Recommended
Some users recommend using [Chrony](https://chrony.tuxfamily.org/) as a [method of configuring NTP](https://ubuntu.com/blog/ubuntu-bionic-using-chrony-to-configure-ntp)
:::

### Create JWT

import JwtGenerationPartial from '@site/docs/node/guide/server/_partials/_jwt-generation-partial.md';

<JwtGenerationPartial />

### Set up Networking

Ubuntu ships with a [ufw firewall](https://wiki.ubuntu.com/UncomplicatedFirewall) that helps prevent unwanted connections to your server. As your server is connected to the public internet, this is very important as there will be adversaries that will port scan for vulnerabilities.

#### **Install UFW** ####

Ubuntu should have `ufw` installed, otherwise you can install it. 

```shell
$ sudo apt install ufw
```

#### **Apply UFW Defaults** #####

```shell
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
```

#### **(Optional) Deny or Allow SSH** ####

If you are hosting your node locally (i.e. homestaker), we highly recommend you deny the SSH Port 22, which is a very common attack vector. 

If you are hosting your node in the cloud, you will need to allow the SSH Port 22 to connect to your machine. Make sure to allow 

```shell
## Deny SSH
$ sudo ufw deny 22/tcp

## Allow SSH
$ sudo ufw allow 22/tcp
```

#### **Allow Execution Client Port 30303** ####

The Execution Client uses port 30303 to communicate with Execution Layer network peers. 

```shell
$ sudo ufw allow 30303
```

#### **Allow Consensus Client port 9000** ####

Most Consensus Layer Clients uses port `9000` to communicate with the Consensus Layer network peers, with the exception of Prysm, which uses ports `13000/TCP` and `12000/UDP` instead. 

```shell
## Lighthouse, Nimbus, Teku, Lodestar
$ sudo ufw allow 9000

## Prysm
$ sudo ufw allow 13000/tcp
$ sudo ufw allow 12000/udp
```

#### **Enable Firewall** ####

```shell
$ sudo ufw enable
$ sudo ufw status numbered 
```


### Advanced

#### **Increasing Swap Space** ####

Gnosis clients (e.g. Erigon) tend to use large amounts of memory when syncing or running, which may lead to out-of-memory errors. Advanced users can consider allocating swap space, which allows the system to store in-memory data on their hard drives. 

:::tip Read More
- [Step 5: Create a Swap Space of Somer Esat's Guide](https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-lodestar-193a2553a161) 

:::

## Generate Validator Key(s) 

The purpose of validator key(s) is to actively sign on-chain operations such as block proposals and attestations. 

Generate your validator keys using one of the following methods:
```mdx-code-block
<details>
  <summary>Command Line Tools</summary>
  <div>
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

- Copy the download link for Linux, MacOS or Arm64 package from the [validator data generation tool](https://github.com/gnosischain/validator-data-generator/releases).

- Download the Validator Data Generation tool
    ```shell
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Unzip the downloaded file
    ```shell
    tar -xvf [FILE_NAME]
    ```

- Get into the folder
    ```shell
    cd deposit-cli-...
    ```

- Execute Validator Data Generation tool and follow the instructions.
    In case of doubts, check the [tool documentation](https://github.com/gnosischain/validator-data-generator/). 
    > Tip: add the [`--eth1_withdrawal_address`](https://github.com/gnosischain/validator-data-generator/#new-mnemonic-arguments) flag when creating your keys, **pointing to an address you control**.

    - If you want to generate a new mnemonic:
        ```shell
        ./deposit new-mnemonic --folder ../consensus/keystores
        ```
    
    - If you already have a mnemonic generated:
        ```shell
        ./deposit existing-mnemonic --folder ../consensus/keystores
        ```
        You will be asked for a `mnemonic` and `index` (key number).

</TabItem>
<TabItem value="win">

- Download the Windows version of the [Validator Data Generation tool](https://github.com/gnosischain/validator-data-generator/releases) from the releases page.
- Execute Validator Data Generation tool and follow the instructions.
    In case of doubts, check the [tool documentation](https://github.com/gnosischain/validator-data-generator/)

    - If you want to generate a new mnemonic:
        ```shell
        deposit.exe new-mnemonic --folder ../consensus/keystores
        ```

    - If you already have a mnemonic generated:
        ```shell
        deposit.exe existing-mnemonic --folder ../consensus/keystores
        ```
        You will be asked for a `mnemonic` and `index` (key number).

</TabItem>
</Tabs>

- Select the language of the UI and mnemonic.
- Choose the number of validators. Remember: 1 GNO = 1 validator. You can run many validators in the same machine.
- 
<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">Choose <code>gnosis</code> on the network/chain name.</TabItem>
    <TabItem value="chiado">Choose <code>chiado</code> on the network/chain name.</TabItem>
</Tabs>

- Create a password to encrypt the keys.
- The mnemonic (seed phrase) will show on screen. Save it in a secure place (idealy offline).
- Type your mnemonic to confirm in the tool.
- Wait untill the keys are created. Two types of files will be generated: 
    - `deposit_data-*.json`
    - One `keystore-*.json` per validator
- Save the location of the generated keys, and copy them in a backup USB memory or any other secure storage.

:::success
For custom setup and more instructions, check the [Validator Data Generation tool documentation](https://github.com/gnosischain/validator-data-generator/).
:::

```mdx-code-block
  </div>
</details>
```

```mdx-code-block
<details>
  <summary>Wagyu Key Gen</summary>
  <div>
```
1. Download the latest release of the Gnosis Wagyu Key Gen from [here](https://github.com/alexpeterson91/wagyu-key-gen/releases). There are binaries posted for Windows, macOS, Linux AMD64, and Linux ARM64, choose the appropriate binary for your OS, (or build from the source code if you’re so inclined).

  ![DAppNode Step 3b](/img/node/dappnode-step3b.png)

2. Once you have downloaded the appropriate binary for your OS and are disconnected from the internet, go ahead and open the program.  You will be given 2 options, either create a new mnemonic or import an existing mnemonic.  The GUI is very user friendly and explains all steps along the way.  Below are screenshots showing the flow for creating a new mnemonic.  If importing a mnemonic you will need to ensure you select the proper start index on the configuration page so that you don’t create duplicate keys.

  ![DAppNode Step 3c](/img/node/dappnode-step3c.png)

  ![DAppNode Step 3d](/img/node/dappnode-step3d.png)

  ![DAppNode Step 3e](/img/node/dappnode-step3e.png)

  ![DAppNode Step 3f](/img/node/dappnode-step3f.png)

  You will be shown this once again before you need to confirm it by entering each word one at a time.

  ![DAppNode Step 3g](/img/node/dappnode-step3g.png)

  ![DAppNode Step 3h](/img/node/dappnode-step3h.png)

  Fill this with the mnemonic you just created to confirm.

  ![DAppNode Step 3i](/img/node/dappnode-step3i.png)

  ![DAppNode Step 3j](/img/node/dappnode-step3j.png)

  :::info 
  If you are running this program to generate keys within the context of the DAppNode <\> Gnosis Chain Hardware Validator Incentive Program, make sure to generate 4 validators and to fill in the ETH1 Withdrawal Address Field with an address you have full control over.  Also make sure to choose a directory that reflects the folder where you want the files to be saved.
  :::

  ![DAppNode Step 3k](/img/node/dappnode-step3k.png)

  Confirm your keystore password.

  ![DAppNode Step 3l](/img/node/dappnode-step3l.png)

  Select the folder where your keys should be saved.

  ![DAppNode Step 3m](/img/node/dappnode-step3m.png)

  ![DAppNode Step 3n](/img/node/dappnode-step3n.png)

  Confirm that your keys have been generated.

  ![DAppNode Step 3o](/img/node/dappnode-step3o.png)

  The key generation is complete, and your keys have been saved to the folder you selected.
```mdx-code-block
  </div>
</details>
```

Read more about Keys in [Beaconcha.in KB](https://kb.beaconcha.in/ethereum-2-keys).

:::danger
We highly recommend generating keystores on a safe, completely offline device.

***Securely backup your mnemonic, keystores, and password and keep them in a safe place.***
:::

:::tip
Learn more about [keys](https://kb.beaconcha.in/ethereum-2-keys) and [withdrawal credentials](https://launchpad.ethereum.org/en/faq#withdrawal-credentials).
:::

