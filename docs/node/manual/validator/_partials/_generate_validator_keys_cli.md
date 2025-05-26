import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger
We highly recommend generating keystores on a safe, completely offline device.

***Securely backup your mnemonic, keystores, and password and keep them in a safe place.***
:::

:::tip
Learn more about [keys](https://kb.beaconcha.in/ethereum-2-keys) and [withdrawal credentials](https://launchpad.ethereum.org/en/faq#withdrawal-credentials).
:::

<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="others">

- Copy the download link for Linux, MacOS or Arm64 package from the [ETHstaker Deposit CLI](https://github.com/eth-educators/ethstaker-deposit-cli/releases).

- Download the Validator Data Generation tool
    ```shell
    wget [URL_FROM_PREVIOUS_STEP]
    ```

- Unzip the downloaded file
    ```shell
    tar -xvf [FILE_NAME]
    ```

- Get into the folder
    ```shell
    cd deposit-cli-...
    ```

- Execute Validator Data Generation tool and follow the instructions.
    In case of doubts, check the [tool documentation](https://deposit-cli.ethstaker.cc/landing.html).
    > Tip: add the [`--eth1_withdrawal_address`](https://deposit-cli.ethstaker.cc/new_mnemonic.html) flag when creating your keys, **pointing to an address you control**.

    - If you want to generate a new mnemonic:
        ```shell
        ./deposit new-mnemonic --folder ../consensus/keystores
        ```
    
    - If you already have a mnemonic generated:
        ```shell
        ./deposit existing-mnemonic --folder ../consensus/keystores
        ```
        You will be asked for a `mnemonic` and `index` (key number).

</TabItem>
<TabItem value="win">

- Download the Windows version of the [ETHstaker Deposit CLI](https://github.com/eth-educators/ethstaker-deposit-cli/releases) from the releases page.
- Execute Validator Data Generation tool and follow the instructions.
    In case of doubts, check the [tool documentation](https://deposit-cli.ethstaker.cc/landing.html)

    - If you want to generate a new mnemonic:
        ```shell
        deposit.exe new-mnemonic --folder ../consensus/keystores
        ```

    - If you already have a mnemonic generated:
        ```shell
        deposit.exe existing-mnemonic --folder ../consensus/keystores
        ```
        You will be asked for a `mnemonic` and `index` (key number).

</TabItem>
</Tabs>

- Select the language of the UI and mnemonic.
- Choose the number of validators. Remember: 1 GNO = 1 validator. You can run many validators in the same machine.
- 
<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
    <TabItem value="gnosis">Choose <code>gnosis</code> on the network/chain name.</TabItem>
    <TabItem value="chiado">Choose <code>chiado</code> on the network/chain name.</TabItem>
</Tabs>

- Create a password to encrypt the keys.
- The mnemonic (seed phrase) will show on screen. Save it in a secure place (ideally offline).
- Type your mnemonic to confirm in the tool.
- Wait until the keys are created. Two types of files will be generated:
    - `deposit_data-*.json`
    - One `keystore-*.json` per validator
- Save the location of the generated keys, and copy them in a backup USB memory or any other secure storage.

:::success
For custom setup and more instructions, check the [ETHstaker Deposit CLI documentation](https://deposit-cli.ethstaker.cc/landing.html).
:::
