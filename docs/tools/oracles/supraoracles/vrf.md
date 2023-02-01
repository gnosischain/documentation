---
title: Supra VRF
description: Supra VRF provides smart contracts with a secure and decentralized source of randomness that is unbiasable, unpredictable, and publicly verifiable. 
keywords: [SupraOracles, verifiable random function, random number generation]
---

:::info testnet
SupraOracles only supports [Chiado testnet](../../../about/networks/chiado.md).
:::

## What is a Verifiable Random Function (VRF)?

Blockchain-based verifiable random functions (VRFs) enable the generation of numbers that are as good as random (pseudorandom), and can be (publicly) verified cryptographically. Pseudorandomness guarantees both unpredictability and fairness, whereas tamper-proofness is guaranteed by their public verifiability.

Using a VRF for random number generation (RNG) is the gold standard for on-chain applications that require these properties, such as gaming operations, NFT-minting, lotteries, and randomized processes. More information about [Supra](https://supraoracles.com/) VRF can be found [here](https://supraoracles.com/docs/vrf1).


## How to use SupraOracles' VRF

SupraOracles currently supports many Solidity/EVM-based networks, like Gnosis Chiado TestNet.

To see all of the networks SupraOracles supports, please visit [SupraOracles' Networks](https://supraoracles.com/docs/vrf1/network-addresses)

To get started, you will want to visit [SupraOracles' docs site](https://supraoracles.com/docs/vrf1) and review the documentation or continue to follow this guide for a quick start.


### Step 1: Create The Supra Router Contract Interface

Add the following code to the requester contract i.e, the contract which uses VRF as a service. You can also add the code in a separate Interface and inherit the interface in the requester contract.

```solidity
interface ISupraRouter { 
    function generateRequest(string memory _functionSig , uint8 _rngCount, uint256 _numConfirmations) external returns(uint256); 
    function generateRequest(string memory _functionSig , uint8 _rngCount, uint256 _numConfirmations, uint256 _clientSeed) external returns(uint256); 
}
```

This interface will help the requester contract interact with the Supra Router contract and through which the requester contract can use the VRF service.


### Step 2: Configure the Supra Router Contract Address

Contracts that need random numbers should utilize the Supra Router Contract. In order to do that, they need to create an interface and bind it to the on-chain address of the Supra Router contract.

For Gnosis Chiado TestNet, the address is: 
```
0xb2667190b753720188a4039dd2b6014f01e07fea
```

We’ll store the set the address within the constructor and use it later to interact with the interface.

```solidity
contract ExampleContract {
    address supraAddr;

    constructor() {
        supraAddr = 0xb2667190b753720188a4039dd2b6014f01e07fea;
    }
}
```

### Step 3: Use the VRF service and request a Random Number

In this step, we'll use the “generateRequest” function of the Supra Router Contract to create a request for random numbers. There are two modes for the "generateRequest" function. The only difference between them is that you can optionally provide a client-side input, which will also be part of the payload being threshold signed to provide randomness.
* **_functionSig** - a string parameter, here the requester contract will have to pass the function signature which will receive the callback i.e., a random number from the Supra Router Contract. The function signature should be in the form of the function name following the parameters it accepts. We'll see an example later in the document.
* **_rngCount** - an integer parameter, it is for the number of random numbers a particular requester wants to generate. Currently, we can generate a maximum of 255 random numbers per request.
* **numConfirmations** - an integer parameter that specifies the number of block confirmations needed before supra VRF can generate the random number.
* **_clientSeed** (optional) - an optional integer parameter that could be provided by the client (defaults to 0). This is for additional unpredictability. The source of the seed can be a UUID of 256 bits. This can also be from a centralized source.
Supra's VRF process requires splitting the contract logic into two functions.
* The request function - the signature of this function is up to the developer
* The callback function - the signature must be of the form **“uint256 nonce, uint256[] calldata rngList”**

```solidity
function exampleRNG() external {  
     //Function validation and logic
     // requesting 10 random numbers
     uint8 rngCount = 10; 

     // we want to wait for 1 confirmation before the request is considered complete/final
     uint256 numConfirmations = 1; 
     uint256 generated_nonce = ISupraRouter(supraAddr).generateRequest(“exampleCallback(uint256,uint256[])”, rngCount, numConfirmations);

     // store generated_nonce if necessary (eg: in a hashmap)
     // this can be used to track parameters related to the request, such as user address, nft address etc in a lookup table
     // these can be accessed inside the callback since the response from supra will include the nonce
}
```

### Step 4 - Add the validation in the callback function of requester contract

Inside the callback function where the requester contract wants the random number (in this example the callback function is exampleCallback), the requester contract will have to add the validation such that only the Supra router contract can call the function. The validation is necessary to protect against malicious contracts/users executing the callback with fake data.

```solidity
function exampleCallback(uint256 _nonce ,uint256[] _rngList) external {
    require(msg.sender == supraAddr);
    // Following the required logic of the function
 }
```

### Example Implementation

In the example below,
* The function getRNGForUser is using the VRF service by calling the generateRequest function of the Supra Router Contract.
* Then we store the username of the user requesting the random number mapped to the nonce returned by generateRequest.
* Then the callback function prints the random numbers requested by a specific user and it has the signature: myCallbackUsername(uint256 nonce, uint256[] calldata rngList)
Once Supra generates the random number and it is verified by the on-chain logic to be authentic, myCallbackUsername is executed by the Supra Router, which completes the second half of the process. The nonce from the first argument is used to look up the username that originated the request.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface ISupraRouter {
   function generateRequest(string memory _functionSig , uint8 _rngCount, uint256 _numConfirmations, uint256 _clientSeed) external returns(uint256);
   function generateRequest(string memory _functionSig , uint8 _rngCount, uint256 _numConfirmations) external returns(uint256);
}

contract Interaction {
   address supraAddr;
   constructor() {
       supraAddr = 0xb2667190b753720188a4039dd2b6014f01e07fea;
   }

   mapping (uint256 => string ) result;
   mapping (string => uint256[] ) rngForUser;

   function getRNGForUser(uint8 rngCount, string memory username) external {
      uint256 nonce =  ISupraRouter(supraAddr).generateRequest("myCallbackUsername(uint256,uint256[])", rngCount, 1, 123);
      result[nonce] = username;
   }

   function myCallbackUsername(uint256 nonce, uint256[] calldata rngList) external {
      require(msg.sender == supraAddr, "only supra router can call this function");
      uint8 i = 0;
      uint256[] memory x = new uint256[](rngList.length);
      rngForUser[result[nonce]] = x;
      for(i=0; i<rngList.length;i++){
         rngForUser[result[nonce]][i] = rngList[i] % 100;
      }
   }
   
   function viewUserName(string memory username) external view returns (uint256[] memory) {
      return rngForUser[username];
   }
}
```

For additional tutorials and guides based on example use-cases, please refer to the [Supra Docs](https://supraoracles.com/docs/additional-guides).


## SupraOracles community channels

* [supraoracles.com](https://supraoracles.com)
* [Docs](https://supraoracles.com/docs/overview)
* [Telegram](https://t.me/SupraOracles)
* [Twitter](https://twitter.com/SupraOracles)
* [Discord](https://discord.gg/supraoracles)
* [Youtube](https://www.youtube.com/SupraOfficial)
