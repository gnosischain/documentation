---
description: ZeroDev is a smart, white-labeled, and modular embedded wallet for building user-friendly Web3 experiences, particularly for DeFi applications.
keywords: [zerodev,account-abstraction,kernel]
---

# Building AA powered dApp with ZeroDev

<CardContainer>
<Card
    title="ZeroDev is a smart, white-labeled, and modular embedded wallet for building user-friendly Web3 experiences, particularly for DeFi applications."
    />
</CardContainer>

### Key Features of ZeroDev AA stack

- Smart: ZeroDev leverages account abstraction.
- White-labeled: ZeroDev doesn't have a UI -- it provides the underlying wallet logic that you can build a totally customized experience on top of.
- Modular: ZeroDev is built on top of Kernel, the most popular open-source smart account that supports ERC-7579 plugins for customizing wallet logic.

:::info
- If you are building a DApp, get started with the [capabilities API](https://docs.zerodev.app/smart-wallet/quickstart-capabilities).
- If you are building a wallet, get started with the [Core SDK](https://docs.zerodev.app/smart-wallet/quickstart-core) or the [React SDK](https://docs.zerodev.app/smart-wallet/quickstart-react).
:::

Let's take a quick look at how you can start off by creating a new project in the ZeroDev Dashboard.

### 1. Setup ProjectID in dashboard

Sign up on [ZeroDev Dashboard](https://dashboard.zerodev.app/). Sign up on dashboard and create a new project. Name your project accordingly and choose the network chain as ```Gnosis``` .

### 2. Get config from Dashboard

Once you have setup a project, you will get ```PROJECTID```, ```BundlerRPC```, ```PaymasterRPC```. You can create .env file and store these config values to be used later in project.

### 3. Creating Wallet

ZeroDev supports three types of wallet creation:

- Passkeys : ZeroDev supports on-chain passkeys, where transactions are signed directly with passkeys on your user's device, and the signatures are validated on-chain with either RIP-7212 (if supported by the network) or smart contracts, without reliance on centralized infrastructure. Learn more here.
- Socials or Social Logins : ZeroDev supports social logins natively, but you can also use ZeroDev with third-party auth providers such as Dynamic, Privy, and Magic if your prefer their UI.
- EOA Wallet : Sign using EOA wallet (e.g. MetaMask) through ZeroDev, this EOA will be the signer of the ZeroDev smart wallet. Therefore, the smart wallet will be different counterfactual address than the address of the user's EOA.

### Setting up React Implementation with ZeroDev Packages

We will utilize ```@zerodev/waas``` package for the React implementation of our dApp.

### 1. Install packages

```shell
npm install @zerodev/waas viem@2.x @tanstack/react-query
```
### 2. Create a provider for ZeroDev. 

We will utilise the ```ProjectID``` from Dashboard and use chain object corresponding to ZeroDev project.

```typescript
import { http } from "viem"
import { gnosis } from "viem/chains"
import { ZeroDevProvider, createConfig } from "@zerodev/waas"
 
function Providers({ children }: { children: React.ReactNode}) {
  const PROJECT_ID = " "        //enter PROJECT ID here
 
  const config = createConfig({
    chains: [gnosis],
    transports: {
      [gnosis.id]: http()
    },
    projectIds: {
      [gnosis.id]: PROJECT_ID
    }
  })
 
  return (
    <ZeroDevProvider config={config}>
      {children}
    </ZeroDevProvider>
  )
}
```

### 3. Create a Smart Account

```typescript
import { useCreateKernelClientPasskey } from "@zerodev/waas";

function App() {
  const { connectRegister, isPending } = useCreateKernelClientPasskey({ version: "v3" });

  return (
    <button
      disabled={isPending}
      onClick={() => {
        connectRegister({ username: "zerodev_quickstart" });
      }}
    >
      {isPending ? 'Connecting...' : 'Create Smart Account'}
    </button>
  );
}

export default App;
```

### 4. Getting Smart Account Address

```typescript
import { useKernelClient } from "@zerodev/waas"
 
function App() {
  const { address } = useKernelClient()
 
  return (
    /* ...Create Smart Account */
    <p>{`Smart Account Address: ${address}`}</p>
  )
}
```

### 5. Send a UserOp for sponsored transaction

```typescript
import { parseAbi } from "viem"
import { useKernelClient, useSendUserOperation } from "@zerodev/waas"
 
function App() {
  const { address } = useKernelClient()
  const { data: userOpHash, write, isPending } = useSendUserOperation({
    paymaster: {
      type: "SPONSOR"
    }
  })
  const tokenAddress = "0x3870419Ba2BBf0127060bCB37f69A1b1C090992B"
  const abi = parseAbi(["function mint(address _to, uint256 amount) public"])
 
  return (
    /* ...Create & Get Smart Account */
    <div>
      <button 
        disabled={isPending}
        onClick={() => {
          write([
            {
              address: tokenAddress,
              abi: abi,
              functionName: "mint",
              args: [address, 1],
              value: BigInt(0),
            }
          ])
        }}
      >
        {isPending ? 'Minting...' : 'Mint'}
      </button>
      {userOpHash && <p>{`UserOp Hash: ${userOpHash}`}</p>}
    </div>
  )
}
```

:::info

Check out the quickstart code on [github](https://github.com/zerodevapp/waas-examples/tree/main/quick-start) and official documentation [here](https://docs.zerodev.app/smart-wallet/quickstart-core)

---
If you want to check out how to pay gas fees using ERC20 Tokens, check out the [ZeroDev section for paying using ERC20 Tokens](https://docs.zerodev.app/smart-wallet/pay-gas-in-erc20s)
:::