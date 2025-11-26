---
title: Bridge Validators
description: A bridge validator is an entity responsible for monitoring event emissions from one blockchain, validating the associated logic, signing the validated events, and subsequently invoking the relevant functions on the destination chain to confirm the validation.
keywords: [bridge validator]
---

# Bridge Validator

Unlike bridge governance, a bridge validator in Gnosis Chain is an entity responsible for monitoring event emissions from one blockchain, validating the associated logic, signing the validated events, and subsequently invoking the relevant functions on the destination chain to confirm the validation.

Bridge validators are formed by different trusted entities such as Gnosis DAO, Safe, etc, and trustless entity such as Hashi for AMB.

## AMB & Omnibridge

Due to the fact that Omnibridge is built on top of AMB, these two bridges share the same set of validators.

### Current Bridge Validators

<Tabs groupId="bridge-validators">
<TabItem value="eth-gc" label="Eth <-> Gnosis">

| GC Address                                                                                                                 | Organization Name |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| [gno:0x459a3bd49f1ff109bc90b76125533699aaaaf9a6](https://gnosisscan.io/address/0x459a3bd49f1ff109bc90b76125533699aaaaf9a6) | Protofire         |
| [gno:0x105CD22eD3D089Bf5589C59b452f9dE0796Ca52d](https://gnosisscan.io/address/0x105CD22eD3D089Bf5589C59b452f9dE0796Ca52d) | Giveth            |
| [gno:0xfa98b60e02a61b6590f073cad56e68326652d094](https://gnosisscan.io/address/0xfa98b60e02a61b6590f073cad56e68326652d094) | Karpatkey         |
| [gno:0xbdc141c8d2343f33f40cb9edd601ccf460cd0dde](https://gnosisscan.io/address/0xbdc141c8d2343f33f40cb9edd601ccf460cd0dde) | GnosisDAO         |
| [gno:0x674c97db4ce6cac04a124d745979f3e4cba0e9f0](https://gnosisscan.io/address/0x674c97db4ce6cac04a124d745979f3e4cba0e9f0) | Cow Protocol      |
| [gno:0x258667E543C913264388B33328337257aF208a8f](https://gnosisscan.io/address/0x258667E543C913264388B33328337257aF208a8f) | Gnosis Safe       |
| [gno:0x6236925ff8aa09f29f1609a9bcd54af20e4be6b4](https://gnosisscan.io/address/0x6236925ff8aa09f29f1609a9bcd54af20e4be6b4) | Hopr              |

</TabItem>

<TabItem value="sepolia-chiado" label="Sepolia <-> Chiado">

0x725bC6F18F8CDd7f57A9aB9A9f2Ea17A199185e5  
0xb1562173109932146a7fBBF28d7c6652bc2DaACE

</TabItem>

</Tabs>

### Omnibridge validator workflow

![](/img/bridges/diagrams/amb-bridge-validator-flow.png)

## xDAI bridge

The xDAI bridge relies on trusted xDai Bridge Validators as cross-chain bridge oracle.

<Tabs>

<TabItem value="gnosis-eth" label="Gnosis<->ETH">

Bridge transactions currently requires signatures from 4 of 7 validators.

| Organization | Gnosis Address                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| GnosisDao    | [gno:0x97630e2ae609d4104abda91f3066c556403182dd](https://gnosis.blockscout.com/address/0x97630e2ae609d4104abda91f3066c556403182dd) |
| Protofire    | [gno:0x4d1c96b9a49c4469a0b720a22b74b034eddfe051](https://gnosis.blockscout.com/address/0x4D1c96B9A49C4469A0b720a22b74b034EDdFe051) |
| CowProtocol  | [gno:0x587c0d02b40822f15f05301d87c16f6a08aaddde](https://gnosis.blockscout.com/address/0x587c0d02b40822f15f05301d87c16f6a08aaddde) |
| Giveth       | [gno:0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506](https://gnosis.blockscout.com/address/0xc073C8E5ED9Aa11CF6776C69b3e13b259Ba9F506) |
| GnosisSafe   | [gno:0x1312e98995bbcc30fc63db3cef807e20cdd33dca](https://gnosis.blockscout.com/address/0x1312e98995bbcc30fc63db3cef807e20cdd33dca) |
| Karpatkey    | [gno:0xfa98b60e02a61b6590f073cad56e68326652d094](https://gnosis.blockscout.com/address/0xfa98b60e02a61b6590f073cad56e68326652d094) |
| Hopr         | [gno:0x6236925ff8aa09f29f1609a9bcd54af20e4be6b4](https://gnosis.blockscout.com/address/0x6236925ff8aa09f29f1609a9bcd54af20e4be6b4) |

</TabItem>

<TabItem value="chiado-sepolia" label="Chiado<->Sepolia">

0x725bc6f18f8cdd7f57a9ab9a9f2ea17a199185e5  
0xb1562173109932146a7fbbf28d7c6652bc2daace

</TabItem>


</Tabs>

### Bridge Validator Flow

![](/img/bridges/diagrams/xdai-bridge-validator-flow.png)

### Resources

```mdx-code-block
<details>
  <summary>Setting up  bridge validators with docker compose</summary>
  <div>
```

**Setup bridge validator for AMB**

1. Created .env.amb and configure the value based on https://github.com/gnosischain/tokenbridge/blob/master/oracle/.env.example.amb
2. Configure your docker compose based on https://github.com/gnosischain/tokenbridge/blob/master/oracle/docker-compose-amb.yml
3. Run

```
 env ORACLE_VALIDATOR_ADDRESS=<validator address> \
 env ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY=<validator address private key> \
 docker-compose -f docker-compose-amb.yml up -d --build
```

**Setup bridge validator for xDAI**

1. Create .env.xdai and configure the value based on https://github.com/gnosischain/tokenbridge/blob/master/oracle/.env.example.xdai
2. Configure your docker compose based on https://github.com/gnosischain/tokenbridge/blob/master/oracle/docker-compose-xdai.yml
3. Run

```
 env ORACLE_VALIDATOR_ADDRESS=<validator address> \
 env ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY=<validator address private key> \
 docker-compose -f docker-compose-xdai.yml up -d --build
```

```mdx-code-block
  </div>
</details>
```

```mdx-code-block
<details>
  <summary>Setting up  bridge validators with Ansible</summary>
  <div>
```

1. Checkout https://github.com/dharmendrakariya/chiado-ansible-bridges (yes I know it says Chiado but we use it for mainnet)
2. replace group_vars/amb.yml in https://github.com/dharmendrakariya/chiado-ansible-bridges with following settings:

```bash
    ---
    ORACLE_LOG_LEVEL: info
    ORACLE_BRIDGE_MODE: "ARBITRARY_MESSAGE"

    COMMON_HOME_RPC_URL: "<GC RPC ULR>"
    COMMON_HOME_BRIDGE_ADDRESS: "0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59"
    ORACLE_HOME_RPC_POLLING_INTERVAL: 15000

    COMMON_FOREIGN_RPC_URL: "ETH RPC URL NON ARCHIVAL"
    ORACLE_FOREIGN_ARCHIVE_RPC_URL: "ETH RPC URL ARCHIVAL"
    COMMON_FOREIGN_BRIDGE_ADDRESS: "0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e"
    ORACLE_FOREIGN_RPC_POLLING_INTERVAL: 24000

    ORACLE_TX_REDUNDANCY: true
    ORACLE_HOME_TX_RESEND_INTERVAL: 300000

    COMMON_HOME_GAS_PRICE_SUPPLIER_URL: "eip1559-gas-estimation"
    COMMON_HOME_GAS_PRICE_SPEED_TYPE: "fast"
    COMMON_HOME_GAS_PRICE_FALLBACK: 2000000000
    ORACLE_HOME_GAS_PRICE_UPDATE_INTERVAL: 600000
    COMMON_HOME_GAS_PRICE_FACTOR: 1

    COMMON_FOREIGN_GAS_PRICE_SUPPLIER_URL: "eip1559-gas-estimation"
    COMMON_FOREIGN_GAS_PRICE_SPEED_TYPE: "fast"
    COMMON_FOREIGN_GAS_PRICE_FALLBACK: 100000000000
    ORACLE_FOREIGN_GAS_PRICE_UPDATE_INTERVAL: 600000
    COMMON_FOREIGN_GAS_PRICE_FACTOR: 1

    ORACLE_ALLOW_HTTP_FOR_RPC: yes
    QUEUE_URL: "amqp://rabbit-amb"
    REDIS_URL: "redis://redis-amb"

    ORACLE_HOME_START_BLOCK: 27147951
    ORACLE_FOREIGN_START_BLOCK: 16918880
```

3. replace group_vars/native.yml in https://github.com/dharmendrakariya/chiado-ansible-bridges with following settings:

```bash
    ---
    ORACLE_LOG_LEVEL: info
    ORACLE_BRIDGE_MODE: "ERC_TO_NATIVE"

    COMMON_HOME_RPC_URL: "<GC RPC ULR>"
    COMMON_HOME_BRIDGE_ADDRESS: "0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6"
    ORACLE_HOME_RPC_POLLING_INTERVAL: 15000

    COMMON_FOREIGN_RPC_URL: "<ETH RPC URL NON ARCHIVAL>"
    ORACLE_FOREIGN_ARCHIVE_RPC_URL: "<ETH RPC URL ARCHIVAL>"
    COMMON_FOREIGN_BRIDGE_ADDRESS: "0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016"
    ORACLE_FOREIGN_RPC_POLLING_INTERVAL: 24000

    ORACLE_TX_REDUNDANCY: true
    ORACLE_HOME_TX_RESEND_INTERVAL: 300000

    COMMON_HOME_GAS_PRICE_SUPPLIER_URL: "eip1559-gas-estimation"
    COMMON_HOME_GAS_PRICE_SPEED_TYPE: "fast"
    COMMON_HOME_GAS_PRICE_FALLBACK: 2000000000
    ORACLE_HOME_GAS_PRICE_UPDATE_INTERVAL: 600000
    COMMON_HOME_GAS_PRICE_FACTOR: 1

    COMMON_FOREIGN_GAS_PRICE_SUPPLIER_URL: "eip1559-gas-estimation"
    COMMON_FOREIGN_GAS_PRICE_SPEED_TYPE: "fast"
    COMMON_FOREIGN_GAS_PRICE_FALLBACK: 100000000000
    ORACLE_FOREIGN_GAS_PRICE_UPDATE_INTERVAL: 600000
    COMMON_FOREIGN_GAS_PRICE_FACTOR: 1

    ORACLE_ALLOW_HTTP_FOR_RPC: yes
    QUEUE_URL: "amqp://rabbit"
    REDIS_URL: "redis://redis"

    ORACLE_HOME_START_BLOCK: 27147951
    ORACLE_FOREIGN_START_BLOCK: 16918880
```

4. replaces hosts.yml in https://github.com/dharmendrakariya/chiado-ansible-bridges with

```bash
    all:
      children:
        oracle:
          children:
            native:
              hosts:
                <ip>:
                  ansible_user: <user>
                  ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: "<private key>"
            amb:
              hosts:
                <ip>:
                  ansible_user: <user>
                  ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: "<private key>"
```

5. Install on hosts:

```bash
    - name: Install python3
      apt:
        update_cache: yes
        name: "{{ item }}"
      with_items:
        - python3
        - python3-pip

    - name: Install python requirnments
      ansible.builtin.pip:
        executable: pip3
        name:
          - docker
          - molecule
          - flake8
        state: present
```

6. Run in https://github.com/dharmendrakariya/chiado-ansible-bridges, the command should start the service

```bash
    ansible-playbook -i hosts.yml site.yml
```

7. Make sure that logs for `oracle-bridge_affirmation-1` contains

```bash
    {"level":30,"time":1679670411723,"msg":"Processing affirmationRequest 0xd2abaafc7359452b6d78631d6ab35571127dbd05ddfcff41784a5e9d29c191e1","validator":"0x3e0A20099626F3d4d4Ea7B0cE0330e88d1Fe65D6","name":"watcher-erc-native-affirmation-request","eventTransactionHash":"0xd2abaafc7359452b6d78631d6ab35571127dbd05ddfcff41784a5e9d29c191e1","sender":"0xE899161e268C0Be32C7993BB8221480C89B00d4D","value":"500000000000000000000","v":1}
    {"level":30,"time":1679670411724,"msg":"Processing affirmationRequest 0xbc6d387ffc1a893eceb123d54e90358a4f83756960bd40410fd4f76c296854d9","validator":"0x3e0A20099626F3d4d4Ea7B0cE0330e88d1Fe65D6","name":"watcher-erc-native-affirmation-request","eventTransactionHash":"0xbc6d387ffc1a893eceb123d54e90358a4f83756960bd40410fd4f76c296854d9","sender":"0xE899161e268C0Be32C7993BB8221480C89B00d4D","value":"130025433237150000000000","v":1}
```

8. After the service is started please use `service poabridge stop|start` in order to shutdown or start the service before making any changes on a host machine

```mdx-code-block
  </div>
</details>
```

- [TokenBridge Docs: Migrating Oracle to new Server](https://github.com/tokenbridge/docs/blob/master/xdai-bridge/xdai-bridge-oracle-maintenance/oracle-migration-to-a-new-server.md)
