---
---

# Deposits

:::caution
Deposits occur on the Gnosis Chain. **If you have GNO on Ethereum mainnet, you will need to bridge it to GC**.

* [Use the OmniBridge](https://omni.gnosischain.com/bridge) to move GNO from Ethereum to GNO on GC.
* Add Gnosis Chain Network to your wallet with [https://chainlist.org/](https://chainlist.org) or [with these manual instructions](https://developers.gnosischain.com/for-users/wallets/metamask/metamask-setup).
:::

:::note
During the deposit, your GNO will be automatically wrapped into mGNO, the metatoken used for staking on the Gnosis Beacon Chain. **1 GNO = 32 mGNO required to run a validator**.  When [viewing your validator](#view-your-validator) you will see deposit info in mGNO.
:::

Once you have followed the steps to [Get Started](/node/get-started/) and your Beacon Chain node is running, you will make a deposit of **1 GNO for each validator**. You can make a bulk deposit for up to 128 validators at a time.

## Make sure you aren't being phished

You are responsible for the transaction. Fraudulent websites might try to lure you into sending funds to them, instead of the official deposit contract. Make sure that you are sending the transaction with the correct data.

1. Check that transaction makes a call to GNO token contract on Gnosis Chain: [0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb](https://blockscout.com/xdai/mainnet/address/0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb/transactions)

![](/img/node/safety-1.png)

2. Check that the transaction uses the `transferAndCall` method.

![](/img/node/safety-2.png)

3. Check that transaction data (HEX tab) includes Wrapper Proxy Contract address [0x647507A70Ff598F386CB96ae5046486389368C66](https://blockscout.com/xdai/mainnet/address/0x647507A70Ff598F386CB96ae5046486389368C66/transactions) in this form:
   `0x4000aea0000000000000000000000000647507a70ff598f386cb96ae5046486389368c66`
   ![](/img/node/safety-3.png)


## Deposit GNO

1) Go to [https://deposit.gnosischain.com/](https://deposit.gnosischain.com) and connect your web3 wallet on the Gnosis Chain to the application.

In this example we use MetaMask.

![](</img/node/UI-1A.png>)

![](</img/node/UI-2A.png>)

2) Select the Deposit tab. Upload your `deposit_data.json` file from [step 1 in the Get Started section.](/node/get-started/#step-1-generate-validator-account-s-and-deposit-data) It will be located in the same folder as the generated keystores.

![](/img/node/upload-info1.png)

3) The app will validate the json file and list the number of validator deposits you are making and the required GNO to deposit. Click **Deposit** to continue.

![](/img/node/deposit-2.png)

4) Check that you understand the risks and [ensure you are interacting with the correct contract](/node/operations/deposit-safety-instructions) before proceeding.

![](/img/node/deposit-3.png)

![](/img/node/deposit-4.png)

5) Complete the deposit.

![](/img/node/confirm.png)

![](/img/node/dep-made.png)

## View your Validator

:::note
Following a successful deposit, the Gnosis Beacon Chain will wait for 1024 Gnosis Chain blocks plus up to 64 Gnosis Beacon Chain epochs before adding validators to the pool. **This means it will take approximately 1.5 hours before the validators start proposing and attesting blocks on the Gnosis Chain.**

Once live, you can view your validator(s) on the explorer. Copy the pubkey(s)  listed in the deposit\_data.json file (a key will be generated for each validator as "pubkey": "&lt;your-public-key&gt;") and paste into the search box at [https://beacon.gnosischain.com/](https://beacon.gnosischain.com).


:::

## Previous UI for GNO to mGNO swap

If you need some extra mGNO (for example to top off a balance or for other reasons), you can use the previous swap UI to convert any amount GNO on the Gnosis Chain to mGNO.

-> [Instructions](/node/operations/convert-gno-to-mgno)

:::caution
Currently there is not a mechanism to swap mGNO back to GNO.
:::

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

3. Copy the `deposit_data.json` generated during [Step 2 of Get Started ](/node/get-started/#step-2-choose-your-beacon-chain-client--import-validator-keys)to the current directory.
4.  Run the deposit script (`/path/to/` should be a valid path to the .env file you have created):

    ```
    docker run --rm --env-file /path/to/.env \
      -v $(pwd)/deposit_data-xxxxxxxxxx.json:/tmp/deposit_data.json \
      ghcr.io/gnosischain/deposit-script:latest /tmp/deposit_data.json
    ```

:::note
Following a successful deposit, the Gnosis Beacon Chain will wait for 1024 Gnosis Chain blocks plus up to 64 Gnosis Beacon Chain epochs before adding validators to the pool. This means it will take approximately 1 hour and 25 minutes before the validators start proposing and attesting blocks on the Gnosis Chain.
:::

## Convert GNO to mGNo (special cases)

::: note
GNO is automatically wrapped by the deposit contract, you only need to do this to top off your balance or idk. The following instructions use the older swap UI
:::

:::danger
Note that currently there is not a mechanism to swap mGNO back to GNO.
:::

1\) Go to [https://deposit.gnosischain.com/](https://deposit.gnosischain.com) and connect your web3 wallet on the Gnosis Chain to the application.

In this example we use MetaMask.

![](/img/node/UI-1A.png)

![](/img/node/UI-2A.png)

2\) Select the Swap tab. Enter the amount you would like to convert and click **Convert**. You can convert any amount, be sure to **start with a leading 0 to convert less than 1 GNO. For example, 0.1 GNO will be converted to 3.2 mGNO.**

![](/img/node/swap-1.png)

3\) Sign 2 transactions in your wallet. The first is a free signature request to allow the application to make the conversion.

![](/img/node/pt2.png)

The second processes the transaction. This will require a small amount of xDai to complete.

![](/img/node/2tx.png)

4\) The transaction should be initiated and completed within a few seconds. Once completed you can click the link to see the tx in BlockScout and add mGNO to your MetaMask wallet. The mGNO contract address is 0x722fc4DAABFEaff81b97894fC623f91814a1BF68.

