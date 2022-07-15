---
description: How to deploy erc677-to-erc677 Arbitrary Message Bridge extension
---

# ERC677 to ERC677 AMB bridge extension

Instructions for deploying a pair of ERC677-compatible tokens and the bridge mediator contract on top of the Arbitrary Message Bridge (AMB).

:::info
**An AMB bridge extension** is a pair of mediator contracts associated with a specific pair of Arbitrary Message Bridge contracts.
:::

The steps below assume that the AMB is up and running and serves [the bridge between Kovan (Foreign) chain and Sokol (Home) chain](https://docs.tokenbridge.net/kovan-sokol-amb-bridge/about-the-kovan-sokol-amb/).

## Instructions

1. `docker pull poanetwork/tokenbridge-contracts:latest`\

2. Deploy an ERC20 token contract to the Foreign (Kovan) chain. The contract `PermittableToken` (`PermittableToken_flat.sol`) from the archive `tokenbridge-contracts-flattened-...zip` located on [the release page in the TokenBridge contracts repo](https://github.com/poanetwork/tokenbridge-contracts/releases/latest) can be used for this. The deployment can be performed with Remix or MyEtherWallet.\
   _**Note: **In the steps below we assume that the address of the deployed token contract is _`0xff94183659f549D6273349696d73686Ee1d2AC83`.\
   \
   Verify the contract in the block explorer (contract name: `PermittableToken`, compiler version: `v0.4.24+commit.e67f0147`, optimization is enabled, automatic identification of constructor arguments).\

3. Mint some amount of tokens for an account.\

4.  Create `amb-erc20-to-erc677.config` config file with the following content:

    ```
    # The type of bridge. Defines set of contracts to be deployed.
    BRIDGE_MODE=AMB_ERC_TO_ERC

    # The private key hex value of the account responsible for contracts
    # deployments and initial configuration. The account's balance must contain
    # funds from both networks.
    DEPLOYMENT_ACCOUNT_PRIVATE_KEY=
    # Extra gas added to the estimated gas of a particular deployment/configuration transaction
    # E.g. if estimated gas returns 100000 and the parameter is 0.2,
    # the transaction gas limit will be (100000 + 100000 * 0.2) = 120000
    DEPLOYMENT_GAS_LIMIT_EXTRA=0.2
    # The "gasPrice" parameter set in every deployment/configuration transaction on
    # Home network (in Wei).
    # ----------------------- 5 gwei
    HOME_DEPLOYMENT_GAS_PRICE=5000000000
    # The "gasPrice" parameter set in every deployment/configuration transaction on
    # Foreign network (in Wei).
    # -------------------------- 5 gwei
    FOREIGN_DEPLOYMENT_GAS_PRICE=5000000000
    # The timeout limit to wait for receipt of the deployment/configuration
    # transaction.
    GET_RECEIPT_INTERVAL_IN_MILLISECONDS=3000

    # The name of the ERC677 token to be deployed on the Home network.
    BRIDGEABLE_TOKEN_NAME=YourTokenName
    # The symbol name of the ERC677 token to be deployed on the Home network.
    BRIDGEABLE_TOKEN_SYMBOL=YourTokenSymbol
    # The number of supportable decimal digits after the "point" in the ERC677 token
    # to be deployed on the Home network.
    BRIDGEABLE_TOKEN_DECIMALS=18

    # The RPC channel to a Home node able to handle deployment/configuration
    # transactions.
    HOME_RPC_URL=https://sokol.rpc.endpoint/
    # Address on Home network with permissions to change parameters of the bridge contract.
    # For extra security we recommended using a multi-sig wallet contract address here.
    HOME_BRIDGE_OWNER=0x
    # Address on Home network with permissions to upgrade the bridge contract
    HOME_UPGRADEABLE_ADMIN=0x
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
    FOREIGN_RPC_URL=https://kovan.rpc.endpoint/
    # Address on Foreign network with permissions to change parameters of the bridge contract.
    # For extra security we recommended using a multi-sig wallet contract address here.
    FOREIGN_BRIDGE_OWNER=0x
    # Address on Foreign network with permissions to upgrade the bridge contract and the
    # bridge validator contract.
    FOREIGN_UPGRADEABLE_ADMIN=0x
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

    # The address of the existing ERC20/ERC677 compatible token in the Foreign network to
    # be exchanged to the ERC20/ERC677 token deployed on Home.
    ERC20_TOKEN_ADDRESS=0xff94183659f549D6273349696d73686Ee1d2AC83

    # The address of the existing AMB bridge in the Home network that will be used to pass messages
    # to the Foreign network.
    HOME_AMB_BRIDGE=0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560
    # The address of the existing AMB bridge in the Foreign network that will be used to pass messages
    # to the Home network.
    FOREIGN_AMB_BRIDGE=0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560
    # The gas limit that will be used in the execution of the message passed to the mediator contract
    # in the Foreign network.
    HOME_MEDIATOR_REQUEST_GAS_LIMIT=500000
    # The gas limit that will be used in the execution of the message passed to the mediator contract
    # in the Home network.
    FOREIGN_MEDIATOR_REQUEST_GAS_LIMIT=500000

    # The api url of an explorer to verify all the deployed contracts in Home network.
    HOME_EXPLORER_URL=https://blockscout.com/poa/sokol/api
    # The api url of an explorer to verify all the deployed contracts in Foreign network.
    FOREIGN_EXPLORER_URL=https://api-kovan.etherscan.io/api
    # The api key of the explorer api, if required, used to verify all
    # the deployed contracts in Foreign network.
    FOREIGN_EXPLORER_API_KEY=YOUR-ETHERSCAN-API-KEY-HERE

    ```

    _**Please note:**_ if `HOME_EXPLORER_URL`, `FOREIGN_EXPLORER_URL` and `FOREIGN_EXPLORER_API_KEY` are not configured, it will be necessary to verify the contracts in the block explorers manually. The flattened contracts sources from the archive `tokenbridge-contracts-flattened-...zip` located on [the release page in the TokenBridge contracts repo](https://github.com/poanetwork/tokenbridge-contracts/releases/latest) can be used for this. _It is highly recommended to allow the deployment process to verify the contracts automatically since the verification could be not trivial and take lots of steps._\

5.  `docker run -ti --rm --env-fileamb-erc20-to-erc677.config`

    ` poanetwork/tokenbridge-contracts:latest deploy.sh`\
    Output will look similar to this:

    ```
    Deployment has been completed.

    [   Home  ] Bridge Mediator: 0x8f33Ad10fdc10B56D4d4Ca09D5A5910D62d82375
    [   Home  ] ERC677 Bridgeable Token: 0xB36296478099555f9a2AD45AeA6E7b6c82DCc56d
    [ Foreign ] Bridge Mediator: 0xC3C5dcCeB4276aEd47c2129B2F3906Ec66803361
    [ Foreign ] ERC677 Token: 0xff94183659f549D6273349696d73686Ee1d2AC83
    Contracts Deployment have been saved to `bridgeDeploymentResults.json`
    {
        "homeBridge": {
            "homeBridgeMediator": {
                "address": "0x8f33Ad10fdc10B56D4d4Ca09D5A5910D62d82375"
            },
            "bridgeableErc677": {
                "address": "0xB36296478099555f9a2AD45AeA6E7b6c82DCc56d"
            }
        },
        "foreignBridge": {
            "foreignBridgeMediator": {
                "address": "0xC3C5dcCeB4276aEd47c2129B2F3906Ec66803361"
            }
        }
    }

    ```
6. If `HOME_EXPLORER_URL`, `FOREIGN_EXPLORER_URL` and `FOREIGN_EXPLORER_API_KEY` were not configured, verify the sources in the block explorers. Otherwise, skip this step.\

7. If your own ERC20 token was used in the configuration for the extension, execute the `approve` method on the token contract on the Foreign side as so the approved address is the mediator contract `0xC3C5dcCeB4276aEd47c2129B2F3906Ec66803361`. Then invoke the `relayTokens` method on the mediator contract. Note that for these two operations the amount of tokens must be equal or greater the `FOREIGN_MIN_AMOUNT_PER_TX` parameter used in the deployment.\
   \
   If the `PermittableToken` contract was used for the token on the foreign side, invoke `transferAndCall` method from the token contract. The argument `to` for the call must contain the address of the mediator contract `0xC3C5dcCeB4276aEd47c2129B2F3906Ec66803361`. The `data` argument must be `0x`. \
   \
   For both cases the sender of the transaction is used as the account to receive the tokens on another side of the bridge.\
   \
   The transaction hash can be used [on the AMB Live monitoring app](https://docs.tokenbridge.net/about-tokenbridge/components/amb-live-monitoring-application) to track the status of the transfer confirmation and execution.\

8. The method `transferAndCall` can be used with the token contract (`0xB36296478099555f9a2AD45AeA6E7b6c82DCc56d`) on the Home side to transfer tokens back to the Foreign chain. The argument `to` for the call must contain the address of the mediator contract `0x8f33Ad10fdc10B56D4d4Ca09D5A5910D62d82375`. The `data` argument must be `0x`.
