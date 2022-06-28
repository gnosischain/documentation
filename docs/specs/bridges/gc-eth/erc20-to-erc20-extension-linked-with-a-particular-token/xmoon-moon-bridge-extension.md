# xMOON-MOON bridge extension

The xMOON-MOON bridge extension of the ETH-xDai Arbitrary Message Bridge is a pair of mediator contracts allowing the user to transfer [xMOON tokens](https://docs.tokenbridge.net/rinkeby-xdai-amb-bridge/moon-bridge-extension) (originally bridged from the Rinkeby testnet) to the Ethereum Mainnet and back.

{% tabs %}
{% tab title="xDai chain" %}
* Mediator contract: [`0xF75C28fE07E0647B05160288F172ad27CccD8f30`](https://blockscout.com/xdai/mainnet/address/0xF75C28fE07E0647B05160288F172ad27CccD8f30)
* Token contracts:  [`0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A`](https://blockscout.com/xdai/mainnet/address/0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A)
{% endtab %}

{% tab title="Ethereum Mainnet" %}
* Mediator contract: [`0xE7228B4EBAD37Ba031a8b63473727f991e262dCd`](https://etherscan.io/address/0xE7228B4EBAD37Ba031a8b63473727f991e262dCd)
* Token contract: [`0xe1cA72ff3434B131765c62Cbcbc26060F7Aba03D`](https://etherscan.io/address/0xe1cA72ff3434B131765c62Cbcbc26060F7Aba03D)
{% endtab %}
{% endtabs %}

Anyone who owns [xMOON tokens](https://blockscout.com/xdai/mainnet/tokens/0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A/token-transfers) can use the bridge. xMOONs are locked in the bridge contract on the xDai chain and the same amount of [MOONs](https://etherscan.io/address/0xe1cA72ff3434B131765c62Cbcbc26060F7Aba03D) is minted on the Ethereum Mainnet. The reverse operation burns MOONs tokens on the Ethereum Mainnet chain and unlocks xMOONs on the xDai chain.

The main interface to transfer tokens is [the OmniBridge UI](https://omni.xdaichain.com).

![](</img/specs/bridges/image-129-1-1.png>)
