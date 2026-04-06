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

- Install and build [Erigon](https://github.com/erigontech/erigon#installation).

```shell
cd execution
git clone https://github.com/erigontech/erigon.git
cd erigon
make erigon
```

- Run Erigon

```shell
./build/bin/erigon \
    --chain=gnosis \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

- Erigon uses `--prune.mode=full` by default. If you need archive data or minimal disk usage, set `--prune.mode=archive` or `--prune.mode=minimal` before the first start.

</TabItem>
<TabItem value="win">

- Install and build Erigon.

```shell
cd execution
git clone https://github.com/erigontech/erigon.git
cd erigon
make erigon
```

- Run Erigon

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

- Install and build Erigon.

```shell
cd execution
git clone https://github.com/erigontech/erigon.git
cd erigon
make erigon
```

- Run Erigon

```shell
./build/bin/erigon \
    --chain=chiado \
    --datadir=/data \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
<TabItem value="win">

- Install and build Erigon.

```shell
cd execution
git clone https://github.com/erigontech/erigon.git
cd erigon
make erigon
```

- Run Erigon

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
