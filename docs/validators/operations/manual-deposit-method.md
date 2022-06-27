---
---

# Manual Deposit Method

:::note
A UI is available for deposits at [https://deposit.gnosischain.com/](https://deposit.gnosischain.com).  If preferred, you can use the method below to interact with contracts via BlockScout and use the deposit script to complete.
:::

### Deposit GNO

A modification to the Gnosis Chain deposit contract allows you to deposit in batches (this functionality is not available for the ETH2 deposit contract). One transaction can be used to initiate deposits for up to 128 validators. The assumption is that every validator deposits 1 GNO(which is converted to 32mGNO) in every entry of the batch. The following script simplifies the process.

1.  Pull the docker image with the deposit script:

    ```
    docker pull ghcr.io/gnosischain/deposit-script:latest
    ```
2.  Prepare `.env` file with the following lines:

    ```
    STAKING_ACCOUNT_PRIVATE_KEY=0000000000000000000000000000000000000000000000000000000000000000

    RPC_URL=https://rpc.gnosischain.com
    GAS_PRICE=2000000000

    # number of deposits in one transaction, should be in range [1, 128]
    BATCH_SIZE=128
    # total number of deposits to read from file
    N=256
    # index of the first deposit to read from file
    OFFSET=0

    # address of the GNO token
    TOKEN_ADDRESS=0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb
    # address of the GBC wrapper contract
    WRAPPER_ADDRESS=0x647507A70Ff598F386CB96ae5046486389368C66
    # address of the GBC deposit contract
    DEPOSIT_CONTRACT_ADDRESS=0x0B98057eA310F4d31F2a452B414647007d1645d9
    # block where the deposit contract was deployed at
    START_BLOCK_NUMBER=19469077
    ```

    `STAKING_ACCOUNT_PRIVATE_KEY` is the private key of the account which holds the necessary amount of GNO tokens for deposit. Any account may be used for funding, but it must also have a small amount of xDai to process transactions. In the above example, 2 transactions will occur with 256 total deposits of 1 GNO each.

3. Copy the `deposit_data.json` generated during [Step 2 of Get Started ](/validators/get-started/#step-2-choose-your-beacon-chain-client--import-validator-keys)to the current directory.
4.  Run the deposit script (`/path/to/` should be a valid path to the .env file you have created):

    ```
    docker run --rm --env-file /path/to/.env \
      -v $(pwd)/deposit_data-xxxxxxxxxx.json:/tmp/deposit_data.json \
      ghcr.io/gnosischain/deposit-script:latest /tmp/deposit_data.json
    ```

:::note
Following a successful deposit, the Gnosis Beacon Chain will wait for 1024 Gnosis Chain blocks plus up to 64 Gnosis Beacon Chain epochs before adding validators to the pool. This means it will take approximately 1 hour and 25 minutes before the validators start proposing and attesting blocks on the Gnosis Chain.
:::

##
