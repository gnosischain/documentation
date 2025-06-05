---
title: Api3
description: Api3 delivers first-party oracles that pay you — connecting real-world data directly to smart contracts while reclaiming lost value through Oracle Extractable Value (OEV).
keywords: [api3, oracle, data feeds, dapis, price feeds]
---
# Api3
[Api3](https://api3.org/) delivers first-party oracles that pay you.

By connecting real-world data providers directly to smart contracts, Api3 eliminates intermediaries, ensuring unmatched transparency and security. With pioneering mechanisms to recapture Oracle Extractable Value [(OEV)](https://docs.api3.org/dapps/), Api3 empowers dApps with reliable data while minimizing and reclaiming the value they would otherwise leak to external actors. Api3 is redefining the oracle space by elevating oracles from mere data providers to entities that help builders retain the value they create.
Explore the [Api3 Market](https://market.api3.org/gnosis) and start earning.

:::note
You can check out our docs for a quickstart that will take you from start to finish [here](https://docs.api3.org/dapps/quickstart/)
:::

## Using dAPIs - Api3 Datafeeds

[dAPIs](https://docs.api3.org/dapps/quickstart/) are continuously updated streams of off-chain data, such as the latest cryptocurrency prices. They can power various decentralized applications such as DeFi lending, synthetic assets, stablecoins, derivatives, NFTs and more.

The data feeds are continuously updated by first-party oracles using signed data. dApp owners can read the on-chain value of any dAPI in real-time.

Due to being composed of first-party data feeds, dAPIs offer security, transparency, cost-efficiency and scalability in a turn-key package.

Apart from relying on deviation threshold and heartbeat configuration updates, unlike traditional data feeds, OEV Network enables dApps using dAPIs to auction off the right to update the data feeds to searcher bots. Searcher bots can bid for price updates through the OEV Network to update the data feeds. All the OEV proceeds go back to the dApp.

The [Api3 Market](https://market.api3.org/gnosis) enables users to connect to a dAPI and access the associated data feed services.

![img](/img/tools/api3/dapi-main.png)


### Subscribing to dAPIs

The [Api3 Market](https://market.api3.org/gnosis) lets users access dAPIs on both [Gnosis Mainnet](https://market.api3.org/gnosis) and [Testnet](https://market.api3.org/gnosis-testnet).

#### Exploring, selecting and configuring your dAPI

The [Api3 Market](https://market.api3.org/gnosis) provides a list of all the dAPIs available across multiple chains including testnets. You can filter the list by mainnet or testnet chains. After selecting the chain, you can now search for a specific dAPI by name. Once selected, you will land on the details page (eg ETH/USD on Gnosis Testnet) where you can find more information about the dAPI. 

The current supported configurations for dAPIs are:


| Deviation | Heartbeat |
| --------- | --------- |
| 0.25%     | 24 hours  |
| 0.5%      | 24 hours  |
| 1%        | 24 hours  |
| 5%        | 24 hours  |

![img](/img/tools/api3/dapi-1.png)

#### Activating your price feed

:::note
Note

If a dAPI is already activated, make sure to check the expiration date and update parameters. You can update the parameters and extend the subscription by purchasing a new configuration.
:::

After selecting the dAPI and the configuration, you will be presented with an option to purchase the dAPI and activate it. Make sure to check the time and amount of the subscription. If everything looks good, click on Purchase.

![img](/img/tools/api3/dapi-2.png)

You can then connect your wallet and confirm the transaction. Once it's confirmed, you will be able to see the updated configuration for the dAPI.

#### Getting the proxy address

Once you are done configuring and activating the dAPI, you can now integrate it. To do so, click on the **Integrate** button on the dAPI details page.

![img](/img/tools/api3/dapi-5.png)

You can now see the deployed proxy contract address. You can now use this to read from the configured dAPI.

### Reading from a dAPI (Price Feed)
Here's an example of a basic contract that reads from a dAPI.
```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts@4.9.5/access/Ownable.sol";
import "@api3/contracts/api3-server-v1/proxies/interfaces/IProxy.sol";
contract DataFeedReaderExample is Ownable {
    // The proxy contract address obtained from the API3 Market UI.
    address public proxyAddress;
    // Updating the proxy contract address is a security-critical
    // action. In this example, only the owner is allowed to do so.
    function setProxyAddress(address _proxyAddress) public onlyOwner {
        proxyAddress = _proxyAddress;
    }
    function readDataFeed()
        external
        view
        returns (int224 value, uint256 timestamp)
    {
        // Use the IProxy interface to read a dAPI via its
        // proxy contract .
        (value, timestamp) = IProxy(proxyAddress).read();
        // If you have any assumptions about `value` and `timestamp`,
        // make sure to validate them after reading from the proxy.
    }
}
```

- `setProxyAddress()` is used to set the address of the dAPI Proxy Contract.

- `readDataFeed()` is a view function that returns the latest price of the set dAPI.

### Try deploying it through Remix! 
[Remix link here](https://remix.ethereum.org/#url=https://github.com/api3-ecosystem/remix-contracts/blob/master/contracts/DapiReader.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js)




- [API3 Docs](https://docs.api3.org/)
- [API3 Market](https://market.api3.org/gnosis)
- [Github](https://github.com/api3dao/)
- [Medium](https://medium.com/api3)
- [YouTube](https://www.youtube.com/API3DAO)