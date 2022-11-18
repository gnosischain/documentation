---
description: Setup
---

# Lighthouse


#### Overview {#overview}

Lighthouse is an Ethereum and Gnosischain consensus client written in Rust by [Sigma Prime](https://lighthouse.sigmaprime.io/)

This project builds a customized version of the Lighthouse client with Gnosischain modifications.
Repository:[https://github.com/gnosischain/lighthouse-client](https://github.com/gnosischain/lighthouse-client) 



#### Option 1: with docker

**Beacon Node**


```
docker pull gnosischain/lighthouse-beacon:latest-<gnosis or chiado> 
```


**Validator Node **


```
docker pull gnosischain/lighthouse-validator:latest-<gnosis or chiado> 
```


**Example Docker Compose file **

https://github.com/gnosischain/lighthouse-client/blob/main/docker-compose.yml

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