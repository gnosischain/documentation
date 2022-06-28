---
description: Full duplex bridge for ERC20-based tokens between BSC and xDai
---

# OmniBridge Extension

The OmniBridge multi-token extension for the Arbitrary Message Bridge between the Binance Smart Chain and the xDai chain is the simplest way to transfer **ANY** ERC20/ERC677/ERC827 token to and from the xDai chain.

:::info
* BSC-xDai isaccessed through the [OmniBridge UI](https://omni.xdaichain.com/bridge). Select BSC-xDai from the dropdown menu and set the MetaMask network to xDai or BSC to proceed.
* OmniBridge does not require a UI for functionality, and[ tokens can be transferred manually](manual-tokens-transfer.md).
* [Live Monitoring App](https://alm-bsc-xdai.herokuapp.com)
* Additional items may be referenced in the [ETH-xDai Omnibridge Extension ](../../eth-xdai-amb-bridge/multi-token-extension/)section.
:::

By using this extension any user (not only the token contract owner) can transfer tokens in both directions: from BSC to xDai and from the xDai chain to BSC with fast, inexpensive transactions and without deploying any additional contracts.

The specified token amount is locked in the mediator contract, a new token contract is deployed automatically on the BSC/xDai chain, and the requested token amount is minted on the xDai/BSC chain. The reverse operation burns bridged tokens on the xDai/BSC chain and unlocks the tokens from the token contract on another side of the bridge.

Note that tokens are appended with the name of the originating chain "from Ethereum" or "from xDai" when bridging. This can result in names such as "[STAKE on xDai on BSC](https://www.bscscan.com/token/0x24e5cf4a0577563d4e7761d14d53c8d0b504e337)" if tokens have been bridged from Ethereum to xDai and then to BSC for example.

## OmniBridge technical information and extension parameters

* Mediator contract on BSC: [`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9)
* Mediator contract on the xDai chain: [`0x59447362798334d3485c64D1e4870Fde2DDC0d75`](https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/transactions)``

### Transfer limits

Transfer limits are configured per a particular pair of tokens.

**Default limits:**

Default limits to transfer assets **from Ethereum to the xDai chain**:

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

Default limits to transfer assets **from the xDai chain to Ethereum **

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

### Bridge operation fees

Fees are also configurable per a particular pair of tokens.

**Default fees:**

* There are no fees (**except gas fees** for the originating transaction) to transfer assets from the BSC to the xDai chain.
* The fee to transfer assets (besides gas fees for the originating transaction) from the xDai chain to BSC is **0.1%**.

