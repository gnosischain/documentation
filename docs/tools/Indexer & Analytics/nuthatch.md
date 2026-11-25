---
title: nuthatch
description: nuthatch is a self-hosted indexer that turns a contract's events on Gnosis Chain into local SQL.
---

nuthatch is a single binary that indexes a contract's events into a local database and serves them over HTTP and SQL. Gnosis Chain is a built-in chain, and `--rpc` points it at your own endpoint.

```sh
curl -fsSL https://nuthatch-indexer.com/install.sh | sh
nuthatch init 0xYourContract --chain gnosis --rpc https://your-endpoint --alias mycontract
nuthatch dev
nuthatch sql "select count(*) from mycontract__transfer"
```

Site: https://nuthatch-indexer.com, source: https://github.com/nuthatch-org/nuthatch
