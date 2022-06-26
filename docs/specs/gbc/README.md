---
---

# Contracts, Addresses, Parameters

### **Contracts & Token Addresses**

:::caution DO NOT send funds directly to the GBC Deposit Contract.
To stake on GBC, follow the Validator instructions starting with [Validator Requirements and Responsibilities](/validators/get-started/responsibilities).
:::

| Contract                   | Address                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| GBC Deposit Contract       | [0x0B98057eA310F4d31F2a452B414647007d1645d9](https://blockscout.com/xdai/mainnet/address/0x0B98057eA310F4d31F2a452B414647007d1645d9)               |
| GNO-> mGNO contract        | [0x647507A70Ff598F386CB96ae5046486389368C66](https://blockscout.com/xdai/mainnet/address/0x647507A70Ff598F386CB96ae5046486389368C66)               |
| GNO token on Gnosis Chain  | [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://blockscout.com/xdai/mainnet/token/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb/token-transfers) |
| mGNO token on Gnosis Chain | [0x722fc4DAABFEaff81b97894fC623f91814a1BF68](https://blockscout.com/xdai/mainnet/address/0x722fc4DAABFEaff81b97894fC623f91814a1BF68)               |

### **Initial Parameters (subject to change)**

| Variable                                          | Value                                                                                                                                                                               |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Staking amount                                    | 32 mGNO (equivalent to 1 GNO)                                                                                                                                                       |
| Block time                                        | 5 seconds                                                                                                                                                                           |
| Validator slots per epoch                         | 16 (with further reduction possible, [N > 1 honest proposer/epoch as per V. Buterin](https://notes.ethereum.org/@vbuterin/rkhCgQteN?type=view#Why-32-ETH-validator-sizes))          |
| Validators per slot                               | 128 ([see more on minimum committee size](https://medium.com/@chihchengliang/minimum-committee-size-explained-67047111fa20))                                                        |
| Epoch time                                        | 80 seconds                                                                                                                                                                          |
| Slashing                                          | Reductions to 16 mGNO, then removal                                                                                                                                                 |
| Clients                                           | Prysm, Lighthouse                                                                                                                                                                   |
| Custom Deposit Contract                           | <p></p><ul><li>mGNO deposit (ERC20 enabled)</li><li>Upgradeable</li><li>Claiming on accidental locks</li><li>Custom network keys generation (deposit-cli)</li></ul>                 |
| Explorer                                          | <p>Modified beaconchain explorer<br /><span data-gb-custom-inline data-tag="emoji" data-code="1f50d">🔍</span> <a href="http://beacon.gnosischain.com">beacon.gnosischain.com</a></p> |
| RPC                                               | [https://rpc-gbc.gnosischain.com](https://rpc-gbc.gnosischain.com)                                                                                                                  |
| :white\_check\_mark: Launch MVP                   | <p>4096 validators<br />131,072 mGNO </p><p>83% APY</p>                                                                                                                               |
| :white\_check\_mark: Security Goal Prior to Merge | <p>50K+ validators</p><p>1.6M+ mGNO</p><p>23% APY</p>                                                                                                                               |
