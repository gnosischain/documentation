# Home vs. Cloud

# Requirements

## Technical Requirements {#technical-requirements}

**Hardware requirements**

The following is recommended hardware requirements for a Gnosis validator, this is suitable across all clients and with a good buffer for performance and cost. 

**Recommended**

- Quad-core CPU
- 16GB RAM (8GB min)
- 1TB SSD 
- 100 Mb/s download, 20 Mb/s upload broadband connection

**Storage**

Storage is important, and disk I/O will determine sync speed and ability to keep up, it's recommended to have higher quality SSDs if using SATA, however NVMe drives are preferred. An HDD (hard disk) is too slow!

**Connectivity**

A reliable internet connection is key: bandwidth should not be throttled or capped. Upload bandwidth should be a minimum of 700 MB/hour with increases likely. Brief periods offline may result in small inactivity penalties, but this will typically be recouped quickly as long as the outage is short.

Note that synching the execution layer of Gnosis may take up to 1-3 days, depending on your setup.

**Hardware Requirements per Client**

Requirements vary client to client, For more detail see the associated system requirements below.

[Nethermind](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/system-requirements) \
[Besu](https://besu.hyperledger.org/en/stable/public-networks/get-started/system-requirements/) \
[Erigon](https://github.com/ledgerwatch/erigon#system-requirements)\
[Geth](https://geth.ethereum.org/docs/interface/hardware) 

[Lighthouse](https://lighthouse-book.sigmaprime.io/system-requirements.html) \
[Lodestar](https://chainsafe.github.io/lodestar/#specifications) \
[Nimbus](https://nimbus.guide/hardware.html) \
Teku \
[Prysm](https://docs.prylabs.network/docs/install/install-with-script/#step-1-review-prerequisites-and-best-practices)

**Network utilization benchmark**

For better understanding of the network throughput requirements, a benchmark was conducted on the Lighthouse v2.2.1 client running a GBC on 04.05.22.

The client was configured to maintain 100 simultaneous peer connections. Inbound and outbound traffic consumption was measured while altering the number of active validators connected to the beacon node.

Validators are advised to consider those numbers when planning their infrastructure and budget. With growth of the overall validator set, these requirements will increase over time as well. Make sure to allocate enough spare resources to account for future network growth.

<table>
  <tr>
   <td><strong>Number of validators</strong>
   </td>
   <td><strong>Inbound traffic</strong>
   </td>
   <td><strong>Outbound traffic</strong>
   </td>
   <td><strong>Approximate monthly traffic</strong>
   </td>
  </tr>
  <tr>
   <td>10
   </td>
   <td>1.0 MB/s
   </td>
   <td>1.8 MB/s
   </td>
   <td>7.2 TB
   </td>
  </tr>
  <tr>
   <td>32
   </td>
   <td>2.4 MB/s
   </td>
   <td>3.15 MB/s
   </td>
   <td>14.2 TB
   </td>
  </tr>
  <tr>
   <td>64
   </td>
   <td>4.5 MB/s
   </td>
   <td>3.8 MB/s
   </td>
   <td>21.2 TB
   </td>
  </tr>
  <tr>
   <td>128
   </td>
   <td>4.6 MB/s
   </td>
   <td>3.8 MB/s
   </td>
   <td>21.5 TB
   </td>
  </tr>
  <tr>
   <td>>256
   </td>
   <td>4.6 MB/s
   </td>
   <td>3.9 MB/s
   </td>
   <td>21.7 TB
   </td>
  </tr>
</table>

## Home

## Cloud