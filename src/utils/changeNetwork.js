import React from 'react';

export async function changeOrAddNetwork() {
    const chainId = '0x64';
    if (window.ethereum) {
        try {
            const chainParams = {
                chainId: chainId,
                rpcUrls: ["https://erpc.gnosis.shutter.network"],
                chainName: "Shutterized Gnosis Chain",
                nativeCurrency: {
                    name: "XDAI",
                    symbol: "XDAI",
                    decimals: 18
                },
                blockExplorerUrls: ["https://www.gnosisscan.io"]
            };

            console.log('Attempting to add network:', chainParams.chainName); // Debugging

            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [chainParams],
            });

            console.log('Network added and switched to:', chainParams.chainName); // Debugging
        } catch (addError) {
            console.error('Failed to add the network:', addError);
        }
    } else {
        console.error('MetaMask is not installed!');
    }
}
