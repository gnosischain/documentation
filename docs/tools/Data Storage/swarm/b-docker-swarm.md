---
description: A quickstart guide for getting up and running with Swarm using Docker and Docker Compose
keywords: [swarm, storage, decentralized, decentralised, docker, docker compose]
---

# Swarm with Docker

Docker is one option for running a Bee node, and when combined with Docker Compose, it even offers a convenient solution for spinning up and managing a small "hive" of Bee nodes.  

Docker containers for Bee are hosted at [Docker Hub](https://hub.docker.com/r/ethersphere/bee). 

:::caution
While it is possible to run multiple Bee nodes on a single machine, due to the high rate of I/O operations required by a full Bee node in operation, it is not recommended to run more than a handful of Bee nodes on the same physical disk (depending on the disk speed). 
:::

:::caution
In the examples below we specify the exact version number of the image using the 2.2.0 tag. It's recommended to only use the exact version number tags. You can find all available tags for Bee on [Docker Hub](https://hub.docker.com/r/ethersphere/bee/tags).
:::

:::warning
Note that in all the examples below we map the Bee API to 127.0.0.1 (localhost), since we do not want to expose our Bee API endpoint to the public internet, as that would allow anyone to control our node. Make sure you do the same, and it's also recommended to use a  firewall to protect access to your node(s).
:::


:::info
The guides below are for a full Bee node with staking. To run a light node (uploads and downloads only), set `--full-node` / `BEE_FULL_NODE` to false, or to run in ultra light (allows downloads only) mode you can set both `--full-node` / `BEE_FULL_NODE` and `--swap-enable` / `BEE_SWAP_ENABLE` to false.
:::



## Install Docker and Docker Compose

* [Official Docker install instructions](https://docs.docker.com/engine/install/)
* [Official Docker Compose plugin instructions](https://docs.docker.com/compose/install/linux/)

## Bee with Docker

This section will guide you through setting up and running a single Bee full node using Docker only. 

### Full node startup command

```bash
docker run -d --rm --name bee-1 \
  -p 127.0.0.1:1633:1633 \
  -p 1634:1634 \
  -e BEE_API_ADDR=":1633" \
  -e BEE_FULL_NODE="true" \
  -e BEE_SWAP_ENABLE="true" \
  -e BEE_PASSWORD="flummoxedgranitecarrot" \
  -e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://rpc.gnosis.gateway.fm" \
  -v bee-1:/home/bee/.bee \
  ethersphere/bee:2.2.0 start
```

Here is the same command in a single line in case you run into issues with the line breaks in the command above:

```bash
docker run -d --rm --name bee-1 -p 127.0.0.1:1633:1633 -p 1634:1634 -e BEE_API_ADDR=":1633" -e BEE_FULL_NODE="true" -e BEE_SWAP_ENABLE="true" -e BEE_PASSWORD="flummoxedgranitecarrot" -e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://rpc.gnosis.gateway.fm" -v bee-1:/home/bee/.bee ethersphere/bee:2.2.0 start
```


#### Command explained:

- **`-d`**: Runs the container in the background.
- **`--rm`**: Automatically removes the container when it stops.
- **`--name bee-1`**: Names the container `bee-1`.
- **`-p 127.0.0.1:1633:1633`**: Exposes the API on port 1633, only accessible locally.
- **`-p 1634:1634`**: Exposes the P2P port 1634 to the public.
- **`-e BEE_API_ADDR=":1633"`**: Sets the Bee API to use port 1633.
- **`-e BEE_FULL_NODE="true"`**: Runs as a full node.
- **`-e BEE_SWAP_ENABLE="true"`**: Enables the SWAP protocol for payments.
- **`-e BEE_PASSWORD="flummoxedgranitecarrot"`**: Sets the keystore password.
- **`-e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://rpc.gnosis.gateway.fm"`**: Connects to the Gnosis Chain.
- **`-v bee-1:/home/bee/.bee`**: Persists node data in the `bee-1` volume.
- **`ethersphere/bee:2.2.0 start`**: Runs Bee version 2.2.0 and starts the node.

This setup runs the Bee node in a container, with full-node functionality, SWAP enabled, and connections to the Gnosis blockchain for chequebook and postage stamp management, while persisting its data using a volume. 

:::info
Here we have included the password as part of the start command by setting it as an environment variable with `-e BEE_PASSWORD="flummoxedgranitecarrot"`. You may wish to use a password file instead, which can be set with the `BEE_PASSWORD_FILE` command. However this will likely require some modifications on your host machine, which will vary from system to system.
:::

```bash
docker ps
```

If everything is set up correctly, you should see your Bee node listed:

```bash
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS
                                              NAMES
37f4ad8b4060   ethersphere/bee:2.2.0   "bee start"   6 seconds ago   Up 5 seconds   127.0.0.1:1633->1633/tcp, 0.0.0.0:1634->1634/tcp, :::1634->1634/tcp   bee-1
```

And check the logs:

```bash
docker logs -f bee-1
```

The output should contain a line which prints the address of your node. Copy this address and save it for use in the next section.

```bash
"time"="2024-09-24 22:06:51.363708" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min xDAI (for Gas) available on address" "min_amount"="0.0003576874793" "address"="0x91A7e3AC06020750D32CeffbEeFD55B4c5e42bd6"
```

Before moving on to funding, stop your node:

```bash
docker stop bee-1
```

### Step 4: Funding 

To obtain xDAI and fund your node, you can [follow the instructions](https://docs.ethswarm.org/docs/installation/install#4-fund-node) from the main install section.

After you have some xDAI, send it to the address you copied above, in our case it is `0x91A7e3AC06020750D32CeffbEeFD55B4c5e42bd6`. You only need to send a very small amount of xDAI to get started, such as 0.01 xDAI. 

### Step 5: Initialize node

After you have a small amount of xDAI in your node's Gnosis Chain address, you can now restart your node so that it can issue the required smart contract transactions and also sync data. 

```bash
docker start bee-1
```

Let's check the logs to see what's happening:

```bash
docker logs -f bee-1
```

Your logs should look something like this:

```bash
Welcome to Swarm.... Bzzz Bzzzz Bzzzz
                \     /
            \    o ^ o    /
              \ (     ) /
   ____________(%%%%%%%)____________
  (     /   /  )%%%%%%%(  \   \     )
  (___/___/__/           \__\___\___)
     (     /  /(%%%%%%%)\  \     )
      (__/___/ (%%%%%%%) \___\__)
              /(       )\
            /   (%%%%%)   \
                 (%%%)
                   !

DISCLAIMER:
This software is provided to you "as is", use at your own risk and without warranties of any kind.
It is your responsibility to read and understand how Swarm works and the implications of running this software.
The usage of Bee involves various risks, including, but not limited to:
damage to hardware or loss of funds associated with the Ethereum account connected to your node.
No developers or entity involved will be liable for any claims and damages associated with your use,
inability to use, or your interaction with other nodes or the software.

version: 2.2.0-06a0aca7 - planned to be supported until 11 December 2024, please follow https://ethswarm.org/

"time"="2024-09-24 22:21:04.543661" "level"="info" "logger"="node" "msg"="bee version" "version"="2.2.0-06a0aca7"
"time"="2024-09-24 22:21:04.590823" "level"="info" "logger"="node" "msg"="swarm public key" "public_key"="02f0e59eafa3c5c06542c0a7a7fe9579c55a163cf1d28d9f6945a34469f88d1b2a"
"time"="2024-09-24 22:21:04.686430" "level"="info" "logger"="node" "msg"="pss public key" "public_key"="02ea739530bbf48eed49197f21660f3b6564709b95bf558dc3b472688c34096418"
"time"="2024-09-24 22:21:04.686464" "level"="info" "logger"="node" "msg"="using ethereum address" "address"="0x8288F1c8e3dE7c3bf42Ae67fa840EC61481D085e"
"time"="2024-09-24 22:21:04.700711" "level"="info" "logger"="node" "msg"="using overlay address" "address"="22dc155fe072e131449ec7ea2f77de16f4735f06257ebaa5daf2fdcf14267fd9"
"time"="2024-09-24 22:21:04.700741" "level"="info" "logger"="node" "msg"="starting with an enabled chain backend"
"time"="2024-09-24 22:21:05.298019" "level"="info" "logger"="node" "msg"="connected to blockchain backend" "version"="Nethermind/v1.28.0+9c4816c2/linux-x64/dotnet8.0.8"
"time"="2024-09-24 22:21:05.485287" "level"="info" "logger"="node" "msg"="using chain with network network" "chain_id"=100 "network_id"=1
"time"="2024-09-24 22:21:05.498845" "level"="info" "logger"="node" "msg"="starting debug & api server" "address"="[::]:1633"
"time"="2024-09-24 22:21:05.871498" "level"="info" "logger"="node" "msg"="using default factory address" "chain_id"=100 "factory_address"="0xC2d5A532cf69AA9A1378737D8ccDEF884B6E7420"
"time"="2024-09-24 22:21:06.059179" "level"="info" "logger"="node/chequebook" "msg"="no chequebook found, deploying new one."
"time"="2024-09-24 22:21:07.386747" "level"="info" "logger"="node/chequebook" "msg"="deploying new chequebook" "tx"="0x375ca5a5e0510f8ab307e783cf316dc6bf698c15902a080ade3c1ea0c6059510"
"time"="2024-09-24 22:21:19.101428" "level"="info" "logger"="node/transaction" "msg"="pending transaction confirmed" "sender_address"="0x8288F1c8e3dE7c3bf42Ae67fa840EC61481D085e" "tx"="0x375ca5a5e0510f8ab307e783cf316dc6bf698c15902a080ade3c1ea0c6059510"
"time"="2024-09-24 22:21:19.101450" "level"="info" "logger"="node/chequebook" "msg"="chequebook deployed" "chequebook_address"="0x66127e4393956F11947e9f54599787f9E455173d"
"time"="2024-09-24 22:21:19.506515" "level"="info" "logger"="node" "msg"="using datadir" "path"="/home/bee/.bee"
"time"="2024-09-24 22:21:19.518258" "level"="info" "logger"="migration-RefCountSizeInc" "msg"="starting migration of replacing chunkstore items to increase refCnt capacity"
"time"="2024-09-24 22:21:19.518283" "level"="info" "logger"="migration-RefCountSizeInc" "msg"="migration complete"
"time"="2024-09-24 22:21:19.566160" "level"="info" "logger"="node" "msg"="starting reserve repair tool, do not interrupt or kill the process..."
"time"="2024-09-24 22:21:19.566232" "level"="info" "logger"="node" "msg"="removed all bin index entries"
"time"="2024-09-24 22:21:19.566239" "level"="info" "logger"="node" "msg"="removed all chunk bin items" "total_entries"=0
"time"="2024-09-24 22:21:19.566243" "level"="info" "logger"="node" "msg"="counted all batch radius entries" "total_entries"=0
"time"="2024-09-24 22:21:19.566247" "level"="info" "logger"="node" "msg"="parallel workers" "count"=20
"time"="2024-09-24 22:21:19.566271" "level"="info" "logger"="node" "msg"="migrated all chunk entries" "new_size"=0 "missing_chunks"=0 "invalid_sharky_chunks"=0
"time"="2024-09-24 22:21:19.566294" "level"="info" "logger"="migration-step-04" "msg"="starting sharky recovery"
"time"="2024-09-24 22:21:19.664643" "level"="info" "logger"="migration-step-04" "msg"="finished sharky recovery"
"time"="2024-09-24 22:21:19.664728" "level"="info" "logger"="migration-step-05" "msg"="start removing upload items"
"time"="2024-09-24 22:21:19.664771" "level"="info" "logger"="migration-step-05" "msg"="finished removing upload items"
"time"="2024-09-24 22:21:19.664786" "level"="info" "logger"="migration-step-06" "msg"="start adding stampHash to BatchRadiusItems, ChunkBinItems and StampIndexItems"
"time"="2024-09-24 22:21:19.664837" "level"="info" "logger"="migration-step-06" "msg"="finished migrating items" "seen"=0 "migrated"=0
"time"="2024-09-24 22:21:19.664897" "level"="info" "logger"="node" "msg"="waiting to sync postage contract data, this may take a while... more info available in Debug loglevel"
```

Your node will take some time to finish syncing postage contract data as indicated by the final line:

```bash
"msg"="waiting to sync postage contract data, this may take a while... more info available in Debug loglevel"
```

You may need to wait 5 - 10 minutes for your node to finish syncing in this step. 

Eventually you will be able to see when your node finishes syncing, and the logs will indicate your node is starting in full node mode:

```bash
"time"="2024-09-24 22:30:19.154067" "level"="info" "logger"="node" "msg"="starting in full mode"
"time"="2024-09-24 22:30:19.155320" "level"="info" "logger"="node/multiresolver" "msg"="name resolver: no name resolution service provided"
"time"="2024-09-24 22:30:19.341032" "level"="info" "logger"="node/storageincentives" "msg"="entered new phase" "phase"="reveal" "round"=237974 "block"=36172090
"time"="2024-09-24 22:30:33.610825" "level"="info" "logger"="node/kademlia" "msg"="disconnected peer" "peer_address"="6ceb30c7afc11716f866d19b7eeda9836757031ed056b61961e949f6e705b49e"
```

Your node will now begin syncing chunks from the network, this will also take some time. You check your node's progress with the `/status` endpoint:

```bash
noah@NoahM16:~/improve-docker$ curl -s  http://localhost:1633/status | jq
```

```bash
{
  "overlay": "22dc155fe072e131449ec7ea2f77de16f4735f06257ebaa5daf2fdcf14267fd9",
  "proximity": 256,
  "beeMode": "full",
  "reserveSize": 686217,
  "reserveSizeWithinRadius": 321888,
  "pullsyncRate": 497.8747754074074,
  "storageRadius": 11,
  "connectedPeers": 148,
  "neighborhoodSize": 4,
  "batchCommitment": 74510761984,
  "isReachable": false,
  "lastSyncedBlock": 36172390
}
```
We can see that our node has not yet finished syncing chunks since the `pullsyncRate` is around 497 chunks per second. Once the node is fully synced, this value will go to zero. 

To find out how long it will take to finish syncing, we can check our peer's status with the `/status/peers` endpoint:

```bash
curl -s  http://localhost:1633/status/peers | jq
```
The output from this will be extensive, but we only need to review a small section of it:

```bash
...
    {
      "overlay": "22cd0d2a15273c0a3043e750f4039edcce1a9c41a89b89252f0251b043c52297",
      "proximity": 11,
      "beeMode": "full",
      "reserveSize": 2595113,
      "reserveSizeWithinRadius": 2490862,
      "pullsyncRate": 0,
      "storageRadius": 11,
      "connectedPeers": 195,
      "neighborhoodSize": 5,
      "batchCommitment": 74510761984,
      "isReachable": true,
      "lastSyncedBlock": 36172425
    },
    {
      "overlay": "22cbe9286f116c30627a6efb6ae130ca4988e926ce38dd632a22c30fa55e3f9b",
      "proximity": 11,
      "beeMode": "full",
      "reserveSize": 2493083,
      "reserveSizeWithinRadius": 2490855,
      "pullsyncRate": 0,
      "storageRadius": 11,
      "connectedPeers": 225,
      "neighborhoodSize": 5,
      "batchCommitment": 74510761984,
      "isReachable": true,
      "lastSyncedBlock": 36172425
    },
    {
      "overlay": "22da691645f7ef8e1f4b67cf0f8209e092e199b4b2d26c57c2023603f3402968",
      "proximity": 13,
      "beeMode": "full",
      "reserveSize": 2490864,
      "reserveSizeWithinRadius": 2490855,
      "pullsyncRate": 0,
      "storageRadius": 11,
      "connectedPeers": 214,
      "neighborhoodSize": 5,
      "batchCommitment": 74510761984,
      "isReachable": true,
      "lastSyncedBlock": 36172425
    }
  ]
}
```

By checking the last few peers from the output we can see that the `reserveSize` is around 2490864 chunks. Given our own node's `pullsyncRate` of 497, syncing will take around and hour and a half (this time may vary significantly). Once our `pullsyncRate` goes to zero and our `reserveSize` matches that of our peers, our node is fully synced and we can then move on to staking.

## Docker Compose

You may wish to run your node using Docker Compose. While Docker Compose does add some additional complexity to your setup, it also makes the node configuration much more readable and easy to understand.

Copy this configuration to a `docker-compose.yml` file:

```bash
services:
  bee-1:
    image: ethersphere/bee:2.2.0
    restart: unless-stopped
    environment:
      BEE_API_ADDR: ":1633"
      BEE_FULL_NODE: "true"
      BEE_SWAP_ENABLE: "true"
      BEE_BLOCKCHAIN_RPC_ENDPOINT: "https://rpc.gnosis.gateway.fm"
      BEE_PASSWORD: "flummoxedgranitecarrot"
    ports:
      - 127.0.0.1:1633:1633
      - 1634:1634
    volumes:
      - bee-1:/home/bee/.bee
    command: start
volumes:
  bee-1:
```




## Running a Hive

In order to run multiple Bee nodes as a "hive", all we need to do is repeat the process for running one node and then extend our Docker Compose configuration.

To start with, shut down your node from the first part of this guide if it is still running:

```shell
docker compose down
```

### Step 1: Create new directories for additional node(s)

Now create a new directory for your second node:


```shell
mkdir node_02
```

We also create a new data directory and set ownership to match the user in the official [Bee Dockerfile](https://github.com/ethersphere/bee/blob/master/Dockerfile).

```shell
mkdir node_02/.bee
sudo chown -R 999:999 node_02/.bee
```

Repeat this process for however many new nodes you want to add.

### Step 2: Create new configuration file(s)

And add a `bee.yml` configuration file. You can use the same configuration as for your first node. Here we will use the configuration for a full node:

```yaml
# GENERAL BEE CONFIGURATION
api-addr: :1633
p2p-addr: :1634
password: aaa4eabb0813df71afa45d
data-dir: /home/bee/.bee
cors-allowed-origins: ["*"]

# DEBUG CONFIGURATION
verbosity: 5

# BEE MAINNET CONFIGURATION
bootnode: /dnsaddr/mainnet.ethswarm.org

# BEE MODE: FULL NODE CONFIGURATION
full-node: true
swap-enable: true
blockchain-rpc-endpoint: https://xdai.fairdatasociety.org
```

```bash
sudo vi ./node_02/bee.yml
```

After saving the configuration, print out the configuration to make sure it was properly saved:

```bash
cat ./node_02/bee.yml
```

Repeat this step for any other additional node directories you created in the previous step.

### Step 3: Modify Docker Compose configuration

Here is the Docker compose configuration for running a hive of two Bee nodes:

```yaml
services:
  bee_01:
    container_name: bee-node_01
    image: ethersphere/bee:2.2.0
    command: start --config /home/bee/bee.yml
    volumes:
      - ./node_01/.bee:/home/bee/.bee
      - ./node_01/bee.yml:/home/bee/bee.yml
    ports:
      - 127.0.0.1:1633:1633 # bee api port
      - 1634:1634 # p2p port
  bee_02:
    container_name: bee-node_02
    image: ethersphere/bee:2.2.0
    command: start --config /home/bee/bee.yml
    volumes: 
      - ./node_02/.bee:/home/bee/.bee
      - ./node_02/bee.yml:/home/bee/bee.yml
    ports:
      - 127.0.0.1:1636:1633 # bee api port
      - 1637:1634 # p2p port
```

Here is a list of the changes we made to extend our setup:

   1. Created an additional named service with a new unique name (bee_02).
   1. Created a unique name for each `container_name` value (bee-node_01 --> bee-node_02).
   1. Made sure that `volumes` has the correct directory for each node (./node_01/ --> ./node_02/).
   1. Updated the `ports` we map to so that each node has its own set of ports (ie, for node_02, we map 127.0.0.1:1636 to 1633 because node_01 is already using 127.0.0.1:1633, and do the same with the rest of the ports).

### Step 4: Start up the hive 

Start up the hive:

```shell
docker compose up -d
```

After starting up the hive, check that both nodes are running:

```shell
docker ps
```

```shell
CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS
                                              NAMES
a62ec5143d30   ethersphere/bee:2.2.0   "bee start --config …"   2 seconds ago   Up 1 second   127.0.0.1:1636->1633/tcp, 0.0.0.0:1637->1634/tcp, :::1637->1634/tcp,   bee-node_02
a3496b9bb2c8   ethersphere/bee:2.2.0   "bee start --config …"   2 seconds ago   Up 1 second   127.0.0.1:1633->1633/tcp, 0.0.0.0:1634->1634/tcp, :::1634->1634/tcp   bee-node_01
```

And we can also check the logs for each node:

```shell
docker logs -f bee-node_01
```

Copy the address from the logs:

```shell
"time"="2024-07-23 11:54:08.657999" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min xDAI (for Gas) available on address" "min_xdai_amount"="0.000500000002" "address"="0x0E386401AFA8A9e23c6FFD81C7078505a36dB435"
```

```shell
docker logs -f bee-node_02
```
And copy the second address:
```shell
"time"="2024-07-23 11:54:08.532812" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min xDAI (for Gas) available on address" "min_xdai_amount"="0.000500000002" "address"="0xa4DBEa11CE6D089455d1397c0eC3D705f830De69"
```

### Step 5: Fund nodes 

You can fund your nodes by sending xDAI and xBZZ the addresses you collected from the previous step.

To obtain xDAI and fund your node, you can [follow the instructions](/docs/bee/installation/install#4-fund-node) from the main install section.

Since you're running a hive, the [node-funder](https://github.com/ethersphere/node-funder) tool is recommended, as it will allow you to rapidly fund and stake multiple nodes.

If you plan on staking, you will also want to [get some xBZZ](https://www.ethswarm.org/get-bzz) to stake. You will need 10 xBZZ for each node.


### Step 6: Add stake

:::info
The Bee API will not be available while your nodes are warming up, so wait until your nodes are fully initialized before staking.
:::

In order to stake you simply need to call the `/stake` endpoint with an amount of stake in PLUR as a parameter for each node.


For bee-node_01:

```bash
curl -X POST localhost:1633/stake/100000000000000000
```

And for bee-node_02, note that we updated the port to match the one for the Bee API address we mapped to in the Docker Compose file:

```bash
curl -X POST localhost:1636/stake/100000000000000000
```

You may also wish to make use of the [node-funder](https://github.com/ethersphere/node-funder) tool, which in addition to allowing you to fund multiple addresses at once, also allows you to stake multiple addresses at once.