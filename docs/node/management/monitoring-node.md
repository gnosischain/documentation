---
title: Monitoring your Node(s)
---

To monitor a node in the network, you can either observe your own node's status or the entire network.     
Monitoring your own node can give you insight into its status, and setting up a monitoring dashboard using Prometheus and Grafana is commonly used.    
To monitor the network, options include ethstats, forkmon, beacon.gnosischain, and blockscout, each providing different types of information about the network and validator-related metrics. 



## Monitoring your own node with Prometheus + Grafana

**Prometheus** is a systems monitoring tool that pulls data from certain endpoint and stores the data into a database.    
**Grafana** is a data visualisation tool that allows user to create their own dashboard from different data sources, including Prometheus.    
**Node exporter** is a monitoring tool that exposes your hardware and OS metrics. It can provide your system metrics to Prometheus.

To set up these tools, please refer the exellent guide from ethstaker on [how to do monitoring for an Ethereum validator](https://github.com/eth-educators/ethstaker-guides/blob/main/monitoring.md). 

You may also refer the [Ethereum Setup Instructions ](https://launchpad.ethereum.org/en/)for best monitoring practices.


In order to expose your node's clients data to Prometheus, please ensure the execution or consensus client has enabled the appropriate metrics flag.

### Execution client

<Tabs>
<TabItem value="Nethermind" label="Nethermind">

    --Metrics.Enabled true
    --Metrics.PushGatewayUrl
 
Refer to https://docs.nethermind.io/nethermind/ethereum-client/metrics/setting-up-local-metrics-infrastracture
</TabItem>

<TabItem value="Erigon" label="Erigon">
WIP
</TabItem>
</Tabs>

### Consensus client
<Tabs>
<TabItem value="lighthouse" label="Lighthouse">

    --metrics

https://lighthouse-book.sigmaprime.io/advanced_metrics.html    
https://github.com/sigp/lighthouse-metrics
</TabItem>
<TabItem value="Lodestar" label="Lodestar">

    --metrics=true

https://chainsafe.github.io/lodestar/usage/prometheus-grafana/
 </TabItem>
<TabItem value="Teku" label="Teku">

    --metrics-enabled=true

https://docs.teku.consensys.net/en/latest/HowTo/Monitor/Metrics/

</TabItem>
<TabItem value="Prysm" label="Prysm">

https://docs.prylabs.network/docs/prysm-usage/monitoring/grafana-dashboard/
</TabItem>

</Tabs>



## Monitoring the network

### Ethstats
Ethstats provides insight about the entire state of Gnosis network such as Block Time, Transactions per block, Gas per block; as well as individual node's metrics such as node's OS, Execution client version, peers number, etc.

:::tip 
By default, your node data will not be listed on the ethstats page.
Listing a node on ethstats is a voluntary process.
:::

To enable [ethstats module](https://docs.nethermind.io/nethermind/ethereum-client/configuration/ethstats) in Nethermind, set `--EthStats.Enabled true`.

Gnosis chain: https://ethstats.gnosischain.com/    
Chiado: https://ethstats.chiadochain.net/


### Forkmon
Forkmon (Fork monitor) is another tool to monitor Node's status.     
Gnosis Chain: https://forkmon.gnosischain.com/    
Chiado: https://forkmon.chiadochain.net/

Source: https://github.com/ethereum/nodemonitor

### Block explorer
**Gnosisscan**    
[Gnosisscan](https://gnosisscan.io/) provides data about blocks, transactions, validator's reward on Execution Layer, etc.


**Blockscout**    
[Blockscout](https://blockscout.com/xdai/mainnet) is another blockexplorer similar to Gnosisscan.

**beacon.gnosischain**    
[beacon.gnosischain](https://beacon.gnosischain.com/) provides insight on consensus layer sucha as most recent epochs, most recent blocks, and validator's reward on Consensus layer. You can view your validator's info by using its public key or index.




