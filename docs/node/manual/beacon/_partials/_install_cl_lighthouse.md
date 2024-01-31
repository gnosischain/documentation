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

- Go to the [lighhouse releases page](https://github.com/sigp/lighthouse/releases) and copy the url of the latest release based on your OS version.

- Download the lighthouse-VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file
    ```bash
    tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus
    ```

- Get into the folder
    ```bash
    cd consensus
    ```

 - Execute Lighthouse
    ```bash
    ./lighthouse \
    --network gnosis beacon_node \
    --datadir=data \
    --http \
    --execution-endpoint http://localhost:8551 \
    --execution-jwt ../jwtsecret/jwt.hex \
    --checkpoint-sync-url "https://checkpoint.gnosischain.com"
    ```

</TabItem>
<TabItem value="win">

Lighthouse only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.

- Go to the [lighhouse releases page](https://github.com/sigp/lighthouse/releases) and copy the url of the latest release based on your OS version.

- Download the lighthouse-VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file
    ```bash
    tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus
    ```

- Get into the folder
    ```bash
    cd consensus
    ```

 - Execute Lighthouse
    ```bash
    ./lighthouse \
    --network gnosis beacon_node \
    --datadir=data \
    --http \
    --execution-endpoint http://localhost:8551 \
    --execution-jwt ../jwtsecret/jwt.hex \
    --checkpoint-sync-url "https://checkpoint.gnosischain.com"
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

- Go to the [lighhouse releases page](https://github.com/sigp/lighthouse/releases) and copy the url of the latest release based on your OS version.

- Download the lighthouse-VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file
    ```bash
    tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus
    ```

- Get into the folder
    ```bash
    cd consensus
    ```
- Clone Gonsis Chain configuration repository from github
    ```bash
    git clone https://github.com/gnosischain/configs.git
    ```


- Run Lighthouse beacon node
    ```bash
    ./lighthouse bn \
      --network chiado \
      --execution-endpoints=http://localhost:8551 \
      --execution-jwt=../jwtsecret/jwt.hex \
      --checkpoint-sync-url https://checkpoint.chiadochain.net \
      --disable-deposit-contract-sync
    ```

</TabItem>
<TabItem value="win">

Lighthouse only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.

- Go to the [lighhouse releases page](https://github.com/sigp/lighthouse/releases) and copy the url of the latest release based on your OS version.

- Download the lighthouse-VERSION-ARQ.tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file
    ```bash
    tar -xvf lighthouse-VERSION-ARQ.tar.gz --directory  consensus
    ```

- Get into the folder
    ```bash
    cd consensus
    ```
- Clone Gonsis Chain configuration repository from github
    ```bash
    git clone https://github.com/gnosischain/configs.git
    ```


- Run Lighthouse beacon node
    ```bash
    ./lighthouse bn \
      --network chiado \
      --execution-endpoints=http://localhost:8551 \
      --execution-jwt=../jwtsecret/jwt.hex \
      --checkpoint-sync-url https://checkpoint.chiadochain.net \
      --disable-deposit-contract-sync
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>