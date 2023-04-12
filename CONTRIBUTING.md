# Contributor's Guide

Welcome to the Gnosis Documentation site! We welcome all contributors. 
## Environments

Prod: [https://docs.gnosischain.com](https://docs.gnosischain.com)
Staging: [https://developers-portal.staging.gnosisdev.com](https://developers-portal.staging.gnosisdev.com)

A password is required for the Staging site: plase ask @alebanzas or @plato_gno for it. 

## Git Workflow

- `release` branch: the current state of [docs.gnosischain.com](https://docs.gnosischain.com)
- `main` branch: the current state of the [docs staging site](https://developers-portal.staging.gnosisdev.com/)
- Feature branches: individual contributors issue a PR to `main` branch

Currently, @alebanzas and @plato_gno have push rights to `release` branch.

## Run the project

### Prerequisites

[Node.js](https://nodejs.org/en/download/) version 16.14 or higher.  

### Installation

```
$ nvm use 
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Contents
* Docs are located in the [docs](docs) directory.
* Landing pages are located in the [src/pages](src/pages) directory.
* Images and static files are located in the [static](static) directory.
* The left side-bar of the page is controlled by [sidebars.js](sidebars.js).
* Docusaurus complete documentation can be found [here](https://docusaurus.io/docs).

## Submit an Issue

Start by [searching if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). 
If a related issue doesn't exist, you can [open a new issue](https://github.com/gnosischain/documentation/issues/new/choose) following the instructions of the template accordingly.

Issues are categorized by type:

- Feature
- Content
- Bug

## Creating Pull Requests

For help, see [GitHub Docs: Linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

- Submit a PR against the `main` branch of the `gnosischain/documentation` repo
- Follow the PR template instructions carefuly

## Create a release

Currently only @alebanzas, @plato_gno, @zengzengzenghuy has the right to create a new release.    
To create a new release 
1. Switch to **release** branch, click on text showing "N commit(s) behind of main", and click 'Create pull request'.
2. [Create a new PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), ensure that all [Actions](https://docs.github.com/en/actions) in PR are passed, then you may continue to create a new release.
3. Navigate to and click **Releases** on right sidebar (Under About section), you should be able to see releases history under https://github.com/gnosischain/documentation/releases.
4. Click ['Draft a new release'](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release)
* click 'Choose a tag' and create a new target (please refer to the naming rule for releases, i.e. v0.8.x)
* Target: main
* Release title: same as release tag, i.e. v0.8.x
* Click 'Generate release notes', this will automatically generate notes for current release.
* Tick the box showing 'Set as the latest release'
5. Click 'Publish release', and wait for all the actions passed.
6. Congrats, you just created a new release for gnosis documentation!

## Writing style

We selected a collection of best practices from the industry to make the website easy to read, global, diverse and searchable

- [General Writing Guidelines (by OpenStack)](https://docs.openstack.org/doc-contrib-guide/writing-style/general-writing-guidelines.html)
- [Bias-free communication (by Microsoft)](https://docs.microsoft.com/en-us/style-guide/bias-free-communication)
- [Global communications (by Microsoft)](https://docs.microsoft.com/en-us/style-guide/global-communications/)

## Transfering Gitbook Pages

When transfering documents from the old gitbook, consider the funcionality difference detailed below, and the following:

- Relevance and validity of the content
- ```xdaichain``` was renamed to ```gnosis```
- Open Ethereum was deprecated
- Nifty Wallet deprecation
- Internal and external links

### Static Assets

```
/static
    /files
    /img
        # By Docs folders
        /about
        /bridges
        /developers
        /node
```

#### Gitbook

```
/.gitbook/assets/
```

#### Docusaurus

```
/static/img/
```

### Alerts

#### Gitbook

```
{% hint style="info" %}
Message
{% endhint %}
```

#### Docusaurus

```
:::info
Message
:::
```
Refer to [docusaurus docs](https://docusaurus.io/docs/next/markdown-features/admonitions) for more admonition types.


### Tabs

Refer to [docusaurus docs](https://docusaurus.io/docs/next/markdown-features/tabs) for details on tabs.

## Useful Tools

- [Markdown Link Updater](https://marketplace.visualstudio.com/items?itemName=mathiassoeholm.markdown-link-updater)