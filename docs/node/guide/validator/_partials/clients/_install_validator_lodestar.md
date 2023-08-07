import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="win">

:::info
Lodestar only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.
:::

</TabItem>
<TabItem value="others"></TabItem>
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

To run a validator, we need to first import the keys generated in the previous step.

* In a new command line window, navigate to the `consensus` folder and execute Lodestar validator client
* To ease the import process, we will create a `password.txt` file containing the password used to decrypt the validator keys.

```shell
echo 'PLACE_HERE_YOUR_PASSWORD' > keystores/password.txt
```

You can import the keys when starting the validator.

* Import the validator keys using Lodestar:

```shell
./lodestar validator \
    --network=gnosis \
    --importKeystores=keystores \
    --importKeystoresPassword=keystores/password.txt \
    --dataDir=/data/validators \ 
# highlight-start
    --suggestedFeeRecipient=${FEE_RECIPIENT} \ 
    --graffiti=${GRAFFITI} 
# highlight-end
```

Replace `suggestedFeeRecipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt completely. It is strongly recommended that you configure this value in your setup.
Learn more about [suggestedFeeRecipient](https://chainsafe.github.io/lodestar/usage/validator-management/#configuring-the-fee-recipient-address) flag in Lodestar docs.

Replace `graffiti` with your own [graffiti](https://chainsafe.github.io/lodestar/reference/cli/). It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.




</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>
       
</Tabs>
