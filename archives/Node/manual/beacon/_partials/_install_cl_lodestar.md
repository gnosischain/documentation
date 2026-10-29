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

- Download Lodestar from the [official release page](https://github.com/ChainSafe/lodestar/releases) and extract it in your `consensus` directory.

- Run Lodestar beacon node.
    ```bash
    ./lodestar beacon \
      --network=gnosis \
      --dataDir=./data \
      --execution.urls=http://localhost:8551 \
      --jwtSecret=../jwtsecret/jwt.hex \
      --metrics=true \
      --metrics.port=8008 \
      --checkpointSyncUrl=https://checkpoint.gnosischain.com
    ```

</TabItem>
<TabItem value="win">

Lodestar supports Windows, but for consistency with the rest of this guide we recommend [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

Run the same command from the WSL terminal.

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
- `--checkpointSyncUrl=https://checkpoint.gnosischain.com` with `--checkpointSyncUrl=https://checkpoint.chiadochain.net`

</TabItem>
<TabItem value="win">

Use the same setup as Gnosis and replace:

- `--network=gnosis` with `--network=chiado`
- `--checkpointSyncUrl=https://checkpoint.gnosischain.com` with `--checkpointSyncUrl=https://checkpoint.chiadochain.net`

</TabItem>
</Tabs>

</TabItem>
</Tabs>
