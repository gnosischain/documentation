---
description: Gnosis Chain deposit contracts
keywords: [gnosis, gnosis contracts, deposi contracts]
---

# Deposit Contracts

The Deposit contracts allow to deposit ERC20 tokens to Gnosis Chain and withdraw them back to Ethereum mainnet.

The Deposit contracts on mainnet and Gnosis Chain are almost identical. However, Gnosis Chain users need to manually call the `claimWithdrawal(address)` or `claimWithdrawals(addresses)` method to withdraw the tokens/rewards back, whereas on Ethereum mainnet that's done automatically.

The main issue is that GNO is an ERC20 token and it must emit `Transfer` events as per [EIP-20](https://eips.ethereum.org/EIPS/eip-20#transfer), which Gnosis Chain cannot do with system transactions at the moment. That's why it's required to call a normal transaction to claim GNO tokens. The alternative would be very complex and diverge from Ethereum on the EL side.

The main withdrawal methods look as follows:

```solidity
/**
  * @dev Claim withdrawal amount for an address
  * @param _address Address to transfer withdrawable tokens
  */
function claimWithdrawal(address _address) public {
    uint256 amount = withdrawableAmount[_address];
    if (amount > 0) {
        withdrawableAmount[_address] = 0;
        stake_token.safeTransfer(_address, amount);
    }
}
/**
  * @dev Claim withdrawal amounts for an array of addresses
  * @param _addresses Addresses to transfer withdrawable tokens
  */
function claimWithdrawals(address[] calldata _addresses) external {
    for (uint256 i = 0; i < _addresses.length; ++i) {
        claimWithdrawal(_addresses[i]);
    }
}
```

You can find a full list of contract differences on Github:
- [Gnosis Chain](https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol#L237-L257)
- [Shapella](https://github.com/gnosischain/deposit-contract/compare/c7217fccac3049901f78547f4024127fa1dcdcd4..master)