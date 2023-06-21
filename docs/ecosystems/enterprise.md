---
title: Enterprise
description: Enterprise & B2B Use Cases on the Gnosis Chain
keywords: [Gnosis Chain, EVM, Ethereum, Enterprise, B2B, Corporation] 
---

# Enterprise Applications

_The following assessment materials were compiled by a community member. They provide a basic overview and links designed to help B2B / Enterprise Applications determine if Gnosis Chain is a good fit for their product offerings.  
As with any project there are advantages and tradeoffs, and Alexander provides a general overview along with helpful links._

## Evaluating Gnosis Chain for B2B Use Cases

by [Alexander C](https://github.com/ice09)

The Gnosis Chain (formerly xDai Chain) is an EVM chain with a native Stablecoin currency. It has bridges to the Ethereum Mainnet for the native currency xDai, which represents DAI on the Ethereum Mainnet.

A native Stablecoin is a distinctive feature for financial and other Enterprise use cases which could profit from the decentralized aspects of Blockchains, but cannot accept the usage of a highly volatile native crypto currencies.

The Gnosis Chain is very cheap in transaction fees and very fast, but lacks other features native to the Ethereum Mainnet. This post provides basic information to enable the reader to decide if the Gnosis Chain can be of use for their prototype or working product.

### Intention

Many respected projects recently migrated from Ethereum to the Gnosis Chain or initially started on the xDai Chain. Perpetual Protocol, POAP, Circles UBI, Honeyswap and [many other projects](https://docs.gnosischain.com/ecosystems/) are currently running on Gnosis Chain. Their main motivations were ease of use, minimal and stable transaction fees and fast transaction times. Some of the projects started on Ethereum, but had their business models upended by the extremely high and unpredictable gas fees. Ethereum tooling (like Wallets, IDEs, Static Security Analysis, Analytics tools) is supported due to EVM-compatibility.

### Primary Differences to Ethereum

There are several links with detailed and fair comparisons of Ethereum to Gnosis Chain ([here](https://defiprime.com/xdai-chain), [here](https://jaredstauffer.medium.com/what-is-xdai-how-do-i-use-xdai-a-simple-explanation-7440cbaf1df6)).

TL;DR the main differences are

#### Pros of Gnosis Chain (GC) in comparison to Ethereum Mainnet*

* GC uses a Stablecoin as a native currency (xDai which is bridged 1:1 to DAI in Ethereum Mainnet)
* GC is very cheap in transaction fees.
* GC is fast: 5 seconds in average block times.
* GC uses much less energy for consensus.

#### Cons of Gnosis Chain (GC) in comparison to Ethereum Mainnet*

* Ethereum roughly has a x100 market cap and is considered decentralized, safe and stable.
* Ethereum v1 (PoW) is established and proven to work since 2015. GC, formerly operating as xDai Chain, established a robust production environment since 2018.

### Statistics & Chain Properties

[Blockscout](https://blockscout.com/) is the well known block explorer for POA and related chains like xDai. It is similar to etherscan.io for Ethereum and computes different statistics for Gnosis Chain: [https://blockscout.com/xdai/mainnet/](https://blockscout.com/xdai/mainnet/).  

Derived from the [Gnosis Chain Specs](https://docs.gnosischain.com/specs) and those statistics, the main attributes for developing on Gnosis Chain are:

| Attribute         | Ethereum Mainnet                                | Gnosis Chain                 |
| ----------------- | ----------------------------------------------- | --------------------------------- |
| Runtime           | EVM                                             | EVM (100% Ethereum compliant)     |
| Blocktime         | \~15 sec.                                       | \~5 sec.                          |
| Gas Fees          | $10-$100 per complex Smart Contract Call | <$0.01 per complex Smart Contract Call |

Which means the Gnosis Chain is perfectly valid for prototypical development of EVM-web3-dApps.

### Should I use Gnosis Chain for my B2B dApp?

This post should help you to do your own risk assessment, as a rule of thumb, these may be guiding principles:

* Running your Smart Contracts on Gnosis Chain makes them very inexpensive and intuitive to use for you customers (all prices are stable in USD).
* Security differs from the Ethereum Mainnet.
* In a financial environment, market-cap differences and incentive structures should be considered when determining the best fit and risk profile.
* Gnosis Chain provides a ready-made bootstrapping environment for prototyping, PoCs, MVPs and more.
* Native stable currency makes xDai distinct from other chains and facilitates use cases not possible on chains with native volatile crypto currencies.

### Sample Use Case: Hashlocked Payment

This brief example should show how easy Smart Contracts can be implemented with a native stable currency.
The contract is instantiated with a recipient address, a hash lock and a value, which is xDai (wei), so 100 \* 10^18 is equivalent to $100.
The recipient can now call `conditionalSend` with the correct challenge and will be transferred the stored amount of xDai.

On Ethereum, this could only have been done

* with ETH as currency (volatile and unpredictable)
* with DAI as an ERC-20 Token

However, with a ERC-20 Token transfer, the logic of the Smart Contract would have been way more complex and expensive. Complexity adds potential bugs, so arguably it would even be more insecure. For sure, it would be more expensive in Gas fees (as the call on xDai costs <$0.001).
This sample should show how easy and straightforward Smart Contract development on xDai can be due to the native stable currency.

```
contract ConditionalPayment {

    address payable public recipient;
    uint256 public value;
    bytes32 public hashLock;

    event Transferred(address _recipient, uint256 _value);

    constructor(address payable _recipient, bytes32 _hashLock) payable public {
        recipient = _recipient;
        value = msg.value;
        hashLock = _hashLock;
    }

    function conditionalSend(string memory challenge) public {
        if (sha256(abi.encodePacked(challenge)) == hashLock) {
            recipient.transfer(value);
            emit Transferred(recipient, value);
        }
    }
}
```
