---
title: Monitoring Validators
---

After setting up your validators, ensuring they are running and, most importantly, performing correctly is essential.

## Tool

The [bootnode.dev](https://www.bootnode.dev/) team has created a [Telegram bot](https://t.me/gbc_validators_bot) to assist you. Anyone running validators can set it up by just providing withdrawal address(es). The Bot will retrieve all the validators for you. Once registered, the bot will update you on your validators' performance and alert you if any issue occurs.

### Continuously updated information on

- The number of validators you're running and their statuses (active, inactive, slashed, exited).
- The total effective balance of all your validators, combined.
- Validator’s overall performance(daily, weekly, and monthly) based on the last 100 attestations.
- Rewards earned in GNO (daily, weekly, and monthly).
- The total amount of rewards you can claim.
- Additionally, the Bot provides subsidized rewards claims, sponsored by [bootnode.dev](https://www.bootnode.dev/).

### Immediate alert when

You'll receive notifications in the following situations:

- If a validator misses more than 5 attestations consecutively.
- If the overall performance falls below 90%.
- If a validator's status changes from active to inactive, or vice versa.

:::note
This Bot is compatible with all consensus and execution clients.
:::
