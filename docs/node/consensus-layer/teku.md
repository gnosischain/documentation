---
description: Setup
---

# Teku


## Overview {#overview}

Teku is a consensus client built to meet institutional needs and security requirements. Built by PegaSys, an arm of ConsenSys, who are dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform. More information on [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/).


**Teku reference:**

- [General Docs](https://docs.teku.consensys.net/en/latest/)
- [CLI Reference](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/)


## Using Docker


Images are referenced under the following pattern `consensys/teku:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/consensys/teku/tags).

### 1. Folder Structure

Create your folder structure:

```
mkdir -p /home/$USER/gnosis/el-client
mkdir -p /home/$USER/gnosis/cl-client/beacon
mkdir -p /home/$USER/gnosis/cl-client/validator/keys
mkdir /home/$USER/gnosis/cl-client/validator/passwords
mkdir /home/$USER/gnosis/cl-client/validator/slashprotection
mkdir /home/$USER/gnosis/jwtsecret
```

```
/home/$USER/gnosis/
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── beacon/
    └── validators/
        ├── keys/
        ├── passwords/
        └── slashprotection/
```


### 2. Docker Compose

Create a docker-compose file with your favorite text editor in `/home/$USER/gnosis/docker-compose.yml`:

```mdx-code-block
<details>
  <summary>Example Docker Compose file</summary>
  <div>
```

```yaml
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
    user: "$&#123;PUID:-1000&#125;"
    hostname: cl-client
    container_name: cl-client
    image: consensys/teku:latest
    restart: always
    depends_on:
      - el-client
    command: |
      --network=gnosis
      --data-base-path=/data
      --ee-endpoint=http://192.168.32.100:8551
      --ee-jwt-secret-file=/jwtsecret.json
      --eth1-deposit-contract-max-request-size=8000
      --p2p-advertised-ip=$WAN_IP
      --log-destination=CONSOLE
      --validator-keys=/data/validator/keys:/data/validator/passwords
      --validators-proposer-default-fee-recipient=$FEE_RECIPIENT
      --validators-keystore-locking-enabled=false
      --validators-graffiti=$GRAFFITI
      --initial-state=$&#123;CHECKPOINT_URL&#125;/eth/v2/debug/beacon/states/finalized
    networks:
      gnosis_net:
        ipv4_address: 192.168.32.101
    ports:
      - 9000:9000 # p2p
    volumes:
      - /home/$USER/gnosis/cl-client:/data
      - /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - JAVA_OPTS=-Xmx4g
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

Add an `.env` file with your WAN IP (`curl https://ipinfo.io/ip`), fee recepient (your Gnosis address), graffiti, checkpoint url, and your user id (PUID, `id --user`) in `/home/$USER/gnosis/.env`.

```
WAN_IP:123.456.789.012
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/teku
CHECKPOINT_URL=https://checkpoint.gnosischain.com/
PUID=1000
```


### 4. Keystore Location

Add your keystores in `/home/$USER/gnosis/cl-client/validator/keys/` and their password in a file `/home/$USER/gnosis/cl-client/validator/passwords` to get this file structure:

:::note
When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))
:::

```
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── beacon/
    └── validators/
        ├── keys/
        │   ├── keystore-001.json
        │   └── keystore-002.json
        ├── passwords/
        │   └── keystore-001.txt
        │   └── keystore-002.txt
        └── slashprotection/
```


### 5. JWT Secret

Create a new `jwtsecret.json` token:

```
openssl rand -hex 32 | tr -d "\n" > /home/$USER/gnosis/jwtsecret/jwtsecret.json
```


### 6. Import Keystores

Import your validators:

When the Teku `cl-client` container starts, it will search the directories for keystores and passwords, and import them automatically.

:::note
When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))
:::


### 7. Start Containers

Start the execution layer client and consensus layer client listed in the compose file:

```
cd /home/$USER/gnosis
docker-compose up -d
```


### 8. Monitor Logs

Check your logs for each service (`el-client` or `cl-client`) with:

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
