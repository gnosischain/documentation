---
---

# 1) AMB contracts deployment

## Create accounts for deployment

1\) Generate private keys for the following using MetaMask or MyEtherWallet. Save as **json keystore file + password**. Note the json location,  wallet address, and password for each account.

* DEPLOYMENT\_ACCOUNT
* FOREIGN\_BRIDGE\_OWNER
* FOREIGN\_VALIDATORS\_OWNER
* FOREIGN\_UPGRADEABLE\_ADMIN
* HOME\_BRIDGE\_OWNER
* HOME\_VALIDATORS\_OWNER
* HOME\_UPGRADEABLE\_ADMIN
* VALIDATOR

:::warning
This data can not be recovered through an account after creation, so be sure to store accurately and safely.
:::

:::info
You will need tokens for deployment on both sides of the bridge. This means the DEPLOYMENT\_ACCOUNT and VALIDATOR accounts will require tokens. The DEPLOYMENT\_ACCOUNT will deploy bridge contracts and initialize the bridge, and VALIDATOR accounts use tokens to pay for txs with bridge operations.
:::

## Configure and Deploy Bridge Contracts

### 1) Create configuration file `amb.config`

:::warning
Replace all variables templated with tags (&lt;&gt;) with actual values. [Learn more about variables here ](https://github.com/poanetwork/tokenbridge-contracts/blob/master/deploy/README.md#erc-to-native-bridge-mode-configuration-example)
:::

```
BRIDGE_MODE=ARBITRARY_MESSAGE
# The private key without 0x part.
DEPLOYMENT_ACCOUNT_PRIVATE_KEY=<DEPLOYMENT_ACCOUNT_PRIVATE_KEY>
DEPLOYMENT_GAS_LIMIT_EXTRA=0.2
HOME_DEPLOYMENT_GAS_PRICE=5000000000
FOREIGN_DEPLOYMENT_GAS_PRICE=5000000000
GET_RECEIPT_INTERVAL_IN_MILLISECONDS=3000

HOME_RPC_URL=https://<url.to.homenet>
HOME_BRIDGE_OWNER=<HOME_BRIDGE_OWNER>
HOME_VALIDATORS_OWNER=<HOME_VALIDATORS_OWNER>
HOME_UPGRADEABLE_ADMIN=<HOME_UPGRADEABLE_ADMIN>

# The maximum value of gas for one call to be allowed for relaying.
HOME_MAX_AMOUNT_PER_TX=2000000
HOME_REQUIRED_BLOCK_CONFIRMATIONS=1
HOME_GAS_PRICE=5000000000

FOREIGN_RPC_URL=https://<url.to.foreignnet>
FOREIGN_BRIDGE_OWNER=<FOREIGN_BRIDGE_OWNER>
FOREIGN_VALIDATORS_OWNER=<FOREIGN_VALIDATORS_OWNER>
FOREIGN_UPGRADEABLE_ADMIN=<FOREIGN_UPGRADEABLE_ADMIN>

# The maximum value of estimated gas for one transaction in Wei.
FOREIGN_MAX_AMOUNT_PER_TX=2000000
FOREIGN_REQUIRED_BLOCK_CONFIRMATIONS=1
FOREIGN_GAS_PRICE=10000000000

REQUIRED_NUMBER_OF_VALIDATORS=1
# If several validators are used, list them separated by space without quotes
# E.g. VALIDATORS=0x 0x 0x
VALIDATORS=<address of validator>
```

:::info
_Optional:_ If you plan to use Etherscan or BlockScout for exploring your chain, find information on the correct parameters to include in the .env file here: [https://docs.tokenbridge.net/about-tokenbridge/features/contracts-verification-in-explorers](https://docs.tokenbridge.net/about-tokenbridge/features/contracts-verification-in-explorers)
:::

### 2) Deploy Contracts

Deployment of contracts with usage of the docker image is very straightforward:

```
docker run -it --env-file amb.config poanetwork/tokenbridge-contracts deploy.sh
```

After successful deployment the following information about the bridge contracts is displayed:

```
{
    "homeBridge": {
        "address": "0xaA19D8ECfB824951AF06fEb5aDeC2423e2eFa608",
        "deployedBlockNumber": 12794100
    },
    "foreignBridge": {
        "address": "0x5FE5d72992b1c0F4C9a8628E82c960733D2cd85f",
        "deployedBlockNumber": 16159665
    }
}
```
