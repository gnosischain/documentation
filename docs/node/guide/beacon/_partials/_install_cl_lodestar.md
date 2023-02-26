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

- Go to the [lodestar releases page](https://github.com/ChainSafe/lodestar/releases/tag/v1.2.2) and copy the url of the latest release.

- Download the lodestar VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file and move under consensus directory.
    ```bash
    tar -xvf VERSION-ARQ.tar.gz --directory  consensus
    ```

Your repo will look like this
```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 lodestar-${version}/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

- Get into the lodestar folder
    ```bash
    cd consensus && cd lodestar-${version} 
    ```
- Install and build across all packages
    ```bash
    yarn install --ignore-optional
    yarn run build
    ```

:::tip
Check that you are install correctly by running `./lodestar --help'
:::

 - Execute Lodestar Beacon Chain
    ```bash 
    ./lodestar \
      --network=gnosis  \
      --dataDir=/data   \
      --preset=gnosis   \
      --eth1=true   \
      --execution.urls=http://execution:8551    \
      --jwt-secret=../../jwtsecret/jwt.hex \
      --logFile=/data/logs/beacon.log   \
      --logFileLevel=info   \
      --port=9000   \
      --rest=true   \
      --rest.address=0.0.0.0    \
      --rest.port=4000  \
      --rest.cors=* \
      --discv5=true \
      --targetPeers=50  \
      --metrics=true    \
      --metrics.port=5054   \
      --checkpointSyncUrl=https://checkpoint.gnosischain.com/ 
    ```



</TabItem>
<TabItem value="win">

Lodestar only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.

- Go to the [lodestar releases page](https://github.com/ChainSafe/lodestar/releases/tag/v1.2.2) and copy the url of the latest release, currently v1.2.2.

- Download the lodestar VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file and move under consensus directory
    ```bash
    tar -xvf VERSION-ARQ.tar.gz --directory  consensus
    ```
Your repo will look like this
```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 lodestar-${version}/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

- Get into the lodestar folder
    ```bash
    cd consensus && cd lodestar-${version} 
    ```
- Install and build across all packages
    ```bash
    yarn install --ignore-optional
    yarn run build
    ```

:::tip
Check that you are install correctly by running `./lodestar --help'
:::

 - Execute Lodestar Beacon Chain
    ```bash 
    ./lodestar \
      --network=gnosis  \
      --dataDir=/data   \
      --preset=gnosis   \
      --eth1=true   \
      --execution.urls=http://execution:8551    \
      --jwt-secret=../../jwtsecret/jwt.hex \
      --logFile=/data/logs/beacon.log   \
      --logFileLevel=info   \
      --port=9000   \
      --rest=true   \
      --rest.address=0.0.0.0    \
      --rest.port=4000  \
      --rest.cors=* \
      --discv5=true \
      --targetPeers=50  \
      --metrics=true    \
      --metrics.port=5054   \
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