---
title: Erigon
---

# Erigon

Formerly TurboGeth, Erigon is an Ethereum client built to enable performance optimizations. Erigon is written in Go and licensed under the GNU LGPLv3.

Repository: [https://github.com/erigontech/erigon](https://github.com/erigontech/erigon)

There are 2 main options for running Erigon:

- Option 1: [Using Docker](#using-docker)
- Option 2: [As a system process](#as-system-process)

## Option 1: Using Docker {#using-docker}

### 1. Folder Structure

Create your folder structure:

```shell
mkdir -p /home/$USER/gnosis/{jwtsecret,execution}
chown -R 1000:1000 /home/$USER/gnosis/execution
```

```
/home/$USER/gnosis/
|── execution/
└── jwtsecret/
```

### 2. Docker Compose

Create a docker-compose file with your favorite text editor in `/home/$USER/gnosis/docker-compose.yml`:

```shell title="/home/$USER/gnosis/docker-compose.yml"
version: "3"
services:
  execution:
    container_name: execution
    image: erigontech/erigon:latest
    restart: unless-stopped
    volumes:
      - /home/$USER/gnosis/execution:/home/erigon/.local/share/erigon
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt:ro
    networks:
      - gnosis_net
    ports:
      - 30303:30303
      - 30303:30303/udp
      - 30304:30304
      - 30304:30304/udp
      - 42069:42069
      - 42069:42069/udp
      - 4000:4000/udp
      - 4001:4001
    expose:
      - 8545
      - 8551
    command: |
      --chain=gnosis
      --http
      --http.api=eth,debug,net,trace,web3,erigon
      --ws
      --metrics
      --metrics.addr=0.0.0.0
      --pprof
      --pprof.addr=0.0.0.0
      --pprof.port=6070
      --authrpc.addr=0.0.0.0
      --authrpc.jwtsecret=/jwt
      --authrpc.vhosts=*
      --prune=htcr
      --torrent.download.rate=16mb
      --torrent.upload.rate=16mb
    user: 1000:1000

networks:
  gnosis_net:
    name: gnosis_net
```

:::tip Note
[By default](https://github.com/ledgerwatch/erigon#other-ports), `metrics` and `pprof` use the same port, 6060. Therefore, it is required to configure the port correctly if both options are enabled.
:::

### 3. JWT Secret

The JWT secret is a token that allows the EL client to communicate with the CL client, and is required for Erigon to operate post-merge. We use `rand` to create a random string, and store the `jwt.hex` file in `/home/$USER/gnosis/jwtsecret/`.

Check [create JWT](../configure-server.md#create-jwt) section in `Step 1: Configure Server`.

### 4. Start Container

Start the Execution layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```

### 5. Monitor Logs

Check your logs with:

import MonitorLogsDockerPartial from '@site/docs/node/manual/validator/\_partials/\_monitor_logs_docker.md';

<MonitorLogsDockerPartial />

### 6. Updating your Node

To update, just pull the new image, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```

## Option 2: Using system process {#as-system-process}

Refer to [Erigon Guide](../README.md#step-2-run-an-execution-client).

## Erigon Archive Node

[Archive node](https://ethereum.org/en/developers/docs/nodes-and-clients/archive-nodes/#what-is-an-archive-node) is the default option by Erigon. It takes about 370GB (January 2023) to run a Gnosis Chain Archive node. Please check the [system requirements](https://github.com/ledgerwatch/erigon#system-requirements) of your server before running an archive node.

To run an Erigon pruned node, `--prune=htcr` command need to be added.
