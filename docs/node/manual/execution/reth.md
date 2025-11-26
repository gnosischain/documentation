---
title: Reth 
---

# Reth 

Gnosis‑compatible **Reth** client — **not a fork**, but an **extension** built with the `NodeBuilder` API.

Refer to the official Reth documentation → [reth.rs](https://reth.rs)

Repository: [gnosischain/reth_gnosis](https://github.com/gnosischain/reth_gnosis)

---


# Installation

Reth differs from other clients: **you must import a post‑merge state**.  
All file downloads are handled internally in the setup script.

You can run the node in two ways:

1. **Docker** – zero‑build, quick start  
2. **Build from source** – recommended for development / custom builds

---

## Option 1 – Using Docker

Pull the image:

```bash
docker pull ghcr.io/gnosischain/reth_gnosis:v0.1.0

```

### Running Reth for Gnosis

Create a data directory (DB, configs, etc.):

```bash
mkdir ./reth_data
```

> A **temporary directory** is created during initialisation to download the post‑merge snapshot and is removed automatically afterwards.

Copy your Engine API `jwtsecret` into that folder:

```bash
cp /path/to/jwtsecret ./reth_data/jwtsecret
```

#### Quick Chiado run

```bash
docker run   -v ./reth_data:/data   ghcr.io/gnosischain/reth_gnosis:v0.1.0 node   --chain chiado   --datadir /data   --authrpc.jwtsecret=/data/jwtsecret
```

#### Full Gnosis Chain example

```bash
docker run --network host   -v $PWD/reth_data:/data   ghcr.io/gnosischain/reth_gnosis:v0.1.0 node   -vvvv   --chain gnosis   --datadir /data   --http   --http.port=8545   --http.addr=0.0.0.0   --http.corsdomain='*'   --http.api=admin,net,eth,web3,debug,trace   --authrpc.port=8546   --authrpc.addr=0.0.0.0   --authrpc.jwtsecret=/data/jwtsecret   --discovery.port=30303   --discovery.addr=0.0.0.0
```

---

## Option 2 – Build from Source

### Prerequisites

* Stable [Rust toolchain](https://www.rust-lang.org/tools/install)  
* Typical C tool‑chain dependencies (`clang`, `cmake`, `pkg-config`, …)

### Clone & build

```bash
git clone https://github.com/gnosischain/reth_gnosis.git
cd reth_gnosis
git checkout master

cargo build --release
```

> **Note**: The original instructions state “This will build the project in debug mode.”  
> Using `--release` actually produces an optimised binary at `./target/release/reth`.

### Node setup

```bash
mkdir ./reth_data                         # persistent DB/config folder
cp /path/to/jwtsecret ./reth_data/jwtsecret
```

### Quick Chiado run

```bash
./target/release/reth node   -vvvv   --chain chiado   --datadir ./reth_data   --http   --http.port=8545   --http.addr=0.0.0.0   --http.corsdomain='*'   --http.api=admin,net,eth,web3,debug,trace   --authrpc.port=8546   --authrpc.addr=0.0.0.0   --authrpc.jwtsecret=./reth_data/jwtsecret   --discovery.port=30303   --discovery.addr=0.0.0.0
```

Replace `--chain chiado` with `--chain gnosis` for **Gnosis mainnet**.

---

### Data directory defaults

If `--datadir` is omitted, Reth falls back to the OS‑specific default path:

| OS      | Default path                                         |
|---------|------------------------------------------------------|
| Linux   | `$XDG_DATA_HOME/reth/` or `$HOME/.local/share/reth/` |
| macOS   | `$HOME/Library/Application Support/reth/`            |
| Windows | `%APPDATA%\reth\`                                  |

---

## Next steps

* Join the **Gnosis Reth Discord** → [discord.gg/gnosis](https://discord.gg/gnosis)  
* Track upstream Reth development → [paradigmxyz/reth](https://github.com/paradigmxyz/reth)
