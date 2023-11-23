---
description: La sécurité est la priorité principale de l'équipe Gnosis, programme de primes pour bugs
keywords: [sécurité gnosis, primes gnosis, programme de primes pour bugs, immunefi gnosis]
---

# Programme de primes pour bugs

## Programme de primes pour bugs d'Immunefi

Les primes sont un outil important pour tester et améliorer la sécurité des applications et des contrats. Nous apprécions les hackers et programmeurs compétents au sein de la communauté et croyons en la récompense de ceux qui travaillent pour protéger et renforcer l'écosystème. En partenariat avec [Immunefi](https://immunefi.com/), nous publierons bientôt des primes supplémentaires et invitons la communauté à aider à identifier d'éventuelles exploitations que nous aurions pu manquer.

La sécurité est la priorité n°1 de l'équipe Gnosis. Ce programme de primes n'est pas mis en œuvre en réponse à des exploitations connues. Nous le faisons proactivement pour garantir la sécurité et la solidité de nos applications, ainsi que pour protéger les utilisateurs et leurs fonds.

Il existe deux programmes de primes pour bugs en cours : [prime pour bugs des ponts](https://immunefi.com/bounty/gnosischain/).

Chaque programme de prime pour bugs requiert différents actifs dans son champ d'application et propose des récompenses déterminées par le niveau de menace.

## Prime pour les Ponts (Omnibridge, xDAI Bridge)

### Actifs dans le champ d'application

Tous les bogues de contrats intelligents des ponts de Gnosis Chain incluent ETH-xDAI Omnibridge, xDAI bridge, BSC-xDAI Omnibridge.

| Type                                                                     | Cible                                                                           |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Contrat intelligent - contrat de pont DAI-xDAI sur l'Ethereum Mainnet    | https://etherscan.io/address/0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016          |
| Contrat intelligent - contrat OmniBridge DAI-xDAI sur la chaîne Gnosis   | https://gnosis.blockscout.com/address/0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6 |
| Contrat intelligent - contrat OmniBridge ETH-xDAI sur l'Ethereum Mainnet  | https://etherscan.io/address/0x88ad09518695c6c3712AC10a214bE5109a655671          |
| Contrat intelligent - contrat OmniBridge ETH-xDAI sur la chaîne Gnosis   | https://gnosis.blockscout.com/address/0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d |
| Contrat intelligent - contrat OmniBridge BSC-xDAI sur la Binance Smart Chain | https://bscscan.com/address/0xf0b456250dc9990662a6f25808cc74a6d1131ea9        |
| Contrat intelligent - contrat OmniBridge BSC-xDAI sur la chaîne Gnosis   | https://gnosis.blockscout.com/address/0x59447362798334d3485c64D1e4870Fde2DDC0d75 |
|                                                                          |                                                                                  |

### Récompense par niveau de menace

La quantité de récompenses attribuées est basée sur le [Système de classification de gravité des vulnérabilités d'Immunefi V2.2](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2).

Tous les rapports de bogues de contrats intelligents doivent être accompagnés d'une preuve de concept (PoC) ayant un effet final sur un actif concerné pour être considérés pour une récompense.

Seuls les impacts suivants des contrats intelligents sont acceptés dans le cadre de ce programme de primes pour bugs :

| Impact du contrat intelligent | Récompense           |
| ---------------------------- | -------------------  |
| Critique\*                    | Jusqu'à 2 000 000 USD |
| Élevé                         | 10 000 USD          |
| Moyen                         | 1 000 USD           |

\*Toutes les vulnérabilités critiques de contrats intelligents sont en outre plafonnées à 10 % des dommages économiques, en tenant principalement compte des fonds en jeu. Cependant, il y a une récompense minimale de **50 000 USD**.

Les paiements sont traités directement par l'équipe de Gnosis Chain et sont libellés en USD. Cependant, les paiements sont effectués en USDT pour les montants jusqu'à 100 000 USD. Toutes les autres récompenses sont payées en STAKE.

### Hors de portée et règles

**Les vulnérabilités suivantes sont exclues des récompenses pour ce programme de primes pour bugs :**

- Attaques que le rapporteur a déjà exploitées, entraînant des dommages
- Attaques nécessitant l'accès à des clés/identifiants divulgués
- Attaques nécessitant l'accès à des adresses privilégiées (gouvernance, stratégiste)
- Données incorrectes fournies par des oracles tiers
  - Non pour exclure les attaques de manipulation d'oracle/flash loan
- Attaques basiques de gouvernance économique (par exemple, attaque de 51 %)
- Manque de liquidité
- Critiques de bonnes pratiques
- Attaques de Sybil

**Les activités suivantes sont interdites par le programme de primes pour bugs :**

- Tout test avec des contrats mainnet ou publics ; tous les tests doivent être effectués sur des testnets privés
- Tout test avec des oracles de prix ou des contrats intelligents tiers
- Tentative de phishing ou d'autres attaques d'ingénierie sociale contre nos employés et/ou clients
- Tout test avec des systèmes et applications tiers (par exemple, extensions de navigateur) ainsi que des sites web (par exemple, fournisseurs SSO, réseaux publicitaires)
- Toute attaque de déni de service
- Test automatisé de services qui génère d'importantes quantités de trafic
- Divulgation publique d'une vulnérabilité non corrigée dans une prime sous embargo

Veuillez visiter la [page de primes Immunefi](https://immunefi.com/bounty/gnosischain/) pour plus de détails.

Plus d'infos -> [https://medium.com/immunefi/xdai-stake-hosts-2-000-000-bug-bounty-on-immunefi-3760e0687616](https://medium.com/immunefi/xdai-stake-hosts-2-000-000-bug-bounty-on-immunefi-3760e0687616)

## À venir

- [Soumettre un bogue](https://bugs.immunefi.com/)
- Des questions sur le programme ? Contactez-nous dans notre [Discord](https://discord.gg/gnosischain) !

## FAQ

1. Le programme de primes pour bugs est-il limité dans le temps ?  
   Non.
2. Comment soumettre un bogue sur Immunefi ?  
   https://medium.com/immunefi/a-hackers-guide-to-submitting-bugs-on-immunefi-1e6b7ada71a9
