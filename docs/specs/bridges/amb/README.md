---
description: The AMB can be used to relay any data between chains
---

# Arbitrary Message Bridge

The Arbitrary Message Bridge (AMB) is designed to relay** any data** between two EVM-based chains. The originating contract encodes data in the form of an arbitrary method call, which can also include or exclude parameters. This information, along with the target contract address, is passed to the AMB contracts. As soon as data are relayed from chain A to chain B by the Arbitrary Message Bridge oracles, the bridge contract on side B passes the ABI-encoded method to the target contract.

## **AMB usage examples:**

* Transfer NFTs between two chains
* Trigger a method in one chain after some contract invocation in another chain
* Propagate tokens prices to another chain
* Transfer digital asset (native or ERC20 tokens) ownership similar to the generic TokenBridge
* Synchronize contracts states between two chains

AMB's universality means it can be used as a base layer for bridge and application construction. Once the bridge contracts are deployed and the corresponding validators are running the oracles, other applications can use them without the need to deploy their own infrastructure.

:::success
* Check out the [ETH-GC AMB](/specs/bridges/eth-gc/)section to view and try some live extensions.
* Learn about our new [multi-token extension](/specs/bridges/eth-gc/extensions/multi-token/), where an ERC20 on Ethereum is bridged and automatically created on Gnosis Chain!
:::

## AMB extensions

We have developed several AMB extensions. A brief description and links to the Github repos are below.

* [Arbitrary Message](https://github.com/poanetwork/tokenbridge-contracts/tree/master/contracts/upgradeable_contracts/arbitrary_message): Invoke Home/Foreign Bridge to send a message that will be executed on the other Network as an arbitrary contract method invocation.
* [ERC-to-ERC](https://github.com/poanetwork/tokenbridge-contracts/tree/master/contracts/upgradeable_contracts/amb_erc677_to_erc677) - an extension to transfer an ERC20 token linked with the extension to an ERC677 token on another chain.
* [ERC-to-Native](https://github.com/poanetwork/tokenbridge-contracts/tree/master/contracts/upgradeable_contracts/erc20_to_native) - an extension to transfer an ERC20 token on one chain to a native token on another chain. It works similarly to the xDai bridge.
* [CryptoKitties NFTs](https://github.com/poanetwork/cryptokitties-xdai-demo) - an extension prepared for demonstration purposes. It allows users to transfer CryptoKitties ERC721 tokens from the Ethereum Mainnet to the Gnosis Chain.

## Video Explainers

### AMB Overview with Igor Barinov - EthCC 2020

{@youtube: ybnf2tR9sZQ}

### AMB cross-chain transfers with Alex Kolotov - [NonCon 2020](https://noncon.org)

{@youtube: 3-2deK21Q14}

### AMB multi-token extension presentation at EDCON 2020

{@youtube: WMubACRjS_4}