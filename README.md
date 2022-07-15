# Gnosis Chain Developers Portal

## Overview
This repo contains the contents for our docs deployed [here](https://developers.gnosischain.com).

The website is built using [Docusaurus 2](https://docusaurus.io/).


## Contributing

The Developers Portal is an ecosystem tool, we welcome everybody to collaborate and improve it! See the [contributing page](CONTRIBUTING.md) for details.

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
* The left side-bar of the page is controlled by [sidebars.js](sidebars.js).
* Docusaurus complete documentation can be found [here](https://docusaurus.io/docs).