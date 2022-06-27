---
---

# Connect to a GC Node

If you choose not to use the public RPC and want to connect to a different Gnosis Chain node ([including a 3rd party provider](/validators/client/nethermind-node-setup)), set `XDAI_RPC_URL`=https://\&lt;your-endpoint&gt;

### **Fallback IPs (Lighthouse only)**

Use comma-separated RPC urls for the `XDAI_RPC_URL` variable to set fallback IPs in Lighthouse. This is useful if your node goes offline. For example:

* `XDAI_RPC_URL`=https://\&lt;your-endpoint&gt;, [https://rpc.gnosischain.com](https://rpc.gnosischain.com)

### **Sharing machines for GC and GBC clients**

If you decide to run a Gnosis Chain client (Nethermind) and a Gnosis Beacon Chain client (Lighthouse or Prysm) on the same machine, we recommend [running both in the same docker-compose.yml ](https://docs.docker.com/compose/extends/)file to enable RPC access by container name.

If you have questions about config details for this type of setup, please [ask in our discord.](https://discord.com/invite/pjHjQwycV8)