---
title: "Configure Server"
---

# Configure Server

We recommend the following steps to configure your server with sensible system and security defaults. We currently provide a guide for Ubuntu users, but the principles extend to whichever OS you intend to use.
## Configure Server

### Update Server

Update Ubuntu with the latest software and security updates.

```shell
$ sudo apt -y update && sudo apt -y upgrade
$ sudo apt dist-upgrade && sudo apt autoremove
$ sudo reboot
```

### Configure Timekeeping

Consensus Layer clients are very sensitive to time, and require accurate timekeeping for proper synchronization with the blockchain network.

For Ubuntu machines, we recommend using the [NTP service](https://ubuntu.com/server/docs/network-ntp), which helps ensure system time is synchronized.

```shell
## Check time and date
$ timedatectl

## Setup NTP service
$ sudo timedatectl set-ntp on
```

:::tip Recommended
Some users recommend using [Chrony](https://chrony.tuxfamily.org/) as a [method of configuring NTP](https://ubuntu.com/blog/ubuntu-bionic-using-chrony-to-configure-ntp)
:::

### Create JWT
<!-- Create a fix for rendering  -->
<!-- import JwtGenerationPartial from '@site/docs/node/manual/server/_partials/_jwt-generation-partial.mdx';

<JwtGenerationPartial /> -->

## Set up Networking

Ubuntu ships with a [ufw firewall](https://wiki.ubuntu.com/UncomplicatedFirewall) that helps prevent unwanted connections to your server. As your server is connected to the public internet, this is very important as there will be adversaries that will port scan for vulnerabilities.

### Install UFW

Ubuntu should have `ufw` installed, otherwise you can install it.

```shell
$ sudo apt install ufw
```

### Apply UFW Defaults

```shell
$ sudo ufw default deny incoming
$ sudo ufw default allow outgoing
```

### (Optional) Deny or Allow SSH

If you are hosting your node locally (i.e. homestaker), we highly recommend you deny the SSH Port 22, which is a very common attack vector.

If you are hosting your node in the cloud, you will need to allow the SSH Port 22 to connect to your machine. Make sure to allow

```shell
## Deny SSH
$ sudo ufw deny 22/tcp

## Allow SSH
$ sudo ufw allow 22/tcp
```

### Allow Execution Client Port 30303

The Execution Client uses port 30303 to communicate with Execution Layer network peers.

```shell
$ sudo ufw allow 30303
```

### Allow Consensus Client port 9000

Most Consensus Layer Clients use port `9000` to communicate with the Consensus Layer network peers, with the exception of Prysm, which uses ports `13000/TCP` and `12000/UDP` instead.

```shell
## Lighthouse, Nimbus, Teku, Lodestar
$ sudo ufw allow 9000

## Prysm
$ sudo ufw allow 13000/tcp
$ sudo ufw allow 12000/udp
```

### Enable Firewall

```shell
$ sudo ufw enable
$ sudo ufw status numbered
```


## Advanced

### Increasing Swap Space

Gnosis clients (e.g. Erigon) tend to use large amounts of memory when syncing or running, which may lead to out-of-memory errors. Advanced users can consider allocating swap space, which allows the system to store in-memory data on their hard drives.

:::tip Read More
- [Step 5: Create a Swap Space of Somer Esat's Guide](https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-lodestar-193a2553a161)

:::
