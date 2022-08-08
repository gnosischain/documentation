---
title: Tornado
---

Tornado cash has a bridge integration where you can withdrawl funds (WETH) from within Torndao (on GC) and withdrawl/bridge it to mainnet. They use a special contract where after the bridge the WETH is also unwrapped to ETH. I assume this is currently responsible for most of the WETH bridge transactions.

Gnosis Chain - Omnibridge contract shows that most ingress is through Tornado
https://etherscan.io/address/0x88ad09518695c6c3712ac10a214be5109a655671#tokentxns

Tornado results in bridges being used
https://dune.com/k06a/TornadoCash-Nova

Tornado allows for the users to pay for withdrawal transaction execution
https://docs.tokenbridge.net/eth-xdai-amb-bridge/transfers-with-covered-gas-fees