import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Install prerequisites first: `git`, a recent Rust toolchain, and common native build tools (`clang`, `cmake`, `pkg-config`).

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

- Install and build [Reth for Gnosis](https://github.com/gnosischain/reth_gnosis).

```shell
cd execution
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
cargo build --release
```

- Run Reth.

```shell
./target/release/reth node \
    --chain gnosis \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex \
    --discovery.addr=0.0.0.0 \
    --discovery.port=30303
```

</TabItem>
<TabItem value="win">

For Windows, use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and run the same commands from the WSL terminal.

- Install and build [Reth for Gnosis](https://github.com/gnosischain/reth_gnosis).

```shell
cd execution
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
cargo build --release
```

- Run Reth.

```shell
./target/release/reth node \
    --chain gnosis \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex \
    --discovery.addr=0.0.0.0 \
    --discovery.port=30303
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

- Install and build [Reth for Gnosis](https://github.com/gnosischain/reth_gnosis).

```shell
cd execution
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
cargo build --release
```

- Run Reth.

```shell
./target/release/reth node \
    --chain chiado \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex \
    --discovery.addr=0.0.0.0 \
    --discovery.port=30303
```

</TabItem>
<TabItem value="win">

For Windows, use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and run the same commands from the WSL terminal.

- Install and build [Reth for Gnosis](https://github.com/gnosischain/reth_gnosis).

```shell
cd execution
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
cargo build --release
```

- Run Reth.

```shell
./target/release/reth node \
    --chain chiado \
    --datadir=/data \
    --http \
    --http.addr=0.0.0.0 \
    --http.port=8545 \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.addr=127.0.0.1 \
    --authrpc.port=8551 \
    --authrpc.jwtsecret=../../jwtsecret/jwt.hex \
    --discovery.addr=0.0.0.0 \
    --discovery.port=30303
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

:::info
On first startup, Reth initializes from the network-specific bootstrap state. Keep the process running until synchronization starts.
:::
