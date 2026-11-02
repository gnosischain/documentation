import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Install prerequisites first: `git`, `make`, and a recent Go toolchain.

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

- Install and build [Gnosis Geth](https://github.com/gnosischain/go-ethereum).

```shell
cd execution
git clone https://github.com/gnosischain/go-ethereum.git
cd go-ethereum
make geth
```

- Run Geth.

```shell
./build/bin/geth \
    --gnosis \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=eth,net,web3 \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
<TabItem value="win">

For Windows, use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and run the same commands from the WSL terminal.

- Install and build [Gnosis Geth](https://github.com/gnosischain/go-ethereum).

```shell
cd execution
git clone https://github.com/gnosischain/go-ethereum.git
cd go-ethereum
make geth
```

- Run Geth.

```shell
./build/bin/geth \
    --gnosis \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=eth,net,web3 \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
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

- Install and build [Gnosis Geth](https://github.com/gnosischain/go-ethereum).

```shell
cd execution
git clone https://github.com/gnosischain/go-ethereum.git
cd go-ethereum
make geth
```

- Run Geth.

```shell
./build/bin/geth \
    --chiado \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=eth,net,web3 \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
<TabItem value="win">

For Windows, use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and run the same commands from the WSL terminal.

- Install and build [Gnosis Geth](https://github.com/gnosischain/go-ethereum).

```shell
cd execution
git clone https://github.com/gnosischain/go-ethereum.git
cd go-ethereum
make geth
```

- Run Geth.

```shell
./build/bin/geth \
    --chiado \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=eth,net,web3 \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>
