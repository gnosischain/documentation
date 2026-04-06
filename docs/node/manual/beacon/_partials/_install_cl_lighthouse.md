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

- Go to the [Lighthouse releases page](https://github.com/sigp/lighthouse/releases) and copy the URL of the latest release for your OS/architecture.

- Download the `lighthouse-<VERSION>-<ARCH>.tar.gz` binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file.
    ```bash
    tar -xvf [FILE_NAME] --directory consensus
    ```

- Get into the folder.
    ```bash
    cd consensus
    ```

- Execute Lighthouse beacon node.
    ```bash
    ./lighthouse beacon_node \
      --network gnosis \
      --datadir=data \
      --http \
      --execution-endpoint=http://localhost:8551 \
      --execution-jwt=../jwtsecret/jwt.hex \
      --checkpoint-sync-url=https://checkpoint.gnosischain.com
    ```

</TabItem>
<TabItem value="win">

Lighthouse only runs on Linux. To run it on Windows, [install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the same steps in the WSL terminal.

</TabItem>
</Tabs>

</TabItem>
<TabItem value="chiado">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

- Go to the [Lighthouse releases page](https://github.com/sigp/lighthouse/releases) and copy the URL of the latest release for your OS/architecture.

- Download the `lighthouse-<VERSION>-<ARCH>.tar.gz` binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file.
    ```bash
    tar -xvf [FILE_NAME] --directory consensus
    ```

- Get into the folder.
    ```bash
    cd consensus
    ```

- Run Lighthouse beacon node.
    ```bash
    ./lighthouse beacon_node \
      --network chiado \
      --datadir=data \
      --execution-endpoint=http://localhost:8551 \
      --execution-jwt=../jwtsecret/jwt.hex \
      --checkpoint-sync-url=https://checkpoint.chiadochain.net
    ```

</TabItem>
<TabItem value="win">

Lighthouse only runs on Linux. To run it on Windows, [install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the same steps in the WSL terminal.

</TabItem>
</Tabs>

</TabItem>
</Tabs>
