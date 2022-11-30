---
title: Lighthouse
---

# Run Validator: Lighthouse

:::caution
The Validator requires a Consensus Client (also known as Beacon Node) in order to operate. See See [Step 3: Run Beacon Node - Lighthouse](../../beacon/lighthouse.md) for more information.
:::

## Option 1: Run as System Process {#system-process}

:::info
In progress
:::

## Option 2: Run using Docker {#docker}

### 1. Folder Structure

Create new folders:

```shell
mkdir /home/$USER/gnosis/consensus/keystores
mkdir /home/$USER/gnosis/consensus/validators
```

Including the folders from your Execution and Consensus clients, your folder structure should now look like:

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    ├── data/
    ├── keystores/
    └── validators/
```

### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `validator` container. You will also need to add the command `--suggested-fee-recipient=$FEE_RECIPIENT` to your `consensus` container. The file should now look like:

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
version: "3"
services:

  execution:
    # From Step 2
    # ...

  consensus:
    # From Step 3
    # ...

# highlight-start
  validator:
    container_name: validator
    image: sigp/lighthouse:latest-modern
    restart: always
    command: |
      lighthouse
      validator_client
      --network=gnosis
      --validators-dir=/data/validators
      --beacon-nodes=http://consensus:4000
      --graffiti=$GRAFFITI
      --debug-level=info
      --suggested-fee-recipient=$FEE_RECIPIENT
      --metrics
      --metrics-address=0.0.0.0
      --metrics-port=5056
    networks:
      - gnosis_net
    volumes:
      - /home/$USER/gnosis/consensus/validators:/data/validators
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    logging:
      driver: "local"
# highlight-end

networks:
  gnosis_net:
    name: gnosis_net
```

### 3. Environment Variables

Add an `.env` file with your fee recepient (your Gnosis address) and graffiti in `/home/$USER/gnosis/.env`.

```yaml title="/home/$USER/gnosis/.env"
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/lighthouse
```

### 4. Keystore Location

Add your keystores in `/home/$USER/gnosis/consensus/keystores/` and their password in a file `/home/$USER/gnosis/consensus/keystores/password.txt` to get this file structure:

:::note
Note, keystores MUST follow one of these file names

- `keystore-m_12381_3600_[0-9]+_0_0-[0-9]+.json` The format exported by the `eth2.0-deposit-cli` library ([source](https://github.com/sigp/lighthouse/blob/2983235650811437b44199f9c94e517e948a1e9b/common/account_utils/src/validator_definitions.rs#L402))
- `keystore-[0-9]+.json` The format exported by Prysm ([source](https://github.com/sigp/lighthouse/blob/2983235650811437b44199f9c94e517e948a1e9b/common/account_utils/src/validator_definitions.rs#L411))
:::

```shell
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── execution/
└── consensus/
    ├── data/
# highlight-start
    ├── keystores/
    │   ├── keystore-001.json
    │   ├── keystore-002.json
    │   └── password.txt
    └── validators/
# highlight-end
```


### 5. Import Keystores

Import your validators:

```shell
docker run \
  --rm \
  --volume /home/$USER/gnosis/consensus/keystores:/keystores \
  --volume /home/$USER/gnosis/consensus:/data sigp/lighthouse:latest-modern lighthouse account validator import \
  --network gnosis \
  --password-file /keystores/password.txt \
  --reuse-password \
  --directory /keystores \
  --datadir /data
```


### 6. Start Containers

Start the validator service listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
```


### 7. Monitor Logs

Check your logs for each service (`execution`, `consensus`, or `validator`) with:

import MonitorLogsDockerPartial from '@site/docs/node/guide/validator/_partials/_monitor_logs_docker.md';

<MonitorLogsDockerPartial />


### 8. Make a Deposit

Make a deposit once your node is fully synced (this can take a few hours depending on setup).

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
