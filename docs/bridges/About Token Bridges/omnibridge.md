---
title: Omnibridge
sidebar_position: 1
description: Omnibridge a native token bridge that mints the canonical representations of bridged assets on Gnosis
keywords: [omnibridge, token bridge, token claim]
---

# Omnibridge

:::info
The Omnibride can be used in https://bridge.gnosischain.com/.  
Please avoid using the legacy Omnibridge: https://omni.legacy.gnosischain.com/bridge
:::

## Key Information

[Omnibridge](https://bridge.gnosischain.com/) is a native token bridge that mints the canonical representations of bridged assets on Gnosis. The Omnibridge is built on top of the [Arbitrary Message Bridge (AMB)](../About%20Token%20Bridges/amb-bridge.md) and thus relies on the same group of [bridge validators](../About%20Token%20Bridges/amb-bridge#bridge-validators) and trust model as the AMB.

The Omnibridge currently connects Gnosis to Ethereum.

The Omnibridge mints bridged tokens using a variant of the [ERC-677](https://github.com/ethereum/EIPs/issues/677) token standard, with all bridged tokens tracked in the [canonical Bridged Token Registries](#canonical-token-registries).

### Overview

|                       | Detail                                                |
| --------------------- | ----------------------------------------------------- |
| Frontend URL          | https://bridge.gnosischain.com/                       |
| Trust Model           | [4-of-7 Validator Multisig](#bridge-validators)       |
| Governance            | [8-of-16 Multisig](#bridge-governance)                |
| Governance Parameters | Validator Set, Daily Limits, Fees                     |
| Bug Bounty            | [up to $2m](https://immunefi.com/bounty/gnosischain/) |
| Bug Reporting         | [Immunefi](https://immunefi.com/bounty/gnosischain/)  |

### Key Contracts

<Tabs>
<TabItem value="ethereum" label="Ethereum">

### Ethereum

| Contract                              | Ethereum Address                                                                                                                         |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| AMB Proxy Contract (Foreign)          | [0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#writeProxyContract) |
| Omnibridge Multi-Token Mediator Proxy | [0x88ad09518695c6c3712AC10a214bE5109a655671](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671#writeProxyContract) |
| Validator Management Contract         | [0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064](https://etherscan.io/address/0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064#writeProxyContract) |

</TabItem>
<TabItem value="gnosis" label="Gnosis">

### Gnosis

| Contract                              | Gnosis Address                                                                                                                            |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AMB Proxy Contract (Home)             | [0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59](https://gnosisscan.io/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59#writeProxyContract) |
| Omnibridge Multi-Token Mediator Proxy | [0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d#writeProxyContract) |
| Validator Management Contract         | [0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008](https://gnosisscan.io/address/0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008#writeContract)      |

</TabItem>

<TabItem value="sepolia-chiado" label="Sepolia-Chiado">

### Sepolia - Chiaado

| Contract                     | Address                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Omnibrdge (Sepolia)          | [0x63e47c5e3303dddcaf3b404b1ccf9eb633652e9e](https://sepolia.etherscan.io/address/0x63e47c5e3303dddcaf3b404b1ccf9eb633652e9e)         |
| AMB (Sepolia)                | [0xf2546d6648bd2af6a008a7e7c1542bb240329e11](https://sepolia.etherscan.io/address/0xf2546d6648bd2af6a008a7e7c1542bb240329e11)         |
| Validator Contract (Sepolia) | [0xa0bd95dd2570632c8640ab5bc213f3a0ea33e26a](https://sepolia.etherscan.io/address/0xa0bd95dd2570632c8640ab5bc213f3a0ea33e26a)         |
| Omnibridge (Chiado)          | [0x82f63B9730f419CbfEEF10d58a522203838d74c8](https://gnosis-chiado.blockscout.com/address/0x82f63B9730f419CbfEEF10d58a522203838d74c8) |
| AMB (Chiado)                 | [0x8448E15d0e706C0298dECA99F0b4744030e59d7d](https://gnosis-chiado.blockscout.com/address/0x8448E15d0e706C0298dECA99F0b4744030e59d7d) |
| Validator Contract (Chiado)  | [0x9e8a89ebcb83065eaaf4b7ff720caa5e6b25c976](https://gnosis-chiado.blockscout.com/address/0x9e8a89ebcb83065eaaf4b7ff720caa5e6b25c976) |

</TabItem>

</Tabs>

### Fees & Daily Limits

| Token               | Ethereum -> Gnosis | Gnosis -> Ethereum |
| ------------------- | ------------------ | ------------------ |
| Default Bridge Fees | 0%                 | 0.1%               |

```mdx-code-block
<details>
  <summary>Fees and transaction limits of specific token</summary>
  <div>
```

#### Single Transaction Limits

:::warning
Bridging DAI token to Gnosis Chain DOES NOT mint native xDai token. If you want native xDai, use the [xDai Bridge](xdai-bridge)
:::

| Token     | Ethereum -> Gnosis | Gnosis -> Ethereum  |
| --------- | ------------------ | ------------------- |
| Dai\*\*\* | 1,000,000,000      | 1,000,000,000 WXDAI |
| USDC      | 1,000,000,000      | 10,000,000          |
| USDT      | 1,000,000,000      | 5,000,000           |
| WETH      | 690                | 690                 |
| WBTC      | 12                 | 12                  |
| GNO       | 18350              | 18350               |
| GIV       | 60000000           | 60000000            |
| CLNY      | 14000000           | 14000000            |
| DXD       | 1000               | 1000                |
| HOPR      | 7000000            | 7000000             |
| HAUS      | 120000             | 120000              |

#### Daily Limits

| Token     | Ethereum -> Gnosis        | Gnosis -> Ethereum             |
| --------- | ------------------------- | ------------------------------ |
| Dai\*\*\* | 1,000,000,000,000,000,000 | 1,000,000,000,000,000,000 xDai |
| USDC      | 1,000,000,000,000,000,000 | 10,000,000                     |
| USDT      | 1,000,000,000,000,000,000 | 5,000,000                      |
| WETH      | 690                       | 690                            |
| WBTC      | 12.00000001               | 12.00000001                    |
| GNO       | 18350                     | 18350                          |
| GIV       | 60000000                  | 60000000                       |
| CLNY      | 14000000                  | 14000000                       |
| DXD       | 1000                      | 1000                           |
| HOPR      | 7000000                   | 7000000                        |
| HAUS      | 120000                    | 120000                         |

\*\*\* Bridging Dai Using Omnibridge

:::note
Daily Limit is reset according to the following logic: the smart contract stores total amount of processed tokens per current day and reverts on a new transfer if it exceeds the daily limit. Id of the day is calculated using the formula `timestamp / (number of seconds in 1 day)`, where `timestamp` is the Unix timestamp.
:::

```mdx-code-block
  </div>
</details>
```

### Bridge Validators

- See [Bridge Validator](../management/validators#amb--omnibridge)

### Bridge Governance

- See [Bridge Governance](../management/README.md)

## How it works

### Ethereum -> Gnosis

![](/img/bridges/diagrams/token-bridge-01.png)

1. User `approve` Omnibridge as token spender.
2. User call `relayTokens()` on Mediator contract.
3. Mediator calls `requireToPassMessage()` on the Bridge.
4. `UserRequestForAffirmation` event is emitted for validators to validate the message.
5. Message is relayed to the mediator contract when consensus is met by calling `executeAffirmation()`.
6. ABM calls mediator on Gnosis chain:
   - token does not exist: the mediator deploys a new token registry and mints the relayed amount.
   - token exists: the relayed amount is minted in the token address.

---

### Gnosis -> Ethereum.

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

## Exceptions and Special Cases

While most tokens can be freely transferred between chains, there are several exceptions where token properties create bridge-related issues.

- Bridge operations are disabled for Rebasing tokens.
- Inflationary tokens can still be bridged, but any accrued inflation IS NOT returned to the user upon bridge exit.

### Rebasing Tokens

Rebasing tokens include an elastic function where supply can be increased or decreased at regular intervals. If these tokens are bridged, supply impacts could result in inequities on either side of the bridge. In some cases this could result in a bridge balance reduction and the inability for users to exit.
To prevent this, we have disabled bridging capability for rebasing type tokens. A partial token list is included below:

<details>
    <summary>Click to View List</summary>

| Name            | Symbol | Address                                    |
| --------------- | ------ | ------------------------------------------ |
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
| ----------------------- | ------ | ------------------------------------------ |
| Lido Staked Ether       | stETH  | 0xae7ab96520de3a18e5e111b5eaab095312d7fe84 |
| StakeHound Staked Ether | STETH  | 0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d |
| ankrETH                 | AETH   | 0xe95a203b1a91a908f9b9ce46459d101078c2c3cb |
| Cream ETH 2             | CRETH2 | 0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd |
| Binance ETH staking     | BETH   | 0x250632378e573c6be1ac2f97fcdf00515d0aa91b |

</details>

Additional References:

- [GIP-31: Hardfork that removed `transferAfterCall` from Bridged Token methods](https://forum.gnosis.io/t/gip-31-should-gnosis-chain-perform-a-hardfork-to-upgrade-the-token-contract-vulnerable-to-the-reentrancy-attack/413) (also see [writeup](https://hackmd.io/@koal/SJiDiO0bc))

### Canonical Token Registries

- [Canonical Bridged Tokens](https://gnosis.blockscout.com/tokens?tab=bridged)
- Select the origin chain by using **Filter** option.

### Multiple Representations

In a multi-chain world, some assets (e.g. USDC) can be bridged over from different chains. This is because the two bridges create different representation of the token on Gnosis, even if the underlying asset is the same.

For example, there are two different representations of USDC on Gnosis(created by Omnibridge, it follows ERC677 standard):

| Asset              | Token Contract                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| USDC from Ethereum | [0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83](https://gnosis.blockscout.com/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) |
| USDC from BSC      | [0xD10Cc63531a514BBa7789682E487Add1f15A51E2](https://gnosis.blockscout.com/address/0xD10Cc63531a514BBa7789682E487Add1f15A51E2) |

Gnosis adopts a naming convention where the "chain of origin" is added as a suffix to the token name (e.g. USDC from Ethereum, USDC from BSC)

### USDC.e: A USDC token on Gnosis Chain that complies with Circle standard

:::info  
When using [Bridge UI](https://bridge.gnosischain.com/):  
Bridging from Ethereum, users bridge [USDC](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) and get [USDC.e](https://gnosisscan.io/address/0x2a22f9c3b484c3629090feed35f17ff8f88f76f0).  
Bridging from Gnosis Chain, users bridge [USDC on xDAI](https://gnosisscan.io/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83) and get [USDC](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48).  
Use [USDC swap](https://bridge.gnosischain.com/usdc) to swap between USDC.e and USDC on xDAI
:::

USDC.e is a token compliant with the [Circle's Bridged USDC Standard](https://github.com/circlefin/stablecoin-evm/blob/master/doc/bridged_USDC_standard.md). To ensure smooth bridging operations, when using [Bridge UI](https://bridge.gnosischain.com/) to bridge [USDC](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) from Ethereum, user will get [USDC.e](https://gnosisscan.io/address/0x2a22f9c3b484c3629090feed35f17ff8f88f76f0) by default.

1. Bridging from ETH:  
   a. Select **Ethereum** as source chain and **USDC** as token to bridge, you will get the equivalent amount of USDC.e on Gnosis Chain. (If you wish to get the [USDC on xDAI (old USDC)](https://gnosis.blockscout.com/address/0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83), you may use the [USDC swap](https://bridge.gnosischain.com/usdc) in the Bridge UI to swap your USDC.e to USDC(old), and vice versa)
2. Bridging from GC:  
   a. Select **Gnosis Chain** as source chain and **USDC.e** as token, is not allowed, user need to swap their **USDC.e** to **USDC on xDAI(old USDC)** on the [USDC swap](https://bridge.gnosischain.com/usdc).  
   b. Select **Gnosis Chain** as source chain and **USDC on xDAI (old USDC)** as token, and claim their USDC on Ethereum.

For more detail, check out [this twitter post](https://x.com/gnosischain/status/1800565095065641409).
