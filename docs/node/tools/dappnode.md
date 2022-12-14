---
title: DAppNode
---

# DAppNode

[DAppNode](https://dappnode.io/) is a simple platform for deploying and hosting DApps, P2P clients, and blockchain nodes. It provides a user-friendly way to set up and configure nodes with a couple of clicks.

There are two ways to use DAppNode:

1. Purchase one of their pre-installed [DAppNode servers](https://dappnode.io/collections/all). They currently come with four free Gnosis validators.
2. Install DAppNode on any compatible hardware or a VPS. The installation is done using the command line interface (CLI) by following the [Installing DAppNode on Custom Hardware](#custom-hardware) steps below.

## Using DAppNode {#install-on-dappnode}

## Step 1. Install the required packages for validating

Once you have access to the dappnode UI, go to the stakers-ui page , you can access by clicking on http://my.dappnode/#/stakers/gnosis or click in Stakers section you can find in the left menu, then click on the Gnosis tab.

![Select Stakers in the left side menu](/img/node/dappnode-left-menu.png)

Make sure to select the Gnosis chain tab,

![Select the tab Gnosis Chain](/img/node/dappnode-stakers-ui.png)

The next step is to select the combination of client you want to use in your dappnode. For this process you need to select:

- 1. Select the execution client: Nethermind-xdai. Click in the package
- 2. Select the consensus client, here you can install one of the following options: Teku-gnosis, Lighthouse-gnosis and Prysm-gnosis
- 3. Install the web3signer. This is required becausethis is the package that will contain the keystores.

![Select the execution and consensus clients](/img/node/dappnode-stakers-ui-2.png)

1. Select the Execution client. For now, or in the moment this guide was created, nethermind is the only execution client that supports gnosis chain.
   ![Execution client ](/img/node/dappnode-execution-client.png)

2. Select the consensus client. You will see the next fields when you click in the package chard.

![Select a consensus client](/img/node/dappnode-consensus-client.png)

**Fee Recipient Address**

The fee recipient is the regular Gnosis `0x` address that will receive priority fees of the proposed block. You will only receive fees at this address for blocks you propose, not for attestations. Any Gnosis EOA or Safe address

**Graffiti**

Choose a string that will be appended to your proposed blocks. You will be able to change later so it can be left as is for now.

**Checkpoint for fast sync**

To get your beacon node up and running in only a few minutes, you can start it from a recent finalized checkpoint state rather than syncing from genesis. This is substantially faster and consumes fewer resources than syncing from genesis while still providing all the same features.

Be sure you are using a trusted node for the fast sync. Get your checkpoint sync(Dappnode fills this field with the checkpoint sync they provide by default) from a running Gnosis Beacon Chain node or use the official one.

https://checkpoint.gnosischain.com

3. Select the web3signer.

![Select web3signer](/img/node/dappnode-web3signer-stakers.png)

Then click in the below button that says "Apply changes"
![Apply the changes](/img/node/dappnode-stakers-ui-apply.png)

Be patience, the installation process can take several minutes. You can check all have been installed in the [dashboard page](http://my.dappnode/#/dashboard).

### Step 3: Key Generation

<details>
  <summary><strong>Docker Command Line Instructions</strong> (only needed if you have trouble with Wagyu)</summary>
  <div>
    <div>
      <ol>
        <li>Pull the docker image for the data generator<br/>
          <pre>docker pull ghcr.io/gnosischain/validator-data-generator:latest</pre>
        </li>
        <li>If this is your first time running the process and there is no an existing mnemonic to generate keystores and deposit data, replace the variables below with your info then run the command.
        <pre>docker run -it --rm -v /path/to/validator_keys:/app/validator_keys ghcr.io/gnosischain/validator-data-generator:latest new-mnemonic --num_validators=NUM --mnemonic_language=english --chain=gnosis --folder=/app/validator_keys --eth1_withdrawal_address=WITHDRAWAL_ADDRESS</pre>
        </li>
        <li>Choose a secure password and confirm. You will be shown a mnemonic seed phrase. Write down and store your keystore password and mnemonic safely offline.<br/>
          <img src="/img/node/dappnode-step3.png"/>
          Following execution, the path you defined for <code>/path/to/validator_keys</code> will contain the keystores and <code>deposit_data*.json</code> file.
        </li>
      </ol>
    </div>
    <details>
      <summary>Drop down for variable descriptions</summary>
        <div>
          <ul>
            <li><code>NUM</code> The number of signing keys (validators) to generate.</li>
            <li><code>START_NUM</code> Index for the first validator key. If this is the first time generating keys with this mnemonic, use 0. If keys were previously generated with this mnemonic, use the subsequent index number (e.g., if 4 keys have been generated before (keys #0, #1, #2, #3, then enter 4 here).</li>
            <li><code>WITHDRAWAL_ADDRESS</code> Use this parameter to provide a regular Gnosis Chain <code>0x</code> address for mGNO withdrawal. This parameter can also be omitted to generate withdrawal credentials with the mnemonic-derived withdrawal public key in the <a href="https://eips.ethereum.org/EIPS/eip-2334#eth2-specific-parameters">EIP-2334 format</a> (ETH2 address format). <strong>Withdrawals will not be available until after the Shanghai upgrade.</strong></li>
            <li><code>/path/to/</code> should be replaced with a valid and existing path where you want to create the validator_keys folder. Or, to create the validator_keys folder in your current working directory, use <code>$(PWD)/validator_keys:/app/validator_keys</code></li>
            <li>More details about command line arguments can be found <a href="https://github.com/gnosischain/validator-data-generator">here</a></li>
          </ul>
      </div>
    </details>
  </div>
</details>

:::caution KEEP YOUR KEYSTORES SAFE
We highly recommend generating keystores on a safe, completely offline device. To do so, you will need internet to access the latest release of Gnosis Chain Port of the Wagyu Key-Gen from [GitHub](https://github.com/alexpeterson91/wagyu-key-gen/releases) (step 1), then disconnect internet or better yet copy the program to a USB drive to proceed with completely offline key generation (step 2), then finally save your deposit_data.json file (step 3) to a usb key or other transfer method that does not require online connection.

**Securely backup your mnemonic, keystores, and password, and keep them in a safe place.**

:::

import GenerateValidatorKeysWagyuPartial from '@site/docs/node/guide/validator/\_partials/\_generate_validator_keys_wagyu.md';

<GenerateValidatorKeysWagyuPartial />

### Step 4: Upload Keystores to Web3Signer

Now that you’ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer Gnosis.

Return to your DAppNode’s Admin UI and navigate to the [info page of the Web3Signer Gnosis package](http://my.dappnode/#/packages/web3signer-gnosis.dnp.dappnode.eth/info).

![DAppNode Step 4](/img/node/dappnode-step4.png)

Open the UI by clicking the [`🏠Ui`](http://ui.web3signer-gnosis.dappnode/) link, then click the `Import Keystores` button on the lower part of the Web3Signer UI.

![DAppNode Step 4b](/img/node/dappnode-step4b.png)

Select the keystore file(s) you generated the the password you chose during the last step.

![DAppNode Step 4c](/img/node/dappnode-step4c.png)

You will be able to see all the keystores you’ve uploaded.

![DAppNode Step 4d](/img/node/dappnode-step4d.png)

You are now ready to fund these validators and start validating.

### Step 5: Fund Your Validators

:::tip
In case you need some xDai for transaction fees you can get some from the [official xDai faucet for Gnosis](https://stakely.io/en/faucet/gnosis-chain-xdai).

:::

1. Navigate to: [https://deposit.gnosischain.com/](https://deposit.gnosischain.com/)
2. Connect your wallet.
3. Upload the `deposit_data*.json` you generated with the key generator tool in Step 3.
4. Your deposit file will be validated and list the number of validator deposits you are making and the required GNO to deposit. Click `Deposit` to continue.
5. Check that you understand the risks and ensure you are interacting with the correct contract before proceeding.
6. Click `Ok` and confirm the transaction in your wallet to complete the deposit.

7. Our proxy smart contract will deposit the 4 GNO to your validators! YOU control the private keys, YOU control the withdrawal key... these validators are now **yours**. Take good care of them!

:::tip DAppNode <\> Gnosis Chain Incentive Program
If you are claiming the 4 Gnosis validators from the incentive program, select the DAppNode tab instead. Be sure to use the same wallet that you provided when placing your DAppNode order.

If you encounter an issue claiming your incentive program validators, such as an error about your address not being whitelisted or that it has expired, please visit the [DAppNode Discord Server](https://discord.gg/dappnode) and open a support ticket in [`#1-sales-support-ticket`](https://discord.gg/mGtA9emHw3).

:::

This guide was done with the inestimable help of DAppNode Team Member `@voss`, with some additions from `@Lanski`.

## Installing DAppNode on Custom Hardware {#custom-hardware}

A community written guide by @GLCstaked which goes into detail the entire setup process for a validator using linux with docker. This is for beginners new to linux who wish to get familiar with every step of the process and configuration. Can be found [here](https://mirror.xyz/0xf3bF9DDbA413825E5DdF92D15b09C2AbD8d190dd/wkE51RqApadbSW1GQartYJ5Jz71mnz2y60TNu3XNtNM)

1. Start with a fresh installation of Debian or Ubuntu.
2. Log in with an account with `sudo` privileges.
3. Install the prerequisites: [Docker](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/), and [xz](https://tukaani.org/xz/). The prerequisites can be installed manually or by using this command:
   `curl https://prerequisites.dappnode.io | sudo sh`
4. Run the installer script to install DAppNode:
   `curl https://installer.dappnode.io | sudo sh`
5. Once the installation has finished, reboot your machine:
   `sudo shutdown -r now`
6. DAppNode will try to automatically prepare for the first access. DAppNode's official documentation explains how to connect using the [four supported connection methods](https://docs.dappnode.io/get-started/installation/custom-hardware/installation/script#post-installation).
7. Once you have successfully connected to DAppNode, follow the [Using DAppNode](#install-on-dappnode) steps above.
