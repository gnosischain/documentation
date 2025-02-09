---
title: Deposit, Withdrawals, and Rewards
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosis) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!**
:::

:::info
**:bulb: This document is continuously being improved.**
:::

# Deposit, Withdrawals and Rewards

1. **What are withdrawals?**

   Validator withdrawal allows a validator’s account balance to get withdrawn from Beacon Chain to Execution Layer, in the form of GNO. The GNO will be accrued on validator’s withdrawal address on the Execution Layer, which is set using `eth1_withdrawal_address` option during validator key generation.

2. **What are two types of withdrawals?**

   There are 2 types of withdrawals: Partial Withdrawal and Full Withdrawal.
   Partial Withdrawal: Any balance in excess of 1 GNO from the account balance gets withdrawn back to withdrawal address.
   Full Withdrawal: All the balance from validator’s account gets withdrawn back to withdrawal address. This has to be initiated by validator, signing `voluntary_exit` message and broadcasting it to the network. It is irreversible.

3. **What are 0x00 and 0x01 withdrawal credentials prefixes?**

   The beacon chain validators have a field called withdrawal credentials, where the first byte is referred to as the withdrawal prefix. Currently, this value can be either 0x00 or 0x01, depending on how it is set during the deposit process using a deposit tool. Validators with 0x00 withdrawal credentials won’t have immediate withdrawal capabilities. To enable partial and full withdrawals and unlock their funds, these validators must undergo a one-time migration to 0x01. As this is a one time process, it is essential to be careful performing it.

4. **How do I change my withdrawal credential?**

   You can find a full tutorial on how to change your withdrawal credential [here](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential).

5. **I have been running multiple validators. Can I set up the same withdrawal credential for all of them?**

   Yes, you can set up the same withdrawal credential for all of your validators and can also set up different withdrawal credentials for individual validators.

6. **How long does it take for node status information to appear after a deposit?**
It takes about 4 hours for a deposit to be processed, you can check how your validator is doing on gnosischa.in.

7. **Where can I check my withdrawal credential?**

    You have to claim withdrawals manually now, you can do so on the [Deposit page](https://deposit.gnosischain.com/) or on the [Deposit contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F4). You can also visit [official docs](https://docs.gnosischain.com/node/management/withdrawals#check-withdrawal-credential) for more detail.

8. **Do partial withdrawals happen automatically?**

    As we have modified some specs regarding the withdrawals to enable withdrawing GNO instead of the native gas token xDai, unlike Ethereum, partial withdrawals currently do not happen automatically. So, for now, you will need to call [`claimWithdrawal`](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) function on the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract). However, it is in our plans to automate and subsidize partial withdrawals in the future.

9. **Do full withdrawals happen automatically?**

   No. If your validator is currently active and participating in the beacon chain, then the full withdrawal will not happen automatically. You will have to manually initiate an exit to cause this.

   Additionally, if you initiate an exit but still have a 0x00 withdrawal credential, your funds will not be withdrawn until a `BLSToExecutionChange` message is included on chain.

10. **Is there a UI that I can use for withdrawals?**

    No, as you will have to interact with the beacon chain, it is not feasible to provide a UI that encompasses all the clients.

11. **Where does the automatic balance withdraw to?**

    In case you are using a legacy withdrawal credential 0x00, it will not be withdrawn and you will have to perform a migration to 0x01 credentials to complete the withdrawal. If you have already configured your withdrawal address and have a withdrawal credential of 0x01, then rewards in excess of 1 GNO (32 mGNO) will be transferred to your withdrawal address.

12. **Once I have changed my credential to 0x01, can I change it to an alternative withdrawal address?**

    No, the migration from 0x00 to 0x01 is a one time process and once you set the address, it cannot be changed. Please make this migration with the utmost care. Note, the withdrawal credential can either be an externally-owned account (EOA) or a smart contract such as a SAFE.

13. **I have lost the private key to my withdrawal address, what can I do?**

    Unfortunately, there is nothing that can be done if the withdrawal address is lost. Please ensure this address is properly backed up and securely stored.

