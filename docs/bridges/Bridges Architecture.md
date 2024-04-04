---
description: Architecture of Gnosis' Bridges
sidebar_position: 4
---

## Conceptual Architecture

Gnosis has three main types of bridges:

- **Native Bridges**: built into the chain itself, and mint the xDAI and ERC20 token from Ethereum to Gnosis Chain
- **3rd-party Bridges**: these are maintained by 3rd parties and allow users to swap for canonical tokens created by native bridges
- **Application-Specific Bridges**: some applications may provide custom bridges that maintain their own canonical token on Gnosis

![Diagrams overview of Bridges](../../static/img/bridges/diagrams/bridge-overview.svg)

## Gnosis Chain Bridge

Gnosis Chain bridge :
- allows to mint the native stablecoin xDAI on gnosis chain by bridging DAI from Ethereum
- allows to bridge ERC2O token from Ethereum to Gnosis Chain


### Bridging Data

See the [Arbitrary Message Passing Bridge](/bridges/tokenbridge/amb-bridge) or AMB Bridge for short.


## Roadmap

Gnosis has a [long-term roadmap](/bridges/roadmap) to move towards trustless bridges, and is actively funding research and development in this area.

## Feedback & Suggestion

We would love to hear from you on suggestions and ideas on bridges in Gnosis Chain.

- [Gnosis Bridges Improvement Proposals](https://docs.google.com/forms/d/1V5RH7rIcHw-7JSePErUNutWO_p59HwbbsNedoWidTKA/viewform?edit_requested=true)
- [AMB developers form](https://docs.google.com/forms/d/1wj31wGZ2sxMd_n35ZTavqegQo8XEp2C9brBPLFwCMn0/viewform?edit_requested=true#responses)
