---
sidebar_position: 1
title: Buy a tokenised asset with CoW Swap
description: Build a script that buys a yield-bearing tokenised asset on Gnosis through CoW Protocol, then point the same code at Ethereum mainnet without changing the contract addresses. About 40 minutes.
keywords: [cow protocol, cow swap, tokenised asset, sdai, gnosis eez, eip-712, viem, ethereum mainnet, intents]
---

# Buy a tokenised asset with CoW Swap

**Job:** buy a tokenised asset from your own app, and reach Ethereum mainnet with the same code. **Time:** about 40 minutes. **Chain:** Gnosis mainnet.

**Prerequisites:** Node.js 20 or later, and an account on Gnosis holding a small amount of xDai for gas plus at least 1 WXDAI to spend.

This is the shortest honest demonstration of what the Ethereum Economic Zone gives you. You will write about eighty lines that buy a yield-bearing tokenised asset, without running a solver, quoting engine or price oracle of your own. Then you will change three constants and the same script trades on Ethereum mainnet, because the protocol you are calling lives at the same address on both chains.

## Read this before you start

**This guide spends real money.** CoW Protocol is not deployed on the Chiado testnet, so there is no free rehearsal. The amounts here are around one euro, and the network fee is roughly $0.0001, but the funds are real. Do not scale the numbers up until you have read the code.

**What you are buying.** The example buys sDAI, the savings wrapper around xDai from Spark. It is an [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626) vault whose share price rises against its underlying, so it is a tokenised yield position rather than a tokenised security.