14. **What happens to my GNO if I make a full withdrawal but I forget to set the withdrawal credential to 0x01?**

    Nothing. Your validator will exit, and will no longer be assigned duties, neither able to earn nor lose any more additional GNO. You may still migrate your withdrawal credentials from 0x00 to 0x01. Once this is done, the validator’s balance will be withdrawn to the address you specify.

15. **Can I cancel a withdrawal request that is in the queue?**

    No you cannot, this is a one time, irreversible process. Once you submit your withdrawal request (BLSToExecutionChange and/or exit) you can’t go back. Please only exit or change credentials when you are fully aware of what the specific operation will do and with utmost caution.

16. **What is the deposit contract?**

    The deposit contract keeps track of validators and staking amounts. The GBC deposit contract is based on [the original Ethereum beacon chain deposit contract](https://github.com/ethereum/consensus-specs/blob/master/solidity_deposit_contract/deposit_contract.sol), with [some additional functionality](/concepts/specs/security-audit).

- Contract Security Audit by Chainsecurity: [https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/](https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/)
- GBC Contract Address: [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)

17. **How do I voluntarily exit all my validators (using lighthouse) with DappNode?**

    First of all be sure to already have a 0x01 withdrawal address or follow the step by step guide. Then go to the web3signer UI, select all keys, select the exit button, type the message ("I want to exit"), then verify on Gnosischa.in how it is going, it can take some time between the moment where you exit and the moment where it's visible on Gnosischa.in

18. **When you receive rewards from validation, where does the reward go? Does it stay in the node or go to the address you choose to receive rewards? Because on this address I don't notice any increase of GNO.**

    If you have set a withdrawal address, your rewards will accrue in the deposit contract. At the moment you will have to claim them on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F4) by calling the claimWithdrawals function and entering your withdrawal address

19. **I use Lighthouse and I wanted to know if it was possible to separate the rewards of each validator from the address provided when creating the keystore.json files? I also wanted to know if it was possible to add validators later**.

    For consensus layer rewards who are paid in GNO once updated to 0x01 it's not possible to change it. For execution layer rewards who are paid in xDAI you can change them as much as you want in the client or web3signer UI. You can add validator keys later on. Just add the key, configure the fee recipient address and you are fine.

20. **I want to stake some GNO, I wonder how long does it take when I withdraw them?**

    For solo validators, exiting then withdrawing your GNOs should take about one or two days, depending of the exit queue.

