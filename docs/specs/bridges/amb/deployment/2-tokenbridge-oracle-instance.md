---
---

# 2) TokenBridge oracle instances

:::info
All instructions must be performed for every oracle instance.
:::

The TokenBridge oracle instance deployment uses [Ansible](https://docs.ansible.com/ansible/latest/index.html). Moreover the process below assumes there are two nodes: one node where Ansible playbooks orchestrate the deployment process (orchestration node) and another node (target node) where the oracle instance is deployed.

The orchestration node must satisfy the following dependencies:

* Python 2 (v2.6-v2.7)/Python3 (v3.5+)
* Ansible v2.3+ (on Ubuntu based systems it could be installed by `apt-get install ansible` )
* Git

The target must have a functional Ubuntu 16.04 or 18.04 launched.

:::info
Another recommendation is to configure a remote service to collect the oracle logs. For example, [SolarWinds Papertrail](https://papertrailapp.com) could be used for this purposes - after registration it will provide log server domain name and port that will be used for the oracle configuration.
:::

As soon as both nodes are ready the next steps should be performed (only on the orchestration node):

1\. Generate a pair of SSH keys that will be used by the orchestration node to remotely login to the target node. The generated public key must be added to `.ssh/authorized_keys` on the target node in the home directory of the user (usually `root` or `ubuntu`) that will be configured to perform deployment actions.

2\. Clone the TokenBridge git repository and change the working directory:

```bash
git clone --recursive https://github.com/poanetwork/tokenbridge.git
cd tokenbridge/deployment
```

3\. Create the `hosts.yml` file, e.g. from `hosts.yml.example`:

:::warning
Replace all variables templated with tags (&lt;&gt;) with actual values.
:::

```yaml
---
<unique oracle name>:
  children:
    oracle:
      hosts:
        <oralce node ip address>:
          ansible_user: <user>
          ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY: "<validator private key without 0x>"
          syslog_server_port: "udp://<log server name>:<log server port>"
```

Here `<user>` is the account that will ssh into the oracle node for deployment actions. This is typically `ubuntu` or `root`.

4\. Create the file `group_vars/<unique oracle name>.yml` and fill it with the public bridge parameters.

:::warning
Replace all variables templated with tags (&lt;&gt;) with actual values.
:::

```yaml
---
ORACLE_BRIDGE_MODE: "ARBITRARY_MESSAGE"
ORACLE_LOG_LEVEL: debug

COMMON_HOME_RPC_URL: "https://<url.to.homenet>"
COMMON_HOME_BRIDGE_ADDRESS: "<bridge contract address at Home>"
ORACLE_HOME_RPC_POLLING_INTERVAL: 5000

COMMON_FOREIGN_RPC_URL: "https://<url.to.foreignnet>"
COMMON_FOREIGN_BRIDGE_ADDRESS: "<bridge contract address at Foreign>"
ORACLE_FOREIGN_RPC_POLLING_INTERVAL: 5000

COMMON_HOME_GAS_PRICE_FALLBACK: 1000000000
COMMON_HOME_GAS_PRICE_FACTOR: 1
ORACLE_HOME_GAS_PRICE_UPDATE_INTERVAL: 600000

# COMMON_FOREIGN_GAS_PRICE_SUPPLIER_URL: "https://gasprice.poa.network/"
# COMMON_FOREIGN_GAS_PRICE_SPEED_TYPE: "fast"
COMMON_FOREIGN_GAS_PRICE_FALLBACK: 10000000000
COMMON_FOREIGN_GAS_PRICE_FACTOR: 1
ORACLE_FOREIGN_GAS_PRICE_UPDATE_INTERVAL: 600000
```

5\. The final step is to run Ansible playbook to deploy the oracle instance on the remote node:

:::warning
If the target node contains `python3` instead of `python`, the option `-e 'ansible_python_interpreter=/usr/bin/python3'` must be added to the command below.
:::

```bash
ansible-playbook --private-key=~/.ssh/<privkey.file> -i hosts.yml site.yml
```

This command will run the following actions on the target node:

* install `Docker`, `docker-compose`, `Python`, `Git` and it dependencies (such as `curl`, `ca-certificates`, `apt-transport-https`, etc.
* create an additional non-sudo docker user to run service as.
* build the docker image that will be used to run the oracle workers
* modify the docker-compose file to use syslog for logs produced by the oracles workers in docker containers
* configure syslog to store docker logs in `/var/log/docker/` and send logs produced by the oracle workers to the remote log server
* configure the service `logrotate` to rotate the docker log files
* register the service that will run the oracle after the node restart

After deployment completion all oracle workers, Radis DB and RabbitMQ will start automatically. Their log messages must appear on the remote log server.
