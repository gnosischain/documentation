---
title: Staking and Liquid Staking
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosischain) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!** 
:::

:::info
** :bulb: This document is continuously being improved.** 
:::

# Staking, Liquid Staking

1. **Where can I swap mGNO to GNO?**

    mGNO is deprecated now, you can stake GNO directly
    
3. **What’s the best place to stake my GNO bag?**

    You can stake your GNO on liquid staking platforms like Stakewise or you could get/buy your own node and stake those GNO to validate the chain (~14% APY as October 2023) more information in the docs
    
4. **Is there any official staking platform for GNO?**

    You can run your node as a solo validator or use a liquid staking protocol like [Stakewise](https://stakewise.io/).
    
5. **I have some Locked GNO, how to get it back?**

    You can unlock your GNO on the [Locking page](https://lock.gnosis.io/)
    
6. **Can you currently unstake sGNO or is that not ready yet?**

    To withdraw directly you need to wait for Stakewise v3 that isn't out yet or if you really want to withdraw immediately, you can find some liquidity on Curve for sGNO and rGNO
    
7. **How can I convert rGNO?**

    Use the [rGNO](https://curve.fi/#/xdai/pools/factory-v2-1/deposit) liquidity pool on Curve
    
8. **Where can I swap GNO to mGNO?**

    mGNO is deprecated now, you can stake GNO directly
    
9. **How to move LGNO tokens out of a compromised wallet?**

    LGNO tokens can't be transfered, you will have to unlock your GNO on the [Locking](https://lock.gnosis.io/) page but about your compromised wallet, if the hackers are using a bot to drain all tokens out of the wallet, there is a high possibility that funds won't be able to be recovered.
    
10. **Is there any way to stake more than 32 mGNO per validator?**

    mGNO is actually deprecated, but the effective balance of your validator cannot exceed 1 GNO as the exceeding balance will be ready to be claimed as partial withdrawals.
    
11. **Rewards for staking are given in GNO, but what happens to the xDai used to pay gas from all transactions on the network?   Where does the GNO come from since it isn't used for gas in the transaction?**

    Every validator has two addresses to which it distributes rewards to: 1. Withdrawal address: The consensus layer rewards go to this address. These rewards are: attestation rewards, sync committee rewards, block proposal rewards. It can only be set once. If you have set it during key generation/deposit, you cannot change it again. 2. Fee recipient address: The execution layer rewards go to this address. When you propose a block, people pay you to include their transaction, this fee reward goes to this address. You set this one in your validator client or web3signer for each validator. It can be changed as often as you want. For more info you can check [Rewards & Penalties](https://docs.gnosischain.com/node/rewards-penalties) section on the docs.