21. **Can I withdraw my GNO which is currently used in validator?**

    Yes, you have to do a [voluntary exit](https://docs.gnosischain.com/node/management/voluntary-exit) (either from the client itself or if you are on Dappnode from the Web3signer UI) then wait for your validator to leave the exit queue and once the withdrawal is ready claim on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F4) by calling the claimWithdrawals function and entering your withdrawal address

22. **What is the easiest way to set withdrawal address without setting up locally beacon node, cli and etc.?**

    Check the step by step [tutorial](https://docs.gnosischain.com/node/management/withdrawals) in the docs using ethdo ; this community made [video](https://youtu.be/By9VmNviNT0) can help too, don't hesitate to ask on Discord if you have questions/problems with the process

23. **Is it possible to change the address where I get the validator rewards?**

    For consensus layer rewards who are paid in GNO once updated to 0x01 it's not possible to change it. For execution layer rewards who are paid in xDAI you can change them as much as you want in the client or web3signer UI. More information in the [docs](https://docs.gnosischain.com/node/rewards-penalties).

24. **In the explorer gnosischa.in, what is the meaning of total withdrawal?**

    Total withdrawal means the total accrued GNO

25. **I keep missing rewards, is it because I am running my validators on a regular disk instead of an SSD?**

    You need to use a SSD to validate Gnosis, an HDD doesn't have the required performances, more information [in the docs](https://docs.gnosischain.com/node/#requirements) and a guide on which SSD to chose in this [Github](https://gist.github.com/yorickdowne/f3a3e79a573bf35767cd002cc977b038)
26. **Want to exit and re-enter with a different withdrawal address, but can't broadcast the exit message. Can anyone help me?**

    Fixes have been done in November 2023 on Dappnode for bugs related to exits so it's possible that this bug has been fixed since then. Don't hesitate to ask on the Discord if you encounter those kind of bugs.

27. **Is there any other way to exit than the signer UI?**

    You can also initiate an exit through your client, more information in the [docs](https://docs.gnosischain.com/node/management/voluntary-exit)

28. **Can I withdraw without being online?**

    It's usually very complicated to generate an exit message with an offline validator but if you want to do this, ask us for help on the Discord and we will look what can be done.

29. **How do I withdraw my earnings (xDAI) to my MM wallets for each Validator recipient address?**

    You don't need to claim execution layer rewards who are paid in xDAI, when you propose a block, the reward will go to your address. You can see you rewards on [Gnosisscan](https://gnosisscan.io/) on your validator address, in the Validated Blocks tab.
31. **Could anyone please explain to me how withdrawals and validator rewards work on Gnosis Chain?**

    Consensus layer rewards are paid in GNO to your withdrawal address and have to be claimed on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial) ; Execution layer rewards are paid in xDAI to your recipient address. 

31. **How to withdraw the staked validator amount though?**

    You can do a [voluntary exit](https://docs.gnosischain.com/node/management/voluntary-exit) either from the client itself or if you are on Dappnode from the Web3signer UI then wait for your validator to leave the exit queue and once the withdrawal is ready claim on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial).

32. Is there a guide on how to withdraw when you only have the keystore?

    If you lost your seed there is pretty much no way to get it back. But not all is lost. You still have the keystore files. Make sure you back up those somewhere. Have you set a withdrawal address when you generated the keystore files? If yes, then you are pretty fine without the seed. You only need the seed to regenerate these keys and also set a withdrawal address if you have not yet. If you have set the withdrawal address already, you do not really need the seed phrase anymore. If you have not set a withdrawal address yet, then without the seed you have no access to your deposited GNO anymore. You can still run your validators, and get the execution layer rewards (xDAI), it is not much and probably not worth it.

33. **I had partial withdrawals going to an address in August. Are the future withdrawals will go to the same address?**

    If back then when a bot was claiming them automatically, your withdrawals were going to a specific address, it means that your withdrawal address is correctly setup and new withdrawals will go there as well. Now you have to claim withdrawals manually, you can do so on the [Deposit page](https://deposit.gnosischain.com/) or on the [Deposit contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial)

34. **My wallet got hacked. Is there any way to change my withdrawal address?**

    If it's already a 0x01 withdrawal address then it can't be updated anymore. If it's till a 0x00 address then follow the usual guide in the [docs](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential).

35. **I am trying to change my withdrawal credential from 0x00 to 0x01. I can't seem to be able to connect to my Beacon Node. Is there another way to do it?**

    Be sure to use the right port used by your client. For example the default port for Lighthouse might be 5052, Avado nodes seems to use 5051, etc... If you need more help you can ask on the Discord.

36. **Is there any way other than web3-signer to exit my validators?**

    You can also initiate an exit through your client, more information in the [docs](https://docs.gnosischain.com/node/management/voluntary-exit).

37. **I want to deposit GNO on the test network. Where can I find the operation guide?**

    More information in the [docs](https://docs.gnosischain.com/concepts/networks/chiado/#how-to-participate). If you need Chiado GNO you can ask on the Discord.

38. **How long until the GNO from my withdrawal arrives in my wallet? Do you have to claim it manually?**

    You have to claim withdrawals manually, you can do so on the Deposit page or on the Deposit contract. Once claimed it should be instantaneous in the same transaction.

39. **How long does the contract to manually claim withdrawals take to complete?**

    It's instantaneous, as soon as the claim transaction is validated, the GNO will be sent to your withdrawal address
40. **Are there any news regarding an easy solution to change the recipient address in my DappNode to withdraw my mGNO?**

    Currently not, even if Dappnode mentioned working on it in the past. You have to follow the regular [step by step guide](https://docs.gnosischain.com/node/management/withdrawals).
41. **I see automatic withdrawals to my wallet on gnosischa.in, but I don't seem to be receiving them. Is there anything else that I need to do?**

    You have to claim withdrawals manually, you can do so on the [Deposit page](https://deposit.gnosischain.com/) or on the Deposit contract. Once claimed it should be instantaneous in the same transaction.

42. **Should the automatic withdrawals that started after Shapella go to the default fee recipient address or some other address?**

    After the Shapella upgrade a bot was claiming withdrawals for everyone automatically but who was since then stopped after concerns about generating a lot of unsolicited small transactions who are complex to report for tax. You have to claim withdrawals manually now, you can do so on the Deposit page or on the Deposit contract. These withdrawals will go to your withdrawal address.

43. **What happened to automatic withdrawals after Shapella? How do I claim rewards manually?**

    After the Shapella upgrade a bot was claiming withdrawals for everyone automatically but who was since then stopped after concerns about generating a lot of unsolicited small transactions who are complex to report for tax. You have to claim withdrawals manually now, you can do so on the [Deposit page](https://deposit.gnosischain.com/) or on the [Deposit contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial).

44. **Is there an easy way to transfer the ownership of my validators to a different address?**

    There's no "easy way" you would need to exit your validators, withdraw your GNO and deposit them on new validators
45. **My validator received a considerable amount of execution reward, how is it possible?**

    Recent gas spikes and higher execution rewards in blocks can be related to arbitrage bots, NFT minting, among others.
46. **Is there any way to see how much GNO is waiting for me to be claimed from the GBC Deposit contract?**
    Go on the [deposit contract](https://gnosisscan.io/address/0x0B98057eA310F4d31F2a452B414647007d1645d9#readProxyContract) and enter your withdrawal address in the field "7.withdrawableAmount"

47. **Anyone also has problems while trying to deposit?**
    Most problems with the deposit page on the user side seems to be related to the RPC you're using in your wallet, but it's also possible that there is a problem on our side, in that case don't hesitate to report and ask about it on the Discord

48. **"failed to fetch existing deposits. Please try again", anyone facing the same issue?**

    Most problems with the deposit page on the user side seems to be related to the RPC you're using in your wallet, but it's also possible that there is a problem on our side, in that case don't hesitate to report and ask about it on the Discord

49. **I've got some validators, do I need to do something to receive the rewards from these validators to my wallet?**

    Consensus layer rewards are paid in GNO to your withdrawal address and have to be claimed on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://deposit.gnosischain.com/) ; Execution layer rewards are paid in xDAI to your recipient address.

50. **What kind of penalties will I face if I am offline for 1 day?**

    Offline penalties which basically are equal to what you would have earned in a day while validating.

51. **Are rewards getting paid out in xDAI now instead of GNO?**

    You can earn two kinds of rewards : consensus layer rewards who are paid in GNO and execution layer rewards who are paid in xDAI. More information in the docs.

52. **After withdrawals went live, I got some GNO in my wallet, but now there are no more coming in**

    After the Shapella upgrade a bot was claiming withdrawals for everyone automatically but who was since then stopped after concerns about generating a lot of unsolicited small transactions who are complex to report for tax. You have to claim withdrawals manually now, you can do so on the [Deposit page](https://deposit.gnosischain.com/).
53. **My validator node is slashed, how to withdraw GNO?**
    You can do a voluntary exit either through the client like described in the docs or if you are using Dappnode you can exit through the Web3signer UI.

54. **How long until withdrawals arrive in wallet?**

    For full withdrawals you have to wait until your validator leaves the exit queue and be ready to claim. Then both for partial and full withdrawals, once claimed on the contract or on the [Deposit page](https://deposit.gnosischain.com/) it should be instantaneous.

55. **On gnosischa.in while some rewards are denominated in GNO, others are in xDai. What's the difference?**

    You can earn two kinds of rewards : consensus layer rewards who are paid in GNO and execution layer rewards who are paid in xDAI. More information in the [docs](https://docs.gnosischain.com/node/rewards-penalties).

56. **Any timeline from Stakewise for withdrawals?**

    It will happen after the Stakewise v3 update which might take longer for Gnosis Chain because of the two tokens rewards system

57. **I see a withdrawal on gnosischa.in, but I haven't initiated anything. Why?**

    The withdrawals you see on Gnosischa.in are basically just withdrawals ready to be claimed on the contract, the GNO in question have waiting on the deposit contract, you can claim a withdrawal on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial).

58. **I do not want partial withdrawals to be automatic due to tax reasons. Can I opt-out of this feature?**

    The bot who was automatically claiming withdrawals has been stopped now, withdrawals are manuals now

59. **I've been running my node for a week now. When/Where can I expect to start seeing my accrued rewards?**

    If you have set a withdrawal address, your rewards will accrue in the deposit contract. At the moment you will have to claim them manually from that contract. You can either go and call claimWithdrawals function on the GBC deposit contract or use the Withdrawal Claim tab on https://deposit.gnosischain.com/. You can check your accrued rewards on https://gnosischa.in. as well.

60. **Can I withdraw without being online?**

    It is usually pretty tricky to exit without an actively running node. If getting online is an option, we suggest you to do so. If not, you can try to create an exit message using [ethdo](https://github.com/wealdtech/ethdo/blob/master/docs/exitingvalidators.md) and by [broadcasting](https://gnosischa.in/tools/broadcast) the message using the Broadcast tool on [gnosischa.in](http://gnosischa.in/).
61. **My wallet got hacked. Is there any way to change my withdrawal address?**

    If the withdrawal address you have set is already 0x01, unfortunately, there is no way to change it as it is a one time process.

62. **How to stop validation and withdraw my coins?**

    First, make sure your withdrawal credential is set to 0x01 following the relevant tutorial on our [documentation](https://docs.gnosischain.com/node/management/withdrawals). If not, follow the ethdo tutorial to change it from 0x00 to 0x01. If it is set as 0x01, you can just use Web3Signer to exit.

63. **The withdrawal credentials must be set through the Web3Signer UI, correct? I launched a new validator yesterday and gnosisch.in says there is no withdrawal address. In W3 signer, it shows that it is set correctly. Any ideas on how to rectify?**

    If you have not specified a withdrawal address when creating your keystore files, you will need to follow the ethdo guide to set your withdrawal credential as 0x01.

64. **Has anyone successfully used the Ethereum staking/deposit CLI tool (https://launchpad.ethereum.org/en/btec/#broadcast-message) to generate a signed "BLS To Execution Change" in order to update the withdrawal address of a Gnosis validator?**

    You cannot use Ethereum Staking/Deposit CLI tool for BLS-to-Execution on Gnosis Chain as it is not supported. However, you can change your withdrawal credential by using ethdo following the [step by step tutorial](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential) on our docs.

65. **How long does it take for a withdrawal to be processed? The epoch for my exit (according to https://gnosischa.in/) was 5 hours ago, but if I hit the claimwithdrawal function from the withdrawal address, I don't get any GNO.**

    You can check the withdrawals tab on https://gnosischa.in to see an estimate of how long you need to actually be able to claim your exited GNO.

66. **Anyone know how to withdraw GNO from stakewise validator?**

    Stakewise will enable withdrawals when they go live with their V3. However, if you do not want to wait, you can go to https://curve.fi/ to swap your rGNO and sGNO (subject to some slippage).

67. **I set a withdrawal address to a Safe on Gnosis Chain, I see the partial withdrawals, but the balance in GNO don’t go up. What should I do?**

    Unlike Ethereum, on Gnosis Chain, you will have to claim them on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://deposit.gnosischain.com/) by calling the claimWithdrawals function and entering your withdrawal address

68. **Where do Withdrawals from Validators go to? After Update I received GNO once but now it says it's sending Amounts of GNO but they never arrive in my wallet.**

    After the Shapella upgrade a bot was claiming withdrawals for everyone automatically but who was since then stopped after concerns about generating a lot of unsolicited small transactions who are complex to report for tax. You have to claim withdrawals manually now, you can do so on the [Deposit page](https://deposit.gnosischain.com/) or on the [Deposit contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial)

69. Is there a guide on how to unstake my Gnosis validators?

    Do a [voluntary exit](https://docs.gnosischain.com/node/management/voluntary-exit) either from the client itself or if you are on Dappnode from the Web3signer UI then wait for your validator to leave the exit queue and once the withdrawal is ready claim on the [Deposit page](https://deposit.gnosischain.com/) or manually from the [contract](https://docs.gnosischain.com/node/management/withdrawals#how-to-receive-my-withdrawal-full-or-partial).
