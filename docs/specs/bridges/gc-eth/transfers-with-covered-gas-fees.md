---
description: >-
  This page describes how to run oracle workers which allow to execute transfers
  with covered gas fess
---

# Transfers with covered gas fees

Some 3rd party services which uses AMB to send messages from the Gnosis Chain to the Ethereum Mainnet are able to cover gas fees required for the execution of the message on the Ethereum Mainnet. It could incentivise appearance of independent bridge oracles which could handle such messages - the oracle needs some small amount of ether for execution which will not be spent since the messages will compensate the oracle funds spent for the transaction execution.

Recently Tornado Cash Nova introduces for their users ability to pay for withdrawal transactions execution. So, this page will describe how to setup the bridge oracle to execute Tornado's transactions:

1\. Setup a machine with docker and docker-compose packages.

2\. Create a directory where the oracle's configuration and database is held.

3\. Go to this new directory and create a `docker-compose.yml` file there with the following content:

```
version: '2.4'
services:
  redis:
    command: [redis-server, --appendonly, 'yes']
    cpus: 0.1
    hostname: redis
    image: redis:4
    mem_limit: 500m
    restart: unless-stopped
    volumes: ['./redis:/data']
  bridge_mevWatcher:
    depends_on: 
      - redis
    cpus: 0.1
    mem_limit: 500m
    image: poanetwork/tokenbridge-oracle:latest
    environment:
      NODE_ENV: production
      ORACLE_LOG_LEVEL: 'info'
      ORACLE_BRIDGE_MODE: 'ARBITRARY_MESSAGE'
      COMMON_HOME_RPC_URL: 'https://rpc.gnosischain.com/'
      COMMON_HOME_BRIDGE_ADDRESS: '0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59'
      ORACLE_HOME_RPC_POLLING_INTERVAL: '5000'
      ORACLE_HOME_TO_FOREIGN_ALLOWANCE_LIST: '/mono/oracle/access-lists/allowance_list.txt'
      COMMON_FOREIGN_RPC_URL: 'https://mainnet.infura.io/v3/...'
      COMMON_FOREIGN_BRIDGE_ADDRESS: '0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e'
      ORACLE_ALWAYS_RELAY_SIGNATURES: 'true'
      ORACLE_REDIS_URL: 'redis://redis'
      ORACLE_VALIDATOR_ADDRESS: '0x...'
      ORACLE_MEV_FOREIGN_HELPER_CONTRACT_ADDRESS: '0xEB4c5AB9B36437f969888be99AF42fC9087005A5'
      ORACLE_MEV_FOREIGN_MIN_GAS_PRICE: '20000000000' # 20 gwei
      ORACLE_MEV_FOREIGN_FLAT_MINER_FEE: '1500000000000000' # 0.0015 eth = 300k gas * 5 gwei
      ORACLE_MEV_FOREIGN_MAX_PRIORITY_FEE_PER_GAS: '0' # 0 gwei
      ORACLE_MEV_FOREIGN_MAX_FEE_PER_GAS: '1000000000000' # 1000 gwei
      ORACLE_HOME_START_BLOCK: '21058074'
      ORACLE_HOME_SKIP_MANUAL_LANE: 'true'
    volumes:
      - './access-lists/allowance_list.txt:/mono/oracle/access-lists/allowance_list.txt'
    restart: unless-stopped
    entrypoint: yarn mev:watcher:collected-signatures
  bridge_mevSender:
    depends_on: 
      - redis
    cpus: 0.1
    mem_limit: 500m
    image: poanetwork/tokenbridge-oracle:latest
    environment:
      NODE_ENV: production
      ORACLE_LOG_LEVEL: 'info'
      ORACLE_BRIDGE_MODE: 'ARBITRARY_MESSAGE'
      COMMON_HOME_RPC_URL: 'https://rpc.gnosischain.com/'
      COMMON_FOREIGN_RPC_URL: 'https://mainnet.infura.io/v3/...'
      ORACLE_REDIS_URL: 'redis://redis'
      COMMON_FOREIGN_GAS_PRICE_SUPPLIER_URL: 'eip1559-gas-estimation'
      ORACLE_FOREIGN_RPC_POLLING_INTERVAL: '70000'
      ORACLE_VALIDATOR_ADDRESS: '0x...'
      ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: 'cafecafe...cafecafe'
      ORACLE_MEV_FOREIGN_HELPER_CONTRACT_ADDRESS: '0xEB4c5AB9B36437f969888be99AF42fC9087005A5'
      ORACLE_MEV_FOREIGN_MIN_GAS_PRICE: '20000000000' # 20 gwei
      ORACLE_MEV_FOREIGN_FLAT_MINER_FEE: '1500000000000000' # 0.0015 eth = 300k gas * 5 gwei
      ORACLE_MEV_FOREIGN_MAX_PRIORITY_FEE_PER_GAS: '0' # 0 gwei
      ORACLE_MEV_FOREIGN_MAX_FEE_PER_GAS: '1000000000000' # 1000 gwei
      ORACLE_MEV_FOREIGN_FLASHBOTS_RPC_URL: 'https://relay.flashbots.net'
      ORACLE_MEV_FOREIGN_FLASHBOTS_AUTH_SIGNING_KEY: 'f00d00...d00f00'
      ORACLE_MEV_FOREIGN_BUNDLES_BLOCK_RANGE: '5'
    restart: unless-stopped
    entrypoint: yarn mev:sender:foreign
```

   _**Note**_: that it is necessary to fill `COMMON_FOREIGN_RPC_URL`, `ORACLE_VALIDATOR_ADDRESS`, `ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY` and `ORACLE_MEV_FOREIGN_FLASHBOTS_AUTH_SIGNING_KEY` with your own values. Where `ORACLE_VALIDATOR_ADDRESS` and `ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY` contain the address and the private key of the account which will execute transactions (it must be prepaid with some small amount of ether);  `ORACLE_MEV_FOREIGN_FLASHBOTS_AUTH_SIGNING_KEY is an unique 32 bytes long id written in hex.`

4\. Create `access-lists` directory and the file `allowance_list.txt` there which must contain only one line:

```
0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d 
```

This is the address of the OmniBridge contract which messages contains information about Tornado's withdrawals.

5\. Run the bridge oracle with the following command:

```
docker-compose up -d
```



