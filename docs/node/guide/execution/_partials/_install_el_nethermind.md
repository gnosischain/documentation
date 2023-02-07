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

- Install dependencies
    ```shell
    sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
    ```

- Copy the download link for Linux, MacOS or Arm64 package from the [Nethermind download page](https://downloads.nethermind.io/).

- Download Nethermind
    ```shell
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Unzip the downloaded file
    ```shell
    unzip [FILE_NAME] -d execution
    ```

- Get into the folder
    ```shell
    cd execution
    ```

- Execute Nethermind
    ```shell
    ./Nethermind.Runner \
        --config gnosis \
        --JsonRpc.Enabled true \
        --HealthChecks.Enabled true \
        --HealthChecks.UIEnabled true \
        --JsonRpc.EnginePort=8551 \
        --JsonRpc.JwtSecretFile=../jwtsecret/jwt.hex
    ```
                            
</TabItem>
<TabItem value="win">

- Download the Windows package from the [Nethermind download page](https://downloads.nethermind.io/).

- Unzip the file in the `execution` folder created in the previous step.

- Navigate to the `execution` folder
    ```shell
    cd execution
    ```

- Run the following command:
    ```shell
    .\Nethermind.Runner.exe \
        --config gnosis \
        --JsonRpc.Enabled true \
        --HealthChecks.Enabled true \
        --HealthChecks.UIEnabled true \
        --JsonRpc.EnginePort=8551 \
        --JsonRpc.JwtSecretFile=../jwtsecret/jwt.hex
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

- Install dependencies
    ```shell
    sudo apt-get update && sudo apt-get install libsnappy-dev libc6-dev libc6 unzip -y
    ```

- Copy the download link for Linux, MacOS or Arm64 package from the [Nethermind download page](https://downloads.nethermind.io/).

- Download Nethermind
    ```shell
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Unzip the downloaded file
    ```shell
    unzip [FILE_NAME] -d execution
    ```

- Get into the folder
    ```shell
    cd execution
    ```

- Execute Nethermind
    ```shell
    ./Nethermind.Runner \
        --config chiado \
        --JsonRpc.Enabled true \
        --HealthChecks.Enabled true \
        --HealthChecks.UIEnabled true \
        --JsonRpc.EnginePort=8551 \
        --JsonRpc.JwtSecretFile=../jwtsecret/jwt.hex
    ```

</TabItem>
<TabItem value="win">

- Download the Windows package from the [Nethermind download page](https://downloads.nethermind.io/).

- Unzip the file in the `execution` folder created in the previous step.

- Navigate to the `execution` folder
    ```shell
    cd execution
    ```

- Run the following command:
    ```shell
    .\Nethermind.Runner.exe \
        --config chiado \
        --JsonRpc.Enabled true \
        --HealthChecks.Enabled true \
        --HealthChecks.UIEnabled true \
        --JsonRpc.EnginePort=8551 \
        --JsonRpc.JwtSecretFile=../jwtsecret/jwt.hex
    ```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

:::info Upgrading?
Remove `AuraMerge.Enabled` since it is now covered in the `Merge.Enabled` key.
:::