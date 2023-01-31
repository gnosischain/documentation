import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs className="tabgroup-with-label os-tabgroup" groupId="os" defaultValue="others" values={[
    {label: 'Linux, MacOS, Arm64', value: 'others'},
    {label: 'Windows', value: 'win'}
]}>
<TabItem value="win">

:::info
If you're using Windows, please [Install Linux on Windows with WSL](https://learn.microsoft.com/en-us/windows/wsl/install), and follow the instructions on the WSL terminal.
:::

</TabItem>
</Tabs>

<Tabs className="tabgroup-with-label network-tabgroup" groupId="network" defaultValue="gnosis" values={[
    {label: 'Gnosis', value: 'gnosis'},
    {label: 'Chiado', value: 'chiado'}
]}>
<TabItem value="gnosis">

To run a validator, we need to first import the keys generated in the previous step.

* In a new command line window, navigate to the `consensus` folder and execute Teku validator client
* To ease the import process, we will create a password txt file containing the password used to encrypt the validator keys.



```shell   
echo 'PLACE_HERE_YOUR_PASSWORD' > keystores/keystore-${m_...}.json.txt
```

If the Launchpad creates a key named keystore-m_12381_3600_0_0_0-1596485378.json, then the password file must be named keystore-m_12381_3600_0_0_0-1596485378.txt to comply with [EIP-2335](https://docs.teku.consensys.net/en/latest/HowTo/Get-Started/Connect/Connect-To-Mainnet/#create-a-password-file-for-each-validator-key)

You can import the keys when starting the validator.

* navigate to teku folder

```shell
cd teku-${version}
```

* Execute Teku Beacon Chain and Validator(s):

```shell
./bin/teku   \
  --ee-endpoint=http://localhost:8551   \
  --ee-jwt-secret-file=../jwtsecret/jwt.hex \
  --metrics-enabled=true    \
  --rest-api-enabled=true   \
  --validators-proposer-default-fee-recipient=${Fee Recipient Address}  \
  --validator-keys=${path to key file}:${path to password file}
```
    
If you wish to run validator only, run the following command:

```shell
./bin/teku validator-client \
    --beacon-node-api-endpoint=${endpoint} \
    --validator-keys=${path to key file}:${path to password file}
```

Replace `$FEE_RECIPIENT` with your fee recipient address, `${path to key file}` and `{path to password file}`with the location where `keystores- *.json` and `keystore- *.txt` are stored, and `${endpoint}` with the endpoint of the beacon node’s REST API (default is http://127.0.0.1:5051). Learn more about the CLI commands and their options [here](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/).



</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>
       
</Tabs>
