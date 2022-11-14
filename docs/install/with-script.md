---
id: with-script
title: "Run a Node"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className='install'>

import InstallIntroPartial from '@site/docs/install/_partials/_install-intro.md';

<InstallIntroPartial />

<div className='hide-tabs'>

## Step 1: Review prerequisites and best practices

import InstallPrereqsPartial from '@site/docs/install/_partials/_install-prereqs.md';

<InstallPrereqsPartial />

## Step 2: Initial setup

import InstallInitialPartial from '@site/docs/install/_partials/_install-initial.md';

<InstallInitialPartial />

## Step 3: Run an execution client

In this step, you'll install an execution-layer client that the consensus-layer node will connect to.

import RunExecutionNodePartial from '@site/docs/install/_partials/_run-execution-client.md';

<RunExecutionNodePartial />

## Step 4: Run a beacon node

import RunBeaconNodePartial from '@site/docs/install/_partials/_run-consensus-client.md';

<RunBeaconNodePartial />

## Step 5: Generate validator keys

<Tabs groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">
        <div>

import GenerateValidatorKeysPartial from '@site/docs/install/_partials/_generate_validator_keys.md';

<GenerateValidatorKeysPartial />

## Step 6: Run a validator

import InstallValidatorPartial from '@site/docs/install/_partials/_install-validator.md';

<InstallValidatorPartial />

## Step 7: Fund your validator

import FundValidatorPartial from '@site/docs/install/_partials/_fund-validator.md';

<FundValidatorPartial />


## Step 8: Verify validator

import VerifyValidatorPartial from '@site/docs/install/_partials/_verify-validator.md';

<VerifyValidatorPartial />
        </div>
    </TabItem>
    <TabItem value="chiado">
        <div>
            <p>Chiado testnet does not support public participation yet.</p>
            <p>Steps 5-8 are ommited.</p>
        </div>
    </TabItem>
</Tabs>


</div>
</div>

-------

## Frequently asked questions

**Question A** <br />
Answer

**Question B** <br />
Answer