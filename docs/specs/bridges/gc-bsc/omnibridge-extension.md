---
description: Full duplex bridge for ERC20-based tokens between BSC and xDai
---

# OmniBridge Extension

The OmniBridge multi-token extension for the Arbitrary Message Bridge between the Binance Smart Chain and the xDai chain is the simplest way to transfer **ANY** ERC20/ERC677/ERC827 token to and from the xDai chain.

By using this extension any user \(not only the token contract owner\) can transfer tokens in both directions: from BSC to xDai chain and from the xDai chain to BSC with fast, inexpensive transactions \(in this case the xDai chain\) without deploying any additional contracts. The specified token amount is locked in the mediator contract, a new token contract is deployed automatically on the BSC/xDai chain, and the requested token amount is minted on the xDai/BSC chain. The reverse operation burns bridged tokens on the xDai/BSC chain and unlocks the tokens from the token contract on another side of the bridge.

## OmniBridge technical information and extension parameters

* Mediator contract on BSC: [`0xF0b456250DC9990662a6F25808cC74A6d1131Ea9`](https://bscscan.com/address/0xF0b456250DC9990662a6F25808cC74A6d1131Ea9)
* Mediator contract on the xDai chain: [`0x59447362798334d3485c64D1e4870Fde2DDC0d75`](https://blockscout.com/xdai/mainnet/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75/transactions)\`\`

### Transfer limits 

Transfer limits are configured per a particular pair of tokens. 

**Default limits:**

Default limits to transfer assets **from Ethereum to the xDai chain**:

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

Default limits to transfer assets **from the xDai chain to Ethereum** 

* Daily limit: 10'000'000'001 tokens
* Maximum per transaction: 10'000'000'000 tokens
* Minimum per transaction: 0.0001 token

### Bridge operation fees

Fees are also configurable per a particular pair of tokens.

**Default fees:**

* There are no fees \(except gas fees for the originating transaction\) to transfer assets from the BSC to the xDai chain.
* The fee to transfer assets \(besides gas fees for the originating transaction\) from the xDai chain to BSC is **0.1%**.



