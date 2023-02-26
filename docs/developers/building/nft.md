---
title: Launching an NFT
description: Tutorial to deploy an NFT collection to Gnosis.
keywords: [nft contract, deploy nft, erc721, erc721 standard, erc721 token]
---

# Launching an NFT on Gnosis

## Overview

As is the case with many other things on Gnosis, launching an NFT collection follows very similar steps to how you would on Ethereum. As is the case with Ethereum, you will need to implement the [ERC721 standard](https://eips.ethereum.org/EIPS/eip-721) to create a Non-Fungible Token. For those familiar with Object-Oriented Programming, it's much like implementing an interface. You need to implement each of the following events/functions:

```solidity showLineNumbers
interface ERC721 /* is ERC165 */ {
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);=
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

    function balanceOf(address _owner) external view returns (uint256);
    function ownerOf(uint256 _tokenId) external view returns (address);
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;
    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
    function approve(address _approved, uint256 _tokenId) external payable;
    function setApprovalForAll(address _operator, bool _approved) external;
    function getApproved(uint256 _tokenId) external view returns (address);
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}

interface ERC165 {
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
}
```

:::note
NFTs are not necessarily ERC-721 tokens, they can also be [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155), for example.
:::

:::tip
If you're looking for a way to create NFTs without coding, check out [Nifty.Ink](https://nifty.ink/explore)
:::

For this walk through, we're going to be using [Hardhat](https://hardhat.org/) ([configure it with Gnosis](/developers/smart-contracts/hardhat#config-hardhat-for-gnosis)).

## Prerequisites 
To follow along, it's recommended to review and be familiar with the [documentation on deploying a contract](/developers/building/first-contract).
You will also need to have a working Node.js >=16.0 installation and [a small amount of xDai for gas](/tools/faucets).


## Step 1: Set up your environment

```bash
mkdir gnosis-nft
cd gnosis-nft && npm init && npm install --save-dev hardhat && npx hardhat
```

Select `Create an empty hardhat.config.js` and hit enter.
Now, install the `hardhat-toolbox` plugin:

```bash
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

Configure [hardhat with Gnosis](../smart-contracts/hardhat.md).

## Step 2: Host NFT Art on IPFS

IPFS ([InterPlanetary File System](https://en.wikipedia.org/wiki/InterPlanetary_File_System)) is the decentralized way to store files. Nft artwork tends to be pretty large, so storing them on-chain isn't an option. 

1. Download the IPFS CLI by following the instructions [here](https://ipfs.tech/#install).

2. Create IPFS repository

```bash
ipfs init
```

3. Open another terminal window and run the following:

```bash
ipfs daemon
```

Now open the first terminal window and run the following to add your art file (art.png) to ipfs:

```bash
ipfs add art.png
```

This will output a hash prefixed by a "Qm". copy that and add the “https://ipfs.io/ipfs/” prefix to it. For example, this was mine: https://ipfs.io/ipfs/QmVUZDRXPLPToKVCfhWQ9hPT31ZUu3XDVuQr1XvQKqz1f1

4. Create a JSON file and add it to IPFS:

```json
{
    "name": "Gnosis NFT",
    "description":"hoot hoot",
    "image":"https://ipfs.io/ipfs/QmVUZDRXPLPToKVCfhWQ9hPT31ZUu3XDVuQr1XvQKqz1f1",
}
```

and then run:
    
```bash
ipfs add nft.json
```

Another "Qm" prefixed hash string will be generated. Copy that down and add the same “https://ipfs.io/ipfs/” prefix to it. Mine looks like this: https://ipfs.io/ipfs/QmdtHvwsGNjVejuXHyCnM3r4UP8cJonf8DgSveejGfNhvU .

## Step 3: Implement the ERC-721 Token Contract

1. Create a new directory called contracts and create a file called GnosisNft.sol

```bash
mkdir contracts
cd contracts && touch GnosisNft.sol
```

2. Open Nft.sol in your favorite text editor or IDE (VS Code has a [Hardhat extension](https://hardhat.org/hardhat-vscode/docs/overview)).
To keep it simple for the sake of this tutorial, we're going to import OpenZeppelin's [ERC-721 Implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721). To use this, quickly run in the terminal:

```bash
npm install @openzeppelin/contracts
```
If you go and take a look at the repository, you'll notice how they implement the ERC-721 standard as mentioned above. Take some time to look through the code, and then edit GnosisNft.sol to look like this:

```solidity showLineNumbers
// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract gnosisNft is Ownable, ERC721("GnosisNft", "GNOT") {
 
  uint tokenId;

  mapping(address=>tokenMetaData[]) public ownershipRecord;

  struct tokenMetaData{
    uint tokenId;
    uint timeStamp;
    string tokenURI; //this will be the nft artwork
  }

  function mintToken(address recipient) onlyOwner public {

    require(owner()!=recipient, "Recipient cannot be the owner of the contract");

    _safeMint(recipient, tokenId);

    ownershipRecord[recipient].push(tokenMetaData(tokenId,
                                    block.timestamp,
                                    "https://ipfs.io/ipfs/QmdtHvwsGNjVejuXHyCnM3r4UP8cJonf8DgSveejGfNhvU" //Make this your IPFS link you generated in step 2!
                                  ));

    tokenId = tokenId + 1;
  }
 
}
```
3. Now that you've got that all coded up, it's time to compile and deploy. You can also [see here](/developers/smart-contracts/hardhat) for more deployment info. Run from project root:
```bash
npx hardhart compile
```
This should compile without errors. Create a directory called scripts, and within it add a file called deploy.js. Add the following:
```javascript showLineNumbers
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Token = await ethers.getContractFactory("gnosisNft"); //this will be whatever you named your contract
    const token = await Token.deploy();
  
    console.log("Token address:", token.address);
}
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
```
Now, edit your hardhat.config.js to look something like this:
```javascript showLineNumbers
require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");

module.exports = {
  solidity: "0.8.9",
  defaultNetwork : 'gnosis',
  networks: {
    
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: mnemonic(),
      },
    },
  },
};
function mnemonic() {
  try {
    return fs.readFileSync("./mnemonic.txt").toString().trim();
  } catch (e) {
    console.log(e);
      console.log(
        "WARNING: No mnemonic file created for a deploy account."
      );
  }
  return "";
};
```
:::danger
Proper private key management is critical. To safeguard the mnemonic, it has been added to a file called mnemonic.txt in this case. DO NOT PUSH THIS TO GITHUB OR COMMIT TO SOURCE CONTROL. Even if you delete it after, assume it will live on forever after being committed and is compromised. Add mnemonic.txt to your .gitignore if you plan on committing, or store securely it in an environment variable.
:::
To deploy, run:
```bash
npx hardhat run scripts/deploy.js --network gnosis
```
Congrats, you have deployed a basic ERC-721 contract to Gnosis! If you like, you can build out a front end to view your NFT. For now, you can view your token in [Blockscout](https://blockscout.com/xdai/mainnet/). 
