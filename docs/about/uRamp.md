---
sidebar_label: "uRamp - off ramp and on ramp solution by Gnosis team"
sidebar_position: 4
keywords: [on ramp solutions] 
title: uRamp - Seamlessly move Euros from an IBAN to the blockchain and back
---
import ReactPlayer from 'react-player'

## What is uRamp ?

uRamp offers seamless on and off ramp to users by allowing them to on ramp to ERC20 tokens across EVM chains by sending EUR to their Monerium IBAN. Similarly, it allows users to off ramp from  ERC20 tokens from EVM chains to EUR in their bank account.

The existing user experience in Web3 for on and off ramping between fiat and on chain assets is very clunky and requires users to go through many steps and incur heavy fees with no certainty of when they will receive their fiat in bank account and vice versa. uRamp is been built to provide an easy to use product allowing people to on and offramp between their IBANs and wallets seamlessly by integrating both Monerium and Li.Fi and leveraging their powers of collateralised stablecoin offering, native IBANs, low fees model and cross chain bridging and swapping.

uRamp is supposed to be a simple representation of possibilities of Gnosis Chain when combined with Monerium and Li.Fi .

## How to use uRamp ?

To use uRamp a user needs to have a wallet and a Monerium account (IBAN linked to Gnosis Chain). uRamp takes the user through a Monerium onboarding flow in case the user does not have an existing Monerium account. 

Once connected with both the services the user can choose between Bank to Crypto (On Ramp) or Crypto to Bank (Off Ramp).

Go to https://uramp.gnosis.io/login and follow the steps mentioned or you can follow the video tutorial.

<ReactPlayer playing controls url='/Uramp_demo_V1.1.mp4' />

## Crypto to Bank:

1. Selects a token from the drop down box listing the available tokens in the wallet
2. Specify the amount of token to be off ramped into EUR
3. Specify the bank details including Name, IBAN, BIC and Note (optional)
4. Verify the quote and sign a transaction to execute the transfer 
5. Example: ETH on mainnet to EUR
    1. ETH is swapped for USDC on mainnet by Li.Fi
    2. USDC on mainnet is bridged to USDC on Gnosis Chain by Li.Fi
    3. USDC on Gnosis Chain is swapped to EURe on Gnosis Chain by Li.Fi
    4. EURe on Gnosis Chain is burnt by Monerium
    5. EUR is deposited in specified IBAN by Monerium

## Bank to Crypto:

1. Select the ERC20 token the user wishes to on ramp to 
2. Specify the amount of EUR to be exchanged or ERC20 token required
3. Verify the quote and EUR required for the whole process to function
4. Start the process
5. Send EUR to Monerium IBAN
6. Execute the on chain transaction
7. Example: EUR to ETH on mainnet
    1. Send EUR to Monerium IBAN
    2. Monerium mints EURe to the user wallet on Gnosis Chain
    3. uRamp prompts user to sign Li.Fi transaction (if quote is still valid and balance has increased)
    4. EURe on Gnosis Chain is swapped to USDC on Gnosis Chain by Li.Fi
    5. USDC on Gnosis Chain is bridged to USDC on mainnet by Li.Fi
    6. USDC is swapped for ETH on mainnet by Li.Fi