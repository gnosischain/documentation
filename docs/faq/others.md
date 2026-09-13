# Gnosis Chain FAQs

## General

1. What is Gnosis chain?

   Gnosis Chain is an EVM-based Layer 1 utilizing PoS consensus. Gnosis Chain utilizes a dual token model unlike similar EVM chains. On Gnosis Chain GNO token is used to secure the consensus layer while xDai is used as the gas token.

2. Is Gnosis Chain a Testnet or Mainnet released?

   Gnosis Chain is not a testnet. It is a fully operational Layer 1 utilizing Proof of Stake. But if you are wondering, Gnosis Chain has its testnet called Chiado, the details of which can be found here: https://docs.gnosischain.com/concepts/networks/chiado.

3. I’m totally new to this project and I’m trying to feel myself around. Where should I start learning?

   You can jump to all relevant links on our landing page at https://www.gnosis.io/. Alternatively, you can check our documentation https://docs.gnosischain.com/. Also, feel free to take a look at the governance forum to see what is being discussed around the community regarding improvement proposals https://forum.gnosis.io/.

4. What is Gnosis Faucet?

   The Gnosis Chain xDAI faucet distributes xDAI to new users so that they may have enough gas to complete a few transactions and interact with applications on Gnosis Chain : https://faucet.gnosischain.com/

5. Which wallets can I use on the Gnosis Chain?

   See [Wallets](../tools/wallets/README.md).

