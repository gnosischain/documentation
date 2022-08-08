# Bridges

## Strategy

- For Gnosis Chain, there should just be one bridge that transfers Dai, Tokens, and Data (special hook for native xDai)
- Bridge Validators can just run the same docker image for all types of tokens
- Bridge Governance would govern all tokens

## Overall 

- Once Unified Bridge UI comes out, should rewrite all tutorials
  - `Using the xDai Bridge` 
    - Legacy Tutorials linked should be refactored into clear documentation
    - `How to bridge Dai to a different address on Gnosis` should just be part of `How to bridge Dai` tutorial
    - Get rid of the `how to see pending transactions`?
- Should each of the Native Bridges have their own section (possibly be governed separately?)
- Should AMB Bridge have separate section for
  - Ethereum -> Gnosis Chain AMB (and Omnibridge)
  - BNB Chain -> Gnosis Chain AMB (and Omnibridge)

## xDai Bridge

Docs to Merge
- Transaction Monitoring
  - Why xDai Bridge doesn't require an ALM (see Slack convo with Auryn and Alex Kolotov)
- [ ] Bridge Governance Section
  - [ ] What are the actual parameters that can be amended?
  - [ ] Link to previous Bridge Governance Decisions
- [ ] Bridge validators
  - [ ] Need to verify addresses for each of the organizations - which are on Ethereum, and which are on Gnosis?
- [ ] Roadmap
  - [ ] Link to Roadmap
- [ ] Managing Bridge Contracts
  - Should convert links into documentation
- [ ] Managing Bridge Validators
  - Should convert links into documentation
- [ ] What is the address 0x7a48Dac683DA91e4faa5aB13D91AB5fd170875bd do?
	- [ ] Owner of the Validator Management proxy on Gnosis Chain
- Overall
  - - [ ] Synthesize [xDai Bridge Docs](https://developers.gnosischain.com/for-users/bridges/converting-xdai-via-bridge)
  - [ ] Synthesize [Tokenbridge xDai Docs](https://docs.tokenbridge.net/xdai-bridge/about)
  - [ ] Does xDai Bridge have an ALM? No

## Arbitrary Message Bridge

- [ ] Zodiac module for DAOs - L2 to L1 sending of data from Gnosis Chain to Ethereum
- [ ] Synthesize AMB docs from Tokenbridge
## Omnibridge


## Tutorials

- Bridge Users
  - Should this be refactored to User Guide instead?
- Bridge Validators
  - How to setup a Bridge Validator for xDai Bridge
  - How to setup a Bridge Validator for AMB / Omnibridge
  - How to add a Bridge Validator to the Bridge Committee
  - How to remove a Bridge Validator to the Bridge Committee