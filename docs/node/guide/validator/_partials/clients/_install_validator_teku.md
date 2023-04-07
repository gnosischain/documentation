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
<TabItem value="others"></TabItem>
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
  --network=gnosis \
  --ee-endpoint=http://localhost:8551   \
# highlight-next-line
  --ee-jwt-secret-file=${PATH_TO_JWT_SECRET} \
  --metrics-enabled=true    \
  --rest-api-enabled=true   \
# highlight-start
  --initial-state=https://checkpoint.gnosis.gateway.fm//eth/v2/debug/beacon/states/finalized \
  --validators-proposer-default-fee-recipient=${Fee Recipient Address}  \
  --validator-keys=${path to key file}:${path to password file}
  --validators-graffiti=${GRAFFITI}
# highlight-end
```
    
If you wish to run validator only, run the following command:

```shell
./bin/teku validator-client \
  --network=gnosis \
# highlight-start
  --beacon-node-api-endpoint=${endpoint} \
  --validator-keys=${path to key file}:${path to password file}
# highlight-end
```

Replace `validators-proposer-default-fee-recipient` with your Gnosis address. This fee recipient address will receive tips from user transactions from the block the validator proposed. If not set, the tips will be sent to zero address, that is burnt competely. It is strongly recommended that you configure this value in your setup.
Learn more about [validators-proposer-default-fee-recipient](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-proposer-default-fee-recipient) flag in Teku docs.

Replace [`validator-keys`](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validator-keys) with the location where `keystores- *.json` and `keystore- *.txt` are stored, and [`beacon-node-api-endpoint`](https://docs.teku.consensys.net/Reference/CLI/Subcommands/Validator-Client#beacon-node-api-endpoint-beacon-node-api-endpoints) with the endpoint of the beacon node’s REST API (default is http://127.0.0.1:5051). 

Replace [`validators-graffiti`](https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-graffiti) with your own graffiti.  It is an optional field that can be used to add a message to the [block](https://ethereum.org/en/developers/docs/blocks/) by the proposer.


Learn more about the CLI commands and their options [here](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/).





</TabItem>
<TabItem value="chiado">
    <div data-comment="TODO: document chiado validation process"></div>
</TabItem>
       
</Tabs>
