---
title: Prysm
---

# Run Beacon Node: Prysm

:::danger
This client is not yet ready for public use. Validators are encouraged to run Lighthouse, Teku or Lodestar in the interim.
:::

The [Prysm](https://github.com/prysmaticlabs/prysm) project is a Go implementation of the Ethereum protocols consensus layer, by [prysmaticlabs](https://prysmaticlabs.com/)

This project builds a customized version of the prysm client with Gnosischain modifications.
Repository: [https://github.com/gnosischain/prysm-client](https://github.com/gnosischain/prysm-client)

## Option 1: Run as System Process

:::danger
This client is not yet ready for public use. Validators are encouraged to run Teku, Lodestar, or Lighthouse in the interim.
:::

## Option 2: Run using Docker

:::danger

This client is not yet ready for public use. Validators are encouraged to run Teku, Lodestar, or Lighthouse in the interim.

:::

**Beacon Node**

```shell
docker pull gnosischain/prysm-beacon:latest-<gnosis or chiado>
```

**Validator Node **

```shell
docker pull gnosischain/prysm-validator:latest-<gnosis or chiado>
```

Example Docker-compose.yml

[https://github.com/gnosischain/prysm-client/blob/main/docker-compose.yml](https://github.com/gnosischain/prysm-client/blob/main/docker-compose.yml)

**Import validator keys **

Add your keystores in `./keystores` and the `password.txt` in a file `./keystores/password.txt`

**Run Beacon Chain node with the attached Validator Process**

```shell
docker-compose up -d consensus
docker-compose up -d validator
```

**Make Deposit **
:::caution
**At this stage you should have your EL and CL fully Synced and validators must be imported to your CL **
:::
