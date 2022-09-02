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
Make sure that the token contract is verified in BlockScout. Token contracts deployed as part of the multi-token mediator operations are not verified automatically, so if the token does not allow read and write in the block explorer, [follow the steps](#verifying-a-canonical-bridged-token-on-blockscout) to verify the contract before starting.
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
![](/img/bridges/omni-erc677-simplification1.png)  
Click Write Contract and specify the multi-token mediator contract address on Ethereum (0x88ad09518695c6c3712AC10a214bE5109a655671) as the recipient of the tokens, the amount of tokens in wei the "value" field, and `0x` in the "data" field. Click Write to execute.
![](/img/bridges/omni-erc677-simplification2.png) 

##### Simplification for token transfers from the Gnosis Chain side
:::danger
Do Not Use the `transfer` method to send tokens to the multi-token mediator on Ethereum. It will lead to loss of tokens.
:::
The token contact deployed on Gnosis Chain is a customized version of ERC677 standard. It contains the changes that allow calling the transfer method to withdraw tokens from the xDai chain instead of `transferAndCall`. So, it is enough to specify the multi-token mediator contract address on Gnosis chain (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`) as the recipient and amount of tokens to initiate request to transfer tokens back to Ethereum.

:::warning
The method described above works only for tokens deployed by the multi-token mediator on Gnosis chain.
:::


### Bridging Tokens Minted on Gnosis
Tokens minted natively on xDai are now available to bridge to other destination chains, including Ethereum, BSC and POA. Note that you will need to pay gas costs for the destination chain (which can be quite high for Ethereum) with the destination currency (such as ETH or BSC) when bridging.
Bridging requires 2 steps:
1. Unlock the Token (allow the application to transfer)
2. Request the Transfer (requires 2 transactions, 1 from sending chain and a second on destination chain to claim)
Please see the [previous section on bridging from Gnosis to Ethereum](#gnosis---ethereum) for specific instructions, as the steps are the same.

## Token Registry

### Getting corresponding Token Address
There are several approaches to discover the token contract on the Ethereum Mainnet that corresponds to the token contract on Gnosis chain.
#### __Approach 1: BlockScout__
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


### Verifying a Canonical Bridged Token on BlockScout
New tokens deployed by the multi-token mediator are not verified automatically in BlockScout. Sometimes it is necessary to read data from the token contract directly in the block explorer or even call a method of the token contract (e.g. to transfer tokens back to the Ethereum Mainnet). Follow the instructions below to verify the contract in BlockScout. Once verified, you can read and write to the contract using the BlockScout interface.

1. Find the token contract by the token symbol using the search bar. The following example follows the verification of the STAKE token, which [recently had its staking utility deprecated](https://forum.gnosis.io/t/gip-16-gnosis-chain-xdai-gnosis-merge/1904). However, these steps are still relevant. The bridgeable token name is extended by "on xDai":
![](/img/bridges/omni-verify-token1.png)
2. Verify the contract:
![](/img/bridges/omni-verify-token2.png)
![](/img/bridges/omni-verify-token3.png)
Click on the Code tab, click Verify and Publish, then fill the form following the recommendations below (see solidity contract code below this image).   Press the "Verify & publish" button at the bottom of the form to finish.
![](/img/bridges/omni-verify-token4.png)

<details>

  <summary>Click to View Solidity Contract Code used in the Example</summary>

  __Code__:

  ```solidity showLineNumbers

    pragma solidity 0.4.24;

    /**
    * @title Proxy
    * @dev Gives the possibility to delegate any call to a foreign implementation.
    */
    contract Proxy {
        /**
        * @dev Tells the address of the implementation where every call will be delegated.
        * @return address of the implementation to which it will be delegated
        */
        /* solcov ignore next */
        function implementation() public view returns (address);

        /**
        * @dev Fallback function allowing to perform a delegatecall to the given implementation.
        * This function will return whatever the implementation call returns
        */
        function() public payable {
            // solhint-disable-previous-line no-complex-fallback
            address _impl = implementation();
            require(_impl != address(0));
            assembly {
                /*
                    0x40 is the "free memory slot", meaning a pointer to next slot of empty memory. mload(0x40)
                    loads the data in the free memory slot, so `ptr` is a pointer to the next slot of empty
                    memory. It's needed because we're going to write the return data of delegatecall to the
                    free memory slot.
                */
                let ptr := mload(0x40)
                /*
                    `calldatacopy` is copy calldatasize bytes from calldata
                    First argument is the destination to which data is copied(ptr)
                    Second argument specifies the start position of the copied data.
                        Since calldata is sort of its own unique location in memory,
                        0 doesn't refer to 0 in memory or 0 in storage - it just refers to the zeroth byte of calldata.
                        That's always going to be the zeroth byte of the function selector.
                    Third argument, calldatasize, specifies how much data will be copied.
                        calldata is naturally calldatasize bytes long (same thing as msg.data.length)
                */
                calldatacopy(ptr, 0, calldatasize)
                /*
                    delegatecall params explained:
                    gas: the amount of gas to provide for the call. `gas` is an Opcode that gives
                        us the amount of gas still available to execution

                    _impl: address of the contract to delegate to

                    ptr: to pass copied data

                    calldatasize: loads the size of `bytes memory data`, same as msg.data.length

                    0, 0: These are for the `out` and `outsize` params. Because the output could be dynamic,
                            these are set to 0, 0 so the output data will not be written to memory. The output
                            data will be read using `returndatasize` and `returdatacopy` instead.

                    result: This will be 0 if the call fails and 1 if it succeeds
                */
                let result := delegatecall(gas, _impl, ptr, calldatasize, 0, 0)
                /*

                */
                /*
                    ptr current points to the value stored at 0x40,
                    because we assigned it like ptr := mload(0x40).
                    Because we use 0x40 as a free memory pointer,
                    we want to make sure that the next time we want to allocate memory,
                    we aren't overwriting anything important.
                    So, by adding ptr and returndatasize,
                    we get a memory location beyond the end of the data we will be copying to ptr.
                    We place this in at 0x40, and any reads from 0x40 will now read from free memory
                */
                mstore(0x40, add(ptr, returndatasize))
                /*
                    `returndatacopy` is an Opcode that copies the last return data to a slot. `ptr` is the
                        slot it will copy to, 0 means copy from the beginning of the return data, and size is
                        the amount of data to copy.
                    `returndatasize` is an Opcode that gives us the size of the last return data. In this case, that is the size of the data returned from delegatecall
                */
                returndatacopy(ptr, 0, returndatasize)

                /*
                    if `result` is 0, revert.
                    if `result` is 1, return `size` amount of data from `ptr`. This is the data that was
                    copied to `ptr` from the delegatecall return data
                */
                switch result
                    case 0 {
                        revert(ptr, returndatasize)
                    }
                    default {
                        return(ptr, returndatasize)
                    }
            }
        }
    }

    interface IPermittableTokenVersion {
        function version() external pure returns (string);
    }

    /**
    * @title TokenProxy
    * @dev Helps to reduces the size of the deployed bytecode for automatically created tokens, by using a proxy contract.
    */
    contract TokenProxy is Proxy {
        // storage layout is copied from PermittableToken.sol
        string internal name;
        string internal symbol;
        uint8 internal decimals;
        mapping(address => uint256) internal balances;
        uint256 internal totalSupply;
        mapping(address => mapping(address => uint256)) internal allowed;
        address internal owner;
        bool internal mintingFinished;
        address internal bridgeContractAddr;
        // string public constant version = "1";
        bytes32 internal DOMAIN_SEPARATOR;
        // bytes32 public constant PERMIT_TYPEHASH = 0xea2aa0a1be11a07ed86d755c93467f4f82362b452371d1ba94d1715123511acb;
        mapping(address => uint256) internal nonces;
        mapping(address => mapping(address => uint256)) internal expirations;

        /**
        * @dev Creates a non-upgradeable token proxy for PermitableToken.sol, initializes its eternalStorage.
        * @param _tokenImage address of the token image used for mirrowing all functions.
        * @param _name token name.
        * @param _symbol token symbol.
        * @param _decimals token decimals.
        * @param _chainId chain id for current network.
        */
        constructor(address _tokenImage, string memory _name, string memory _symbol, uint8 _decimals, uint256 _chainId)
            public
        {
            string memory version = IPermittableTokenVersion(_tokenImage).version();

            assembly {
                // EIP 1967
                // bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)
                sstore(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc, _tokenImage)
            }
            name = _name;
            symbol = _symbol;
            decimals = _decimals;
            owner = msg.sender; // msg.sender == HomeMultiAMBErc20ToErc677 mediator
            bridgeContractAddr = msg.sender;
            DOMAIN_SEPARATOR = keccak256(
                abi.encode(
                    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
                    keccak256(bytes(_name)),
                    keccak256(bytes(version)),
                    _chainId,
                    address(this)
                )
            );
        }

        /**
        * @dev Retrieves the implementation contract address, mirrowed token image.
        * @return token image address.
        */
        function implementation() public view returns (address impl) {
            assembly {
                impl := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)
            }
        }
    }
  ```


</details>
After verification is successful, the number tabs in the contract window will be extended to allow users to "Read Contract", "Write Contract", "Read Proxy" and "Write Proxy".  

![](/img/bridges/omni-verify-token5.png)




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

In some cases it is convenient to use ETH, the native token for the Ethereum Mainnet, in the form of a wrapped ERC20 token. This allows to unify interfaces for operations with assets. The recent Wrapped ETH token contract is [WETH9](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2). 
When the ETH-Gnosis OmniBridge first started, wrapped ETH was bridged to the Gnosis chain in form of ERC677 token: Wrapped ETH on xDai.
Although the bridged token can be transferred back to ETH, it is still be in form of the ERC20 token, and it cannot be used in transactions to pay for gas fees. In this case, if a user has no ETH, it is impossible for them to unwrap these ETH tokens.
This set of instructions demonstrates how the Wrapped ETH can be bridged from Gnosis chain directly to ETH tokens using a new `relay-and-call` feature implemented in the OmniBridge contracts. In the last part of this guide there is also an instruction on how to transfer ETH to WETH on Gnosis chain using a single operation. This may not be used often but some users may find it handy.
This instruction assumes that you have access to BlockScout and Etherscan. You also must have a bit of xDai to pay for gas fees for a bridge transaction on Gnosis chain. 
### Bridge wEth on Gnosis to Native Eth on Ethereum
1. Change the chain to Gnosis in MetaMask
2. Find the wEth token in [BlockScount](https://blockscout.com/xdai/mainnet/token/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/token-transfers/, and go to the [Write Proxy](https://blockscout.com/xdai/mainnet/token/0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1/write-proxy) tab.
![](/img/bridges/omni-bridge-to-native-eth1.png)
3. Scroll to the `transferAndCall` method: 
![](/img/bridges/omni-bridge-to-native-eth2.png)
4. Enter the following information as parameters to call the method:
* `_to`(address): `0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d` . This is sthe address of the OmniBridge contract on Gnosis.
* `_value`(uint256): amount of wETH to be bridged (bridge fees wikll be subtracted from this value).
* `_data`(bytes): the concatenation of the following:
 * the address of the wETH OmniBridge helper contract on the Ethereum Mainnet (`0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a`)
 * he address of the ETH recipient without the leading `0x`
 For example, for the recipient `0xbf3d6f830ce263cae987193982192cd990442b53`, the value in `_data` field is `0xa6439ca0fcba1d0f80df0be6a17220fed9c9038abf3d6f830ce263cae987193982192cd990442b53`
Click __Write__ to send the transaction.
5. When the transaction is included in the block, click on the transaction link to get the transaction details
![](/img/bridges/omni-bridge-to-native-eth3.png)
6. Use the "View in ALM App" link on the page with transaction details, or use the transaction hash and go the the [ALM site](https://alm-xdai.herokuapp.com/) and enter it manually to track status of the transfer and finalize bridge operations if required.   
![](/img/bridges/omni-bridge-to-native-eth4.png)
7. Eventually, when an executing transaction on the Mainnet is processed, the WETH will be unlocked and unwrapped to ETH native tokens:
![](/img/bridges/omni-bridge-to-native-eth5.png)

### Bridge Eth to Gnosis Chain
1. Visit the WETH OmniBridge helper contract on [Etherscan](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a#writeContract) and connect your wallet.
2. Scroll to the `wrapAndRelayTokens` method and enter the amount of ETH to bridge to Gnosis chain:
![](/img/bridges/omni-bridge-from-native-eth1.png)
Click __Write__ to send the transaction
3. When the transaction is included in the block, press the "View you transaction" button to get the transaction hash which can be used in the [AMB Live Monitoring app](https://alm-xdai.herokuapp.com/) to track the status of the transaction.


## Debugging OmniBridge Transactions
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
The default bridge mode sends funds to the same address across chains, as the same algorithm is used to derive an address from a private key across the chains where the OmniBridge is deployed. However, it is easy to specify another address to receive funds on the chain you are bridging to. This may be desirable when sending funds from a multi-sig wallet (like Gnosis Safe), or as a transfer method to another address on a secondary chain.
#### Set and Alternate Receiver
1. Click on the "Advanced" link on the Omnibridge UI. A text field will appear.
2. Paste the `0x...` address you are transferring funds to on the receiving chain.
3. Proceed with the Request
![](/img/bridges/omni-alternate-receiver.gif) 
  
:::info
Claims on the receiving chain can be completed using any address with enough funds. Copy the tx hash from the first transaction (it will be linked during tx processing or when complete in the history tab of the bridge. You can also find in your MetaMask wallet) and paste into https://alm-xdai.herokuapp.com/ to search and execute.
:::


### Set Custom RPC Endpoints
If you are experiencing an issue with an Ethereum or Gnosis Chain RPC endpoint when trying to bridge you can easily set your own endpoint in the interface.
Note that these are Read Only, if you need to use the RPCs to process transactions, you can [set custom RPCs in your web3 wallet like MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-Network-RPC-and-or-Block-Explorer) as well.
#### RPC Endpoints:
* [Gnosis RPC's](/tools/rpc/)
* [Ethereum Default RPC's](https://mainnet.infura.io/), [Alternate Ethereum RPC's](https://ethereumnodes.com/)
1. Go to [the bridge UI](https://omni.gnosischain.com/bridge) and click settings at the top.
2. Add your RPC of choice and click __Save__. Note that the URL options change based off which networks you have selected to bridge between.
![](/img/bridges/omni-custom-rpc1.png)


### Infinite Unlock
You must give approval to the bridge contracts to access and send ERC-20 tokens. This is similar to Uniswap or another DEX that asks for approval to spend your tokens.
You can give this permission on a per transaction basis, or you can unlock an unlimited amount to transfer with the infinite unlock option. Infinite unlock saves on transaction fees, but does introduce security risk if the contract is compromised. If compromised, a malicious 3rd party may have the ability to access all funds rather than a finite approved amount.

#### Set Infinite Unlock
1. Go to Settings on the top of the page
2. Toggle "Infinite Unlock" and click __Save__. When you process your next unlock, the transaction will allow all transfers of that token without needing to unlock again.
![](/img/bridges/omni-infinite-unlock1.png)
3. If you don't wish to use infinite unlock but would like te instead set a custom limit, when the MetaMask window pops up to ask for approval you have the option to set a spend limit. Click "Edit Permission" and it will take you to the following screen:
![](/img/bridges/omni-custom-limit.png)


### Using Omnibridge with Gnosis Safe
OmniBridge is compatible with the Gnosis Safe apps interface, allowing for bridge interaction and ERC20 transfers between xDai and Ethereum using a Multisig Wallet. The following instructions are for bridging ERC20s between Ethereum and the xDai chain. To transfer xDai to Dai and vice versa, see the [xDai Bridge + Gnosis Safe instructions](using-xdai-bridge).
:::danger
Each Gnosis Safe is deployed independently on Gnosis chain and/or Ethereum. Cross-chain safes do not share the same contract addresses (even when they have the same owners etc), so it is important to use the Alternate Recipient Address feature when bridging with a safe.
:::
#### Add the App
1. Go to your Gnosis Safe and login and connect as you normally would
* [Gnosis Safe on Gnosis Chain](https://gnosis-safe.io/app/gno)
* [Gnosis Safe on Ethereum](https://gnosis-safe.io/app/)
2. Go to Apps -> Add Custom App, and add the app url https://omni.gnosischain.com/ . The App name should populate as OmniBridge
![](/img/bridges/omni-gnosis-safe1.png)
3. Agree to the terms and click "Add". The app will now be added to the interface.

#### Bridge App on Receiving Chain: Claiming a Bridge Transaction
In this example, we sent STAKE from xDai to a Gnosis Safe address on Ethereum. To claim this transaction, login to Gnosis Safe on Ethereum and open the OmniBridge Application (you may need to add it using the [steps above](#add-the-app) if you have not added previously)
1. You should see the claim screen, click the __Claim__ button to begin the process. If you do not see this screen, click on __History__ at the top of the OmniBridge app.
![](/img/bridges/omni-gnosis-safe2.png)
2. Click the __Claim__ button
![](/img/bridges/omni-gnosis-safe3.png)
3. All required owners must confirm the transaction before it is processed. Once completed, the funds will be added to the safe. 
![](/img/bridges/omni-gnosis-safe4.png)


## BNB Chain

### Using Omnibridge to transfer to BNB Chain
The Binance Smart Chain (BSC) Omnibridge allows users to move ERC20 tokens between Gnosis Chain and BSC. It is available as a dropdown item from the OmniBridge UI in the top right corner.
:::info
BSC OmniBridge and OmniBridge UI are beta software, use at your own risk.
You will need xDai on Gnosis Chain and BNB on the Binance Smart Chain to complete a bridge transfer.  
__Bridge Interfaces:__
* [OmniBridge UI](https://omni.gnosischain.com/bridge)
* [OmniBridge BSC Transaction Monitor](https://alm-bsc-xdai.herokuapp.com/)
* [BSC Bridged Tokens on GC List](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)
:::
  
:::caution
Tokens bridged cross-chain are appended with the "on xDai" or "on BSC". There are instances where bridging across multiple chains creates token names such as "STAKE on xDai on BSC" for example.

Double bridging also can result in multiple instances of the same token on a single chain. For example, USDC can be bridged to xDai from Ethereum and also bridged to xDai from BSC. This results in 2 separate USDC token instances on xDai. These tokens cannot be merged into a single instance after they are minted.
:::
  
:::info
[Component.Finance](https://xdai.component.finance/) is an available tool to swap between stable tokens. This can be used to convert:
* [Binance-Peg Dai Token](https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3) / [wxDai](https://blockscout.com/xdai/mainnet/tokens/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/token-transfers)
* [Binance-Peg USDC Token](https://blockscout.com/xdai/mainnet/tokens/0xD10Cc63531a514BBa7789682E487Add1f15A51E2/token-transfers) / [USDC on xDai](https://blockscout.com/xdai/mainnet/tokens/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83/token-transfers).
* 💡 [More info on this process is available here](#binance-pegged-dai-token-on-gnosis).
:::
[__Additional Information__](https://yostari.medium.com/traversing-the-eth-polygon-xdai-bsc-cross-chain-bridges-cfe3b29d49d4)


### Example transfer from Gnosis to BNB Chain
- [xDai Docs: Example transfer from Gnosis to BNB Chain](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/bsc-omnibridge-example)

### WBNB auto-conversion to BNB

- [xDai Docs: WBNB auto-conversion to BNB](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/wbnb-auto-conversion-to-bnb)

### Binance-pegged Dai token on Gnosis
- [xDai Docs: Binance-pegged Dai token on Gnosis](https://developers.gnosischain.com/for-users/bridges/omnibridge/binance-smart-chain-omnibridge/dai-token-on-xdai-bsc)