For tokenised securities specifically, [Backed](https://backed.fi) issues bTokens that track listed instruments such as short-term treasury ETFs against a custodian. The mechanics below are identical, but the token addresses are not in the ecosystem registry, so take them from Backed rather than from this page. Regulated instruments also carry transfer restrictions that a plain swap will not satisfy.

## How CoW Protocol works

Most exchanges take a transaction that says "perform this swap". CoW takes a signed message that says "I will give up at most this much of X for at least this much of Y, before this time". That message is an intent, and it costs nothing to create because it never touches the chain.

Competing solvers collect these intents into batches and bid to settle them. The winner submits one transaction settling many orders at once. Three consequences matter for your app:

- **You do not pay gas for a failed trade.** An order that no solver can fill simply expires.
- **Your users get MEV protection.** Orders settle at a uniform clearing price inside a batch, so there is no ordering advantage to sell them.
- **Your app never holds the trade.** You sign and post. Settlement is someone else's execution problem.

## Set up the project

```bash
mkdir cow-tokenised-asset && cd cow-tokenised-asset
npm init -y
npm pkg set type=module
npm install viem
```

Put your key in the environment rather than in the file. Use a throwaway account funded with only what this guide spends:

```bash
export PRIVATE_KEY=0xyour_private_key_here
```

## The addresses

Create `config.js`:

```js
export const config = {
  chainId: 100,
  rpc: 'https://rpc.gnosischain.com',
  api: 'https://api.cow.fi/xdai/api/v1',

  // Same address on Gnosis and Ethereum. This is the point of the guide.
  settlement: '0x9008D19f58AAbD9eD0D60971565AA8510560ab41',
  relayer: '0xC92E8bdf79f0507f65a392b0ab4667716BFE0110',

  sell: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', // WXDAI, 18 decimals
  buy: '0xaf204776c7245bF4147c2612BF6e5972Ee483701',  // sDAI, 18 decimals
};
```

Two addresses deserve an explanation.

`settlement` is the GPv2Settlement contract. It holds the EIP-712 domain your order is signed against, so signing against the wrong one produces a valid signature for a different protocol and the API rejects it.

`relayer` is the GPv2VaultRelayer, and it is the contract you approve rather than the settlement contract. You do not have to take that from documentation. Ask the settlement contract itself:

```bash
cast call 0x9008D19f58AAbD9eD0D60971565AA8510560ab41 "vaultRelayer()(address)" \
  --rpc-url https://rpc.gnosischain.com
```

It returns `0xC92E8bdf79f0507f65a392b0ab4667716BFE0110`. Approving anything else means your order can never be filled.

## Approve the relayer

Create `approve.js`:

```js
import { createWalletClient, createPublicClient, http, erc20Abi, maxUint256 } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { gnosis } from 'viem/chains';
import { config } from './config.js';

const account = privateKeyToAccount(process.env.PRIVATE_KEY);
const publicClient = createPublicClient({ chain: gnosis, transport: http(config.rpc) });
const wallet = createWalletClient({ account, chain: gnosis, transport: http(config.rpc) });

const allowance = await publicClient.readContract({
  address: config.sell,
  abi: erc20Abi,
  functionName: 'allowance',
  args: [account.address, config.relayer],
});

if (allowance > 0n) {
  console.log('Already approved:', allowance.toString());
} else {
  const hash = await wallet.writeContract({
    address: config.sell,
    abi: erc20Abi,
    functionName: 'approve',
    args: [config.relayer, maxUint256],
  });
  console.log('Approval sent:', hash);
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log('Status:', receipt.status);
}
```

Run it:

```bash
node approve.js
```

You get `Status: success` and a transaction hash. This is the only on-chain transaction you send in the whole guide. Everything after this is signed messages.

## Get a quote

The quote tells you what solvers currently think your trade is worth, and gives you the exact numbers to sign. Create `buy.js`:

```js
import { createWalletClient, createPublicClient, http, erc20Abi, parseUnits, formatUnits } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { gnosis } from 'viem/chains';
import { config } from './config.js';

const account = privateKeyToAccount(process.env.PRIVATE_KEY);
const publicClient = createPublicClient({ chain: gnosis, transport: http(config.rpc) });
const wallet = createWalletClient({ account, chain: gnosis, transport: http(config.rpc) });

const sellAmount = parseUnits('1', 18); // 1 WXDAI

const quoteRes = await fetch(`${config.api}/quote`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    sellToken: config.sell,
    buyToken: config.buy,
    from: account.address,
    receiver: account.address,
    sellAmountBeforeFee: sellAmount.toString(),
    kind: 'sell',
    partiallyFillable: false,
    signingScheme: 'eip712',
    onchainOrder: false,
    priceQuality: 'optimal',
  }),
});

if (!quoteRes.ok) throw new Error(`Quote failed: ${await quoteRes.text()}`);
const { quote, id: quoteId } = await quoteRes.json();

console.log('Selling', formatUnits(BigInt(quote.sellAmount), 18), 'WXDAI');
console.log('Buying at least', formatUnits(BigInt(quote.buyAmount), 18), 'sDAI');
console.log('Estimated network fee', formatUnits(BigInt(quote.feeAmount), 18), 'WXDAI');
```

Run it. You will see something close to this, with sDAI costing more than one xDai because the vault has been accruing:

```text
Selling 0.999999948 WXDAI
Buying at least 0.796149 sDAI
Estimated network fee 0.0000000518 WXDAI
```

## Build the order

Three details here cause almost every failed first integration.

**The fee is signed as zero.** The quote reports an estimated network fee for information, but solvers compute the real fee at execution time. The API rejects a non-zero `feeAmount` on a new order, so you sign `feeAmount: '0'` and fold the quoted fee into the amount you are prepared to sell.

**Slippage is your decision.** The quote's `buyAmount` is a current estimate. Sign that exact number and your order fails the moment the price moves against you. Signing a floor slightly below it is what makes the order fillable.

**`appData` is a hash, not an object.** You post the string `{}` but you sign its keccak256 hash. They must correspond or the signature verifies against a different order.

Append to `buy.js`:

```js
// Fold the quoted fee into what you are willing to sell, and sign a zero fee.
const signedSellAmount = BigInt(quote.sellAmount) + BigInt(quote.feeAmount);

// Accept up to 0.5% worse than quoted.
const minBuyAmount = (BigInt(quote.buyAmount) * 995n) / 1000n;

// keccak256("{}"), the hash matching the appData string posted below.
const APP_DATA = '{}';
const APP_DATA_HASH = '0xb48d38f93eaa084033fc5970bf96e559c33c4cdc07d889ab00b4d63f9590739d';

const order = {
  sellToken: config.sell,
  buyToken: config.buy,
  receiver: account.address,
  sellAmount: signedSellAmount.toString(),
  buyAmount: minBuyAmount.toString(),
  validTo: Math.floor(Date.now() / 1000) + 20 * 60, // 20 minutes
  appData: APP_DATA_HASH,
  feeAmount: '0',
  kind: 'sell',
  partiallyFillable: false,
  sellTokenBalance: 'erc20',
  buyTokenBalance: 'erc20',
};
```

## Sign it

The EIP-712 domain is what binds your signature to this protocol on this chain. Note that `kind`, `sellTokenBalance` and `buyTokenBalance` are typed as `string`, not as enums or bytes:

```js
const domain = {
  name: 'Gnosis Protocol',
  version: 'v2',
  chainId: config.chainId,
  verifyingContract: config.settlement,
};

const types = {
  Order: [
    { name: 'sellToken', type: 'address' },
    { name: 'buyToken', type: 'address' },
    { name: 'receiver', type: 'address' },
    { name: 'sellAmount', type: 'uint256' },
    { name: 'buyAmount', type: 'uint256' },
    { name: 'validTo', type: 'uint32' },
    { name: 'appData', type: 'bytes32' },
    { name: 'feeAmount', type: 'uint256' },
    { name: 'kind', type: 'string' },
    { name: 'partiallyFillable', type: 'bool' },
    { name: 'sellTokenBalance', type: 'string' },
    { name: 'buyTokenBalance', type: 'string' },
  ],
};

const signature = await wallet.signTypedData({
  account,
  domain,
  types,
  primaryType: 'Order',
  message: {
    ...order,
    sellAmount: BigInt(order.sellAmount),
    buyAmount: BigInt(order.buyAmount),
    feeAmount: BigInt(order.feeAmount),
  },
});
```

You can prove the domain is right rather than trusting it. The settlement contract exposes the separator it will verify against:

```bash
cast call 0x9008D19f58AAbD9eD0D60971565AA8510560ab41 "domainSeparator()(bytes32)" \
  --rpc-url https://rpc.gnosischain.com
```

On Gnosis that returns `0x8f05589c4b810bc2f706854508d66d447cd971f8354a4bb0b3471ceb0a466bc7`, which is exactly the hash of the domain above. Run the same call against an Ethereum RPC and you get `0xc078f884a2676e1345748b1feace7b0abee5d00ecadb6e574dcdd109a63e8943`. Same contract, same fields, different chain ID. Hold on to that difference, because the last section rests on it.

## Post the order

```js
const orderRes = await fetch(`${config.api}/orders`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({
    ...order,
    appData: APP_DATA,       // the string; the hash is what you signed
    from: account.address,
    signingScheme: 'eip712',
    signature,
    quoteId,
  }),
});

if (!orderRes.ok) throw new Error(`Order rejected: ${await orderRes.text()}`);
const uid = await orderRes.json();
console.log('Order posted:', uid);
console.log(`https://explorer.cow.fi/gc/orders/${uid}`);
```

A `201` gives you the order UID. Notice what did not happen: you sent no transaction and paid no gas to place this order.

## Wait for settlement

```js
const deadline = Date.now() + 10 * 60 * 1000;

while (Date.now() < deadline) {
  const res = await fetch(`${config.api}/orders/${uid}`);
  const { status, executedBuyAmount } = await res.json();
  console.log('Status:', status);

  if (status === 'fulfilled') {
    console.log('Bought', formatUnits(BigInt(executedBuyAmount), 18), 'sDAI');
    break;
  }
  if (status === 'cancelled' || status === 'expired') {
    console.log('Order did not fill:', status);
    break;
  }
  await new Promise((r) => setTimeout(r, 5000));
}

const balance = await publicClient.readContract({
  address: config.buy,
  abi: erc20Abi,
  functionName: 'balanceOf',
  args: [account.address],
});
console.log('sDAI balance:', formatUnits(balance, 18));
```

Run the finished script:

```bash
node buy.js
```

Status moves from `open` to `fulfilled`, usually within a minute or two.

## Verify it on-chain

The script's own output is not proof. Check the chain directly:

```bash
cast call 0xaf204776c7245bF4147c2612BF6e5972Ee483701 \
  "balanceOf(address)(uint256)" <YOUR_ADDRESS> \
  --rpc-url https://rpc.gnosischain.com
```

Then confirm the asset is what you think it is. sDAI is an ERC-4626 vault, so ask it what it holds and what your shares redeem for:

```bash
cast call 0xaf204776c7245bF4147c2612BF6e5972Ee483701 "asset()(address)" \
  --rpc-url https://rpc.gnosischain.com

cast call 0xaf204776c7245bF4147c2612BF6e5972Ee483701 \
  "convertToAssets(uint256)(uint256)" 1000000000000000000 \
  --rpc-url https://rpc.gnosischain.com
```

The first returns the WXDAI address, confirming the vault is denominated in the token you sold. The second returns more than `1e18`, which is the accrued yield: your one share is now worth more than one xDai. Leave it alone for a week and that number rises without you sending another transaction.

Your address and the settlement transaction are also on [Blockscout](https://gnosis.blockscout.com).

## Point the same code at Ethereum mainnet

Here is the part worth internalising. Your app is not tied to Gnosis. CoW Protocol is deployed at the **same addresses** on Ethereum mainnet, and the code above is unchanged apart from configuration.

Create `config.mainnet.js`:

```js
export const config = {
  chainId: 1,
  rpc: 'https://eth.drpc.org',
  api: 'https://api.cow.fi/mainnet/api/v1',

  // Identical to Gnosis. Nothing to look up, nothing to redeploy.
  settlement: '0x9008D19f58AAbD9eD0D60971565AA8510560ab41',
  relayer: '0xC92E8bdf79f0507f65a392b0ab4667716BFE0110',

  sell: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI on Ethereum
  buy: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',  // sDAI on Ethereum
};
```

Swap the import in `buy.js` and change `gnosis` to `mainnet` from `viem/chains`. Everything else, the EIP-712 types, the fee handling, the appData hash, the polling loop, stays as it is. The only thing your signature notices is the chain ID inside the domain.

That is what "tap into Ethereum mainnet" means concretely. You develop against Gnosis, then run the identical integration against mainnet liquidity when you need it. Assets move between the two over the [Gnosis Bridge](/bridges), so a position opened on one side is not stranded there.

### One thing does change: the minimum viable trade

Run the mainnet version with the same 1 unit and the API refuses it outright:

```json
{
  "errorType": "SellAmountDoesNotCoverFee",
  "description": "The sell amount for the sell order is lower than the fee."
}
```

The quoted fee on that attempt was about **3.86 DAI**, against a 1 DAI order. The identical trade on Gnosis quoted a fee of **0.0000000518 WXDAI**. Both figures come from the live API and both move with gas prices, but the gap is structural rather than incidental.

The consequence is a product decision, not a technical one. On mainnet you need a trade in the thousands before the fee stops dominating, so per-user rebalancing only works for large balances. On Gnosis the fee is small enough that rebalancing every user every day is affordable. Build the flow on Gnosis, and reach for mainnet on the trades that are large enough to justify it.

## What you have

An app that buys a yield-bearing tokenised asset with one on-chain approval and a signed message, gets MEV protection and solver competition without operating either, and runs against Ethereum mainnet by changing three constants.

None of the moving parts belong to you. Spark issues the asset, CoW's solvers find the price, Gnosis Chain settles it. That is the EEZ working as intended: components you compose rather than infrastructure you run.

Extend it in whichever direction your product needs:

- Swap the buy token for a [Backed](https://backed.fi) bToken to hold tokenised treasuries instead of savings, once you have handled the transfer restrictions.
- Sell EURe (`0x420CA0f9B9b604cE0fd9C18EF134C705e5Fa3430`) instead of WXDAI to start from regulated euro e-money rather than a dollar-denominated position.
- Place the order from a [Safe](https://safe.global) using the `presign` signing scheme, so a treasury with multiple signers can use the same flow.
- Read [Embed](/start) for the component bundles these pieces belong to.
