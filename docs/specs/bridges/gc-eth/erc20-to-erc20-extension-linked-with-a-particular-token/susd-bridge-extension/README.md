---
description: Description of the AMB bridge extension allowing for sUSD token transfer
---

# sUSD bridge extension

The sUSD bridge extension of the ETH-xDai Arbitrary Message Bridge is a pair of mediator contracts (similar to the ones used [here](https://docs.tokenbridge.net/amb-bridge/erc677-to-erc677-bridge-on-top-of-amb)) allowing the user to transfer [Synth sUSD](https://etherscan.io/token/0x57ab1e02fee23774580c119740129eac7081e9d3) from the Ethereum Mainnet to the xDai chain and back.

* Mediator contract at Ethereum Mainnet:
  * [`0x71F12d03E1711cb96E11E1A5c12Da7466699Db8D`](https://etherscan.io/address/0x71F12d03E1711cb96E11E1A5c12Da7466699Db8D)
* Mediator contract at xDai chain:
  * [`0xD9a3039cfC70aF84AC9E566A2526fD3b683B995B`](https://blockscout.com/xdai/mainnet/address/0xd9a3039cfc70af84ac9e566a2526fd3b683b995b/transactions)

This extension was deployed to demonstrate a working model of the ETH-xDai AMB. Anyone who owns sUSD tokens can use the bridge - sUSDs are locked in the bridge contract and the same amount of [sUSD bridgeable tokens](https://blockscout.com/xdai/mainnet/address/0x4c36d2919e407f0cc2ee3c993ccf8ac26d9ce64e) are minted on the xDai chain. The reverse operation burns sUSD bridgeable tokens on the xDai chain and unlock Synth sUSD tokens on the Ethereum Mainnet.

{% hint style="success" %}
Follow the step-by-step instructions to [Transfer sUSD through the bridge extension.](transfer-susd-through-the-bridge-extension.md)
{% endhint %}
