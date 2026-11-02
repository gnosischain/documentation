import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
{label: 'Gnosis', value: 'gnosis'},
{label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

- Download Nimbus from the [official release page](https://github.com/status-im/nimbus-eth2/releases) and extract it in your `consensus` directory.

- Run Nimbus beacon node.

```shell
./nimbus_beacon_node \
    --network=gnosis \
    --data-dir=./data \
    --el=http://127.0.0.1:8551 \
    --jwt-secret=../jwtsecret/jwt.hex
```

:::tip
Nimbus can run validator duties in the beacon node process. Once your beacon node is synced, continue to [Step 4: Run a validator](../../README.md#step-4-run-a-validator) to import your keys and restart Nimbus with a fee recipient.
:::

</TabItem>
<TabItem value="win">

- Download the Windows archive from the [official release page](https://github.com/status-im/nimbus-eth2/releases) and extract it in your `consensus` directory.

- Run the same beacon node command from PowerShell, replacing `./nimbus_beacon_node` with `./nimbus_beacon_node.exe`.

</TabItem>
</Tabs>

</TabItem>
<TabItem value="chiado">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

Use the same setup as Gnosis and replace:

- `--network=gnosis` with `--network=chiado`

</TabItem>
<TabItem value="win">

Use the same setup as Gnosis and replace:

- `--network=gnosis` with `--network=chiado`
- `./nimbus_beacon_node` with `./nimbus_beacon_node.exe`

</TabItem>
</Tabs>

</TabItem>
</Tabs>
