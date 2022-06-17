---
---

# Liquid Staking

## 💧 Liquid Staking

Liquid staking providers allow anyone to stake without running the infrastructure themselves. It also gives stakers an opportunity to use their tokenized staked resources (sGNO & rGNO) for yield farming, borrowing or compounding while still protecting the protocol.

Liquid staking has arrived on the GBC with [Stakewise](https://app.stakewise.io)! Follow the instructions below to connect your wallet and start staking __ today.

:::note
Staked GNO (sGNO) and reward GNO (rGNO) can be converted to GNO following the Gnosis Chain <-> Gnosis Beacon Chain merge. At that time the staking app will allow you to burn your sGNO and rGNO to redeem your original GNO deposit + your accrued GNO reward.

sGNO and rGNO will be available in various DeFi protocols coming soon!
:::

## Stakewise Basics

1) Go to [https://app.stakewise.io](https://app.stakewise.io) and connect your wallet (We use MetaMask in this example, you can also use WalletConnect, Ledger or other options).

![](/img/validators/stakewise-1.png)

2) If your MetaMask is not yet connected to the Gnosis Chain, switch by clicking on the network button, selecting Gnosis Chain, and pressing **Switch**.

![](/img/validators/stakewise-2.png)

![](/img/validators/stakewise-3.png)

3) Confirm the Network switch in MetaMask.

![](/img/validators/stakewise-4.png)

4) Enter the GNO deposit amount into the Stake interface. Enter any amount of GNO to get started.  Note you can also change the recipient address if desired. You will receive the same amount of sGNO tokens relative to the GNO you stake.

Agree to the terms and press confirm.

![](/img/validators/stakewise-5.png)

5) Confirm the deposit transaction in your wallet. You should now see sGNO added in the interface.

![](/img/validators/sGNO.png)

## Tokens (sGNO & rGNO)

* sGNO address on Gnosis Chain:
  [0xa4ef9da5ba71cc0d2e5e877a910a37ec43420445 ](https://blockscout.com/xdai/mainnet/token/0xA4eF9Da5BA71Cc0D2e5E877a910A37eC43420445/token-transfers)
* rGNO address on Gnosis Chain:
  [0x6ac78efae880282396a335ca2f79863a1e6831d4 ](https://blockscout.com/xdai/mainnet/token/0x6aC78efae880282396a335CA2F79863A1e6831D4/token-transfers)

You can [import to Metamask](https://consensys.net/blog/metamask/how-to-add-your-custom-tokens-in-metamask/) as you would other tokens, or click on the 🦊 in Blockscout to add!

![](/img/validators/blockscout-1.png)

At all times the total amount of tokens that have been issued to users is sGNO + rGNO = GNO deposits + GNO rewards \* (100% — 10%), where 10% is StakeWise commission.

### sGNO

sGNO represents your initial stake of GNO deposited to the pool. Exchanging or transferring your sETH2 balance will result in lower rGNO earned to your account, as you will have a smaller proportional amount staked that is earning rewards.

### rGNO

rGNO represent earned staking rewards and are updated on a periodic basis.  Contracts check and update your reward balance based on staked GNO increases in the staking pool (or decreases if slashed).

The interface shows the time until the next update to your rGNO.

![Time until next rGNO update](/img/validators/next-update.png)

:::note
**Coming Soon**: Use your rGNO in DeFi protocols on the Gnosis Chain to borrow and stake additional GNO! 

Since rGNO tokens represent your rewards in a StakeWise Pool, exchanging or transfering your rETH2 will mean that you transferred your rewards to someone else. It will not impact your future earnings.
:::

