---
description: A quickstart guide for getting up and running with Swarm using Dappnode
keywords: [swarm, storage, decentralized, decentralised, dappnode]
---

# Swarm with Dappnode

The following is a beginner friendly guide to get you started running a Bee full node with staking on Swarm using Dappnode.

## Prerequisites

### Hardware

- A [Dappnode Home](https://dappnode.com/collections/frontpage) box
- Or Dappnode Core installed or any machine/VPS that meets the [hardware requirements](https://docs.dappnode.io/docs/user/install/overview/#specifications--minimum-requirements). 

### Software

Please refer to the official Dappnode [installation guide](https://docs.dappnode.io/docs/user/install/overview/) to setup Dappnode Core and [connect to it](https://docs.dappnode.io/docs/user/access-your-dappnode/vpn/overview).

You will also need a Gnosis RPC Endpoint (such as Nethermind xDAI) for your bee node to be operate as a full node. Dappnode makes it very easy to [spin up a Gnosis node](http://my.dappnode/stakers/gnosis).

### Tokens

* A small amount of [xDAI](https://docs.ethswarm.org/docs/learn/tokens#xdai) to pay for Gnosis Chain transactions, 0.1 xDAI should be enough
* [xBZZ](https://docs.ethswarm.org/docs/learn/tokens#xbzz) (BZZ on Gnosis Chain) is required for funding the chequebook, buying stamps for storage and staking (minimum 10 xBZZ) 

## Full node setup process 

This section will guide you through setting up and running a single Bee full node using Dappnode. 

### Install the Swarm package

(1) Once you connect to your Dappnode's network or via a VPN you can access the its dashboard UI at [my.dappnode](http://my.dappnode/) 

![Dappnode Dashboard](/img/tools/swarm/dappnode-dashboard.png)

(2) Open the DAppStore using the sidebar to the left. Search for **Swarm** using the DAppStore search bar. You should see the latest version of the Swarm package in the listed dApps. Click the **GET** button under the Swarm package. 

![DAppStore Swarm Package](/img/tools/swarm/dappnode-package-get.png)

(3) This should take you to the [DAppStore Swarm page](http://my.dappnode/installer/dnp/swarm.public.dappnode.eth) page. Click **INSTALL**.  

![DAppStore Swarm Package Install](/img/tools/swarm/dappnode-package-install.png)

(4) On the setup page, for the **Blockchain RPC Endpoint** field, enter the Querying API endpoint of the Gnosis execution client you have installed on your Dappnode. The rest of the fields can be left to its default values. Scroll down and click **Submit**. Then click **Accept** on the disclaimer page. This should begin the process of downloading, verifying and installing your Swarm package.

![Configure Blockchain Endpoint](/img/tools/swarm/gnosis-blockchain-endpoint.png)

(5) Once the Swarm package is installed, navigate to the Swarm Package Info page. Checkout the bee logs under the **Logs** tab.  Look for the line which says something like: 
```
"time"="2024-10-02 08:48:34.948528" "level"="warning" "logger"="node/chequebook" "msg"="cannot continue until there is at least min xDAI (for Gas) available on address" "min_amount"="0.0004999999995" "address"="0x1A...3CD"
```
Send a small amount of `xDAI` (bit more than the `min_amount` above) to the bee node `address`in the log message. This should automatically deploy the chequebook for your bee node on the gnosis blockchain. And the bee node will proceed to sync data from the Swarm network. 

![DAppStore Swarm Package Info](/img/tools/swarm/dappnode-package-info.png)

(6) On the **Info** page, you can find the link to the Bee dashboard Ui right below the "Homepage" link - http://dashboard.swarm.public.dappnode/ 

![DAppStore Swarm Package Info](/img/tools/swarm/dashboard-ui-link.png)

(7) Go to the Bee Dashboard and click the **Account** link in the sidebar. You can find your bee nodes wallet address and the amount of xDAI and xBZZ it holds. 

![DAppStore Swarm Package Info](/img/tools/swarm/dashboard-account-page.png)

You will also find additional tabs here for:

- Chequebook: to deposit and withdraw xBZZ used to facilitate settlements between nodes based on their relative consumption of bandwidth. Funding the chequebook incentivisez your pbee node's peers and helps boost your download speeds.

- Stamps: to buy and manage stamps which are required to upload data to the Swarm network

- Feeds: to create and update feeds which provide the ability to update your immutable content in a mutable world

- Staking: to stake `xBZZ` and earn rewards

### Staking xBZZ

In order to earn rewards, your bee node must stake a minimum of `10` xBZZ. Once you have transferred some xBZZ to the node wallet, you can stake a minimum of `10` xBZZ (`100000000000000000` PLUR) or more through the Bee dashboard's Account page under the **Staking** tab. Once the funds have been staked, your bee node will begin participating in the redistribution game and earn rewards for contributing storage and bandwidth to the Swarm.

![DAppStore Swarm Package Info](/img/tools/swarm/dashboard-staking-page.png)

## Links:

- Swarm Documentation - https://docs.ethswarm.org/
- Swarm Repo - https://github.com/ethersphere/bee
- Swarm Dappnode Package Repo - https://github.com/w3rkspacelabs/dappnodepackage-swarm 