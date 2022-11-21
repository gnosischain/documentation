---
description: Setup
---

# Lodestar


## Overview

An Ethereum consensus client by [ChainSafe](https://lodestar.chainsafe.io/).


**Lodestar reference:**

- [General Docs](https://chainsafe.github.io/lodestar/)
- [CLI Reference](https://chainsafe.github.io/lodestar/reference/cli/)


## Using Docker

Images are referenced under the following pattern `chainsafe/lodestar:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/chainsafe/lodestar/tags).

### 1. Folder Structure

Create your folder structure:

```
mkdir -p /home/$USER/gnosis/el-client
mkdir -p /home/$USER/gnosis/cl-client/data
mkdir /home/$USER/gnosis/cl-client/keystores
mkdir /home/$USER/gnosis/jwtsecret
```

```
/home/$USER/gnosis/
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── data/
    └── keystores/
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

  el-client:
    hostname: el-client
    container_name: el-client
    image: nethermind/nethermind:latest
    restart: always
    stop_grace_period: 1m
    command: |
      --config xdai
      --datadir /data
      --JsonRpc.Enabled true
      --JsonRpc.Host 192.168.32.100
      --JsonRpc.Port 8545
      --JsonRpc.JwtSecretFile /jwtsecret.json
      --JsonRpc.EngineHost 192.168.32.100
      --JsonRpc.EnginePort 8551
      --Merge.Enabled true
    networks:
      gnosis_net:
        ipv4_address: 192.168.32.100
    ports:
      - "30303:30303/tcp"
      - "30303:30303/udp"
    volumes:
      - /home/$USER/gnosis/el-client:/data
      - /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    logging:
      driver: "local"

  cl-client:
    hostname: cl-client
    container_name: cl-client
    image: chainsafe/lodestar:latest
    restart: always
    depends_on:
      - el-client
    command: |
      beacon
      --network gnosis
      --dataDir /data
      --rest
      --rest.address 0.0.0.0
      --execution.urls http://192.168.32.100:8551
      --jwt-secret /jwtsecret.json
      --logFile none
      --checkpointSyncUrl $CHECKPOINT_URL
    networks:
      gnosis_net:
        ipv4_address: 192.168.32.101
    ports:
      - "9000:9000" #p2p
#      - "9596:9596" # REST API port
    volumes:
      - /home/$USER/gnosis/cl-client/data:/data
      - /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=4096
    logging:
      driver: "local"

  validator:
    hostname: validator
    container_name: validator
    image: chainsafe/lodestar:latest
    restart: always
    depends_on:
      - cl-client
    command: |
      validator
      --network gnosis
      --dataDir /data
      --importKeystores /keystores
      --importKeystoresPassword /keystores/password.txt
      --server http://192.168.32.101:9596
      --logFile none
    networks:
      gnosis_net:
        ipv4_address: 192.168.32.102
    volumes:
      - /home/$USER/gnosis/cl-client/validators:/data/validators
      - /home/$USER/gnosis/cl-client/keystores:/keystores
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=4096
    logging:
      driver: "local"

networks:
  gnosis_net:
    pam:
      driver: default
      config:
        - subnet: 192.168.32.0/24
```

```mdx-code-block
  </div>
</details>
```

### 3. Environment Variables

Add an `.env` file with your WAN IP (`curl https://ipinfo.io/ip`), fee recepient (your Gnosis address), graffiti, and checkpoint url in `/home/$USER/gnosis/.env`.

```
WAN_IP:123.456.789.012
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/lodestar
CHECKPOINT_URL=https://checkpoint.gnosischain.com/
```


### 4. Keystore Location

Add your keystores in `/home/$USER/gnosis/cl-client/keystores/` and their password in a file `/home/$USER/gnosis/cl-client/keystores/password.txt` to get this file structure:

```
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── data/
    └── keystores/
        ├── keystore-001.json
        ├── keystore-002.json
        └── password.txt
```


### 5. JWT Secret

Create a new `jwtsecret.json` token:

```
openssl rand -hex 32 | tr -d "\n" > /home/$USER/gnosis/jwtsecret/jwtsecret.json
```


### 6. Import Keystores

Import your validators:

When the Lodestar `validator` container starts, it will search the directories for keystores and passwords, and import them automatically.


### 7. Start Containers

Start the execution layer client, consensus layer client, and validator service listed in the compose file:

```
cd /home/$USER/gnosis
docker-compose up -d
```


### 8. Monitor Logs

Check your logs for each service (`el-client`, `cl-client`, or `validator`) with:

```
docker logs -f --tail 500 <service>
```


### 9. Make a Deposit

Make deposit once your node is fully synced (this can take a few hours depending on setup).

:::caution
**At this stage you should have your EL and CL fully synced and validators must be imported to your CL.**
:::

_See section Fund your Validator_ 


### 10. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
