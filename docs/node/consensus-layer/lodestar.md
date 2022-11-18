---
description: Setup
---

# Lodestar



#### Overview {#overview}

An Ethereum consensus client by [chainsafe](https://lodestar.chainsafe.io/)

This project builds a customized version of the lodestar client with Gnosischain modifications.
Repository: [https://github.com/gnosischain/lodestar-client](https://github.com/gnosischain/lodestar-client) 


#### Option 1: with docker

**Beacon Node**


```
docker pull gnosischain/lodestar-beacon:latest-<gnosis or chiado> 
```


**Validator Node **


```
docker pull gnosischain/lodestar-validator:latest-<gnosis or chiado> 
```


Example Docker-compose.yml 

[https://github.com/gnosischain/lodestar-client/blob/main/docker-compose.yml](https://github.com/gnosischain/lodestar-client/blob/main/docker-compose.yml) 

**Import validator keys **

Add your keystores in `./keystores` and their password in a file `./keystores/password.txt` 

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
