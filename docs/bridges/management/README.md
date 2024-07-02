---
sidebar_position: 6
title: Bridge Management
description: The bridge management includes management of bridge governors and bridge validators. 
keywords: [bridge management, bridge governance, bridge validator]
---

Bridge Management encompasses the governance and coordination of bridge-related operations and events. It involves two distinct entities: Bridge Governors and Bridge Validators. Bridge Governors oversee bridge operations on both the Ethereum and Gnosis sides, making critical decisions on bridge parameters and validator settings. Bridge Validators ensure the accurate and timely relaying of messages by monitoring event emissions, validating the associated logic, and invoking the relevant functions on the destination chain.



## Bridge Governance
### Overview

In response to increased usage and value locked in the xDai bridge and Omnibridge, a proposal was introduced to extend security and decision making powers to a wider group of participants (governors).
The proposal was accepted, and governance by means of a multi-signature Gnosis Safe was put into place initially on the Ethereum side on 2 October, 2020. Once Gnosis Safe was deployed to Gnosis Chain, updated governance was enacted on the xDai chain(now Gnosis Chain) on 23 October, 2020.  
The governing board is responsible for managing bridge operations on both sides of the bridge (contracts are deployed on the Ethereum and Gnosis side). 8 signatures are required to approve any management proposal.
Operations may include:

- Bridge contract updates.
- Contract parameters updates such as bridge limits, finality threshold, gas price fallback etc.
- Bridge validator parameter updates like changing the validators set or signatures threshold.  
  All actions are managed through Gnosis Safe accounts, one on the Ethereum mainnet for Ethereum contract side operations and one on Gnosis for xDai contract operations.

### Bridge Governor Multisig

