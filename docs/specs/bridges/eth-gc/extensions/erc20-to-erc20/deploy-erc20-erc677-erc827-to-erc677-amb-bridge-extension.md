---
description: How to deploy an erc20-to-erc20 Arbitrary Message Bridge extension
---

# Deploy ERC20 to ERC677 AMB bridge extension

Instructions for deploying bridge mediator contracts on top of [the Arbitrary Message Bridge (AMB) between the Ethereum Mainnet and the Gnosis Chain.](/specs/bridges/eth-gc/)

:::info
An AMB bridge extension is a pair of mediator contracts associated with a specific pair of Arbitrary Message Bridge contracts.
:::

The steps below assume you will use an existing ERC20 or an ERC677/827 token on Ethereum when creating the new ERC677 token contract on GC. The AMB mediator will have rights to mint new tokens for any request to relay tokens through this AMB extension. More details about the extension internals are available here: ["How to develop a cross-blockchain application using the AMB"](https://docs.tokenbridge.net/amb-bridge/how-to-develop-xchain-apps-by-amb).

The mediators developed by the TokenBridge team will be used during deployment. If customizations are required for the mediators, additional steps will be needed to prepare the docker image with modified contracts.

## Prerequisites

The following pre-requisites are required to deploy the AMB extension:

1. The private key of an account used to deploy the contracts. The account must be funded before performing the deployment steps.
2. An account address that will be given rights to update the extension parameters. Different accounts may be used for different chains.
3. An account address that will be given rights to upgrade the extension contracts. Different accounts may be used for different chains.
4. A JSON RPC url to send deployment transaction to the Ethereum Mainnet. URL provided by [INFURA](https://infura.io) with the API key can be used here.
5. The existing Ethereum ERC20/ERC677/ERC827 token contract address.
6. [The Etherscan API key](https://etherscan.io/apis) which allows contracts to be verified automatically during the deployment process.

## Instructions

1. Pull the docker image containing the compiled contracts and deployment script.

```
 docker pull poanetwork/tokenbridge-contracts:latest
```

1. Prepare a configuration file (e.g. `erc-to-erc.config`) which specifies the deployment process parameters and the initial extension configuration:

```
 # The type of bridge. Defines set of contracts to be deployed.
 BRIDGE_MODE=AMB_ERC_TO_ERC

 # The private key hex value of the account responsible for contracts
 # deployments and initial configuration. The account's balance must contain
 # funds from both networks.
 DEPLOYMENT_ACCOUNT_PRIVATE_KEY=abc0123...6789def
 # The "gas" parameter set in every deployment/configuration transaction.
 DEPLOYMENT_GAS_LIMIT_EXTRA=0.2
 # The "gasPrice" parameter set in every deployment/configuration transaction on
 # Home network (in Wei).
 # ----------------------- 1 gwei
 HOME_DEPLOYMENT_GAS_PRICE=1000000000
 # The "gasPrice" parameter set in every deployment/configuration transaction on
 # Foreign network (in Wei).
 # -------------------------- 30 gwei
 FOREIGN_DEPLOYMENT_GAS_PRICE=30000000000
 # The timeout limit to wait for receipt of the deployment/configuration
 # transaction.
 GET_RECEIPT_INTERVAL_IN_MILLISECONDS=3000

 # The name of the ERC677 token to be deployed on the Home network.
 BRIDGEABLE_TOKEN_NAME=New token on xDai
 # The symbol name of the ERC677 token to be deployed on the Home network.
 BRIDGEABLE_TOKEN_SYMBOL=xNWT
 # The number of supportable decimal digits after the "point" in the ERC677 token
 # to be deployed on the Home network.
 BRIDGEABLE_TOKEN_DECIMALS=18

 # The RPC channel to a Home node able to handle deployment/configuration
 # transactions.
 HOME_RPC_URL=https://dai.poa.network
 # Address on Home network with permissions to change parameters of the bridge contract.
 # For extra security we recommended using a multi-sig wallet contract address here.
 HOME_BRIDGE_OWNER=0x6789def...abc0123
 # Address on Home network with permissions to upgrade the bridge contract
 HOME_UPGRADEABLE_ADMIN=0x6789def...abc0123
 # The daily transaction limit in Wei. As soon as this limit is exceeded, any
 # transaction which requests to relay assets will fail.
 # -------------- 100'000 tokens
 HOME_DAILY_LIMIT=100000000000000000000000
 # The maximum limit for one transaction in Wei. If a single transaction tries to
 # relay funds exceeding this limit it will fail. HOME_MAX_AMOUNT_PER_TX must be
 # less than HOME_DAILY_LIMIT.
 # -------------------- 10'000 tokens
 HOME_MAX_AMOUNT_PER_TX=10000000000000000000000
 # The minimum limit for one transaction in Wei. If a transaction tries to relay
 # funds below this limit it will fail. This is required to prevent dryout
 # validator accounts.
 # -------------------- 0.01 tokens
 HOME_MIN_AMOUNT_PER_TX=10000000000000000

 # The RPC channel to a Foreign node able to handle deployment/configuration
 # transactions.
 FOREIGN_RPC_URL=https://mainnet.infura.io/v3/
 # Address on Foreign network with permissions to change parameters of the bridge contract.
 # For extra security we recommended using a multi-sig wallet contract address here.
 FOREIGN_BRIDGE_OWNER=0x6789def...abc0123
 # Address on Foreign network with permissions to upgrade the bridge contract and the
 # bridge validator contract.
 FOREIGN_UPGRADEABLE_ADMIN=0x6789def...abc0123
 # The daily limit in Wei. As soon as this limit is exceeded, any transaction
 # requesting to relay assets will fail.
 # ----------------- 500'000 tokens
 FOREIGN_DAILY_LIMIT=500000000000000000000000
 # The maximum limit per one transaction in Wei. If a transaction tries to relay
 # funds exceeding this limit it will fail. FOREIGN_MAX_AMOUNT_PER_TX must be less
 # than FOREIGN_DAILY_LIMIT.
 # ----------------------- 100'000 tokens
 FOREIGN_MAX_AMOUNT_PER_TX=100000000000000000000000
 # The minimum limit for one transaction in Wei. If a transaction tries to relay
 # funds below this limit it will fail.
 # ----------------------- 0.01 tokens
 FOREIGN_MIN_AMOUNT_PER_TX=10000000000000000

 # The address of the existing ERC20/ERC677/ERC827 compatible token in the 
 # Foreign network to be exchanged to the ERC677 token deployed on Home.
 ERC20_TOKEN_ADDRESS=0xa0b1c3...7d8e9f

 # The address of the existing AMB bridge in the Home network that will be
 # used to pass messages to the Foreign network.
 HOME_AMB_BRIDGE=0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59
 # The address of the existing AMB bridge in the Foreign network that will
 # be used to pass messages to the Home network.
 FOREIGN_AMB_BRIDGE=0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e
 # The gas limit that will be used in the execution of the message
 # passed to the mediator contract in the Foreign network.
 HOME_MEDIATOR_REQUEST_GAS_LIMIT=500000
 # The gas limit that will be used in the execution of the message
 # passed to the mediator contract in the Home network.
 FOREIGN_MEDIATOR_REQUEST_GAS_LIMIT=500000

 # The api url of an explorer to verify all the deployed contracts in Home network.
 HOME_EXPLORER_URL=https://blockscout.com/xdai/mainnet/api
 # The api url of an explorer to verify all the deployed contracts in Foreign network.
 FOREIGN_EXPLORER_URL=https://api.etherscan.io/api
 # The api key of the explorer api, if required, used to verify all
 # the deployed contracts in Foreign network.
 FOREIGN_EXPLORER_API_KEY=...
```

1. Run the deployment process by specifying the path to the configuration file:

```
 docker run -ti --rm --env-file erc-to-erc.config \
     poanetwork/tokenbridge-contracts:latest deploy.sh
```

Output will look similar to this:

```javascript
 {
     "homeBridge": {
         "homeBridgeMediator": {
             "address": "0xFaD73D79952041332554e11d896F430a2ecA1Fa8"
         },
         "bridgeableErc677": {
             "address": "0xAFb605e4463D1326249075b3367A3353DeA34a6D"
         }
     },
     "foreignBridge": {
         "foreignBridgeMediator": {
             "address": "0x1a2546B27293e127fF9a3d0D71A43Dd3733fa1F7"
         }
     }
 }
```

1. Check on [Etherscan](https://etherscan.io) and [BlockScout](https://blockscout.com/xdai/mainnet/) that the contracts with addresses listed above are verified. Mark the mediator contract on the Ethereum Mainnet side as a proxy contract in Etherscan so you can read the extension parameters here.

![](</img/specs/bridges/image-31.png>)

1. Verify that tokens can be transferred in both directions through the bridge. See the [the sUSD bridge AMB extension](/specs/bridges/eth-gc/extensions/susd/) for an example process.
