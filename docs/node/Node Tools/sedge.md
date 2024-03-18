# Nethermind Sedge

A one-click setup tool for PoS network/chain validators, this includes support for Gnosis chain mainnet and chiado testnet. **Sedge** takes care of the entire on-premise full node setup based on the chosen client, using generated docker-compose scripts based on the desired configuration.

Repository: https://github.com/NethermindEth/sedge

**Quickstart with Nethermind Sedge:** 

Instructions to get started with Nethermind Sedge found [here](https://docs.sedge.nethermind.io/docs/quickstart/complete-guide)

**For Chiado Test network:**

Instructions for Chiado Test Network can be found [here](https://docs.sedge.nethermind.io/docs/networks/chiado) 


```mdx-code-block
<details>
  <summary>FAQ</summary>
  <div>
```
1. My sedge-validator-blocker container has been showing `Endpoint is down, waiting 30 seconds before checking again...` for more than 10 mins. 
    * The sedge-validator-blocker ensures that the validator node doesn't start until your beacon node health endpoint returns 200. You should check if beacon node (sedge-consensus-client) is synced.
    * Once the endpoint returns 200, the sedge-validator-client will start.

```mdx-code-block
  </div>
</details>
```