| Network  | Safe Address                                                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Ethereum | [eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6](https://app.safe.global/home?safe=eth:0x42F38ec5A75acCEc50054671233dfAC9C0E7A3F6) |
| Gnosis   | [gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd](https://app.safe.global/home?safe=gno:0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd) |

### Current Bridge Governors

There are currently 16 Bridge Governors, of which 8-of-16 are required to pass a proposal.

| Governor           | Address                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| GnosisDAO          | 0x57B11cC8F93f2cfeC4c1C5B95213f17cAD81332B                                                           |
| Metacartel         | 0xd945325557f1FB4374fBf10Ae86D385632Df870A                                                           |
| RaidGuild          | 0xd26a3F686D43f2A62BA9eaE2ff77e9f516d945B9                                                           |
| Protofire          | 0x80BA18503a1Fa16Ea22F3ef1Af23e2994EaC1d97                                                           |
| Succinct Labs      | 0x72Ff26D9517324eEFA89A48B75c5df41132c4f54                                                           |
| Lab10              | 0x10DD75875a2a8a284529Ae7223B1aCE410d606bd                                                           |
| Gateway            | 0x5b10cE4DDD27F57d4D432D409A5321219cbA7893                                                           |
| Gnosis Bridge Team | eth:0x4b5F5231e2F08Ad49d79Ce5672A8339a63Cfbd43 <br /> gno:0xEF138856d0581641A57245Ee5CFfc9ceaA059623 |
| Giveth             | 0x839395e20bbB182fa440d08F850E6c7A8f6F0780                                                           |
| KarpatkeyDAO       | 0xb8173f558f75EE263013fd6294177bf75279a21e                                                           |
| 1Hive              | 0x86Da253817DC599059e3AD5A1F098F7b96aBf34c                                                           |
| Peerion            | 0x1685324Bf373670ad5C9c56bd88A1dc1C063b0f9                                                           |
| 01Node             | 0x0101016044726994aFd16f4A99f0d960090D35e7                                                           |
| Cow Protocol       | 0xAC0622953d25e1a6c4e0f32Ffc1A9C1cE350B60E                                                           |
| Safe               | 0xDdf2d07267EAF2cE3E13ee4319bE1F34D55ed992                                                           |
| Agave              | 0xc44caeb7F0724A156806664d2361fD6f32a2d2C8                                                           |

## Governance Process

### Phase 1: Ideation

Post created on the Gnosis Forum in the [GnosisDAO](https://forum.gnosis.io/). There is no set duration on how long a proposal stays in this stage. There is no formal requirement for a proposal to pass this stage. However, if a proposal discussion fails to garner momentum from the community, it is unlikely to become a successful proposal.

### Phase 2: Specification

[Gnosis Improvement Proposal](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is created. This stage lasts 5 days. For the proposal to pass this stage, one outcome with a relative majority of votes on the forum poll must be achieved. If the relative majority of votes indicates `Make no changes`, the proposal does not pass to Phase 3.

### Phase 3: Multisig Voting & Execution

[Gnosis Improvement Proposal](https://forum.gnosis.io/t/gip-0-template/734) (GIP) post is refined, and there is a [GnosisDAO Snapshot](https://snapshot.org/#/gnosis.eth) poll. This stage lasts for 7 days. For proposals to be accepted there must be one outcome with a relative majority of GNO used for signaling on the GnosisDAO Snapshot poll accompanied by a yes-voting quorum of a minimum of 4% of the circulating supply of GNO. If the relative majority of GNO used in signaling on the Snapshot poll indicates the result Make no changes, the proposal will not be accepted and considered closed.

:::info
Check out all the governance decisions in the past in [Governance Decisions](decisions.md)!
:::


### Governor: Upgrading a Contract

There are two possible scenarios for how the bridge or validators contracts can be upgraded:

- a security fix when only the contract implementation is changed
- an improvement when the contract implementation upgrade requires initialization of storage values.

1. Deploy a new implementation of the bridge or validators contract.
2. Depending on the contract and the chain, get the current version of the contract implementation.
3. Use the `upgradeTo` method from EternalStorageProxy ABI, the address of the new implementation, and the incremented version number to encode the data for the transaction. Tools like [ABI Encoding Service](https://abi.hashex.org/) can be useful when it comes to constructing the calldata from ABI.
4. Create the transaction on using [Governor's Safe](README.md#bridge-governor-multisig) and let all the governors sign the message.
5. Once the threshold is reached, execute the transaction.


### Governor: Adding/Removing a validator
1. Call `addValidator(address validator)` or `removeValidator(address validator)` in the [Governor's Safe](README.md#bridge-governor-multisig) to add or remove a validator.
2. (Optional) Call `setRequiredSignatures(uint256 _requiredSignatures)` to update the required signatures in order to execute a message.

### Governor: Setting bridge limits

Different limits are set for the [xDai Bridge](../Token%20Bridge/xdai-bridge.md#fees--daily-limits) and the [OmniBridge](../Token%20Bridge/omnibridge.md#fees--daily-limits) by the bridge governors. Please see their respective documentation pages for more information.


## Bridge Validators

Bridge Validators monitor events on both sides of the chains to ensure that the user's bridging requests are validated promptly. In the Gnosis Chain, there are both trusted and trustless validators. [Telepathy](/bridges/Token%20Bridge/amb-bridge#how-it-works-with-telepathy-validator), a trustless ZK-based validator on AMB, secures transactions using zero-knowledge proofs, while the rest of the validators sign the message to validate the message. The threshold of signatures from validators has to be reached in order to execute the message on the destination chain.

- [xDai Bridge Validators](/bridges/management/validators#xdai-bridge)
- [AMB & OmniBridge Validators](/bridges/management/validators#amb--omnibridge)


```mdx-code-block
<details>
  <summary>Setting up GNO bridge validators: Gnosis Chain &lt;-&gt;Ethereum</summary>
  <div>
```

## GNO bridge validators GC &lt;-&gt; ETH Mainnet

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


## Summary of different roles in bridge
- **Governor** role (representation of a multisig contract):
  - add/remove validators
  - set daily limits on either direction
  - set maximum per transaction limit on both bridges
  - set minimum per transaction limit on both bridges
  - upgrade contracts in case of vulnerability
  - set minimum required signatures from validators in order to relay a user's transaction
- **Validator** role:
  - provide 100% uptime to relay transactions
  - listen for `UserRequestForSignature` events on Home Bridge and sign an approval to relay assets on Foreign network
  - listen for `CollectedSignatures` events on Home Bridge. As soon as enough signatures are collected, transfer all collected signatures to the Foreign Bridge contract.
  - listen for `UserRequestForAffirmation` or `Transfer` (depending on the bridge mode) events on the Foreign Bridge and send approval to Home Bridge to relay assets from Foreign Network to Home
- **User** role:
  - sends assets to Bridge contracts:
    - In xDAI bridge: Send DAI token to the Foreign xDAI Bridge to receive xDAI token from the Home xDAI Bridge, send xDAI token to the Home xDAI Bridge to unlock DAI token from the Foreign xDAI Bridge;
    - In AMB: Invoke Home/Foreign Bridge to send a message that will be executed on the other chain as an arbitrary contract method invocation;
    - In Omnibridge: Approve & relay ERC20 tokens to the Foreign Omnibridge which will interact with Foreign AMB Bridge to mint ERC20 tokens on the Home chain, and transfer ERC20 tokens to the Home Omnibridge which will interact with Home AMB Bridge to unlock ERC20 tokens on Foreign chain.





