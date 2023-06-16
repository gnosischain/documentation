---
title: Governance
description: The Bridge Governance Board is responsible for enacting updates related to bridge functionality, contract upgrades, and other parameters impacting bridge operations. The following items have been implemented by the board.
keywords: [governance board, bridge governance]
---


## Key Information

### Overview
In response to increased usage and value locked in the xDai bridge and Omnibridge, a proposal was introduced to extend security and decision making powers to a wider group of participants (governors).
The proposal was accepted, and governance by means of a multi-signature Gnosis Safe was put into place initially on the Ethereum side on 2 October, 2020. Once Gnosis Safe was deployed to Gnosis Chain, updated governance was enacted on the xDai chain(now Gnosis Chain) on 23 October, 2020.  
The governing board is responsible for managing bridge operations on both sides of the bridge (contracts are deployed on the Ethereum and Gnosis side). 8 signatures are required to approve any management proposal. 
Operations may include:
* Bridge contract updates.
* Contract parameters updates such as bridge limits, finality threshold, gas price fallback etc.
* Bridge validator parameter updates like changing the validators set or signatures threshold.  
All actions are managed through Gnosis Safe accounts, one on the Ethereum mainnet for Ethereum contract side operations and one on Gnosis for xDai contract operations.

### Bridge Governor Multisig

| Network  | Safe Address                                                                                                                                  |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Ethereum | [eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6](https://app.safe.global/home?safe=eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6)      |
| Gnosis   | [gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd](https://app.safe.global/home?safe=gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd) |

### Current Bridge Governors

There are currently 16 Bridge Governors, of which 8-of-16 are required to pass a proposal.  

|                    |              |             |
|--------------------|--------------|-------------|
| GnosisDAO          | Metacartel   | RaidGuild   |
| Protofire          | Succinct Labs| Lab10       |
| Gateway            | Gnosis Bridge Team  | Giveth      |
| KarpatkeyDAO       | 1Hive        | Peerion     |
| 01Node             | Cow Protocol | Gnosis Safe |
| Agave              |              |             | 



## Governance Process

### Phase 1: Ideation
Post created on the Gnosis Forum in the [GnosisDAO category 108](https://forum.gnosis.io/c/dao/20). There is no set duration on how long a proposal stays in this stage. There is no formal requirement for a proposal to pass this stage. However, if a proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal.

### Phase 2: Specification
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is created. This stage lasts 5 days. For the proposal to pass this stage, one outcome with a relative majority of votes on the forum poll must be achieved. If the relative majority of votes indicates `Make no changes`, the proposal does not pass to Phase 3.


### Phase 3: Multisig Voting & Execution
[Gnosis Improvement Proposal 73](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is refined, and there is a [GnosisDAO Snapshot 60](https://snapshot.org/#/gnosis.eth) poll. This stage lasts for 7 days. For proposals to be accepted there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4% of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result Make no changes, the proposal will not be accepted and considered closed.

## Governance Parameters

### Bridge Validators

Bridge validators are separate from chain validators, and currently composed of a subset of Gnosis Chain validators. This is a dynamic set, as the bridge governors can vote to increase the current set as well as propose and vote on other bridge related measures. 
Organizations are represented by an individual within that organization who is responsible for node operation & validation duties and/or participation in governance.  
* [xDai Bridge Validators](../tokenbridge/xdai-bridge.md#bridge-validators)  
* [OmniBridge Validators](../tokenbridge/omnibridge#bridge-validators)

```mdx-code-block
<details>
  <summary>Setting up GNO bridge validators: Gnosis Chain &lt;-&gt;Ethereum</summary>
  <div>
```

## GNO  bridge validators GC &lt;-&gt; ETH Mainnet

### How to setup

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

### Bridge Limits

Different limits are set for the [xDai Bridge](../tokenbridge/xdai-bridge.md#fees--daily-limits) and the [OmniBridge](../tokenbridge/omnibridge.md#fees--daily-limits) by the bridge governors. Please see their respective documentation pages for more information. 

