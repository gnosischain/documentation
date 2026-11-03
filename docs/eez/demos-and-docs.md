---
sidebar_position: 3.5
title: "EEZ References & Demos"
sidebar_label: References & demos
description: Hands-on walkthroughs and the protocol documentation for the Ethereum Economic Zone. See one call go from one chain to another and back in the same transaction, with real protocol code.
keywords: [eez demos, eez protocol docs, ethereum economic zone, synchronous composability, cross-chain calls, eez-core-protocol, rollup operators]
---

# EEZ References & Demos

This documentation covers Gnosis EEZ, the first instance of the Ethereum Economic Zone. The EEZ framework itself has its own documentation, demos and source code, maintained by the EEZ Association. This page collects them in one place.

## Learn by doing

- **[EEZ demos](https://build.eez.io/)**: hands-on walkthroughs that follow one call from one chain to another and back in the same transaction, with real protocol code. They are grouped by who you are: dapp developers, rollup operators and protocol researchers.
- **[Remix with EEZ](https://app.remix.live?eez=true)**: Remix with pre-built contracts that include an EEZ deployment, so you can try it in the browser.

## Protocol documentation

- **[EEZ protocol docs](https://docs.eez.io/)**: the full documentation, covering execution and static entries, multi-prover verification, limits and boundaries, and the blob format.
- **[Core Protocol Specification](https://docs.eez.io/core-protocol-spec)**: the formal model.
- **[Integration Boundaries](https://docs.eez.io/integration-boundaries)**: the obligations EEZ places on an integration such as Gnosis EEZ.
- **[specs-draft](https://github.com/eez-association/specs-draft)**: the draft specification on GitHub.

## Source code

The reference implementation is open source:

- **[eez-rollup0](https://github.com/eez-association/eez-rollup0)**: the rollup node, with the sequencer, composer, proof signer and follower.
- **[eez-core-protocol](https://github.com/eez-association/eez-core-protocol)**: the smart contracts on Ethereum.

## Before you build

The demos and Remix contracts run on local chains and on the Chiado testnet, against early-stage contracts that are not yet audited. They are for learning the protocol, not for deploying to production. To see how the protocol fits into Gnosis EEZ, read [How it works](/eez/how-it-works). The [timeline](/eez/timeline) tracks when Gnosis EEZ goes live.
