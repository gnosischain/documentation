---
description: Safe is the most trusted platform to manage digital assets on Gnosis
keywords: [trezor, hardware wallet, hw, seed, security]
---

# Gnosis Safe

The most trusted platform to manage digital assets on Gnosis

## Safe on Gnosis

* Safe Application: [https://gnosis-safe.io/app/gno](https://gnosis-safe.io/app/gno)
* Safe Tutorials: [https://help.gnosis-safe.io/en/](https://help.gnosis-safe.io/en/)

## Connect a Wallet

There are several options including [MetaMask](/tools/wallets/metamask), hardware wallets, and WalletConnect. WalletConnect allows you to use a 3rd party wallet on your mobile device.

1) Go to the [Safe application on Gnosis](https://gnosis-safe.io/app/gno). Click Connect.

![](</img/tools/safe/connect1.jpg>)

2) Chose your wallet.

![](</img/tools/safe/connect2.jpg>)

### Connecting with MetaMask

Select the MetaMask option in the connect wallet menu. Check that the correct MetaMask account is active and [connected to Gnosis](/tools/wallets/metamask/#manual-configuration).

![](/img/tools/safe/mm-connect.jpg)

### Connecting with WalletConnect

Current WalletConnect functionality is limited to wallets that support Gnosis. You can use MetaMask Mobile with WalletConnect if you have setup the [Gnosis custom RPC](/tools/wallets/metamask/#manual-configuration).

If you choose to use WalletConnect, select the WalletConnect option in the connect wallet menu. Scan the QR code with your application and accept the message to connect in your mobile wallet.

![](/img/tools/safe/img-2372.png)

## Create A New Safe

1) Press **Create new Safe**.

![](/img/tools/safe/safe1.jpg)

2) Name the safe. This will be stored locally. Press **Start** to continue.

![](/img/tools/safe/safe2.jpg)

3) Add additional owners if wanted. For each additional owner:

1. Click Add another owner.
2. Give Owner a Name.
3. Enter Owner Address.
4. Select how many owners will be required to confirm a transaction.
5. Press Review.

![](/img/tools/safe/safe3.jpg)

4) Confirm the transaction. You will need a very small amount of xDai to confirm the tx.

![](/img/tools/safe/safe4.jpg)

5) During deployment you can check safe creation on BlockScout. Click the link to view progress.

![](/img/tools/safe/safe6.jpg)

![A new safe in BlockScout](/img/tools/safe/safe5.jpg)

## Deposit Assets

When sending to your new safe, make sure you are connected to Gnosis, copy the Safe address, and process as you would any other Gnosis transaction. For more information, see this tutorial from Gnosis:

[How can I receive funds?](https://help.gnosis-safe.io/en/articles/3922053-how-can-i-receive-funds)

:::danger Safe Address
The Safe deployed to Gnosis is not present in Ethereum or other networks. So, the Safe address is not shared across chains.
Be careful when sending assets, ensure you are doing it in the correct network.
:::

## Connect a DApp with WalletConnect

You can connect to WalletConnect to interact with supported DApps using Gnosis Safe.

1) Go to APPS in the navigation menu.

![](/img/tools/safe/safewallet1.jpg)

2) Select the WalletConnect App. In step 2, you will paste in the QR code from the  site you want to connect to.

![Follow instructions on right side to complete the process](/img/tools/safe/safewallet2.jpg)

3) Visit the application and connect to your wallet. This will differ based on the application (the DApp must be deployed on Gnosis). Here we use Nifty.ink.

![](/img/tools/safe/safewallet3.jpg)

![Click on WalletConnect](</img/tools/safe/safe-walletc.jpg>)

![Copy the QR code as an image and save to your clipboard.](/img/tools/safe/safewallet4.jpg)

4) Return to Gnosis Safe and paste the image into the Paste QR code field. The DApp will now be connected, and you can use the Safe to confirm transactions.

![](/img/tools/safe/safewalletc2.jpg)

## Need more help?

[Gnosis Support Page](https://help.gnosis-safe.io/en/)