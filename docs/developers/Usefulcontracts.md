---
sidebar_position: 7
description: A list of the most useful Gnosis Chain contract addresses
keywords: [gnosis chain, contracts] 
title: Useful Contracts
---

# Useful Contracts

Here are some contract addresses that might be useful during Gnosis Chain development.

## Ethereum Mainnet

### Mainnet contract addresses

| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GNO Token | [0x6810e776880c02933d47db1b9fc05908e5386b96](https://etherscan.io/address/0x6810e776880c02933d47db1b9fc05908e5386b96) |

### Mainnet bridge contract addresses

| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| AMB/Omnibridge Multi-Token Mediator | [0x88ad09518695c6c3712AC10a214bE5109a655671](https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671#writeProxyContract) |
| AMB Contract Proxy (Foreign)        | [0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e](https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e#writeProxyContract) |
| AMB/Omnibridge wETH Router Helper   | [0xa6439Ca0FCbA1d0F80df0bE6A17220feD9c9038a](https://etherscan.io/address/0xa6439ca0fcba1d0f80df0be6a17220fed9c9038a)                    |
| Omnibridge Validator Management Contract         | [0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064](https://etherscan.io/address/0xed84a648b3c51432ad0fD1C2cD2C45677E9d4064#writeProxyContract) |
| xDAI Bridge Proxy Contract                | [0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016](https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016#readProxyContract) |
| xDAI Bridge Validator Management Contract | [0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E](https://etherscan.io/address/0xe1579dEbdD2DF16Ebdb9db8694391fa74EeA201E#code)              |
| xDAI Bridge Admin Multisignature Wallet   | [0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd](https://etherscan.io/address/0xff1a8EDA5eAcdB6aAf729905492bdc6376DBe2dd)                   |

:::info
The current deployment of xDAI bridge contract is from [tokenbridge-contracts/xdaibridge-upgrade-sdai](https://github.com/gnosischain/tokenbridge-contracts/tree/xdaibridge-upgrade-sdai), with the commit hash `bf602f35e624cc6c58c827e7c56b23c8b1afa69a`
:::

## Gnosis Chain

### Gnosis Chain contract addresses
| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GNO | [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://gnosisscan.io/token/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb) |
| wxDAI | [0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://gnosisscan.io/token/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d)   |
| Deposit contract    | [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosisscan.io/address/0x0B98057eA310F4d31F2a452B414647007d1645d9) |

### Gnosis Chain bridge contract addresses

| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| AMB Proxy Contract                    | [0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59](https://gnosisscan.io/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59#writeProxyContract) |
| AMB Contract Proxy (Home)           | [0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59](https://gnosisscan.io/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59#writeProxyContract) |
| AMB Helper Contract                 | [0x7d94ece17e81355326e3359115D4B02411825EdD](https://gnosisscan.io/address/0x7d94ece17e81355326e3359115D4B02411825EdD#readContract)       |
| Omnibridge Multi-Token Mediator Proxy | [0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d](https://gnosisscan.io/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d#writeProxyContract) |
| Omnibridge Validator Management Contract         | [0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008](https://gnosisscan.io/address/0xA280feD8D7CaD9a76C8b50cA5c33c2534fFa5008#writeContract)      |
| xDAI Bridge Proxy Contract                | [0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6](https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6#address-tabs)              |
| xDAI Bridge Block Reward Contract         | [0x481c034c6d9441db23Ea48De68BCAe812C5d39bA](https://gnosis.blockscout.com/address/0x481c034c6d9441db23Ea48De68BCAe812C5d39bA)                           |
| xDAI Bridge Validator Management Contract | [0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D](https://gnosis.blockscout.com/address/0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D/read-proxy)                |
| xDAI Bridge Admin Multisignature Wallet   | [0x0d3726e5a9f37234d6b55216fc971d30f150a60f](https://gnosis.blockscout.com/address/0x0D3726e5a9f37234D6B55216fC971D30F150a60F/transactions#address-tabs) |
| xDAI Bridge ERC20ToNative Helper Contract | [0x2D51EAa266eafcb59bB36dD3c7E99C515e58113A](https://gnosis.blockscout.com/address/0x2d51eaa266eafcb59bb36dd3c7e99c515e58113a#readContract)              |

### Gnosis Chain validator addresses

| Name                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| xDAI Bridge Validator (Gnosis DAO)                 | [0xc9ADb79B8A6e7C6e90c765A3B4d16d81213c9D49](https://gnosisscan.io/address/0xc9ADb79B8A6e7C6e90c765A3B4d16d81213c9D49) [0x1abbf5ec09763afc398551e555967931d64e1508](https://gnosisscan.io/address/0x1abbf5ec09763afc398551e555967931d64e1508) |

## Goerli

### Goerli contract addresses
| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GNO                 | [0x7f477c3f03213970d939104cc436dc995cf615b5](https://goerli.etherscan.io/address/0x7f477c3f03213970d939104cc436dc995cf615b5) |
| Governance Safe                     | [0xf02796C7B84F10Fa866DAa7d5701A95f3131A727](https://gnosis-safe.io/app/gor:0xf02796C7B84F10Fa866DAa7d5701A95f3131A727home)                                                                                                                 |

### Goerli bridge contract addresses
| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| OmniBridge Mediator (Foreign) | [0x00147c84f13764dCDAbAF1cbAe622fa6f6839085](https://goerli.etherscan.io/address/0x00147c84f13764dCDAbAF1cbAe622fa6f6839085) |
| AMB Contract Proxy (Foreign)  | [0x87A19d769D875964E9Cd41dDBfc397B2543764E6](https://goerli.etherscan.io/address/0x87A19d769D875964E9Cd41dDBfc397B2543764E6) |
| xDAI Bridge Proxy Contract     | [0x8659Cf2273438f9b5C1Eb367Def45007a7A16a24](https://goerli.etherscan.io/address/0x8659Cf2273438f9b5C1Eb367Def45007a7A16a24) |
| xDAI Bridge Validator Contract | [0x1F35121d14ABC91689a7903bf911dce83B0c6EF6](https://goerli.etherscan.io/address/0x1F35121d14ABC91689a7903bf911dce83B0c6EF6) |

### Goerli validator addresses

| Name                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| xDAI Bridge Validator (Gateway)                 | [0xef35547c29a7547df67ff573c158bf1b74381add](https://goerli.etherscan.io/address/0xef35547c29a7547df67ff573c158bf1b74381add) |
| xDAI Bridge Validator (Gnosis DAO)                 | [0xda286781cbbc9819c94852885a118c93ed25e064](https://goerli.etherscan.io/address/0xda286781cbbc9819c94852885a118c93ed25e064) [0x758c277ca1b04da3ba3add5d61cd26337cfafd7e](https://goerli.etherscan.io/address/0x758c277ca1b04da3ba3add5d61cd26337cfafd7e) [0x9d84152df06880cdabeb30e10c2985f40d98b901](https://goerli.etherscan.io/address/0x9d84152df06880cdabeb30e10c2985f40d98b901) [0xdc3a6044440b75c5cefb023ae2d0e5b9069230cf](https://goerli.etherscan.io/address/0xdc3a6044440b75c5cefb023ae2d0e5b9069230cf) |

## Chiado

### Chiado contract addresses
| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| GnosisBridge(GNO) | [0x19C653Da7c37c66208fbfbE8908A5051B57b4C70](https://blockscout.com/gnosis/chiado/address/0x19C653Da7c37c66208fbfbE8908A5051B57b4C70) |
| wxDAI | [0x18c8a7ec7897177E4529065a7E7B0878358B3BfF](https://gnosis-chiado.blockscout.com/address/0x18c8a7ec7897177E4529065a7E7B0878358B3BfF)   |
| Deposit Contract       | [0xb97036A26259B7147018913bD58a774cf91acf25](https://blockscout.com/gnosis/chiado/address/0xb97036A26259B7147018913bD58a774cf91acf25) |
| Governance Safe                     | [0x0Ad7de9064BAA98892a244e1415Ca8a2766096D2](https://blockscout.com/gnosis/chiado/address/0x0Ad7de9064BAA98892a244e1415Ca8a2766096D2)    

### Chiado bridge contract addresses
| Contract                            | Address                                                                                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| OmniBridge Mediator (Home)  | [0x09D549a48AC52F3f9945E7de6402c609c92aa2E1](https://gnosis-chiado.blockscout.com/address/0x09D549a48AC52F3f9945E7de6402c609c92aa2E1) |
| AMB Contract Proxy (Home)   | [0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a](https://gnosis-chiado.blockscout.com/address/0x99Ca51a3534785ED619f46A79C7Ad65Fa8d85e7a) |
| xDAI Bridge Proxy Contract     | [0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2](https://gnosis-chiado.blockscout.com/address/0xbb3c86f9918C3C1d83668fA84e79E876d147fFf2) |
| xDAI Bridge Validator Contract | [0x0ee7EBC72b26e8CeAbbdF275A19dA8e4361685Ce](https://gnosis-chiado.blockscout.com/address/0x0ee7EBC72b26e8CeAbbdF275A19dA8e4361685Ce) |