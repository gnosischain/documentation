---
title: Voluntary Exit
---

If you decide to stop validating and disable your node, you can initiate a voluntary exit. This will freeze your balance at its current value (rewards and/or penalties will no longer accrue).

If you perform a voluntary exit, you **will not be able to withdraw your balance** until the merge is complete and withdrawals are activated.

Voluntary exit procedures vary depending on your client.

:::caution
Exits are non-reversible; once you have exited you cannot restart your validator.
:::

### Lighthouse

In order to initiate an exit, users can use the lighthouse account validator exit command.

```bash
lighthouse --network gnosis account validator exit --keystore /path/to/keystore --beacon-node http://consensus:5052
```

* For more info, see the [Lighthouse Voluntary Exit docs](https://lighthouse-book.sigmaprime.io/voluntary-exit.html).


### Lodestar

Follow the syntax of the Lodestar CLI commands and their options.

```bash
account validator voluntary-exit --publicKey 0xF00
```

* For more info, see the [Lodestar Command Line Reference doc](https://chainsafe.github.io/lodestar/reference/cli/#validator-voluntary-exit).


### Nimbus

To perform a voluntary exit, make sure your beacon node is running, then run:

```bash
build/nimbus_beacon_node deposits exit --data-dir=build/data/shared_gnosis_0 --validator=<VALIDATOR_PUBLIC_KEY>
```

* For more info, see the Nimbus [Perform a voluntary exit](https://nimbus.guide/voluntary-exit.html) docs.


### Prysm

Login to your node and use the following command to request a voluntary exit. Replace \<PUBKEY\_1> with each public key you want to exit.

```bash
prysm.sh validator accounts voluntary-exit
```

* For more info, see the Prysm [Exit your validator](https://docs.prylabs.network/docs/wallet/exiting-a-validator/) doc.

### Teku

Use the voluntary-exit subcommand to initiate a voluntary exit for specified validators.

```bash
teku voluntary-exit --beacon-node-api-endpoint=http://consensus:5051 \
--validator-keys=validator/keys/validator_ABC.json:validator/passwords/validator_ABC.txt
```

* For more info, see the Teku [Voluntarily exit a validator](https://docs.teku.consensys.net/en/latest/HowTo/Voluntary-Exit/) docs.