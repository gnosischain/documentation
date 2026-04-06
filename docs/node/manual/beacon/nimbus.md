---
title: Nimbus
---

# Run Beacon Node + Validator: Nimbus

Nimbus is a client implementation that strives to be as lightweight as possible in terms of resources used. Nimbus has consensus layer clients for Ethereum and Gnosis Chain.

:::tip Learn More about Nimbus

- Nimbus Repo: [https://github.com/status-im/nimbus-eth2](https://github.com/status-im/nimbus-eth2)
- Nimbus Docs: [https://nimbus.guide](https://nimbus.guide/)

:::

:::info

- Gnosis' Nimbus repo has sample Dockerfiles and configs
- [https://github.com/gnosischain/gnosis-nimbus-eth2](https://github.com/gnosischain/gnosis-nimbus-eth2)

:::

:::caution Prerequisites

The Beacon Node requires an Execution client in order to operate. See [Step 2: Run Execution Client](/category/step--2---run-execution-client) for more information.

:::

## Option 1: Run as System Process

Nimbus publishes binaries for Linux, Windows, and macOS.  
For Gnosis/Chiado, the recommended path is the Gnosis-maintained Nimbus Docker image below, which already includes network-specific configuration.

## Option 2: Run using Docker

This tutorial runs Nimbus beacon node and validator on the same container, please make sure you have your [generated validator key](../README.md#step-4a-generate-validator-keys) and [jwtsecret](../README.md#step-1-configure-server) before moving to the next step.

### 1. Folder Structure

Folder structure

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    ├── data/
    └── validators/
```

### 2. Docker Compose

Modify your Compose file with your favorite text editor and add the `consensus` container. The file should now look like:

Create `docker-compose.yml` and insert the configuration below.

```yaml title="/home/$USER/gnosis/docker-compose.yml" showLineNumbers
version: "3"
services:
  execution:
    # From Step 2
    # ...
  consensus:
    container_name: consensus
    image: ghcr.io/gnosischain/gnosis-nimbus-eth2:latest
    restart: unless-stopped
    networks:
      - gnosis_net
    volumes:
      - /home/$USER/gnosis/consensus/data:/data
// highlight-start
      - /home/$USER/gnosis/jwtsecret/jwt.hex:/jwt:ro
      - /home/$USER/gnosis/consensus/validators:/validators
// highlight-end
    ports:
      - 9100:9100/tcp
      - 9100:9100/udp
    command: |
      --data-dir=/data
      --web3-url=http://execution:8551
      --jwt-secret=/jwt
      --light-client-data-serve=true
      --light-client-data-import-mode=full
      --tcp-port=9100
      --udp-port=9100
      --validators-dir=/validators
// highlight-start
      --suggested-fee-recipient=${FEE_RECIPIENT}
      --graffiti=${GRAFFITI}
// highlight-end
      --rest
      --rest-address=0.0.0.0
      --network=gnosis
      --history=prune
    logging:
      driver: "local"

networks:
  gnosis_net:
    name: gnosis_net
```

Replace `suggested-fee-recipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt completely. It is strongly recommended that you configure this value in your setup. Learn more about [suggested fee recipient](https://nimbus.guide/suggested-fee-recipient.html) flag in Nimbus docs.

Replace `graffiti` with your own [graffiti](https://nimbus.guide/graffiti.html). It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.

### 3. Start Containers

Start the consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker compose up -d
```

### 4. Monitor Logs

Check your logs for each service (`execution` and `consensus`) with:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="execution" label="execution" default>

```shell
docker logs -f --tail 500 execution
```

  </TabItem>
  <TabItem value="consensus" label="consensus">

```shell
docker logs -f --tail 500 consensus
```

  </TabItem>
</Tabs>

### 5. Updating your Node

To update, just pull the new images, then stop and restart your services:

```shell
cd /home/$USER/gnosis
docker compose pull
docker compose stop
docker compose up -d
```
