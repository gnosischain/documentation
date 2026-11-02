---
title: Geth
---

# Geth

This is the most popular and majority Ethereum Client implementation written in Go, [Geth](https://geth.ethereum.org/) fully open source and is now ported for Gnosis chain.

Repository: [https://github.com/gnosischain/go-ethereum](https://github.com/gnosischain/go-ethereum) 

## Running as a system process

### Installing geth

```
> git clone https://github.com/gnosischain/go-ethereum
> go install ./cmd/geth
```

### Running geth


```
# Gnosis Mainnet
> geth --gnosis --authrpc.jwtsecret /path/to/jwt.hex

# Chiado Testnet
> geth --chiado --authrpc.jwtsecret /path/to/jwt.hex
```
