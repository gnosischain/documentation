# Gnosis Chain FAQs

1. Where can I bridge my tokens to Gnosis Chain?

   Between Ethereum and Gnosis Chain : https://bridge.gnosischain.com/
   More chains and options : [jumper](https://jumper.exchange/), [bungee](https://www.bungee.exchange/), [hop](https://app.hop.exchange/)
   For specific tokens like AgEUR and EURe, please use [the token's authorised bridge](bridges.md#bridges-faqs) instead of Omnibridge.


2. What is Gnosis Faucet?

   The Gnosis Chain xDAI faucet distributes xDAI to new users so that they may have enough gas to complete a few transactions and interact with applications on Gnosis Chain : https://www.gnosisfaucet.com/

3. Where can I stake my GNO?

   Currently, you can stake your GNO on [Stakewise.io] (https://stakewise.io/). Please note that your wallet must be directed at the Gnosis Chain network with your GNO tokens already bridged to Gnosis.

4. What is sGNO?

   When you stake your GNO on Stakewise you receive sGNO.

https://docs.gnosischain.com/faq/others

6. What is LGNO?

   This stands for locked GNO. The LGNO contact was an incentive program for the Gnosis community to lock their GNO in return for vCOW. To learn more, please visit this thread by Stefan George -https://twitter.com/StefanDGeorge/status/1488924732191907849

7. What is d14n.info?

   :::note
   The site is deprecated.
   :::
   [d14n.info](https://www.d14n.info/) is a real-time dashboard that measures decentralization of the Gnosis Chain and Ethereum networks. We use the Nakamoto Coefficient as the primary quantitative measure across multiple dimensions of the network.
   You may also check out [Gnosis Metrics](https://www.gnosismetrics.com/#overview)

8. What native bridges does Gnosis have?

   [xDAI & OmniBridge](https://docs.gnosischain.com/bridges/)

9. What are the DAOs running on the Gnosis Chain?

    https://www.daosongnosis.com/

10. Which wallets can I use on the Gnosis Chain?

    https://www.gnosiswallets.com/

11. How do I connect my wallet to Gnosis Chain?

    Click 'Add to Metamask' in [here](https://docs.gnosischain.com/concepts/networks/mainnet) or view other options from
    https://docs.gnosischain.com/tools/wallets/

12. I was staking xdai on the easystaking xdai site and it is no longer active. How can I access my xdai?

    This has been down for some time now due to the old team that was running xdai not maintain it anymore. You will need to use the block explorer to interact with the contracts without the UI in oder for it to be withdrawn.

    These are the steps that need to be taken:

    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#readProxyContract 11. lastDepositIds Type your address which gives you a number. 3. balances Find your deposits. They are numbered from 0 up to the number you got previously. Check all of them.
    https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#writeProxyContract 7. makeForcedWithdrawal Withdraw. Please note this instant-withdrawal has a 2% fee

13. I recently transferred an ERC-1155 into a safe. I realized after the fact that gnosis does not support 1155s. Is there a way that I’m able to transfer it back out?

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

14. When SAFE airdrop?

    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896
    https://forum.gnosis.io/t/gip-64-should-gnosisdao-distribute-safe-tokens-to-incentivize-decentralizing-gnosis-chain/5896/54

15. Where is the simplest way to stake GNO on gnosis chain?

    https://www.validategnosis.com/

16. I’ve been experiencing this error withMetamask on Gnosis Chain. It doesn’t generate fees whenever I send tokens. ‘Transaction error - Internal JASON-RPC error.’

    https://metamask.zendesk.com/hc/en-us/articles/360059289871-Error-Internal-JSON-RPC-error-when-trying-to-interact-with-other-network and please update your RPC on MetaMask to https://rpc.gnosis.gateway.fm/

17. What is WXDAI for?

    As xDai on Gnosis Chain acts similar to ETH on Ethereum Network, you would need a wrapped version of xDai to be used as an ERC-20. Basically, WXDAI is the equivalent of WETH on Gnosis Chain.

18. What is Gnosis chain?

    Gnosis Chain is an EVM-based Layer 1 utilizing PoS consensus. Gnosis Chain utilizes a dual token model unlike similar EVM chains. On Gnosis Chain GNO token is used to secure the consensus layer while xDai is used as the gas token.

19. How can I add Gnosis Chain to Metamask?

    You can follow the instructions on this page: https://docs.gnosischain.com/tools/wallets/metamask/

    Or alternatively, you can go to https://chainlist.org/ search for Gnosis Chain to get Gnosis Chain added automatically to your Metamask.

20. What DApps can we use on Gnosis?
    All dApps on Gnosis Ecosystem can be found here:
    https://ecosystem.gnosischain.com/

21. Is it possible run a Node and qualify for future rewards?

    Yes, you can run a Node and qualify for rewards. For all the information you need in terms of running a node, please visit https://docs.gnosischain.com/node/.

22. I’m totally new to this project and I’m trying to feel myself around. Where should I start learning?

    You can jump to all relevant links on our landing page at https://www.gnosis.io/. Alternatively, you can check our documentation https://docs.gnosischain.com/. Also, feel free to take a look at the governance forum to see what is being discussed around the community regarding improvement proposals https://forum.gnosis.io/.

23. Is Gnosis Chain a Testnet or Mainnet released?

    Gnosis Chain is not a testnet. It is a fully operational Layer 1 utilizing Proof of Stake. But if you are wondering, Gnosis Chain has its testnet called Chiado, the details of which can be found here: https://docs.gnosischain.com/concepts/networks/chiado.

24. Is the grants program still running?

    ‼️UPDATE: The Gnosis Ecosystem Fund was discontinued. Projects can now directly apply for funding through the GnosisDAO. For non commercial/public goods : https://bit.ly/gnosis-grants

25. What are the NFT marketplaces on Gnosis Chain?

    https://niftyfair.io/
