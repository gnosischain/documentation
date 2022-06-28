---
description: Description of the AMB bridge extension allowing for GEN token transfer
---

# GEN-xGEN bridge extension

The GEN-xGEN bridge extension of the ETH-xDai Arbitrary Message Bridge is a pair of mediator contracts \(similar to the ones used [here](https://docs.tokenbridge.net/amb-bridge/erc677-to-erc677-bridge-on-top-of-amb)\) allowing the user to transfer [DAOstack](https://daostack.io/) from the Ethereum Mainnet to the xDai chain and back.

* Mediator contract at Ethereum Mainnet:
  * \`\`[`0x6eA6C65E14661C0BcaB5bc862fE5E7D3B5630C2F`](https://etherscan.io/address/0x6eA6C65E14661C0BcaB5bc862fE5E7D3B5630C2F)\`\`
* Mediator contract at xDai chain:
  * \`\`[`0xe47097ceF3B0bcbb0095A21523714bF0022E2DB8`](https://blockscout.com/xdai/mainnet/address/0xe47097ceF3B0bcbb0095A21523714bF0022E2DB8/transactions)\`\`

Anyone who owns [GEN](https://etherscan.io/token/0x543ff227f64aa17ea132bf9886cab5db55dcaddf) tokens can use the bridge - GENs are locked in the bridge contract and the same amount of xGEN are minted on the xDai chain. The reverse operation burns xGEN bridgeable tokens on the xDai chain and unlock GEN tokens on the Ethereum Mainnet.

On the testing phase of the extension the interim xGEN token is being used. The token contract address is [`0x3e12081dd66a3600fc0a2e6cc9e6b5b3b8f037f6`](https://blockscout.com/xdai/mainnet/tokens/0x3e12081dd66a3600fc0a2e6cc9e6b5b3b8f037f6/token_transfers).

