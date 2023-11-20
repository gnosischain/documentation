---
description: La sécurité est la priorité principale de l'équipe Gnosis, programme de primes pour bugs
keywords: [sécurité gnosis, primes gnosis, programme de primes pour bugs, immunefi gnosis]
---

# Programme de primes pour bugs

## Programme de primes pour bugs d'Immunefi

Les primes sont un outil important pour tester et améliorer la sécurité des applications et des contrats. Nous apprécions les hackers et programmeurs compétents au sein de la communauté et croyons en la récompense de ceux qui travaillent pour protéger et renforcer l'écosystème. En partenariat avec [Immunefi](https://immunefi.com/), nous publierons bientôt des primes supplémentaires et invitons la communauté à aider à identifier d'éventuelles exploitations que nous aurions pu manquer.

La sécurité est la priorité n°1 de l'équipe Gnosis. Ce programme de primes n'est pas mis en œuvre en réponse à des exploitations connues. Nous le faisons proactivement pour garantir la sécurité et la solidité de nos applications, ainsi que pour protéger les utilisateurs et leurs fonds.

Il existe deux programmes de primes pour bugs en cours : [prime pour bugs des ponts](https://immunefi.com/bounty/gnosischain/) et [prime pour bugs web/app](https://immunefi.com/bounty/gnosischainwebapp/).

Chaque programme de prime pour bugs requiert différents actifs dans son champ d'application et propose des récompenses déterminées par le niveau de menace.

## Prime pour bugs web/app

### Actifs dans le champ d'application

Les actifs dans le champ d'application comprennent la documentation de Gnosis Chain, le forum, le lock, RPC, l'explorateur de la beacon chain et l'explorateur de blocs.

Seuls les actifs suivants dans le tableau sont considérés. Si un impact peut être causé à tout autre actif géré par Gnosis qui ne figure pas dans ce tableau mais pour lequel l'impact est dans la section Impacts dans le champ d'application ci-dessous, vous êtes encouragé à le soumettre pour considération par le projet. Cela s'applique uniquement pour les impacts critiques.

Pour des actifs spécifiques, seuls des rapports de bugs de niveau de menace spécifique peuvent être soumis.

| Type                                                    | Cible                               | Uniquement Haute/Critique gravité |
| ------------------------------------------------------- | ----------------------------------- | ------------------------------- |
| Sites web et applications - Doc (Gnosis Chain)          | http://docs.gnosis.io               | ✅ Tous les niveaux              |
| Sites web et applications - Forum (Gnosis Chain)        | http://forum.gnosis.io              | ⚠️Haute                          |
| Sites web et applications - Lock (Gnosis Chain)         | http://lock.gnosis.io               | ✅ Tous les niveaux              |
| Sites web et applications - RPC GBC (Chiado Testnet)    | http://rpc-gbc.chiadochain.net      | ✅ Tous les niveaux              |
| Sites web et applications - RPC (Chiado Testnet)        | http://rpc.chiadochain.net          | ✅ Tous les niveaux              |
| Sites web et applications - RPC (Gnosis Chain)          | http://rpc.gnosischain.com          | ✅ Tous les niveaux              |
| Sites web et applications - RPC GBC (Gnosis Chain)      | http://rpc-gbc.gnosischain.com      | ✅ Tous les niveaux              |
| Sites web et applications - RPC (Bicocca)               | http://rpc.bicoccachain.net         | ✅ Tous les niveaux              |
| Sites web et applications - Beacon (Chiado Testnet)     | http://beacon.chiadochain.net       | 🆘 Critique                      |
| Sites web et applications - Blockscout (Chiado Testnet) | http://blockscout.chiadochain.net   | 🆘 Critique                      |
| Sites web et applications - Checkpoint (Gnosis Chain)   | http://checkpoint.gnosischain.com   | 🆘 Critique                      |
| Sites web et applications - Beacon (Gnosis Chain)       | http://beacon.gnosischain.com       | 🆘 Critique                      |
| Sites web et applications - Explorateur (Bicocca)       | http://blockscout.bicoccachain.net  | 🆘 Critique                      |

### Récompense par niveau de menace

Les récompenses sont distribuées selon l'impact de la vulnérabilité basé sur le [Système de classification de gravité des vulnérabilités Immunefi v2.2.](https://immunefi.com/immunefi-vulnerability-severity-classification-system-v2-2/)

| Impact     | Récompense                  |
| ---------- | --------------------------- |
| Critique\* | De 15 000 USD à 50 000 USD  |
| Haute\*    | De 10 000 USD à 15 000 USD  |
| Moyenne    | 5 000 USD                   |
| Basse      | 1 500 USD                   |

\*Toutes les vulnérabilités web/app critiques et élevées sont ajustées en fonction des critères internes établis par l'équipe, tenant compte de l'exploitabilité du bug, de l'impact qu'il cause, de la qualité du rapport (à la discrétion de l'équipe) et de la probabilité que la vulnérabilité se présente, ce qui est particulièrement pris en compte pour les rapports de bugs nécessitant plusieurs conditions à remplir qui ne sont actuellement pas en place. Cependant, il y a une récompense minimale de 10 000 USD pour les vulnérabilités web/app à impact élevé et de 15 000 USD pour les vulnérabilités web/app critiques. Les récompenses seront fournies à la valeur équitable déterminée par l'équipe en fonction de ces conditions, en supposant que le rapport de bug est dans le champ d'application du programme de primes pour bugs.

Tous les rapports de bugs web/app doivent être accompagnés d'une preuve de concept (PoC) ayant un effet final impactant un actif dans le champ d'application pour être considérés pour une récompense.

Seuls les impacts dans le champ d'application suivants sont acceptés dans le cadre de ce programme de primes pour bugs.

| Impact   | Champ d'application                                                                                                                                                                                                                                             |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Critique | Exécuter des commandes système arbitraires                                                                                                                                                                                                                       |
| Critique | Récupérer des données/fichiers sensibles à partir d'un serveur en cours d'exécution tel que /etc/shadow, des mots de passe de base de données et des clés de blockchain (cela n'inclut pas les variables d'environnement non sensibles, le code source ou les noms d'utilisateur) |
| Critique | Mettre hors service l'application/le site web                                                                                                                                                                                                                    |
| Critique | Prendre des actions d'authentification modifiant l'état (avec ou sans interaction avec l'état de la blockchain) au nom d'autres utilisateurs sans aucune interaction de cet utilisateur, telles que changer les informations d'inscription, commenter, voter, effectuer des échanges, des retraits, etc. |
| Critique | Vol direct des fonds des utilisateurs                                                                                                                                                                                                                            |
| Critique | Interactions malveillantes avec un portefeuille déjà connecté telles que la modification des arguments ou des paramètres de transaction, la substitution d'adresses de contrat, la soumission de transactions malveillantes                                                                                                       |
| Critique | Injection de HTML malveillant ou XSS via les métadonnées NFT                                                                                                                                                                                                     |
| Haute    | Injection/modification du contenu statique sur l'application cible sans Javascript (Persistant) tel qu'une injection HTML sans Javascript, le remplacement de texte existant par un texte arbitraire, des téléchargements de fichiers arbitraires, etc.                |
| Haute    | Changer les détails sensibles d'autres utilisateurs (y compris la modification du stockage local du navigateur) sans interaction avec un portefeuille déjà connecté et avec jusqu'à un clic d'interaction utilisateur, tel que l'e-mail ou le mot de passe de la victime, etc.                                                   |
| Haute    | Capture de sous-domaine avec interaction de portefeuille déjà connecté                                                                                                                                                                                          |
| Moyenne  | Changer les détails non sensibles d'autres utilisateurs (y compris la modification du stockage local du navigateur) sans interaction avec un portefeuille déjà connecté et avec jusqu'à un clic d'interaction utilisateur, tel que changer le nom/prénom de l'utilisateur ou activer/désactiver les notifications |
| Moyenne  | Injection/modification du contenu statique sur l'application cible sans Javascript (Reflected) tel qu'une injection HTML réfléchie ou le chargement de données de site externe                                                                                                                                                  |
| Moyenne  | Redirection des utilisateurs vers des sites Web malveillants (Redirection ouverte)                                                                                                                                                                              |
| Basse    | Changer les détails d'autres utilisateurs (y compris la modification du stockage local du navigateur) sans interaction avec un portefeuille déjà connecté et avec une interaction significative de l'utilisateur, comme le chargement en iframing menant à la modification de l'état backend/navigateur (démontrer l'impact avec PoC) |
| Basse    | Tout impact impliquant une CVE publiquement publiée (démontrer l'impact avec PoC)                                                                                                                                                                               |
| Basse    | Désactiver temporairement l'accès de l'utilisateur au site cible, tel que bloquer la victime de la connexion, le cookie bombing, etc.                                                                                                                                 |

### Hors champ d'application et règles

**Les vulnérabilités suivantes sont exclues des récompenses pour ce programme de primes pour bugs :**

- Attaques que le rapporteur a déjà exploitées lui-même, entraînant des dommages
- Attaques nécessitant l'accès à des clés/identifiants divulgués
- Attaques nécessitant l'accès à des adresses privilégiées (gouvernance, stratège)
- Données incorrectes fournies par des oracles tiers
  - Sans exclure la manipulation des oracles/attaques de flash loan
- Attaques de base de gouvernance économique (par exemple, attaque des 51 %)
- Manque de liquidité
- Critiques de bonnes pratiques
- Attaques de type Sybil

**Les activités suivantes sont interdites par le programme de primes pour bugs :**

- Tout test avec des contrats mainnet ou publics ; tous les tests doivent être effectués sur des testnets privés
- Tout test avec des oracles de prix ou des contrats intelligents tiers
- Tenter des opérations de phishing ou d'autres attaques d'ingénierie sociale contre nos employés et/ou clients
- Tout test avec des systèmes et des applications tiers (par exemple, extensions de navigateur) ainsi que des sites web (par exemple, fournisseurs SSO, réseaux publicitaires)
- Toute attaque de déni de service
- Tests automatisés de services générant d'importantes quantités de trafic
- Divulgation publique d'une vulnérabilité non corrigée dans une prime sous embargo

Veuillez visiter la [page de primes Immunefi](https://immunefi.com/bounty/gnosischainwebapp/) pour plus de détails.

Tweet : https://twitter.com/gnosischain/status/1651285327125053440

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
