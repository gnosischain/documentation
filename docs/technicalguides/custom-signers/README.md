---
sidebar_position: 4
sidebar_label: Custom Signers
---

# Custom Signers

Custom signers allow developers to inject their own signing mechanisms tailored to specific use cases. This flexibility enhances security, usability, and adaptability in different environments, such as multi-signature wallets or smart contract interactions.

## Why Use Custom Signers?

### Tailored Signing Methods
With custom signers, you can personalize the signing process to fit your dApp’s specific needs. This could mean automatic signing for trusted operations, requiring additional confirmation for sensitive actions, or integrating unique hardware devices for enhanced security.Users can now interact with dapps by just using their emails or passkeys.

### Enhanced Security
Custom signers give developers more control over how and where signing keys are stored. This can include signing transactions in hardware security modules (HSMs), using a multi-sig contract, or requiring multi-factor authentication before a transaction is signed.

### Optimized for Specific Use Cases
Whether you’re dealing with privacy-focused transactions, or social recovery mechanisms, custom signers can be configured to handle the specific logic needed. They allow for flexibility in crafting unique user flows that require specialized transaction signing methods.




<CardContainer>
    <Card
        title="Privy"
        subtitle="Guide to intgerate Privy Wallet and SDK"
        url="/technicalguides/custom-signers/privy" 
    />
    <Card
        title="Dynamic"
        subtitle="Guide to intgerate Dynamic Wallet and SDK"
        url="/technicalguides/custom-signers/dynamic" 
    />
</CardContainer>