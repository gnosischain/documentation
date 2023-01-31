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
1. Java 11+


## Install and Run

- Go to the [Teku release page](https://github.com/ConsenSys/teku/releases) and copy the url of the binary distribution under **Downloads** section.


- Download the teku Source code .tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file and move under consensus directory
    ```bash
    tar -xvf VERSION.tar.gz --directory  consensus
    ```

- Get into the teku folder
    ```bash
    cd consensus && cd teku-${version} 
    ```

Your repo will look like this



```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 teku-${version}/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

If you're installing on macOS with Homebrew, check out [here](https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Installation-Options/Install-Binaries/#macos-with-homebrew).

Check that you are installing correctly by running `./bin/teku --help'


:::tip
You can run both beacon and validator with a single command. If you wish to run with a single command, skip to [step 4: Run a validator](../../README.md#step-4-run-a-validator).
:::

- Execute beacon node(Optional)

```
./bin/teku \
    --ee-endpoint=http://localhost:8551          \
    --ee-jwt-secret-file=../jwtsecret/jwt.hex   \
    --metrics-enabled=true                       \
    --rest-api-enabled=true
```

</TabItem>

<TabItem value="win">

## Prerequisites
1. Java 11+
2. [Microsoft Visual C++ 2010 security update](https://www.microsoft.com/en-us/download/details.aspx?id=26999)

## Install and Run

- Go to the [Teku release page](https://github.com/ConsenSys/teku/releases) and copy the url of the binary distribution under **Downloads** section.


- Download the teku Source code .tar.gz binary.
    ```bash
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Extract the downloaded file and move under consensus directory
    ```bash
    tar -xvf VERSION.tar.gz --directory  consensus
    ```

- Get into the teku folder
    ```bash
    cd consensus && cd teku-${version} 
    ```

Your repo will look like this



```
📂gnosis
├── 📂 jwtsecret/
├── 📂 execution/
└── 📂 consensus/
    ├── 📂 teku-${version}/
    ├── 📂 data/
    ├── 📂 keystores/
    └── 📂 validators/
```

If you're installing on macOS with Homebrew, check out [here](https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Installation-Options/Install-Binaries/#macos-with-homebrew).

Check that you are installing correctly by running `bin\teku --help'


:::tip
You can run both beacon and validator with a single command. If you wish to run with a single command, skip to [step 4: Run a validator](../../README.md#step-4-run-a-validator).
:::

- Execute beacon node(Optional)

```
./bin/teku \
    --ee-endpoint=http://localhost:8551          \
    --ee-jwt-secret-file=../jwtsecret/jwt.hex   \
    --metrics-enabled=true                       \
    --rest-api-enabled=true
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="chiado">

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
{label: 'Linux, MacOS, Arm64', value: 'others'},
{label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

Teku doesn't support Chiado at the moment.

</TabItem>
<TabItem value="win">

Teku doesn't support Chiado at the moment.

</TabItem>
</Tabs>

</TabItem>
</Tabs>