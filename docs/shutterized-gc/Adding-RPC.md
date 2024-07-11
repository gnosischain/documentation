---
sidebar_position: 2
title: Adding Shutterized Gnosis Chain RPC URL to wallet
description: The Shutterized Gnosis Chain tackles significant issues, focusing on base-layer neutrality, countering the risk of malicious Maximal Extractable Value (MEV), and maintaining censorship resistance.

keywords: [shutter network shutterized gnosis chain MEV attacks frontrunning] 
---


```javascript
// changeNetwork.js 

async function changeOrAddNetwork() {
    const chainId = '0x64';
    if (window.ethereum) {
        try {

            // Try to switch to the network
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: chainId,
                }],
            });
            console.log('Switched to the network with chainId:', chainId);
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    const chainParams = {
                        chainId: chainId,
                        rpcUrls: ["https://erpc.gnosis.shutter.network"],
                        chainName: "Shutterized Gnosis Chain",
                        nativeCurrency: {
                            name: "xDai",
                            symbol: "xDAI",
                            decimals: 18
                        },
                        blockExplorerUrls: ["https://www.gnosisscan.com"]
                    };

                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [chainParams],
                    });
                    console.log('Network added and switched to:', chainParams.chainName);
                } catch (addError) {
                    console.error('Failed to add the network:', addError);
                }
            } else {
                console.error('Failed to switch the network:', switchError);
            }
        }
    } else {
        console.error('MetaMask is not installed!');
    }
}
  <Button onclick="changeOrAddNetwork()">Add
    </Button>
```