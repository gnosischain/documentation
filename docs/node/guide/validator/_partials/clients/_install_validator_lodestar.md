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
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

To run a validator, we need to first import the keys generated in the previous step.

* In a new command line window, navigate to the `consensus` folder and execute Lodestar validator client
* To ease the import process, we will create a `password.txt` file containing the password used to encrypt the validator keys.

```shell   
echo 'PLACE_HERE_YOUR_PASSWORD' > keystores/password.txt
```

You can import the keys when starting the validator.

* Import the validator keys using lighthouse:

```shell
./lodestar validator \
    --network=gnosis \
    --importKeystores=/keystores \
    --importKeystoresPassword=keystores/password.txt \
    --directory keystores \
    --dataDir=/data/validators \ 
    # highlight-start
    --suggestedFeeRecipient=$FEE_RECIPIENT \ # Change this value
    # highlight-start
    # highlight-start
    --graffiti=$GRAFFITI  # Change this value
    # highlight-start
```
    
* Start your lighhouse validator:



Replace `$GRAFFITI` with your [graffiti](https://lighthouse-book.sigmaprime.io/graffiti.html)and `$FEE_RECIPIENT` with your fee recipient address. Make sure to delete `# Change this value` before running this command. Learn more about the CLI commands and their options [here](https://chainsafe.github.io/lodestar/reference/cli/)



</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>
       
</Tabs>
