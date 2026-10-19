---
title: Developer guides
sidebar_label: Overview
sidebar_position: 1
slug: /developers
description: Everything in the Developer guides section, in the order you are likely to need it. Deploy a first contract, set up Foundry or Hardhat, build from templates, call contracts from your app, verify, and find network details and contract addresses.
keywords: [gnosis chain developers, quickstart, foundry, hardhat, remix, deploy, verify, ethers, viem, web3.js, chiado, chain id]
---

# Developer guides

Gnosis Chain is EVM-equivalent: the contracts, tools and libraries you use on Ethereum work here unchanged. This section takes you from a first deployment to a production setup. Everything you deploy today carries over to [Gnosis EEZ](/eez) at the same address.

## Start here

New to Gnosis Chain? Pick one of these. Both end with a contract you can see on a block explorer.

| If you want to | Start with | Time |
| --- | --- | --- |
| Deploy from the browser, with nothing to install | [Quickstart](/developers/quickstart), using Remix and MetaMask | About 15 minutes |
| Work from the terminal, with tests and verification | [Deploy your first contract](/developers/guides/deploy-your-first-contract), using Foundry | About 30 minutes |

## Network details

| | Gnosis Chain | Chiado testnet |
| --- | --- | --- |
| Chain ID | 100 | 10200 |
| RPC | `https://rpc.gnosischain.com` | `https://rpc.chiadochain.net` |
| Explorer | [Gnosisscan](https://gnosisscan.io) | [Blockscout](https://gnosis-chiado.blockscout.com) |
| Gas token | xDai | xDai (test), from the [faucet](/tools/Faucets) |

More endpoints are on [RPC providers](/tools/RPC%20Providers/), and the full network reference is in [networks](/about/networks/).

## What is in this section

### 0-1 guides

Each guide starts from an empty directory and ends in a result you can verify on-chain. Work through them in order.

| Guide | What you build | Time |
| --- | --- | --- |
| [Deploy your first contract](/developers/guides/deploy-your-first-contract) | A verified contract, with a state change you read back two ways | 30 minutes |
| [Accept stablecoin payments](/developers/guides/accept-stablecoin-payments) | A payment receiver that pulls a stablecoin, records who paid and what for, and lets you withdraw | 40 minutes |
| [Launch a tokenised asset](/developers/guides/launch-a-tokenised-asset) | A capped-supply token bound to an off-chain asset, with issuance controls you have tested | 45 minutes |

### Set up your environment

| Tool | Use it for |
| --- | --- |
| [Foundry](/developers/dev-environment/foundry) | Solidity-native testing, scripting and deployment from the terminal |
| [Hardhat](/developers/dev-environment/hardhat) | A JavaScript or TypeScript project with plugins and scripted deploys |
| [Cookbook](/developers/dev-environment/cookbook) | Finding, deploying and reusing open-source Solidity contracts |

### Build from templates

| Template | What you get |
| --- | --- |
| [ERC-20 token](/developers/Build%20contracts%20on%20gnosis/token) | A fungible token deployed to Gnosis |
| [ERC-721 NFT](/developers/Build%20contracts%20on%20gnosis/nft) | An NFT collection deployed to Gnosis |
| [Full-stack dApp](/developers/Build%20contracts%20on%20gnosis/full-stack-dapp) | A Hello World app with a contract and a frontend |

### Call contracts from your app

| Library | Use it for |
| --- | --- |
| [Ethers.js](/developers/Interact%20on%20Gnosis/ethers-js) | Reading and writing contracts from JavaScript |
| [Web3.js](/developers/Interact%20on%20Gnosis/web3-js) | The same, with the web3.js library |
| [MetaMask API](/developers/Interact%20on%20Gnosis/metamask) | Detecting the wallet and adding Gnosis Chain and tokens to it |

### Verify your contracts

Publish your source code so anyone can read the contract they are calling.

- [Verification overview](/developers/Verify%20Smart%20Contracts/): what verification does.
- [Blockscout](/developers/Verify%20Smart%20Contracts/blockscout) and [Sourcify](/developers/Verify%20Smart%20Contracts/sourcify): step-by-step guides.

### Go further

- [Buy a tokenised asset with CoW Swap](/developers/demo-projects/buy-a-tokenised-asset-with-cow): an end-to-end demo that buys a yield-bearing asset through CoW Protocol, then runs the same code against Ethereum mainnet.
- [Useful contracts](/developers/Usefulcontracts): contract, bridge and validator addresses for Gnosis Chain, Chiado and Ethereum.
- [Developer tutorials](/technicalguides): smart accounts, custom signers, EIP-7702 and EIP-5792.

## Get help

Ask in [Discord](https://discord.gg/gnosis) or on the [forum](https://forum.gnosis.io/).
