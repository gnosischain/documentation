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
   4. Triple-check your password is right and was inputted as you intended

9. Which clients are supported by GBC?

   Lighthouse, Lodestar, Nimbus, and Teku clients. [Read more here](../node/architecture.md#consensus-layer).

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
   Partial Withdrawal: Any eligible balance in excess of 1 GNO is processed for withdrawal.
   Full Withdrawal: The validator exits and its full balance becomes withdrawable to the configured execution withdrawal address. This has to be initiated by the validator by signing a `voluntary_exit` message and broadcasting it to the network. It is irreversible.

4. What are 0x00, 0x01, and 0x02 withdrawal credentials prefixes?

   The beacon chain validators have a field called withdrawal credentials, where the first byte is referred to as the withdrawal prefix.

   `0x02` is the recommended execution-address prefix on Gnosis Chain. It supports the current withdrawal flow and is what new validators should use.

   `0x01` is a legacy execution-address prefix. It still works, but follows the older auto-sweep behavior and is no longer the recommended option for new validators.

   `0x00` is the old BLS-only prefix and does not support withdrawals until you perform a one-time BLS-to-execution credential change.

5. How do I change my withdrawal credential?

   You can find the current step-by-step guide here: [Validator Withdrawals](../node/management/withdrawals.md).

6. I have been running multiple validators. Can I set up the same withdrawal credential for all of them?

   Yes, you can set up the same withdrawal credential for all of your validators and can also set up different withdrawal credentials for individual validators.

7. Where can I check my withdrawal credential?

   Check the Withdrawal tab for your validator on the [Beacon chain explorer](https://beaconchain.gnosischain.com/), or inspect the `withdrawal_credentials` field in your saved `deposit-data*.json` file. See [Validator Withdrawals](../node/management/withdrawals.md) for the current walkthrough.

8. Do partial withdrawals happen automatically?

   The withdrawal processing itself is automatic once your validator is eligible. What is not automatic today is claiming the resulting GNO to the recipient address. After the withdrawal has been processed, you must claim it either on the [Deposit website](https://deposit.gnosischain.com/) or by calling [`claimWithdrawal`](https://gnosisscan.io/address/0x0B98057eA310F4d31F2a452B414647007d1645d9#writeProxyContract) or `claimWithdrawals(...)` on the deposit contract.

9. Do full withdrawals happen automatically?

   No. If your validator is currently active and participating in the beacon chain, the full withdrawal will not happen unless you first manually initiate a voluntary exit.

   Additionally, if you initiate an exit while still using `0x00` withdrawal credentials, your funds will remain locked until a `BLSToExecutionChange` is included on chain.

10. Is there a UI that I can use for withdrawals?

    Yes. You can claim withdrawals on the [Deposit website](https://deposit.gnosischain.com/). Advanced users can also claim directly through the deposit contract on Gnosis Chain.

11. Where does the automatic balance withdraw to?

    Withdrawals are associated with the validator's configured execution withdrawal address, also referred to as the recipient address in the current docs. If you are still on `0x00`, withdrawals cannot complete until you convert to an execution-address credential.

12. Once I have changed my credential to an execution address, can I change it to an alternative withdrawal address?

    No. The BLS-to-execution change is a one-time operation. Once you set the execution withdrawal address, it cannot be changed later. Please perform this step carefully. The withdrawal address can be either an externally owned account (EOA) or a smart contract wallet such as a Safe.

13. I have lost the private key to my withdrawal address, what can I do?

    Unfortunately, there is nothing that can be done if the withdrawal address is lost. Please ensure this address is properly backed up and securely stored.

14. What happens to my GNO if I make a full withdrawal but I forget to set the withdrawal credential to an execution address?

    Your validator will exit and stop performing duties, but the funds will not be withdrawable until you complete the BLS-to-execution credential change. Once you do that, the validator balance can be withdrawn and claimed to the configured recipient address.

15. Can I cancel a withdrawal request that is in the queue?

    No. These are one-way operations. Once you submit a `BLSToExecutionChange` and/or a voluntary exit, you cannot reverse it. Make sure you understand the effect of each action before proceeding.

16. Where can I find the client updates for Shapella?

    Refer to the current [Validator Withdrawals](../node/management/withdrawals.md) guide and each client's official release notes. The original Shapella client-update post is useful historical context, but the withdrawals guide should be treated as the current operator-facing source of truth.
