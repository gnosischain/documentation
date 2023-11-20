# FAQ (Foires Aux Questions)

## Informatif

1. Où puis-je acheter xDai ?

   [https://buyxdai.com/](https://buyxdai.com/)

2. Où puis-je relier mes jetons à Gnosis Chain ?

   Entre Ethereum et Gnosis Chain : Pour DAI/xDAI : [https://bridge.xdaichain.com/](https://bridge.xdaichain.com/) ; Pour ERC20 : [https://omni.xdaichain.com/](https://omni.xdaichain.com/)
   Plus de chaînes et d'options : [https://jumper.exchange/](https://jumper.exchange/) ; autres ponts tiers : [https://docs.gnosischain.com/bridges/third-party](https://docs.gnosischain.com/bridges/third-party)

   Pour relier AgEUR : [https://app.angle.money/bridges-agEUR](https://app.angle.money/bridges-agEUR)

3. Qu'est-ce que le robinet Gnosis ?

   Le robinet xDAI de la chaîne Gnosis distribue du xDAI aux nouveaux utilisateurs afin qu'ils aient suffisamment de gaz pour effectuer quelques transactions et interagir avec les applications sur Gnosis Chain : [https://www.gnosisfaucet.com/](https://www.gnosisfaucet.com/)

4. Où puis-je mettre en jeu mon GNO ?

   Actuellement, vous pouvez mettre en jeu votre GNO sur [Stakewise.io](https://stakewise.io/). Veuillez noter que votre portefeuille doit être dirigé vers le réseau Gnosis Chain avec vos jetons GNO déjà reliés à Gnosis.

5. Qu'est-ce que le sGNO ?

   Lorsque vous mettez en jeu votre GNO sur Stakewise, vous recevez du sGNO.

6. Qu'est-ce que le mGNO ?

   Pour créer un environnement ETH miroir plus précis, un minimum de 32 jetons est utilisé à des fins de mise en jeu sur la Gnosis Beacon Chain. Le token mGNO est un méta-token similaire à un token enveloppé créé à cette fin. Lors des dépôts, 1 GNO est automatiquement converti en 32 mGNO.

7. Qu'est-ce que le LGNO ?

   Cela signifie locked GNO (GNO verrouillé). Le contrat LGNO était un programme d'incitation pour la communauté Gnosis afin de verrouiller leur GNO en échange de vCOW. Pour en savoir plus, veuillez visiter ce fil de discussion de Stefan George - [https://twitter.com/StefanDGeorge/status/1488924732191907849](https://twitter.com/StefanDGeorge/status/1488924732191907849)

8. Qu'est-ce que d14n.info ?

   [d14n.info](https://www.d14n.info/) est un tableau de bord en temps réel qui mesure la décentralisation de la Gnosis Chain et des réseaux Ethereum. Nous utilisons le coefficient de Nakamoto comme mesure quantitative principale à travers plusieurs dimensions du réseau.
   Vous pouvez également consulter [Gnosis Metrics](https://www.gnosismetrics.com/#overview)

9. Quels ponts natifs Gnosis existe-t-il ?

   [xDAI & OmniBridge](https://docs.gnosischain.com/bridges/)

10. Quels DAO fonctionnent sur la Gnosis Chain ?

    [https://www.daosongnosis.com/](https://www.daosongnosis.com/)

11. Quels portefeuilles puis-je utiliser sur la Gnosis Chain ?

    [https://www.gnosiswallets.com/](https://www.gnosiswallets.com/)

12. Comment puis-je connecter mon portefeuille à la Gnosis Chain ?

    Cliquez sur 'Ajouter à Metamask' [ici](https://docs.gnosischain.com/about/networks/mainnet) ou consultez d'autres options sur [https://docs.gnosischain.com/tools/wallets/](https://docs.gnosischain.com/tools/wallets/)

13. J'étais en train de mettre en jeu xdai sur le site d'easystaking xdai et ce n'est plus actif. Comment puis-je accéder à mon xdai ?

    Cela fait un certain temps que cela ne fonctionne plus en raison de l'ancienne équipe qui gérait xdai et qui ne le maintient plus. Vous devrez utiliser l'explorateur de blocs pour interagir avec les contrats sans l'interface utilisateur afin de pouvoir le retirer.

    Voici les étapes à suivre :

    [https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#readProxyContract](https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#readProxyContract) 11. lastDepositIds Tapez votre adresse qui vous donne un numéro. 3. balances Trouvez vos dépôts. Ils sont numérotés de 0 jusqu'au nombre que vous avez obtenu précédemment. Vérifiez-les tous.
    [https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#writeProxyContract](https://etherscan.io/address/0xecbcd6d7264e3c9eac24c7130ed3cd2b38f5a7ad#writeProxyContract) 7. makeForcedWithdrawal Retirer. Veuillez noter que ce retrait instantané a une commission de 2%

14. J'ai récemment transféré un ERC-1155 dans un coffre-fort. Je me suis rendu compte après coup que gnosis ne supporte pas les 1155. Existe-t-il un moyen de le transférer à nouveau ?

    Vous devez utiliser une "interaction de contrat" sur le coffre-fort lorsque vous cliquez sur "Nouvelle transaction".
    Dans la fenêtre contextuelle, vous saisirez l'adresse du contrat du token ERC-1155 - (Il peut ou non récupérer automatiquement l'ABI, vous devrez peut-être la copier à partir des détails du contrat via gnosis scan)

    Une fois que l'adresse du contrat et l'ABI sont entrées dans la fenêtre contextuelle... il devrait y avoir un menu déroulant des fonctions disponibles pour vous. Vous voulez descendre jusqu'à "safeTransferFrom"

    Lorsque vous sélectionnez cela, vous aurez des invitations à remplir :
    De (adresse) - l'adresse qui détient le token - votre coffre-fort
    À (adresse) - l'adresse de destination pour le token
    Valeur - la quantité de tokens à transférer
    Données - probablement 0x0 si vous ne transférez que les tokens et rien d'autre

    Une fois que vous avez rempli tout cela avec précision et vérifié plusieurs fois... vous pouvez appuyer sur le bouton "Envoyer la transaction".

15. Comment puis-je vérifier la liquidité sur Gnosis Swap ?

    Vous pouvez vérifier la liquidité sur Gnosis Swap en utilisant l'explorateur de blocs ou directement via [https://swap.gnosis.io/](https://swap.gnosis.io/)

16. Où puis-je voir le code source du contrat de staking de Gnosis ?

    Vous pouvez accéder au code source du contrat de staking de Gnosis sur [https://github.com/gnosis/gp-v1-core](https://github.com/gnosis/gp-v1-core)

17. Comment puis-je relier mes jetons Kleros sur Gnosis Chain ?

    Pour relier les tokens Kleros sur Gnosis Chain, vous pouvez utiliser le pont Omni : [https://omni.xdaichain.com/](https://omni.xdaichain.com/)

18. Comment puis-je relier mes jetons Chainlink sur Gnosis Chain ?

    Vous pouvez relier les tokens Chainlink sur Gnosis Chain via le pont Omni : [https://omni.xdaichain.com/](https://omni.xdaichain.com/)

---

Ce document est une tentative de fournir des réponses aux questions fréquemment posées sur Gnosis Chain. Pour des informations plus détaillées, veuillez consulter les liens fournis dans les réponses.
