---
description: Gnosis Beacon Chain specification and key contracts
keywords: [gnosis beacon chain, gnosis upgradeability, gbc, gbc contracts]
---

# Contracts, Addresses, Parameters

### **Contracts & Token Addresses**

:::caution DO NOT send funds directly to the GBC Deposit Contract.
To stake on GBC, follow the Validator instructions starting with [Validator Requirements and Responsibilities](/node/manual).
:::

| Contract             | Address                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| GBC Deposit Contract | [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://gnosis.blockscout.com/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)                     |
| GNO-> mGNO contract  | [0x647507A70Ff598F386CB96ae5046486389368C66](https://gnosis.blockscout.com/address/0x647507A70Ff598F386CB96ae5046486389368C66)                     |
| GNO token on Gnosis  | [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://gnosis.blockscout.com/token/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb/token-transfers) |


### **Current Parameters**

Live values from the beacon chain spec (`/eth/v1/config/spec` on `rpc-gbc.gnosischain.com`).

| Variable                       | Value                                                                |
| ------------------------------ | -------------------------------------------------------------------- |
| Minimum activation balance     | 1 GNO                                                                |
| Maximum effective balance      | 64 GNO (`0x02` compounding validators, since Pectra)                 |
| Slot time                      | 5 seconds                                                            |
| Slots per epoch                | 16 (80-second epochs)                                                |
| Activation / exit churn        | 2 GNO-equivalent per epoch                                           |
| Consensus clients              | Lighthouse, Teku, Nimbus, Lodestar                                   |
| Explorer                       | [beaconchain.gnosischain.com](https://beaconchain.gnosischain.com/)  |
| Beacon RPC                     | [rpc-gbc.gnosischain.com](https://rpc-gbc.gnosischain.com)           |

### **Launch Parameters (December 2021, historical)**

:::note
The table below records the parameters at Gnosis Beacon Chain launch. mGNO has since been deprecated, and validator balances and client support have changed; see the current parameters above.
:::

| Variable                     | Value                                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Staking amount               | 32 mGNO (equivalent to 1 GNO)                                                                                                                                                         |
| Block time                   | 5 seconds                                                                                                                                                                             |
| Validator slots per epoch    | 16 (with further reduction possible, [N > 1 honest proposer/epoch as per V. Buterin](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes))            |
| Validators per slot          | 128 ([see more on minimum committee size](https://medium.com/@chihchengliang/minimum-committee-size-explained-67047111fa20))                                                          |
| Epoch time                   | 80 seconds                                                                                                                                                                            |
| Slashing                     | Reductions to 16 mGNO, then removal                                                                                                                                                   |
| Clients                      | Prysm, Lighthouse                                                                                                                                                                     |
| Custom Deposit Contract      | <p></p><ul><li>mGNO deposit (ERC20 enabled)</li><li>Upgradeable</li><li>Claiming on accidental locks</li><li>Custom network keys generation (deposit-cli)</li></ul>                   |
| Explorer                     | <p>Modified beaconchain explorer<br /><span data-gb-custom-inline data-tag="emoji" data-code="1f50d">🔍</span> <a href="https://beaconchain.gnosischain.com">beaconchain.gnosischain.com</a></p> |
| RPC                          | [https://rpc-gbc.gnosischain.com](https://rpc-gbc.gnosischain.com)                                                                                                                    |
| Launch MVP                   | <p>4096 validators<br />131,072 mGNO </p><p>83% APY</p>                                                                                                                               |
| Security Goal Prior to Merge | <p>50K+ validators</p><p>1.6M+ mGNO</p><p>23% APY</p>                                                                                                                                 |
