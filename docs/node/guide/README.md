---
title: "Manual Clients Setup"
---

Manual clients setup meaning that you have to [download, verify and configure clients](../README.md#manual-setup) manually. It requires more technical skills such as running a terminal, docker, or systemd, but offers flexibility. 

The overall procedure would be:
## Step 1: Prerequisite

Checking the hardware requirements for each clients, setting up the server of your machine, and establishing a directory hierarchy to store node data.

<div className="row">
<box href="./prerequisite" title="Prerequisite"/>
</div>

## Step 2: Choosing an approach 
In this section, you are required to run an execution, a consensus clients, based on the approach you choose. After setting up your execution and consensus client, you can choose to run validator(s) to start making attestation and earn validator [rewards](../rewards-penalties.md).


<div className="row">
<box href="./running-with-cli" title="Running with CLI"/>
<box href="./running-with-docker" title="Running with Docker"/>
<box href="./running-with-systemd" title="Running with systemd"/>
</div>

## Step 3: Staking for your Validator
Once your execution and consensus clients are synced with the network,and your validator software is running correctly, you need to active the validator by depositing 1GNO for each validator. 

:::danger
Please ensure that the clients are running correctly before depositing GNO token!
:::
<div className="row">
<box href="./staking-for-validator" title="Staking for Validator"/>
</div>


## Step 4: Managing your Node
After verifying that your clients are operational and your validators are actively engaged in attestation and block proposal, you can proceed to configure monitoring utilities to ensure your node adheres to the consensus rules and your system is functioning optimally.

<div className="row">
<box href="../management" title="Managing for Validator"/>
</div>

