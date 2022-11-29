---
title: Lighthouse
---

# Run Beacon Node: Lighthouse

:::caution Version check

This page's content is up-to-date for [Lighthouse v3.3.0](https://github.com/sigp/lighthouse/releases/tag/v3.3.0).

:::

:::caution Prerequisites

The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](../execution/) for more information.

:::

## Overview

Lighthouse is an Ethereum and Gnosis consensus layer client written in Rust by [Sigma Prime](https://lighthouse.sigmaprime.io/).

### Key Links

:::info Download Lighthouse 

Visit Lighthouse's page on how to download Lighthouse. 

https://lighthouse-book.sigmaprime.io/installation.html

:::

:::tip Learn More about Lighthouse

- Lighthouse Repo: [https://github.com/sigp/lighthouse](https://github.com/sigp/lighthouse)
- Lighthouse Documentation: [https://lighthouse-book.sigmaprime.io/](https://lighthouse-book.sigmaprime.io/) 

:::

:::info  
Gnosis maintains a repo with sample Lighthouse Dockerfiles and configs

[https://github.com/gnosischain/lighthouse-client](https://github.com/gnosischain/lighthouse-client)

:::

| Content         | Link                                                      |
| --------------- | --------------------------------------------------------- |
| Release Page    | https://github.com/sigp/lighthouse/releases/              |
| Docker Images   | https://hub.docker.com/repository/docker/sigp/lighthouse/ |
| Lighthouse Docs | https://lighthouse-book.sigmaprime.io/                    |
| Github Repo     | https://github.com/sigp/lighthouse                        |

### Checkpoint Sync

We recommend the use of Checkpoint sync to sync your Beacon Node quickly, and avoid long range attacks. 

Gnosis provides a checkpoint sync server at https://checkpoint.gnosischain.com/. 

```shell
# Usage
$ lighthouse bn
  --checkpointSyncUrl https://checkpoint.gnosischain.com/
```

:::info More about Checkpoint Sync

- Lighthouse's [Checkpoint Sync docs](https://lighthouse-book.sigmaprime.io/checkpoint-sync.html)
- Gnosis' [Checkpoint Sync server Status](https://checkpoint.gnosischain.com/)

:::

## Option 1: Run as a System Process

:::caution

In progress

:::

## Option 2: Run using Docker

Images are referenced under the following pattern `sigp/lighthouse:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/sigp/lighthouse/tags).

Most users should use the `latest-modern` tag, which corresponds to the latest stable release of Lighthouse with optimizations enabled. If you are running on older hardware then the default latest image bundles a portable version of Lighthouse which is slower but with better hardware compatibility.

:::caution

The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](../execution/) for more information.

:::


### 1. Folder Structure

Create new folders:

```shell
mkdir -p /home/$USER/gnosis/consensus/data
```

Including the folders from your Execution client, your folder structure should now look like:

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    └── data/
```

### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `consensus` container. The file should now look like:

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
version: "3"
services:

  execution:
    # From Step 2
    # ...

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
      - /home/$USER/gnosis/consensus/data:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
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
