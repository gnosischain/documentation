---
description: Particle Network is the Intent-Centric, Modular Access Layer of Web3 supercharging UX through its Smart Wallet-as-a-Service
keywords: [particle-network,account-abstraction]
---

# Building AA with Particle Network

With Particle's Smart Wallet-as-a-Service, developers can curate an unparalleled user experience through modular and customizable EOA/AA embedded wallet components. Using MPC-TSS for key management, Particle can streamline user onboarding via familiar Web2 accounts—such as Google accounts, email addresses, and phone numbers.

Particle has integrated Gnosis’ Mainnet and Testnet through both EOA interactions and native ERC-4337 SimpleAccount implementations.

## Particle Network Smart Wallet-as-a-Service

Particle Network offers native ERC-4337 Account Abstraction capabilities within their Smart Wallet-as-a-Service stack. This allows developers to facilitate end-to-end utilization of smart accounts, beginning at the onboarding process and ending at the construction and sponsorship of UserOperations. 

This integration is facilitated by:
- [Particle Network Wallet-as-a-Service](https://developers.particle.network)
- [Particle Network AA SDK](https://developers.particle.network/reference/introduction-to-smart-waas)
- [Particle Network Bundler](https://developers.particle.network/docs/particle-bundler)
- [Particle Network Paymaster](https://developers.particle.network/docs/omnichain-paymaster)

And thus, the collection of these technologies is coined as "Smart Wallet-as-a-Service." You can learn more about Particle Network's Smart Wallet-as-a-Service Modular Stack [here](https://blog.particle.network/announcing-our-smart-wallet-as-a-service-modular-stack-upgrading-waas-with-erc-4337/).

![Particle Network Smart WaaS map](https://blog.particle.network/content/images/2023/10/graphic-image-2.png)

## Particle Network AA SDK

Natively incorporated into Particle Network's embedded MPC-TSS wallet, the Particle Network AA SDK simplifies utilization of ERC-4337 Account Abstraction by facilitating the creation of a smart accounts, constructing UserOperations, sponsoring transactions, paying gas fees in ERC20 tokens, etc. –all formatted to minimize complexity.

Directly within the Particle Network AA SDK, you can choose a specific smart account implementation to use. Currently, the options include Biconomy, CyberConnect, and SimpleAccount, with more on the way.

The Particle Network AA SDK defaults to using the Particle Bundler for natively pushing UserOperations. On Testnets, it employs the Particle Paymaster for managing transaction fees, whereas on Mainnets, Biconomy is used as the default Paymaster.

## Intrinsic Modularity

Leveraging Particle Network's Smart Wallet-as-a-Service to either facilitate or play a role within full-stack ERC-4337 Account Abstraction is simple due to it's inherent modularity –both natively and externally– with various different AA infrastructure providers.

![Particle Network Smart WaaS infrastructure stack](https://blog.particle.network/content/images/size/w1000/2023/10/1-3.png)

## Example application

Using Particle Network's Smart Wallet-as-a-Service on Gnosis only takes a few lines of code.

Take a look at the following demo application showcasing the creation of a smart account through Particle Network’s MPC-based social login; then using that account to send a sample UserOperation: https://github.com/TABASCOatw/particle-gnosis-demo
