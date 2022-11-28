---
title: Lodestar
---

# Run Validator: Lodestar

## Option 1: Run as System Process

:::caution

In progress

:::

## Option 2: Run using Docker

:::caution
The Validator requires a Consensus Client (also known as Beacon Node) in order to operate. See [Step 3: Run Beacon Node - Lodestar](../../beacon/lodestar.md) for more information.
:::

### 1. Folder Structure

Create new folders:

```shell
mkdir /home/$USER/gnosis/consensus/keystores
```

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    ├── data/
    └── keystores/
```

### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `validator` container. You will also need to add the command `--suggestedFeeRecipient=$FEE_RECIPIENT` to your `consensus` container. The file should now look like:

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
version: "3"
services:

  execution:
    # From Step 2
    # ... 

  consensus:
    # From Step 3
    # ...

// highlight-start
  validator:
    container_name: validator
    image: chainsafe/lodestar:latest
    restart: always
    networks:
      - gnosis_net
    volumes:
      - /home/$USER/gnosis/consensus/validators:/data/validators
      - /home/$USER/gnosis/consensus/keystores:/keystores
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NODE_OPTIONS=--max-old-space-size=4096
    command: |
      validator
      --network=gnosis
      --dataDir=/data/validators
      --logFile=/data/validators/logs/validator.log
      --logFileLevel=info
      --server=http://consensus:4000
      --metrics=true
      --metrics.address=0.0.0.0
      --metrics.port=5056
      --suggestedFeeRecipient=$FEE_RECIPIENT
      --graffiti=$GRAFFITI
      --importKeystores=/keystores
      --importKeystoresPassword=/keystores/password.txt
    logging:
      driver: "local"
// highlight-end

networks:
  gnosis_net:
    name: gnosis_net
```

### 3. Environment Variables

Add an `.env` file with your fee recepient (your Gnosis address) and graffiti in `/home/$USER/gnosis/.env`.

```yaml title="/home/$USER/gnosis/.env"
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/lodestar
```


### 4. Keystore Location

Add your keystores in `/home/$USER/gnosis/consensus/keystores/` and their password in a file `/home/$USER/gnosis/consensus/keystores/password.txt` to get this file structure:

```shell
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── execution/
└── consensus/
    ├── data/
# highlight-start
    └── keystores/
        ├── keystore-001.json
        ├── keystore-002.json
        └── password.txt
# highlight-end
```


### 5. Import Keystores

Import your validators:

When the Lodestar `validator` container starts, it will search the directories for the keystores and password, and import them automatically.


### 6. Start Containers

Start the validator service listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```


### 7. Monitor Logs

Check your logs for each service (`execution`, `consensus`, or `validator`) with:

```shell
docker logs -f --tail 500 <service>
```


### 8. Make a Deposit

Make deposit once your node is fully synced (this can take a few hours depending on setup).

:::caution
**At this stage you should have your EL and CL fully synced and validators must be imported to your CL.**
:::

See the [Validator Deposits](../deposit.md) section. 


### 9. Updating your Node

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
