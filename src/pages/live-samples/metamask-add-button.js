import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MetaMaskAddButton() {
  return (
    <BrowserOnly>
    {() => {
      const {siteConfig} = useDocusaurusContext();
      var samplesLink = siteConfig.presets[0][1].docs.editUrl + "/src/pages/live-samples";
      
      var GNOSIS_MAINNET_PARAMS = {
          chainId: "0x64",
          chainName: "Gnosis",
          nativeCurrency: {
              name: "xDai",
              symbol: "XDAI",
              decimals: 18,
          },
          rpcUrls: ["https://rpc.gnosischain.com/"],
          blockExplorerUrls: ["https://gnosisscan.io/"],
      }
      
      var addGnosisToMetaMask = function() {
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

      var addGno = function() {
        const tokenAddress = '0x9c58bacc331c9aa871afd802db6379a98e80cedb';
        const tokenSymbol = 'GNO';
        const tokenDecimals = 18; 
        const tokenImage = "https://cryptologos.cc/logos/gnosis-gno-gno-logo.png?v=023";
        try {
          // wasAdded is a boolean. Like any RPC method, an error may be thrown.
          const wasAdded =  window.ethereum.request({
              method: 'wallet_watchAsset',
              params: {
              type: 'ERC20', // Initially only supports ERC20, but eventually more!
              options: {
                  address: tokenAddress, // The address that the token is at.
                  symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                  decimals: tokenDecimals, // The number of decimals in the token
                  image: tokenImage, // A string url of the token logo
              },
              },
          });
          if (wasAdded) {
              console.log(tokenSymbol + ' Token Added!');
          } else {
              console.log('Failed to add');
          }
        } catch (error) {
        console.log(error);
        }
      }

      if (typeof window.ethereum === 'undefined') {
          return (
              <Layout title="MetaMask AddButton">
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
              <Layout title="MetaMask AddButton">
                  <div style={{textAlign: 'center',}}>
                  <p>MetaMask is installed but not connected to Gnosis.</p>
                  <p><a href='#' onClick={addGnosisToMetaMask}>Add Gnosis to MetaMask Button</a></p>
                  <p><a href='/tools/wallets/metamask#2-configure'>Configure MetaMask guide</a></p>
                  <p><a href={samplesLink}>View all live samples code in Github.</a></p>
                  </div>
              </Layout>
              );
      }

    var account = ethereum.selectedAddress;
    return (
      <Layout title="MetaMask AddButton">
        <div style={{textAlign: 'center',}}>
          <p>MetaMask is installed, connected to Gnosis, get your account!</p>
          <p>Chain ID: {chainId}</p>
          <p><a href='#' onClick={getAccount}>Get account</a></p>
          <p>{account}</p>
          <p> Now Add the <a href={'/about/tokens/gno'} target="_blank">GNO token</a>!</p>
          <p><a href='#' onClick={addGno}>Add GNO</a></p>
          <p><a href={samplesLink} target="_blank">View all live samples code in Github.</a></p>
          <p> <a href={'/node/'} target="_blank">P.S.: Got GNO? Stake it!</a></p>
        </div>
      </Layout>
    );
  }}
  </BrowserOnly>
  );
}