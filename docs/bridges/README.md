---
sidebar_position: 1
title: Bridges
sidebar_label: Overview
description: How to move tokens and messages between Ethereum and Gnosis Chain. Use Gnosis Bridge, learn how the xDai bridge, Omnibridge and Arbitrary Message Bridge work, track and claim transfers, and find third-party bridges.
keywords: [gnosis bridges, gnosis bridge, omnibridge, xdai bridge, arbitrary message bridge, amb, bridge explorer, third-party bridges]
---

# Bridges

Gnosis Bridge moves tokens and messages between Ethereum and Gnosis Chain. Bridge stablecoins in to get xDai for gas, bring ERC-20 tokens across, or send data from a contract on one chain to a contract on the other.

<div className="eez-cta-row">
  <a className="button button--primary button--lg" href="https://bridge.gnosischain.com">Open Gnosis Bridge</a>
  <a className="button button--secondary button--lg" href="/bridges/usebridges">How to use it</a>
</div>

## Which bridge do I need?

All three native bridges run behind the same app at [bridge.gnosischain.com](https://bridge.gnosischain.com).

| If you want to | Use | How it works |
| --- | --- | --- |
| Get xDai, the gas token on Gnosis Chain | [xDai bridge](/bridges/About%20Token%20Bridges/xdai-bridge) | Bridges USDS (previously DAI) from Ethereum and mints xDai on Gnosis Chain |
| Move an ERC-20 token such as GNO, WETH or WBTC | [Omnibridge](/bridges/About%20Token%20Bridges/omnibridge) | Mints the canonical bridged version of the token on Gnosis Chain |
| Send data or call a contract on the other chain | [Arbitrary Message Bridge (AMB)](/bridges/About%20Token%20Bridges/amb-bridge) | Passes messages between the chains; the Omnibridge is built on it |
| Bridge from a chain other than Ethereum | [Third-party bridges](/bridges/thirdpartybridges) | Bridges and swaps such as Jumper and Bungee, run by third parties |

Transfers on the native bridges are signed by a set of [bridge validators](/bridges/management/validators). Moving from Ethereum to Gnosis Chain takes around 30 minutes, because the bridge waits for Ethereum finality.

## What is in this section

### Use the bridge

- [How to use Gnosis Bridge](/bridges/usebridges): step-by-step transfers in both directions.
- [Bridge Explorer](/bridges/Bridge%20Explorer): track a transfer, check bridge settings and validator status, and claim a transfer.
- [Bridge limits](/bridges/brige-limits): per-transaction and daily limits for the most bridged tokens.

### Understand the bridges

- [How the bridges fit together](/bridges/About%20Token%20Bridges): native, third-party and application-specific bridges.
- [xDai bridge](/bridges/About%20Token%20Bridges/xdai-bridge), [Omnibridge](/bridges/About%20Token%20Bridges/omnibridge) and [Arbitrary Message Bridge](/bridges/About%20Token%20Bridges/amb-bridge): contracts, trust model and transfer flow for each.

### Build with the bridges

- [Build with the AMB](/bridges/using-amb): send messages between contracts, and submit confirmations manually.

### Security and governance

- [Bridge management](/bridges/management): who governs the bridges, [governance decisions](/bridges/management/decisions) and [bridge validators](/bridges/management/validators).
- [Audits](/bridges/audits): independent security audits of the Omnibridge and xDai bridge.
- [Roadmap](/bridges/roadmap) and [Fast Confirmation Rule](/bridges/fast-confirmation-rule): work to cut bridging time from Ethereum.

## Bridges and Gnosis EEZ

The bridges keep operating through the move to [Gnosis EEZ](/eez). Once Gnosis EEZ is live, a contract will be able to call Ethereum mainnet synchronously, in the same transaction, which will reduce the need to bridge to mainnet. Rollups that are not part of the EEZ will still be reached through a bridge. This section stays current for as long as the bridges are in use.
