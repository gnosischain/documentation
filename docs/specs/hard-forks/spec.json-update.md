---
---

# Spec.json update

:::caution Archived page
Check the latest hard fork and update your node
:::

:::info
This guide assumes that you're running this playbook from the same machine you used to make initial deployment of your node. You should already have `python` and `ansible` installed, and you have the correct ssh keypair to root-access the node.
:::

1\) If you already have a cloned version of the poa-devops repository ([https://github.com/poanetwork/poa-devops.git](https://github.com/poanetwork/poa-devops.git)), pull the latest changes:

```
cd poa-devops
git pull origin master
```

otherwise, clone this repository:

```
git clone https://github.com/poanetwork/poa-devops.git
cd poa-devops
```

1\) create `group_vars/all` file:

```
cp group_vars/hf-spec-change.example group_vars/all
```

and set the following variables:

1. `poa_role` - node's role (one of `bootnode`, `validator`, `moc`, `explorer`, `netstat`)
2. `MAIN_REPO_FETCH: "poanetwork"`)
3. `GENESIS_BRANCH: "dai"` )

2\) Create/edit `hosts` file:

```
echo "" > hosts
```

and put your node's ip address (assuming it's 192.0.2.1) as follows:

```
[hf-spec-change]
192.0.2.1
```

make sure you don't have other tags (`[...]`) in hosts file, **and double check you are using your DAI node's IP address**.

For those who host multiple nodes:

*   if all your nodes are of the same role (e.g. all bootnodes), you can run this playbook on all of them by listing their ips, e.g.

    ```
    [hf-spec-change]
    192.0.2.1
    192.0.2.2
    192.0.2.3
    192.0.2.4
    ```
*   if you host nodes of different types you can set `poa_role` individually against the corresponding ip address like so:

    ```
    [hf-spec-change]
    192.0.2.1 poa_role=explorer
    192.0.2.2
    192.0.2.3 poa_role=moc
    192.0.2.4
    ```

    on lines where you omitted explicit `poa_role`, the value from `group_vars/all` is used.

3\) Run the playbook:

```
ansible-playbook -i hosts site.yml
```

:::warning
**I**f you get a ssh connection error, try to add `-e 'ansible_ssh_user=ubuntu'` to the command line above, substituting `ubuntu` with correct ssh username, which is usually either `ubuntu` or `root` or `poa` or `centos` depending on your setup
:::

4\) Verify that your node is active in netstat ([https://dai-netstat.poa.network/](https://dai-netstat.poa.network/))

5\) connect to the node

```
ssh root@192.0.2.1
```

switch to the home folder of corresponding role:

```
# substitute validator with your node's role (bootnode, moc, ...)
cd /home/validator
```

and check the update time of `spec.json` (should be about the time you started the playbook)

```
ls -lh
# a long list should appear here, look for spec.json in the rightmost column and check the date and time on the same row
```

also check that backup was created:

```
ls -lh spec-hfs/
# look for a file named similar to spec-hf-20180108-174649.json Numbers represent date and time in UTC when the playbook was started
```

