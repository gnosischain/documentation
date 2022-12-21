---
description: September 19 - September 25 2020
date: 2020-09-25
---

# ⚔️ xDai Weekly Recap - 25/09/2020

import ArchiveWarning from '@site/src/components/ArchiveWarning';

<ArchiveWarning />

## ****:scales: Network **Scalability Update**

:::info
The following is a long form response to an unsophisticated exploit conducted on the xDai bridge, and steps we are taking to address this issue and xDai network scalability in general. [Additional Weekly Updates](xdai-weekly-recap-25-09-2020.md#weekly-updates-xdai-community) appear following this post.
:::

Over the past several months we’ve seen a huge increase in users, with dozens of teams moving over to xDai and asset transfers coming in at breathtaking speed! As a result, we are very busy addressing scalability issues related to this influx of new projects and users.

One consequence of our popularity is we are now attracting hackers intent on disrupting the network. Below we talk about a fresh attack, and some of the things we are doing to prevent future bad faith attacks as well steps we are taking to increase speed and network scalability.

### **Lessons from a Public Goods Exploit: Bridge Drain Attack**

:::info
**Note: No user funds are or were at risk from this exploit - the following only relates to validator resources**.
:::

This week a black hat hacker decided to run a simple exploit which resulted in some losses for validator accounts on the bridge.  Currently, bridge operations for the xDai -> Dai bridge are subsidized by the project to provide users with relief from high gas prices on Ethereum Network.  In this attack, the hacker converted 1000 DAI to xDai then used a script to withdraw $10 at a time back to Ethereum, resulting in high gas fees for every withdrawal which were paid by bridge validators.

All user funds were safe during this incident, and it highlighted some known issues with the Dai -> xDai bridge, mainly that it operates with a trusted setup, a limited validator set, and subsidized fees. Adjustments were made to prevent further drains from this malicious actor and avoid similar types of exploits, which resulted in bridge issues for other honest users. While inconvenient, this attack helped our team propose some immediate adjustments (including fast tracking a more decentralized governance protocol!) and reprioritize some of our upcoming work to address potential future issues.

#### Governance Updates:

Bridge management is vital to reacting to different circumstances with the bridge, such as increased funds moving in, attacks, or any issues with the current bridge management set (governors). The 3/4 multisig is not robust enough to handle growing bridge usage, so we are implementing a Gnosis safe to simplify bridge management and include up to 11 governors to start. Governors are community members who have expressed a willingness to participate and 6/11 signatures will be required to enact a proposal assuming all 11 join. This group will also be able to adjust and extend the management set through a governance process. In addition, they can decide to upgrade the contracts and parameters (like fees, limits etc) as needed to respond to dynamic conditions. More on the process and governors:[ https://forum.poa.network/t/increase-number-of-participants-in-the-xdai-bridge-management-multsigs/3773](https://forum.poa.network/t/increase-number-of-participants-in-the-xdai-bridge-management-multsigs/3773)

#### Bridge Limits:

Bridge limits were adjusted this week with the current governance set to allow for larger deposits and withdrawals, as well as increasing the amount for a single max and minimum withdrawal from the bridge.  Bridge Limits: [https://www.xdaichain.com/for-users/converting-xdai-via-bridge#dai-xdai-bridge-limits](https://www.xdaichain.com/for-users/converting-xdai-via-bridge#dai-xdai-bridge-limits)

#### Optimistic Bridge Priority:

As we can see there is a need for an additional trustless bridge solution. We have proposed an optimistic model and are currently receiving feedback and planning our implementation strategy.  We have increased the prioritization for this task and will devote additional resources to push it forward more quickly. Learn more: [https://ethresear.ch/t/optimistic-bridge-between-mainnet-and-a-pos-chain/7965](https://ethresear.ch/t/optimistic-bridge-between-mainnet-and-a-pos-chain/7965)

#### Addressing Increased Load:

In addition to attracting hackers, we also have many more users which are pushing the network and infrastructure in new ways. We are addressing these issues by adding more servers to the load balancers for RPC nodes and optimizing the bridge UI to decrease load on the load balancer. We will increase our monitoring and look to address loading issues proactively going forward.

We always maintain hope that future hackers will bring issues to us which can be worked with in a productive way for the network and the community as a whole rather than for attention or some other unknown motive. However, we realize this is unrealistic and will continue to be vigilant and hone and prepare our defenses in anticipation of the next attack.

:pray: Through this ordeal, we certainly appreciate our community response. Our bridge infrastructure, like everything in the blockchain ecosystem, is a work in progress. We are constantly working to fine tune, institute best practices and resolve issues as we find them. xDai is strong and only growing stronger, thanks to our community of supporters and detractors.

## Weekly Updates - xDai Community

### ✓ STAKEhaus DAO

A DAO for and by the xDai Community. We provided support for the DAO to help get things kick started and more projects built on xDai!

https://twitter.com/xdaichain/status/1308678488140984320

### ✓WIPmeetup Sponsorship

xDai sponsored this virtual crytpovoxels event

https://twitter.com/theWIPmeetup/status/1309141594268934146

## :cut\_of\_meat: EasyStaking

### ✓ Round 3 distributions sent to Liquidity Providers

https://twitter.com/xdaichain/status/1308480684621795330

## :newspaper: Press/Media

### ✓ xDai featured in CoinDesk MarketWrap

https://www.coindesk.com/market-wrap-bitcoin-drop-xdai-doubles-value-locked

### ✓ TVL on xDai rising "parabolically"

https://twitter.com/spencernoon/status/1308843560645648385?s=19

## Project Updates

### ✓ Vocdoni secure voting platform migrates to xDai

https://twitter.com/vocdoni/status/1308654891431342080

### ✓ Shenanigan launches on xDai

https://twitter.com/She_Dapp/status/1307464518428028928

### ✓ Conviction voting on xDai

https://twitter.com/commonsstack/status/1308420793425158151

## :art: Design Contests

Two art contests are still ongoing - prizes for Nifty Ink and Twitter Banner designs:

* Nifty: [https://forms.gle/LJGSDWTauwAFWVZi7](https://forms.gle/LJGSDWTauwAFWVZi7)
* Twitter: [https://airtable.com/shrWqBjOHBzsdIdDI](https://airtable.com/shrWqBjOHBzsdIdDI)
