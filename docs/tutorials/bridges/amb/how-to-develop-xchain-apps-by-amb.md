---
description: Developing a cross-blockchain application with the arbitrary message bridge
---

# How to develop a cross-blockchain application using the AMB

:::info
The complete AMB bridge interface can be found [here](https://github.com/poanetwork/poa-bridge-contracts/blob/master/contracts/interfaces/IAMB.sol)
:::

## Using AMB exposed methods

### Call a method in another chain using the AMB bridge

AMB is about the invocation of a contract's method in another chain. **A contract on one side must know a method of a contract on another side**. The method name and parameters are encoded and passed to the `requireToPassMessage` method of the bridge contract.

```javascript
function requireToPassMessage(address _contract, 
                              bytes _data, 
                              uint256 _gas) external returns (bytes32);
```

* `address _contract`  address of the contract on the other network.
* `bytes _data`encoded bytes of the method selector and the parameters that will be called in the contract on the other network. In the [Code Examples](/tutorials/bridges/amb/how-to-develop-xchain-apps-by-amb#code-examples) section there is an example of how to generate this parameter.
* `uint256 _gas` The gas to be provided in execution of the method call in the contract on the other network. To generate this parameter you need to measure the gas usage of the method to be executed. It can be done by manual invocation of the method in a dev environment or by using a tool like [eth-gas-reporter](https://github.com/cgewecke/eth-gas-reporter) to get the gas usage of the methods from the unit tests.

  The AMB bridge provides a maximum gas value to be provided in the execution of the method, so the provided gas value must not exceed this limit. To get this limit, you can call the method: 

  ```javascript
  function maxGasPerTx() external view returns (uint256);
  ```

The method `requireToPassMessage` returns a unique message identifier. It could be used to keep details about the request by the contract originating the request.

### Receive a method call from the AMB bridge

If the contract receiving a method call from the AMB bridge needs to perform some critical actions, it is wise to consider the following security measures:

* Check that the `msg.sender` is the address of the bridge.
* Check the address of the invoking contract from the other side. To do this, the contract can call the method `messageSender()` from the AMB bridge to know who generated the message that is defined as:

  ```javascript
  function messageSender() external view returns (address);
  ```

  Since in the future the same arbitrary message bridge contract could handle requests from different chains, it makes sense to check also the source chain id by the method:

  ```javascript
  function messageSourceChainId() external view returns (bytes32);
  ```

  Another useful method from the AMB Bridge is the `messageId()` method. It returns the a unique identifier of the message that caused the invocation of `requireToPassMessage` on the other network.

  ```javascript
  function messageId() external view returns (bytes32);
  ```

  The message identifier does not equal the originating transaction hash since one transaction could originate several requests to be transferred by the AMB.

### Security

Every time `requireToPassMessage` is called, the AMB bridge validators will listen to the generated event and provide their signature to bridge the message. Once enough signatures are collected, the message is marked as processed. Only then does it proceed with the execution of the method call. This guarantees the message will be executed only one time.

### Handling failed messages

It is possible that the call execution of message relayed by the bridge could fail. The reasons could be related to some specific logic of the invoked method, an insufficient gas limit provided to the method call, or invalid data.

The AMB bridge exposes methods to help retrieve information related to the failed message.

```text
function messageCallStatus(bytes32 _messageId) external view returns (bool);
function failedMessageReceiver(bytes32 _messageId) external view returns (address);
function failedMessageSender(bytes32 _messageId) external view returns (address);
function failedMessageDataHash(bytes32 _messageId) external view returns (bytes32);
```

All methods accept as a parameter the hash of the transaction that originated the message on the other network.

* `messageCallStatus` returns the result of the message call execution.
* `failedMessageReceiver` returns the address that received the call execution of the message.
* `failedMessageSender` returns the address that originated the message on the other network.
* `failedMessageDataHash` returns the hash `keccak256(data)` associated with the originating message identifier. Where `data` refers to the `data` parameter in the `requireToPassMessage` method.

## Example of ERC20/ERC677 to ERC677 using AMB bridge

:::info
Explicit deployment instructions are [available here](/specs/bridges/amb/erc677-to-erc677-bridge-on-top-of-amb)
:::

We can use the AMB bridge to move ERC20/ERC677 tokens between two chains. To do this, we'll have two contracts that communicate with each other: 

* Contract A receives tokens, locks them and send instructions to Contract B.
* Contract B receives instructions to mint the same number of tokens in the other chain. 

In the inverse case, contract B receives tokens, burns them and instructs contract A to unlock the burned amount in the other chain.

The implementation of the contracts for this ERC-TO-ERC AMB bridge extension can be found [here](https://github.com/poanetwork/poa-bridge-contracts/tree/master/contracts/upgradeable_contracts/amb_erc677_to_erc677).

In this implementation we have:

* A Token Management \(mediator\) contract on Foreign side that locks/unlocks transferred tokens and sends requests to Mint tokens on Home side.
* A Token Management \(mediator\) contract on Home side that mints/burns transferred tokens and send requests to Unlock tokens on Foreign side.

![AMB-ERC677-ERC677](https://i.imgur.com/IAIr4YO.png)

The pair of such management contract is being used to exchange [MOON ERC20 tokens between Rinkeby testnet and the Gnosis Chain](https://docs.tokenbridge.net/rinkeby-xdai-amb-bridge/moon-bridge-extension).

* MOON-xMOON mediator contract on the Gnosis Chain: [storage](https://blockscout.com/xdai/mainnet/address/0x1E0507046130c31DEb20EC2f870ad070Ff266079/contracts), [implementation](//blockscout.com/xdai/mainnet/address/0x3B09067f5FbC8087391f6997ccd83337195eaC05/contracts)
* MOON-xMOON mediator contract on the Ethereum Mainnet chain: [storage](https://rinkeby.etherscan.io/address/0xFEaB457D95D9990b7eb6c943c839258245541754#code), [implementation](https://rinkeby.etherscan.io/address/0x575d3197255deb3b06221020df36635fd63c872b)

### Token transfer flow

A user has tokens on the Foreign side and wants to bridge them to the Home network:

#### Case with ERC20 token:

1. The user call the `approve` method on the token contract with the value he/she would like to transfer and the foreign mediator contract address as a delegated account to make this transfer later.
2. The user calls the `relayTokens` method of the mediator contract with the same value as was specified in the `approve` method call and his/her own account address as a recipient of the token on another side of the bridge. 
3. The tokens are transferred by the mediator contract and then it calls the `requireToPassMessage` method of Foreign AMB bridge contract with parameters indicating that the `handleBridgedTokens` method of the Home mediator contract should be called with the recipient and value parameters of the token transfer.

#### Case with ERC677 token:

1. The user calls the `transferAndCall` method of the token contract with the value and the foreign mediator contract address as a target. 
2. The tokens are transferred and the token contract calls `onTokenTransfer` method of the mediator contract.
3.  In the `onTokenTransfer` method, the mediator contract calls the `requireToPassMessage` method of Foreign AMB bridge contract with parameters indicating that the `handleBridgedTokens` method of the Home mediator contract should be called with the recipient and value parameters of the token transfer.

Then, when the AMB bridge processes the message on the Home network: 

1. The AMB Oracle calls the Home AMB bridge contract.
2. The Home AMB bridge calls the `handleBridgedTokens` method of the Home mediator contract.
3. The `handleBridgedTokens` method Mints the Tokens.

Here is a representation of the steps explained above \(ERC677 case\):

![AMB-ERC677-ERC677-Transfer](https://i.imgur.com/LGDqqkp.png)

Transferring tokens from the Home network to the Foreign network works in a similar way. The only difference is that Home mediator contract burns the transferred tokens, and the Foreign mediator contract unlocks the tokens.

## Code examples

In this example of the  `relayTokens` and `onTokenTransfer` implementations, the following items were stored in the contract on initialization: 

* Token contract address
* AMB bridge contract address 
* Mediator contract address of the second network 
* Execution gas limit

```javascript
function relayTokens(address _receiver, uint256 _value) external {
    ERC677 token = erc677token();
    address to = address(this);
    token.transferFrom(msg.sender, to, _value);
    
    ...
    
    bytes4 methodSelector = ITokenManagement(address(0)).handleBridgedTokens.selector;
    bytes memory data = abi.encodeWithSelector(methodSelector, _receiver, _value);
    bytes32 msgId = bridgeContract().requireToPassMessage(
        mediatorContractOnOtherSide(),
        data,
        requestGasLimit()
    );

    // Save value and receiver in case the message fails on the other side
    setMessageValue(msgId, _value);
    setMessageRecipient(msgId, _receiver);
}
```

```javascript
function onTokenTransfer(address _from, uint256 _value, bytes /*_data*/) external returns (bool) {
    require(msg.sender == erc677token());

    ...

    bytes4 methodSelector = ITokenManagement(address(0)).handleBridgedTokens.selector;
    bytes memory data = abi.encodeWithSelector(methodSelector, _from, _value);
    bytes32 msgId = bridgeContract().requireToPassMessage(
        tokenManagementContractOnOtherSide(),
        data,
        executionGasLimit()
    );

    // Save value and receiver in case the message fails on the other side
    setMessageValue(msgId, _value);
    setMessageRecipient(msgId, _frok);

    return true;
}
```

Example implementation of the `handleBridgedTokens` method on the Home network:

```javascript
function handleBridgedTokens(address _recipient, uint256 _value) external {
    require(msg.sender == address(bridgeContract()));
    require(bridgeContract().messageSender() == mediatorContractOnOtherSide());

    ...

    bytes32 msgId = messageId();
    erc677token().mint(_recipient, _value);
    emit TokensBridged(_recipient, _value, msgId);
}
```

In case the execution of `handleBridgedTokens` fails, any user may call the following method in the Home Network to request a fix for the transfer performed previously on the Foreign Network.

```javascript
function requestFailedMessageFix(bytes32 _messageId) external {
    require(!bridgeContract().messageCallStatus(_messageId));
    require(bridgeContract().failedMessageReceiver(_messageId) == address(this));
    require(bridgeContract().failedMessageSender(_messageId) == mediatorContractOnOtherSide());

    bytes4 methodSelector = ITokenManagement(address(0)).fixFailedMessage.selector;
    bytes memory data = abi.encodeWithSelector(methodSelector, _messageId);
    bridgeContract().requireToPassMessage(mediatorContractOnOtherSide(), data, requestGasLimit());
}
```

Example implementation of the method in Foreign Network that unlocks the transferred tokens after the request to fix a failed message from the Home Network.

```javascript
function fixFailedMessage(bytes32 _messageId) external {
    require(msg.sender == address(bridgeContract()));
    require(bridgeContract().messageSender() == mediatorContractOnOtherSide());
    require(!messageFixed(_messageId));

    // Get values stored in relayTokens/onTokenTransfer method
    address recipient = messageRecipient(_messageId);
    uint256 value = messageValue(_messageId);

    // Mark hash as fixed to avoid fixing it twice
    setMessageFixed(_messageId);

    erc677token().transfer(_recipient, _value);
    emit FailedMessageFixed(_messageId, recipient, value);
}
```

:::success
Instruction is migrated from the POA forum [https://forum.poa.network/t/how-to-develop-a-cross-blockchain-application-by-using-amb-bridge/2963](https://forum.poa.network/t/how-to-develop-a-cross-blockchain-application-by-using-amb-bridge/2963)
:::

