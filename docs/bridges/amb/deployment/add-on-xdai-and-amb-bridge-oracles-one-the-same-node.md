---
description: >-
  A step-by-step manual to deploy xDai bridge and Arbitrary Message Bridge
  oracles on the same node
---

# Add-on: GC and AMB bridge oracles on the same node

There are several benefits to hosting the xDai bridge and Arbitrary Message Bridge oracles on the same node:

* reduces the amount of hardware resources;
* reduces required work for node administration and maintenance;
* allows for local blockchain node sharing,  increasing bridge security.

In general the process to prepare the node to serve the xDai and AMB bridges consists of the following phases:

1. Configure and deploy the xDai bridge oracle.
2. Modify the configuration on the xDai bridge oracle’s node to use the local OpenEthereum instance and to run AMB oracle’s workers.
3. Synchronize the local OpenEthereum instance.
4. Run the oracles.

### Hardware Requirements

Minimums required to run xDai TokenBridge workers, OpenEthereum and the AMB workers on the same machine:

* 4 CPU cores and 8 GBs RAM
* 50 Gb disk memory

### Phase 1. Configure and deploy the xDai bridge oracle

The oracle deployment procedure uses ansible playbooks, so two system are required. One hosts the oracle and a second deploys the oracle.

1. System for **hosting the oracle**:
   * when creating the node, set a meaningful hostname that can identify this oracle instance (e.g. bridge-ProjectName)
   * record the IP address (required for file setup)
   * setup ssh access to your node via public+private keys (using passwords is less secure)
