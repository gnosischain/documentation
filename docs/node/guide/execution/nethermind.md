---
title: Nethermind
---

# Nethermind {#nethermind}

Execution layer client developed by nethermind team [https://nethermind.io/nethermind-client/](https://nethermind.io/nethermind-client/) 

There are 2 main options for running Nethermind:
* Option 1: As a system process
* Option 2: Using Docker

Nethermind can be configured to run different types of nodes: 
* Full Node
* Archival Node


## Option 1: Running as System Process {#option-1-running-as-system-process}

### Installing Nethermind {#installing-nethermind}

[https://downloads.nethermind.io/](https://downloads.nethermind.io/) 


### Running Nethermind {#running-nethermind}

Nethermind has ‘Nethermind launcher’ an easy GUI where you can configure your node from release. 

[https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#running-release](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge#running-release) 

Windows 
```
# Gnosis Mainnet
./Nethermind.Runner --config xDai --JsonRpc.JwtSecretFile=<PATH to jwt.hex>

# Chiado Testnet
./Nethermind.Runner --config chiado --JsonRpc.JwtSecretFile=<PATH to jwt.hex>
```

Linux and MAC
```
# Gnosis Mainnet
nethermind --config xDai --JsonRpc.JwtSecretFile=<PATH to jwt.hex>

# Chiado Testnet
nethermind --config chiado --JsonRpc.JwtSecretFile=<PATH to jwt.hex>
```

## Option 2: Using Docker {#option-2-using-docker}


### Pulling Nethermind Docker Images {#pulling-nethermind-docker-images}

[https://docs.nethermind.io/nethermind/installing-nethermind/docker](https://docs.nethermind.io/nethermind/installing-nethermind/docker) 


### Using Docker to run Nethermind {#using-docker-to-run-nethermind}

**Ensure the prerequisite steps have been completed in ‘Advanced> Initial Set up’ section.**

**Create Folder for Nethermind**

```
cd
mkdir /home/<USER>/nethermind
```


**make the JWT Secret **

This is the token that allows the EL client to communicate with the CL client, we use `rand` to create a random string, and store the `jwt.hex` to `/var/lib/jwtsecret/ `this directory can be changed, if so you need to reflect the correct directory.

```
sudo mkdir -p /var/lib/jwtsecret
openssl rand -hex 32 | sudo tee /var/lib/jwtsecret/jwt.hex > /dev/null
```


**Create Docker-compose file**

```
cd nethermind
nano /home/<USER>/nethermind/docker-compose.yml
```

**Paste the following**


```
version: "3.7"
services:

  nethermind:
    hostname: nethermind
    container_name: nethermind
    image: nethermindeth/nethermind:latest
    restart: always
    stop_grace_period: 1m
    networks:
      net:
        ipv4_address: 192.168.32.100
    ports:
      - "30303:30303/tcp" # p2p
      - "30303:30303/udp" # p2p
      - "8551:8551/tcp"
    volumes:
      - /home/<USER>/nethermind/data:/nethermind/data
      - /home/<USER>/nethermind/keystore:/nethermind/keystore
      - /home/<USER>/nethermind/logs:/nethermind/logs
      - /var/lib/jwtsecret/jwt.hex:/var/lib/jwtsecret/jwt.hex
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    environment:
      - NETHERMIND_CONFIG=<chiado or xdai>
      - NETHERMIND_JSONRPCCONFIG_ENABLED=true
      - NETHERMIND_JSONRPCCONFIG_HOST=192.168.32.100
      - NETHERMIND_JSONRPCCONFIG_PORT=8545
      - NETHERMIND_JSONRPCCONFIG_JWTSECRETFILE=/var/lib/jwtsecret/jwt.hex
      - NETHERMIND_JSONRPCCONFIG_ENGINEHOST=192.168.32.100
      - NETHERMIND_JSONRPCCONFIG_ENGINEPORT=8551
      - NETHERMIND_NETWORKCONFIG_DISCOVERYPORT=30303
      - NETHERMIND_NETWORKCONFIG_P2PPORT=30303
      - NETHERMIND_MERGECONFIG_ENABLED=true
	Command:
      --datadir=/data
    logging:
      driver: json-file 
networks:
  net:
    ipam:
      driver: default
      config:
        - subnet: 192.168.32.0/24
```

**Start the EL container and check logs**

```
cd nethermind
sudo docker-compose up -d
sudo docker-compose logs nethermind -f
```

## Nethermind Archival Node {#nethermind-archival-node}

An archival node executes heavy historical sync verifying all the transactions and keeping all the historical state. In Nethermind, the default configuration activates the pruning functionality.

:::caution
Make sure there's enough disk space to accommodate the archive data, the minimum amount of disk required to run the archive node is +2 TB (Nov 2022).
:::

Select Network: `xdai_archive`

Set the Following variable 
```
NETHERMIND_PRUNINGCONFIG_MODE: "None"
```

In docker-compose 
```
	environment:
  	- NETHERMIND_CONFIG=xdai_archive
    - NETHERMIND_PRUNINGCONFIG_MODE: "None"
```