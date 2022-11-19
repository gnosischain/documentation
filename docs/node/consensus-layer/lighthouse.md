---
description: Setup
---

# Lighthouse


#### Overview {#overview}

Lighthouse is an Ethereum and Gnosis Chain consensus client written in Rust by [Sigma Prime](https://lighthouse.sigmaprime.io/).


**Lighthouse reference:**

[https://lighthouse-book.sigmaprime.io/](https://lighthouse-book.sigmaprime.io/) 


### Option 1: with docker


Images are referenced under the following pattern `sigp/lighthouse:{image-tag}` with the `image-tag` referring to the image available on [Docker Hub](https://hub.docker.com/r/sigp/lighthouse/tags).

Most users should use the `latest-modern` tag, which corresponds to the latest stable release of Lighthouse with optimizations enabled. If you are running on older hardware then the default latest image bundles a portable version of Lighthouse which is slower but with better hardware compatibility.


# Starting Lighthouse


**1. Folder Structure**

Create your folder structure:

```
mkdir -p /home/$USER/gnosis/el-client
mkdir -p /home/$USER/gnosis/cl-client/data
mkdir /home/$USER/gnosis/cl-client/keystores
mkdir /home/$USER/gnosis/cl-client/validators
mkdir /home/$USER/gnosis/jwtsecret
```

```
/home/$USER/gnosis/
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── data/
    ├── keystores/
    └── validators/
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
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: sigp/lighthouse:latest-modern<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- el-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lighthouse beacon_node<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--network gnosis<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--discovery-port 12000<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--port 13000<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--execution-endpoint http://192.168.32.100:8551<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--execution-jwt /jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--datadir /data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--http<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--http-address 192.168.32.101<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--enr-address $WAN_IP<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--enr-udp-port 12000<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--target-peers 80<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--debug-level info<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--suggested-fee-recipient $FEE_RECIPIENT<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--checkpoint-sync-url $CHECKPOINT_URL<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.101<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;ports:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "12000:12000/udp" #p2p<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "13000:13000/tcp" #p2p<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client/data:/data<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/jwtsecret/jwtsecret.json:/jwtsecret.json<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;logging:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;driver: "local"<br/>
    <br/>
    &nbsp;&nbsp;validator:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;hostname: validator<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;container_name: validator<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;image: sigp/lighthouse:latest-modern<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;restart: always<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- cl-client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;command: |<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lighthouse validator_client<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--network gnosis<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--enable-doppelganger-protection<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--validators-dir /data/validators<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--beacon-nodes http://192.168.32.101:5052<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--suggested-fee-recipient $FEE_RECIPIENT<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--graffiti $GRAFFITI<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;networks:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gnosis_net:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ipv4_address: 192.168.32.102<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /home/$USER/gnosis/cl-client/validators:/data/validators<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/timezone:/etc/timezone:ro<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /etc/localtime:/etc/localtime:ro<br/>
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

Add an `.env` file with your WAN IP (`curl https://ipinfo.io/ip`), fee recepient (your Gnosis address), graffiti, and checkpoint url in `/home/$USER/gnosis/.env`.

```
WAN_IP:123.456.789.012
FEE_RECIPIENT=0x0000000000000000000000000000000000000000
GRAFFITI=gnosischain/lighthouse
CHECKPOINT_URL=https://checkpoint.gnosischain.com/
```


**4. Keystore Location**

Add your keystores in `/home/$USER/gnosis/cl-client/keystores/` and their password in a file `/home/$USER/gnosis/cl-client/keystores/password.txt` to get this file structure:

:::note
Note, keystores MUST follow one of these file names

- `keystore-m_12381_3600_[0-9]+_0_0-[0-9]+.json` The format exported by the `eth2.0-deposit-cli` library ([source](https://github.com/sigp/lighthouse/blob/2983235650811437b44199f9c94e517e948a1e9b/common/account_utils/src/validator_definitions.rs#L402))
- `keystore-[0-9]+.json` The format exported by Prysm ([source](https://github.com/sigp/lighthouse/blob/2983235650811437b44199f9c94e517e948a1e9b/common/account_utils/src/validator_definitions.rs#L411))
:::

```
/home/$USER/gnosis/
├── docker-compose.yml
├── .env
├── jwtsecret/
├── el-client/
└── cl-client/
    ├── data/
    ├── keystores/
    │   ├── keystore-001.json
    │   ├── keystore-002.json
    │   └── password.txt
    └── validators/
```


**5. JWT Secret**

Create a new `jwtsecret.json` token:

```
openssl rand -hex 32 | tr -d "\n" > /home/$USER/gnosis/jwtsecret/jwtsecret.json
```


**6. Import Keystores**

Import your validators:

```
docker run --rm --volume /home/$USER/gnosis/cl-client/keystores:/keystores --volume /home/$USER/gnosis/cl-client:/data sigp/lighthouse:latest-modern lighthouse account validator import --network gnosis --password-file /keystores/password.txt --reuse-password --directory /keystores --datadir /data
```


**7. Start Containers**

Start the execution layer client, consensus layer client, and validator service listed in the compose file:

```
cd /home/$USER/gnosis
docker-compose up -d
```


**8. Monitor Logs**

Check your logs for each service (`el-client`, `cl-client`, or `validator`) with:

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
