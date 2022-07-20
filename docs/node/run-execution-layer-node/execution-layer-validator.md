---
---
# Run a Gnosis Chain Execution Layer Node

You can also run a Gnosis Chain Execution Layer Node on the same machine as your Beacon Chain node(s). This is reccomeneded for more experienced node runners, but is highly encouraged as it increases decentralization of the network. You can link Gnosis Beacon Chain to an existing node through a JSON RPC endpoint. This is the easiest method when you first setup your node. You will be encouraged to update your setup once the merge happens. If you have experience and want to setup your own GC node now, read on!

## Technical Requirements

GC Nodes can be run with Nethermind client and the following recommended minimum specs:

* OS: Ubuntu, Windows & MacOs
* CPU: 2 cores
* RAM: 4GB
* Disk: 100gb SSD
* Git installed `git --version`

## Setup on Nethermind

:::caution
A majority of Gnosis Chain validators are now running the Nethermind client. The latest version 1.12.7 includes support for the latest Gnosis Chain HF.

Version [https://github.com/NethermindEth/nethermind/releases/tag/1.12.7](https://github.com/NethermindEth/nethermind/releases/tag/1.12.7)

Ethstats: [https://dai-netstat.poa.network/](https://dai-netstat.poa.network)
:::

Nethermind Launcher is a self-contained app - you do not need to install .NET separately to run it.

📄 **Nethermind Docs**: [https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started)

📦 **Latest Packages:** [http://downloads.nethermind.io/](http://downloads.nethermind.io)

🛑 **To stop Nethermind:** `Control + c`

### **Configuration**

* [Supported Platforms](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/supported-platforms) (macOS, Windows, Linux)
* [Platform-specific instructions for running the client](https://docs.nethermind.io/nethermind/ethereum-client/running-nethermind/running-the-client)
* The Nethermind Launcher will present several options on start. Use arrow keys to select options[ Available CLI methods ](https://docs.nethermind.io/nethermind/nethermind-utilities/cli)- CLI supports javascript.
* [Understanding logs](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started#explaining-nethermind-logs)

:::note
When you start the Launcher choose the following options to sync a node:

* Start Nethermind: **Node**
* Select network: **xDai**
* Select sync: **Fast sync**
:::

### **Sharing machines for GC and GBC clients**

As was mentioned on the doc page for running a beacon chain node, if you decide to run a Gnosis Chain client (Nethermind) and a Gnosis Beacon Chain client (Lighthouse or Prysm) on the same machine, we recommend [running both in the same docker-compose.yml ](https://docs.docker.com/compose/extends/)file to enable RPC access by container name.

If you have questions about config details for this type of setup, please [ask in our discord.](https://discord.com/invite/pjHjQwycV8)



