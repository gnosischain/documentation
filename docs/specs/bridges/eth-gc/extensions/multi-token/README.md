---
description: Using OmniBridge to bridge ANY ERC20-type token to the Gnosis Chain
---

# OmniBridge Extension

The OmniBridge multi-token extension for the Arbitrary Message Bridge between Ethereum and the Gnosis Chain is the simplest way to transfer **ANY** ERC20/ERC677/ERC827 token to the Gnosis Chain.

:::info
An AMB bridge extension is a pair of mediator contracts associated with a specific pair of Arbitrary Message Bridge contracts.

:::

:::success
* List of the tokens already bridged through the extension is available [here](/specs/bridges/eth-gc/extensions/multi-token/the-bridged-tokens-list)
* [OmniBridge UI](https://omni.gnosischain.com/)
* Follow the [How to transfer tokens](/specs/bridges/eth-gc/extensions/multi-token/how-to-transfer-tokens) section to perform operations
* [Security Audit Completed](/specs/security-audit#tokenbridge-audit-by-quantstamp-covers-omnibridge).
:::

By using this extension any user (not only the token contract owner) can transfer tokens from Ethereum to a chain with fast, inexpensive transactions (in this case the Gnosis Chain) without deploying any additional contracts. The specified token amount is locked in the mediator contract, a new token contract is deployed automatically on the Gnosis Chain, and the requested token amount is minted on the Gnosis Chain. The reverse operation burns bridgeable tokens on the Gnosis Chain and unlocks the tokens from the token contract on Ethereum.

:::info
More details for the operations to deposit and withdraw tokens are available [here.](/specs/bridges/eth-gc/extensions/multi-token/extension-internals)

General FAQs are located here: [https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge](https://www.xdaichain.com/about-xdai/faqs/bridges-xdai-bridge-and-omnibridge)
:::

{@youtube: WMubACRjS_4}

## OmniBridge technical information and extension parameters

* Mediator contract on Ethereum: [`0x88ad09518695c6c3712AC10a214bE5109a655671`](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671)
* Mediator contract on the Gnosis Chain: [`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`](https://blockscout.com/xdai/mainnet/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d)

### Transfer limits

Transfer limits are configured per a particular pair of tokens.

**Default limits:**

Default limits to transfer assets **from Ethereum to the Gnosis Chain**:

* Daily limit: 1'000'000'000'000'000'000 tokens
* Maximum per transaction: 1'000'000'000 tokens
* Minimum per transaction: 0.0001 token

Default limits to transfer assets **from the Gnosis Chain to Ethereum**

* Daily limit: 1'000'000'000'000'000'000 tokens
* Maximum per transaction: 1'000'000'000 tokens
* Minimum per transaction: 1 token

### Bridge operation fees

Fees are also configurable per a particular pair of tokens.

**Default fees:**

* There are no fees (except gas fees for the originating transaction) to transfer assets from the Ethereum to the Gnosis Chain.
* The fee to transfer assets (besides gas fees for the originating transaction) from the Gnosis Chain to Ethereum is **0.1%**.
