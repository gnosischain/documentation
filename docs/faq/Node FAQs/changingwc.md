---
title: Changing Withdrawal Credential
---

:::info
**Find this document incomplete? Visit our [Discord channel](https://discord.gg/gnosis) or contact us via [Validator Request form](https://tally.so/r/3y4V1W)!**
:::

:::info
**:bulb: This document is continuously being improved.**
:::

# Changing Withdrawal Credentials

1. **I am trying to change my withdrawal credential from 0x00 to 0x01. I can't seem to be able to connect to my Beacon Node. Is there another way to do it?**

    Be sure to use the right port used by your client. For example the default port for Lighthouse might be 5052, Avado nodes seems to use 5051, etc... If you need more help you can ask on the Discord.

2. **Is there a public URL to generate the offline-preparation.json file for setting up the withdrawal credential?**

    If you have troubles generating the offline-preparation.json file please ask us for help on the Discord, we can share an already generated file if necessary

3. **How can I change withdrawal credentials of an already exited validator?**

    It's not possible as now to change the withdrawal credentials of an already exited validator.

4. **How to change the withdrawal credential on Windows?**

    It's recommended to do it on Linux, even if it's a virtual machine. Ask us for help on the Discord if you need more help.

5. **How can I change my withdrawal credentials from 0x00 to 0x01?**

    You can follow the guide in the [docs](https://docs.gnosischain.com/node/management/withdrawals) which use ethdo. If you run into troubles you can ask us, especially with the offline-preparation step.

6. **Is DappNode going to have a user-friendly UI for changing withdrawal credentials?**

    Currently not, even if Dappnode mentioned working on it in the past. You have to follow the regular [step by step guide](https://docs.gnosischain.com/node/management/withdrawals).

7. **How many times can I change the withdrawal credential?**

    It is a one time process. Once you change your withdrawal credential from 0x00 to 0x01, you cannot change it anymore.

8. **Do I have to make the withdrawal credential change after switching to another client?**

    You can switch to any client you want, the two are unrelated. BLS-to-Execution (withdrawal credential change) is important for you to be able to claim partial withdrawals or a full withdrawal when you exit your validator. While making any client changes, make sure you always have a backup of your keystore files.

9. **Is there any guides on how to change withdrawal credentials easily?**

     You can follow the step by step guide on our [documentation](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential).

10. **Will there be an easy way in the future to convert my withdrawal credential to 0x01?**

    DappNode guys are working on a modified version of Wagyu tool for Gnosis Chain, but there's no precise ETA on that. For now, you can only do so by using ethdo as detailed in our documentation.

11. **Will there be an easy solution to change the withdrawal credentials from old 0x00 to new address format 0x01?**

    For now, the only way to change your withdrawal credential from 0x00 to 0x01 is using ethdo following the [step by step tutorial](https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential) on our docs.
