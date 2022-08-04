import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MetaMaskAddButton() {
    const {siteConfig} = useDocusaurusContext();
    var samplesLink = siteConfig.presets[0][1].docs.editUrl + "/src/pages/live-samples";


    var GNOSIS_MAINNET_PARAMS = {
        chainId: "0x64",
        chainName: "Gnosis",
        nativeCurrency: {
            name: "xDai",
            symbol: "xDai",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.gnosischain.com/"],
        blockExplorerUrls: ["https://gnosisscan.io/"],
    }

    var addGnosisToMetamask = function() {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [GNOSIS_MAINNET_PARAMS],
        })
        .catch((error) => {
            console.log(error);
        });
    };

    var getAccount = async function(){
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // MetaMask provide a single account
        console.log(accounts[0]);
        alert(accounts[0]);
    }

    if (typeof window.ethereum === 'undefined') {
        return (
            <Layout title="Metamask AddButton">
              <div style={{textAlign: 'center',}}>
                <p>MetaMask is NOT installed.</p>
                <p><a href='/tools/wallets/metamask'>Setup and configure MetaMask</a></p>
                <p><a href={samplesLink}>View all live samples code in Github.</a></p>
              </div>
            </Layout>
          );
    }

    var chainId = ethereum.networkVersion;
    if(ethereum.networkVersion !== "100" &&
        ethereum.networkVersion !== "0x64"){
        return (
            <Layout title="Metamask AddButton">
                <div style={{textAlign: 'center',}}>
                <p>MetaMask is installed but not connected to Gnosis.</p>
                <p><a href='#' onClick={addGnosisToMetamask}>Add Gnosis to Metamask Button</a></p>
                <p><a href='/tools/wallets/metamask#2-configure'>Configure MetaMask guide</a></p>
                <p><a href={samplesLink}>View all live samples code in Github.</a></p>
                </div>
            </Layout>
            );
    }

  var account = ethereum.selectedAddress;
  return (
    <Layout title="Metamask AddButton">
      <div style={{textAlign: 'center',}}>
        <p>MetaMask is installed, connected to Gnosis, get your account!</p>
        <p>Chain ID: {chainId}</p>
        <p><a href='#' onClick={getAccount}>Get account</a></p>
        <p>{account}</p>
        <p><a href={samplesLink} target="_blank">View all live samples code in Github.</a></p>
      </div>
    </Layout>
  );
}