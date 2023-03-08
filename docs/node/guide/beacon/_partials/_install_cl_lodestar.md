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

- Clone the repo locally

```shell
git clone https://github.com/chainsafe/lodestar.git
```

- Install and build all the packages 
```shell
cd lodestar
yarn install --ignore-optional
yarn run build
```

Your repo will look like this
```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 lodestar/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

:::tip
Check that you are install correctly by running `./lodestar --help'
:::

 - Execute Lodestar Beacon Chain
    ```bash 
    ./lodestar beacon   \
      --network=gnosis  \
      --execution.urls=http://localhost:8551    \
      --jwt-secret=../../jwtsecret/jwt.hex \
      --metrics=true    \
      --metrics.port=8008   \
      --checkpointSyncUrl=https://checkpoint.gnosischain.com/ 
    ```



</TabItem>
<TabItem value="win">

Lodestar only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.

- Clone the repo locally

```shell
git clone https://github.com/chainsafe/lodestar.git
```

- Install and build all the packages 
```shell
cd lodestar
yarn install --ignore-optional
yarn run build
```

Your repo will look like this
```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 lodestar/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

:::tip
Check that you are install correctly by running `./lodestar --help'
:::

 - Execute Lodestar Beacon Chain
    ```bash 
    ./lodestar beacon   \
      --network=gnosis  \
      --execution.urls=http://localhost:8551    \
      --jwt-secret=../../jwtsecret/jwt.hex \
      --metrics=true    \
      --metrics.port=8008   \
      --checkpointSyncUrl=https://checkpoint.gnosischain.com/ 
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

Lodestar doesn't support Chiado at the moment.

</TabItem>
<TabItem value="win">

Lodestar doesn't support Chiado at the moment.

</TabItem>
</Tabs>

</TabItem>
</Tabs>