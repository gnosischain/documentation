---
title: Developer tutorials
sidebar_label: Overview
description: Hands-on tutorials for building on Gnosis Chain, covering smart accounts and account abstraction, custom signers, EIP-7702 and EIP-5792, a CoW Swap frontend and confidential computing.
keywords: [gnosis chain tutorials, account abstraction, safe, erc-4337, eip-7702, eip-5792, custom signers, privy, dynamic, cow swap, secret network]
sidebar_position: 1
---

# Developer tutorials

Step-by-step tutorials for integrating the tools and protocols that run on Gnosis Chain. Each one takes you from setup to working code.

**Before you start:** you need Node.js, a wallet, and some test xDai on the Chiado testnet from the [faucet](/tools/Faucets). New to the chain? Do the [quickstart](/developers/quickstart) first.

## Smart accounts and account abstraction

Give users smart contract wallets with batched transactions, gas sponsorship and recovery.

| Tutorial | What you build |
| --- | --- |
| [Understanding account abstraction](/technicalguides/account-abstraction) | What account abstraction is, and the providers that support it on Gnosis Chain |
| [Account abstraction with Safe](/technicalguides/account-abstraction/Safe%20and%20supported%20AA%20infra%20providers) | Safe as the smart account layer |
| [Generate your Safe Smart Account](/technicalguides/account-abstraction/Safe%20and%20supported%20AA%20infra%20providers/integration-guide-for-safe) | A Safe created with Auth Kit and On Ramp Kit |
| [Safe with Gelato](/technicalguides/account-abstraction/Safe%20and%20supported%20AA%20infra%20providers/gelato) | Gasless Safe transactions through Gelato Relay |
| [Safe with Pimlico](/technicalguides/account-abstraction/Safe%20and%20supported%20AA%20infra%20providers/pimilico) | ERC-4337 user operations with a Pimlico bundler and paymaster |
| [ZeroDev](/technicalguides/account-abstraction/zerodev-guide) | An app with a ZeroDev embedded smart wallet |
| [Particle Network](/technicalguides/account-abstraction/particle-network) | An app with Particle's smart wallet-as-a-service |

## Custom signers

Let users sign in with email, social logins or passkeys instead of a seed phrase.

| Tutorial | What you build |
| --- | --- |
| [Custom signers](/technicalguides/custom-signers) | The concepts, and when to use them |
| [Privy](/technicalguides/custom-signers/privy) | Login flows and embedded wallets with Privy |
| [Dynamic](/technicalguides/custom-signers/dynamic) | Login and onboarding flows with Dynamic |

## Pectra upgrades

Use the wallet features that arrived with the Pectra hard fork.

| Tutorial | What you build |
| --- | --- |
| [EIP-7702](/technicalguides/Pectra/eip-7702) | An EOA that temporarily runs smart contract code |
| [EIP-5792](/technicalguides/Pectra/eip-5792) | Batched calls in a single wallet prompt, with status polling |

## DeFi and confidential computing

| Tutorial | What you build |
| --- | --- |
| [Deploy a CoW Swap frontend](/technicalguides/DeFi/Deploy%20A%20Cow%20Swap%20Widget) | Your own swap interface from the CoW Swap widget examples |
| [Secret Network](/technicalguides/Confidential%20Computing/secret-network) | Confidential data and private computation for a Gnosis app |

## Get help

Stuck on a step? Ask in [Discord](https://discord.gg/gnosis) or on the [forum](https://forum.gnosis.io/), where the community and the Gnosis Chain developer relations team can help.
