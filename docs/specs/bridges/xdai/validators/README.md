---
---

# Bridge Validators

Bridge validators are separate from chain validators, and currently composed of a subset of Gnosis Chain validators <[see below](#current-bridge-validators)>. This is a dynamic set, as the [bridge governors](/governance/bridge) can vote to increase the current set as well as propose and vote on other bridge related measures.

Organizations are represented by an individual within that organization who is responsible for node operation & validation duties and/or participation in governance.

:::info
**Instructions for Bridge Validators**

* [New Node Setup](/specs/bridges/xdai/validators/node-setup)
* [Adding a New Validator](/specs/bridges/xdai/validators/add)
* [Bridge Contracts Management](/specs/bridges/xdai/contracts-management)
:::

## Bridge Validator Management Contracts

The following proxy contracts are used to manage the validator set. There are deployments on both sides of the bridge (Ethereum and Gnosis Chain).

| | xDai Bridge | AMB OmniBridge |
| - | - | - |
| Gnosis Chain | ``[`0xb289f0e6fbdff8eee340498a56e1787b303f1b6d`](https://blockscout.com/xdai/mainnet/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)`` | ``[`0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008`](https://blockscout.com/xdai/mainnet/address/0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008/read-proxy)`` |
| Ethereum     | ``[`0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E`](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)``                      | ``[`0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064`](https://etherscan.io/address/0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064#readProxyContract)``         |

## Current Bridge Validators

Bridge transaction execution currently requires signatures from 4 of 6 validators.

### AMB OmniBridge

| 0x Address                                 | Organization |
| ------------------------------------------ | ------------ |
| 0x459A3bd49F1ff109bc90b76125533699AaAAf9A6 | Protofire    |
| 0x105CD22eD3D089Bf5589C59b452f9dE0796Ca52d | Giveth       |
| 0x19aC7c69e5F1AC95b8d49b30Cbb79e81f1ab0dba | Syncnode     |
| 0x9adB7385B598843c36Fa057e45BC70542516E35d | GnosisDAO    |
| 0x13F3912ea00878cdB63EE5F02cF8Ab65988efd2a | Cow Protocol |
| 0x5333588897CE6DE00031dC30CD2d6881e5C517Fb | Gnosis Safe  |

### xDai TokenBridge

| 0x Address                                 | Organization |
| ------------------------------------------ | ------------ |
| 0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506 | Giveth       |
| 0x4d1c96b9a49c4469a0b720a22b74b034eddfe051 | Protofire    |
| 0xfe24cfb2f8872e9ed097c451de065a9f6048915b | Syncnode     |
| 0x32e6C5e2132792B407424EBa19e48668Ebf80B14 | GnosisDAO    |
| 0xF81A2768BEDB8Ab805A2DF5Fb7D58685C224b9b6 | CowProtocol  |
| 0xebd33d099Dd31D32923f0A033Df6F7FC264Ef214 | GnosisSafe   |

