---
title: Audits
sidebar_position: 8
description: The OmniBridge and xDai Bridge have undergone multiple independent security audits and assessments.
keywords: [omnibridge audit, xdai bridge audit, security audit]
---

The OmniBridge and xDai Bridge have undergone multiple independent security audits and assessments. We have engaged in the auditing process after introducing major functionality, and have acknowledged and/or fixed all issues found during these audits. Audit results are presented starting with the most recent.

## Hashi integration by Omega, g0, Least Authority

The scope for auditing includes the following repos:

1. https://github.com/gnosis/hashi except for GiriGiriBashi.sol
2. AMB: https://github.com/crosschain-alliance/tokenbridge-contracts/tree/feat/hashi-integration-amb
3. XDAI: https://github.com/crosschain-alliance/tokenbridge-contracts/tree/feat/hashi-integration-xdai-bridge

### Omega

**Completed**: June 27, 2024
**Conclusion**: 1 high severity issues, 4 low severity issues, 10 info issues. All issues has been resolved or acknowledged.
**Audit Report**:[Omega-Gnosis-Hashi Final Audit Report](../../static/files/Omega-Gnosis-Hashi%20Final%20Report.pdf)

### g0

(intermediate reports, final pending)

**Completed**: June 28, 2024
**Conclusion**: 1 critical issue, 3 medium issues, 4 minor issues, 4 note issues. All issues has been resolved or acknowledged.
**Audit Report**:[g0-Gnosis-Hashi Audit Report](../../static/files//g0%20-%20Gnosis%20Hashi%20Audit%20Report.pdf)

### Least Authority

(intermediate reports, final pending)

**Completed**: June 12, 2024
**Conclusion**: 4 issues, 13 suggestions. All issues has been resolved or acknowledged.
**Audit Report**:[Least Authority-Gnosis-Hashi Audit Report](../../static/files/Least%20Authority-Gnosis%20Hash%20Audit%20Report.pdf)

## xDAI bridge upgrade Audit by Omega and ChainSafe

### Omega

**Completed**: August 31, 2023  
**Conclusion**: 2 medium issues, 5 low risk issues, 3 info issues. All issues has been resolved.  
**Contracts**: https://github.com/gnosischain/tokenbridge-contracts/tree/xdaibridge-upgrade-sdai  
**Audit Report**: [Omega Gnosis Bridge Final Audit Report](../../static/files/Omega%20-%20Gnosis%20Bridge%20-%20final%20report.pdf)

### ChainSafe

**Completed**: August 31, 2023  
**Conclusion**: 2 minor issues, 2 optimizational issues.  
**Contracts**: https://github.com/gnosischain/tokenbridge-contracts/tree/xdaibridge-upgrade-sdai  
**Audit Report**: [ChainSafe Audit Report](../../static/files/dai-xdai-08-23.pdf)

**Reference**: [Savings xDAI](../bridges/Token%20Bridge/xdai-bridge.md#savings-xdai)

## OmniBridge v6.0 Smart Contracts Audit by ChainSecurity

**Completed**: September 7, 2021  
**Conclusion**: 0 Critical Risk Issues, 1 High Risk Issue Mitigated, 1 Medium Issue Mitigated, 2 Corrected, 13 Low Risk Issues all Acknowledged and/or Corrected.  
**Contracts**: https://github.com/poanetwork/omnibridge  
**Audit Report**: [ChainSecurity v6.0 Audit](/files/ChainSecurity_POA_Network_Omnibridge_Version_6_0_audit.pdf)

## OmniBridge Audit by ChainSecurity

**Completed**: April 27, 2021  
**Conclusion**: 0 Critical or High Risk Issues, 2 Medium Issues Accepted, 3 Low Risk Issues Accepted/Acknowledged  
**Contracts**: https://github.com/poanetwork/omnibridge  
**Audit Report**: [Chainsecurity OmniBridge Audit](https://chainsecurity.com/security-audit/poa-network-omnibridge/)

## TokenBridge Audit by Quantstamp (covers OmniBridge)

**Completed**: November 6, 2020  
**Conclusion**: No high and medium risk issues found, all low risk issues addressed.  
**Contracts**: Revised in version 5.5.0-rc0 to address audit. https://github.com/poanetwork/tokenbridge-contracts/releases/tag/5.5.0-rc0  
**Audit Report**: [TokenBridge Audit by Quantstamp - OmniBridge](https://github.com/omni/tokenbridge/blob/master/audit/quantstamp/POA-Network-TokenBridge-contracts-5.4.1-security-assessment-report.pdf)

## TokenBridge Audit by Quantstamp (covers AMB bridge)

**Completed**: January 8, 2020  
**Conclusion**: : All high risk issues resolved and low risk issues addressed. [More information available in this post](https://forum.poa.network/t/quantstamp-security-audit-for-tokenbridge-contracts-completed/3233).  
**Contracts**: Revised in version 3.3.0 to address audit. https://github.com/poanetwork/tokenbridge-contracts/releases/tag/3.3.0  
**Audit Report**: [TokenBridge Audit by Quantstamp - AMB Bridge](https://github.com/omni/tokenbridge/blob/73d500210546e2959536dc569f1aec5752077225/audit/quantstamp/POA-Network-Token-bridge-security-assessment-report.pdf)

## Smart Contracts Security Analysis by SmartDec

**Completed**: July 2019  
**Conclusion**: All of the issues were addressed, some of them fixed in the latest version of the code.  
**Contracts**: Revised in version 2.3.3 to address audit. https://github.com/poanetwork/tokenbridge-contracts/releases/tag/2.3.3  
**Audit Report**: [SmartDec Security Audit](https://github.com/omni/tokenbridge/blob/73d500210546e2959536dc569f1aec5752077225/audit/smartdec/POA-Network-TokenBridge-Contracts-v2-3-2-Security-Assessment.pdf)

## Initial TokenBridge Audit by [Peppersec](https://peppersec.com/):

**Completed**: October 2018  
**Conclusion**: Rated the overall security level of the system as “High”.  
**Contracts**: Updated to version 2.0.0 to address audit. https://github.com/poanetwork/tokenbridge-contracts/releases/tag/2.0.0  
**Audit Report**: [Peppersec Initial TokenBridge Audit](https://github.com/omni/tokenbridge/blob/73d500210546e2959536dc569f1aec5752077225/audit/peppersec/POA-Network-Token-bridge-security-assessment-report.pdf)
