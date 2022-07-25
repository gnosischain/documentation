---
description: >-
  Describes set of actions to migrate an existing setup of the TokenBridge
  oracle to a new server
---

# Oracle migration to a new server

## Step 1: Create a new server

1.  Create a new server instance with your hosting provider (e.g. AWS, Digital Ocean, etc), you can use same specs as the current one (or at least 2 Core CPU, 4 GB RAM, Ubuntu 16.04 LTS, 32 GB Disk).

    _Important_: don’t stop or terminate your current server yet! We might need it to roll back if any errors occur. If you’re currently running both xDai bridge validator and Gnosis Chain validator on the same server, let us know and we’ll provide you with instructions on how to move network validator to your new server after bridge migration is completed successfully
2.  When you created new server, please note down its’ IP address and try to connect to it via ssh from your local computer to make sure that the server is accessible to you. When connected to the server, check that your user has sudo-privileges by running

    ```
    sudo hostname
    ```

    It should complete without errors and not asking for password. Please copy your server’s hostname so that we can identify it later.

    Also note what is your username on the new server

    ```
    whoami
    ```

    (most likely it’s `ubuntu` or `root`).

    When these checks are done, logout from your new server to return to your local computer

    ```
    exit
    ```

## Step 2: TokenBridge repo preparation

1. Installation procedure of new oracle involves running an ansible playbook from your local computer. Ansible will connect to new server, install required dependencies, code of the oracle and start bridge service. To use ansible, you first need to install required dependencies and ansible itself on your local computer. They can be found [here](https://github.com/poanetwork/tokenbridge/blob/master/deployment/EXECUTION.md#dependencies).
2.  After all the prerequisites are installed, download code of the new oracle to your local computer:

    ```
    git clone --recursive https://github.com/poanetwork/tokenbridge
    cd tokenbridge/deployment
    ```

## Step 3: Getting the last processed block numbers

1. Connect to your **current** bridge validator node.
2.  Stop the bridge docker containers:

    ```
    sudo docker ps -q -f "name=oracle_bridge" | xargs sudo docker stop
    ```
3.  Connect to the redis container:

    ```
    sudo docker exec -it oracle_redis_1 /bin/bash
    ```

    A new shell should appear, which is a shell running inside redis docker container. Shell prompt should look similar to this now:

    ```
    root@redis:/data#
    ```
4.  Connect to redis database via cli

    ```
    redis-cli
    ```

    shell prompt should change one more time to something like this:

    ```
    127.0.0.1:6379>
    ```
5.  Get the list of all entries in the database:

    ```
    keys *
    ```

    You should get output similar to this one (order may differ):

    ```
    1) "erc-native-signature-request:lastProcessedBlock"
    2) "foreign:nonce"
    3) "erc-native-collected-signatures:lastProcessedBlock"
    4) "erc-native-affirmation-request:lastProcessedBlock"
    5) "erc-native-half-duplex-transfer:lastProcessedBlock"
    6) "home:nonce"
    7) "erc-native-transfer:lastProcessedBlock"
    ```
6.  Run the following commands one-by-one to get current values of all `*-request:lastProcessedBlock` entries and copy the output somewhere, because we’ll need it later

    ```
    get "erc-native-signature-request:lastProcessedBlock"
    get "erc-native-affirmation-request:lastProcessedBlock"
    ```
7. Run exit twice to get out of both the redis cli shell and redis container shell. You should now be back to the bash prompt on your current server.
8.  Stop current bridge service

    ```
    sudo service poabridge stop
    ```

## Step 4: New oracle deployment

You should still be in the `.../tokenbridge/deployment` folder of your local computer.

1. Create and open `hosts.yml` configuration file in your favourite text editor.
2.  Paste the following into this file

    ```yaml
    ---
    dai:
     children:
       oracle:
         hosts:
           1.1.1.1:
             ansible_user: ubuntu
             ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: "..."
             syslog_server_port: "udp://logs5.papertrailapp.com:33240"
             ORACLE_HOME_START_BLOCK: 6123456
             ORACLE_FOREIGN_START_BLOCK: 8123456
    ```

    Please check that whitespaces were pasted correctly! Padding is important in this configuration file.
3.  Set values of the following configuration options:



    * `1.1.1.1`: replace it with real IP address of your new server
    * `ansible_user`: change this to your username from the step 1 if it differs from `ubuntu`
    * `ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY`: your private key (this value must be 64 characters long)
    * `ORACLE_HOME_START_BLOCK`: use the value you get from the `erc-native-signature-request:lastProcessedBlock` redis key
    * `ORACLE_FOREIGN_START_BLOCK`: use value from `erc-native-affirmation-request:lastProcessedBlock`
4. Modify `group_vars/dai.yml` to reflect your own URL for `COMMON_FOREIGN_RPC_URL`. Also it makes sense to have a reasonable value for `ORACLE_FOREIGN_RPC_POLLING_INTERVAL` which should be slightly greater or equal of the average block mining time (_e.g. for the Ethereum Mainnet it could be `15`_).
5.  Launch the playbook

    ```
    ansible-playbook -i hosts.yml site.yml
    ```

    Playbook should complete without errors. In this case new oracle service is started automatically and upgrade procedure is finished.
