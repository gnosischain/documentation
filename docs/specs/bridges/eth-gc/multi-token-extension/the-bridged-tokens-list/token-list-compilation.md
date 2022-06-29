# Token list compilation

The Token list is queried [dynamically with BlockScout](https://blockscout.com/xdai/mainnet/bridged-tokens). The list is compiled accordingly:

1. Find all transactions to the AMB Contract on xDai `0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59`
2. Check all internal transactions for each transaction.
3. If an internal transaction creates a contract from the AMB mediator address (`0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d`), and this contract exposes the`getTokenInterfacesVersion()` getter, it is safe to assume that this contract’s address is a bridged token address.
