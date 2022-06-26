# How Honey Badger BFT Consensus Works: Part 2

## Reaching Consensus

Blockchain networks allow transaction processing and recording across an entire network. Every node in the network contains a record of all transactions in the blockchain, creating transparency and eliminating the need to rely on a central authority.

In order for a distributed network to function, nodes spread across the network must reach an agreement, called consensus, about which transactions to include in the next block. Consensus creates consistency on the order of transactions, and prevents ‘double spending’, when individuals try to send one coin to two different parties at the same time.

On the surface, this seems like a relatively simple process.

1. A blockchain user proposes a set of transactions.
2. Nodes process and order these transactions.
3. The transactions are grouped into blocks.

Unfortunately, this type of naive blockchain is not secure, and quickly falls apart if any faulty or malicious behavior is introduced. It can also fail if transactions simply arrive at different times to different nodes. A mechanism is needed to create agreement when different transactions or messages are sent to different nodes. When this happens, nodes must decide:

* which transactions to include
* which transactions to discard
* the indisputable and unchangeable order of valid transactions

In building a consensus protocol, we must assume and plan for adversaries, network outages, and network attacks. Honey Badger BFT (HBBFT) was first described in the 2016 paper titled “[The Honey Badger of BFT Protocols](https://eprint.iacr.org/2016/199.pdf)” by Miller _et al._ we are building a production-ready version of HBBFT capable of withstanding attacks while creating a verifiably correct blockchain.

In this article we’ll explain how it works, but first we’ll describe several different types of consensus and why HBBFT offers an advantage over these protocols.

## Consensus Types

### **Nakamoto Consensus**

Nakamoto consensus is commonly referred to as Proof of Work. It is currently used with Bitcoin, Ethereum, and several other cryptocurrencies (although [Ethereum plans to change models in the future](https://arxiv.org/abs/1710.09437)).

To start, each node creates a block of valid transactions, and then tries to commit this block to the blockchain through the mining process. A node attempts to ‘mine’ their block by solving a cryptographic puzzle: they must find a value for a specific block header field, so that the header’s hash starts with a large number of zeros (this target is very small).

The only way to solve the hash is to continuously cycle through all potential values until a value less than or equal to the target value is found. The target difficulty is regularly adjusted to influence the time it takes to mine a block.

Each node competes in this process to decipher the hash of their block. The first one to reach the target sends the ‘solved’ block to every other node in the network. Once verified, all nodes accept this as the next block in the blockchain. [Nakamoto consensus uses the heaviest/longest chain selection rule to verify the chain is correct and achieve consensus](https://twitter.com/el33th4xor/status/1006931658338177024).

Nakamoto consensus is robust, secure, and trustless; it allows a large number of nodes, some of which can be faulty, to participate in the process. However, it is extremely power intensive and results in a huge amount of wasted energy as all nodes compete to solve their blocks.

In addition, it does not create block finality. With this process, it is possible for several nodes to solve the hash and submit their blocks at the same time. This can result in a temporary fork, where two chains briefly compete for verification as the correct chain (the heaviest/ longest chain is ultimately deemed the correct one and the shorter chain is invalidated). Transactions initially written to the shorter chain may be discarded.

To prevent double spending and ensure transactions exist on the correct chain, [Bitcoin exchanges typically wait until 6 additional blocks have been added](https://en.bitcoin.it/wiki/Confirmation) before a transaction is confirmed. This results in a 1+ hour confirmation time. **With Honey Badger BFT, block finality is immediate, and transactions can be confirmed within seconds.**

### **Non-mining Consensus**

By eliminating mining, these consensus methods (which include specified nodes running consensus protocols) address the scalability problems that can impact distributed networks. Non-mining consensus may utilize Proof of Stake (POS), Delegated Proof of Stake (dPOS), Proof of Authority (POA), or other means to designate network nodes responsible for validating transactions. Consensus mechanisms like practical Byzantine Fault Tolerance (pBFT), Honey Badger Byzantine Fault Tolerance (HBBFT), and others are used to ensure agreement is achieved among these nodes.

These protocols all differ, but each involves validator nodes that process and verify transactions to determine the next block in the chain. With POS, validators stake their tokens to vote on the next correct block. POA validators are trusted individuals who provide consensus through verified authority nodes. dPOS validators elect delegates to finalize blocks.

All of these processes are designed for fast transaction speeds, secure consensus, and limited power consumption. Each have their own challenges as well. Depending on the model, there are opportunities for unfair power differentials and collusion among validators.

pBFT provides a robust mechanism for consensus with a small group of known validators. pBFT proceeds in rounds. In every round, a “leader” node proposes a block, and the others validate and confirm it. If something goes wrong, they elect a new leader and try again. Once enough honest nodes have agreed on an order of transactions, they seal the block and it is committed to the blockchain.

An advantage of this process is instant block finality. Once a transaction is in a complete block, there is no additional waiting period to ensure a transaction will be included on the chain. This model also handles malicious behavior very well. pBFT consensus can be achieved when nearly 1/3 of the nodes are accidentally faulty or purposefully malevolent.

Honey Badger BFT also provides block finality and effectively handles malicious behavior. In addition, it offers several key advantages over pBFT, resulting in a consensus process that is efficient and resilient to attack. These improvements include:

1. **Asynchrony.**  This is perhaps the biggest differentiator between pBFT and HBBFT. With HBBFT, there are no timing assumptions. Messages can arrive at any time, and network speed determines the transaction rate. This improves efficiency in both fast and slow networks, as the block rate does not need to be configured based on scenarios or assumptions, it follows the true speed of the network.
2. **Leaderless consensus** . Unlike pBFT, the HBBFT consensus mechanism does not require a leader node to propose transactions. Every node is a proposer. This eliminates potential attacks where a leader node can be stalled indefinitely, bringing the entire network to a halt. For more information and a demonstration of this attack, see section 3.2 in the [The Honey Badger of BFT Protocols](https://eprint.iacr.org/2016/199.pdf) paper.
3. **Efficient, secure message distribution** . Based on algorithms developed by Miller  _et al._ , the Honey Badger library uses several techniques to effectively encrypt, split and send messages in small chunks. This saves bandwidth and creates an extremely efficient process.

## HBBFT Architecture

We are excited to implement the HBBFT protocol in [Rust](https://www.rust-lang.org/). Rust is a systems programming language that prevents many classes of programming errors without sacrificing efficiency, and provides opportunities for integration with blockchain clients like [Parity](http://parity.io/).

Note that the purpose of HBBFT is to return agreed upon batches of transactions. It does not complete final block processing (like updating account balances, executing smart contracts and signing blocks) and does not append blocks to the blockchain. This is the responsibility of the application HBBFT is using to communicate with the blockchain (such as Parity).

HBBFT is split into modules, and each module handles a distinct part of the consensus process.

Communication between modules is typically in a ‘black box’ format. This means that a module simply receives an input and provides an output. The module does not need to know how another module works, only what output to expect and input to deliver. This separation of concerns allows for easy optimization and maintenance of the library.

The following diagram illustrates the modules required to achieve consensus, and the basic informational flow as messages are distributed and verified in the protocol. There are additional modules contained within the hbbft protocol that we won’t explore here — this diagram shows a simplified version.

The entire diagram represents an instance of HBBFT running in a single node, and each layer is a container which holds the algorithms below it. For example, Queuing Honey Badger contains all of the algorithms, Honey Badger contains Subset, Reliable Broadcast, and Binary Agreement, and Subset contains instances of Reliable Broadcast and Binary Agreement.

![](../../../.gitbook/assets/hb1.png)

### Queueing Honey Badger (QHB)

QHB is the top level algorithm, responsible for taking in potential transactions and returning validated batches of transactions that are ready to be turned into blocks. Each validator node in the network runs an instance of QHB, and all other processes are contained and run within that instance of QHB.

![](../../../.gitbook/assets/QHB.png)

Within each node, QHB maintains a queue of pending transactions it receives from users. These transaction are routed to QHB from the program responsible for running the node, such as Parity. These transactions may be cryptocurrency transfer requests or other types of data processing initiated through user wallets or smart contracts.

QHB then prepares a random selection of these transactions and bundles them into a group of transactions called a **contribution** . A contribution is limited in size to make message transfer more efficient. For example, if there are 10 validator nodes in the network, the QHB contribution size will be 1/10 of the final block size. By taking a selection of random transactions, most nodes propose different transactions within their contributions, drastically reducing the amount of duplicate transactions.

After a contribution is prepared, it is sent down to the Honey Badger algorithm. This is an **epoch** ; each time a contribution is sent to Honey Badger equals one epoch. Once a contribution is sent, QHB waits to receive the output that comes back from HB.

The output it receives is a list of transactions coupled with the validators who proposed them. To prepare a finalized batch for the client, QHB creates a union of these lists. It also removes any transactions from its queue that are contained in the list.

The finalized batch is then sent to the application running the node (for example Parity) to be sealed as a block, and the process begins again with a new selection of transactions sent in a new epoch.

### Honey Badger (HB)

Honey Badger is a management layer, responsible for keeping track of epochs and encrypting and decrypting messages.

![](../../../.gitbook/assets/HB.png)

When HB receives a contribution from QHB, it encrypts this data using **threshold encryption** . Threshold encryption protects messages from censorship. _We will provide more details about threshold encryption in a later post, you can also visit our_ [ _threshold-crypto_ ](https://github.com/poanetwork/threshold\_crypto) _crate for more information._

After the contribution is encrypted, HB sends it on to the Subset algorithm.

Once Subset completes its processes, it returns to HB a list of accepted contributions by validators. This list contains at most 1 encrypted contribution from each validator. The list is guaranteed to include contributions from more than 2/3 of the nodes.

HB takes this list and decrypts its entries, again using the threshold encryption process. All participating nodes must collaborate to decrypt the message. HB then sends the decrypted batch up to QHB for final processing.

### Subset

Subset is the main functional component of the Honey Badger consensus process. This is where agreement takes place. Subset receives a contribution from each validator node and returns a subset of contributions agreed upon by all validators.

![](../../../.gitbook/assets/subset.png)

To start, Subset receives the encrypted contribution from HB. It needs to send this contribution to all of the other nodes in the network, as well as receive the other nodes’ contributions. To do this, it uses the Reliable Broadcast (RB) algorithm.

Subset creates an instance of Reliable Broadcast for every node in the network, including its own. It then submits the contribution to its own instance of RB and waits for output from all instances, including its own.

For example, in a 10 node network, there will be 10 instances of RB on each node. A node can only input into the instance associated with its own node, but will receive output from all 10 instances. More than 2/3 of these RB instances must return output in order to achieve consensus.

At the same time, Subset instantiates another algorithm for each node, called Binary Agreement. This is a mechanism to agree on whether or not to include a contribution, where either yes (Y) or no (N) are input. For each correct output received from a RB instance, a Y is input into the Binary Agreement instance associated with that node. This means the contribution from that node should be included in the Subset.

Again, the number BA instances that output Y must be greater than ⅔. To be more precise, you must receive _**N — f**_ Yes votes to reach consensus, where:

* _N_  = the number of all validators
* _f_  = the maximum possible number of faulty validators. f = (N-1)/3.

After N-f BA instances have output Y, we have agreed to include these contributions. We complete the agreement process, and Subset sends the agreed upon contributions back up to HB.

### Reliable Broadcast

The purpose of Reliable Broadcast is to distribute a single node’s contribution to the rest of the nodes in the network. A contribution is input into one node and output into every other node’s RB instance. Reliable Broadcast guarantees that every node gets the same output, even if the sender or other nodes try to cheat (for example, by sending different information to different nodes).

![](../../../.gitbook/assets/RB.png)

To send contributions efficiently across the network, RB uses several processes to split and encode messages. The first is called Reed-Solomon coding. This process allows a message to be split into a number of parts and then reconstructed using a smaller set of those parts. With a 10 node network, you can split a message into 10 parts and send 1 part to each node. Only 4 parts are needed to put the message back together. This saves bandwidth during message distribution.

In addition, a Merkle tree is used to verify the message contents between nodes. With a Merkle tree, small, coded “proofs” can be created as evidence that all 10 parts belong to the same message. Nodes can exchange these proofs quickly to verify that the same message was sent to all instances of RB across all nodes.

Because contributions are split, encoded, and then reconstructed, nodes must send many messages back and forth to confirm the contents and correctness of each contribution.

### Binary Agreement

Binary Agreement is at the core of the agreement process. This algorithm determines whether or not a contribution is included in the Subset, based on a composite of votes from all nodes in the network.

![](../../../.gitbook/assets/BA.png)

The agreement process is multi-faceted and requires a number rounds in order to reach a conclusion. This algorithm must account for the possibility of different votes sent from different nodes, a different order of receipt, and other factors that can change the outcome.

BA is completed once more than 2/3 of the participating nodes agree on whether to include the contribution in question in the batch. The algorithm requires a source of randomness in order to properly terminate. If between 1/3 and 2/3 of nodes vote Y, the algorithm selects a random number to determine a Y or N vote for a particular contribution. We use an additional algorithm, called Threshold Sign, to create this randomness.

### Putting it all together: The Honey Badger Transaction Flow

Now that we’ve provided an overview of the main algorithms in Honey Badger, let’s attempt to follow an imaginary transaction from a user’s wallet to finality on a blockchain. _Please note that Honey Badger is not yet live; this transaction flow is hypothetical. POA network currently uses Aura (Authority Round) consensus to validate transactions._

We’ll simplify the process into a series of concrete steps, referencing the modules above.

In the following scenario, imagine you want to transfer 200 POA tokens to your friend.

1. You login to your [Nifty Wallet](https://poanet.zendesk.com/hc/en-us/articles/360008957634-Nifty-Wallet) and use the interface to fill in the amount to send and your friend’s wallet address and click Submit.
2. A node on the blockchain receives this transaction request through an internet request. The node is running Parity in order to interface with the blockchain.
3. The node inputs this transaction into HBBFT, starting with Queueing Honey Badger (QHB). QHB places this transaction, along with others it has received, into a queue of pending transactions.
4. A new epoch begins. A random process determines which transactions to include in the next block. Your transaction is selected to be a part of the next contribution!
5. QHB prepares a list. There are 21 validators in the network, so the list size is 1/21 the size of a block.
6. The list of transactions is submitted to Honey Badger. HB encrypts the list using threshold cryptography, creating a garbled version that contains your transaction but can’t be read.
7. The contribution is submitted to the Subset Algorithm.
8. Subset puts it into a Reliable Broadcast instance labelled with the node id (for example Node 1). This distributes the contribution to every other node in the network.
9. Once every node has received the encrypted contribution, via RB, they know that all other correct nodes will also receive this contribution. They vote Y in the Binary Agreement instance labelled ‘Node 1’.
10. Every node then returns Y for the Binary Agreement instance labelled Node 1, meaning they all agree that this contribution should be included as a part of the next block.
11. Agreement has been reached! The contribution flows back up the stack.
12. Subset returns to HB 21 contributions by 21 nodes, all are encrypted (note, this could be fewer contributions, as long as it is greater than ⅔).
13. Back in HB, the whole network collaborates to decrypt the contribution. Every node gets 21 lists of transactions which are decrypted. These lists include the original transaction.
14. QHB then makes a union of the contributions and creates a single finalized list of transactions that all nodes have agreed on.
15. This final list is sent out of QHB and back to the application client (Parity).
16. Parity executes the transaction and declares it as a part of the next block. 200 POA are officially transferred to your friend’s wallet, and the results can be viewed in [BlockScout](https://blockscout.com/).

As you can see, there are quite a few steps, and a whole lot of messages that must travel back and forth through the various algorithms in order to confirm a single transaction. Amazingly, all this can happen extremely quickly! We do not have any official benchmarks yet, but we are excited to share them once we get closer to launch.

{% hint style="success" %}
This article was moved from the forum at: [https://forum.poa.network/t/how-honey-badger-bft-consensus-works-part-2/2051](https://forum.poa.network/t/how-honey-badger-bft-consensus-works-part-2/2051)
{% endhint %}
