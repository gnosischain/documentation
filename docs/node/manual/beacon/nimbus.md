---
title: Nimbus
---
import BeaconFolderStructurePartial from '@site/docs/node/manual/beacon/_partials/_beacon_folder_structure.md';

# Run Beacon Node + Validator: Nimbus

:::caution

This client is considered experimental for Gnosis. For production ready alternatives, please consider Lighthouse, Teku or Lodestar.

:::

Nimbus is a client implementation that strives to be as lightweight as possible in terms of resources used. Nimbus has consensus layer clients for Ethereum and Gnosischain.

:::tip Learn More about Nimbus

- Nimbus Repo:  [https://github.com/status-im/nimbus-eth2](https://github.com/status-im/nimbus-eth2)
- Nimbus Docs: [https://nimbus.team/docs/](https://nimbus.team/docs/)

:::

:::info

- Gnosis' Nimbus repo has sample Dockerfiles and configs
- [https://github.com/gnosischain/gnosis-nimbus-eth2](https://github.com/gnosischain/gnosis-nimbus-eth2)

:::


## Option 1: Run as System Process

We currently do not release Gnosis compatible binaries for Nimbus, nor do we intend to for the time being.

## Option 2: Run using Docker


This tutorial runs Nimbus beacon node and validator on the same container, please make sure you have your [generated validator key](../README.md#step-4a-generate-validator-keys) and [jwtsecret](../README.md#step-1-configure-server) before moving to the next step.

### 1. Folder Structure

Folder structure

```shell
/home/$USER/gnosis/
├── jwtsecret/
├── execution/
└── consensus/
    └── data/
    └── validator_key/
```


### 2. Docker Compose

Modify your docker-compose file with your favorite text editor and add the `consensus` container. The file should now look like:

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
        - ./consensus/data:/data
// highlight-start
        - ${Path_to_jwtsecret}:/jwt:ro
        - ${Path_to_keystore}:/validators
// highlight-end
        ports:
        - 9100:9100
        - 9100:9100/udp
        command: |
        --data-dir=/data
        --web3-url=http://localhost:8551
        --jwt-secret=/jwt
        --light-client-data-serve=true
        --light-client-data-import-mode=full
        --tcp-port:9100
        --udp-port:9100
        --validators-dir=/validators
// highlight-start
        --suggested-fee-recipient=${Fee address}
        --graffiti=${Graffiti}
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

Replace `suggested-fee-recipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt competely. It is strongly recommended that you configure this value in your setup. Learn more about [suggested fee recipient](https://nimbus.guide/suggested-fee-recipient.html) flag in Nimbus docs.

Replace `graffiti` with your own [graffiti](https://nimbus.guide/graffiti.html). It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.


### 3. Start Containers

Start the consensus layer client listed in the compose file:

```shell
cd /home/$USER/gnosis
docker-compose up -d
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

To update, just pull the new images, then stop and restart your docker-compose file:

```shell
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
