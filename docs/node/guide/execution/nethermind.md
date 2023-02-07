---
title: Nethermind
---

# Nethermind

Nethermind is an Execution layer client developed by the [Nethermind team](https://nethermind.io/nethermind-client/).

**Nethermind reference:**

[https://docs.nethermind.io/nethermind/](https://docs.nethermind.io/nethermind/)

There are 2 main options for running Nethermind:
* Option 1: [Using Docker](#using-docker)
* Option 2: [As a system process](#as-system-process)

Nethermind can be configured to run different types of nodes:
* Full Node (Recommended)
* [Archival Node](#archival-node)


:::note
Ensure the prerequisite steps have been completed in **Step 1: Configure Server**.
:::

## Option 1: Using Docker {#using-docker}


### 1. Folder Structure

Create your folder structure:

```shell
mkdir -p /home/$USER/gnosis/execution
mkdir /home/$USER/gnosis/jwtsecret
```

```
/home/$USER/gnosis/
├── jwtsecret/
└── execution/
```


### 2. Docker Compose

Create a docker-compose file with your favorite text editor in `/home/$USER/gnosis/docker-compose.yml`:

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
      - 30303:30303/tcp # p2p
      - 30303:30303/udp # p2p
    expose:
      - 8545 # rpc
      - 8551 # engine api
    volumes:
      - /home/$USER/gnosis/execution:/data
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt.hex
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


### 3. JWT Secret

The JWT secret is a token that allows the EL client to communicate with the CL client, and is required for Nethermind to operate post-merge. We use `rand` to create a random string, and store the `jwt.hex` file in `/home/$USER/gnosis/jwtsecret/`.

Create a new JWT secret file:

```shell title="/home/$USER/gnosis/jwtsecret/jwt.hex"
openssl rand -hex 32 | tr -d "\n" > /home/$USER/gnosis/jwtsecret/jwt.hex
```


### 4. Start Container

Start the Execution layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```


### 5. Monitor Logs

Check your logs with:

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />


### 6. Updating your Node

To update, just pull the new image, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```

## Option 2: Running as System Process {#as-system-process}

### Installing Nethermind {#installing-nethermind}

[https://downloads.nethermind.io/](https://downloads.nethermind.io/)


### Running Nethermind {#running-nethermind}

Nethermind has ‘Nethermind launcher’ an easy GUI where you can configure your node from release.

[https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#running-release](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#running-release)

Windows
```
# Gnosis Mainnet
./Nethermind.Runner --config gnosis --JsonRpc.JwtSecretFile=<PATH to jwt.hex>

# Chiado Testnet
./Nethermind.Runner --config chiado --JsonRpc.JwtSecretFile=<PATH to jwt.hex>
```

Linux and MAC
```
# Gnosis Mainnet
nethermind --config gnosis --JsonRpc.JwtSecretFile=<PATH to jwt.hex>

# Chiado Testnet
nethermind --config chiado --JsonRpc.JwtSecretFile=<PATH to jwt.hex>
```


## Nethermind Archival Node {#archival-node}

An archival node executes a heavy historical sync verifying all the transactions and keeping all of the historical data. Archive sync is the 'heaviest' and slowest sync mode, and can take 2 - 6 weeks depending on the speed of your IO.

:::caution
Make sure there's enough disk space to accommodate the archive data, the minimum amount of disk required to run the archive node is +2 TB (Feb 2023).
:::

Edit your `/home/$USER/gnosis/docker-compose.yml` and change the `--config` from `gnosis` to `gnosis_archive`.

```yaml
    command: |
      --config=gnosis_archive
```

