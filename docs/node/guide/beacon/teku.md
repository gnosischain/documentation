---
title: Teku
---

# Run Beacon Node: Teku

Teku is a consensus client built to meet institutional needs and security requirements. Built by PegaSys, an arm of ConsenSys, who are dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform. More information on [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/).

:::tip Learn more about Teku

- [Teku Docs](https://docs.teku.consensys.net/en/latest/)
- [Teku CLI Reference](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/)

:::

:::info 

- Gnosis' Teku repo has sample Dockerfiles and configs
- [https://github.com/gnosischain/teku-client](https://github.com/gnosischain/teku-client)

:::

## Option 1: Run as a System Process 

:::caution

In progress

:::

## Option 2: Run using Docker

Images are referenced under the following pattern `consensys/teku:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/consensys/teku/tags).

:::caution
The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](http://localhost:3000/node/guide/execution) for more information.
:::

### 1. Folder Structure

Create new folders:

```shell
mkdir -p /home/$USER/gnosis/consensus/beacon
```

Including the folders from your Execution client, your folder structure should now look like:

```
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    └── beacon/
```


### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `consensus` container. The file should now look like:

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
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
      - 30304:30304/tcp # p2p
      - 30304:30304/udp # p2p
    expose:
      - 8545 # rpc
      - 8551 # engine api
    volumes:
      - /home/$USER/gnosis/execution:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    command: |
      --config=xdai
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
      --Network.DiscoveryPort=30304
      --HealthChecks.Enabled=false
      --Pruning.CacheMb=2048
    logging:
      driver: "local"

// highlight-start
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
      - 5055:5055/tcp # metrics
    expose:
      - 4000
    volumes:
      - /home/$USER/gnosis/consensus:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - JAVA_OPTS=-Xmx4g
    command: |
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
      --metrics-port=5055
      --initial-state=https://checkpoint.gnosischain.com/eth/v2/debug/beacon/states/finalized
    logging:
      driver: "local"
// highlight-end

networks:
  gnosis_net:
    name: gnosis_net
```

### 3. Environment Variables

Add an `.env` file with your user id (`id --user`) in `/home/$USER/gnosis/.env`.

``` title="/home/$USER/gnosis/.env
PUID=1000
```


### 4. Start Containers

Start the consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```


### 5. Monitor Logs

Check your logs for each service (`execution` or `consensus`) with:

```shell
docker logs -f --tail 500 <service>
```


### 6. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
