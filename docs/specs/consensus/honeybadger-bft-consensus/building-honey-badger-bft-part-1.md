---
description: >-
  Building a resilient blockchain consensus algorithm, known as Honey Badger
  Byzantine Fault Tolerance — or HBBFT for short
---

# Building Honey Badger BFT: Part 1

### **Building Honey Badger BFT**

If you have been following blockchain (or [Internet Memes](https://knowyourmeme.com/memes/honey-badger) ) for a while you have probably heard of the ‘Honey Badger.’ Bitcoin is often referred to as the ‘[Honey Badger of Money](https://www.wired.com/2013/12/bitcoin-honey/),’ a reference to the resilience and fearlessness of an animal that eats cobras for breakfast.

In honour of this symbol of resilience, a new protocol is emerging for use in blockchain consensus called the ‘Honey Badger Byzantine Fault Tolerant (HBBFT) Protocol.’ The protocol and associated algorithms are described by Miller _et al._ in their 2016 paper titled “[The Honey Badger of BFT Protocols](https://eprint.iacr.org/2016/199.pdf).” The R\&D team is currently developing and modifying this consensus protocol for blockchain network use.

### Consensus Protocols

Consensus refers to the agreement process between nodes in a network. The nodes must agree on which transactions to include in the next block on the chain before these transactions are committed. Byzantine Fault Tolerant (BFT) networks can withstand a number of faults and message failures (approximately ⅓ of the nodes can be malicious or faulty) and still reach consensus. Malicious nodes are called Byzantine nodes, named after the [Byzantine Generals’ Problem](https://en.wikipedia.org/wiki/Byzantine\_fault\_tolerance#Byzantine\_Generals%27\_Problem). More on this in a moment.

Currently, Bitcoin and Ethereum are [considered BFT](https://twitter.com/el33th4xor/status/1040342202302509057?s=19), although Honey Badger BFT will not serve as a replacement for these consensus algorithms. In theory, these networks are permissionless (anyone can join and participate in consensus) and use a large number of validating nodes.

HBBFT is more appropriate for networks with a small number of known (permissioned) validator nodes — in the 20–30 range. This includes Proof of Authority blockchains (like [POA Network](https://poa.network/)), private blockchains, and chains that use Practical BFT (PBFT) like [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric), [Stellar](https://www.stellar.org/) and [Ripple](https://ripple.com/). PBFT is a popular, well established consensus method; it was [first proposed in 1999](http://pmg.csail.mit.edu/papers/osdi99.pdf).

HBBFT provides a new, asynchronous method of BFT consensus. This means it does not rely on timing assumptions or impose timeouts in order to receive and process messages. This is an important advancement, as future networks will require robust consensus mechanisms that can perform in a variety of different conditions and withstand sophisticated attacks.

### The Byzantine Generals’ Problem

The Byzantine Generals’ Problem describes a dilemma related to consensus. In this classic problem, a group of generals must come to an agreement about attacking or retreating from an enemy stronghold. However, they are located at different points around the perimeter of the city and have no way to communicate other than sending messengers back and forth. To complicate matters, there may be malicious (Byzantine) generals who will purposefully send incorrect information.

If they all attack, they will win. If they all retreat, they will live to fight another day. However, if some attack and some retreat, the attacking armies will suffer catastrophic losses. In this case, reaching a reliable consensus is a life or death situation.

Without digging too much into the details, it is known that an agreement to attack or retreat can be reached as long as **fewer than ⅓ of the generals are Byzantine** . They reach agreement by passing signed messages back and forth. Signatures cannot be forged, and any general can verify any other general’s signature.

The same principles hold true for blockchain BFT consensus. Less than ⅓ of the nodes (generals) in a blockchain can be malicious, signed messages are sent back and forth in multiple rounds, and signatures must be cryptographically secure and verifiable.

### BFT in the modern age

In a distributed networking environment (e.g. a blockchain), some form of BFT is vital to maintaining functionality, security and reliability. However, there are issues with current implementations.

1. Many BFT networks rely on timing assumptions in order to complete messaging rounds. Timeout parameters are selected and ‘tuned’ or changed if there are difficulties with message delivery. This can result in non-optimized networks, slow recovery time, and vulnerabilities to attacks involving message scheduling.
2. Some BFT protocols (such as Nakamoto consensus — commonly called proof-of-work) do not produce block finality. In other words, blocks may be mined at the same time by several miners, resulting in a temporary dual-chain state. This can result in long waits before a transaction is verified, and transactions can be removed all together if they only exist on the short chain.
3. Proof-of-work blockchains are notorious for their vast use of computational power and unsustainable energy consumption. For insight into this issue, see [Bitcoin’s Growing Energy Problem](https://www.cell.com/joule/pdf/S2542-4351\(18\)30177-6.pdf) and [Decarbonizing Bitcoin](https://www.sciencedirect.com/science/article/pii/S2214629618301750).
4. BFT protocols can create slow throughput rates and inefficient data transfer.

Honey Badger BFT addresses these issues, and our’s implementation will provide an efficient consensus protocol that maintains both liveness (the network continues to make progress) and safety (all honest nodes eventually reach consensus) through a range of network conditions.

### Why we need Honey Badger BFT

#### **Evolving Network Types**

As noted above, PBFT has been around since 1999. A lot has changed since then! Future blockchain networks may be comprised of mobile phones, IOT devices, and many other types of nodes. These networks run at varying speeds, and timing parameters are difficult to set correctly. Networks like [TOR](https://www.torproject.org/) also provide additional security but introduce significant variance in data transport speeds.

**HBBFT solves the timing problem, as there are no timing parameters!** Honey badger doesn’t care! It is an asynchronous protocol where transactions can arrive at different times to different nodes. The only assumption we make about message delivery is that messages will eventually be delivered. The block rate matches the network speed.

#### **Advanced Adversaries**

Blockchains are an enticing target for attackers. They hold billions of dollars in cryptocurrency, and ledgers can store contractual agreements, proof of ownership, legal records, and other sensitive information. As blockchain technology matures, so do the breadth and depth of attacks. DDOS attacks, where a node is flooded with incoming messages it cannot process, are more effective on networks that rely on timeouts to proceed. Attacks designed to hit message scheduling can freeze a network completely.

HBBFT offers several features to guard against attacks:

* Asynchrony allows for message delivery even if a network is under duress. Some messages can be delivered and others can be delayed, but progress will still be made.
* Agreement occurs on a batch of encrypted transactions; the transaction contents are only revealed after consensus has been reached. This prevents censorship attacks where information is selectively held back by a malicious node. If a node doesn’t know what is in a message, it can’t suppress specific information.
* Malicious nodes can be identified and are reported through a fault log. Networks can then decide the best methods to remove them.

#### **Improved Efficiency**

Most people who use the blockchain are interested in faster transaction times. Cryptography and other security measures are resource intensive, and security is always the first priority. However, small changes to how transactions are delivered can result in faster speeds and more scalable networks.

Node communication is optimized in HBBFT. Every block is assembled from several nodes’ proposed transactions, so each node only sends a percentage of the total transactions that make up a block. These proposals are further segmented by something called Reliable Broadcast, where nodes split and distribute their proposal segments to other nodes in the network. This creates smaller, consistent data packets and faster block production rates.

**In addition, the HBBFT protocol provides instant block finality** . A block is only produced after the transactions have been finalized by the validating nodes in the network. If a block is signed by the validators, it is finalized, even if it is the latest block. This prevents transitory forking and creates an immutable, immediate ledger of transactions.

#### **Additional consensus options**

Different networks may want to choose from a number of consensus protocols depending on the applications they are running. The ability to choose between a number of protocols is important, especially for private chains designed for different purposes.

### So, how does it work?

Stay tuned! In our next post we will explore the inner workings of HBBFT and provide a high level overview of how the individual algorithms work together to create a robust consensus protocol. This will highlight some of the advanced methods and cryptography required to secure the next generation of blockchains.

In the meantime, please checkout our [GitHub page](https://github.com/poanetwork/hbbft) to view the open source code.

{% hint style="success" %}
This article was moved from the POA forum at: [https://forum.poa.network/t/building-honey-badger-bft-part-1/2050](https://forum.poa.network/t/building-honey-badger-bft-part-1/2050)
{% endhint %}
