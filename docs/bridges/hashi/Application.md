# Application

You can build your application on top of Hashi and secured by Hashi. If you have any question, please reach out to [Gnosis Chain discord](https://discord.gg/gnosischain) - #hashi channel

:::info
The applications below are still WIP. It is only for demo purpose.
:::

## Safe on Hashi

Cross-chain transaction using Safe can be a painful experience. The current approach is to set up Safe individually on each chain, and these Safes are independent of each other. There are [discussions](https://forum.safe.global/t/how-can-a-safe-hold-asset-on-multiple-chains/2242) about how to hold assets on multiple chains and this project aims to tackle the issue by leveraging the security provided by Hashi.
In this project, two kinds of approaches are demonstrated: Push and Pull flow.

### Push flow

In push flow, a cross-chain transaction is initiated by Safe from source chain (Goerli), and claimed by Safe from destination chain (Gnosis Chain).
Goerli's Safe calls [Yaho](https://github.com/gnosis/hashi/blob/main/packages/evm/contracts/Yaho.sol) contract to bundle the transaction and relay the message to bridge. Once the message is relayed to Gnosis Chain, it will be stored in Adapter(s) contract. With messageId and message, any user or Safe from Gnosis Chain can call [Yaru](https://github.com/gnosis/hashi/blob/main/packages/evm/contracts/Yaru.sol) to claim the transaction.

Push flow utilizes the same logic as [message dispatching using Yaru and Yaho](#message-dispatching-using-yaho-and-yaru).

![](../../../static/img/bridges/hashi/SafeOnHashi-PushFlow.png)

Check out the demo video for more details: https://youtu.be/vXuffnJCcTM

### Pull flow

In pull flow, data is being read from time to time on the source chain (Goerli).
A scenario is tested: an owner from Goerli's Safe (which is not the owner from Gnosis Chain's Safe) is able to create a transaction for GC Safe, even though it is not the owner for GC Safe. The security of pull flow relies on: block header provided by ShoyuBashi and proof provided by [eth_getProof](https://docs.alchemy.com/reference/eth-getproof) API from Goerli node. The proof is verified by an off-chain verifier at the current version.

![](../../../static/img/bridges/hashi/SafeOnHashi-PullFlow.png)

Check out the demo video for more details: https://youtu.be/g-vRKNFmQXc

### Reference

1. [Safe on Hashi App](https://github.com/zengzengzenghuy/Safe-on-Hashi-App)

## Adapters Dashboard

The adapters dashboard shows the latest Goerli block numbers that the respective block hashes has been stored by Hashi adapters on Gnosis Chain. Once the threshold has been reached (2 out of 4 adapters has stored the same block hash), the block hash is considered valid.

https://hashiadapters-dashboard-tvw47.ondigitalocean.app/

![](../../../static/img/bridges/hashi/AdaptersDashboard1.png)
![](../../../static/img/bridges/hashi/AdaptersDashboard2.png)

## Message Dispatching using Yaho and Yaru

For relaying message between Ethereum/Goerli and Gnosis Chain, several contracts need to be deployed on top of the [current AMB deployments](https://docs.gnosischain.com/bridges/hashi/#goerli---gnosis-chain): Yaho, Yaru, AMB Message Relay, AMB Adapter, and Hashi.
The addresses from this article are for Goerli <-> Gnosis Chain.

\*\* In the current deployment, `gas` is added as a parameter in `dispatchMessagesToAdapters()` to justify the [amb's gas requirement](https://github.com/gnosischain/tokenbridge-contracts/blob/master/contracts/upgradeable_contracts/arbitrary_message/MessageDelivery.sol#L40). It is not added into the official hashi code at the moment as [it might raise incompatibility issue for other adapters](https://github.com/gnosis/hashi/pull/19#discussion_r1278769527). Please be aware that these contracts might be changed anytime.

### Goerli -> Gnosis Chain

| Contract                      | Address                                                                                                                      | Chain  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| Yaho                          | [0x2fcbfd5bef7c94b77cf920fcc5e76d908a52bccc](https://goerli.etherscan.io/address/0x2fcbfd5bef7c94b77cf920fcc5e76d908a52bccc) | Goerli |
| AMB Message Relay             | [0xb01faaf162732752b24646c7475c445cceceb8a1](https://goerli.etherscan.io/address/0xb01faaf162732752b24646c7475c445cceceb8a1) | Goerli |
| AMB Adapter for Message Relay | [0xe30606a7C2C0Cca6ddE1785cDE999494F164bC4a ](https://gnosisscan.io/address/0xe30606a7C2C0Cca6ddE1785cDE999494F164bC4a#code) | GC     |
| Yaru                          | [0xb935Ce12B701d62caB5dE4a58f5A59559b50b3A2](https://gnosisscan.io/address/0xb935Ce12B701d62caB5dE4a58f5A59559b50b3A2#code)  | GC     |

### Workflow

![](https://hackmd.io/_uploads/Bk0Gd1Bi2.png)

1. User calls `Yaho.dispatchMessagesToAdapters`. [Example](https://goerli.etherscan.io/tx/0x659145934c8eeff82a574d2e8bcb1cf8edd67bef24b69c22906ddfd250287f7f)
2. Yaho calls AMB Message Relay `relayMessages` which will eventually calls `storeHashes` from AMB Adapter on Gnosis Chain.
3. AMB Message Relay calls AMB `requireToPassMessage`, and the message will be relayed to AMB on Gnosis Chain.
4. Once the AMB Adapter `storeHashes` is called, `MessageDispatched` event will be emitted and user need `messageId` data from the event. [Example](https://gnosisscan.io/tx/0x3c1355dea3c1afc3d01b3d9667a22c3d0d2dbe1c2c9a5dc95a7fa0625960468c/advanced#eventlog)
5. User calls `Yaru.executeMessages` with `messageId` and `message` as parameters. [Example](https://gnosisscan.io/tx/0x81ba4eba5108bfa974a168d2aa533f8b682a99e3f4bbbf9b7e7cd1c1d994f17b)

### Gnosis Chain -> Goerli

| Contract                      | Address                                                                                                                             | Chain  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Yaho                          | [0x75fF4Bad26345a5b15CCae256900640373EBA601](0x75fF4Bad26345a5b15CCae256900640373EBA601)                                            | GC     |
| AMB Message Relay             | [0x4A25E5374D8df553A1f2ebB628635F826379E4e9](https://gnosisscan.io/address/0x4A25E5374D8df553A1f2ebB628635F826379E4e9#readContract) | GC     |
| AMB Helper                    | [0xc7118ecF785871F08Feff5DE07d5F884b6199477](https://gnosisscan.io/address/0xc7118ecF785871F08Feff5DE07d5F884b6199477#readContract) | GC     |
| AMB Adapter for Message Relay | [0xE46610b72d0782029C5654C9224D99264D4B8fa0](https://goerli.etherscan.io/address/0xe46610b72d0782029c5654c9224d99264d4b8fa0)        | Goerli |
| Yaru                          | [0x15d5678FF44883444264f7947c1c5C31d07b4482](https://goerli.etherscan.io/address/0x15d5678FF44883444264f7947c1c5C31d07b4482)        | Goerli |
| Hashi                         | [0x6a948572432818DeBbb04A0b82b6c12ec5Ca15B5](https://goerli.etherscan.io/address/0x6a948572432818DeBbb04A0b82b6c12ec5Ca15B5)        | Goerli |

### Workflow

![](https://hackmd.io/_uploads/HyZ7u1rj2.png)

1. User calls `Yaho.dispatchMessagesToAdapters`. [Example](https://gnosis.blockscout.com/tx/0x2621ab8e7666645e347a017032e1dbb65459c13a9cff152ca8e35dcbb46eb699?tab=index)
2. Yaho calls AMB Message Relay `relayMessages` which will eventually calls `storeHashes` from AMB Adapter on Gnosis Chain.
3. AMB Message Relay calls AMB `requireToPassMessage`, and `UserRequestsForSignature` event will be emitted.
4. User calls AMB Helper contract's `getSignature` with the `encodedData` as parameters obtained from step3, the function will return signature.[Tutorial](https://docs.gnosischain.com/bridges/tutorials/using-amb#submitting-amb-confirmations-manually)
5. User calls AMB on Goerli's `executeSignature` with `encodedData` and `signature` as parameters. The `storeHashes` from AMB Adapter will be called, `MessageDispatched` event will be emitted and user need `messageId` data from the event. [Example](https://goerli.etherscan.io/tx/0xb5d71b13a07e206ad553ac0695e3e26c3ef19a97c561a0d7e284eae9b6fb2597)
6. User calls `Yaru.executeMessages` with `messageId` and `message` as parameters. [Example](https://goerli.etherscan.io/tx/0xd08ab3ca71bc4c349cb4f9ddf93b4ffb478836f88f57a177ff64fe45d33b4b15)
