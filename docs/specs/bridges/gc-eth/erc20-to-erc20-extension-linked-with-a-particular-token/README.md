---
description: >-
  This section describes how to set up mediators and UI to bridge a particular
  ERC20/ERC677/ERC827 token to the xDai chain
---

# ERC20-to-ERC20 extension linked with a particular token

Some applications could find useful to deploy a dedicated pair of mediators for their tokens. The main advantage prior to using the mutli-token extension is to have full control on the mediators configuration -- parameters of the bridging process.

This section covers such aspects as:

* the AMB mediators configuration and deployment
* deployment of the UI based on the Burner Wallet 2 plugin to provide a convenient way to transfer tokens through the deployed AMB extension

{% hint style="info" %}
To convert to an ERC20 on xDai without deploying a customized extension or dedicated mediators, see the OmniBridge UI.
{% endhint %}
