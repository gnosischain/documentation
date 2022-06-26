---
description: R&D consensus model
---

# HoneyBadger BFT Consensus

{% hint style="info" %}
While the team has extensively researched a working implementation of [HoneyBadger BFT ](https://eprint.iacr.org/2016/199)consensus, this will likely not proceed as consensus will instead be provided by the [Gnosis Beacon Chain](https://docs.gnosischain.com/). Artifacts on the research are below.
{% endhint %}

{% hint style="success" %}
_Our Honey Badger BFT and Threshold Cryptography implementations have both undergone extensive security audits to ensure safety and cryptographic integrity. The results are available here_

* [_HBBFT Security Audit_](https://github.com/poanetwork/wiki/blob/3a155878cd2c58e6a870a2c127ef302037e1b15f/assets/pdf/hbbft-audit-report.pdf)
* [_Threshold\_Cryto Security Audit_ ](https://github.com/poanetwork/wiki/wiki/Threshold-Crypto-Audit)
{% endhint %}

{% hint style="info" %}
For more information on this implementation please see the [HoneyBadgerBFT Github repo](https://github.com/poanetwork/hbbft).
{% endhint %}

The Honey Badger consensus algorithm allows nodes in a distributed, potentially asynchronous environment to achieve agreement on transactions. The agreement process does not require a leader node, tolerates corrupted nodes, and makes progress in adverse network conditions.

Honey Badger is **Byzantine Fault Tolerant**. The protocol can reach consensus with a number of failed nodes f (including complete takeover by an attacker), as long as the total number N of nodes is greater than 3 \* f.

Honey Badger is **asynchronous**. It does not make timing assumptions about message delivery. An adversary can control network scheduling and delay messages without impacting consensus.

The following articles explain much more about HBBFT and how it works.

* [HBBFT Introduction](building-honey-badger-bft-part-1.md)
* [How HBBFT Works](how-honey-badger-bft-consensus-works-part-2.md)
* [Threshold Cryptography & HBBFT](honey-badger-bft-and-threshold-cryptography-part-3.md)

