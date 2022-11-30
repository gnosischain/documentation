---
title: Teku
---

import BeaconFolderStructurePartial from '@site/docs/node/guide/beacon/_partials/_beacon_folder_structure.md';

# Run Beacon Node: Teku

:::caution Version check

This page's content is up-to-date for [Teku v22.11.0](https://github.com/ConsenSys/teku/releases/tag/22.11.0).

:::

:::caution
The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](../execution/) for more information.
:::

## Overview

Teku is a consensus client built to meet institutional needs and security requirements. Built by PegaSys, an arm of ConsenSys, who are dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform. More information on [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/).

### Key Links

:::info Download Teku

Visit Teku's page on how to download Lodestar. 

https://docs.teku.consensys.net/en/latest/

:::

:::tip

Gnosis' maintains a repo with sample Teku Dockerfiles and configs
- [https://github.com/gnosischain/teku-client](https://github.com/gnosischain/teku-client)

:::

| Content            | Link                                                                |
| ------------------ | ------------------------------------------------------------------- |
| Release Page       | https://github.com/ConsenSys/teku/releases                          |
| Docker Images      | https://hub.docker.com/r/consensys/teku                             |
| Teku Docs          | https://docs.teku.consensys.net/en/latest/                          |
| Teku CLI Reference | https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/ |

### Checkpoint Sync

We recommend the use of Checkpoint sync to sync your Beacon Node quickly, and avoid long range attacks. 

Gnosis provides a checkpoint sync server at https://checkpoint.gnosischain.com/. 

```shell
# Usage
$ teku
  --initial-state https://checkpoint.gnosischain.com/
```

:::info More about Checkpoint Sync

- Teku's [Checkpoint Sync docs](https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Checkpoint-Start/)
- Gnosis' [Checkpoint Sync server Status](https://checkpoint.gnosischain.com/)

:::

## Option 1: Run as a System Process 

:::caution

In progress

:::

## Option 2: Run using Docker

Images are referenced under the following pattern `consensys/teku:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/consensys/teku/tags).


### 1. Folder Structure

<BeaconFolderStructurePartial />

### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `consensus` container. The file should now look like:

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
version: "3"
services:

  execution:
    # From Step 2
    # ...

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
      - 5054:5054/tcp # metrics
    expose:
      - 4000
    volumes:
// highlight-start
      - /home/$USER/gnosis/consensus:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
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
      --metrics-port=5054
// highlight-next-line
      --initial-state=https://checkpoint.gnosischain.com/eth/v2/debug/beacon/states/finalized
    logging:
      driver: "local"

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

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />


### 6. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
