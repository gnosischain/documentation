---
description: Full duplex bridge for ERC20-based tokens between BSC and GC
---

# OmniBridge Extension

The OmniBridge multi-token extension for the Arbitrary Message Bridge between the Binance Smart Chain and the Gnosis Chain is the simplest way to transfer **ANY** ERC20/ERC677/ERC827 token to and from the Gnosis Chain.

:::info
* BSC-GC isaccessed through the [OmniBridge UI](https://omni.xdaichain.com/bridge). Select BSC-GC from the dropdown menu and set the MetaMask network to GC or BSC to proceed.
* OmniBridge does not require a UI for functionality, and [tokens can be transferred manually](/specs/bridges/bsc-gc/extensions/omnibridge/manual-tokens-transfer).
* [Live Monitoring App](https://alm-bsc-xdai.herokuapp.com)
* Additional items may be referenced in the [ETH-GC Omnibridge Extension ](/specs/bridges/eth-gc/extensions/multi-token/)section.
:::

By using this extension any user (not only the token contract owner) can transfer tokens in both directions: from BSC to GC and from the Gnosis Chain to BSC with fast, inexpensive transactions and without deploying any additional contracts.

The specified token amount is locked in the mediator contract, a new token contract is deployed automatically on the BSC/Gnosis Chain, and the requested token amount is minted on the GC/BSC chain. The reverse operation burns bridged tokens on the GC/BSC chain and unlocks the tokens from the token contract on another side of the bridge.

Note that tokens are appended with the name of the originating chain "from Ethereum" or "from GC" when bridging. This can result in names such as "[STAKE on GC on BSC](https://www.bscscan.com/token/0x24e5cf4a0577563d4e7761d14d53c8d0b504e337)" if tokens have been bridged from Ethereum to GC and then to BSC for example.

## OmniBridge technical information and extension parameters

* Mediator contract on BSC: [`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9)
* Mediator contract on the Gnosis Chain: [`0x59447362798334d3485c64D1e4870Fde2DDC0d75`](https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/transactions)``

### Transfer limits

Transfer limits are configured per a particular pair of tokens.

**Default limits:**

Default limits to transfer assets **from Ethereum to the Gnosis Chain**:

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

Default limits to transfer assets **from the Gnosis Chain to Ethereum **

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

### Bridge operation fees

Fees are also configurable per a particular pair of tokens.

**Default fees:**

* There are no fees (**except gas fees** for the originating transaction) to transfer assets from the BSC to the Gnosis Chain.
* The fee to transfer assets (besides gas fees for the originating transaction) from the Gnosis Chain to BSC is **0.1%**.

