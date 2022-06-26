# Honey Badger BFT and Threshold Cryptography: Part 3

HBBFT uses **threshold cryptography** to encrypt and decrypt sets of transactions. A threshold value `t` is set so that any group of `t+1` nodes in the network can collaborate to decrypt messages and construct digital signatures. The threshold must be met, but it can be met by any combination of active nodes.

This system prevents individual nodes from exerting undue influence or tampering with transaction contents during the consensus process. It also provides safety and resilience by distributing signature and secret key shares throughout the decentralized system.

To better understand threshold cryptography, and how POA Network uses it with Honey Badger BFT, let’s start with a brief overview of public key cryptography.

## Public Key Cryptography

Alice needs to send Bob a private message. Rather than use a shared password or a confidential channel, they use public key cryptography to disguise and reveal a message and verify the sender.

Public key cryptography is a mathematical mechanism that provides three guarantees to Alice and Bob:

1. **Confidentiality**  — Alice and Bob are confident that no other party will be able to read the message once encrypted.
2. **Authenticity**  — Bob is confident that the message he received came from Alice.
3. **Integrity**  — Bob is confident that the encrypted message was not tampered with during its transmission from Alice.

Before Alice can safely send her message to Bob, both parties must generate a public and private (secret) key pair; each secret key is a large random number, and the public key is another random-looking number computed from it. In public key cryptography, public keys can be published openly without reservation, private keys on the other hand must be held secret by the party that generated the public-private key pair.

Public keys are used to encrypt a plaintext message. Encryption is the process by which a message is made unreadable to all parties except those that possess the corresponding secret key. Decryption is the process by which the secret key holder transforms the encrypted message back into plaintext. Public keys encrypt a plaintext message, secret keys decrypt an encrypted message.

Alice and Bob exchange public keys, and from this point forward they are able to communicate securely.

### **Where Alice Sends an Encrypted Message to Bob**

Alice creates her message and calls the `Encrypt` function. This function retrieves Bob’s public key, takes her message, and combines the two into an encrypted message called a ciphertext. She can then send this ciphertext to Bob, and only Bob’s secret key can be used to decipher the contents.

When Bob receives the ciphertext, he inputs his secret key and the ciphertext into the `Decrypt` function, and the plain text message is revealed.

### **Where Alice Signs her Message**

Bob has received the message, but can’t be sure who sent it. Alice needs to add her signature to the message.

Alice calls the `Sign` function, which retrieves her secret key and combines it with the message. This function outputs Alice’s digital signature.

When Bob receives Alice’s digital signature, he inputs the decrypted plain text message, the signature, and Alice’s public key into the `Verify` function. This function outputs True or False, providing confirmation as to whether the message and signature match. If the output is True, Bob can be certain that Alice sent the message, and that the message contents were not changed in transit.

