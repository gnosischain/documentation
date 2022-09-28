---
---

# Chiado Testnet

Chiado is the official testnet of Gnosis. It has the same execution layer, and it is the first network transitioned to Proof of Stake, in preparation for the Gnosis mainnet merge.


## Native Tokens

### Fee token

Name: `Chiado xDai`

Icon: <a href="/img/tokens/chiado-xdai.png"><img src="/img/tokens/chiado-xdai.png" style={{width: '100px', height: '100px', display: 'inline'}} /></a>


### GNO Token

Name: `Gnosis Token`

Ticker: `GNO`

Chiado Contract Address: [0x0 TODO](https://blockscout.chiadochain.net/address/0x0)  


## Contracts

SBCTokenProxy = [TBC](https://blockscout.chiadochain.net/address/0x0) 

SBCWrapper = [TBC](https://blockscout.chiadochain.net/address/0x0) 

SBCWrapperProxy = [TBC](https://blockscout.chiadochain.net/address/0x0) 

SBCDepositContract = [TBC](https://blockscout.chiadochain.net/address/0x0) 

[Deposit Contract address](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/config.yaml#L21): [TBC](https://blockscout.chiadochain.net/address/0x0) 


## Bridges with Goerli

# AMB Bridges TokenBridge ARBITRARY_MESSAGE

[Home] Chiado: 0x2f018c1118B0DC28E395d054e80fE44c61904892 at block 190695

[Foreign] Goerli: 0x5816D9EdC3D30F501A098bC26A313Ae8BeB7B8ad at block 7409708

## OmniBridge AMB:

[Home] Chiado Bridge Mediator: 0x27D23dd2Ef62D9b92f8f743c9A29a9d327381900

[Foreign] Goerli Bridge Mediator: 0xe18e081f5448aE92E2D66aBBA6b9AbE3f61ea8B0

	-> Claim Token


### How to Use:

Go to:[ https://abi.hashex.org/](https://abi.hashex.org/)

Copy the ABI from [https://etherscan.io/address/0x8eb3b7d8498a6716904577b2579e1c313d48e347#code](https://etherscan.io/address/0x8eb3b7d8498a6716904577b2579e1c313d48e347#code)


## Config Files

[https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/README.md](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/README.md)

Consensus layer files:



* [config.yaml](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/config.yaml)
* [genesis.ssz](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/genesis.ssz)
* [bootnodes_consensus.txt](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/bootnodes_consensus.txt)

Execution layer files:



* [nethermind_genesis.json](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/nethermind_genesis.json)
* [bootnodes_execution.txt](https://github.com/gnosischain/consensus-deployment-ansible/blob/master/chiado/custom_config_data/bootnodes_execution.txt)


## Client images

Remember you must run one execution client

[https://github.com/gnosischain/nethermind-client](https://github.com/gnosischain/nethermind-client) 

And one consensus client

[https://github.com/gnosischain/lighthouse-client](https://github.com/gnosischain/lighthouse-client) 

[https://github.com/gnosischain/prysm-client](https://github.com/gnosischain/prysm-client) 

[https://github.com/gnosischain/lodestar-client](https://github.com/gnosischain/lodestar-client) 

[https://github.com/gnosischain/teku-client](https://github.com/gnosischain/teku-client) 

