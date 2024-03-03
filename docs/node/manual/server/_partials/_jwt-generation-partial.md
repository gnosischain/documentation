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
    
<!-- Create fix for rendering -->
<!-- 1. Use the auto-generated random one below (<a href="#generate-jwt" onClick={()=>{ javascript:window.location.reload(); }}>regenerate</a>), and place it into the `./jwtsecret/jwt.hex` file: -->

<!-- <JWTGenerator /> -->

2. Use an execution or consensus client to generate the `./jwtsecret/jwt.hex` file (check their documentation).
3. Use an online generator like [this](https://seanwasere.com/generate-random-hex/). Copy and paste this value into a `./jwtsecret/jwt.hex` file.

For options (1) and (3), create the file by running:

```shell

echo 'PLACE_HERE_YOUR_TOKEN' > ./jwtsecret/jwt.hex

```

</details>