---
title: Using the Omnibridge
---

## Basics
:::info
The OmniBridge and the OmniBridge UI are experimental software in Beta which you use at your own risk. The [OmniBridge UI](https://omni.gnosischain.com/bridge) can be accessed here: https://omni.gnosischain.com/bridge
:::
The Omnibridge can be used to bridge ERC-20 tokens between Ethereum and Gnosis, Binance Smart Chain and Gnosis, and the POA Network and Gnosis. The first time a token is bridged, a new ERC677 token contract is deployed on GC with an additional suffix to differentiate the token. It will say "token name on xDai", as this was the original chain name prior to re-branding. If a token has been bridged previously, the previously deployed contract is used. The requested token amount is minted and sent to the account initiating the transfer (or an [alternate receiver](#alternate-receiver) account specified by the sender).
- [Tokenbridge Docs: Using the Omnibridge UI](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/ui-to-transfer-tokens)


### Transfer any ERC-20 token from Ethereum to Gnosis
It is possible to use the OmniBridge UI to transfer any ERC20 from Ethereum to xDai. Any user can initiate this initial transfer. Once the token exists on Gnosis, it can be transferred back and forth using the same UI.  
#### Token Transfer
In this example, we transfer the Basic Attention Token (BAT) from Ethereum to xDai. When this process was started, this token does not yet exist on Gnosis. It takes less than 5 minutes and some ETH for gas fees.
1. Go the the [OmniBridge UI](https://omni.gnosischain.com/bridge)

 * Connect your wallet to the Ethereum Mainnet
 * Select the token you want to transfer (here we select BAT) and enter the amount
 * Click Unlock and approve the account interaction.

:::note
These screenshots were taken back when Basic Attention Token (BAT) was first bridged. The steps are the same, but note that the url is old and is now https://omni.gnosischain.com/bridge
:::
![](/img/bridges/omni-tokentransfer1.jpg)
2. Confirm the transaction to approve
![](/img/bridges/omni-tokentransfer2.jpg)
3. Once transaction approval is complete, you can now Transfer BAT to BAT on xDai. Click Transfer.
![](/img/bridges/omni-tokentransfer3.jpg)
4. Press Confirm to approve the transfer and pay the gas fees. These may be expensive depending on network congestion. We recommend [checking current gas prices](https://ethgas.watch/). Because of high fees, it also may make sense to bridge over a larger amount of tokens in a single transaction rather than several smaller ones.
![](/img/bridges/omni-tokentransfer4.jpg)
5. The bridge transaction will begin to process. While you are waiting for block confirmations, you can click on the ALM monitor link to view progress of your transfer, or you can view the [ALM monitor here](https://alm-xdai.herokuapp.com/) and look up your transaction by the transaction hash.
![](/img/bridges/omni-tokentransfer5.jpg)  
Viewing the ALM app:  
![](/img/bridges/omni-tokentransfer6.jpg)
:::note
Back when BAT was first bridged, only 2/3 confirmations were required. Now the validator set has expanded so 4/6 confirmations are required.
:::
6. After a successful transfer, you can check the token on BlockScout to see that it exists. Check Bridged tokens at https://blockscout.com/xdai/mainnet/bridged-tokens.
![](/img/bridges/omni-tokentransfer7.jpg)
7. Note the contract address and be sure to [add the token to your wallet](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H). 

#### Switch Bridges and Networks in the UI
##### Bridges
The OmniBridge UI supports several bridges. To switch chains, click on the Bridge Selector to choose. Once selected, a popup will instruct you to change networks in MetaMask. Click the buttons directly in the popup to complete the process.
1. Choose from selector
![](/img/bridges/omni-switchnetwork1.png)
2. Click to switch to target network (Binance Smart Chain in the screenshot)
![](/img/bridges/omni-switchnetwork2.png)
3. Click approve to add the network to Metamask. If you get a warning that the network details don't match, it's likely ok. Be sure to check [chainlist.org](https://chainlist.org/) to verify the network details just in case.
![](/img/bridges/omni-switchnetwork3.png)
4. Click "Switch Network" to allow the site to switch the network. 
![](/img/bridges/omni-switchnetwork4.png)
5. UI should display that you are connected to the new chain. Your wallet address will now change from being highlighted red to blue. 
![](/img/bridges/omni-switchnetwork5.png)   
##### Networks 
When switching between networks within the same bridge, press the arrows icon in the top middle, then confirm the network switch in MetaMask.
![](/img/bridges/omni-switchnetwork6.png)

### Transfer Tokens without the UI
The instructions below use the Etherscan UI and the Blockscout UI to demonstrate the token transfer process. 
There is an [OMNIBRIDGE UI](https://omni.gnosischain.com/bridge) also available which calls the methods of the multi-token mediators contracts described below. 

#### General Case: ERC-20 Token Transfer
The general case describes a "pure" ERC20 token. For tokens compatible with ERC677 and ERC827 token standards the steps may be simplified - see the [separate section below](#simplification-for-erc677erc827-tokens).
##### Ethereum -> Gnosis Chain
The steps below assume:
* The account performing the actions owns some amount of an ERC20 token on Ethereum.
* The account is funded with some ether to cover gas fees.
* The MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for Etherscan.  
For demonstration purposes we transfer Sai tokens.
![](/img/bridges/omni-erc20manual1.png)
1. __Approve the mediator contract to transfer tokens.__ The mediator contract uses the `transferFrom` functionality of the ERC20 token contract to lock the tokens; it must be explicitly approved to perform this operation. 
![](/img/bridges/omni-erc20manual2.png)
First, connect to the Web3 provider (MetaMask or other). Next, click on Write Contract and go to the approve method. Enter the following:
`guy (address)` field:  the mediator contract address on Ethereum (`0x88ad09518695c6c3712AC10a214bE5109a655671`) 
`wad (uint256)`:  the amount of tokens to transfer in wei
![](/img/bridges/omni-erc20manual3.png)
Press the "Write" button to send the transaction.
![](/img/bridges/omni-erc20manual4.png)
The wallet window will appear. Gas price can be adjusted to speed up transaction verification. After the transaction is confirmed in the wallet, it is necessary to wait for verification. Depending on the gas price specified and traffic congestion it can take several seconds to several minutes.
2. __Initiate the transfer request.__   
Copy the contract address before proceeding: 
![](/img/bridges/omni-erc20manual5.png)
Next, open the mediator contract ([`0x88ad09518695c6c3712AC10a214bE5109a655671`](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671)) in Etherscan.
![](/img/bridges/omni-erc20manual6.png)
The mediator contract is a proxy contract; Click contract then click the "Write as Proxy" tab.
![](/img/bridges/omni-erc20manual7.png)
Since you are opening a new contract in Etherscan, you will connect to the Web3 provider (your wallet of choice) again. Then, in the `relayTokens` method enter the token contract address and the amount of tokens to transfer.
![](/img/bridges/omni-erc20manual8.png)
Press the "Write" button to send the transaction.
![](/img/bridges/omni-erc20manual9.png)  
The MetaMask/NiftyWallet will appear and the gas price can be adjusted to speed up the transaction verification. Once the transaction is confirmed in the MetaMask, wait for confirmation. Depending on the gas price specified and traffic congestion it could take from several seconds to several minutes.
Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for 8 additional blocks. Then, they will send confirmations to Gnosis chain to invoke the multi-token mediator contract and complete the tokens transfer.
You can monitor the confirmation and AMB request execution with the [AMB Live Monitoring tool](https://alm-xdai.herokuapp.com/). Specify the hash (tx id) of the transaction used to call `relayTokens` in the ALM entry page to check the status of the AMB request initiated by this transaction in real time. If the AMB request is executed successfully:
 * __If token has not been transferred with AMB before:__ If this is the first transaction for this particular token using the AMB, a new ERC677 token contract will be deployed to the xDai chain. The token contract will be initialized with the same symbol and decimals as for the original token on Ethereum. The name of the new token will be extended with the letters "on xDai" (e.g. "Dai Stablecoin v1.0 on xDai"). At the end, the requested amount of tokens will be minted and sent to the account that called `relayTokens`.
 * __If token has been previously transferred with AMB:__ If If the ERC677 token has already been registered by the mediator for the original ERC20 token, deployment of the contract will be skipped but the requested amount of tokens will be minted and sent to the account that called `relayTokens`.
Once the process is complete and indexed by BlockScout, it is possible to find the token contract on Gnosis Chain. Check out the [Bridged token registry](https://blockscout.com/xdai/mainnet/bridged-tokens) to view it.
##### Gnosis -> Ethereum
The steps below assume that the account performing the actions is funded with some xDai to cover gas fees.  
Also, the MetaMask/NiftyWallet must be unlocked and rights to access the account must be granted for BlockScout.
:::info
Make sure that the token contract is verified in BlockScout. Token contracts deployed as part of the multi-token mediator operations are not verified automatically, so if the token does not allow read and write in the block explorer, follow the steps to verify the contract before starting.
:::

1. __Call the transferAndCall method to transfer tokens__
The token contract deployed by the mutli-token mediator supports the ERC677 standard, so instead of calling `approve` and `relayTokens`, a single method `transferAndCall` can be used to transfer tokens to the mediator contract and notify it regarding this action at the same time.
Go to the "Write Proxy" tab of the token contract in BlockScout
![](/img/bridges/omni-gno-eth-manual1.png)
In the transferAndCall method enter the multi-token mediator contract address on Gnosis chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`), amount of tokens to transfer, and "0x" in the _data field. Press Write to send the transaction.
![](/img/bridges/omni-gno-eth-manual2.png)
The MetaMask window will appear. Gas price should be 1 GWei, adjust if needed. Once the transaction is confirmed in MetaMask, wait for verification by the Gnosis chain validators. This is typically completed in a few seconds.
Once the transaction is included in a block, the Arbitrary Message Bridge validators will wait for one more block. After that, they will collect confirmations on Gnosis chain and transfer them to Ethereum. The transaction sent by a validator to Ethereum will execute the request to unlock the tokens.  
You can monitor this process using the [AMB Live Monitoring tool](https://alm-xdai.herokuapp.com/). Specify the hash (tx id) of the transaction used to call transferAndCall in the ALM entry page and it will check the status of the AMB request initiated by this transaction in real time. The requested amount of tokens minus any fees will be unlocked on Ethereum.

##### Simplification for ERC677/ERC827 tokens
If the token on Ethereum is ERC677 or ERC827 compatible it is possible to omit the approve method call and only call the `transferAndCall` method in the token contract.
:::note
This example uses the STAKE token, [whose utility will be depreciated after the merge](https://forum.gnosis.io/t/gip-16-gnosis-chain-xdai-gnosis-merge/1904). However, the token will still exist and these steps are still relevant.
:::
Below is example with the STAKE token contract:
![](/img/bridges/omni-erc667-simplification1.png)  
Click Write Contract and specify the multi-token mediator contract address on Ethereum (0x88ad09518695c6c3712AC10a214bE5109a655671) as the recipient of the tokens, the amount of tokens in wei the "value" field, and `0x` in the "data" field. Click Write to execute.
![](/img/bridges/omni-erc667-simplification2.png) 

https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/how-to-transfer-tokens#simplification-for-erc677-erc827-tokens



### Bridging Tokens Minted on Gnosis
Tokens minted natively on xDai are now available to bridge to other destination chains, including Ethereum, BSC and POA. Note that you will need to pay gas costs for the destination chain (which can be quite high for Ethereum) with the destination currency (such as ETH or BSC) when bridging.
Bridging requires 2 steps:
1. Unlock the Token (allow the application to transfer)
2. Request the Transfer (requires 2 transactions, 1 from sending chain and a second on destination chain to claim)
Please see the [previous section on bridging from Gnosis to Ethereum](#gnosis---ethereum) for specific instructions, as the steps are the same.

## Token Registry

### Getting corresponding Token Address
There are several approaches to discover the token contract on the Ethereum Mainnet that corresponds to the token contract on Gnosis chain.
#### __Approch 1: BlockScout__
BlockScout allows you to see if a token was bridged using the multi-token extension. First, search the token and go it's contract page:
![](/img/bridges/omni-bridged-tokens1.png)
This view contains information that this token was bridged and a link to the original token.
![](/img/bridges/omni-bridged-tokens2.png)
If you go to the top bar, you will notice that the token dropdown allows you to filter between tokens based off where they were bridged from: 
![](/img/bridges/omni-bridged-tokens3.png)

#### __Approach 2: Mediator Storage__
The [multi-token mediator on Gnosis chain](https://blockscout.com/xdai/mainnet/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d/read-proxy#address-tabs) provides methods for viewing correspondence of bridgeable tokens:
* `foreignTokenAddress` - returns the address of the token contract on the Ethereum Mainnet by specifying the address the token contract on Gnosis Chain.
* `homeTokenAddress`- returns the address of the token contract on Gnosis chain by specifying the address of the token contract on Ethereum.
Pass in the token address to get the corresponding address on the other chain:  
![](/img/bridges/omni-mediatorstorage1.png)


### Verifying a Canonical Bridged Token on GnosisScan
- [Tokenbridge Docs: Verifying a Canonical Bridged Token on Blockscout](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/new-token-contract-verification-in-blockscout)

### Bridged Tokens List
A dynamic list of bridged tokens is now available.
* [Tokens Bridged from Ethereum]( https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
* [Tokens Bridged from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)
The OmniBridge multi-token bridge extension is now being used to bridge many tokens from Ethereum to Gnosis. A second instance bridges tokens to and from the Binance Smart Chain. When a token is bridged, the name is appended with "on xDai" or "from Ethereum/BSC". On a token page, you can also find the link to the original token on Ethereum.

### Getting bridged tokens from Omnibridge Smart Contracts

The Token list is queried dynamically with BlockScout. The list is compiled by following these steps:
1. Find all transactions to the [AMB Contract on Gnosis](https://blockscout.com/xdai/mainnet/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59/transactions#address-tabs)
2. Check all internal transactions for each transaction.
3. If an internal transaction creates a contract from the AMB mediator address (0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d), and this contract exposes the `getTokenInterfacesVersion()` getter, it is safe to assume that this contract’s address is a bridged token address.

## Specific Tokens

- [Tokenbridge Docs: Bridging WETH on Gnosis back to Ethereum](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/transfer-weth-from-xdai-to-eth-on-mainnet)

## Debugging Omnibridge Transactions
:::info
This page is mostly for the application developers, if you sent tokens through the OmniBridge and would like to get the status whether the tokens were sent successfully or not, please use [AMB Live Monitoring application](https://alm-xdai.herokuapp.com/) instead.
:::
Firstly, the [Foreign Arbitrary Message Bridge contract](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e) which is used by the OmniBridge, emits the `UserRequestForAffirmation` event as part of the a deposit request made by user (on the Ethereum side).  
```
event UserRequestForAffirmation(bytes32 indexed messageId, bytes encodedData);
```   
For example, [this is the event in the OmniBridge transaction](https://etherscan.io/tx/0x804a4b28520faad8b68d122cafdffedd2e185a9aa734b69f264a652d5c53afa4#eventlog), and the topic `0x482515ce3d9494a37ce83f18b72b363449458435fafdd7a53ddea7460fe01b58`
![](/img/bridges/omni-debugging1.png)  
In the event definition and from the example, the Id of the AMB message is trackable as part of the event. The event from the example shows the message Id: `0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402`.  
On the other side of the bridge, if the message was executed successfully the [AMB contract](https://blockscout.com/xdai/mainnet/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59/logs#address-tabs) emits the `AffirmationCompleted` event.  
```
event AffirmationCompleted(
    address indexed sender,
    address indexed executor,
    bytes32 indexed messageId,
    bool status
);
```
Here is [the event corresponding to the example](https://blockscout.com/xdai/mainnet/tx/0x092f1c8a02f305e5bfb671b923710cdd150c5b0e41df048c75b790538a25025b/logs)  
![](/img/bridges/omni-debugging2.png) 
The topic of the event is `0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7`. And the message Id is represented as a separate topic in the event.
That's why it is possible to use different ways to filter out the corresponding transaction if the message Id of the OmniBridge deposit is known (it always can be received from the deposit transaction).
For example, you can use the BlockScout API for this: https://blockscout.com/xdai/mainnet/api-docs. Example of the request to the BlockScout:
```
https://blockscout.com/xdai/mainnet/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address=0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59&topic0=0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7&topic3=0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402&topic0_3_opr=and
```
It will return the JSON with the transaction hash correlated to the emission of the event `AffirmationCompleted` with the message Id:
```
{
  "message": "OK",
  "result": [
    {
      "address": "0x75df5af045d91108662d8080fd1fefad6aa0bb59",
      "blockNumber": "0xbc8133",
      "data": "0x0000000000000000000000000000000000000000000000000000000000000001",
      "gasPrice": "0x3b9aca00",
      "gasUsed": "0x2d572",
      "logIndex": "0x8",
      "timeStamp": "0x5f7ab6dd",
      "topics": [
        "0xe194ef610f9150a2db4110b3db5116fd623175dca3528d7ae7046a1042f84fe7",
        "0x00000000000000000000000088ad09518695c6c3712ac10a214be5109a655671",
        "0x000000000000000000000000f6a78083ca3e2a662d6dd1703c939c8ace2e268d",
        "0x000500004ac82b41bd819dd871590b510316f2385cb196fb0000000000000402"
      ],
      "transactionHash": "0x092f1c8a02f305e5bfb671b923710cdd150c5b0e41df048c75b790538a25025b",
      "transactionIndex": "0x5"
    }
  ],
  "status": "1"
}
```

  
## Advanced
### Alternate Receiver

- [xDai Docs: Alternate Receiver](https://developers.gnosischain.com/for-users/bridges/omnibridge/alternate-receiver)

### Set Custom RPC Endpoints
- [xDai Docs: Set Custom RPC Endpoints](https://developers.gnosischain.com/for-users/bridges/omnibridge/set-custom-rpc-endpoints)

### Infinite Unlock
- [xDai Docs: Infinite Unlock](https://developers.gnosischain.com/for-users/bridges/omnibridge/infinite-unlock)

### Using Omnibridge with Gnosis Safe
- [xDai Docs: Using Omnibridge in Gnosis Safe](https://developers.gnosischain.com/for-users/bridges/omnibridge/omnibridge-+-gnosis-safe-app)

## BNB Chain

### Using Omnibridge to transfer to BNB Chain
- [xDai Docs: Using Omnibridge to transfer to BNB Chain](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge)

### Example transfer from Gnosis to BNB Chain
- [xDai Docs: Example transfer from Gnosis to BNB Chain](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/bsc-omnibridge-example)

### WBNB auto-conversion to BNB

- [xDai Docs: WBNB auto-conversion to BNB](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/wbnb-auto-conversion-to-bnb)

### Binance-pegged Dai token on Gnosis
- [xDai Docs: Binance-pegged Dai token on Gnosis](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/dai-token-on-xdai-bsc)