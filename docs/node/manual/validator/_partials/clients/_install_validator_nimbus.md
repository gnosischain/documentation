import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="win">

:::info
Nimbus supports Windows natively. Run the same commands from PowerShell, replacing `./nimbus_beacon_node` with `./nimbus_beacon_node.exe`.
:::

</TabItem>
<TabItem value="others"></TabItem>
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

Nimbus runs validator duties in the beacon node process, so there is no separate validator client to launch in the interactive guide.

- Stop the beacon node if it is still running.

- Import the validator keys generated in the previous step:

```shell
./nimbus_beacon_node deposits import \
    --data-dir=./data \
    ./keystores
```

Nimbus will print `Keystore imported` for each imported validator key.

- Restart Nimbus beacon node with your execution client connection and validator settings:

```shell
./nimbus_beacon_node \
    --network=gnosis \
    --data-dir=./data \
    --el=http://127.0.0.1:8551 \
    --jwt-secret=../jwtsecret/jwt.hex \
    --suggested-fee-recipient=${FEE_RECIPIENT} \
    --graffiti=${GRAFFITI}
```

Replace `suggested-fee-recipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt completely. It is strongly recommended that you configure this value in your setup.
Learn more about [suggested fee recipient](https://nimbus.guide/suggested-fee-recipient.html) flag in Nimbus docs.

Replace `graffiti` with your own [graffiti](https://nimbus.guide/graffiti.html). It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.

To confirm the validator keys were loaded, look for `Local validator attached` in the Nimbus logs after restart.

</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>

</Tabs>
