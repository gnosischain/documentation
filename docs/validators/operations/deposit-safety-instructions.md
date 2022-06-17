---
---

# Deposit Safety Instructions

#### Make sure you aren't being phished

You are responsible for the transaction. Fraudulent websites might try to lure you into sending funds to them, instead of the official deposit contract. Make sure that you are sending the transaction with the correct data.

1. Check that transaction makes a call to GNO token contract on Gnosis Chain: [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://blockscout.com/xdai/mainnet/address/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb/transactions)

![](/img/validators/safety-1.png)

2. Check that the transaction uses the `transferAndCall` method.

![](/img/validators/safety-2.png)

3. Check that transaction data (HEX tab) includes Wrapper Proxy Contract address [0x647507A70Ff598F386CB96ae5046486389368C66](https://blockscout.com/xdai/mainnet/address/0x647507A70Ff598F386CB96ae5046486389368C66/transactions) in this form:
   `0x4000aea0000000000000000000000000647507a70ff598f386cb96ae5046486389368c66`
   ![](/img/validators/safety-3.png)

