---
title: "Interactive Guide"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip Before you start 
Hey node runners, to provide a comprehensive guideline for both beginners and experienced node runners, we offer two paths for you to choose from for building your node: Interactive Guide and Step-by-Step. 

**Interactive Guide**: By selecting the configurations below, you are given a general walk-through of setting up the node based on different Operating system, Network, Execution client and Consensus client. In the current version, CLI commands are given to run as system process. *Recommended for experienced node runners*. 

**Step-by-Step**: A detailed flow on running a node. Options include running as system process and using docker. *Recommended for beginners*.
:::


<div className='install'>

## Select a configuration 


import InstallIntroPartial from '@site/docs/node/guide/_partials/_install-intro.md';

<InstallIntroPartial />

<div className='hide-tabs'>

## Step 0: Review prerequisites and best practices

import InstallPrereqsPartial from '@site/docs/node/guide/server/_partials/_install-prereqs.md';

<InstallPrereqsPartial />

## Step 1: Configure Server

:::tip
Check out all recommended steps to [configure server](./configure-server.md)
:::

import InstallInitialPartial from '@site/docs/node/guide/server/_partials/_install-initial.md';

<InstallInitialPartial />

## Step 2: Run an Execution client

In this step, you'll install an execution-layer client that the consensus-layer node will connect to.

import RunExecutionNodePartial from '@site/docs/node/guide/execution/_partials/_run-execution-client.md';

<RunExecutionNodePartial />

## Step 3: Run a Beacon Node

import RunBeaconNodePartial from '@site/docs/node/guide/beacon/_partials/_run-consensus-client.md';

<RunBeaconNodePartial />

## Step 4: Run a Validator

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
        <div>

### Step 4a: Generate Validator Keys

import GenerateValidatorKeysPartial from '@site/docs/node/guide/validator/_partials/_generate_validator_keys_cli.md';



<GenerateValidatorKeysPartial />

### Step 4b: Run a Validator

import InstallValidatorPartial from '@site/docs/node/guide/validator/_partials/_install-validator.md';

<InstallValidatorPartial />

### Step 4c: Fund your validator

import FundValidatorPartial from '@site/docs/node/guide/validator/_partials/_fund-validator.md';

<FundValidatorPartial />


### Step 4d: Verify Validator

import VerifyValidatorPartial from '@site/docs/node/guide/validator/_partials/_verify-validator.md';

<VerifyValidatorPartial />
        </div>
    </TabItem>
    <TabItem value="chiado">
        <div>
            <p>Chiado testnet does not support public participation yet.</p>
            <p>Step 4 is ommited.</p>
        </div>
    </TabItem>
</Tabs>


</div>
</div>

-------

## More Resources
- [Frequently Asked Questions](../faq.md)
- [1-click tools](../tools/)
- [Managing your Node](../management/)