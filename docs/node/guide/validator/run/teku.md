---
title: Teku
---

# Run Validator: Teku

:::caution
The Validator requires a Consensus client (also known as Beacon Node) in order to operate. See [Step 3: Run Beacon Node: Teku](../../beacon/teku.md) for more information.
:::

## Option 1: Run as System Process {#system-process}

Refer to [Guide](../../README.md#step-4-run-a-validator)

## Option 2: Run using Docker {#docker}

### 1. Folder Structure

Create new folders:

```shell
mkdir -p /home/$USER/gnosis/consensus/validator/keys
mkdir /home/$USER/gnosis/consensus/validator/passwords
mkdir /home/$USER/gnosis/consensus/validator/slashprotection
```

Including the folders from your Execution and Consensus clients, your folder structure should now look like:

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    ├── beacon/
    └── validators/
        ├── keys/
        ├── passwords/
        └── slashprotection/
```

### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the following commands to your `consensus` container.

```
      --validators-proposer-default-fee-recipient=$FEE_RECIPIENT
      --validator-keys=/data/validator/keys:/data/validator/passwords
      --validators-keystore-locking-enabled=true
      --validators-graffiti=$GRAFFITI
```

The file should now look like:

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
      - 8008:8008/tcp # metrics
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
      --metrics-port=8008
      --initial-state=https://checkpoint.gnosis.gateway.fm//eth/v2/debug/beacon/states/finalized 
# highlight-start
      --validators-proposer-default-fee-recipient=$FEE_RECIPIENT
      --validator-keys=/data/validator/keys:/data/validator/passwords
      --validators-keystore-locking-enabled=true
      --validators-graffiti=$GRAFFITI
# highlight-end
    logging:
      driver: "local"

networks:
  gnosis_net:
    name: gnosis_net
```


### 3. Environment Variables

Add an `.env` file with your fee recepient (your Gnosis address) and graffiti in `/home/$USER/gnosis/.env`.

```yaml title="/home/$USER/gnosis/.env"
PUID=1000
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/teku
```
Replace `validators-proposer-default-fee-recipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt competely. It is strongly recommended that you configure this value in your setup.
Learn more about [validators-proposer-default-fee-recipient](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-proposer-default-fee-recipient) flag in Teku docs.

Replace [`validator-keys`](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validator-keys) with the location where `keystores- *.json` and `keystore- *.txt` are stored. 

Replace [`validators-graffiti`](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-graffiti) with your own graffiti.  It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.


Learn more about the CLI commands and their options [here](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/).



### 4. Keystore Location

Add your keystores in `/home/$USER/gnosis/consensus/validator/keys/` and their password in a file `/home/$USER/gnosis/consensus/validator/passwords` to get this file structure:

:::tip

When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))

:::

```shell
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── execution/
└── consensus/
    ├── beacon/
    └── validators/
# highlight-start
        ├── keys/
        │   ├── keystore-001.json
        │   └── keystore-002.json
        ├── passwords/
        │   └── keystore-001.txt
        │   └── keystore-002.txt
        └── slashprotection/
# highlight-end
```


### 5. Import Keystores

Import your validators:

When the Teku `consensus` container starts, it will search the directories for keystores and passwords, and import them automatically.

:::tip

When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))

:::


### 6. Restart Containers

Restart the execution layer client and consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose down
docker-compose up -d
```


### 7. Monitor Logs

Check your logs for each service (`execution`, `consensus` or `validator`) with:

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />


### 8. Make a Deposit

Make deposit once your node is fully synced (this can take a few hours depending on setup).

:::caution
**At this stage you should have your EL and CL fully synced and validators must be imported to your CL.**
:::

_See section **Fund Validator**_ 


### 9. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
