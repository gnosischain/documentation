---
title: Roadmap
description: Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users. 
keywords: [bridge roadmap, trustless bridge, light client, zksnark]
---

Gnosis is investing significant resources into trust-minimization of its Bridges, to ensure trust and safety of users. 

### "Proof-of-Deposit" Validity Proofs

One emergent idea is to require Bridge Validators to provide a "proof-of-deposit" to the receiving bridge contract, as a proof that funds were indeed deposited in the origin chain. This can be done through a variety of cryptographic signature schemes. 

Gnosis has provided a $600k grant to [0xParc](https://0xparc.org/) to fund R&D into a zkSNARK-enabled light client, a necessary part of a trust-minimized bridge (see [GIP-57 proposal](https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421)). 

There is an additional effort by the original xDai team into [BLS-signature based trustless bridge](https://forum.gnosis.io/t/gip-57-should-gnosis-dao-support-research-of-a-zksnark-enabled-light-client-and-bridge/5421/15?u=dan-gnosis), as an alternative to a SNARKs.