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

- Create a new folder `network_config` and download Chiado config files:
    ```bash
    mkdir network_config &&
    cd network_config &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/config.yaml &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/genesis.ssz &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/deploy_block.txt
    ```

- Execute Lighthouse, replace `[BOOTNODES]` with a comma-separated bootnodes from [this file](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes.yaml); and `[YOUR_ADDRESS]` with your fee recipient address.
    ```bash 
    ./lighthouse \
     --testnet-dir=./network_config bn \
     --datadir=data \
     --disable-upnp \
     --port=9000 \
     --http \
     --http-address=0.0.0.0 \
     --http-port=4000 \
     --target-peers=50 \
     --boot-nodes=enr:[BOOTNODES] \
     --execution-endpoints=http://localhost:8551 \
     --execution-jwt=../jwtsecret/jwt.hex \
     --eth1-endpoints=http://localhost:8545 \
     --debug-level=info \
     --suggested-fee-recipient=[YOUR_ADDRESS] \
     --validator-monitor-auto \
     --subscribe-all-subnets \
     --import-all-attestations \
     --metrics \
     --metrics-port=5054 \
     --metrics-address=0.0.0.0 \
     --checkpoint-sync-url https://checkpoint.chiadochain.net
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

- Create a new folder `network_config` and download Chiado config files:
    ```bash
    mkdir network_config &&
    cd network_config &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/config.yaml &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/genesis.ssz &&
    wget https://github.com/gnosischain/configs/raw/main/chiado/deploy_block.txt
    ```

- Execute Lighthouse, replace `[BOOTNODES]` with a comma-separated bootnodes from [this file](https://github.com/gnosischain/configs/blob/main/chiado/bootnodes.yaml); and `[YOUR_ADDRESS]` with your fee recipient address.
    ```bash 
    ./lighthouse \
     --testnet-dir=./network_config bn \
     --datadir=data \
     --disable-upnp \
     --port=9000 \
     --http \
     --http-address=0.0.0.0 \
     --http-port=4000 \
     --target-peers=50 \
     --boot-nodes=enr:[BOOTNODES] \
     --execution-endpoints=http://localhost:8551 \
     --execution-jwt=../jwtsecret/jwt.hex \
     --eth1-endpoints=http://localhost:8545 \
     --debug-level=info \
     --suggested-fee-recipient=[YOUR_ADDRESS] \
     --validator-monitor-auto \
     --subscribe-all-subnets \
     --import-all-attestations \
     --metrics \
     --metrics-port=5054 \
     --metrics-address=0.0.0.0 \
     --checkpoint-sync-url https://checkpoint.chiadochain.net
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>