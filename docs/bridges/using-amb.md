---
sidebar_position: 5
title: Build with Bridges using the AMB
description: How to use the Arbitrary Message Bridge
keywords:
  [amb bridge, arbitrary message bridge, using amb, bridge, gnosis bridge]
---

## Submitting AMB Confirmations Manually

### Between Ethereum and Gnosis Chain

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

## Deploying custom ERC-20 Bridge

- [Tokenbridge Docs: Deploying custom token bridge on top of AMB](https://github.com/tokenbridge/docs/blob/master/eth-xdai-amb-bridge/erc20-to-erc20-extension-linked-with-a-particular-token/deploy-erc20-erc677-erc827-to-erc677-amb-bridge-extension.md)
- [Tokenbridge Docs: Deplying a custom UI token bridge on top of AMB](hhttps://github.com/tokenbridge/docs/blob/master/eth-xdai-amb-bridge/erc20-to-erc20-extension-linked-with-a-particular-token/ui-to-transfer-tokens-through-amb.md)
