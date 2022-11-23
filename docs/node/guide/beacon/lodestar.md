---
---

# Lodestar

An Ethereum consensus client by [ChainSafe](https://lodestar.chainsafe.io/).


**Lodestar reference:**

- [General Docs](https://chainsafe.github.io/lodestar/)
- [CLI Reference](https://chainsafe.github.io/lodestar/reference/cli/)


## Using Docker

Images are referenced under the following pattern `chainsafe/lodestar:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/chainsafe/lodestar/tags).

:::note
The Beacon Node requires an Execution client in order to operate. See **Step 2: Run Execution Client** for more information.
:::


### 1. Folder Structure

Create new folders:

```shell
mkdir -p /home/$USER/gnosis/consensus/data
```

Including the folders from your Execution client, your folder structure should now look like:

```
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    └── data/
```


### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `consensus` container. The file should now look like:

```mdx-code-block
<details>
  <summary>Example Docker Compose file</summary>
  <div>
```

```yaml title="/home/$USER/gnosis/docker-compose.yml"
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

  consensus:
    container_name: consensus
    image: chainsafe/lodestar:latest
    restart: always
    networks:
      - gnosis_net
    ports:
      - 9001:9001/tcp # p2p
      - 9001:9001/udp # p2p
      - 5054:5054/tcp # metrics
    expose:
      - 4000
    volumes:
      - /home/$USER/gnosis/consensus/data:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=6144
    command: |
      beacon
      --network=gnosis
      --dataDir=/data
      --preset=gnosis
      --eth1=true
      --execution.urls=http://execution:8551
      --jwt-secret=/jwt.hex
      --logFile=/data/logs/beacon.log
      --logFileLevel=info
      --port=9001
      --rest=true
      --rest.address=0.0.0.0
      --rest.port=4000
      --rest.cors=*
      --discv5=true
      --targetPeers=50
      --metrics=true
      --metrics.port=5054
      --checkpointSyncUrl=https://checkpoint.gnosischain.com/
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


### 3. Start Containers

Start the consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```


### 4. Monitor Logs

Check your logs for each service (`execution` and `consensus`) with:

```shell
docker logs -f --tail 500 <service>
```


### 5. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
