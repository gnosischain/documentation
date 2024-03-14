---
sidebar_position: 1
sidebar_label: Account Abstraction
---

# Understanding Account Abstraction

<CardContainer>
<Card
    title="What is Account Abstraction ? "
    subtitle="Account abstraction allows for more flexible and user-friendly account models beyond the traditional externally owned accounts (EOAs). With AA, smart contract wallets can initiate transactions, enabling more complex logic like multi-signature verification, recovery mechanisms, and gas fee payments in tokens. AA revolves around the idea of avoiding the need for change in concensus layer."
    url=""
    />
</CardContainer>

<CardContainer>
    <FeatureCard imgUrl="">
        <p>Programmable wallets with arbitary logic</p>
    </FeatureCard>
    <FeatureCard imgUrl="">
        <p>Batched transaction for sending multiple transactions</p>
    </FeatureCard>
    <FeatureCard imgUrl="">
        <p>Allowing users to pay gas fees in ERC-20 tokens without having ETH</p>
    </FeatureCard>
    <FeatureCard imgUrl="">
        <p>Sponsoring user gas fees for gasless experience</p>
    </FeatureCard>
</CardContainer>




# Account Abstraction on Gnosis Chain

Gnosis Chain offers a range of account abstraction (AA) providers designed to enhance user experience by simplifying transaction processes and improving security for your dApp. This README provides an overview of the available AA options on Gnosis Chain, helping developers choose the best fit for their projects.

## Providers for Account Abstraction on Gnosis Chain

import DocCardList from '@theme/DocCardList';

<DocCardList />

### Particle Network

Particle Network provides a Smart Wallet-as-a-Service, leveraging modular and customizable wallet components. It supports native ERC-4337 AA capabilities, streamlining user onboarding and transaction processes.

- **Key Features:**
  - Integration with Gnosis Mainnet and Testnet.
  - Simplified user onboarding via Web2 accounts.
  - Native support for ERC-4337 AA.
  - Intrinsic modularity with various AA infrastructure providers.

For more details, refer to the [Particle Network documentation](https://docs.particle.network/).

### AA with Safe and Gelato

[Safe](https://docs.safe.global/) is the most trusted decentralized custody protocol and collective asset management platform on Ethereum and the EVM. It provides a variety of Account Abstraction stacks for developers to integrate and build Account Abstraction on top of Safe.

Gelato is web3’s decentralized backend empowering builders to create augmented smart contracts that are automated, gasless & off-chain aware on all major EVM-compatible blockchains.

- **Key Features:**
  - Multi-signature accounts.
  - Account Abstraction SDK.
  - Protocol, Auth, Onramp, and Relay Kits for comprehensive AA functionalities.

For more information on Gelato , visit the [Gelato documentation](https://docs.gelato.network/).

For more details, refer to the [Safe documentation](https://docs.safe.global/).

## Choosing the Right Option

When deciding on an AA solution for your project on Gnosis Chain, consider the specific needs of your application, such as the level of security required, the desired user experience, and the technical capabilities of your team. Each option offers unique features and benefits, so it's important to evaluate them in the context of your project's requirements.

