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


<details>
  <summary>Example Docker Compose file</summary>
  <div>
  <pre>
    version: "3"<br/>
    services:<br/>
    <br/>
    &nbsp;&nbsp;el-client:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: nethermind/nethermind:latest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;stop_grace_period: 1m<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--config xdai<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--datadir /data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Enabled true<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Host 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Port 8545<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.JwtSecretFile /jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.EngineHost 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.EnginePort 8551<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Merge.Enabled true<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;ports:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "30303:30303/tcp"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "30303:30303/udp"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/el-client:/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    &nbsp;&nbsp;cl-client:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: chainsafe/lodestar:latest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beacon<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--network gnosis<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--dataDir /data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--rest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--rest.address 0.0.0.0<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--execution.urls http://192.168.32.100:8551<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--jwt-secret /jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--logFile none<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--checkpointSyncUrl $CHECKPOINT_URL<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.101<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;ports:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "9000:9000" #p2p<br/>
    #      - "9596:9596" # REST API port<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client/data:/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;environment:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NODE_OPTIONS=--max-old-space-size=4096<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    &nbsp;&nbsp;validator:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: validator<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: validator<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: chainsafe/lodestar:latest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validator<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--network gnosis<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--dataDir /data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--importKeystores /keystores<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--importKeystoresPassword /keystores/password.txt<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--server http://192.168.32.101:9596<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--logFile none<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.102<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client/validators:/data/validators<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client/keystores:/keystores<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;environment:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NODE_OPTIONS=--max-old-space-size=4096<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    networks:<br/>
    &nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;pam:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: default<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- subnet: 192.168.32.0/24<br/>
  </pre>
  </div>
</details>


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
