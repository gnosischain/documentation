---
title: Generate your Safe Smart Account
description: Generating a Safe Smart Account on Gnosis Chain with Safe's Auth Kit and Protocol Kit. Archived - Auth Kit is deprecated.
keywords: [safe, auth kit, protocol kit, account-abstraction, smart account, deprecated, archived]
---

# Generate your Safe Smart Account (Archived)

:::danger Archived
This guide is built on Safe's **Auth Kit, which Safe removed from the Safe Core SDK in September 2024**; its npm package, `@safe-global/auth-kit`, is deprecated. Safe now recommends integrating an auth provider directly: see [Safe signers](https://docs.safe.global/sdk/signers).

This page is kept for historical reference only and is not published on [docs.gnosischain.com](https://docs.gnosischain.com).
:::

### In this guide, you will learn the very first steps to generate safe smart account and execute transactions on Gnosis Chain.


### We would be using these two packages from Safe Core AA SDK :
1. [Auth Kit](https://github.com/safe-global/safe-core-sdk/blob/main/packages/auth-kit/src/packs/safe-auth/SafeAuthPack.ts): The Auth Kit creates an EOA address and authenticates a blockchain account using an email address, social media account, or crypto wallet like Metamask. We would be using the [Safe Auth Integration](https://docs.safe.global/sdk/auth-kit/guides/safe-auth) which uses Web3Auth's MPC technology. 

2. [Protocol Kit](https://github.com/safe-global/safe-core-sdk/tree/main/packages/protocol-kit) :This Kit can be used to create new Safe accounts, update the configuration of existing Safes, propose and execute transactions, among other features.


### Let's begin building!

## Using Safe Auth Kit to generate Safe using social accounts
---

### 1. Install the following dependencies.

```
npm install @safe-global/auth-kit @web3auth/safeauth-embed
```

### 2. Create a SafeAuthPack Instance 

```jsx
import
{ SafeAuthPack, SafeAuthInitOptions,AuthKitSignInData,SafeAuthUserInfo } from "@safe-global/auth-kit"

 const initSafeAuthPack = async () => {
      try {
        const safeAuthInitOptions = {
          showWidgetButton: true,
          enableLogging: true,
          buttonPosition: "top-right",
          buildEnv: "production",
          chainConfig: {
            chainId: "0x64",
            displayName: "Gnosis",
            rpcTarget: 'https://gnosis.drpc.org',
            blockExplorerURL: 'https://gnosisscan.io/',
            ticker: "xDAI",
            tickerName: "Gnosis Chain",
          },
        };

        const safeAuthPack = new SafeAuthPack();

        await safeAuthPack.init(safeAuthInitOptions);
        setSafeAuth(safeAuthPack);

        if (safeAuthPack.isAuthenticated) {
          const signInInfo = await safeAuthPack?.signIn();
          // The signIn() method returns the user's EOA address and the associated Safe addresses
          setSafeAuthSignInResponse(signInInfo);
          setProvider(safeAuthPack.getProvider());
          setIsAuthenticated(true);
          toast.success("Initialization and auto-login successful!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to initialize SafeAuthPack,try again!");
      }
    };

    initSafeAuthPack();


```

After you have successfully authenticated your session, `authKitSignData` will return the following objects:

``` jsx
AuthKitSignInData {
  eoa: string // This would be your signer
  safes?: string[] // The list of associated Safe addresses in the chain
}
```

### Now let's move onto our Protocol Kit that we would be using with this SafeAuthPack Instance


### 1. Install the following dependencies.

```
npm install ethers
npm install @safe-global/protocol-kit
```
### 2. Import these in your `.jsx` file

```
import { ethers, BrowserProvider } from "ethers";
import Safe, { EthersAdapter, SafeFactory } from "@safe-global/protocol-kit";
```

```jsx
 const web3Provider = safeAuth.getProvider();
      const userInfo = await safeAuth.getUserInfo();
      console.log(userInfo);
      setUserInfo(userInfo);

      if (web3Provider) {
        const provider = new BrowserProvider(safeAuth.getProvider());
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
      }
```
- You can checkout all the details of a user using `getUserInfo` method.

### 3. Create a Safe Adapter and using protocol kit

```jsx
const createSafe = async () => {
    if (!safeAuthSignInResponse?.eoa) {
        toast.error("No EOA (Externally Owned Account) available to create a Safe.");
        return;
    }
        const provider = new ethers.BrowserProvider(safeAuth?.getProvider());
        const signer = await provider.getSigner();
        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: signer,
        });

        const safeFactory = await SafeFactory.create({ ethAdapter });

        const safe = await safeFactory.deploySafe({
            safeAccountConfig: { threshold: 1, owners: [safeAuthSignInResponse?.eoa] },
            //keeping threshold to single owner 1
        });

        const safeAddress = await safe.getAddress();
        console.log("SAFE Created!", safeAddress);
}
```

If you would like to check out the full code implementation of how to use `SafeAuthPack` and Protocol Kit, you can checkout this code repository hosted on [Github](https://github.com/vanshika-srivastava/safe-gnosis-chain/blob/2baf5926250adf6aabe963c7bd053afc844e46da/src/App.jsx#L14).

#### We would be moving to next guide implementation which is for using the [Relay Kit by Gelato](./gelato.md). 
