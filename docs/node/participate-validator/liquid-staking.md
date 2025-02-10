---

---

# Liquid Staking

Liquid staking allows anyone to stake on Gnosis Chain without running the infrastructure themselves. It also gives stakers an opportunity to use their tokenized staked resources (osGNO) for liquidity, yield farming or lending while still helping to secure Gnosis Chain.

StakeWise - a long-standing partner of the Gnosis ecosystem - is the primary provider of liquid-staking for GNO, through their osGNO token. Following the [launch of StakeWise V3](https://stakewise.medium.com/announcing-the-launch-of-stakewise-v3-on-gnosis-chain-0231285bd8e3) in July 2024, GNO holders can stake with any of a variety of providers through StakeWise to mint osGNO. 

This page explains how liquid staking with StakeWise works.

![](/img/node/stakewise-1.png)

## osGNO

StakeWise V3 provides users with a marketplace of staking providers, each competing to offer the highest yields, the lowest fees and the most consistent performance. By distributing demand for staking among a selection of providers, StakeWise helps to decentralise the network's validator set and increase the quantity of assets securing the network. However, in unifying arrangements with each of these providers around a single liquid-staking token — osGNO — it also provides a consistent and reliable experience for users, regardless of their chosen provider.

*"osGNO"* stands for overcollateralized staked token. *"Overcollateralized"* refers to the limits on osGNO issuance, where only 90% of the stake (i.e. GNO tokens) provided can be made liquid through osGNO. However, 100% of the provided stake serves as backing for the liquid-staking token, leaving a substantial buffer in the event that stake is slashed for any reason.

![](/img/node/stakewise-2.png)

osGNO ([0xF490c80aAE5f2616d3e3BDa2483E30C4CB21d1A0](https://gnosisscan.io/token/0xf490c80aae5f2616d3e3bda2483e30c4cb21d1a0)) is a non-rebasing token, meaning that the balance of tokens held by the user is naturally static, but the value of each token rises continually as the underlying amount of GNO per token increases due to staking rewards. This enables seamless integration of osGNO into other DeFi applications like decentralised exchanges and lending protocols. This also means that osGNO is not issued 1:1 with GNO tokens, and you will receive less osGNO tokens than the underlying amount of GNO tokens backing them.

StakeWise processes two fees as part of its V3 implementation on Gnosis Chain:

* A flat fee of 5% of all staking rewards associated with your osGNO tokens is sent to StakeWise DAO. This fee is omitted for users who stake with StakeWise but do not mint osGNO; and

* A *"Vault Fee"* is set by the provider and charged on all rewards earned by the GNO you stake with them. For StakeWise's own Genesis Vault, this fee is set at 15% of all rewards earned.

## StakeWise Tutorial

To access StakeWise V3 on Gnosis Chain and mint osGNO, simply:

1) Head to [https://app.stakewise.io](https://app.stakewise.io), connect your wallet, and switch to Gnosis Chain.

![](/img/node/stakewise-3.png)

2) On the Stake interface, you can select the amount of GNO you wish to stake, approve it for staking and then stake immediately into osGNO with the provider(s) allocated by the app.

![](/img/node/stakewise-4.png)

3) Alternatively, head to the Vaults interface to select the provider you wish to stake with. Once you've selected a provider and moved to their page, select *"Stake"*, enter the amount of GNO, approve it and then stake it.

![](/img/node/stakewise-5.png)

4) Where you've staked with a specific vault, the relevant vault page will then show the amount staked with an option to *"Unstake"*. Below, it will also show the amount of osGNO minted for your stake, as well as options to *"Mint"* and *"Burn"* osGNO as appropriate.

![](/img/node/stakewise-6.png)

There you have it! You can now use your osGNO tokens freely, safe in the knowledge that your deposited GNO is earning staking rewards with StakeWise V3.

![](/img/node/stakewise-7.png)

## V2 Migration

:::note
StakeWise V2 has been deprecated, so will no longer be maintained. Please migrate to StakeWise V3 to continue earning staking rewards and supporting the network.
:::

Prior to the [V3 launch](https://stakewise.medium.com/announcing-the-launch-of-stakewise-v3-on-gnosis-chain-0231285bd8e3), StakeWise operated its V2 staking protocol for GNO on Gnosis Chain. Though support for V2 has been deprecated, liquidity for some V2 assets remain on the chain.

StakeWise V2 consisted of 2 core assets:

* sGNO ([0xa4ef9da5ba71cc0d2e5e877a910a37ec43420445 ](https://gnosisscan.io/address/0xa4ef9da5ba71cc0d2e5e877a910a37ec43420445)) represents the initial stake of GNO deposited into StakeWise. This figure is static, but is used as the basis to calculate rewards owing to the user; and

* rGNO ([0x6ac78efae880282396a335ca2f79863a1e6831d4 ](https://gnosisscan.io/address/0x6ac78efae880282396a335ca2f79863a1e6831d4)) represents the earned staking rewards and are updated on a periodic basis, based on the amount of sGNO held. The V2 contracts frequently check and update the rGNO balance of all sGNO holders, to reflect both rewards earned and deductions from any slashing.

In V2, StakeWise charged a 10% commission for operating the network on all staking rewards before distributing them as rGNO. At all times, the total amount of tokens that had been issued to users in StakeWise V2 was equal to: *sGNO + rGNO = GNO deposits + (GNO rewards * (100% — 10%))*.

![](/img/node/stakewise-8.png)

If you hold or purchase any remaining sGNO or rGNO, StakeWise has provided a migration interface to move the underlying GNO tokens into V3. Follow this [tutorial](https://docs.stakewise.io/guides/stakewise-v2/migrate-to-stakewise-v3-on-gnosis-chain) to migrate, and check the Genesis Vault in V3 to find your migrated GNO.

## Learn More

You can find out more about StakeWise V3, the Gnosis deployment and osGNO with the following resources:

* Read the StakeWise V3 [Documentation](https://docs.stakewise.io/);

* Read StakeWise's [launch blog post](https://stakewise.medium.com/stakewise-v3-on-gnosis-chain-what-to-expect-how-to-migrate-1149a5367c76) on what to expect with osGNO;

* Watch the Gnosis [Community Call](https://www.youtube.com/watch?v=fVVWtY_YBFo) with StakeWise from July 2024; and

* Reach out to the community through the [StakeWise Discord Server](https://discord.gg/StakeWise).

If you're interested in operating a vault in StakeWise V3, check out the recording of the [Vault Operator Workshop](https://www.youtube.com/watch?v=kX11K4ymn1Q).