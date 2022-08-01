# Contributing to Gnosis
Thank you for your interest in contributing!

## Run the project

### Prerequisites

[Node.js](https://nodejs.org/en/download/) version 14.13 or higher.  

### Installation

```
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

### Images location

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

### Files

#### Gitbook

```
{% file src="somepath/somefile.zip" %}
```

#### Docusaurus

```
{@file: /somefile.zip}
```
Place files in ```/static/files/```

### Youtube Videos

#### Gitbook

```
{% embed url="https://www.youtube.com/watch?v=yPYYKz0u9K0t=10s" %}
```

#### Docusaurus

```
{@youtube: yPYYKz0u9K0t,start=10}
```

### Tabs

Refer to [docusaurus docs](https://docusaurus.io/docs/next/markdown-features/tabs) for details on tabs.

## Useful Tools

- [Markdown Link Updater](https://marketplace.visualstudio.com/items?itemName=mathiassoeholm.markdown-link-updater)