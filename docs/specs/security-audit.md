---
description: Audits of Gnosis Chain and Related Infrastructure
---

# Security Audits

:::info
Most Audits were completed prior to the rebrand from xDai Chain to Gnosis Chain, and will refer to the xDai chain as well as the STAKE token, the previous governance token of the chain (the chain is in the process of transferring to GNO-only security).
:::

## Stake Beacon Chain by ChainSecurity <a href="#omnibridge-audit-by-chainsecurity" id="omnibridge-audit-by-chainsecurity"></a>

**Completed:** October 1, 2021

**Conclusion:** During the assessment one critical issue was found and fixed following the intermediate report. The remaining issues were of low severity and were fixed accordingly. The communication with the team was very responsive.

**Audit Report**: [https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/](https://chainsecurity.com/security-audit/poa-network-stake-beacon-chain-sbc-deposit/)

## OmniBridge v6.0 Smart Contracts Audit by ChainSecurity <a href="#omnibridge-audit-by-chainsecurity" id="omnibridge-audit-by-chainsecurity"></a>

**Completed:** September 7, 2021

**Conclusion**: The assessment uncovered a number of potential issues which were resolved by the team. Two additional issues were acknowledged and largely mitigated by the team, and the original severities are no longer applicable. These upgrades to the Omnibridge provide additional functionality which will be implemented in the future.

* **Contracts:** [https://github.com/poanetwork/omnibridge](https://github.com/poanetwork/omnibridge)
* **Audit Report**

{@file: /files/ChainSecurity_POA_Network_Omnibridge_Version_6_0_audit.pdf}

## POSDAO Audit by ChainSecurity <a href="#omnibridge-audit-by-chainsecurity" id="omnibridge-audit-by-chainsecurity"></a>

**Completed:** June 25, 2021

**Conclusion**: The assessment uncovered several issues which were addressed or acknowledged by the team. No "critical" severity security flaws preventing continued usage or launch of contracts in future contexts were found. 0 Critical Issues, 1 High Risk Issue Accepted, 4 Medium Issues Accepted/Acknowledged, 4 Low Risk Issues Accepted/Acknowledged.

* **Contracts:** [https://github.com/poanetwork/posdao-contracts](https://github.com/poanetwork/posdao-contracts)
* **Audit Report in repo**: [https://github.com/poanetwork/posdao-contracts/blob/master/audit/ChainSecurity/report.pdf](https://github.com/poanetwork/posdao-contracts/blob/master/audit/ChainSecurity/report.pdf)

:::success more info
[https://chainsecurity.com/security-audit/poa-network-posdao/](https://chainsecurity.com/security-audit/poa-network-posdao/)
:::

## OmniBridge Audit by ChainSecurity <a href="#omnibridge-audit-by-chainsecurity" id="omnibridge-audit-by-chainsecurity"></a>

**Completed:** April 27, 2021

**Conclusion**: 0 Critical or High Risk Issues, 2 Medium Issues Accepted, 3 Low Risk Issues Accepted/Acknowledged

**Contracts:** [https://github.com/poanetwork/omnibridge](https://github.com/poanetwork/omnibridge)​

:::success more info
[https://chainsecurity.com/security-audit/poa-network-omnibridge/](https://chainsecurity.com/security-audit/poa-network-omnibridge/)
:::

## TokenBridge Audit by Quantstamp (covers OmniBridge)

**Completed:** November 6, 2020

**Conclusion**: No high and medium risk issues found, all low risk issues addressed.

**Contracts:** Revised in version 5.5.0-rc0 to address audit. [https://github.com/poanetwork/tokenbridge-contracts/releases/tag/5.5.0-rc0](https://github.com/poanetwork/tokenbridge-contracts/releases/tag/5.5.0-rc0)

:::success [Quantstamp Security Audit PDF](https://github.com/poanetwork/tokenbridge/blob/master/audit/quantstamp/POA-Network-TokenBridge-contracts-5.4.1-security-assessment-report.pdf)
:::

## EasyStaking Audit by Quantstamp

**Completed:** August 3, 2020

**Conclusion:** All high/medium/low risk issues resolved.

{@file: /files/XDai Easy Staking - Final Report.pdf}

## TokenBridge Audit by Quantstamp (covers xDai bridge functionality)

**Completed:** January 8, 2020

**Conclusion**: All high risk issues resolved and low risk issues addressed. [More information available in this post](https://forum.poa.network/t/quantstamp-security-audit-for-tokenbridge-contracts-completed/3233).

**Contracts:** Revised in version 3.3.0 to address audit. [https://github.com/poanetwork/tokenbridge-contracts/releases/tag/3.3.0](https://github.com/poanetwork/tokenbridge-contracts/releases/tag/3.3.0)

:::success [Quantstamp TokenBridge Security Audit PDF](https://github.com/poanetwork/tokenbridge/blob/73d500210546e2959536dc569f1aec5752077225/audit/quantstamp/POA-Network-Token-bridge-security-assessment-report.pdf)
:::

## STAKE Token Distribution by Quantstamp

#### **STAKE Token Distribution Audit**

**Completed:** June 24, 2020\
\
**Conclusion**: No High or Medium risks, all low and informational risks addressed

:::success [Quantstamp STAKE Security Audit PDF](https://github.com/xdaichain/stake-token/blob/master/audit/Quantstamp/xDAI%20STAKE%20Token%20Distribution%20-%20Additional%20Report.pdf)
:::

#### **DPOS Audit**

In the original audit,  the working name for the staking token was DPOS. This changed to STAKE.

**DPOS Audit Completed:** September 5, 2019\
\
**Conclusion**: All risks resolved. \
\
**Contracts:** Version 1.0.1 addressed items in audit.\
[https://github.com/xdaichain/stake-token/releases/tag/v1.0.1](https://github.com/xdaichain/stake-token/releases/tag/v1.0.1)

:::success [Quantstamp DPOS Security Audit PDF](https://github.com/xdaichain/stake-token/blob/master/audit/Quantstamp/DPOS%20token-Audit%20Final%20Report.pdf)
:::

#### **STAKE Legal Opinion**

The token constitutes a VFA in terms of Maltese law. Please contact [team@xdaichain.com ](mailto:team@xdaichain.com)to request access to the document.

## POSDAO Initial Security Audit by PepperSec

**Completed**: August 2019

**Conclusion**: All issues fixed or addressed. Due to scalability concerns, teams created a new methodology to accumulate and later “pull” their stakes and rewards instead of the “push” strategy as implemented in the audited version of the contracts.

**Contracts:** Version 0.1.0 addresses issues present in audit. [https://github.com/poanetwork/posdao-contracts/releases/tag/v0.1.0](https://github.com/poanetwork/posdao-contracts/releases/tag/v0.1.0)

:::success [POSDAO v1 Consensus Contracts audit](https://forum.poa.network/t/security-audits-of-posdao-consensus-contracts/2921)
:::