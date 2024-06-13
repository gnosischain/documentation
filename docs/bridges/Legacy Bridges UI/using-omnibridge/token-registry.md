---
title: Token Registry
description: Discover the token contract on the Ethereum Mainnet that corresponds to the token contract on Gnosis chain.
keywords: [token registry, bridged tokens, canonical token, gnosis bridge]
---

# Token Registry

## Getting corresponding Token Address

There are several approaches to discover the token contract on the Ethereum Mainnet that corresponds to the token contract on Gnosis chain.

### **Approach 1: BlockScout**

BlockScout allows you to see if a token was bridged using the multi-token extension. First, search the token and go it's contract page:
![](/img/bridges/omni-bridged-tokens1.png)
This view contains information that this token was bridged and a link to the original token.
![](/img/bridges/omni-bridged-tokens2.png)
If you go to the top bar, you will notice that the token dropdown allows you to filter between tokens based off where they were bridged from:
![](/img/bridges/omni-bridged-tokens3.png)

### **Approach 2: Mediator Storage**

The [multi-token mediator on Gnosis chain](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d#writeProxyContract) provides methods for viewing correspondence of bridgeable tokens:

- `foreignTokenAddress` - returns the address of the token contract on the Ethereum Mainnet by specifying the address the token contract on Gnosis Chain.
- `homeTokenAddress`- returns the address of the token contract on Gnosis chain by specifying the address of the token contract on Ethereum.
  Pass in the token address to get the corresponding address on the other chain:  
  ![](/img/bridges/omni-mediatorstorage1.png)

## Verifying a Canonical Bridged Token on BlockScout

New tokens deployed by the multi-token mediator are not verified automatically in BlockScout. Sometimes it is necessary to read data from the token contract directly in the block explorer or even call a method of the token contract (e.g. to transfer tokens back to the Ethereum Mainnet). Follow the instructions below to verify the contract in BlockScout. Once verified, you can read and write to the contract using the BlockScout interface.

1. Find the token contract by the token symbol using the search bar. The following example follows the verification of the STAKE token, which [recently had its staking utility deprecated](https://forum.gnosis.io/t/gip-16-gnosis-chain-xdai-gnosis-merge/1904). However, these steps are still relevant. The bridgeable token name is extended by "on xDai":
   ![](/img/bridges/omni-verify-token1.png)
2. Verify the contract:
   ![](/img/bridges/omni-verify-token2.png)
   ![](/img/bridges/omni-verify-token3.png)
   Click on the Code tab, click Verify and Publish, then fill the form following the recommendations below (see solidity contract code below this image). Press the "Verify & publish" button at the bottom of the form to finish.
   ![](/img/bridges/omni-verify-token4.png)

<details>

  <summary>Click to View Solidity Contract Code used in the Example</summary>

**Code**:

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

## Bridged Tokens List

A dynamic list of bridged tokens is now available.

- [Tokens Bridged from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Tokens Bridged from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)  
  The OmniBridge multi-token bridge extension is now being used to bridge many tokens from Ethereum to Gnosis. A second instance bridges tokens to and from the Binance Smart Chain. When a token is bridged, the name is appended with "on xDai" or "from Ethereum/BSC". On a token page, you can also find the link to the original token on Ethereum.

## Getting bridged tokens from Omnibridge Smart Contracts

The Token list is queried dynamically with BlockScout. The list is compiled by following these steps:

1. Find all transactions to the [AMB Contract on Gnosis](https://gnosis.blockscout.com/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59/transactions#address-tabs)
2. Check all internal transactions for each transaction.
3. If an internal transaction creates a contract from the AMB mediator address (0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d), and this contract exposes the `getTokenInterfacesVersion()` getter, it is safe to assume that this contract’s address is a bridged token address.
