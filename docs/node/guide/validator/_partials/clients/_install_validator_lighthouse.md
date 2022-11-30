import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="win">

:::info
Lighthouse only runs on Linux. To run it on Windows, [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.
:::

</TabItem>
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

To run a validator, we need to first import the keys generated in the previous step.

* In a new command line window, navigate to the `consensus` folder and execute Lighthouse validator client
* To ease the import process, we will create a `password.txt` file containing the password used to encrypt the validator keys.

```shell   
echo 'PLACE_HERE_YOUR_PASSWORD' > keystores/validator_keys/password.txt
```
    
* Import the validator keys using lighthouse:

```shell
./lighthouse account_manager validator import \
    --network gnosis \
    --password-file keystores/validator_keys/password.txt \
    --reuse-password \
    --directory keystores/validator_keys \
    --datadir .
```
    
* Start your lighhouse validator:

```shell
./lighthouse validator_client \
    --network gnosis \
    --validators-dir validators \
    --enable-doppelganger-protection \
# highlight-start
    --graffiti "gnosis-docs-graffiti" # Change this value 
# highlight-end
```
    
Replace `gnosis-docs-graffiti` with your [graffiti](https://lighthouse-book.sigmaprime.io/graffiti.html). Learn more about the [`enable-doppelganger-protection`](https://lighthouse-book.sigmaprime.io/validator-doppelganger.html) flag in Lighthouse docs.



</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>
       
</Tabs>
