---
description: Instructions how to manually submit the oracles' confirmation to the BSC side
---

# Submit confirmations manually

The Arbitrary Message Bridge between the Binance Smart Chain and the Gnosis Chain requires a request-and-claim scheme to transfer data from the Gnosis Chain. This scheme requires at least two transactions to pass the message from the Gnosis Chain: one transaction to initiate the message transfer and a second to forward collected oracles' confirmations about the message transfer request to the contracts on BSC.

Some users and applications may want to use a manual process to gather the oracles confirmations and send them to the AMB contracts on the BSC side.

:::info
This approach is the equivalent of the set of actions performing by the [AMB Live Monitoring app](https://alm-bsc-xdai.herokuapp.com) after pressing the "Execute" button.
:::

Below is the list of actions that can be executed in BlockScout and Etherscan, or, if you are familiar with the contract interaction through a Web3 provider, it can be done by importing the contract's ABI to your application.

1. Find a transaction in [the BlockScout application](https://blockscout.com/xdai/mainnet)  which initiated message passing through the AMB bridge and go to the logs generated during the transaction execution. The `encodedData` argument emitted with the `UserRequestForSignature` event will be used in the next steps.

![](</img/specs/bridges/image-119.png>)

1. Go to [the AMB helper contract](https://blockscout.com/xdai/mainnet/address/0x68C69307a0975D2636fA9772c7633204648788A8/read-contract) and call `getSignatures` there with the encoded data from the `UserRequestForSignature` event. It will produce a blob with signatures.

![](</img/specs/bridges/image-120.png>)

1. Pass the encoded data and the signatures to the Arbitrary Message Bridge contract ([`0x05185872898b6f94AA600177EF41B9334B1FA48B`](https://bscscan.com/address/0x05185872898b6f94AA600177EF41B9334B1FA48B#writeProxyContract)) on the Binance Smart Chain and press the "Write" button to send the transaction.

![](</img/specs/bridges/image-121.png>)

:::warning
MetaMask will show a high gas estimate for this transaction. In most cases the final gas consumption will be significantly lower. Please refer to [the OmniBridge UI FAQ](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge#metamask-is-showing-very-high-fees-to-claim-a-transaction-on-ethereum-tokens-bridged-from-xdai-to-ethereum-is-this-estimate-accurate) to learn more. Although the FAQ is for the OmniBridge between Ethereum Mainnet and the Gnosis Chain the reason why MetaMask provides higher gas usage estimate is the same.
:::
