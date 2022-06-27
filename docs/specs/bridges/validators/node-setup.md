---
description: Instructions for new bridge validators
---

# Bridge Node Setup

:::warning
While it is possible to use a common node as a validator node and a bridge node, **it is highly recommended to have two separate nodes**.
:::

### I. Prerequisites

1. A functional Ubuntu 16.04 server launched using a trusted hosting provider.
   * Record the IP address (required for file setup).
   * Setup ssh access to your node via public+private keys (using passwords is less secure).
   * When creating the node, set a meaningful  `hostname`  that can identify you (e.g.  `validator-0x...` ).
2. On your local machine install:
   * Python 2 (v2.6-v2.7)/Python3 (v3.5+)
   * Ansible v2.3+
   * Git

### II. Configuration

1\) Clone the bridge repository and cd to the `bridge-nodejs` folder

```
git clone https://github.com/poanetwork/deployment-bridge.git
cd deployment-bridge/bridge-nodejs
```

2\) Create the file `hosts.yml` from `hosts.yml.example`

```
cp hosts.yml.example hosts.yml
```

`hosts.yml` should look like the following:

```yaml
sokol-kovan:
    hosts:
        127.0.0.1:
            ansible_user:  ubuntu
            VALIDATOR_ADDRESS_PRIVATE_KEY: "aaaaaaaaaaaa"
            syslog_server_port: "udp://127.0.0.1:514"
```

3\) Change the example values to the new settings and save the file.

| Value                                                            | Description                                                                                               |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `sokol-kovan`                                                    | change to `dai`.  This is the bridge name and references  `group_vars/dai.yml`.                           |
| `127.0.0.1`                                                      | Set to your remote server IP address.                                                                     |
| ansible\_user: `ubuntu`                                          | Set to user that will ssh into the node. This is typically `ubuntu` or `root`.                            |
| VALIDATOR\_ADDRESS\_PRIVATE\_KEY: `"aaa...."`                    | Set to the private key for the specified validator address.                                               |
| <p>syslog_server_port:<br/><code>"udp://127.0.0.1:514"</code></p> | Port specification for bridge logs. This value will be provided by an administrator in a private message. |

4\) `hosts.yml` should now include your values:

```yaml
dai:
    hosts:
  <your_host_ip>
            ansible_user:  ubuntu
            VALIDATOR_ADDRESS_PRIVATE_KEY: "<your_private_key>"
            syslog_server_port: "<your_protocol>://<ip>:<port>"
```

### III. Execution

The playbook can be executed once [Ansible](https://docs.ansible.com/ansible/latest/installation\_guide/intro\_installation.html) is installed and all configuration variables are set.

It will automatically install `Docker`, `docker-compose`, `Python`, `Git` and its dependencies (such as `curl`, `ca-certificates`, `apt-transport-https`, etc.) to the node. This playbook also creates an additional non-sudo docker user.

```yaml
ansible-playbook -i hosts.yml site.yml
```

#### **Useful arguments:**

To be used with the ansible-playbook command, for example:

```yaml
 `ansible-playbook -i hosts.yml site.yml --ask-become-pass`
```

* `--ask-pass` - ask for the password used to connect to the bridge VM.
* `--ask-become-pass` - ask for the `become` password used to execute some commands (such as Docker installation) with root privileges.
* `-i <file>` - use specified file as a `hosts.yml` file.
* `-e "<variable>=<value>"` - override default variable.
* `--private-key=<file_name>` - if private keyfile is required to connect to the ubuntu instance.

### IV. Bridge service commands

The Bridge service is named `poabridge`. Use the default `SysVinit` commands to `start`, `stop`, `restart`, and `rebuild` the service and to check the `status` of the service.

Commands format:

```bash
sudo service poabridge [start|stop|restart|status|rebuild]
```

### V. Logs

If the `syslog_server_port` option in the hosts.yml file is not set, all logs will be stored in `/var/log/docker/` folder in the set of folders with the `bridge_` prefix.

If the `syslog_server_port` is set, logs will be redirected to the specified server and cannot be accessed on the bridge machine.

```bash
syslog_server_port: "<protocol>://<ip>:<port>" # When this parameter is set all bridge logs will be redirected to the <ip>:<port> address.
```

