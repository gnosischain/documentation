# Validators FAQ

1. Where can I track my validator performance?

   [GnosisPools](https://www.gnosis.builders/post/gnosispools-guide), [Node monitoring guide](../node/management/monitoring-node.md)

2. How to run a node on Gnosis Chain?

   https://docs.gnosischain.com/node/

3. What is reward & penalties?

   https://docs.gnosischain.com/node/rewards-penalties

4. Where can I find hardware requirements to run a node?

   Hardware requirements differ by client but generally are not that high. To get a better idea, you can check each specific client’s hardware requirements here: https://docs.gnosischain.com/node/#hardware

5. How did the merge impact my GBC node?

   The Ethereum Mainnet merged with the beacon chain proof-of-stake system. This marked the end of proof-of-work for Ethereum, and the full transition to proof-of-stake. The Gnosis Beacon Chain (GBC) serves in a frontrunning capacity for important Ethereum consensus-layer updates.

6. My nethermind xdai is lagging, it never seems to catch up to 100%. It fluctuates between 97-99.5% synced. I’m using nethermind xdai execution client, lighthouse gnosis consensus client and the web3 gnosis signer.

   1. update all packages to the latest version (core, EL, CL, web3signer, etc)
   2. turn on EL + CL and check if both are on sync before turning on the validator (see that lighthouse has 2 processes, 1 beacon and 1 validator)
   3. (a) if both are on sync, turn on the validator and check 10 minutes later the beacon explorer
      (b) if you don’t get both to the head, let me know here and we can troubleshoot together.

7. My validator is constantly missing attestations. Several of my validators are said to be inactive and getting penalized on beacon.gnosischain.com, although logs show errors that I don’t understand. And half of them are active and well (all running on the same physical machine).

   Solution from discord user @pyk:
   https://discord.com/channels/502416149343109121/920642136272166972/1055445460023783525

   This happens on my end due to one beacon node cannot handle all validators request (hence some validators miss their attestations while others dont) and sometimes beacon node lose all its peers.

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

   Lighthouse, Prysm, Nimbus, and Teku clients. [Read more here](../node/architecture.md#consensus-layer).

10. How long does it take to sync the node?

Along with running the GBC client you can also consider running a Gnosis Node to connect with (_optional - recommended for experienced node runners only_).

Syncing [Gnosis using Nethermind](/node/manual) requires \~200GB (and growing) of data to download. You may encounter some errors during syncing. Depending on your setup, you can expect it to take anywhere from a few hours to several days.

11. Can I use a node provider to run a Gnosis node?

Check the [RPC Providers](../tools/RPC%20Providers/README.md) page for the complete list.

12. Can I use DappNode?

Yes! [DappNode](https://dappnode.io) is a partner and full-featured service provider for the Gnosis Beacon Chain. If you would like to use their services for validation, please see the [guide and instructions here.](https://forum.dappnode.io/t/how-to-setup-a-gnosis-beacon-chain-gbc-validator-on-dappnode/1351)

13. Help! I've lost my validator keys

You are responsible for your keys (deriving and storing your keys and mnemonic securely). If you lose them or your keys are compromised, there is no recourse to recover your funds.

14. What is a validator?

Validators propose and vote on blocks to include in the chain. The chain is secured by a staked amount of GNO. Validators stake GNO and receive additional GNO as rewards for correct behavior (proposing and attesting blocks) and a slashed balance as penalties for incorrect behavior (offline node, attesting invalid blocks).

15. What is the deposit contract?

The deposit contract keeps track of validators and staking amounts. The GBC deposit contract is based on [the original Ethereum beacon chain deposit contract](https://github.com/ethereum/consensus-specs/blob/master/solidity_deposit_contract/deposit_contract.sol), with [some additional functionality](/concepts/specs/security-audit).

- Contract Security Audit by Chainsecurity: [https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/](https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/)
- GBC Contract Address: [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)

16. How much do validators earn in rewards?

This varies based on how many validators are participating. As the number of validators increases, the reward for validation is reduced as security becomes increasingly decentralized. Additional info is available on the [incentives page](../node/rewards-penalties.md).

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

   Validator withdrawal allows a validator’s account balance to get withdrawn from Beacon Chain to Execution Layer, in the form of GNO. The GNO will be accrued on validator’s withdrawal address on the Execution Layer, which is set using `eth1_withdrawal_address` option during validator key generation.

3. What are two types of withdrawals?

   There are 2 types of withdrawals: Partial Withdrawal and Full Withdrawal.
   Partial Withdrawal: Any balance in excess of 1 GNO from the account balance gets withdrawn back to withdrawal address.
   Full Withdrawal: All the balance from validator’s account gets withdrawn back to withdrawal address. This has to be initiated by validator, signing `voluntary_exit` message and broadcasting it to the network. It is irreversible.

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

    In case you are using a legacy withdrawal credential 0x00, it will not be withdrawn and you will have to perform a migration to 0x01 credentials to complete the withdrawal. If you have already configured your withdrawal address and have a withdrawal credential of 0x01, then rewards in excess of 1 GNO will be transferred to your withdrawal address.

12. Once I have changed my credential to 0x01, can I change it to an alternative withdrawal address?

    No, the migration from 0x00 to 0x01 is a one time process and once you set the address, it cannot be changed. Please make this migration with the utmost care. Note, the withdrawal credential can either be an externally-owned account (EOA) or a smart contract such as a SAFE.

13. I have lost the private key to my withdrawal address, what can I do?

    Unfortunately, there is nothing that can be done if the withdrawal address is lost. Please ensure this address is properly backed up and securely stored.

14. What happens to my GNO if I make a full withdrawal but I forget to set the withdrawal credential to 0x01?

    Nothing. Your validator will exit, and will no longer be assigned duties, neither able to earn nor lose any more additional GNO. You may still migrate your withdrawal credentials from 0x00 to 0x01. Once this is done, the validator’s balance will be withdrawn to the address you specify.

15. Can I cancel a withdrawal request that is in the queue?

    No you cannot, this is a one time, irreversible process. Once you submit your withdrawal request (BLSToExecutionChange and/or exit) you can’t go back. Please only exit or change credentials when you are fully aware of what the specific operation will do and with utmost caution.

16. Where can I find the client updates for Shapella?

    You can find all client updates in this [blog post](https://www.gnosis.io/blog/shapella-client-updates) or [validator withdrawal section](https://docs.gnosischain.com/node/management/withdrawals). Make sure you update your clients before the upgrade.
