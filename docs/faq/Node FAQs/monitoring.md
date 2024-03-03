---
title: Monitoring and Alerts
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosischain) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!** 
:::

:::info
** :bulb: This document is continuously being improved.** 
:::

# Monitoring and Alerts

1. **Got a couple of validators on DappNode and I'm moving soon, how can I pause validators to avoid missing attestations?**

    Either leave your validator as it is and then you will end up just having "offline penalties" which are about equal to what you would have earned by validating in a day. The other option is to exit your validators (be sure to have a 0x01 withdrawal address before). Within the community some validators consider that if you will stop validating for less than 30 days then it might not be worth exiting your validator... but over 30 days it is worth it.
    
2. **I am getting INFO - Beacon chain is in activity leak on Teku. Why?**

    Could be related to the system clock being delayed. Open a terminal then enter ssh dappnode@[your Dappnode's IP] in your terminal then use `su` then try `sudo apt update && sudo apt install ntp`. As this is more complex, don't hesitate to ask on our Discord for help if needed.
    
3. **Anyone has an automated alert for their validators?**
    
    Open an account on gnosischa.in it will send you an email when the node goes down
    
4. **Is there a queue monitor similar to validatorqueue.com for beaconchain?**
    
    There is an exit queue on Gnosis Chain as well but no dedicated website. Once the your voluntary exit message broadcasted, you can monitor the progress of your validator withdrawal on Gnosischa.in
    
5. **Would anyone in this group be interested in a Gnosis Chain validators monitoring bot?**
    
    Some validators from the community are currently building tools to help monitor their validators better
    
6. **Is there a way to check my claimable balance of GNO?**
    
    Go on the [deposit contract](https://gnosisscan.io/address/0x0B98057eA310F4d31F2a452B414647007d1645d9#readProxyContract) and enter your withdrawal address in the field "`7.withdrawableAmount`"
    
7. **Has anyone set up multiple validators to monitor under your account on gnosischa.in? I'm wondering if there is a way to batch add validators instead of just one-by-one. (edited)**
    
    You should be able to add them in bulk by searching for the deposit/withdrawal address in the dashboard and then clicking the button that looks like a bookmark (save all to watch list).You can then select all and manage notifications for your selection in the notification center. The dashboard only shows up to 100 in the free fier, but I think you can add up to 300 to the watch list.
    
8. **Anyone have a detailed gas chart for Gnosis?**
    
    You can take a look at Blockscout to get detailed analytics about Gnosis Chain, including gas chart here: https://gnosis.blockscout.com/stats
    
9. **Noticed a quite high xDAI burn rate in several of my blocks during the last about 5 to 6 days. Does anyone can explain me what this is caused by? Just due to higher traffic or have some parameters been adjusted?**
    
    There is an ongoing NFT spam on Gnosis Chain. The spam NFT minters use legacy transaction types, meaning they only set a gas price not a base fee and tip. This results in validators getting everything above the base fee as a tip. I have no idea why they use legacy transaction, but obviously they are not price sensitive. In your block it looks like it was several MEV bots swapping tokens around also using legacy transactions.
