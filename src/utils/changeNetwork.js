import React from 'react';
import Button from '@site/src/components/Button';

// JavaScript function for changing or adding the network

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
          
            // Try to switch to the network
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainId }],
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

}

