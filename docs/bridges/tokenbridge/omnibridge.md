---
title: Omnibridge
description: Omnibridge a native token bridge that mints the canonical representations of bridged assets on Gnosis
keywords: [omnibridge, token bridge, token claim]
---

# Omnibridge

:::info
Omnibridge can be accessed at [omni.gnosischain.com](https://omni.gnosischain.com/)
:::

![](/img/bridges/diagrams/token-bridge-01.png)

## Key Information

[Omnibridge](https://omni.gnosischain.com/) a native token bridge that mints the canonical representations of bridged assets on Gnosis. The Omnibridge is built on top of the [Arbitrary Message Bridge (AMB)](/bridges/tokenbridge/amb-bridge) and thus relies on the same group of [Trusted Bridge Validators](/bridges/tokenbridge/amb-bridge#bridge-validators) and trust model as the AMB. 

The Omnibridge currently connects Gnosis to Ethereum and Binance Smart Chain.

The Omnibridge mints bridged tokens using a variant of the [ERC-677](https://github.com/ethereum/EIPs/issues/677) token standard, with all bridged tokens tracked in the canonical [Bridged Token Registries](#bridged-token-registries). 

### Overview

|                       | Detail                                                |
|-----------------------|-------------------------------------------------------|
| Frontend URL          | https://omni.gnosischain.com                          |
| Trust Model           | [4-of-7 Validator Multisig](#bridge-validators)       |
| Governance            | [7-of-15 Multisig](#bridge-governance)                |
| Governance Parameters | Validator Set, Daily Limits, Fees                     |
| Bug Bounty            | [up to $2m](https://immunefi.com/bounty/gnosischain/) |
| Bug Reporting         | [Immunefi](https://immunefi.com/bounty/gnosischain/)  |

### Key Contracts

<Tabs>
<TabItem value="ethereum" label="Ethereum">

### Ethereum


| Contract                              | Ethereum Address                                                                                                                         |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| AMB Proxy Contract (Foreign)          | [0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#writeProxyContract) |
| Omnibridge Multi-Token Mediator Proxy | [0x88ad09518695c6c3712AC10a214bE5109a655671](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671#writeProxyContract) |
| Validator Management Contract         | [0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064](https://etherscan.io/address/0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064#writeProxyContract) |

</TabItem>
<TabItem value="gnosis" label="Gnosis">

### Gnosis


| Contract                              | Gnosis Address                                                                                                                            |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| AMB Proxy Contract                    | [0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59](https://gnosisscan.io/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59#writeProxyContract) |
| Omnibridge Multi-Token Mediator Proxy | [0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d#writeProxyContract) |
| Validator Management Contract         | [0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008](https://gnosisscan.io/address/0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008#writeContract)      |

</TabItem>
<TabItem value="goerli" label="Goerli">

### Goerli

| Contract               |                                                                                       Address                                       |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| OmniBridge Mediator (Foreign) | [0x00147c84f13764dCDAbAF1cbAe622fa6f6839085](https://goerli.etherscan.io/address/0x00147c84f13764dCDAbAF1cbAe622fa6f6839085) |
| AMB Contract Proxy (Foreign)  | [0x87A19d769D875964E9Cd41dDBfc397B2543764E6](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6) |
| GNO on Goerli  | [0x7f477c3f03213970d939104cc436dc995cf615b5](https://goerli.etherscan.io/address/0x7f477c3f03213970d939104cc436dc995cf615b5) |


</TabItem>
<TabItem value="chiado" label="Chiado">

### Chiado

| Contract            |                Address                            |
|----------------------------|--------------------------------------------|
| OmniBridge Mediator (Home) | [0x09D549a48AC52F3f9945E7de6402c609c92aa2E1](https://gnosisscan.io/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1) |
| AMB Contract Proxy (Home)  | [0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a](https://gnosisscan.io/address/0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a) |
|  GnosisBridge(GNO) on Chiado  | [0x19C653Da7c37c66208fbfbE8908A5051B57b4C70](https://blockscout.chiadochain.net/address/0x19C653Da7c37c66208fbfbE8908A5051B57b4C70) |


</TabItem>

</Tabs>

### Fees & Daily Limits

| Token             | Ethereum -> Gnosis | Gnosis -> Ethereum |
|-------------------|--------------------|--------------------|
| Approx. Gas Cost  |                    |                    |
| Bridge Fees       | 0%                 | 0%                 |
#### Single Transaction Limits

:::warning
Bridging DAI token to Gnosis Chain DOES NOT mint native xDai token. If you want native xDai, use the [xDai Bridge](xdai-bridge)
:::

| Token  | Ethereum -> Gnosis | Gnosis -> Ethereum  |
|--------|--------------------|---------------------|
| Dai*** | 1,000,000,000      | 1,000,000,000 WXDAI |
| USDC   | 1,000,000,000      | 10,000,000          |
| USDT   | 1,000,000,000      | 5,000,000           |
| WETH   | 1,000,000,000      | 250                 |
| WBTC   | 1,000,000,000      | 2                   |
| GNO    | 1,000,000,000      | 5,000               |


#### Daily Limits
| Token  | Ethereum -> Gnosis         | Gnosis -> Ethereum               |
|--------|----------------------------|----------------------------------|
| Dai*** | 1,000,000,000,000,000,000  | 1,000,000,000,000,000,000 xDai   |
| USDC   | 1,000,000,000,000,000,000  | 10,000,000                       |
| USDT   | 1,000,000,000,000,000,000  | 5,000,000                        |
| WETH   | 1,000,000,000,000,000,000  | 250                              |
| WBTC   | 1,000,000,000,000,000,000  | 2                                |
| GNO    | 1,000,000,000,000,000,000  | 5,000                            |

*** Bridging Dai Using Omnibridge

:::note
Daily Limit is reset according to the following logic: the smart contract stores total amount of processed tokens per current day and reverts on a new transfer if it exceeds the daily limit. Id of the day is calculated using the formula `timestamp / (number of seconds in 1 day)`, where `timestamp` is the Unix timestamp.
:::



### Bridge Validators
 
For a message/tokens to be relayed to another network, bridge validators need to affirm the transaction. Bridge validators are run by trusted members of the Gnosis community. Since Omnibridge is based on the Arbitrary Message Bridge functionality, the set of validators is the actual set of AMB validators. The [long-term roadmap](/bridges/roadmap) is to move towards [trustless bridges](/bridges/roadmap#trustless-bridges) using [zero-knowledge proofs from light clients](/bridges/roadmap#zero-knowledge-light-clients) or other trust-minimized techniques. The same [validator set](amb-bridge#bridge-validators) is used as the AMB bridge, as the OmniBridge is built on top of the AMB Bridge.

### Bridge Validator Flow

![](/img/bridges/diagrams/amb-bridge-validator-flow.png)

### Bridge Governance

* See [Bridge Governance](/bridges/governance)

### Bridge Revenue

The Omnibridge currently generates bridge revenue through [earned yield on stablecoin deposits](#interest-on-bridge-deposits), which is then used by the GnosisDAO treasury to fund Gnosis development. 
### Analytics

- [Dune Analytics: Omnibridge Stablecoins](https://dune.com/maxaleks/Omnibridge-Stablecoins)
- [Dune Analytics: Omnibridge](https://dune.com/maxaleks/Omnibridge)
- [Dune Analytics: Bridge Gas Fees](https://dune.com/maxaleks/Bridge-gas-fees)
- [Dune Analytics on Omnibridge Revenue](https://dune.com/maxaleks/Compounding-in-xDai-bridges)

## Bridge Design

###  Ethereum -> Gnosis 
![](/img/bridges/diagrams/token-bridge-01.png)
1. Token spend approval by user.
2. User call `relayTokens()` on Mediator contract. 
3. Mediator calls `requireToPassMessage()` on the Bridge.
4. `UserRequestForAffirmation` event is emitted for validators to validate the message. 
5. Message is relayed to the mediator contract when consensus is met by calling `executeAffirmation()`. 
6. ABM calls mediator on Gnosis chain:
    - token does not exist: the mediator deploys a new token registry and mints the relayed amount.
    - token exists: the relayed amount is minted in the token address.

---

###  Gnosis -> Ethereum. 
![](/img/bridges/diagrams/token-bridge-02.png)
1. User calls `transferAndCall` on ERC-677 token contract to send tokens to Omnibridge contract
2. `OnTokenTransfer` is called
3. Mediator contract burns tokens and calls bridge contract's `requireToPassMessage()` function.
4. `UseRequestForSignature` event is emitted for validators to validate the message.
5. Validators listen to the event: call `submitSignature` on Gnosis chain.
6. `CollectedSignatures` event is emitted when consensus is met.
7. User calls AMB (Ethereum side) `executeSignatures()`
8. ABM calls `handleBridgedTokens()` on Mediator. 
9. Mediator contract unlocks the tokens

The Omnibridge is built on top of the [Arbitrary Message Bridge](./amb-bridge.md).



### Mediator Contracts
To handle the approval of token transfers, the Omnibridge makes use of what is called a mediator contract. 
![](/img/bridges/diagrams/amb-bridge-contract-flow-mediator.svg)
1. User calls token contract's `approve()` function to approve the balance to be transferred.
2. `relayTokens()` is called on the Mediator contract
3. Mediator calls `transferFrom()` on the token contract, transferring the approved balance
4. If this is the first time that token is being bridged to the destination network, it will also query the token's name, symbol and decimals so a new contract can be deployed on the destination network
5. Mediator contract then calls `requireToPassMessage()` on the bridge contract

## Exceptions and Special Cases

While most tokens can be freely transferred between chains, there are several exceptions where token properties create bridge-related issues.  
* Bridge operations are disabled for Rebasing tokens.
* Inflationary tokens can still be bridged, but any accrued inflation IS NOT returned to the user upon bridge exit. 

### Rebasing Tokens
Rebasing tokens include an elastic function where supply can be increased or decreased at regular intervals. If these tokens are bridged, supply impacts could result in inequities on either side of the bridge. In some cases this could result in a bridge balance reduction and the inability for users to exit.
To prevent this, we have disabled bridging capability for rebasing type tokens. A partial token list is included below:

<details>
    <summary>Click to View List</summary>

| Name            | Symbol | Address                                    |
|-----------------|--------|--------------------------------------------|
| Base Protocol   | BASE   | 0x07150e919b4de5fd6a63de1f9384828396f25fdc |
| USDf            | USDf   | 0x05462671c05adc39a6521fa60d5e9443e9e9d2b9 |
| xBTC            | XBTC   | 0xecbf566944250dde88322581024e611419715f7a |
| Debase          | DEBASE | 0x9248c485b0b80f76da451f167a8db30f33c70907 |
| Coil            | COIL   | 0x3936ad01cf109a36489d93cabda11cf062fd3d48 |
| Dollars         | USDX   | 0x2f6081e3552b1c86ce4479b80062a1dda8ef23e3 |
| RMPL            | RMPL   | 0xe17f017475a709de58e976081eb916081ff4c9d5 |
| Rebased         | REB2   | 0x87f5f9ebe40786d49d35e1b5997b07ccaa8adbff |
| VELO Token      | VLO    | 0x98ad9b32dd10f8d8486927d846d4df8baf39abe2 |
| Tokens of Babel | TOB    | 0x7777770f8a6632ff043c8833310e245eba9209e6 |
| Rise Protocol   | RISE   | 0x3fa807b6f8d4c407e6e605368f4372d14658b38c |
| Soft Link       | SLINK  | 0x10bae51262490b4f4af41e12ed52a0e744c1137a |
| Ramifi Protocol | RAM    | 0xac6fe9aa6b996d15f23e2e9a384fe64607bba7d5 |
| GRPL Finance    | GRPL   | 0x15e4132dcd932e8990e794d1300011a472819cbd |
| Xdef Finance    | XDEF2  | 0x5166d4ce79b9bf7df477da110c560ce3045aa889 |
| Antiample       | XAMP   | 0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27 |

</details>

### Inflationary (Staking) Tokens
Inflationary tokens accrue additional value over time. While they are locked in the bridge contract this value will accrue, but will remain on the balance of the bridge upon exit. Inflation will not be returned to a user's balance. This maintains the 1 to 1 ratio of bridged tokens necessary for OmniBridge functionality.
Users are free to bridge these tokens but need to be aware that any accrued inflation will not be added to their balances. Usage of the accumulated inflation will be determined at a later time by bridge governors.
A partial token list of inflationary tokens is included below:  

<details>
    <summary>Click to View List</summary>

| Name                    | Symbol | Address                                    |
|-------------------------|--------|--------------------------------------------|
| Lido Staked Ether       | stETH  | 0xae7ab96520de3a18e5e111b5eaab095312d7fe84 |
| StakeHound Staked Ether | STETH  | 0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d |
| ankrETH                 | AETH   | 0xe95a203b1a91a908f9b9ce46459d101078c2c3cb |
| Cream ETH 2             | CRETH2 | 0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd |
| Binance ETH staking     | BETH   | 0x250632378e573c6be1ac2f97fcdf00515d0aa91b |

</details>

Additional References: 

* [GIP-31: Hardfork that removed `transferAfterCall` from Bridged Token methods](https://forum.gnosis.io/t/gip-31-should-gnosis-chain-perform-a-hardfork-to-upgrade-the-token-contract-vulnerable-to-the-reentrancy-attack/413) (also see [writeup](https://hackmd.io/@koal/SJiDiO0bc))

### Canonical Token Registries

- [Canonical Registry of Bridged Tokens from Ethereum](https://blockscout.com/xdai/mainnet/bridged-tokens/eth)
- [Canonical Registry of Bridged Tokens from Binance Smart Chain](https://blockscout.com/xdai/mainnet/bridged-tokens/bsc)

### Multiple Representations

In a multi-chain world, some assets (e.g. USDC) can be bridged over from different chains. This is because the two bridges create different representation of the token on Gnosis, even if the underlying asset is the same. 

For example, there are two different representations of USDC on Gnosis: 

| Asset              | Token Contract                                                                                                                       |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| USDC from Ethereum | [0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://blockscout.com/xdai/mainnet/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) |
| USDC from BSC      | [0xD10Cc63531a514BBa7789682E487Add1f15A51E2](https://blockscout.com/xdai/mainnet/address/0xD10Cc63531a514BBa7789682E487Add1f15A51E2) |

Gnosis adopts a naming convention where the "chain of origin" is added as a suffix to the token name (e.g. USDC from Ethereum, USDC from BSC)

### Interest on Bridge Deposits

The Omnibridge currently generates bridge revenue through yield on stablecoins deposited on the bridge, which is then used by the GnosisDAO treasury to fund Gnosis development. 

Currently, Stable Coins (USDC & USDT) locked in the OmniBridge contract are allocated to the Aave interest market. Locked funds will accumulate interest as well as COMP and AAVE tokens. These funds can then be used to support bridge operations.   
Compounding analytics are available in [Dune](https://dune.com/maxaleks/Omnibridge-Stablecoins)  

USDC:  `(Current Amount Locked - 2,500,000 USDC)` transferred to Aave. 2.5M is held in initial reserve.  
USDT:  `(Current Amount Locked - 750,000 USDT)` transferred to Aave. 750K is held in initial reserve.  

If the requested withdrawal amount exceeds the reserve balance, then the requested amount plus the initial reserve amount is requested to be withdrawn from Aave.
1. If the unlikely event isn't enough liquidity on Aave to fulfill the withdrawal request (likely due to high borrowing demand), then the user will have to wait until there is.
2. Aave is a trusted entity. If compromised, the protocol could attack the bridge in various ways, e.g. through reentrency or by stealing funds. 

## Managing the Bridge

Bridge administrators can perform 4 groups of operations with the xDai bridge. All operations are performed by owners of the Multisignature Wallet which requires several accounts to confirm the operation transaction. 

| Network     | Multisignature Wallet Address                                                                                          |
|-------------|------------------------------------------------------------------------------------------------------------------------|
| ETH Mainnet | [0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd](https://etherscan.io/address/0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd)  |
| Gnosis      | [0x0d3726e5a9f37234d6b55216fc971d30f150a60f](https://gnosisscan.io/address/0x0d3726e5a9f37234d6b55216fc971d30f150a60f) |

### Interacting with Bridge Contracts

1. One of the multisig wallet owners encodes the method call with a set of parameters (if any). For example, this can be done with the [ABI Encoding Service](https://abi.hashex.org/).
2. The encoded sequence of bytes is used to create a transaction for the multisig wallet contract. This is done with the `submitTransaction()` method of the multisig wallet contract. The method raises the event `Submission` containing the index of the registered transaction. The index is shared with the other owners of the wallet.
3. The rest of the owners confirm the transaction by invoking `confirmTransaction` from the multisig wallet contract. As soon as enough confirmations are received, the method encoded in step 1 is invoked automatically. This is important because adequate gas limits must be set for that transaction and for the set of confirmations sent by the wallet owner finalizing the operation.
4. If the method is not invoked because the gas limit is exceeded, the owners can execute the confirmed transaction manually by sending `executeTransaction()`.  
This process can vary depending on the action being taken.  

### Upgrading Bridge Contract
There are two possible scenarios for how the bridge or validators contracts can be upgraded:
* Security fix when only the contract implementation is changed
* Improvement when the contract implementation upgrade requires initialization of storage values.  

A more detailed explanation can be found on the [xDai Bridge page](./xdai-bridge.md). The steps are the same but the contract addresses differ. 

### Managing Bridge Validators

Bridge validators are separate from chain validators, and currently composed of a subset of Gnosis Chain validators. This is a dynamic set, as the bridge governors can vote to increase the current set as well as propose and vote on other bridge related measures.  
After a ballot is finalized, the new validator is added to the bridge management multisignature wallets (one on each side of the bridge).
The submitter will execute these methods: `addValidator` and (optionally if the voting threshold is to be changed) the `setRequiredSignatures` method. After encoding the data for each of these methods, it is sent to each contract (one on either side of the bridge) using the `submitTransaction()` execution method.

:::info
Before starting, current validators should determine:
1. Who will add the new validator (the submitter)
2. Coordinate a time when the other validators will confirm the transaction, as the bridge will be stopped to complete the upgrade.
3. Ask the Omnibridge team to add a new bridge validator to the Certifier contract and confirm it has been added. This enables the node to relay bridge transactions with zero gas price.
:::

* [TokenBridge Docs: Migrating Oracle to new Server](https://docs.tokenbridge.net/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server)

Additional steps for adding a validator can be found [here](https://github.com/gnosischain/documentation/issues/72)