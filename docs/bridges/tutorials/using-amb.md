---
title: Using the AMB
description: How to use the Arbitrary Message Bridge
keywords:
  [amb bridge, arbitrary message bridge, using amb, bridge, gnosis bridge]
---

## Submitting AMB Confirmations Manually

### Ethereum <-> Gnosis Chain

The Arbitrary Message Bridge between the Ethereum Mainnet and Gnosis Chain requires a request-and-claim scheme to transfer data from Gnosis Chain, and some users and applications may want to use a manual process to gather the oracles confirmations and send them to the AMB contracts on the Ethereum side.

:::info
This approach is the equivalent of the set of actions performed by the [OmniBridge UI](https://omni.gnosischain.com/bridge) after pressing the "Claim" button, or by the [AMB Live Monitoring app](https://alm-bridge-monitor.gnosischain.com/) after pressing the "Execute" button.
:::
Below is the list of actions that can be executed in BlockScout and Etherscan, or, if you are familiar with the contract interaction through Web3 provider, it can be done by importing the contract's ABI to your application.

1. Find the first transaction which initiated message passing through the AMB bridge and go to the logs generated during the transaction execution. The `encodedData` argument emitted with the `UserRequestForSignature` event will be used in the next steps.
   ![](/img/bridges/amb_manualconfirmation_userRequestForSignature_encodedData.png)
2. Go to the [AMB helper contract](https://gnosisscan.io/address/0x7d94ece17e81355326e3359115D4B02411825EdD#readContract) and call `getSignatures()` there with the encoded data from the `UserRequestForSignature` event. It will produce a blob with signatures.
   ![](/img/bridges/amb_helper_getsignatures.png)
3. Pass the encoded data and the signatures to the [Arbitrary Message Bridge contract](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#writeProxyContract)'s `executeSignatures()` function on the Ethereum Mainnet and press the "Write" button to send the transaction.
   ![](/img/bridges/amb_eth_executeSignatures.png)

:::info
MetaMask will show a high gas estimate for this transaction. In most cases the final gas consumption will be significantly lower.
:::

### Goerli <-> Chiado

At the moment, the only way to use AMB between Goerli <-> is through a smart contract call.

The process of claiming the message from Chiado to Goerli works similarly to the mainnet, but with a different contract address.

| Contract                     | Address                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AMB Helper Contract (Chiado) | [0xEd0dC0AA8A61c3Ac912072f50c4c5bd830d79E36](https://gnosis-chiado.blockscout.com/address/0xEd0dC0AA8A61c3Ac912072f50c4c5bd830d79E36?tab=read_contract) |
| AMB bridge contract (Chiado) | [0x99ca51a3534785ed619f46a79c7ad65fa8d85e7a](https://gnosis-chiado.blockscout.com/address/0x99ca51a3534785ed619f46a79c7ad65fa8d85e7a?tab=contact_code)  |
| AMB bridge contract (Goerli) | [0x87A19d769D875964E9Cd41dDBfc397B2543764E6](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6#code)                       |

## Deploying custom ERC-20 Bridge

- [Tokenbridge Docs: Deploying custom token bridge on top of AMB](https://docs.tokenbridge.net/eth-xdai-amb-bridge/erc20-to-erc20-extension-linked-with-a-particular-token/deploy-erc20-erc677-erc827-to-erc677-amb-bridge-extension)
- [Tokenbridge Docs: Deplying a custom UI token bridge on top of AMB](https://docs.tokenbridge.net/eth-xdai-amb-bridge/erc20-to-erc20-extension-linked-with-a-particular-token/ui-to-transfer-tokens-through-amb)
