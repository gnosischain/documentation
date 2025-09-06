---
title: Migrating a Validator
---

Migrating validators from one node to another (or from one vm instance to another) requires careful attention to avoid slashing. If you accidentally run the same validator key on 2 instances at the same time, even for a very short time period, you risk being slashed for an Attestation Violation. If this occurs, you will be removed as a validator and your GNO will be frozen and unavailable for withdrawal until after a hard-fork post GC/GBC merge.

:::note
Curious about validators who have been slashed? You can find them here: [https://gnosischa.in/validators/slashings](https://gnosischa.in//validators/slashings)
:::

## Order of Operations

Specific instructions will differ depending on the client you are running. In general, you will want to follow these steps to prevent slashing when performing a migration. You will experience some downtime but it's much better than being slashed!

1. Download initial state from original validator.
2. Stop original validator.
3. Export slashing protection history from original validator. ([EIP-3076](https://eips.ethereum.org/EIPS/eip-3076))
4. Download and backup original validator accounts (keystores).
5. Import initial state and slashing protection history from original validator to the new validator.
6. Remove account data from original validator, make sure it is not running! This is critical to avoid slashing! Some recommendations:
   - Rename or move keys folder in the original validator to another location.
   - Stop and remove containers (`docker-compose down`) if you are using Docker.
   - Remove old images (`docker rmi $(docker images | grep 'gbc-')` if you used the Launchpad).
7. Start new validator.

:::danger
Best practice to minimize slashing risks is to wait > 1 epoch [(you can check here to see epoch)](https://gnosischa.in//epochs) following any actions taken by the original validator before starting the new (migrated) validator. This will happen naturally if you stop the original validator at the beginning of the process.
:::

## Lighthouse

### Export {#lighthouse-export}

Lighthouse supports the slashing protection interchange format. You can export Lighthouse's database for use with another client with this command:

```bash
lighthouse account validator slashing-protection export <lighthouse_interchange.json>
```

### Import {#lighthouse-import}

With your validator client stopped, you can import a .json interchange file from another client using this command:

```bash
lighthouse account validator slashing-protection import <my_interchange.json>
```

- For more info, see the [Lighthouse Import and Export docs](https://lighthouse-book.sigmaprime.io/slashing-protection.html#import-and-export).

## Lodestar

### Export {#lodestar-export}

Export an interchange JSON file for all validators in the slashing protection DB:

```bash
validator slashing-protection export --network gnosis --file interchange.json
```

### Import {#lodestar-import}

Import an interchange file to the slashing protection DB:

```bash
validator slashing-protection import --network gnosis --file interchange.json
```

- For more info, see the [Lodestar Command Line Reference doc](https://chainsafe.github.io/lodestar/validator-management/validator-cli/#validator-slashing-protection-import).

## Nimbus

### Export {#nimbus-export}

Run the following to export your Nimbus validator's slashing protection history:

```bash
build/nimbus_beacon_node slashingdb export slashing-protection.json
```

### Import {#nimbus-import}

To import the slashing protection history run:

```bash
build/nimbus_beacon_node slashingdb import path/to/export_dir/slashing-protection.json
```

- For more info, see the Nimbus [Migration](https://nimbus.guide/migration.html) docs.

## Prysm

### Export {#prysm-export}

Run the following to export your Prysm validator's slashing protection history:

```bash
prysm.sh validator slashing-protection-history export --datadir=/your/prysm/wallet --slashing-protection-export-dir=/path/to/export_dir
```

### Import {#prysm-import}

You can import it as follows using any installation method for your Prysm validator.

```bash
prysm.sh validator slashing-protection-history import --datadir=/path/to/your/validator/db --slashing-protection-json-file=/path/to/desiredimportfile
```

- For more info, see the Prysm [Import & export slashing protection history](https://prysm.offchainlabs.com/docs/backup-and-migration/slashing-protection/) doc.

## Teku

### Export {#teku-export}

You can export Teku's database with this command:

```bash
teku slashing-protection export --data-path=/home/me/me_node --to=/home/slash/slashing-protection.json
```

### Import {#teku-import}

When importing the slashing-protection file, Teku imports the file to the `<data-path>/validators/slashprotection/` directory in the format `<validator-pubkey>.yml` (with no 0x prefix).

```bash
teku slashing-protection import --data-path=/home/me/me_node --from=/home/slash/slashing-interchange-format.json
```

- For more info, see the Teku [Slashing protection](https://docs.teku.consensys.net/en/latest/HowTo/Prevent-Slashing/) docs.

## More Resources

- [Lighthouse, Prysm and other client implementations)](https://www.coincashew.com/coins/overview-eth/guide-or-how-to-setup-a-validator-on-eth2-mainnet/part-iii-tips/switching-migrating-consensus-client) from Coin Cashew
