# FAQ

## Informational

1. Where can I purchase xDai?

   https://buyxdai.com/

2. Where can I bridge my tokens to Gnosis Chain?

   Between Ethereum and Gnosis Chain : For DAI/xDAI : https://bridge.xdaichain.com/ ; For ERC20 : https://omni.xdaichain.com/
   More chains and options : https://jumper.exchange/ ; others third party bridges : https://docs.gnosischain.com/bridges/third-party

   To bridge AgEUR : https://app.angle.money/bridges-agEUR

3. What is Gnosis Faucet?

   The Gnosis Chain xDAI faucet distributes xDAI to new users so that they may have enough gas to complete a few transactions and interact with applications on Gnosis Chain : https://www.gnosisfaucet.com/

4. Where can I stake my GNO?

   Currently you can stake your GNO on [Stakewise.io] (https://stakewise.io/). Please note that your wallet must be directed at the Gnosis Chain network with your GNO tokens already bridged to Gnosis.

5. What is sGNO?

   When you stake your GNO on Stakewise you receive sGNO.

6. What is mGNO?

   To create a more accurate ETH-mirrored environment, a minimum of 32 tokens are used for staking purposes on the Gnosis Beacon Chain. The mGNO token is a metaToken similar to a wrapped token created for this purpose. During deposits, 1 GNO is automatically converted to 32 mGNO.

7. What is LGNO?

   This stands for locked GNO. The LGNO contact was an incentive program for the Gnosis community to lock their GNO in return for vCOW. To learn more, please visit this thread by Stefan George -https://twitter.com/StefanDGeorge/status/1488924732191907849

8. What is d14n.info?

   [d14n.info](https://www.d14n.info/) is a real-time dashboard that measures decentralization of the Gnosis Chain and Ethereum networks. We use the Nakamoto Coefficient as the primary quantitative measure across multiple dimensions of the network.
   You may also check out [Gnosis Metrics](https://www.gnosismetrics.com/#overview)

9. What native bridges does Gnosis have?

   [xDAI & OmniBridge](https://docs.gnosischain.com/bridges/)

10. What are the DAOs running on the Gnosis Chain?

    https://www.daosongnosis.com/

11. Which wallets can I use on the Gnosis Chain?

    https://www.gnosiswallets.com/

12. How do I connect my wallet to Gnosis Chain?

    Click 'Add to Metamask' in [here](https://docs.gnosischain.com/about/networks/mainnet) or view other options from
    https://docs.gnosischain.com/tools/wallets/

13. I was staking xdai on the easystaking xdai site and it is no longer active. How can I access my xdai?

    This has been down for some time now due to the old team that was running xdai not maintain it anymore. You will need to use the block explorer to interact with the contracts without the UI in oder for it to be withdrawn.

    These are the steps that need to be taken:

    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#readProxyContract 11. lastDepositIds Type your address which gives you a number. 3. balances Find your deposits. They are numbered from 0 up to the number you got previously. Check all of them.
    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#writeProxyContract 7. makeForcedWithdrawal Withdraw. Please note this instant-withdrawal has a 2% fee

14. I recently transferred an ERC-1155 into a safe. I realized after the fact that gnosis does not support 1155s. Is there a way that I’m able to transfer it back out?

    You have to use “contract interaction” on the safe when you click on “New Transaction”
    On the pop up, you will you put in the contract address of the ERC-1155 token - (It may or may not automatically pull in the ABI so you may have to copy that from the contract details via gnosis scan)

    Once, the contract address and abi is input into the prompt… there should be a drop down of which functions are available to you. You want to drop down to “safeTransferFrom”

    When you select that, you will have prompts to fill in:
    From(address) - that address that owns the token - your safe
    To(address) - what wallet do you want to send it to?
    id(uint256) - The token number of the NFT
    amount(uint256) - How many of those tokens do you want to send? - usually just 1
    data(bytes) - I just put in " 0x0 " empty data.

    Add that transaction - then sign it off and that should work
    if you are still having issues i would suggest to hop into the Safe discord and ask for further assistance there.

15. when SAFE airdrop?

    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896
    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896/54

16. Where is the simplest way to stake GNO on gnosis chain?

    https://www.validategnosis.com/

17. I’ve been experiencing this error withMetamask on Gnosis Chain. It doesn’t generate fees whenever I send tokens. ‘Transaction error - Internal JASON-RPC error.’

    https://metamask.zendesk.com/hc/en-us/articles/360059289871-Error-Internal-JSON-RPC-error-when-trying-to-interact-with-other-network and please update your RPC on MetaMask to https://rpc.gnosis.gateway.fm/

18. What is WXDAI for?

    As xDai on Gnosis Chain acts similar to ETH on Ethereum Network, you would need a wrapped version of xDai to be used as an ERC-20. Basically, WXDAI is the equivalent of WETH on Gnosis Chain.

19. What is Gnosis chain?

    Gnosis Chain is an EVM-based Layer 1 utilizing PoS consensus. Gnosis Chain utilizes a dual token model unlike similar EVM chains. On Gnosis Chain GNO token is used to secure the consensus layer while xDai is used as the gas token.

20. How can I add Gnosis Chain to Metamask?

    You can follow the instructions on this page: https://docs.gnosischain.com/tools/wallets/metamask/

    Or alternatively, you can go to https://chainlist.org/ search for Gnosis Chain to get Gnosis Chain added automatically to your Metamask.

21. What DApps can we use on Gnosis?
    All dApps on Gnosis Ecosystem can be found here:
    https://docs.gnosischain.com/ecosystems/

22. Is it possible run a Node and qualify for future rewards ?

    Yes, you can run a Node and qualify for rewards. For all the information you need in terms of runnnig a node, please visit https://docs.gnosischain.com/node/.

23. I’m totally new to this project and I’m trying to feel myself around. Where should I start learning?

    You can jump to all relevant links on our landing page at https://www.gnosis.io/. Alternatively, you can check our documentation https://docs.gnosischain.com/. Also, feel free to take a look at the governance forum to see what is being discussed around the community regarding improvement proposals https://forum.gnosis.io/.

24. Is Gnosis Chain a Testnet or Mainnet released?

    Gnosis Chain is not a testnet. It is a fully operational Layer 1 utilizing Proof of Stake. But if you are wondering, Gnosis Chain has its testnet called Chiado, the details of which can be found here: https://docs.gnosischain.com/about/networks/chiado.

25. Is the grants program still running?

    ‼️UPDATE: The Gnosis Ecosystem Fund was discontinued. Projects can now directly apply for funding through the GnosisDAO. For non commercial/public goods : https://bit.ly/gnosis-grants

26. What are the NFT marketplaces on Gnosis Chain?

    https://niftyfair.io/

## Validators

1. Where can I track my validator performance?

   [GnosisPools](https://www.gnosis.builders/post/gnosispools-guide), [Node monitoring guide](../../node/management/monitoring-node.md)

2. How to run a node on Gnosis Chain?

   https://docs.gnosischain.com/node/

3. What is reward & penalties?

   https://docs.gnosischain.com/node/rewards-penalties

4. Where can I find hardware requirements to run a node?

   Hardware requirements differ by client but generally are not that high. To get a better idea, you can check each specific client’s hardware requirements here: https://docs.gnosischain.com/node/#hardware

5. How did the merge impact my GBC node?

   The Ethereum Mainnet merged with the beacon chain proof-of-stake system. This marked the end of proof-of-work for Ethereum, and the full transition to proof-of-stake. The Gnosis Beacon Chain (GBC) serves in a frontrunning capacity to important Ethereum consensus-layer updates.

6. My nethermind xdai is lagging, it never seems to catch up to 100%. It fluctuates between 97-99.5% synced. I’m using nethermind xdai execution client, lighthouse gnosis consensus client and the web3 gnosis signer.

   1. update all packages to the latest version (core, EL, CL, web3signer, etc)
   2. turn on EL + CL and check if both are on sync before turning on the validator (see that lighthouse has 2 processes, 1 beacon and 1 validator)
   3. (a) if both are on sync, turn on the validator and check 10 minutes later the beacon explorer
      (b) if you don’t get both to the head, let me know here and we can troubleshoot together.

7. My validator is constantly missing attestations. Several of my validators are said to be inactive and getting penalized on beacon.gnosischain.com, although logs show errors that I don’t understand. And half of them are active and well (all running on the same physical machine).

   Solution from discord user @pyk:
   https://discord.com/channels/502416149343109121/920642136272166972/1055445460023783525

   This happen on my end due to one beacon node cannot handle all validators request (hence some validators miss their attestations while others dont) and sometimes beacon node lose all its peers.

   My solution is to run a few beacon nodes (lodestar) connected to one execution node (nethermind), so I have backup when one beacon node disconnected from their peers.

   For example here is how to connect multiple beacon nodes in one validator (lodestar):

   ```
       validator
           --network=gnosis
           --dataDir=/data
           --logFileLevel=info
           --beaconNodes=http://gnosis-beacon-1:4000,http://gnosis-beacon-2:4000,http://gnosis-beacon-3:4000,http://gnosis-beacon-4:4000,http://gnosis-beacon-5:4000

   ```

8. I added 3 validators and skipped the [“Step 3: Upload Keystores to Web3Signer”](https://docs.gnosischain.com/node/tools/dappnode/#step-3-upload-keystores-to-web3signer) in dappNode and got error: Status: error ❌ Message: Error importing keystore: Unable to add validator. Check that the keystore file format is valid and the password is correct.” . I went directly to “Step 4: Fund Your Validators”. Now I see they are active but missing attestations. The password is correct and the keystore files are the same I used in step 4.

   1. Double-check that you’re uploading your keystores to web3signer Gnosis
   2. Try restarting both Web3Signer Gnosis and your Consensus Client
   3. If this is the first time you’re uploading your keystores, make sure you uncheck the import slashing data option
   4. Triple-check your password is right and was inputed as you intended

9. Which clients are supported by GBC?

   Lighthouse, Prysm, Nimbus, and Teku clients. [Read more here](../../node/architecture.md#consensus-layer).

10. How long does it take to sync the node?

Along with running the GBC client you can also consider running a Gnosis Node to connect with (_optional - recommended for experienced node runners only_).

Syncing [Gnosis using Nethermind](/node/manual) requires \~200GB (and growing) of data to download. You may encounter some errors during syncing. Depending on your setup, you can expect it to take anywhere from a few hours to several days.

11. Can I use a node provider to run a Gnosis node?

Check the [RPC Providers](../../tools/rpc/README.mdx) page for the complete list.

12. Can I use DappNode?

Yes! [DappNode](https://dappnode.io) is a partner and full-featured service provider for the Gnosis Beacon Chain. If you would like to use their services for validation, please see the [guide and instructions here.](https://forum.dappnode.io/t/how-to-setup-a-gnosis-beacon-chain-gbc-validator-on-dappnode/1351)

13. Help! I've lost my validator keys

You are responsible for your keys (deriving and storing your keys and mnemonic securely). If you lose them or your keys are compromised, there is no recourse to recover your funds.

14. What is a validator?

Validators propose and vote on blocks to include in the chain. The chain is secured by a staked amount of GNO. Validators stake GNO and receive additional GNO as rewards for correct behavior (proposing and attesting blocks) and a slashed balance as penalties for incorrect behavior (offline node, attesting invalid blocks).

15. What is the deposit contract?

The deposit contract keeps track of validators and staking amounts. The GBC deposit contract is based on [the original Ethereum beacon chain deposit contract](https://github.com/ethereum/consensus-specs/blob/master/solidity_deposit_contract/deposit_contract.sol), with [some additional functionality](/specs/security-audit).

- Contract Security Audit by Chainsecurity: [https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/](https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/)
- GBC Contract Address: [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)

16. How much do validators earn in rewards?

This varies based on how many validators are participating. As the number of validators increases, the reward for validation is reduced as security becomes increasingly decentralized. Additional info is available on the [incentives page](../../node/rewards-penalties.md).

You can view the current reward yield and other statistics on the [Gnosis Beacon Chain Dune Analytics dashboard](<https://dune.xyz/maxaleks/Gnosis-Beacon-Chain-(Deposits)>).

17. How many validator processes can run per node?

It is possible to run multiple validator processes on a single node with GBC. A 4CPU/8GB node handled 256 validators during testing processes, although for higher decentralization it is recommended to run multiple nodes for this number of validators. The safe recommendation for multiple validators per node is 128.

18. How long does fast sync take with Nethermind?

It depends on the mode and hardware specifications. Typically 24 hours should be allowed.

- For more information on syncing with Nethermind see [https://github.com/NethermindEth/docs/blob/master/ethereum-client/sync-modes.md](https://github.com/NethermindEth/docs/blob/master/ethereum-client/sync-modes.md)
- To learn more about reading logs during syncing see [https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started#explaining-nethermind-logs](https://docs.nethermind.io/nethermind/first-steps-with-nethermind/getting-started#explaining-nethermind-logs)

## Shapella & Validator withdrawal FAQs

1. What is Shapella?

   Shapella refers to the combination of both Shanghai and Capella. Shanghai enables GNO staking withdrawals for Gnosis Chain, unlike the previous model that doesn’t allow for staked GNO to be withdrawn. Shanghai is the name given to the execution layer (EL) upgrade, while Capella is the name of the coinciding consensus layer (CL) upgrade.

2. What are withdrawals?

   Validator withdrawal allows a validator’s account balance get withdrawn from Beacon Chain to Execution Layer, in the form of GNO. The GNO will be accrued on validator’s withdrawal address on the Execution Layer, which is set using `eth1_withdrawal_address` option during validator key generation.

3. What are two types of withdrawals?

   There are 2 types of withdrawals: Partial Withdrawal and Full Withdrawal.
   Partial Withdrawal: Any balance in excess of 1 GNO from the account balance get withdrawn back to withdrawal address.
   Full Withdrawal: All the balance from validator’s account get withdrawn back to withdrawal address. This has to be initiated by validator, signing `voluntary_exit` message and broadcasting it to the network. It is irreversible.

4. What are 0x00 and 0x01 withdrawal credentials prefixes?

   The beacon chain validators have a field called withdrawal credentials, where the first byte is referred to as the withdrawal prefix. Currently, this value can be either 0x00 or 0x01, depending on how it is set during the deposit process using a deposit tool. Validators with 0x00 withdrawal credentials won’t have immediate withdrawal capabilities. To enable partial and full withdrawals and unlock their funds, these validators must undergo a one-time migration to 0x01. As this is a one time process, it is essential to be careful performing it.

5. How do I change my withdrawal credential?

   You can find a full tutorial on how to change your withdrawal credential [here](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential).

6. I have been running multiple validators. Can I set up the same withdrawal credential for all of them?

   Yes, you can set up the same withdrawal credential for all of your validators and can also set up different withdrawal credentials for individual validators.

7. Where can I check my withdrawal credential?

   https://docs.gnosischain.com/node/management/withdrawals#check-withdrawal-credential

8. Do partial withdrawals happen automatically?

As we have modified some specs regarding the withdrawals to enable withdrawing GNO instead of the native gas token xDai, unlike Ethereum, partial withdrawals currently do not happen automatically. So, for now, you will need to call [`claimWithdrawal`](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3) function on the [contract](https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract). However, it is in our plans to automate and subsidize partial withdrawals in the future.

9. Do full withdrawals happen automatically?

   No. If your validator is currently active and participating in the beacon chain, then the full withdrawal will not happen automatically. You will have to manually initiate an exit to cause this.

   Additionally, if you initiate an exit but still have a 0x00 withdrawal credential, your funds will not be withdrawn until a `BLSToExecutionChange` message is included on chain.

10. Is there a UI that I can use for withdrawals?

    No, as you will have to interact with the beacon chain, it is not feasible to provide a UI that encompasses all the clients.

11. Where does the automatic balance withdraw to?

    In case you are using a legacy withdrawal credential 0x00, it will not be withdrawn and you will have to perform a migration to 0x01 credentials to complete the withdrawal. If you have already configured your withdrawal address and have a withdrawal credential of 0x01, then rewards in excess of 1 GNO (32 mGNO) will be transferred to your withdrawal address.

12. Once I have changed my credential to 0x01, can I change it to an alternative withdrawal address?

    No, the migration from 0x00 to 0x01 is a one time process and once you set the address, it cannot be changed. Please make this migration with the utmost care. Note, the withdrawal credential can either be an externally-owned account (EOA) or a smart contract such as a SAFE.

13. I have lost the private key to my withdrawal address, what can I do?

    Unfortunately, there is nothing that can be done if the withdrawal address is lost. Please ensure this address is properly backed up and securely stored.

14. What happens to my GNO if I make a full withdrawal but I forgot to set the withdrawal credential to 0x01?

    Nothing. Your validator will exit, and will no longer be assigned duties, neither able to earn nor lose any more additional GNO. You may still migrate your withdrawal credentials from 0x00 to 0x01. Once this is done, the validator’s balance will be withdrawn into the address you specify.

15. Can I cancel a withdrawal request that is in the queue?

    No you cannot, this is a one time, irreversible process. Once you submit your withdrawal request (BLSToExecutionChange and/or exit) you can’t go back. Please only exit or change credentials when you are fully aware of what the specific operation will do and with utmost caution.

16. Where can I find the client updates for Shapella?

    You can find all client updates in this [blog post](https://www.gnosis.io/blog/shapella-client-updates) or [validator withdrawal section](https://docs.gnosischain.com/node/management/withdrawals). Make sure you update your clients before the upgrade.

## Bridges

1. Can I bridge tokens between Gnosis Chain and BSC using Omni Bridge

   The BSC - Gnosis Chain bridge has been depreciated you can instead use a third party bridge like Jumper for example.

2. What is the best way to bridge it to another chain?

   For larger amounts, you can use the xDAI bridge (from Gnosis Chain to Ethereum) : https://bridge.gnosischain.com/ For smaller amounts or if you want to bridge them to another chain (to a L2 or another chain), with very small gas fees using Jumper : https://jumper.exchange/

3. On AMB/Omni Bridge once the daily limit has been reached, how can I get my tokens?

   Follow the manual execution tutorial https://docs.gnosischain.com/bridges/tutorials/using-amb once you have initiated the `executeSignature()` transaction, the token release transaction will be credited to your account automatically the next day.

4. I’m trying to bridge but Omni Bridge says that the maximum amount was already transferred?

   Some tokens have [bridge limits](https://docs.gnosischain.com/bridges/tokenbridge/omnibridge#single-transaction-limits), which can be a daily limit and or maximum or minimum per transaction, this is for example the case for GNO between Gnosis Chain and Ethereum, you can click the “Limits” button below the bridge box to check the current limits for a given token. These Daily Limits will be reset at 00:00 UTC.

5. How much time does it take to bridge using Omni Bridge ?

   With the new zk light client verification, bridging assets takes about 20 minutes. You can check your bridge transaction on the bridge explorer : https://bridge-explorer.gnosischain.com/

6. Why do the tokens I just got on Gnosis Chain after bridging from Ethereum have a different contract address?

   Often tokens have a different contract address because when they are bridged into Gnosis Chain, the contract address alters, becoming a proxy token of the bridged one. This process is fundamental to how the tokens are locked on the bridge.

7. I bridged some agEUR tokens using the Angle Bridge, now I have lz-agEUR in my wallet, what can I do?

   The Angle Bridge has daily and hourly limits (they are visible on the bridge page). If the limits are reached when processing a bridge transaction, you won’t receive agEUR in your wallet on the destination chain but instead, you will receive lz-agEUR tokens in your wallet that can be used to redeem agEUR later, when the limits reset, you would then need to make a manual claim following this tutorial : https://docs.angle.money/overview/guides/bridge#how-to-get-back-ageur-from-lz-ageur

8. I’m trying to bridge agEUR from Gnosis Chain to another chain using the Angle Bridge but I’m getting an error “internal JSON-RPC error”

   Be sure to have enough xDAI for gas and fees, to use the Angle Bridge you should have at least 1,5 xDAI on your wallet. More information in Angle Protocol docs : https://docs.angle.money/overview/guides/bridge

9. I’m having issues using Omni bridge to bridge assets held in a SAFE between Ethereum and Gnosis Chain, I get a “failure to connect” ERROR.

   Rabby wallet ( https://rabby.io/ ) wallet is good workaround allowing to load SAFE into it and inject them in similarly to Metamask.

## Outdated

1. What is the hard fork and do I need to do anything?

   Hard forks (HF) are used to introduce new functionality or fix security related issues. The community has voiced their support for a HF to upgrade the Permittable Token contract functionality for bridged tokens. This update is designed to prevent future reentrancy attacks such as the ones suffered by Agave and Hundred Finance and their users on 15 March, 2022.

   For additional context, details and discussion see GIP-31: Should Gnosis Chain perform a Hardfork to upgrade the token contract vulnerable to the reentrancy attack?

   Gnosis Chain had a HF at Block number: 21,735,000 Date: 20 April 2022 at ~ 6:30am UTC. If you are a user of the Gnosis Chain, you don’t need to do anything and day-to-day functionality should not be impacted. However, if you are running a node with either OpenEthereum or Nethermind, you will need to upgrade to the new version.

   https://docs.gnosischain.com/specs/hard-forks/21735000

### mGNO

:::danger mGNO has been deprecated
After Shanghai/Capella hardfork, mGNO has been deprecated. Validator can deposit 1 GNO directly instead of unwrapping 1 GNO to 32 mGNO.
The FAQs below is legacy information, and will be removed in the future.
:::

1.  What is mGNO?

mGNO is a metatoken for GNO, similar to a wrapped token like WETH. However, where WETH is wrapped 1:1 with ETH, mGNO is wrapped 32:1 with GNO. **There are 32 mGNO to each GNO.**

mGNO is the staking token used by validators in the Gnosis Beacon Chain.
(Currently, you need to deposit 1 GNO to activate a validator.)

2. How do I get mGNO?

   mGNO is typically wrapped behind the scenes during a deposit. If you need extra mGNO to top off a balance for example, you can access [https://mgno.validategnosis.com/](https://mgno.validategnosis.com/).

   ![](/img/node/swap-12.png)

   You must have GNO on the Gnosis (**not on the Ethereum mainnet**) to convert to mGNO. You can move GNO from Ethereum to Gnosis using the [OmniBridge](https://omni.gnosischain.com/bridge).

3. Can I swap mGNO back to GNO

   Although, it is not a "swap" per se, it is possible to unwrap mGNO back to GNO. To do this, you should go to this [contract](https://gnosisscan.io/address/0x722fc4DAABFEaff81b97894fC623f91814a1BF68#readProxyContract) and query your balance `balanceOf` with your address. As a result, it will give you your balance in wei. Take note of this number.
   Afterward, go to this [contract](https://gnosisscan.io/address/0x0b91D1e3312aEEf7e9E641606Ad0aA19AA05673D#writeContract) and call the `unwrap` function by filling the `_token` section with **0x722fc4DAABFEaff81b97894fC623f91814a1BF68** and `amount` section with the number you have received as a result of the previous query. Once you call the function, you will receive GNO in return for your mGNO.
