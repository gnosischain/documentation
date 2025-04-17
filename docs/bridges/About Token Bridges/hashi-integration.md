---
sidebar_position: 5
title: Hashi Integration
description: How do the bridges work after Hashi integration
keywords: [amb bridge, arbitrary message bridge, omnibridge, xdai bridge, hashi]
---

# Hashi integration

The proposal of Hashi integration on Gnosis Chain's bridges (AMB & Omnibridge, xDAI bridge) is [approved by Gnosis DAO members](https://forum.gnosis.io/t/gip-93-should-gnosisdao-support-the-integration-of-hashi-within-gnosis-chains-canonical-bridges/8245/5) on April 2nd, 2024. The integration introduces advanced security measures, mitigates systemic risks, and ensures the Gnosis Chain ecosystem remains resilient against the evolving landscape of security threats. With the efforts from Cross-Chain Alliance and Gnosis team, the integration is going toward production.

Both the AMB and xDAI bridge have been upgraded to Hashi integration.

1. AMB: [Governance Decision](../management/decisions.md#upgrade-amb-implementation-contract-for-hashi-integraion-remove-telepathy-validator-refund-trac-token-due-to-accidental-transfer)
2. xDAI: [Governance Decision](../management/decisions.md#upgrade-xdai-implementation-contract-for-hashi-integraion-replacing-metacartel-with-monerium)

## What’s new?

1. Hashi Manager contract: New contract. Set reporters, adapters, and threshold parameters used by the bridge contract.
2. New variables/function:
   1. HASHI_ENABLED: New variable. When set to true, every message can be approved by Hashi, but the message need not to be approved by Hashi for it to get executed.
   2. HASHI_MANDATORY: New variable. When set to true, every message has to be approved by Hashi before execution.
   3. isApprovedByHashi(bytes32 msgId): New public function. Return whether a message w.r.t a message Id is approved by Hashi.
   4. setHashiManager(address HashiManager): New function, onlyOwner. Set Hashi Manager contract on the bridge contract.
3. Modified events:
   1. xDAI Bridge: in xDAI bridge, a `bytes32 nonce` is added into `UserRequestForAffirmation` and `UserRequestForSignature` events.
      1. `event UserRequestForAffirmation(address recipient, uint256 value)` is changed to `event UserRequestForAffirmation(address recipient, uint256 value, bytes32 nonce)`
      2. `event UserRequestForSignature(address recipient, uint256 value)` is changed to `UserRequestForSignature(address recipient, uint256 value bytes32 nonce)`

## AMB & Omnibridge

![](../../../static/img/bridges/hashi/Hashi-Gnosis-AMB.png)

For Omnibridge / AMB:

**Ethereum → Gnosis Chain**

1. User approves token for Foreign Omnibridge
2. User calls ForeignOmnibridge.relayTokens(address token, address receiver, uint256 amount)
   1. ForeignOmnibridge calls ForeignAMB.requireToPassMessage()
   2. ForeignAMB check if HASHI_IS_ENABLED is true, and call Yaho.dispatchMessage
   3. Off chain relayer detects MessageDispatched event from Yaho and call Yaho.relayMessagesToAdapters to relay message to each reporters.
   4. Reporters relay the messageId and message hash to adapter contract on Gnosis Chain.
   5. Light Client based oracle only stores hashes on Gnosis Chain.
3. If Hashi is enabled & mandatory, off chain executor calls Gnosis Chain’s Yaru.executeMessages(), which check if the hash is agreed upon a threshold amount of adapters (set in Hashi Manager contract) adapters and set isApprovedByHashi(messageId) to true eventually.
4. Bridge validators detects UserRequestForAffirmation event and call HomeAMB.executeAffirmation. If Hashi is enabled & mandatory, this step has to wait after step 3.

**Gnosis Chain → Ethereum**

1. User approves token for Home Omnibridge
2. User calls HomeOmnibridge.relayTokens(address token, address receiver, uint256 amount)
   1. HomeOmnibridge calls HomeAMB.requireToPassMessage()
   2. HomeAMB check if HASHI_IS_ENABLED is true, and call Yaho.dispatchMessage
   3. Off chain relayer detects MessageDispatched event from Yaho and call Yaho.relayMessagesToAdapters to relay message to each reporters.
   4. Reporters relay the messageId and message hash to adapter contract on Ethereum.
3. Bridge validators detects UserRequestForSignature event and call HomeAMB.submitSignatures.
4. If Hashi is enabled & mandatory, off chain executor calls Ethereum’s Yaru.executeMessages(), which check if the hash is agreed upon adapters and set isApprovedByHashi(messageId) to true eventually.
5. User claims token by calling Ethereum’s ForeignAMB.executeSignatures().

## xDAI briddge

![](../../../static/img/bridges/hashi/Hashi-Gnosis-xDAI.png)

**Ethereum → Gnosis Chain**

1. User approves token for Foreign xDAI bridge.
2. User calls ForeignXDAIBridge.relayTokens(address receiver, uint256 amount)
   1. ForeignXDAIBridge check if HASHI_IS_ENABLED is true, and call Yaho.dispatchMessage
   2. Off chain relayer detects MessageDispatched event from Yaho and call Yaho.relayMessagesToAdapters to relay message to each reporters.
   3. Reporters relay the messageId and message hash to adapter contract on Gnosis Chain.
   4. Light Client based oracle only stores hashes on Gnosis Chain.
3. If Hashi is enabled & mandatory, off chain executor calls Gnosis Chain’s Yaru.executeMessages(), which check if the hash is agreed upon a threshold amount of adapters (set in Hashi Manager contract) and set isApprovedByHashi(messageId) to true eventually.
4. Bridge validators detects UserRequestForAffirmation event and call HomexDAIBridge.executeAffirmation. If Hashi is enabled & mandatory, this step has to wait after step 3. Block Reward contract emits AddedReceiver event, which will mint equivalent amount of xDAI to receiver in the next block.

**Gnosis Chain → Ethereum**

1. User calls HomexDAIBridge.relayTokens(address receiver, uint256 amount) or transfer xDAI to HomexDAIBridge without msg.data.
   1. HomexDAIBridge check if HASHI_IS_ENABLED is true, and call Yaho.dispatchMessage
   2. Off chain relayer detects MessageDispatched event from Yaho and call Yaho.relayMessagesToAdapters to relay message to each reporters.
   3. Reporters relay the messageId and message hash to adapter contract on Ethereum.
2. Bridge validators detects UserRequestForSignature event and call HomexDAIBridge.submitSignatures.
3. If Hashi is enabled & mandatory, off chain executor calls Ethereum’s Yaru.executeMessages(), which check if the hash is agreed upon adapters and set isApprovedByHashi(messageId) to true eventually.
4. User claims token by calling Ethereum’s ForeignxDAIBridge.executeSignatures(). DAI is transfer to the receiver eventually.

## Reference

1. AMB contracts: https://github.com/crosschain-alliance/tokenbridge-contracts/tree/feat/hashi-integration-amb
2. xDAI bridge contracts: https://github.com/crosschain-alliance/tokenbridge-contracts/tree/feat/hashi-integration-xdai-bridge
3. Test: https://github.com/crosschain-alliance/tokenbridge-contracts-migration-tests
4. Audits: https://crosschain-alliance.gitbook.io/hashi/v0.2/audit-report#gnosis-bridge-hashi-integration
5. Hashi: https://crosschain-alliance.gitbook.io/hashi/v0.2/introduction
