# GoldRush - powered by Covalent

[GoldRush](https://goldrush.dev/?utm_source=gnosis-chain&utm_medium=partner-docs) is a set of data tools that enable easy web3 development across [200+ supported blockchains](https://goldrush.dev/docs/networks/?utm_source=gnosis-chain&utm_medium=partner-docs), 
including Gnosis Chain. The mission of GoldRush is to improve the lives of developers by providing structured onchain data for dapps.

Developers can utilize GoldRush via SDKs, APIs, UI Kits, human-readable transactions and pre-built templates for a number of web3 use cases. The GoldRush suite is powered by Covalent, which is decentralized and cryptographically secure. Whether you are fetching NFTs, DeFi transactions, or other onchain data, GoldRush helps scale hundreds of projects from crypto native teams to Fortune 500 companies.

With GoldRush, you have access to:

- Every wallet's token balances
- Full transaction histories
- Every contract log event
- All NFTs including assets and metadata

**Use GoldRush if you need:**

- Wallet, Transactions, NFT, DEX, Staking or core blockchain data (i.e. log events, blocks, gas)
- Normalized, aggregated and enhanced multichain data, well beyond what you get from RPC providers
- Enterprise-grade performance

> [Sign up to start building on Gnosis Chain](https://goldrush.dev/platform/?utm_source=gnosis-chain&utm_medium=partner-docs)

## APIs

The GoldRush APIs enables developers to quickly and easily access structured onchain data. This means consistent response schemas that are blockchain agnostic. Available APIs and corresponding use cases include:

### Wallet API

- **Features:** All token balances (ERC20, 721, 1155, native), token transfers and prices (spot and 
historical) for a wallet.
- **Use cases:** [Wallets, portfolio trackers](https://goldrush-wallet-portfolio-ui.vercel.app/?utm_source=gnosis-chain&utm_medium=partner-docs), token gating, airdrop snapshots.

### Transactions API

- **Features:** All historical transactions with human-readable log events. Includes gas usage/spend
summaries.
- **Use cases:** [Accounting and tax tools](https://bit.ly/crypto-tax-tool), branded in-app [transaction receipts](https://goldrush-dfk-tx-receipt-ui.vercel.app/tx/defi-kingdoms-mainnet/0x4e5c0af28b2cea27d06677fae1f573572e0ff863c43ae42d2959ca67b90c4390/?utm_source=gnosis-chain&utm_medium=partner-docs).

### NFT API

- **Features:** Media assets, metadata, sales, owners, trait & attribute filters, thumbnails, and 
previews.
- **Use cases:** [NFT galleries and marketplaces](https://goldrush-nft-gallery-ui.vercel.app/?utm_source=gnosis-chain&utm_medium=partner-docs), real world asset (RWA) tracking, token gating.

### Cross-Chain Activity API

- **Features:** Single API call to fetch a list of active chains and the latest transaction date on each for an address.
- **Use cases:** [App onboarding](https://goldrush-wallet-portfolio-ui.vercel.app/activity/0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de/?utm_source=gnosis-chain&utm_medium=partner-docs).

### Security API

- **Features:** NFT and ERC20 token allowances, including value-at-risk.
- **Use cases:** [Revoke features](https://goldrush-revokehub.vercel.app/?utm_source=gnosis-chain&utm_medium=partner-docs) in wallets, security applications.

### Blockchain API

- **Features:** Block details, log events by contract address or topic hash, gas prices, token prices and holders.
- **Use cases:** [Custom block explorers](https://goldrush-block-explorer.vercel.app/?utm_source=gnosis-chain>&utm_medium=partner-docs).

## Developer Tools

There are 4 primary developer tools for using the APIs:

1. [GoldRush API](https://goldrush.dev/docs/api/?utm_source=gnosis-chain&utm_medium=partner-docs) - REST API with enterprise-grade endpoints to use with any programming language. Switch blockchains with one path parameter.

    ```bash
    curl -X GET https://api.covalenthq.com/v1/gnosis-mainnet/address/0x2C6900b24221dE2B4A45c8c89482fFF96FFB7E55/balances_v2/ \
        -H 'Content-Type: application/json' \
        -u YOUR_API_KEY:
    ```

2. [GoldRush SDKs](https://goldrush.dev/docs/unified-api/sdk/?utm_source=gnosis-chain&utm_medium=partner-docs) - official client libraries including TypeScript, Python, Go and Viem.
    ```jsx
    npm install @covalenthq/client-sdk
    ```


    ```jsx
    import { CovalentClient } from "@covalenthq/client-sdk";

    (async () => {
    try {
        const client = new CovalentClient("YOUR_API_KEY");
        const transactions = client.TransactionService.getAllTransactionsForAddress("gnosis-mainnet", "0x2C6900b24221dE2B4A45c8c89482fFF96FFB7E55");

        for await (const tx of transactions) {
        console.log("tx", tx);
        }
    } catch (error) {
        console.log(error.message);
    }
    })();
    ```

3. [GoldRush UI Kit](https://github.com/covalenthq/goldrush-kit/?utm_source=gnosis-chain&utm_medium=partner-docs) - beautifully designed React components for your dApp frontend.

    [![GoldRush Component Example](https://www.datocms-assets.com/86369/1711147954-goldrush_wallet_ui_example.png)](https://goldrush-wallet-portfolio-ui.vercel.app/dashboard/balance/0xfc43f5f9dd45258b3aff31bdbe6561d97e8b71de/transfers/eth-mainnet/0xf8c3527cc04340b208c854e985240c02f7b7793f)

4. [GoldRush Decoder](https://github.com/covalenthq/goldrush-decoder/?utm_source=gnosis-chain&utm_medium=partner-docs) - decode any raw event logs into human-readable structured data.

    **Request:**
    ```bash
    curl -X POST http://localhost:8080/api/v1/tx/decode \
        -H 'Content-Type: application/json' \
        -d '{
              "chain_name": "gnosis-mainnet",
              "tx_hash": "0xe9e807d78673ad214ce51d0c13d13cf15f2ddf8e85498db64e6ffad75e12733f"
        }'
    ```

    **Custom decoded response:**
    ```json
    {
        "success": true,
        "events": [
            {
                "action": "Account Abstraction Transaction",
                "category": "Others",
                "name": "User Operation Event",
                "protocol": {
                    "logo": "https://logos.covalenthq.com/tokens/100/0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789.png",
                    "name": "4337 Entry Point"
                },
                "details": [
                    {
                        "heading": "Gas Cost",
                        "value": "2504932000000000",
                        "type": "text"
                    },
                    {
                        "heading": "Gas Used",
                        "value": "1252466",
                        "type": "text"
                    },
                    {
                        "heading": "Paymaster",
                        "value": "0x00000f79B7FaF42EEBAdbA19aCc07cD08Af44789",
                        "type": "address"
                    },
                    {
                        "heading": "Sender",
                        "value": "0x1B19D70F192bEb4E1fc4FCf72219E742b0B3661c",
                        "type": "address"
                    },
                    {
                        "heading": "User Operation Hash",
                        "value": "0x31ec6a8084b4f3677120313986f0f2dc9dffdb5c15d4eccf2094603a690efcb6",
                        "type": "address"
                    }
                ]
            }
        ],
        "tx_metadata": {
           ...
            },
            "explorers": [
                {
                    "label": null,
                    "url": "https://gnosis.blockscout.com/tx/0xe9e807d78673ad214ce51d0c13d13cf15f2ddf8e85498db64e6ffad75e12733f"
                }
            ]
        }
    }
    ```

## Get started

- [API Key](https://goldrush.dev/platform/auth/register/?utm_source=gnosis-chain&utm_medium=partner-docs) - sign up for free
- [Docs](https://goldrush.dev/docs/unified-api/?utm_source=gnosis-chain&utm_medium=partner-docs) - comprehensive knowledge base for all things GoldRush
- [Guides](https://goldrush.dev/docs/unified-api/guides/?utm_source=gnosis-chain&utm_medium=partner-docs) - learn how to build for various use cases and expand your onchain knowledge
