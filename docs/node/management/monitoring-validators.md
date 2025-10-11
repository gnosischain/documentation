# Monitoring Validators

After setting up your validators, it’s essential to ensure they are running properly and performing as expected.

## Tool

[node-sentinel.xyz](https://www.node-sentinel.xyz/) provides a [monitoring tool](https://t.me/gbc_validators_bot) to help you keep track of your validators.  
It runs entirely through a Telegram bot and is free for everyone. You can register your validators by messaging the bot and providing your withdrawal address(es). The bot will automatically load all your validators and start delivering real-time stats and alerts.

![Node Sentinel Dashboard](/img/node/management/node-sentinel-dashboard.png)

### The dashboard keeps you updated in real time with:

- The number of validators you operate and their statuses (active, inactive, slashed, exited).  
- The total effective balance of all your validators combined.  
- Validator performance (daily, weekly, monthly) based on the last 100 attestations.  
- Rewards earned in GNO (daily, weekly, monthly).  
- The total amount of rewards available to claim.  
- Subsidized reward claims, sponsored by [node-sentinel.xyz](https://www.node-sentinel.xyz/).  
- A web dashboard with additional stats.

### You’ll receive alerts when:

- A validator changes status (e.g., from active to inactive).  
- Overall performance drops.

:::note
This bot is compatible with all consensus and execution clients.
:::
