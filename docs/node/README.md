---
title: Run a Node
sidebar_position : 1
---

# Run a Node

![Screenshot 2024-05-15 at 13 11 23](https://github.com/gnosischain/documentation/assets/75987728/72e33372-bb7e-4f03-8559-8c6e9c232672)

**Image:** Gnosis nodes around the world, circa May 15 2024

## Open Infrastructure Powered by Solo Stakers

Gnosis is persistently committed to building the open infrastructure for a decentralized internet because we believe that web3 applications require an unstoppable network, a level playing field that’s open to anyone. 

### Featured Headlines

- Gnosis minimum stake is 1 GNO to run a validator.
- Operating a Gnosis validator will earn you approximately 13% GNO validator rewards as well as transaction fees from the blocks you build in xDAI.
- Gnosis has a strong culture of homestakers running nodes from their homes, that are not reliant on cloud providers or datacenters.
- Gnosis has a stretch goal to have a node in every country by 2025.

#### Gnosis vs. Ethereum

- Gnosis runs the same composite client software and tooling stack as Ethereum
- In some cases, Gnosis clients are just Ethereum clients run with a `--network` flag! (e.g. [Nethermind](https://downloads.nethermind.io/), [Lighthouse](https://lighthouse.sigmaprime.io/), etc)
- Gnosis aims to be a learning ground for a new generation of node runners, requiring only 1 GNO (around $350 at March 2024) instead of the 32 ETH (around $100.000 at March 2024) minimum required for Ethereum
- Gnosis Chain runs the same client software as Ethereum, with minor parameter tweaks. As such, Gnosis is a Proof-of-Stake network that uses Ethereum's Beacon Chain consensus.

## Choosing an Approach

Refer from [Ethereum official docs](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/#choosing-approach).

To spin up a node, you must choose the client implementation(of both execution and consensus clients), the environment(hardware, system), and the parameters for client settings.

To choose from client implementations, see all the available Gnosis and Chiado ready execution clients, consensus clients, and learn about client diversity.

Decide whether to run the software on your own hardware or in the cloud, considering clients' requirements.

Once the environment is set up, install the chosen clients either with beginner-friendly interface or manually using a terminal with advanced options.

When the node is running and syncing, you are ready to use it. You must always keep an eye on its maintenance to avoid penalties.

## Environment and Hardware

### Environment and Hardware

#### **Local or Cloud**

Gnosis clients are able to run on consumer grade computers and don't require any special hardware, like mining machines for example. Therefore, you have various options for deploying the node based on your needs. To simplify, let's think about running a node on both a local physical machine and a cloud server:

- Cloud

  - Providers offer high server uptime and static public IP addresses
  - Getting dedicated or virtual server can be more comfortable than building your own
  - Trade off is trusting a third party - server provider
  - Because of the required storage size for full node, the price of a rented server might get high

- Own hardware

  - More trustless and sovereign approach
  - One time investment
  - An option to buy preconfigured machines
  - You have to physically prepare, maintain, and potentially troubleshoot the machine and networking

Both options have different advantages summed up above. If you are looking for a cloud solution, in addition to many traditional cloud computing providers, there are also services focused on deploying nodes. For example:

- [Gateway](https://gateway.fm/)
- [Gnosis](../tools/RPC%20Providers/README.md)
- [Ankr](https://www.ankr.com/rpc/gnosis/)
- [Chainnodes](https://www.chainnodes.org/chains/gnosis)
- [Blast](https://blastapi.io/public-api/gnosis)
- [GetBlock](https://getblock.io/nodes/gno/)
- [BlockPI](https://docs.blockpi.io/documentations/api-reference/gnosis)

Check out also [rpc providers](../tools/RPC%20Providers/README.md) for more options on hosted nodes.

#### **Hardware**

However, a censorship-resistant, decentralized network should not rely on cloud providers. Instead, running your node on your own local hardware is healthier for the ecosystem. Estimations show a large share of nodes run on the cloud, which could become a single point of failure.

Gnosis clients can run on your computer, laptop, server, or even a single-board computer. While running clients on your personal computer is possible, having a dedicated machine just for your node can significantly enhance its performance and security while minimizing the impact on your primary computer.

Using your own hardware can be very easy. There are many simple options as well as advanced setups for more technical people. So let's look into the requirements and means for running Gnosis clients on your machine.

#### **Requirements**

Hardware requirements differ by client but generally are not that high since the node just needs to stay synced. Don't confuse it with mining, which requires much more computing power. Sync time and performance do improve with more powerful hardware however.

Before installing any client, please ensure your computer has enough resources to run it. You can find the minimum and recommended requirements below.

The bottleneck for your hardware is mostly disk space. Syncing the Gnosis blockchain is very input/output intensive and requires a lot of space. It is best to have a solid-state drive (SSD) with hundreds of GBs of free space to spare even after the synchronization. Refer to [this post](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038) for good and bad SSD model.

The size of the database and speed of the initial synchronization depends on the chosen client, its configuration and sync strategy.

Also make sure your internet connection is not limited by a bandwidth cap. It's recommended to use an unmetered connection since initial sync and data broadcasted to the network could exceed your limit.

**Operating System**

All clients support major operating systems - Linux, MacOS, Windows. This means you can run nodes on regular desktop or server machines with the operating system (OS) that suits you the best. Make sure your OS is up to date to avoid potential issues and security vulnerabilities.

**Requirements**

- CPU with at least 4 threads
- At least 16 GB of RAM
- NVMe SSD (preferred) or SATA SSD

Requirements vary client to client, for more detail see the associated system requirements below.

| Execution Layer |                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Nethermind      | [Nethermind: System Requirements](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/system-requirements) |
| Besu            | [Besu: System Requirements](https://besu.hyperledger.org/en/stable/public-networks/get-started/system-requirements/)     |
| Erigon          | [Erigon: System Requirements](https://github.com/ledgerwatch/erigon#system-requirements)                                 |
| Geth            | [Geth: Hardware](https://geth.ethereum.org/docs/interface/hardware)                                                      |

**Gnosis Chain only supports Nethermind and Erigon at the moment.**

| Consensus Layer |                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Lighthouse      | [Lighthouse: System Requirements](https://lighthouse-book.sigmaprime.io/installation.html#recommended-system-requirements)            |
| Lodestar        | [Lodestar: Specifications](https://chainsafe.github.io/lodestar/#specifications)                                                      |
| Nimbus          | [Nimbus: Hardware](https://nimbus.guide/hardware.html)                                                                                |
| Teku            | TBD                                                                                                                                   |
| Prysm           | [Prysm: Prerequisites](https://docs.prylabs.network/docs/install/install-with-script/#step-1-review-prerequisites-and-best-practices) |

**Gnosis Chain doesn't support Prysm at the moment.**

Check out [Rocketpool's excellent guide](https://docs.rocketpool.net/guides/node/local/hardware.html) that explains hardware requirements for running a node.

### **Gnosis in Ethereumverse**

Running a Gnosis node requires no different hardware configuration from other nodes in Ethereum universe.

[Ethereum on ARM](https://twitter.com/EthereumOnARM/status/1641374712348409859) demonstrates that it is possible to run a Gnosis, Ethereum, Starknet, and Arbitrum node using the same hardware configuration with less than $400 per node. (March 2023)

| Hardware                                            | Price (USD) |
| --------------------------------------------------- | ----------- |
| [Rock 5B board(16GB)](https://twitter.com/theradxa) | $189        |
| Acrylic case with passive heatsink                  | $13         |
| Crucial P2 NVMe SSD 2TB                             | $140        |
| MicroSD                                             | $8          |
| Ethernet cable                                      | $6          |
| Power supply                                        | $9          |

### Network Connectivity

Running a node requires a reliable internet connection, as nodes are constantly exchanging data across the peer-to-peer network. Brief offline periods will result in [small inactivity penalties](./rewards-penalties), but this will typically be recouped quickly as long as the outage is short.

A Gnosis node with an average number of peers consumes approximately 700 mb/hour of upload bandwidth, and this may increase with time. Note that syncing the execution layer of Gnosis may take up to 1-3 days, depending on your setup.

For better understanding of the network throughput requirements, a benchmark was conducted on the [Lighthouse v2.2.1 client](./manual/beacon/lighthouse.md) running a GBC on 4th May 2022. The client was configured to maintain 100 simultaneous peer connections. Inbound and outbound traffic consumption was measured while altering the number of active validators connected to the beacon node.

Validators are advised to consider those numbers when planning their infrastructure and budget. With growth of the overall validator set, these requirements will increase over time as well. Make sure to allocate enough spare resources to account for future network growth.

| Number of validators | Inbound traffic | Outbound traffic | Approximate monthly traffic |
| -------------------- | --------------- | ---------------- | --------------------------- |
| 10                   | 1.0 MB/s        | 1.8 MB/s         | 7.2 TB                      |
| 32                   | 2.4 MB/s        | 3.15 MB/s        | 14.2 TB                     |
| 64                   | 4.5 MB/s        | 3.8 MB/s         | 21.2 TB                     |
| 128                  | 4.6 MB/s        | 3.8 MB/s         | 21.5 TB                     |
| >256                 | 4.6 MB/s        | 3.9 MB/s         | 21.7 TB                     |

### **Plug-and-play solutions**

The easiest option for running a node with your own hardware is using plug-and-play boxes. Preconfigured machines from vendors offer the most straightforward experience: order, connect, run. Everything is preconfigured and runs automatically with an intuitive guide and dashboard for monitoring and controlling the software.

- [DappNode](https://docs.gnosischain.com/node/tools/dappnode/)
- [Avado](https://docs.ava.do/packages/gnosis/)
- [Stereum](https://stereum.net/)

## Spinning up the node

The actual client setup can be done either with automated launchers or manually, setting up client software directly.

For less advanced users, the recommended approach is to use a launcher, software that guides you through the installation and automates the client setup process. However, if you have some experience of using a terminal, the steps for manual setup should be simple to follow.

### Guided setup

Multiple user-friendly projects aim to improve the experience of setting up a client. These launchers provide automatic client installation and configuration, with some even offering a graphical interface for guided setup and monitoring of clients.

Below are a few projects which can help you install and control clients just with a few clicks:

- [DappNode](../node/Node%20Tools/dappnode.md) - DappNode doesn't come only with a machine from a vendor. The software, the actual node launcher and control center with many features can be used on arbitrary hardware.
- [Stereum](../node/Node%20Tools/stereum.md) - Launcher for installing clients on a remote server via SSH connection with a GUI setup guide, control center, and many other features.
- [Sedge](../node/Node%20Tools/sedge.md) - Node setup tool which automatically generates a Docker configuration using CLI wizard. Written in Go by Nethermind.
- [eth-docker](../node/Node%20Tools/eth-docker.md) - A docker automation project for Gnosis consensus and execution clients. Easy to setup by answering simple dialog-based questions on terminal.

### Manual setup

The other option is to download, verify, and configure the client software manually. Even if some clients offer a graphical interface, a manual setup still requires basic skills with the terminal but offers much more versatility.

As explained before, setting up your own Gnosis node will require running a pair of consensus and execution clients. Some clients might include a light client of the other kind and sync without any other software needed. However, full trustless verification requires both implementations.

#### **Getting the client software**

First, you need to obtain your preferred execution client and consensus client software.

You can simply download an executable application or installation package that suits your operating system and architecture. Always verify the signatures and checksums of downloaded packages. Some clients also offer repositories or Docker images for easier installation and updates. All of the clients are open source, so you can also build them from source. This is a more advanced method, but in some cases, it might be required.

Instructions for installing each client are provided in the documentation linked in the client lists above.

Here are the release pages of clients where you can find their pre-built binaries or instructions on installation:

**Execution clients**

- [Nethermind](https://downloads.nethermind.io/)
- [Erigon](https://github.com/ledgerwatch/erigon/releases)

**Consensus clients**

- [Lighthouse](https://github.com/sigp/lighthouse/releases)
- [Lodestar](https://github.com/ChainSafe/lodestar/releases)
- [Teku](https://github.com/ConsenSys/teku/releases)
- [Nimbus](https://github.com/status-im/nimbus-eth2/releases)

[Client diversity](https://eth2book.info/capella/part2/incentives/diversity/) is critical for consensus nodes running validators. If majority of validators is running a single client implementation, network security is at risk. It is therefore recommended to consider choosing a minority client.

#### Verifying the software

When downloading software from the internet, it's recommended to verify its integrity. This step is optional but especially with crucial infrastructure piece like the Gnosis client, it's important to be aware of potential attack vectors and avoid them. If you downloaded a pre-built binary, you need to trust it and risk that an attacker could swap the executable for a malicious one.

Developers sign released binaries with their PGP keys so you can cryptographically verify you are running exactly the software they created. You just need to obtain public keys used by developers, which can be found on client release pages or in documentation. After downloading the client release and its signature, you can use a PGP implementation, e.g. [GnuPG](https://gnupg.org/download/index.html) to easily verify them. Check out a tutorial on verifying open-source software using `gpg` on [Linux](https://www.tecmint.com/verify-pgp-signature-downloaded-software/) or [Windows/MacOS](https://freedom.press/training/verifying-open-source-software/).

Another form of verification is to make sure that the hash, a unique cryptographic fingerprint, of the software you downloaded matches the one provided by developers. This is even easier than using PGP, and some clients offer only this option. Just run the hash function on the downloaded software and compare it to the one from the release page. For example:

```sh
sha256sum teku-22.6.1.tar.gz

9b2f8c1f8d4dab0404ce70ea314ff4b3c77e9d27aff9d1e4c1933a5439767dde
```

### **Client setup**

After installing, downloading, or compiling the client software, you are ready to run it. This only means it has to be executed with the proper configuration. Clients offer rich configuration options, which can enable various features.

Let's start with options that can significantly influence client performance and data usage. Sync modes represent different methods of downloading and validating blockchain data. Before starting the node, you should decide what network and sync mode to use. The most important things to consider are the disk space, and sync time the client will need. Pay attention to the client's docs to determine which sync mode is the default. If that doesn't suit you, pick another one based on the level of security, available data, and cost. Apart from the synchronization algorithm, you can also set pruning of different kinds of old data. Pruning enables deleting outdated data, e.g. removing state trie nodes that are unreachable from recent blocks.

Other basic configuration options are, e.g. choosing a network - Mainnet or testnets, enabling HTTP endpoint for RPC or WebSockets, etc. You can find all features and options in the client's documentation. Various client configurations can be set by executing the client with the corresponding flags directly in the CLI or config file. Each client is a bit different; please always refer to its official documentation or help page for details on config options.

For testing purposes, you might prefer to run a client on Chiado testnet.

#### **Starting the execution client**

Before starting the Gnosis client software, perform a last check that your environment is ready. For example, make sure:

- There is enough disk space considering the chosen network and sync mode.
- Memory and CPU is not halted by other programs.
- Operating system is updated to the latest version.
- System has the correct time and date.
- Your router and firewall accept connections on listening ports. By default Gnosis clients use a listener (TCP) port and a discovery (UDP) port, both on 30303 by default.

Run your client on a testnet first to help make sure everything is working correctly.

You need to declare any client settings that aren't default at the start. You can use flags or the config file to declare your preferred configuration. Set of features and config syntax of each client differs. Check out your client's documentation for the specifics.

Execution and consensus clients communicate via an authenticated endpoint specified in [Engine API](https://github.com/ethereum/execution-apis/tree/main/src/engine). In order to connect to a consensus client, the execution client must generate a [`jwtsecret`](https://jwt.io/) at a known path. For security and stability reasons, clients should run on the same machine, and both clients must know this path as it is used to authenticate a local RPC connection between them. The execution client must also define a listening port for authenticated APIs.

This token is generated automatically by the client software, but in some cases, you might need to do it yourself. You can generate it using [OpenSSL](https://www.openssl.org/):

```sh
openssl rand -hex 32 > jwtsecret
```

#### Running an execution client

This section will guide you through starting execution clients. It only serves as an example of a basic configuration, which will start the client with these settings:

- Specifies network to connect to, mainnet in our examples
  - You can instead choose Chiado for preliminary testing of your setup
- Defines data directory, where all the data including blockchain will be stored
  - Make sure to substitute the path with a real one, e.g. pointing to your external drive
- Enables interfaces for communicating with the client
  - Including JSON RPC and Engine API for communication with consensus client
- Defines path to `jwtsecret` for authenticated API
  - Make sure to substitute the example path with a real one which can be accessed by clients, e.g. `/tmp/jwtsecret`

Please keep in mind that this is just a basic example, all other settings will be set to default. Pay attention to the documentation of each client to learn about default values, settings, and features. For more features, for example for running validators, monitoring, etc., please refer to the documentation of the specific client.

> Note that backslashes `\` in examples are only for formatting purposes; config flags can be defined in a single line.

**Running Nethermind**

Nethermind offers various [installation options](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started). The package comes with various binaries, including a Launcher with a guided setup, which will help you to create the configuration interactively. Alternatively, you find Runner which is the executable itself and you can just run it with config flags. JSON RPC is enabled by default.

```
nethermind --config gnosis \
    --datadir /data/gnosis \
    --JsonRpc.JwtSecretFile=/path/to/jwtsecret
```

Nethermind docs offer a [complete guide](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/running-nethermind-post-merge) on running Nethermind with consensus client.

An execution client will initiate its core functions, chosen endpoints, and start looking for peers. After successfully discovering peers, the client starts synchronization. The execution client will await a connection from consensus client. Current blockchain data will be available once the client is successfully synced to the current state.

#### **Starting the consensus client**

The consensus client must be started with the right port configuration to establish a local RPC connection to the execution client. The consensus clients have to be run with the exposed execution client port as configuration argument.

The consensus client also needs the path to the execution client's `jwtsecret` in order to authenticate the RPC connection between them. Similar to execution examples above, each consensus client has a configuration flag which takes the jwt token file path as an argument. This must be consistent with the `jwtsecret` path provided to the execution client.

If you plan to run a validator, make sure to add a configuration flag specifying the Gnosis address of the fee recipient. This is where ether rewards for your validator accumulate. Each consensus client has an option, e.g. `--suggested-fee-recipient=0xabcd1`, that takes an Gnosis address as an argument.

When starting a Beacon Node on a testnet, you can save significant syncing time by using a public endpoint for [Checkpoint sync](https://checkpoint.gnosischain.com/).

#### **Running a consensus client**

**Running Lighthouse**
Before running Lighthouse, learn more on how to install and configure it in [Lighthouse Book](https://lighthouse-book.sigmaprime.io/).

```bash
    ./lighthouse \
    --network gnosis beacon_node \
    --datadir=data \
    --http \
    --execution-endpoint http://localhost:8551 \
    --execution-jwt /path/to/jwtsecret \
    --checkpoint-sync-url "https://checkpoint.gnosischain.com"
```

**Running Lodestar**

[Lodestar](https://chainsafe.github.io/lodestar/)

```bash
./lodestar beacon \
--network gnosis \
--dataDir="/data"
--jwt-secret /path/to/jwtsecret \
--eth1.enabled=true \
--execution.urls="http://127.0.0.1:8551" \
```

**Running Teku**

[Teku](https://docs.teku.consensys.net/)

```bash
teku \
    --network gnosis \
    --data-path "/data/gnosis" \
    --ee-endpoint http://localhost:8551 \
    --ee-jwt-secret-file "/path/to/jwtsecret" \
```

### **Adding Validators**

A consensus client serves as a Beacon Node for validators to connect. Each consensus client has its own validator software described in detail in its respective documentation.

Running your own validator allows for [solo staking](https://ethereum.org/en/staking/solo/), the most impactful and trustless method to support the Gnosis network. This requires only 1 GNO. Check out how to [deposit validators](/node/manual/validator/deposit).

If you don't want to run your own node but interested in staking your GNO to earn fee, look into [liquid staking](/tools/beacon-chain/liquid-staking) for an overview about staking options.

## Reference

- [Gnosis Chain Staking Resource](https://forum.gnosis.io/t/awesome-gnosis-chain-staking-resources/7392)