2. System for **deploying the oracle **(will run ansible playbooks). Installation assumptions:
   * Python 2 (v2.6-v2.7)/Python3 (v3.5+)
   * [Ansible v2.3+](https://docs.ansible.com/ansible/latest/installation\_guide/intro\_installation.html)
   * Git
3. Copy the private key to access the oracle host to `~/.ssh/` directory.
4.  Clone this repository and go to the deployment folder.

    ```
     $ git clone https://github.com/poanetwork/tokenbridge.git
     $ cd tokenbridge/deployment
    ```
5.  Create the file `hosts.yml` from `hosts.yml.example`

    ```
     $ cp hosts.yml.example hosts.yml
    ```

    `hosts.yml` should have the following structure:

    ```
     ---
     xdai-bridge:
       children:
         oracle:
           hosts:
             <ip.to.host>:
               ansible_user: <username to ssh into the host node. Typically ubuntu or root>
               ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: "cafecafe...cafecafe"
               syslog_server_port: "<destination to forward logs, e.g. papertrail>"
    ```

    _**Note**: the private key specified here is for the xDai bridge not for the AMB bridge._

6. Prepare the Infura project ID used by the oracle as the main JSON RPC endpoint to get updates from the Ethereum Mainnet.
7. Visit [http://etherscan.io/](http://etherscan.io) and [https://blockscout.com/xdai/mainnet](https://blockscout.com/xdai/mainnet) to write down the latest blocks produced by the Ethereum Mainnet and the Gnosis Chain.
8.  Create the file `group_vars/xdai-bridge.yml` with the following content:

    ```
     ---
     ## General settings
     ORACLE_BRIDGE_MODE: "ERC_TO_NATIVE"
     ORACLE_LOG_LEVEL: info

     ## Home contract
     COMMON_HOME_RPC_URL: "https://xdai.poanetwork.dev"
     COMMON_HOME_BRIDGE_ADDRESS: "0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6"
     ORACLE_HOME_RPC_POLLING_INTERVAL: 5000

     ## Foreign contract
     COMMON_FOREIGN_RPC_URL: "https://mainnet.infura.io/v3/<YOUR-INFURA-PROJECT-ID> https://mainnet.blockscout.com/"
     COMMON_FOREIGN_BRIDGE_ADDRESS: "0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016"
     ORACLE_FOREIGN_RPC_POLLING_INTERVAL: 15000

     ORACLE_TX_REDUNDANCY: true

     ## Home Gasprice
     COMMON_HOME_GAS_PRICE_FALLBACK: 0      # in wei
     COMMON_HOME_GAS_PRICE_FACTOR: 1
     ORACLE_HOME_GAS_PRICE_UPDATE_INTERVAL: 600000

     ## Foreign Gasprice
     COMMON_FOREIGN_GAS_PRICE_SUPPLIER_URL: gas-price-oracle
     COMMON_FOREIGN_GAS_PRICE_SPEED_TYPE: fast
     COMMON_FOREIGN_GAS_PRICE_FALLBACK: 100000000000   # in wei
     COMMON_FOREIGN_GAS_PRICE_FACTOR: 1
     ORACLE_FOREIGN_GAS_PRICE_UPDATE_INTERVAL: 600000

     ORACLE_HOME_START_BLOCK: <latest block from the Gnosis Chain>
     ORACLE_FOREIGN_START_BLOCK: <latest block from the Ethereum Mainnet>
    ```

    _Note:_ fill `COMMON_FOREIGN_RPC_URL`, `ORACLE_HOME_START_BLOCK` and `ORACLE_FOREIGN_START_BLOCK` with the information from the steps 6 and 7.
9.  Run the ansible playbook.

    ```
     $ ansible-playbook -e 'ansible_python_interpreter=/usr/bin/python3' -i hosts.yml site.yml
    ```

    If the private key file to access the host system by SSH differs from `id_rsa`, use another command:

    ```
     $ ansible-playbook -e 'ansible_python_interpreter=/usr/bin/python3' --private-key=~/.ssh/<priv-key-file> -i hosts.yml site.yml
    ```
10. When deployment is finished, login to the host system and stop the xDai bridge oracle.

    ```
    $ sudo systemctl stop poabridge
    ```
11. Since the RabbitMQ DB can be initialized on this stage, it is necessary to remove it:

    ```
    $ sudo rm -rf /home/poadocker/bridge_data/rabbitmq
    ```

### Phase 2. Re-configure the host environment for OpenEthereum and AMB

The steps below should be executed on the system **where the xDai bridge oracle was deployed**. It is assumed that the xDai oracle is stopped (`sudo systemctl stop poabridge`).

1.  Add the private key and address of the AMB oracle to `/root/.key`. Use your favorite editor `sudo nano /root/.key` or `sudo vim /root/.key`

    ```
     ## Validator-specific options                                                                                                          $
     ORACLE_VALIDATOR_ADDRESS=0x...
     ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY=cafecafe...cafecafe

     AMB_ORACLE_ADDRESS=0x...
     AMB_ORACLE_ADDRESS_PRIVATE_KEY=deadbeef...deadbeef
    ```
2.  Change directory to `/etc/init.d`

    ```
     $ cd /etc/init.d
    ```
3.  Replace the bridge startup script to use the new key for the AMB oracle:

    ```
     $ sudo curl https://github.com/poanetwork/tokenbridge/releases/download/2.6.0-rc3/xdai-amb-combined-poabridge \
            -L -o poabridge
    ```
4.  Update the system configuration to use the new startup script:

    ```
     $ sudo systemctl daemon-reload
    ```
5.  Change directory to `/home/poadocker/bridge/oracle`

    ```
     $ cd /home/poadocker/bridge/oracle
    ```
6. Visit [http://etherscan.io/](http://etherscan.io) and [https://blockscout.com/xdai/mainnet](https://blockscout.com/xdai/mainnet) to write down the latest blocks produced by the Ethereum Mainnet and the Gnosis Chain.
7.  Modify the oracle configuration file to add parameters for AMB oracle workers. The following line must be added to the end of the file (`sudo nano .env` or `sudo vim .env`):

    ```
     COMMON_HOME_RPC_URL=http://parity:8545/ https://xdai.poanetwork.dev

     ORACLE_TX_REDUNDANCY=true
     ORACLE_ALLOW_HTTP_FOR_RPC=yes

     AMB_HOME_ADDRESS=0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59
     AMB_FOREIGN_ADDRESS=0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e

     AMB_QUEUE_URL=amqp://rabbit-amb
     AMB_REDIS_URL=redis://redis-amb

     AMB_HOME_START_BLOCK=<latest block from the Gnosis Chain>
     AMB_FOREIGN_START_BLOCK=<latest block from the Ethereum Mainnet>
    ```

    _Note 1:_ the file may already have `ORACLE_ALLOW_HTTP_FOR_RPC` set to 'no' and `ORACLE_TX_REDUNDANCY` set to 'True'. Remove these old lines.

    _Note 2:_ fill `AMB_HOME_START_BLOCK` and `AMB_FOREIGN_START_BLOCK` with the information from step 5.
8.  Replace the first docker compose configuration file (`docker-compose.yml`) with a new one to optimize the number of the xDai bridge oracle workers:

    ```
     $ curl https://github.com/poanetwork/tokenbridge/releases/download/2.6.0-rc3/xdai-oracle-wo-senderhome-docker-compose.yml \
            -L -o docker-compose.yml
    ```
9.  Replace the second docker compose configuration file (`docker-compose-erc-native.yml`) with a new one so that the service OpenEthereum and AMB workers are added:

    ```
     $ curl https://github.com/poanetwork/tokenbridge/releases/download/2.6.0-rc3/xdai-parity-amb-combined-docker-compose-erc-native.yml \
            -L -o docker-compose-erc-native.yml
    ```

### Phase 3. Synchronize the local OpenEthereum instance

This step assumes that the current working directory is `/home/poadocker/bridge/oracle`.

Run OE to synchronize the chain (it will take few minutes depending on the internet channel bandwidth). As soon as you see new blocks appearing every 5 seconds, the service can be stopped (by `Ctrl+C`):

```
$ sudo docker pull openethereum/openethereum:v3.0.1
$ sudo docker tag openethereum/openethereum:v3.0.1 openethereum/openethereum:latest
$ sudo -u "poadocker" docker-compose -f docker-compose-erc-native.yml up parity
```

### Phase 4. Run the oracles

```
$ sudo systemctl start poabridge
```

Check the OpenEthereum service was run:

```
$ sudo docker logs parity
```

Make sure bridge workers are able to access OpenEthereum’s RPC service:

```
$ sudo docker exec -ti oracle_bridge_affirmation_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_request_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_senderhome_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_transfer_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_amb_affirmation_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_amb_request_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
$ sudo docker exec -ti oracle_bridge_amb_senderhome_1 curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' http://parity:8545/
```

