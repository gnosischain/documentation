---
description: A quickstart guide for getting up and running with Swarm using Docker and Docker Compose
keywords: [swarm, storage, decentralized, decentralised, docker, docker compose]
---

# Swarm with Docker

The following is a guide to get you started running a Bee full node with staking on Swarm using Docker. Docker images for Bee are hosted at [Docker Hub](https://hub.docker.com/r/ethersphere/bee). 

:::caution
In the examples below we specify the exact version number of the image using the 2.2.0 tag. It's recommended to only use the exact version number tags. Make sure to check that you're on the latest version of Bee by reviewing the tags for Bee on [Docker Hub](https://hub.docker.com/r/ethersphere/bee/tags), and replace 2.2.0 in the commands below if there is a newer full release. 
:::

:::warning
Note that in all the examples below we map the Bee API to 127.0.0.1 (localhost), since we do not want to expose our Bee API endpoint to the public internet, as that would allow anyone to control our node. Make sure you do the same, and it's also recommended to use a  firewall to protect access to your node(s).
:::

:::info
The guide below is for a full Bee node with staking. To run a light node (uploads and downloads only), set `BEE_FULL_NODE` to false, or to run in ultra light (allows downloads only) mode you can set both `BEE_FULL_NODE` and `BEE_SWAP_ENABLE` to false.
:::



## Prerequisites

### Hardware

:::warning
If you are running on a home network you may need to configure your router to use [port forwarding](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide) or take other steps to ensure your node is reachable by other nodes on the network. See [here](https://docs.ethswarm.org/docs/bee/installation/connectivity/#navigating-through-the-nat) for more guidance. If you are running on a VPS or cloud based server you will likely have no issues.
:::

:::caution
While it is possible to run multiple Bee nodes on a single machine, due to the high rate of I/O operations required by a full Bee node in operation, it is not recommended to run more than a handful of Bee nodes on the same physical disk (depending on the disk speed). 
:::


* Docker - [Get Docker](https://docs.docker.com/get-started/get-docker/) install instructions from the official docs.
* Dual core, recent generation, 2ghz processor
* 4gb RAM
* 30gb SSD
* Stable internet connection

### Software

* A Gnosis Chain RPC endpoint (either by running your own node or the [free RPC endpoint](https://xdai.fairdatasociety.org) offered from the Fair Data Society. Other free public options are available at the [Gnosis Chain docs](https://docs.gnosischain.com/tools/RPC%20Providers/). 
* [jq utility](https://jqlang.github.io/jq/) for formatting API output (optional)

:::info
The [`jq` utility](https://jqlang.github.io/jq/) is used in this guide to automatically format the output from the Bee API. It can help make API output much more readable, however it is totally optional. 
:::

### Tokens

* A small amount of xDAI to pay for Gnosis Chain transactions, 0.1 xDAI should be enough
* 10 xBZZ (BZZ on Gnosis Chain) is required for staking 


## Full node setup process 

This section will guide you through setting up and running a single Bee full node using Docker. In the guide, we use a single line command for running our Bee node, with the Bee config options being set through environment variables, and a single volume hosted for our node's data. 

### Start node

```bash
docker run -d --name bee-1 \
  --restart always \
  -p 127.0.0.1:1633:1633 \
  -p 1634:1634 \
  -e BEE_API_ADDR=":1633" \
  -e BEE_FULL_NODE="true" \
  -e BEE_SWAP_ENABLE="true" \
  -e BEE_PASSWORD="flummoxedgranitecarrot" \
  -e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://xdai.fairdatasociety.org" \
  -v bee-1:/home/bee/.bee \
  ethersphere/bee:2.2.0 start
```

Here is the same command in a single line in case you run into issues with the line breaks in the command above:

```bash
docker run -d --name bee-1 --restart always -p 127.0.0.1:1633:1633 -p 1634:1634 -e BEE_API_ADDR=":1633" -e BEE_FULL_NODE="true" -e BEE_SWAP_ENABLE="true" -e BEE_PASSWORD="flummoxedgranitecarrot" -e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://xdai.fairdatasociety.org" -v bee-1:/home/bee/.bee ethersphere/bee:2.2.0 start
```

#### Command explained:

- **`-d`**: Runs the container in the background.
- **`--restart always`**: Sets the [restart policy](https://docs.docker.com/engine/containers/start-containers-automatically/) for the container to `always`
- **`--name bee-1`**: Names the container `bee-1`.
- **`-p 127.0.0.1:1633:1633`**: Exposes the API on port 1633, only accessible locally.
- **`-p 1634:1634`**: Exposes the P2P port 1634 to the public.
- **`-e BEE_API_ADDR=":1633"`**: Sets the Bee API to use port 1633.
- **`-e BEE_FULL_NODE="true"`**: Runs as a full node.
- **`-e BEE_SWAP_ENABLE="true"`**: Enables the SWAP protocol for payments.
- **`-e BEE_PASSWORD="flummoxedgranitecarrot"`**: Sets the keystore password, make sure to replace with your own.
- **`-e BEE_BLOCKCHAIN_RPC_ENDPOINT="https://xdai.fairdatasociety.org"`**: Connects to the Gnosis Chain.
- **`-v bee-1:/home/bee/.bee`**: Persists node data in the `bee-1` volume.
- **`ethersphere/bee:2.2.0 start`**: Runs Bee version 2.2.0 and starts the node.

This setup runs the Bee node in a container, with full-node functionality, SWAP enabled, and connections to the Gnosis blockchain for chequebook and postage stamp management, while persisting its data using a volume. 

:::info
We have included the password as part of the start command by setting it as an environment variable with `-e BEE_PASSWORD="flummoxedgranitecarrot"`. You may wish to use a password file instead, which can be set with the `BEE_PASSWORD_FILE` command. However this will likely require some modifications on your host machine, the details of which will vary from system to system.
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

The output should contain a line which prints a message notifying you of the minimum required xDAI for running a node as well as the address of your node. Copy the address and save it for use in the next section.

```bash
"time"="2024-09-24 22:06:51.363708" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min xDAI (for Gas) available on address" "min_amount"="0.0003576874793" "address"="0x91A7e3AC06020750D32CeffbEeFD55B4c5e42bd6"
```

You can use `Ctrl + C` to exit the logs.

Before moving on to funding, stop your node:

```bash
docker stop bee-1
```

And let's confirm that it has stopped:

```bash
docker ps
```

We can confirm no Docker container processes are currently running.

```bash
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
````

### Fund node

Check the logs from the previous step. Look for the line which says: 

```
"time"="2024-09-24 18:15:34.520716" "level"="info" "logger"="node" "msg"="using ethereum address" "address"="0x1A801dd3ec955E905ca424a85C3423599bfb0E66"
```
That address is your node's address on Gnosis Chain which needs to be funded with xDAI and xBZZ. Copy it and save it for the next step.

xDAI is widely available from many different centralized and decentralized exchanges, just make sure that you are getting xDAI on Gnosis Chain, and not DAI on some other chain. See [this page](https://www.ethswarm.org/get-bzz) for a list of resources for getting xBZZ (again, make certain that you are getting the Gnosis Chain version, and not BZZ on Ethereum).  

After acquiring some xDAI and some xBZZ, send them to the address you copied above.

***How Much to Send?***

Only a very small amount of xDAI is needed to get started, 0.1 is more than enough.
 
You can start with just 2 or 3 xBZZ for uploading small amounts of data, but you will need at least 10 xBZZ if you plan on staking.

### Initialize full node

After you have a small amount of xDAI in your node's Gnosis Chain address, you can now restart your node using the same command as before so that it can issue the required smart contract transactions and also sync data. 

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

Your node will take some time to finish [syncing postage contract data](https://docs.ethswarm.org/docs/develop/access-the-swarm/buy-a-stamp-batch/) as indicated by the final line:

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

Your node will now begin syncing chunks from the network, this process can take several hours. You check your node's progress with the `/status` endpoint:

```bash
curl -s  http://localhost:1633/status | jq
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
We can see that our node has not yet finished syncing chunks since the `pullsyncRate` is around 497 chunks per second. Once the node is fully synced, this value will go to zero. It can take several hours for syncing to complete, but we do not need to wait until our node is full synced before staking, so we can move directly to the next step. 

### Stake node

You can use the following command to stake 10 xBZZ:

```bash
curl -XPOST localhost:1633/stake/100000000000000000
```

If the staking transaction is successful a `txHash` will be returned:

```
{"txHash":"0x258d64720fe7abade794f14ef3261534ff823ef3e2e0011c431c31aea75c2dd5"}
```

We can also confirm that our node has been staked with the `/stake` endpoint:

```bash
curl localhost:1633/stake
```

The results will be displayed in PLUR units (1 PLUR is equal to 1e-16 xBZZ). If you have properly staked the minimum 10 xBZZ, you should see the output below:

```bash
{"stakedAmount":"100000000000000000"}
```

Congratulations! You have now installed your Bee node and are connected to the network as a full staking node. Your node will now be in the process of syncing chunks from the network. Once it is fully synced, your node will finally be eligible for earning staking rewards. 

### Logs and monitoring

Docker provides convenient built-in tools for logging and monitoring your node, which you've already encountered if you've read through earlier sections of this guide.

**Viewing node logs:**

To monitor your node’s logs in real-time, use the following command:

```bash
docker logs -f bee-1
```

This command will continuously output the logs of your Bee node, helping you track its operations. The `-f` flag ensures that you see new log entries as they are written. Press `Ctrl + C` to stop following the logs.

You can read more about how Docker manages container logs [in their official docs](https://docs.docker.com/reference/cli/docker/container/logs/).

**Checking the Node's status with the Bee API**

To check your node's status as a staking node, we can use the `/redistributionstate` endpoint:

```bash
curl -s http://localhost:1633/redistributionstate | jq
```

Below is the output for a node which has been running for several days:

```bash
{
  "minimumGasFunds": "11080889201250000",
  "hasSufficientFunds": true,
  "isFrozen": false,
  "isFullySynced": true,
  "phase": "claim",
  "round": 212859,
  "lastWonRound": 207391,
  "lastPlayedRound": 210941,
  "lastFrozenRound": 210942,
  "lastSelectedRound": 212553,
  "lastSampleDuration": 491687776653,
  "block": 32354719,
  "reward": "1804537795127017472",
  "fees": "592679945236926714",
  "isHealthy": true
}
```

For a complete breakdown of this output, check out [this section in the Bee docs](https://docs.ethswarm.org/docs/bee/working-with-bee/bee-api#redistributionstate).

You can read more other important endpoints for monitoring your Bee node in the [official Bee docs](https://docs.ethswarm.org/docs/bee/working-with-bee/bee-api), and you can find complete information about all available endpoints in [the API reference docs](https://docs.ethswarm.org/api/).


**Stopping Your Node**

To gracefully stop your Bee node, use the following command:

```bash
docker stop bee-1
```

Replace `bee-1` with the name of your node if you've given it a different name.
