---
title: Voluntary Exit
---

If you decide to stop validating and disable your node, you can initiate a voluntary exit. This will freeze your balance at its current value (rewards and/or penalties will no longer accrue).

If you initiate a voluntary exit, your validator can fully withdraw to the configured execution withdrawal address once exit processing is complete. See [validator withdrawals](withdrawals.md) for withdrawal credential details.

Voluntary exit procedures vary depending on your client.

:::caution
Exits are non-reversible; once you have exited you cannot restart your validator.

It is recommended to set execution withdrawal credentials before exiting your validator. Updating credentials later, after your node is stopped, can be more difficult. See [validator withdrawals](withdrawals.md). 
:::

### Dappnode

Navigate to the Stakers > Gnosis Chain menu, click on the "Upload Keystores" button on the Web3Signer card. Once you are in the Web3Signer UI, select the validators you want to exit and click on the "Exit Validator" button on the top right part of the UI. Follow the instructions and type `I want to exit`, followed then click the "Exit" button. 

- For more info, see the [Dappnode Docs](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#1-exit-the-validator-from-the-dappnode-ui).

### Lighthouse

In order to initiate an exit, users can use the lighthouse account validator exit command.

```bash
lighthouse --network gnosis account validator exit --keystore /path/to/keystore --beacon-node http://consensus:5052
```

- For more info, see the [Lighthouse Voluntary Exit docs](https://lighthouse-book.sigmaprime.io/voluntary-exit.html).

### Lodestar

Follow the syntax of the Lodestar CLI commands and their options.

```bash
validator voluntary-exit --network gnosis --pubkeys 0xF00
```

- For more info, see the [Lodestar Command Line Reference doc](https://chainsafe.github.io/lodestar/run/validator-management/validator-cli/#validator-voluntary-exit).

### Nimbus

To perform a voluntary exit, make sure your beacon node is running with the `--rest` option enabled, then run:

```bash
build/nimbus_beacon_node deposits exit --data-dir=build/data/shared_gnosis_0 --validator=<VALIDATOR_PUBLIC_KEY>
```

- For more info, see the Nimbus [Perform a voluntary exit](https://nimbus.guide/voluntary-exit.html) docs.

### Teku

Use the voluntary-exit subcommand to initiate a voluntary exit for specified validators.

```bash
teku voluntary-exit --beacon-node-api-endpoint=http://consensus:5051 \
--validator-keys=validator/keys/validator_ABC.json:validator/passwords/validator_ABC.txt
```

- For more info, see the Teku [Voluntarily exit a validator](https://docs.teku.consensys.io/how-to/voluntarily-exit) docs.
