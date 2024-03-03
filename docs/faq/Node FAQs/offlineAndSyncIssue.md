---
title: Offline and Sync Issue
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosischain) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!** 
:::

:::info
** :bulb: This document is continuously being improved.** 
:::

# Offline and Sync Issues

1. **Anyone seeing errors with checkpoint sync today?**

    If the usual checkpoint sync https://checkpoint.gnosischain.com/ doesn't work, you can try using https://checkpoint.gnosis.gateway.fm/ if they are both down, don't hesitate to report it as the team might not be aware yet
    
2. **My (dapp)node have been offline for a couple of hours. After restart attestation and block proposing resumed, but duties in sync committee still shows missing even after a few hours since it's up again. Does anyone has an explanation for this?**

    Maybe it was related to an Intel chip bug that was fixed by Dappnode
    
3. **Installed Nethermind and Lighthouse on a new arm, let it sync for 24hrs and deposited validators after. Now all my validators are leaking. Do I need to wait for sync still or have something misconfigured?**

    Nethermind might take longer than 24h to sync. Wait and check. This error could also be related to recent sync issues.
    
4. **If my Gnosis validator have been offline for a long time (several months) and I restart it, do I need to withdraw and re-deposit the collateral, or can I just wait for it to become active again? How long will it take until it start earning again?**

    Update everything and wait until sync is finished, just remember to make sure your keystores are properly imported into your web3signer gnosis
    
5. **Using checkpoint sync, but all my nodes are down. Why?**

    If the usual checkpoint sync https://checkpoint.gnosischain.com/ doesn't work, you can try using https://checkpoint.gnosis.gateway.fm/ if they are both down, don't hesitate to report it as the team might not be aware yet
    
6. **Just realized my validators are off line since the beginning of the month, can someone take a peek and help?**

    Delete the Nethermind database and let it sync from scratch
    
7. **Hey, I run 50+ validators and seems like it misses heads quite frequently. Beaconchain shows I have average effectiveness of 88%. Any ideas on what is the most limiting factor? Just thinking what I can do to improve this.**

    In most cases the most important factor are: a synced clock (ntp), and a good internet connection
    
8. **Is there a new checkpoint for Gnosis?**

    The two common checkpoint sync are : https://checkpoint.gnosischain.com/ and https://checkpoint.gnosis.gateway.fm/
    
9. **My Gnosis node is crashed a month ago, was there a breaking chain upgrade a month ago?**

    Gnosis Chain had the [Shapella](https://docs.gnosischain.com/concepts/specs/hard-forks/shanghai-capella) upgrade early August 2023, validators had to update their clients to continue validating.
    
10. **Can I use checkpoint sync with Nethermind?**

    There is no checkpoint-sync or fast sync yet for Nethermind, syncing Nethermind from scratch can take up to +/- 2 days
