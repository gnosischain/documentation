---
description: Pimlico's vision is to be the underlying infrastructure layer that will power Ethereum's transition to smart contract wallets through mass ERC-4337 adoption.

keywords: [pimlico,account-abstraction,paymaster, bundlers]
---

# Building on Safe AA with Pimilico

Safe supports 4337 which means you can now plug in Safe accounts to ERC-4337 bundlers and paymasters. This guide will walk you through how to create and use a Safe account with permissionless.js.

### 1. Import the required packages

```jsx
import { ENTRYPOINT_ADDRESS_V06, createSmartAccountClient } from "permissionless"
import { signerToSafeSmartAccount } from "permissionless/accounts"
import {
	createPimlicoBundlerClient,
	createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico"
import { createPublicClient, getContract, http, parseEther } from "viem"
import { gnosis } from "viem/chains"
```

### 2. Create the clients
First we must create the public, bundler, and (optionally) paymaster clients that will be used to interact with the Safe account.

```jsx
export const publicClient = createPublicClient({
	transport: http("https://gnosis.drpc.org"),
})
 
export const paymasterClient = createPimlicoPaymasterClient({
	transport: http("https://api.pimlico.io/v2/gnosis/rpc?apikey=API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})
```

### 3. Create the signer

The Safe account will need to have a signer to sign user operations. In permissionless.js, the default Safe account validates ECDSA signatures. Any permissionless.js-compatible signer can be used for the Safe account.

For example, to create a signer based on a private key:

```jsx
import { privateKeyToAccount } from "viem/accounts"
import { pimlicoBundlerClient } from "../pimlicoBundlerClient"
 
const signer = privateKeyToAccount("0xPRIVATE_KEY")
```

### 4. With a signer, you can create a Safe account as such:
```jsx
const safeAccount = await signerToSafeSmartAccount(publicClient, {
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	signer: signer,
	saltNonce: 0n, // optional
	safeVersion: "1.4.1",
	address: "0x...", // optional, only if you are using an already created account
})
```
### 5. Create the smart account client

```jsx
const smartAccountClient = createSmartAccountClient({
	account: safeAccount,
	entryPoint: ENTRYPOINT_ADDRESS_V06,
	chain: gnosis,
	bundlerTransport: http("https://api.pimlico.io/v1/gnosis/rpc?apikey=API_KEY"),
	middleware: {
		gasPrice: async () => (await pimlicoBundlerClient.getUserOperationGasPrice()).fast, // use pimlico bundler to get gas prices
		sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
	},
})
```

### 6. Fetch the gas prices

If you're using Pimlico as your bundler, fetch the required gas price to use beforehand and pass it in as the maxFeePerGas and maxPriorityFeePerGas parameters. Other providers might have different requirements for fetching the gas price.

```jsx
export const bundlerClient = createPimlicoBundlerClient({
	transport: http("https://api.pimlico.io/v1/sepolia/rpc?apikey=API_KEY"),
	entryPoint: ENTRYPOINT_ADDRESS_V06,
})
 
const gasPrices = await bundlerClient.getUserOperationGasPrice()
```


### 7. Send a transaction
Transactions using permissionless.js simply wrap around user operations. This means you can switch to permissionless.js from your existing viem EOA codebase with minimal-to-no changes.

```jsx
const txHash = await smartAccountClient.sendTransaction({
	to: destinationAddress,
	value: parseEther("0.1"),
	maxFeePerGas: gasPrices.fast.maxFeePerGas, // if using Pimlico
	maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas, // if using Pimlico
})
```
