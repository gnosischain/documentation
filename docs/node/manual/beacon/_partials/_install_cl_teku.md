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

## Prerequisites
1. Java runtime compatible with the current Teku release. See [Teku system requirements](https://docs.teku.consensys.io/get-started/system-requirements).

## Install and Run

- Go to the [Teku release page](https://github.com/ConsenSys/teku/releases) and copy the URL for your OS/architecture under **Downloads**.

- Download the Teku archive.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file under the `consensus` directory.
    ```bash
    tar -xvf [FILE_NAME].tar.gz --directory consensus
    ```

- Get into the Teku folder.
    ```bash
    cd consensus && cd teku-[VERSION]
    ```

Check that Teku is installed correctly:

```bash
./bin/teku --help
```

:::tip
You can run both beacon and validator with a single command. If you want this mode, continue to [Step 4: Run a validator](../../README.md#step-4-run-a-validator).
:::

- Execute beacon node (optional):

```shell
./bin/teku \
    --network=gnosis \
    --ee-endpoint=http://localhost:8551 \
# highlight-next-line
    --ee-jwt-secret-file=../jwtsecret/jwt.hex \
    --metrics-enabled=true \
    --rest-api-enabled=true \
# highlight-next-line
    --checkpoint-sync-url=https://checkpoint.gnosischain.com
```

You can also use `--initial-state` if you already have a checkpoint state file.

</TabItem>

<TabItem value="win">

## Prerequisites
1. Java runtime compatible with the current Teku release. See [Teku system requirements](https://docs.teku.consensys.io/get-started/system-requirements).
2. [Microsoft Visual C++ 2010 security update](https://www.microsoft.com/en-us/download/details.aspx?id=26999)

## Install and Run

- Go to the [Teku release page](https://github.com/ConsenSys/teku/releases) and copy the URL for your OS/architecture under **Downloads**.
- Download and extract Teku in your `consensus` directory.
- Run the same beacon command shown above from your Windows shell (or from WSL).

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
- `--checkpoint-sync-url=https://checkpoint.gnosischain.com` with `--checkpoint-sync-url=https://checkpoint.chiadochain.net`

</TabItem>
<TabItem value="win">

Use the same setup as Gnosis and replace:

- `--network=gnosis` with `--network=chiado`
- `--checkpoint-sync-url=https://checkpoint.gnosischain.com` with `--checkpoint-sync-url=https://checkpoint.chiadochain.net`

</TabItem>
</Tabs>

</TabItem>
</Tabs>
