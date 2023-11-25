---
title: Voluntary Exit
---

If you decide to stop validating and disable your node, you can initiate a voluntary exit. This will freeze your balance at its current value (rewards and/or penalties will no longer accrue).

If you initiates a voluntary exit, your validator will receive the full staked funds to the withdrawal address, provided that the validator has [withdrawal credentials](withdrawals.md#check-withdrawal-credential) of type `0x01`.

Voluntary exit procedures vary depending on your client.

:::caution
Exits are non-reversible; once you have exited you cannot restart your validator.

You must have a `0x01` type withdrawal address before exiting your validator [withdrawal credentials](withdrawals.md#check-withdrawal-credential). 
:::

### Dappnode

Navigate to the Stakers > Gnosis Chain menu, click on the "Upload Keystores" button on the Web3Signer card. Once you are in the Web3Signer UI, select the validators you want to exit and click on the "Exit Validator" button on the top right part of the UI. Follow the instructions and type `I want to exit`, followed then click the "Exit" button. More informations in [Dappnode Docs](https://docs.dappnode.io/docs/user/staking/gnosis-chain/solo#1-exit-the-validator-from-the-dappnode-ui).

### Lighthouse

In order to initiate an exit, users can use the lighthouse account validator exit command.

```bash
lighthouse --network gnosis account validator exit --keystore /path/to/keystore --beacon-node http://consensus:5052
```

- For more info, see the [Lighthouse Voluntary Exit docs](https://lighthouse-book.sigmaprime.io/voluntary-exit.html).

### Lodestar

Follow the syntax of the Lodestar CLI commands and their options.

```bash
validator voluntary-exit --network gnosis --publicKey 0xF00
```

- For more info, see the [Lodestar Command Line Reference doc](https://chainsafe.github.io/lodestar/reference/cli/#validator-voluntary-exit).

### Nimbus

To perform a voluntary exit, make sure your beacon node is running with the `--rest` option enabled, then run:

```bash
build/nimbus_beacon_node deposits exit --data-dir=build/data/shared_gnosis_0 --validator=<VALIDATOR_PUBLIC_KEY>
```

- For more info, see the Nimbus [Perform a voluntary exit](https://nimbus.guide/voluntary-exit.html) docs.

### Prysm

Use [prysmctl tool](https://docs.prylabs.network/docs/prysm-usage/prysmctl) to voluntarily exit your validator.

```bash
prysmctl validator exit --wallet-dir=<path/to/wallet> --beacon-rpc-provider=<127.0.0.1:4000>
```

- For more info, see the Prysm [Exit your validator](https://docs.prylabs.network/docs/wallet/exiting-a-validator/) doc.

### Teku

Use the voluntary-exit subcommand to initiate a voluntary exit for specified validators.

```bash
teku voluntary-exit --beacon-node-api-endpoint=http://consensus:5051 \
--validator-keys=validator/keys/validator_ABC.json:validator/passwords/validator_ABC.txt
```

- For more info, see the Teku [Voluntarily exit a validator](https://docs.teku.consensys.net/how-to/voluntarily-exit#:~:text=A%20voluntary%20exit%20is%20when,successfully%20exited%20to%20avoid%20penalties.) docs.
