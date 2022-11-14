---
description: Setup
---

# Prysm


#### Overview {#overview}

The[ Prysm](https://github.com/prysmaticlabs/prysm) project is a Go implementation of the Ethereum protocols consensus layer, by [prysmaticlabs]([https://prysmaticlabs.com/](https://prysmaticlabs.com/)) 

This project builds a customized version of the prysm client with Gnosischain modifications.
Repository: [https://github.com/gnosischain/prysm-client](https://github.com/gnosischain/prysm-client) 


#### Option 1: with docker

**Beacon Node**


```
docker pull gnosischain/prysm-beacon:latest-<gnosis or chiado> 
```


**Validator Node **


```
docker pull gnosischain/prysm-validator:latest-<gnosis or chiado> 
```


Example Docker-compose.yml 

[https://github.com/gnosischain/prysm-client/blob/main/docker-compose.yml](https://github.com/gnosischain/prysm-client/blob/main/docker-compose.yml) 

**Import validator keys **

Add your keystores in `./keystores` and the `password.txt` in a file `./keystores/password.txt`

**Run Beacon Chain node with the attached Validator Process**


```
docker-compose up -d consensus
docker-compose up -d validator
```

**Make Deposit **
:::caution
**At this stage you should have your EL and CL fully Synced and validators must be imported to your CL **
:::

See Section Deposit