---
---

# Validator Withdrawals

Withdrawals are not available until after the merge, when the Gnosis Beacon Chain consensus layer merges with the Gnosis Chain execution layer. Until that time, any mGNO deposits made will remain in the beacon chain.

If you decide you want to stop validating prior to the merge, you can perform a [voluntary exit](/node/operations/voluntary-exit), which will freeze your balance at the current value.

We will post more on the withdrawal instructions as the merge approaches. You can find more info in the[ FAQs](/specs/gbc/faq).

### Post Merge Withdrawal Steps

While the exact list of withdrawal steps is still unknown, it will likely include the following:

1. Exit your validator from the beacon chain.
2. Wait for a reasonable delay (few hours) due to protocol-level delays and finalizations.
3. Send a withdrawal request (ie a signed message in the beacon chain or an execution layer transaction with the exit proof).
4. Pull your validator balance from the execution layer by submitting a transaction to the system contract.
