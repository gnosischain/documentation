--- 
title: GNO Token
description: GNO is the staking token of Gnosis and the governance token for the GnosisDAO.
keywords: [gnosis tokens, gnosis gno token, fee token, gno validation, omni bridge, mgno, ethereum gno]
---

GNO is the native token of the Gnosis ecosystem. It's used for staking on the Gnosis Beacon Chain and acts as the governance token for the GnosisDAO.

## Specifications

<Tabs groupId="networks">
<TabItem value="ethereum" label="Ethereum">

```jsx title="Contract Address"
0x6810e776880c02933d47db1b9fc05908e5386b96
```

```jsx title="Etherscan"
https://etherscan.io/token/0x6810e776880c02933d47db1b9fc05908e5386b96
```

```jsx title="Name"
Gnosis
```

```jsx title="Ticker"
GNO
```

```jsx title="Decimals"
18
```

```jsx title="Icon"
https://docs.gnosischain.com/img/tokens/gno.png
```
<a href="/img/tokens/gno.png"><img src="/img/tokens/gno.png" style={{width: '100px', height: '100px', display: 'inline'}} /></a>

</TabItem>
<TabItem value="gnosis" label="Gnosis Mainnet">

```jsx title="Contract Address"
0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb
```

```jsx title="Gnosisscan"
https://gnosisscan.io/token/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb
```

```jsx title="Name"
Gnosis Token on xDai
```

```jsx title="Ticker"
GNO
```

```jsx title="Decimals"
18
```

```jsx title="Icon"
https://docs.gnosischain.com/img/tokens/gno.png
```
<a href="/img/tokens/gno.png"><img src="/img/tokens/gno.png" style={{width: '100px', height: '100px', display: 'inline'}} /></a>

</TabItem>
<TabItem value="chiado" label="Chiado Testnet">

Check out [Chiado Testnet specs](/about/networks/chiado#gno-token) for more info.

</TabItem>
</Tabs>

## Get GNO Tokens

### Buy GNO
- https://buyxdai.com/gno

### Markets

- [CoinMarketCap](https://coinmarketcap.com/currencies/gnosis-gno/)
- [CoinGecko](https://www.coingecko.com/en/coins/gnosis)

### Bridge

- Ethereum _<_> Gnosis token bridge: [OmniBridge](https://omni.gnosischain.com/)

## Use GNO Tokens

### Gnosis Beacon Chain

#### mGNO token

To create a more accurate ETH-mirrored environment, a minimum of 32 tokens are used for staking purposes on the Gnosis Beacon Chain. The mGNO token is a meta-token similar to a wrapped token created for this purpose. During deposits, 1 GNO is automatically converted to 32 mGNO. Check the [validator deposit process](../../node/guide/validator/deposit.md) for more details.

- mGNO contract on Gnosis: [0x722fc4DAABFEaff81b97894fC623f91814a1BF68](https://gnosisscan.io/address/0x722fc4DAABFEaff81b97894fC623f91814a1BF68)

#### Staking

Stake your GNO tokens to secure Gnosis validating blocks as part of the PoS consensus. Check the [validator deposit process](../../node/guide/validator/deposit.md) for more details.

Liquid staking providers allow anyone to stake without running the infrastructure themselves. Check the [Stakewise](/tools/beacon-chain/liquid-staking#tokens-sgno--rgno) page for more details on sGNO and rGNO tokens.

### GnosisDAO Governance

- [GnosisDAO Governance Forum](https://forum.gnosis.io/)
- [GNO Utility and Value Proposition](https://forum.gnosis.io/t/gno-utility-and-value-proposition/2344)
- [Community](/about/overview/community)

## GNO Token Audit

- [GNO Token v2.0.0 Audit](https://hackmd.io/@verilog/gno-token-v2-audit) by Verilog Solutions


## Converting GNO to mGNO

:::note
GNO is automatically wrapped by the deposit contract, you only need to do this to top off your balance. The following instructions use the older swap UI
:::

:::danger
Note that currently there is not a mechanism to swap mGNO back to GNO.
:::

1\) Go to [https://deposit.gnosischain.com/](https://deposit.gnosischain.com) and connect your web3 wallet toGnosis on the application.

In this example we use MetaMask.

![](/img/node/UI-1A.png)

![](/img/node/UI-2A.png)

2\) Select the Swap tab. Enter the amount you would like to convert and click **Convert**. You can convert any amount, be sure to **start with a leading 0 to convert less than 1 GNO. For example, 0.1 GNO will be converted to 3.2 mGNO.**

![](/img/node/swap-1.png)

3\) Sign 2 transactions in your wallet. The first is a free signature request to allow the application to make the conversion.

![](/img/node/pt2.png)

The second processes the transaction. This will require a small amount of xDai to complete.

![](/img/node/2tx.png)

4\) The transaction should be initiated and completed within a few seconds. Once completed you can click the link to see the tx in BlockScout and add mGNO to your MetaMask wallet. The mGNO contract address is 0x722fc4DAABFEaff81b97894fC623f91814a1BF68.

