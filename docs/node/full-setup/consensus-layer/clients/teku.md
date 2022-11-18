---
description: Setup
---

# Teku



#### Overview {#overview}

Teku is a consensus client built to meet institutional needs and security requirements. Built by PegaSys an arm of ConsenSys, dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform. More information on [Teku]([https://consensys.net/knowledge-base/ethereum-2/teku/](https://consensys.net/knowledge-base/ethereum-2/teku/))

This project builds a customized version of the Teku client with Gnosischain modifications.
Repository:[https://github.com/gnosischain/teku-client](https://github.com/gnosischain/teku-client) 


#### Option 1: with docker

**Beacon & Validator Node**


```
docker pull gnosischain/teku:{upstream_version}-{testnet}
docker pull gnosischain/teku:latest-chiado
```


Example Docker-compose.yml 

[https://github.com/gnosischain/teku-client/blob/main/docker-compose.yml](https://github.com/gnosischain/teku-client/blob/main/docker-compose.yml) 

**Import validator keys **

Add your keystores in `./validator-data/keys` and the `password.txt` in `./validator-data/secrets`

**Run Beacon Chain node with the attached Validator Process**


```
docker-compose up -d 
```


**Make Deposit **
:::caution
**At this stage you should have your EL and CL fully Synced and validators must be imported to your CL **
:::

See Section Deposit