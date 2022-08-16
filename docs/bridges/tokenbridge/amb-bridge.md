---
title: Arbitrary Message Bridge
---

## TODO

- [ ] [AMB Monitoring Application](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application)



![](/img/bridges/diagrams/amb-bridge.svg)

You can also send arbitrary data between Gnosis and Ethereum using the native Arbitrary Message Bridge (AMB). This allows Gnosis contracts to send data and trigger contract functions on Ethereum and other chains, and vice-versa. 

The AMB is a key bridge primitive that is used inside higher-order bridges like the [Omnibridge native token bridge](./omnibridge.md).

The AMB currently supports Ethereum and Binance Smart Chain, and is part of the [Tokenbridge Architecture](https://tokenbridge.net/). There may be additional EVM-based networks supported in the future.

## Key Information

### Overview
|                       | Detail                                                                |
|-----------------------|-----------------------------------------------------------------------|
| Frontend URL          | N/A                                                                   |
| Trust Model           | [4-of-6 Validator Multisig](#bridge-validators)                       |
| Governance            | [7-of-16 Multisig](#bridge-governance)                                |
| Governance Parameters |                                                                       |
| Bug Bounty            | [up to $2m](https://immunefi.com/bounty/gnosischain/)                 |
| Bug Reporting         | On the Immunefi site [here](https://immunefi.com/bounty/gnosischain/) |




### Fees & Daily Limits

As the Arbitrary Message Bridge is a message passing bridge, there are no fees or daily limits associated with it.


### Bridge Validators

The AMB bridge relies on a trusted group of [AMB Bridge Validators](https://developers.gnosischain.com/for-validators/for-bridge-validators#current-amb-bridge-validators), who are known Gnosis community members. 

You can see the [current list of AMB & Omnibridge Validators](https://developers.gnosischain.com/for-validators/for-bridge-validators#amb-omnibridge). 

The [long-term roadmap](../roadmap.md) is to move towards [trustless bridges](../roadmap.md#trustless-bridges) using [zero-knowledge proofs from light clients](../roadmap.md#zero-knowledge-light-clients) or other trust-minimized techniques.

### Bridge Governance

* See [Bridge Governance](../governance.md)

References: 
- [xDai Docs: Bridge Governance Board](https://developers.gnosischain.com/for-users/governance/bridge-governance-board)
- [xDai Docs: Bridge Daily Limits](https://developers.gnosischain.com/for-users/bridges/bridge-daily-limits)

## Key Contracts

### Ethereum

| Contract                            | Address                                    |
|-------------------------------------|--------------------------------------------|
| AMB/Omnibridge Multi-Token Mediator | 0x88ad09518695c6c3712AC10a214bE5109a655671 |
| AMB Contract Proxy (Foreign)        | 0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e |

### Gnosis
| Contract                            | Address                                    |
|-------------------------------------|--------------------------------------------|
| AMB/Omnibridge Multi-Token Mediator | 0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d |
| AMB Contract Proxy (Home)           | 0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59 |

## How it works
### Terminology
* __Home (Native) Network__: Of the two networks being bridged between, the home or native network is the one with fast and inexpensive operations. All bridge operations to collect validator confirmations are performed on this side of the bridge.
* __Foreign Network__: Can be any EVM chain, generally it refers to Ethereum.

### Call a cross-chain method via AMB:

```solidity
function requireToPassMessage (address _contract,
                                bytes _data,
                                uint256 _gas) external;
```
 | param      | details                                                                                                   |
 |------------|-----------------------------------------------------------------------------------------------------------|
 | \_contract | address of contract on other network                                                                      |
 | \_data     | encoded bytes of the method selector and the params that will be called in the contract on the other side |
 | \_gas      | gas to be provided in execution of the method call on the other side                                      |
 
 ![](/img/bridges/diagrams/amb-bridge-contract-flow.png)

#### Foreign Network -> Home Network
1. User calls `foo()` on an originator contract
2. Originator contract calls `requireToPassMessage()` on Foreign Bridge contract, and encodes `foo()`, target address, and includes some tokens for gas. 
3. `UserRequestForAffirmation` event is emitted, and listening validators relay the message to the Home side where signatures are collected
4. `executeAffirmation()` is called on the Home Bridge contract by a validator once enough signatures are collected. 
5. Home bridge contract decodes the message and calls `foo()` on the target contract. 
#### Home Network -> Foreign Network
1. User calls `foo()` on an originator contract
2. Originator contract calls `requireToPassMessage()` on Home Bridge contract, and encodes `foo()`, target address, and includes some tokens for gas.
3. Signatures are collected from validators, and once enough are collected `requireToConfirmMessage()` is called
4. Message is relayed to the Foreign Bridge contract, and `executeSignatures()` is called
5. Foreign bridge contract decodes the message and calls `foo()` on target contract

AMB Bridge proxy contact on Ethereum can be viewed [here](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e)  
AMB Bridge Proxy Contract and Gnosis can be viewed [here](https://blockscout.com/xdai/mainnet/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59)  
### Security Considerations for Receiving a Call
| Concern       | Remediation                                                                                                                                                                                                                                                                                                                    |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authorization | Check the address of invoking contract using `messageSender()`                                                                                                                                                                                                                                                                 |
| Authorization | Check that `msg.sender` is the address of the bridge contract                                                                                                                                                                                                                                                                  |
| Replay Attack | `transactionHash()` allows for checking of a hash of the transaction that invoked the `requireToPassMessage()` call. The invoking contract (in some cases, the mediator contract) is responsible for providing a *unique sequence* (can be a nonce) as part of the `_data` param in the `requireToPassMessage()` function call |

### Mediator Contracts
 
 A mediator contract is needed if there is an approval flow, such as when transferring an NFT or ERC-20. For a more in-depth explanation, see the [Omnibridge page](omnibridge).  


### AMB Components
| Component        | Description                                                                                                                                                                                                                 |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System Contracts | AMB Implementation Contracts (Home Bridge and Foreign Bridge), Governance Multisigs, gas limit helpers, failed call management helpers (for when gas estimate was insufficient), and fee management helpers to collect fees |
| Oracles | Containerized microservices that listen for on-chain events and send confirmations to relay messages. [More on them here](https://github.com/omni/tokenbridge/blob/master/oracle/README.md).
| DevOps | [Bridge monitoring](https://github.com/omni/tokenbridge/blob/master/monitor/README.md), [ALM](https://github.com/omni/tokenbridge/tree/master/alm), docker compose, ansible playbooks |
| dApp Contracts | extensions (pair mediator contracts on both sides of the AMB), such as the Omnibridge |

#### Bridge Modes
* `AMB-ERC-TO-ERC` mode: transfer ERC20 tokens to the Foreign Mediator which will interact with Foreign AMB Bridge to mint wrapped ERC-667 tokens on the Home Network, and transfer ERC20 or ERC-667 tokens to the Home Mediator which will interact with Home AMB Bridge to unlock ERC20 tokens on Foreign network. This is used by the [Omnibridge](omnibridge).
* `ERC-TO-NATIVE` mode: The home network nodes must support consensus engine that allows using a smart contract for block reward calculation. This mode is used by the [xDai Bridge](xdai-bridge)
* `ARBITRARY-MESSAGE` mode:  Invoke Home/Foreign Bridge to send a message that will be executed on the other Network as an arbitrary contract method invocation.


## Managing Bridge Contracts
### Bridge Roles
- **Administrator** role (representation of a multisig contract):
  - add/remove validators
  - set daily limits on either direction
  - set maximum per transaction limit on both bridges
  - set minimum per transaction limit on both bridges
  - upgrade contracts in case of vulnerability
  - set minimum required signatures from validators in order to relay a user's transaction
- **Validator** role:
  - provide 100% uptime to relay transactions
  - listen for `UserRequestForSignature` events on Home Bridge and sign an approval to relay assets on Foreign network
  - listen for `CollectedSignatures` events on Home Bridge. As soon as enough signatures are collected, transfer all collected signatures to the Foreign Bridge contract.
  - listen for `UserRequestForAffirmation` or `Transfer` (depending on the bridge mode) events on the Foreign Bridge and send approval to Home Bridge to relay assets from Foreign Network to Home
- **User** role:
  - sends assets to Bridge contracts:
    - in `ERC-TO-NATIVE` mode: send ERC20 tokens to the Foreign Bridge to receive native coins from the Home Bridge, send native coins to the Home Bridge to unlock ERC20 tokens from the Foreign Bridge;
    - in `ARBITRARY-MESSAGE` mode: Invoke Home/Foreign Bridge to send a message that will be executed on the other Network as an arbitrary contract method invocation;
    - in `AMB-ERC-TO-ERC` mode: transfer ERC20 tokens to the Foreign Mediator which will interact with Foreign AMB Bridge to mint ERC20 tokens on the Home Network, transfer ERC20 tokens to the Home Mediator which will interact with Home AMB Bridge to unlock ERC20 tokens on Foreign network.

## Managing Bridge Validators
Bridge admins can vote to add/remove validators. Read more about governance [here](../governance.md)
## Resources

- [Arbitrary Message Bridge Documentation](https://docs.tokenbridge.net/amb-bridge/about-amb-bridge)
- [Diagrams illustrating how AMB Bridge works](https://docs.tokenbridge.net/eth-xdai-amb-bridge/multi-token-extension/extension-internals)


