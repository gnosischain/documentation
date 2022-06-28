---
description: >-
  A cross-blockchain application can be developed with API provided by the
  Arbitrary Message Bridge
---

# Development of a cross-chain application

Arbitrary Message Bridge provides a set of APIs that allows applications to perform two types of actions:

* sending a message from one chain to another
* receiving information on the Home chain from the Foreign chain in asynchronous manner

If an application decides to send a message via the bridge it will produce a transaction on another side of the bridge. So, as part of this transaction another contract can be called.

At the same time the information requests do not generate transaction on another side of the bridge. A read-only JSON RPC call is being sent instead, so the contract on the Home side can receive almost any data stored in the blockchain which is considered as the Foreign side with zero cost.
