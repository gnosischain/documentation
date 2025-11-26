---
title: Running Nodes
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosis) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!**
:::

:::info
** :bulb: This document is continuously being improved.**
:::

# Running Nodes

1. **I think my HOPR version dappnode is completely broken down. I would like to exit the Gnosis staking and withdraw the GNOs. How can I do that without accessing my dappnode node?**

   It's usually very complicated to generate an exit message with an offline validator but if you want to do this, ask us for help on the Discord and we will look what can be done.

2. **I just changed my internet provider. Since then my nodes are not syncing. Do you guys know if any ports need to be open for GC (beacon chain and/or validators)?**

   If you use UPnP try to keep an eye on it and check how it behaves and if the issues persist, maybe you'll be better with manual port forwarding instead of relying on UPnP

3. **I have deposited for two hours, why haven’t I seen my node information?**

   It takes about 4 hours for a deposit to be processed, you can check how your validator is doing on gnosischa.in

4. **I'm getting an alert in Lighthouse that I've got an invalid signature and/or that an endpoint has failed, how to troubleshoot?**

   Lighthouse specific problem, you might want to ask Lighthouse directly about it

5. **I have trouble connecting to my beacon node? Is there any other way to get the offline-preparation.json file?**

   Be sure to use the right port used by your client. For example the default port for Lighthouse might be 5052, Avado nodes seems to use 5051, etc...

6. **I am getting the error error: Api \{ error: ServerMessage \{ code: -32602, message: "ExecutionPayloadV1 expected" \} \} on Lighthouse? Why?**

   If you're using Nethermind with the old xdai presets, replace them with gnosis

7. **I am getting the error error: Api \{ error: ServerMessage \{ code: -32602, message: "ExecutionPayloadV1 expected" \} \} on Lighthouse? Why?**

   If you're using Nethermind with the old xdai presets, replace them with gnosis

8. **Is there mev-boost for Gnosis Chain similar to Ethereum? Are there any relays?**

   There is no MEV-Boost on Gnosis Chain currently.

9. **Are validators meetups happening at a specific recurring date?**

   We aim to set the validator meetup in the third week of the month. however, due to the small size of comms team, date changes are to be expected...

10. **There's already existing solutions with pre-made hardware to run a validator?**

    Dappnode is the most known of ready to use validator hardware, among others on the market.

11. **How many GNO should I have to make it worth running a node?**

    It really depends on you but basically the more GNO you can stake (up to a few hundreds per node, for a regular Intel NUC 11), the more the cost of buying and running the node will be split and proportionally smaller for each validator.... If you're very good with DIY and have no fear of experimenting, you can even validate using a Raspberry Pi like a few validator are doing in the community.

12. **I am running 4 validators on my DappNode, and it seems like a waste of the machine. Is there an easy way to add more validators?**

    It's the same process basically, with the exception of a setting for the number of current instances running, where you'll need to enter the amount of validators you're already running. The Wagyu keygen tool for Gnosis is the easiest way to create your new keys.

13. **If I get a DappNode, what's the max amount of GNO that I can stake per node?**

    You should be able to run a few hundreds validators on a regular Dappnode. Note that you can only deposit 128 validators at a time, if you want to deposit more you need to repeat it, which is the same process basically, with the exception of a setting for the number of current instances running, where you'll need to enter the amount of validators you're already running. The Wagyu keygen tool for Gnosis is the easiest way to create your new keys.

