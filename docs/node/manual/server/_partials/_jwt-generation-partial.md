import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JWTGenerator from '@site/src/components/JWTGenerator';

The HTTP connection between your beacon node and execution node needs to be authenticated using a [JWT token](https://jwt.io/).

Use a utility like OpenSSL to create the token via command: 

```shell
openssl rand -hex 32 | tr -d "\n" > "./jwtsecret/jwt.hex"
```

<details>
    <summary>Other ways to generate the <code>jwt.hex</code> file</summary>
    

1. Use an execution or consensus client to generate the `./jwtsecret/jwt.hex` file (check their documentation).

If your client prints the token instead of writing the file, create the file by running:

```shell

echo 'PLACE_HERE_YOUR_TOKEN' > ./jwtsecret/jwt.hex

```

</details>