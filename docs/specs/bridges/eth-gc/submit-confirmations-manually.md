---
description: >-
  Instructions how to manually submit the oracles' confirmation to the Ethereum
  side
---

# Submit confirmations manually

The Arbitrary Message Bridge between the Ethereum Mainnet and the Gnosis Chain [now requires a request-and-claim scheme to transfer data from the Gnosis Chain](https://forum.poa.network/t/request-and-claim-to-transfer-assets-from-xdai-chain/4495), and some users and applications may want to use a manual process to gather the oracles confirmations and send them to the AMB contracts on the Mainnet side.

:::info
This approach is the equivalent of the set of actions performing by [the OmniBridge UI](https://www.xdaichain.com/for-users/omnibridge) after pressing the "Claim" button, or by the [AMB Live Monitoring app](https://alm-xdai.herokuapp.com) after pressing the "Execute" button.
:::

Below is the list of actions that can be executed in BlockScout and Etherscan, or, if you are familiar with the contract interaction through Web3 provider, it can be done by importing the contract's ABI to your application.

1. Find the first transaction which initiated message passing through the AMB bridge and go to the logs generated during the transaction execution. The `encodedData` argument emitted with the `UserRequestForSignature` event will be used in the next steps.

![In this example we use BlockScout on the GC side.](</img/specs/bridges/image-102.png>)

1. Go to [the AMB helper contract](https://blockscout.com/xdai/mainnet/address/0x7d94ece17e81355326e3359115D4B02411825EdD/read-contract) and call `getSignatures` there with the encoded data from the `UserRequestForSignature` event. It will produce a blob with signatures.

![](</img/specs/bridges/image-94.png>)

1. Pass the encoded data and the signatures to the Arbitrary Message Bridge contract ([`0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e`](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#writeProxyContract)) on the Ethereum Mainnet and press the "Write" button to send the transaction.

![Using Etherscan to Write to the AMB contract on Ethereum ](</img/specs/bridges/image-95.png>)

:::warning
MetaMask will show a high gas estimate for this transaction. In most cases the final gas consumption will be significantly lower. Please refer to [the OmniBridge UI FAQ](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge#metamask-is-showing-very-high-fees-to-claim-a-transaction-on-ethereum-tokens-bridged-from-xdai-to-ethereum-is-this-estimate-accurate) to learn more.

