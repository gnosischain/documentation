---
title: Verifying with Truffle
description: Verifying Gnosis contracts with truffle-plugin-verify. Archived - Truffle was sunset by Consensys in 2023 and is no longer maintained.
keywords: [truffle verify, verify contracts, truffle plugin, deprecated, sunset, archived]
---

# Truffle Verify (Archived)

:::danger Archived
Truffle is **no longer a supported way to verify contracts on Gnosis Chain**. It was [sunset by Consensys in 2023](https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat) and receives no further maintenance or security updates.

Verify your contracts with [Hardhat](https://docs.gnosischain.com/developers/dev-environment/hardhat#verify-contract) or [Foundry](https://docs.gnosischain.com/developers/dev-environment/foundry#verify-your-contract) instead, or use [Sourcify](https://docs.gnosischain.com/developers/Verify%20Smart%20Contracts/sourcify), [Blockscout](https://docs.gnosischain.com/developers/Verify%20Smart%20Contracts/blockscout) or [Gnosisscan](https://docs.gnosischain.com/developers/Verify%20Smart%20Contracts/gnosisscan) directly.

This page is kept for historical reference only and is not published on [docs.gnosischain.com](https://docs.gnosischain.com).
:::

This [truffle plugin](https://www.npmjs.com/package/truffle-plugin-verify) allowed you to automatically verify your smart contracts' source code on Gnosisscan (by Etherscan), straight from the Truffle CLI.

## Installation

Install the plugin with npm or yarn

<Tabs groupId="package-manager">
<TabItem value="yarn" label="yarn">

```bash
yarn add -D truffle-plugin-verify
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm install -D truffle-plugin-verify
```
</TabItem>
</Tabs>

Add the plugin to your truffle-config.js file

```js
module.exports = {
  /* ... rest of truffle-config */

  plugins: ['truffle-plugin-verify']
}
```

Generate an API Key on your [Gnosisscan account](https://gnosisscan.io/myaccount).

Add your Gnosisscan API key to your truffle config (make sure to use something like dotenv so you don't commit the api key)

```js
module.exports = {
  /* ... rest of truffle-config */

  api_keys: {
    gnosisscan: 'MY_API_KEY'
  }
}
```

## Useful links

- [Automatically verify Truffle smart contracts on Etherscan](https://kalis.me/verify-truffle-smart-contracts-etherscan/)
- [Truffle Quickstart](https://archive.trufflesuite.com/docs/truffle/quickstart/) (archived)
