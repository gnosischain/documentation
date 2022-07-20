---
---

# Migrating a Validator

Migrating validators from one node to another (or from one vm instance to another) requires careful attention to avoid slashing. If you accidentally run the same validator key on 2 instances at the same time, even for a very short time period, you risk being slashed for an Attestation Violation. If this occurs, you will be removed as a validator and your GNO will be frozen and unavailable for withdrawal until after the GC/GBC merge.

:::note
Curious about validators who have been slashed? You can find them here: [https://beacon.gnosischain.com/node/slashings](https://beacon.gnosischain.com/node/slashings)
:::

## Order of Operations

Specific instructions will differ depending on the client you are running. In general, you will want to follow these steps to prevent slashing when performing a migration. You will experience some downtime but it's much better than being slashed!

1. Download initial state from original validator.
2. Stop original validator.
3. Export slashing protection history from original validator.
4. Download and backup original validator accounts (keystores).
5. Import initial state and slashing protection history from original validator to the new validator.
6. Remove account data from original validator, make sure it is not running!
7. Start new validator.

### Client specific instructions

\->[Lighthouse, Prysm and other client implementations)](https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-iii-tips/switching-migrating-consensus-client) from Coin Cashew

\-> [Prysm](https://docs.prylabs.network/docs/advanced/migrating-keys/) docs

:::danger
Best practice to minimize slashing risks is to wait > 1 epoch following any actions taken by the original validator before starting the new (migrated) validator. This will happen naturally if you stop the original validator at the beginning of the process.
:::
