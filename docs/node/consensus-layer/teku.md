---
description: Setup
---

# Teku


#### Overview {#overview}

Teku is a consensus client built to meet institutional needs and security requirements. Built by PegaSys, an arm of ConsenSys, who are dedicated to building enterprise-ready clients and tools for interacting with the core Ethereum platform. More information on [Teku](https://consensys.net/knowledge-base/ethereum-2/teku/).


**Teku reference:**

- [General Docs](https://docs.teku.consensys.net/en/latest/)
- [CLI Reference](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/)


### Option 1: with docker


Images are referenced under the following pattern `consensys/teku:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/consensys/teku/tags).


# Starting Teku


**1. Folder Structure**

Create your folder structure:

```
mkdir -p /home/$USER/gnosis/el-client
mkdir -p /home/$USER/gnosis/cl-client/beacon
mkdir -p /home/$USER/gnosis/cl-client/validator/keys
mkdir /home/$USER/gnosis/cl-client/validator/passwords
mkdir /home/$USER/gnosis/cl-client/validator/slashprotection
mkdir /home/$USER/gnosis/jwtsecret
```

```
/home/$USER/gnosis/
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── beacon/
    └── validators/
        ├── keys/
        ├── passwords/
        └── slashprotection/
```


**2. Docker Compose**

Create a docker-compose file with your favorite text editor in `/home/$USER/gnosis/docker-compose.yml`:


<details>
  <summary>Example Docker Compose file</summary>
  <div>
    <pre>
    version: "3"<br/>
    services:<br/>
    <br/>
    &nbsp;&nbsp;el-client:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: nethermind/nethermind:latest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;stop_grace_period: 1m<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--config xdai<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--datadir /data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Enabled true<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Host 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.Port 8545<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.JwtSecretFile /jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.EngineHost 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--JsonRpc.EnginePort 8551<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Merge.Enabled true<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.100<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;ports:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "30303:30303/tcp"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "30303:30303/udp"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/el-client:/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    &nbsp;&nbsp;cl-client:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;user: "$&#123;PUID:-1000&#125;"<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: consensys/teku:latest<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--network=gnosis<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--data-base-path=/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ee-endpoint=http://192.168.32.100:8551<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--ee-jwt-secret-file=/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--eth1-deposit-contract-max-request-size=8000<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--p2p-advertised-ip=$WAN_IP<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--log-destination=CONSOLE<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--validator-keys=/data/validator/keys:/data/validator/passwords<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--validators-proposer-default-fee-recipient=$FEE_RECIPIENT<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--validators-keystore-locking-enabled=false<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--validators-graffiti=$GRAFFITI<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--initial-state=$&#123;CHECKPOINT_URL&#125;/eth/v2/debug/beacon/states/finalized<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.101<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;ports:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 9000:9000 # p2p<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client:/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;environment:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JAVA_OPTS=-Xmx4g<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    networks:<br/>
    &nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;pam:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: default<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- subnet: 192.168.32.0/24<br/>
    </pre>
  </div>
</details>


**3. Environment Variables**

Add an `.env` file with your WAN IP (`curl https://ipinfo.io/ip`), fee recepient (your Gnosis address), graffiti, checkpoint url, and your user id (PUID, `id --user`) in `/home/$USER/gnosis/.env`.

```
WAN_IP:123.456.789.012
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/teku
CHECKPOINT_URL=https://checkpoint.gnosischain.com/
PUID=1000
```


**4. Keystore Location**

Add your keystores in `/home/$USER/gnosis/cl-client/validator/keys/` and their password in a file `/home/$USER/gnosis/cl-client/validator/passwords` to get this file structure:

:::note
When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))
:::

```
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── beacon/
    └── validators/
        ├── keys/
        │   ├── keystore-001.json
        │   └── keystore-002.json
        ├── passwords/
        │   └── keystore-001.txt
        │   └── keystore-002.txt
        └── slashprotection/
```


**5. JWT Secret**

Create a new `jwtsecret.json` token:

```
openssl rand -hex 32 | tr -d "\n" > /home/$USER/gnosis/jwtsecret/jwtsecret.json
```


**6. Import Keystores**

Import your validators:

When the Teku `cl-client` container starts, it will search the directories for keystores and passwords, and import them automatically.

:::note
When specifying directories, Teku expects to find identically named keystore and password files. For each keystore file a corresponding password txt file is required. This is the case even if the password is the same for each validator. For example `validator_217179e.json` and `validator_217179e.txt`. ([source](https://docs.teku.consensys.net/en/latest/Reference/CLI/CLI-Syntax/#validator-keys))
:::


**7. Start Containers**

Start the execution layer client and consensus layer client listed in the compose file:

```
cd /home/$USER/gnosis
docker-compose up -d
```


**8. Monitor Logs**

Check your logs for each service (`el-client` or `cl-client`) with:

```
docker logs -f --tail 500 <service>
```


**9. Make a Deposit**

Make deposit once your node is fully synced (this can take a few hours depending on setup).

:::caution
**At this stage you should have your EL and CL fully synced and validators must be imported to your CL.**
:::

_See section Fund your Validator_ 


**10. Updating your Node**

To update, just pull the new images, then stop and restart your docker-compose file:

```
cd /home/$USER/gnosis
docker-compose pull
docker-compose stop
docker-compose up -d
```
