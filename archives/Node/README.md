---
title: Run a Node (Archived)
description: Node operation and validator documentation for Gnosis Chain - manual client setup, key generation, deposits, withdrawals, monitoring and node tooling. Archived, no longer published.
keywords: [node, validator, staking, deposit, withdrawal, beacon, execution, archived]
---

# Run a Node (Archived)

:::danger Archived
The **Run a node** section is no longer published. `/node` and all 36 routes beneath it now
redirect to the homepage, the section is gone from the navbar and footer, and its sidebar has been
removed from `sidebars.js`.

These pages are kept for historical reference only. Client versions, flags, config files, deposit
and withdrawal mechanics, contract addresses and hardware requirements below were accurate when
written and have **not** been maintained since. Do not follow them to set up a validator without
checking every value against current client releases.
:::

There is no maintained node or validator documentation on this site. For current guidance see
[validategnosis.com](https://www.validategnosis.com/), the individual client projects'
documentation, [Discord](https://discord.gg/gnosis), or the
[Validator Request form](https://tally.so/r/3y4V1W).

## Archived pages

| Area | Contents |
| --- | --- |
| [run-a-node.md](./run-a-node.md) | The section landing page (previously `node/README.md`, served at `/node`): solo staking, minimum 1 GNO stake, Gnosis vs Ethereum |
| [architecture.md](./architecture.md) | Composite network architecture, execution + consensus layers |
| [rewards-penalties.md](./rewards-penalties.md) | Validator rewards and penalties, live data sources |
| [manual/](./manual/) | Manual client setup — server config, execution clients (Geth, Nethermind, Erigon, Reth), beacon clients (Lighthouse, Lodestar, Nimbus, Teku), validator key generation (CLI, Wagyu), deposits and verification |
| [management/](./management/) | Monitoring nodes and validators, withdrawals, voluntary exit, migrating a validator |
| [participate-validator/](./participate-validator/) | Liquid staking, and the Swarm guides (quickstart, Docker, DAppNode) |
| [Node Tools/](./Node%20Tools/) | One-click and managed tooling — DAppNode, eth-docker, Sedge, Stereum |

`manual/` and its subfolders contain `_partials/` directories of MDX fragments that the pages in
this folder import. They are only used from inside this archive.

`node-architecture.drawio` is the editable source for the architecture diagram.
