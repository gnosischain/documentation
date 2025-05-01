---
title: Reth
---

# Reth

[Reth](https://github.com/gnosischain/reth_gnosis) is a high-performance Ethereum client written in Rust. It currently supports only post-merge state (no pre-merge sync support). You can run it using Docker or build it from source.

Repository: [https://github.com/gnosischain/reth_gnosis](https://github.com/gnosischain/reth_gnosis)

## Option 1: Using Docker

### Pull the image

```
> docker pull ghcr.io/gnosischain/reth_gnosis:master
```

### Setup the node

```
> mkdir ./reth_data
> ./scripts/setup.sh --datadir ./reth_data --chain chiado --docker
```

Use `--gnosis` instead of `--chiado` to configure for Gnosis Chain.

### Run the node

Move your JWT secret file:

```
> cp /path/to/jwtsecret ./reth_data/jwtsecret
```

Run Reth for Chiado:

```
> docker run \
    -v ./reth_data:/data \
    ghcr.io/gnosischain/reth_gnosis:master node \
    --chain chainspecs/chiado.json \
    --datadir /data \
    --authrpc.jwtsecret=/data/jwtsecret
```

Full command for Gnosis with network and RPC:

```
> docker run --network host \
    -v $DATA_DIR:/data \
    ghcr.io/gnosischain/reth_gnosis:master node \
    -vvvv \
    --chain chainspecs/gnosis.json \
    --datadir /data \
    --http \
    --http.port=8545 \
    --http.addr=0.0.0.0 \
    --http.corsdomain='*' \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.port=8546 \
    --authrpc.jwtsecret=/data/jwtsecret \
    --authrpc.addr=0.0.0.0 \
    --discovery.port=30303 \
    --discovery.addr=0.0.0.0
```

## Option 2: Build from Source

### Build the project

Install [Rust](https://www.rust-lang.org/tools/install) first. Then:

```
> git clone https://github.com/gnosischain/reth_gnosis.git
> cd reth_gnosis
> git checkout pectra-alphas
> cargo build --release
```

### Setup the node

```
> mkdir ./reth_data
> ./scripts/setup.sh --datadir ./reth_data --chain chiado
```

Use `--gnosis` for Gnosis Chain.

### Run the node

Move your JWT secret file:

```
> cp /path/to/jwtsecret ./reth_data/jwtsecret
```

Run Reth:

```
> ./target/release/reth node \
    -vvvv \
    --chain ./scripts/chainspecs/chiado.json \
    --datadir ./reth_data \
    --http \
    --http.port=8545 \
    --http.addr=0.0.0.0 \
    --http.corsdomain='*' \
    --http.api=admin,net,eth,web3,debug,trace \
    --authrpc.port=8546 \
    --authrpc.jwtsecret=./reth_data/jwtsecret \
    --authrpc.addr=0.0.0.0 \
    --discovery.port=30303 \
    --discovery.addr=0.0.0.0
```

Use `./scripts/chainspecs/gnosis.json` for Gnosis Chain.
