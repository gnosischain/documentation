---
title: "Running with Docker"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<div className='install'>

## Select a configuration 


import MultidimensionalContentControlsPartial from '@site/docs/node/guide/_partials/_multidimensional-content-controls-partial.md';

<MultidimensionalContentControlsPartial />

## Introduction

At a high level, we'll walk through the following flow:

 1. Configure an **execution node** using an execution-layer client.
 2. Configure a **beacon node** using a consensus-layer client.
 3. Configure a **validator** and stake GNO (optional).
 4. Run the clients using **docker**.


<div className='hide-tabs'>

## Step 1: Prerequisite
Make sure you follow the steps from [Prerequisite](prerequisite) and [Docker](https://docs.docker.com/get-docker/)is installed in your machine before moving to next step.

## Step 2: Docker Compose



<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

<Tabs groupId="execution-clients" defaultValue="nethermind" values={[
    {label: 'Nethermind', value: 'nethermind'},
    {label: 'Besu', value: 'besu'},
    {label: 'Erigon', value: 'erigon'},
    {label: 'Geth', value: 'geth'}
    ]}>
<TabItem value="nethermind">

<Tabs groupId="consensus-clients" defaultValue="lighthouse" values={[
  {label: 'Lighthouse', value: 'lighthouse'},
  {label: 'Lodestar', value: 'lodestar'},
  {label: 'Teku', value: 'teku'},
  {label: 'Nimbus', value: 'nimbus'},
  {label: 'Prysm', value: 'prysm'}
    ]}>
<TabItem value="lighthouse">

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`, copy and paste the Docker Compose file:

```mdx-code-block
<details>
  <summary>Docker Compose file</summary>
  <div>
```

```yaml title="/gnosis/docker-compose.yml"
version: "3"
services:

  execution:
    container_name: execution
    image: nethermind/nethermind:latest
    restart: always
    stop_grace_period: 1m
    networks:
      - gnosis_net
    ports:
      - 30303:30303/tcp # p2p
      - 30303:30303/udp # p2p
    expose:
      - 8545 # rpc
      - 8551 # engine api
    volumes:
      - /gnosis/execution:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    command: |
      --config=gnosis
      --datadir=/data
      --log=INFO
      --Sync.SnapSync=false
      --JsonRpc.Enabled=true
      --JsonRpc.Host=0.0.0.0
      --JsonRpc.Port=8545
      --JsonRpc.EnabledModules=[Web3,Eth,Subscribe,Net,]
      --JsonRpc.JwtSecretFile=/jwt.hex
      --JsonRpc.EngineHost=0.0.0.0
      --JsonRpc.EnginePort=8551
      --Network.DiscoveryPort=30303
      --HealthChecks.Enabled=false
      --Pruning.CacheMb=2048

    // highlight-start
  consensus:
    container_name: consensus
    image: sigp/lighthouse:latest-modern
    restart: always
    networks:
      - gnosis_net
    ports:
      - 9000:9000/tcp # p2p
      - 9000:9000/udp # p2p
      - 5054:5054/tcp # metrics
    expose:
      - 4000 # http
    volumes:
// highlight-start
      - /gnosis/consensus/data:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
// highlight-end
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    command: |
      lighthouse
      beacon_node
// highlight-next-line
      --network=gnosis
      --disable-upnp
      --datadir=/data
      --port=9000
      --http
      --http-address=0.0.0.0
      --http-port=4000
      --target-peers=50
      --execution-endpoint=http://execution:8551
      --execution-jwt=/jwt.hex
      --debug-level=info
      --validator-monitor-auto
      --subscribe-all-subnets
      --import-all-attestations
      --metrics
      --metrics-port=5054
      --metrics-address=0.0.0.0
// highlight-next-line
      --checkpoint-sync-url=https://checkpoint.gnosischain.com/

  validator:
    container_name: validator
    image: sigp/lighthouse:latest-modern
    restart: always
    command: |
      lighthouse
      validator_client
    // highlight-next-line
      --network=gnosis
      --datadir=/data/validators
      --beacon-nodes=http://consensus:4000
    // highlight-next-line
      --graffiti=$GRAFFITI
      --debug-level=info
    // highlight-next-line
      --suggested-fee-recipient=$FEE_RECIPIENT
      --metrics
      --metrics-address=0.0.0.0
      --metrics-port=5064
    networks:
      - gnosis_net
    ports:
      - 5064:5064/tcp
    volumes:
    // highlight-next-line
      - /gnosis/consensus/validators:/data/validators
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    logging:
      driver: "local"


networks:
  gnosis_net:
    name: gnosis_net
```

```mdx-code-block
  </div>
</details>
```

</TabItem>

<TabItem value="chiado">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`.    
Copy and paste the Docker compose file example as in Gnosis mainnet version, but changing network to `chiado`.    
For other details that need to be configured, please refer to [running with cli](running-with-cli.md) and select `chiado` network.

</TabItem>
</Tabs>


</TabItem>

<TabItem value="lodestar">
<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`, copy and paste the Docker Compose file:

```mdx-code-block
<details>
  <summary>Docker Compose file</summary>
  <div>
```

```yaml title="/gnosis/docker-compose.yml"
version: "3"
services:

  execution:
    container_name: execution
    image: nethermind/nethermind:latest
    restart: always
    stop_grace_period: 1m
    networks:
      - gnosis_net
    ports:
      - 30303:30303/tcp # p2p
      - 30303:30303/udp # p2p
    expose:
      - 8545 # rpc
      - 8551 # engine api
    volumes:
      - /gnosis/execution:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    command: |
      --config=gnosis
      --datadir=/data
      --log=INFO
      --Sync.SnapSync=false
      --JsonRpc.Enabled=true
      --JsonRpc.Host=0.0.0.0
      --JsonRpc.Port=8545
      --JsonRpc.EnabledModules=[Web3,Eth,Subscribe,Net,]
      --JsonRpc.JwtSecretFile=/jwt.hex
      --JsonRpc.EngineHost=0.0.0.0
      --JsonRpc.EnginePort=8551
      --Network.DiscoveryPort=30303
      --HealthChecks.Enabled=false
      --Pruning.CacheMb=2048

  consensus:
    container_name: consensus
    image: chainsafe/lodestar:latest
    restart: always
    networks:
      - gnosis_net
    ports:
      - 9000:9000/tcp # p2p
      - 9000:9000/udp # p2p
      - 5054:5054/tcp # metrics
    expose:
      - 4000
    volumes:
// highlight-start
      - /gnosis/consensus/data:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
// highlight-end
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=6144
    command: |
      beacon
// highlight-next-line
      --network=gnosis
      --dataDir=/data
// highlight-next-line
      --preset=gnosis
      --eth1=true
      --execution.urls=http://execution:8551
      --jwt-secret=/jwt.hex
      --logFile=/data/logs/beacon.log
      --logFileLevel=info
      --port=9000
      --rest=true
      --rest.address=0.0.0.0
      --rest.port=4000
      --rest.cors=*
      --discv5=true
      --targetPeers=50
      --metrics=true
      --metrics.port=5054
// highlight-next-line
      --checkpointSyncUrl=https://checkpoint.gnosischain.com/ 

  validator:
    container_name: validator
    image: chainsafe/lodestar:latest
    restart: always
    networks:
      - gnosis_net
    ports:
      - 5064:5064/tcp
    volumes:
      - /gnosis/consensus/validators:/data/validators
      - /gnosis/consensus/keystores:/keystores
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=4096
    command: |
      validator
      --network=gnosis
      --dataDir=/data/validators
      --logFile=/data/validators/logs/validator.log
      --logFileLevel=info
      --server=http://consensus:4000
      --metrics=true
      --metrics.address=0.0.0.0
      --metrics.port=5064
    // highlight-next-line
      --suggestedFeeRecipient=$FEE_RECIPIENT
    // highlight-next-line
      --graffiti=$GRAFFITI
      --importKeystores=/keystores
      --importKeystoresPassword=/keystores/password.txt
    logging:
      driver: "local"


networks:
  gnosis_net:
    name: gnosis_net
```

```mdx-code-block
  </div>
</details>
```

</TabItem>
<TabItem value="chiado">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`.    
Copy and paste the Docker compose file example as in Gnosis mainnet version, but changing network to `chiado`.    
For other details that need to be configured, please refer to [running with cli](running-with-cli.md) and select `chiado` network.

</TabItem>
</Tabs>
</TabItem>


<TabItem value="teku">
<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`, copy and paste the Docker Compose file:

```mdx-code-block
<details>
  <summary>Docker Compose file</summary>
  <div>
```

```yaml title="/gnosis/docker-compose.yml"
version: "3"
services:

  execution:
    container_name: execution
    image: nethermind/nethermind:latest
    restart: always
    stop_grace_period: 1m
    networks:
      - gnosis_net
    ports:
      - 30303:30303/tcp # p2p
      - 30303:30303/udp # p2p
    expose:
      - 8545 # rpc
      - 8551 # engine api
    volumes:
      - /gnosis/execution:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    command: |
      --config=gnosis
      --datadir=/data
      --log=INFO
      --Sync.SnapSync=false
      --JsonRpc.Enabled=true
      --JsonRpc.Host=0.0.0.0
      --JsonRpc.Port=8545
      --JsonRpc.EnabledModules=[Web3,Eth,Subscribe,Net,]
      --JsonRpc.JwtSecretFile=/jwt.hex
      --JsonRpc.EngineHost=0.0.0.0
      --JsonRpc.EnginePort=8551
      --Network.DiscoveryPort=30303
      --HealthChecks.Enabled=false
      --Pruning.CacheMb=2048

  consensus:
    user: "${PUID:-1000}"
    container_name: consensus
    image: consensys/teku:latest
    restart: always
    networks:
      - gnosis_net
    ports:
      - 9000:9000/tcp # p2p
      - 9000:9000/udp # p2p
      - 8008:8008/tcp # metrics
    expose:
      - 4000
    volumes:
// highlight-start
      - /gnosis/consensus:/data
      - /gnosis/jwtsecret/jwt.hex:/jwt.hex
// highlight-end
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - JAVA_OPTS=-Xmx4g
    command: |
// highlight-next-line
      --network=gnosis
      --data-base-path=/data
      --data-storage-archive-frequency=2048
      --data-storage-mode=PRUNE
      --data-storage-non-canonical-blocks-enabled=false
      --log-destination=CONSOLE
      --logging=info
      --p2p-enabled=true
      --p2p-port=9000
      --p2p-peer-upper-bound=50
      --rest-api-enabled=true
      --rest-api-host-allowlist=*
      --rest-api-interface=0.0.0.0
      --rest-api-port=4000
      --rest-api-cors-origins=*
      --rest-api-docs-enabled=false
      --ee-endpoint=http://execution:8551
      --ee-jwt-secret-file=/jwt.hex
      --eth1-deposit-contract-max-request-size=8000
      --metrics-enabled=true
      --metrics-host-allowlist=*
      --metrics-interface=0.0.0.0
      --metrics-port=8008
      --initial-state=https://checkpoint.gnosischain.com/eth/v2/debug/beacon/states/finalized
      # highlight-start
      --validators-proposer-default-fee-recipient=$FEE_RECIPIENT
      --validator-keys=/data/validator/keys:/data/validator/passwords
      --validators-keystore-locking-enabled=true
      --validators-graffiti=$GRAFFITI
# highlight-end

    logging:
      driver: "local"


networks:
  gnosis_net:
    name: gnosis_net
```

```mdx-code-block
  </div>
</details>
```

You can start running Teku beacon chain and validator with single command line. In this docker compose file example, the `--validator` flags are added to run validator(s).

```
--validators-proposer-default-fee-recipient=$FEE_RECIPIENT
--validator-keys=/data/validator/keys:/data/validator/passwords
--validators-keystore-locking-enabled=true
--validators-graffiti=$GRAFFITI
```

Add an `.env` file with your fee recepient (Gnosis address) and graffiti in `gnosis/.env`.

```yaml title="/gnosis/.env"
PUID=1000
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/teku
```

Add your keystores in `gnosis/consensus/validator/keys/` and their password in a file `gnosis/consensus/validator/passwords` to get this file structure:

:::tip

When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))

:::

```shell
📂 gnosis
├── docker-compose.yml
├── .env
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 beacon/
    └── 📂 validators/
# highlight-start
        ├── 📂 keys/
        │   ├── keystore-001.json
        │   └── keystore-002.json
        ├── 📂 passwords/
        │   └── keystore-001.txt
        │   └── keystore-002.txt
        └── 📂 slashprotection/
# highlight-end
```

</TabItem>
<TabItem value="chiado">

Create a docker-compose file with your favorite text editor in `/gnosis/docker-compose.yml`.    
Copy and paste the Docker compose file example as in Gnosis mainnet version, but changing network to `chiado`.    
For other details that need to be configured, please refer to [running with cli](running-with-cli.md) and select `chiado` network.

</TabItem>
</Tabs>

</TabItem>
</Tabs>
</TabItem>
</Tabs>

</TabItem>

<TabItem value="win">

:::tip
Running on Ubuntu/MacOS is recommended, if you are using Windows, please run on [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
:::
</TabItem>
</Tabs>


## Step 3: Start Cointainers
Start the consensus layer client listed in the compose file:

```shell
cd /gnosis
docker-compose up -d
```

## Step 4: Monitor Logs

Check your logs for each service (`execution`, `consensus`, or `validator`) with:

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />


## Step 5: Staking for Validator

Once your node is up and running, you can deposit GNO token into Deposit contract to activate your validator.
Follow the instruction from [Staking for Validator](staking-for-validator.md).




## Step 6: Update your Node
To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```

</div>

</div>