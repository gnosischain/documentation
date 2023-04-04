---
title: Lodestar
---

import BeaconFolderStructurePartial from '@site/docs/node/guide/beacon/_partials/_beacon_folder_structure.md';

# Run Beacon Node: Lodestar

:::caution Version check
This page's content is up-to-date for [Lodestar v1.5.1](https://github.com/ChainSafe/lodestar/releases/tag/v1.5.1).
:::

:::caution Prerequisites
The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](../execution/) for more information.
:::

## Overview

- An Ethereum consensus client by [ChainSafe](https://lodestar.chainsafe.io/).

### Key Links

:::info Download Lodestar
Visit Lodestar's docs on how to download Lodestar. 

https://chainsafe.github.io/lodestar/
:::

:::tip

Gnosis' maintains a repo with sample Lodestar Dockerfiles and configs

[https://github.com/gnosischain/lodestar-client](https://github.com/gnosischain/lodestar-client)

:::


| Content       | Link                                                |
| ------------- | --------------------------------------------------- |
| Release Page  | https://github.com/ChainSafe/lodestar/releases/     |
| Docker Images | https://hub.docker.com/r/chainsafe/lodestar/tags    |
| General Docs  | https://chainsafe.github.io/lodestar/               |
| CLI Reference | https://chainsafe.github.io/lodestar/reference/cli/ |

### Checkpoint Sync

We recommend the use of Checkpoint sync to sync your Beacon Node quickly, and avoid long range attacks. 

Gnosis provides a checkpoint sync server at https://checkpoint.gnosischain.com/. 

```shell
# Usage
$ lodestar beacon 
  --checkpointSyncUrl https://checkpoint.gnosischain.com/
```

:::info More about Checkpoint Sync

- Lodestar's [Checkpoint Sync docs](https://chainsafe.github.io/lodestar/usage/beacon-management/#checkpoint-sync)
- Gnosis' [Checkpoint Sync server Status](https://checkpoint.gnosischain.com/)

:::

## Option 1: Run as a System Process

Refer to [Guide](../README.md#step-3-run-a-beacon-node)

## Option 2: Run using Docker

Images are referenced under the following pattern `chainsafe/lodestar:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/chainsafe/lodestar/tags).

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
      - /home/$USER/gnosis/consensus/data:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
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
    logging:
      driver: "local"
networks:
  gnosis_net:
    name: gnosis_net
```

### 3. Start Containers

Start the consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```

### 4. Monitor Logs

Check your logs for each service (`execution` and `consensus`) with:

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />

### 5. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