![](https://cdn-images-1.medium.com/max/800/1\*dE6bMvE8WzYBNDQo2VYyUw.gif)

## Threshold Cryptography

In traditional public key cryptosystems, the power to sign messages and decrypt ciphertexts is centralized to the secret key holder. But, what if we want to decentralize these cryptographic operations? Threshold cryptography allows us to split a single secret key into multiple secret key “shares” so that any signing or decrypting traditionally done with the single secret key must now be done with distributed secret key shares. The number of required shares is determined by a set threshold value `t`; any group size that exceeds this threshold `t+1` may collaborate.

For example, an organization of three people can split the “master” secret key into three secret key shares such that any signing and decryption requires the collaboration of two or more of the shareholders. In this example, the threshold `t` is set to 1, requiring `2 = t + 1` shareholders to collaborate in any cryptographic operations such as signing and decryption.

### **Where Alice sends the same encrypted message to Bob, Carol and Dave**

Alice sends a message again, but this time she sends it to Bob, Carol, and Dave. She can use the `Encrypt` function as above, and send the ciphertext to each of them.

When Bob, Carol and Dave receive the ciphertext, they cannot read it without collaboration. 2 of the 3 need to collaborate to decrypt the message.

Bob and Carol want to read the message, so they each put the message and their secret key share into the `DecryptShare` function. This function doesn’t output the message, however, instead it outputs a _decryption share_ .

Bob and Carol then exchange decryption shares, and each inputs both of the decryption shares, along with the ciphertext, into the `ThresholdDecrypt` function. This function then outputs the plain text message.

An advantage of this process is that Bob and Carol never need to exchange secret key shares. This is important, as the secret key can be reused for future ciphertext exchanges, and the master secret key is never revealed.

Also, Dave did not participate in this round, but he could read the message if Bob and Carol sent their decryption shares to him. In HoneyBadger, decryption shares are circulated throughout the network once at least ⅓ of the validators have collaborated to decrypt a message.

![](https://cdn-images-1.medium.com/max/800/1\*nUGh1XiGb33ak6CimNwW-Q.gif)

### **Where Carol and Dave sign a message for Alice**

Carol and Dave have agreed on a message and want to create a digital signature and send that to Alice. They each call the `SignatureShare` method, which takes their secret key share and their message and outputs a _signature share_ .

Carol and Dave can then either exchange signature shares and produce a full signature using a `CombineSignature` method, or send their signature shares to Alice, and Alice can produce a full signature using the same method. `CombineSignature` creates a valid single digital signature that matches the public master key.

Alice can then take this digital signature and apply the `Verify` method to the signature, the decrypted message, and the public master key. If the result is true, Alice knows that the threshold number of participants have signed the message.

A unique property of the BLS signature scheme used in our [Threshold\_Crypto implementation](https://github.com/poanetwork/threshold\_crypto) is that the collaborative digital signature is always identical, regardless of who signs it. Bob and Carol, or Bob and Dave, or Carol and Dave could collaborate, in any order, and the result is always the same. This is an important feature for Honey Badger BFT, and one reason we created our implementation.

![](https://cdn-images-1.medium.com/max/800/1\*GgpPoHMSSDtIETAndVmUaQ.gif)

## Honey Badger BFT and Threshold Cryptography

_For more information on the individual Honey Badger algorithms see_  [_How Honey Badger Works_ ](how-honey-badger-bft-consensus-works-part-2.md)

Honey Badger uses threshold encryption and threshold signing to secure messages within the protocol. Each node within the Honey Badger network proposes a set of transactions to be included in each new block; this set of proposed transactions is called a _contribution_ . Each contribution is encrypted using the network’s master public key through an `Encrypt` function. The network of Honey Badger nodes agree on which transactions to include in the next block using the `Subset` algorithm.

During the agreement process, all contributions remain encrypted. This maintains transaction integrity and eliminates censorship opportunities — where nodes can suppress messages based on their content.

Once consensus has been reached, the encrypted list of accepted contributions is returned and threshold decryption is initiated. Decryption shares are distributed amongst the Honey Badger nodes. Once a node has received the threshold number of decryption shares, the batch of transactions is decrypted and is made available to the application layer.

Threshold signatures are also used in Honey Badger’s `BinaryAgreement` algorithm. These signatures are used to create a random number for a “coin flip” if the ⅔ agreement threshold has not been met.

Each node signs a message, and the signature shares are used to compute a single digital signature. The message is predetermined — it cannot be known until after the shares are combined, preventing any manipulation. The result is either a Y or N (1 or 0, taken from the last bit in the collective signature) to include or reject a contribution. Any combination of nodes can sign, resulting in the same signature.

### Distributed Key Generation

In many threshold cryptography implementations, secret key shares are distributed by a ‘trusted dealer’. This is an entity that computes the key shares and sends them out to the group. With Honey Badger, we don’t trust any single participant with this information, so keys are generated collectively by the active nodes in the network.

While most of Honey Badger is an asynchronous (not time-based) protocol, our key generation implementation requires all nodes to handle messages in the same order. However, in a preexisting live network, this can be done “on-chain”, by committing these messages to a common ledger and using Honey Badger itself to agree on the message order. This allows us to generate key shares without relying on synchrony assumptions about the underlying network, and it can be used to dynamically change a live network’s set of validators.

Whenever a node is added or removed, all nodes perform a new round of key generation and produce a new public master key and new secret key shares for everyone (including the existing nodes that stay in the network), before they can actually take over the Honey Badger algorithm in their new configuration.

### BLS Signatures

Threshold cryptography requires complex math involving elliptic-curve pairings. We won’t go into much detail here, but we use [Boneh-Lynn-Shacham](https://www.iacr.org/archive/asiacrypt2001/22480516.pdf) (BLS) signatures to ensure cryptographic security. The BLS signature scheme allots us with far shorter signatures than other common schemes such as ECDSA and Schnorr.

As BLS signatures are just points on an elliptic curve, they can be added and multiplied together, much like regular numbers. We can use polynomial evaluation and equivalent operations to create signature shares from secret key shares. Each share is essentially a point on the graph of a polynomial.

To illustrate, a polynomial of degree 1 is linear, represented by a straight line. If we know two points on the line, we can calculate any other point on the line. This represents a threshold of 1, where any 2 participants (t+1) can trade shares and perform a simple operation to solve the function P(x) = ax + b (where a and b are real numbers and a does not equal 0)

A polynomial of degree 2 is quadratic and represented by a parabola, which is defined by 3 points. If any 3 points are known, all other points are also known. P(x) = ax2 + bx + c (where a,b and c are constants and a does not equal 0)

![](https://cdn-images-1.medium.com/max/800/0\*OaKq1ld1PBaOBGI3)

If we have a quadratic polynomial of _secret key shares_ , any 3 shares can be combined to determine the root of the equation and decipher the master secret key, which is the polynomial’s value at 0.There may be 7 distributed shares, but **any 3** can be combined to compute the master secret key.

However, we don’t want to divulge the master secret key, and BLS signatures solve this issue! Operations can be performed on different cryptographic primitives (such as secret keys, public keys, and signatures) such that they can maintain a one-for-one correspondence with one another. If we sign a message using our secret key shares, the resulting signature shares lie on a polynomial of the same degree. In this way, secret key shares = signature shares.

Since they are equivalent, we can use the signature shares to create a single signature, without ever exposing the secret key shares or using the master secret key. This allows nodes to keep the same secret key shares for repeated message signing, providing a cryptographically secure means for signature exchange.

BLS is pure magic, as [Alexander Block writes in this article](https://blog.dash.org/secret-sharing-and-threshold-signatures-with-bls-954d1587b5f). We also recommend the article [BLS signatures: better than Schnorr](https://medium.com/cryptoadvance/bls-signatures-better-than-schnorr-5a7fe30ea716) if you’d like to understand more about how BLS signatures work and the unique properties that make them so valuable to threshold cryptography.

## Robust Consensus

Threshold cryptography allows us to create digital signatures and encrypt and decrypt messages even in the presence of malicious nodes. Since we only require a ⅓ threshold, we can tolerate misbehaviour and faultiness and still achieve consensus among the active participants. This is vital to a trustless consensus process, and allows a robust protocol like Honey Badger BFT to thrive in many different types of distributed environments. See our [Threshold\_Crytpo repository](https://github.com/poanetwork/threshold\_crypto) on github to learn more about the code and how to implement threshold cryptography with your project.

{% hint style="success" %}
This article was moved from the forum at: [https://forum.poa.network/t/honey-badger-bft-and-threshold-cryptography-part-3/2052](https://forum.poa.network/t/honey-badger-bft-and-threshold-cryptography-part-3/2052)
{% endhint %}
