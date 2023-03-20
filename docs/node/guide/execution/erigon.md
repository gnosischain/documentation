---
title: Erigon
---

# Erigon

Formerly TurboGeth, Erigon is an Ethereum client built to enable performance optimizations. Erigon is written in Go and licensed under the GNU LGPLv3.

Repository: [https://github.com/ledgerwatch/erigon](https://github.com/ledgerwatch/erigon) 

:::note
Erigon is not ready for production use, please consider switching to [Nethermind](./nethermind.md)
:::

## Option 1: Using Docker    
* [Create jwtsecret](../configure-server.md#create-jwt)

* Create `docker-compose.yml` 

```shell docker-compose.yml
services:
  erigon:
    image: thorax/erigon:devel
    restart: unless-stopped
    volumes:
      - ./data:/home/erigon/.local/share/erigon
      - /jwtsecret/jwt.hex:/jwt:ro
    ports:
      - 30303:30303
      - 30303:30303/udp
      - 30304:30304
      - 30304:30304/udp
      - 42069:42069
      - 42069:42069/udp
      - 4000:4000/udp
      - 4001:4001
    expose:
      - 8545
      - 8551
    command: |
      --chain=gnosis
      --http
      --http.api=eth,debug,net,trace,web3,erigon
      --ws
      --metrics
      --metrics.addr=0.0.0.0
      --pprof
      --pprof.addr=0.0.0.0
      --authrpc.addr=0.0.0.0
      --authrpc.jwtsecret=/jwt
      --authrpc.vhosts=*
      --prune=htcr
      --torrent.download.rate=16mb
      --torrent.upload.rate=16mb
      --externalcl
    user: 1000:1000
```

* Start the Execution layer client listed in the compose file:

```shell
docker-compose up -d
```

* Check Erigon log
```shell
docker logs -f --tail 500 erigon
```


## Option 2: Using system process

Refer to [Erigon Guide](../README.md#step-2-run-an-execution-client).