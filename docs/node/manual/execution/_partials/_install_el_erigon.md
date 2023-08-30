import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
{label: 'Gnosis', value: 'gnosis'},
{label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">
<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

:::caution
[Erigon](https://github.com/ledgerwatch/erigon#documentation) is considered experimental for Gnosis. For production use, please consider Nethermind.
:::


* Install and build [Erigon](https://github.com/ledgerwatch/erigon#documentation). 

```shell
cd execution 
git clone --branch stable --single-branch https://github.com/ledgerwatch/erigon.git
cd erigon
make erigon
```

* Run Erigon
```shell
./build/bin/erigon \
    --chain=gnosis \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex \
    --prune=htcr
```
* Erigon run [Archive node](https://ethereum.org/en/developers/docs/nodes-and-clients/archive-nodes/#what-is-an-archive-node) by default. To run a pruned node, add `--prune=htcr`. 

</TabItem>
<TabItem value="win">

:::danger
[Erigon](https://github.com/ledgerwatch/erigon#documentation) is not ready for production use. Please consider switching to Nethermind.
:::


* Install and build Erigon. 

```shell
cd execution 
git clone --branch stable --single-branch https://github.com/ledgerwatch/erigon.git
cd erigon
make erigon
```

* Run Erigon
```shell
./build/bin/erigon \
    --chain=gnosis \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
</Tabs>
</TabItem>
<TabItem value="chiado">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

:::danger
[Erigon](https://github.com/ledgerwatch/erigon#documentation) is not ready for production use. Please consider switching to Nethermind.
:::


* Install and build Erigon. 

```shell
cd execution 
git clone --branch stable --single-branch https://github.com/ledgerwatch/erigon.git
cd erigon
make erigon
```

* Run Erigon
```shell
./build/bin/erigon \
    --chain=chiado \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```
</TabItem>
<TabItem value="win">

:::danger
[Erigon](https://github.com/ledgerwatch/erigon#documentation) is not ready for production use. Please consider switching to Nethermind.
:::


* Install and build Erigon. 

```shell
cd execution 
git clone --branch stable --single-branch https://github.com/ledgerwatch/erigon.git
cd erigon
make erigon
```

* Run Erigon
```shell
./build/bin/erigon \
    --chain=chiado \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

