---
title: Reth
---

# Reth

[Reth](https://github.com/gnosischain/reth_gnosis) is a high-performance Ethereum client written in Rust. It currently supports only post-merge state (no pre-merge sync support). You can run it using Docker or build it from source.

Repository: [https://github.com/gnosischain/reth_gnosis](https://github.com/gnosischain/reth_gnosis)

## Option 1: Using Docker

You can run the node using Docker. You can pull the image from the Docker Hub by running the following command:

```bash
docker pull ghcr.io/gnosischain/reth_gnosis:master
```

### Running Reth for Gnosis

You might want to create a directory where you want all data files (reth's database, configs, etc.) to be stored, and to mount it as a volume to the image. For example, let's create `./reth_data` in the current folder.

> Note that a temporary directory will be created (to download the post-merge state) where reth is executed, and this directory will be removed after the initialization is done.

```bash
mkdir ./reth_data
```

Before running the node, move your jwtsecret file to the `./reth_data` directory. You can run it by running the following command:

```bash
cp /path/to/jwtsecret ./reth_data/jwtsecret
```

```bash
docker run \
    -v ./reth_data:/data \
    ghcr.io/gnosischain/reth_gnosis:master node \
    --chain chiado \
    --datadir /data \
    --authrpc.jwtsecret=/data/jwtsecret
```

This runs Chiado, and you can use `--chain gnosis` for Gnosis Chain mainnet. A full command (along with network and config) would look like this:

```bash
docker run --network host \
    -v $DATA_DIR:/data \
    ghcr.io/gnosischain/reth_gnosis:master node \
    -vvvv \
    --chain gnosis \
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

## Option 2: Build from source

Currently the recommended way of running reth is by building it from source. To do so, you need to have Rust installed. You can install it by following the instructions on the [official website](https://www.rust-lang.org/tools/install).

After installing Rust, you can clone the repository and build the project by running the following commands:

```bash
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
git checkout master

cargo build --release
```

This will build the project in debug mode.

### Node Setup

You might want to create a directory where you want all data files (reth's database, configs, etc.) to be stored. For example, let's create `./reth_data` in the current folder.

> Note that a temporary directory will be created (to download the post-merge state) where reth is executed, and this directory will be removed after the initialization is done.

```bash
mkdir ./reth_data
```

### Running Reth for Gnosis

Before running the node, move your jwtsecret file to the `./reth_data` directory. Now you can run it by running the following command:

```bash
cp /path/to/jwtsecret ./reth_data/jwtsecret
```

```bash
./target/release/reth node \
    -vvvv \
    --chain chiado \
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

This runs Chiado, and you can use `--chain gnosis` for Gnosis Chain.

### Data directory

Providing a `--datadir` is optional, but recommended. If you don't provide it, the database will be created in the OS specific default location:
- Linux: `$XDG_DATA_HOME/reth/` or `$HOME/.local/share/reth/`
- Windows: `{FOLDERID_RoamingAppData}/reth/`
- macOS: `$HOME/Library/Application Support/reth/`