14. **What are the hardware requirements for running a node?**

    [More info in the docs](https://docs.gnosischain.com/node/#requirements)

15. **Could you tell me what code I have to put in the Dappnode terminal to recover all my GNO that I have staked?**

    First of all be sure to already have a 0x01 withdrawal address or follow the [step by step guide](https://docs.gnosischain.com/node/management/withdrawals). Then go in the web3signer UI, select all keys, select the exit button, type the message ("I want to exit"), then verify on Gnosischa.in how it is going, it can take some time between the moment where you exit and the moment where it's visible on Gnosischa.in

16. **How much does it cost per month to run a full node on Azure?**

    Clouds providers are usually much more expensive than running a node yourself. An estimation in the community for Azure found that the average price to run a node on Azure, as mid-2023 would be possibly around $300 per month.

17. **My validator is Status Slashed, how to withdraw or re-become validator?**

    To troubleshot your node, you can check your Dappnode dashboard or the logs of the clients. If the problem comes from the consensus client, often switching to another client like Lighthouse helps. Lighthouse with checkpoint sync takes only about 2 minutes to be up and running. If you need more help to troubleshoot this, please ask on the Discord.

18. **Is it possible to switch from Teku to Lodestar client?**

    It's totally possible to switch to another consensus client and it often helps to solve some client problems, switching should be fast using checkpoint sync.

19. **After making the 1 GNO deposit, how long it takes to the validator to be active?**

    It takes about 4 hours for a deposit to be processed, you can check how your validator is doing on gnosischa.in

20. **Is it worth to be a validator?**

    Regardless of your number of validators by becoming one you're helping to secure and decentralize the network and you can earn a decent APY (who was ~14% as of October 2023 but who depends of the number of validators)

21. **How many deposits per epoch are allowed on GBC? How long would it take to deposit and start validating?**

    You can deposit quickly on Gnosis Chain, as of mid 2023, there was 17280 new validators deposits per day if all slots are full

22. **Can I run a validator on my own PC, not with ideal hardware requirements but close to the specified ones?**

    It might be possible, check if your hardware is close to the requirements in the docs

23. **Now I got three validator-nodes on Zonaris only to discover I can't afford the staking GNO idk if delegated staking is a thing, but if yes I would keep those nodes up if there's interest.**

    Clouds node hosting can be very expensive and sometimes can also be not financially sustainable with the APY you can earn as a validator. If that's a possibility for you you might want to consider running your node at home. Otherwise you can try liquid staking like [Stakewise](https://app.stakewise.io/).

24. **Is Nethermind XDAI the only Execution clients for Gnosis?**

    Erigon is an alternative that you might consider.

25. **Is Erigon safe to use?**

    Erigon is now ready for production use!

26. **Is it possible to start again an exited node?**

    If you have exited, it means your validator does not have any GNO to participate in the validation. You need to deposit again to start validating.

27. **How easy is it to exit validators?**

    If your have changed your withdrawal credentials from 0x00 to 0x01 or if it is already set as 0x01, you can use Web3Signer to exit your validator. If not, you can follow the step by step guide on our documentation.

28. **If I have, say 100 GNO, can I put them all in a single validator to earn rewards on all 100, or must I run 100 separate validators of 1 each?**

    The effective balance of a single validator is 1 GNO. All other GNO rewards accrued on your validator are ready to be claimed by calling the `claimWithdrawals function` on the GBC deposit contract or using the Withdrawal Claim tab on https://deposit.gnosischain.com/. If you have more than 1 GNO, you can set up multiple validators using the same machine.

29. **Can I participate in gnosis governance with GNO staked in validators? I would not think so, but if yes, how?**

    Depending on how the strategies for governance participation is set for a specific vote on Snapshot, you can vote with your GNO staked for validating by using the address that you have used to fund your validators.

30. **Hey guys, is there any way how to free disk space on Gnosis node , any pruning or state sync?**

    If you would like to clear up some space, you can delete your CL client info (except your wallet / keys of course) and use checkpoint sync, it usually takes only 2 minutes.

31. **Is the Gnosis validator incentive program still available? Looking to start a node here from Ghana- West Africa.**

    Gnosis VIP was run by Gnosis Builders team, which has been retired. It will go live soon. Stayed tuned!

32. **My nodes are producing negative income for some reason. I have to admit I have neglected them for a while. Do I need to update them? The dappstore is showing the version of teku and nethermind I got running as the current version, the nodes are 100% synced. They are producing positive and negative income in irregular intervals, dashboard shows them as healthy, I'm kinda lost tbh, any help?**

    It might be due to unstable connection. You can check the logs to see the number of peers both for your CL and EL. Also, keeping your clients up-to-date is essential.

33. **I want to run a validator, where can I find documentation?**

    The docs have a complete section dedicated to running a node https://docs.gnosischain.com/node/

34. **Any recommended walkthroughs or guides on how best to take my Gnosis validators offline?**

    You can do a [voluntary exit](https://docs.gnosischain.com/node/management/voluntary-exit) either from the client itself or if you are on Dappnode from the Web3signer UI then wait for your validator to leave the exit queue and once the withdrawal is ready claim on the Deposit page or manually from the contract by calling the claimWithdrawals function and entering your withdrawal address