6. How do I connect my wallet to Gnosis Chain?

   Click 'Add to Metamask' in [here](https://docs.gnosischain.com/concepts/networks/mainnet) or view other options from
   https://docs.gnosischain.com/tools/wallets/

7. How can I add Gnosis Chain to Metamask?

   You can follow the instructions on this page: https://docs.gnosischain.com/tools/wallets/metamask/

   Or alternatively, you can go to https://chainlist.org/ search for Gnosis Chain to get Gnosis Chain added automatically to your Metamask.

8. I’ve been experiencing this error withMetamask on Gnosis Chain. It doesn’t generate fees whenever I send tokens. ‘Transaction error - Internal JASON-RPC error.’

   https://metamask.zendesk.com/hc/en-us/articles/360059289871-Error-Internal-JSON-RPC-error-when-trying-to-interact-with-other-network and please update your RPC on MetaMask to https://rpc.gnosis.gateway.fm/

9. What is WXDAI for?

   As xDai on Gnosis Chain acts similar to ETH on Ethereum Network, you would need a wrapped version of xDai to be used as an ERC-20. Basically, WXDAI is the equivalent of WETH on Gnosis Chain.

10. What DApps can we use on Gnosis?

    All dApps on Gnosis Ecosystem can be found here:
    https://ecosystem.gnosischain.com/

11. What are the NFT marketplaces on Gnosis Chain?

    https://niftyfair.io/

12. Where can I stake my GNO?

    Currently, you can stake your GNO on [Stakewise.io] (https://stakewise.io/). Please note that your wallet must be directed at the Gnosis Chain network with your GNO tokens already bridged to Gnosis.

13. Where is the simplest way to stake GNO on gnosis chain?

    https://www.validategnosis.com/

14. What is sGNO?

    When you stake your GNO on Stakewise you receive sGNO.

15. What is LGNO?

    This stands for locked GNO. The LGNO contact was an incentive program for the Gnosis community to lock their GNO in return for vCOW. To learn more, please visit this thread by Stefan George -https://twitter.com/StefanDGeorge/status/1488924732191907849

16. Is it possible run a Node and qualify for future rewards?

    Yes, you can run a Node and qualify for rewards. For all the information you need in terms of running a node, please visit the [Run a node](/node/) section.

17. I was staking xdai on the easystaking xdai site and it is no longer active. How can I access my xdai?

    This has been down for some time now due to the old team that was running xdai not maintain it anymore. You will need to use the block explorer to interact with the contracts without the UI in order for it to be withdrawn.

    These are the steps that need to be taken:

    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#readProxyContract 11. lastDepositIds Type your address which gives you a number. 3. balances Find your deposits. They are numbered from 0 up to the number you got previously. Check all of them.
    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#writeProxyContract 7. makeForcedWithdrawal Withdraw. Please note this instant-withdrawal has a 2% fee

18. I recently transferred an ERC-1155 into a safe. I realized after the fact that gnosis does not support 1155s. Is there a way that I’m able to transfer it back out?

    You have to use “contract interaction” on the safe when you click on “New Transaction”
    On the pop up, you will put in the contract address of the ERC-1155 token - (It may or may not automatically pull in the ABI so you may have to copy that from the contract details via gnosis scan)

    Once, the contract address and abi is input into the prompt… there should be a drop down of which functions are available to you. You want to drop down to “safeTransferFrom”

    When you select that, you will have prompts to fill in:
    From(address) - that address that owns the token - your safe
    To(address) - what wallet do you want to send it to?
    id(uint256) - The token number of the NFT
    amount(uint256) - How many of those tokens do you want to send? - usually just 1
    data(bytes) - I just put in " 0x0 " empty data.

    Add that transaction - then sign it off and that should work
    if you are still having issues i would suggest to hop into the Safe discord and ask for further assistance there.

19. When SAFE airdrop?

    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896
    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896/54

20. Is the grants program still running?

    ‼️UPDATE: The Gnosis Ecosystem Fund was discontinued. Projects can now directly apply for funding through the GnosisDAO. For non commercial/public goods : https://bit.ly/gnosis-grants

21. What is Gnosis Metrics?

    :::note
    The site is deprecated.
    :::
    [Gnosis Metrics](https://metrics.gnosischain.com/) (formerly d14n.info) is a real-time dashboard that measures decentralization of the Gnosis Chain and Ethereum networks. It uses the Nakamoto Coefficient as the primary quantitative measure across multiple dimensions of the network.

## Bridging

1. What native bridges does Gnosis have?

   [xDAI & OmniBridge](https://docs.gnosischain.com/bridges/)

2. Where can I bridge my tokens to Gnosis Chain?

   Between Ethereum and Gnosis Chain : https://bridge.gnosischain.com/
   More chains and options : [jumper](https://jumper.exchange/), [bungee](https://www.bungee.exchange/), [hop](https://app.hop.exchange/)

3. What is the best way to bridge it to another chain?

   For larger amounts, you can use the xDAI bridge (from Gnosis Chain to Ethereum) : https://bridge.gnosischain.com/ For smaller amounts or if you want to bridge them to another chain (to a L2 or another chain), with very small gas fees using Jumper : https://jumper.exchange/

4. How much time does it take to bridge using Omni Bridge ?

   With the new zk light client verification, bridging assets takes about 20 minutes. You can check your bridge transaction on the bridge explorer : https://bridge-explorer.gnosischain.com/

5. I’m trying to bridge but Omni Bridge says that the maximum amount was already transferred?

   Some tokens have [bridge limits](https://docs.gnosischain.com/bridges/tokenbridge/omnibridge#single-transaction-limits), which can be a daily limit and or maximum or minimum per transaction, this is for example the case for GNO between Gnosis Chain and Ethereum, you can click the “Limits” button below the bridge box to check the current limits for a given token. These Daily Limits will be reset at 00:00 UTC.

6. On AMB/Omni Bridge once the daily limit has been reached, how can I get my tokens?

   Follow the manual execution tutorial https://docs.gnosischain.com/bridges/tutorials/using-amb once you have initiated the `executeSignature()` transaction, the token release transaction will be credited to your account automatically the next day.

7. Why do the tokens I just got on Gnosis Chain after bridging from Ethereum have a different contract address?

   Often tokens have a different contract address because when they are bridged into Gnosis Chain, the contract address alters, becoming a proxy token of the bridged one. This process is fundamental to how the tokens are locked on the bridge.

8. I’m having issues using Omni bridge to bridge assets held in a SAFE between Ethereum and Gnosis Chain, I get a “failure to connect” ERROR.

   Rabby wallet ( https://rabby.io/ ) wallet is good workaround allowing to load SAFE into it and inject them in similarly to Metamask.

9. I bridge my WETH from Gnosis Chain to Ethereum, but I don't see my WETH balance increases on Ethereum.

   When bridging [WETH](https://gnosis.blockscout.com/token/0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1) from Gnosis Chain, Omnibridge will automatically unwrap your WETH on Ethereum to ETH, so you will only accept ETH on Ethereum. The transaction calls [WETHOmnibridgeHelper](https://etherscan.io/address/0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a) to withdraw ETH from [WETH](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2) token contract, create a new contract to receive the ETH and eventually self destruct that contract and send the ETH to the user. Check out [this transaction](https://etherscan.io/tx/0xfed3bfb9a86b4c65039de6e64f4582e7fad8b1cac0b67f69c185c0332b3fab7e) for more details.

10. How do I know if xDAI get minted to my account when I'm using xDAI bridge for bridging DAI from Ethereum?

    Because xDAI is gas token(or native token) on Gnosis Chain, newly minted xDAI by xDAI bridge will not create a transaction. You may check your balance increment visually by looking for **coin balance history** section in blockscout: https://gnosis.blockscout.com/address/$YOUR_ADDRESS?tab=coin_balance_history or querying the balance programmatically using eth_getBalance api.

11. How do I check if my message from AMB(or Omnibridge) has been executed?

    For Omnibridge, you can visit https://bridge.gnosischain.com/bridge-explorer and enter the transaction hash or address you want to search for.
    For AMB, you can check it by messageId.
    1. Find the message Id from the transaction log: In the block explorer, check the `Logs` tab of your transaction receipt, and find `messageId` in event `UserRequestForAffirmation`(bridging from ETH) or `UserRequestForSignature`(bridging from Gnosis Chain). The data type of `messageId` is `bytes32`.
    2. On the destination chain's AMB, query the `messageCallStatus(bytes32 messageId)` by pasting the `messageId`. If it returns true, it means the message has been executed. If false, it means the message has not been executed.
       Foreign AMB (Ethereum): https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#readProxyContract#F18
       Home AMB (Gnosis Chain): https://gnosis.blockscout.com/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59
    3. To find out the transaction of the message being executed, you can find the log which emit the event `AffirmationCompleted` (bridging from ETH), or `RelayedMessage` (bridging from GC).

    Here is an example script using viem.

```mdx-code-block
<details>
<summary>Sample script</summary>
<div>
```

```
import { createPublicClient, http, parseAbiItem } from "viem";
import { gnosis, mainnet} from "viem/chains";

const main = async() => {


   const gnoClient = createPublicClient({
      chain: gnosis,
      transport: http()
   })
   const ethClient = createPublicClient({
      chain: mainnet,
      transport: http()
   })

   const homeAMB = "0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59"
   const foreignAMB = "0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e"
   
   // Choose either home or foreign

   // Foreign 
   const foreignLogs =  await ethClient.getContractEvents({ 
      address: foreignAMB,
      abi: [parseAbiItem("event RelayedMessage(address indexed sender,address indexed executor,bytes32 indexed messageId,bool status)")],
      eventName: 'RelayedMessage',
      args: {
         messageId: // replace the messageId
      },
      fromBlock: 	// replace from Block to recent block
      toBlock: 'latest'
      })

      console.log(foreignLogs[0].transactionHash)
      
      // Home 
      const homeLogs = await gnoClient.getContractEvents({ 
      address: homeAMB,
      abi: [parseAbiItem("event AffirmationCompleted(address indexed sender,address indexed executor,bytes32 indexed messageId,bool status)")],
      eventName: 'AffirmationCompleted',
      args: {
         messageId: // replace the messageId
      },
      fromBlock: // replace from Block to recent block
      toBlock: 'latest'
      })

      console.log(homeLogs[0].transactionHash)
};  

main();
```

```mdx-code-block
</div>
</details>
```
