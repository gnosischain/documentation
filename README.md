# Gnosis Chain Documentation

## Overview
This repo contains the contents for our docs deployed [here](https://docs.gnosischain.com).

The website is built using [Docusaurus 2](https://docusaurus.io/).
## Contributing

The Documentation is an ecosystem tool, we welcome everybody to collaborate and improve it! See the [contributing page](CONTRIBUTING.md) for details.

## Release process

Releases to production are managed through the creation of a tagged version.

This step-by-step guide will walk you through getting ready for the deployment.

1. Create a Pull Request to merge `dev` branch onto the `main` branch, ask code maintainers to review and approve the PR
2. Once merged, create a tagged version in the form of `vMayor.Minor.Patch`. For this you can simply use your terminal to create the tagged version
   <pre> git tag v0.17.3                // example tag </pre>
   <pre> git push origin v0.17.3       // example tag </pre>
   
3. Wait for the [CIs](https://github.com/gnosischain/documentation/blob/dev/.github/workflows/tag_release.yml) to run, the CI will craft a Github release automatically containing the release notes, check the release out in [releases](https://github.com/gnosischain/documentation/releases)
4. Go to Actions page, search for `Manual deployment to production`, [here the link](https://github.com/gnosischain/documentation/actions/workflows/prod_deploy.yml).
    - click on `Run workflow`, this will open a drop-down menu
    - Set `use workflow from main` (it doesn't perform any actions on our CIs, but Github is still asking for a proper value)
    - Provide the version to deploy in the form of `vMayor.Minor.Patch`
    - refresh the page, a new job will be marked as running, enter the job to check the logs out
5. A notification is sent on Slack to the DevOps team containing the project being deployed, the version and the name of the user who triggered the action

## Credits

Some content in this site was adapted or inherited from the work done by [Andrew](https://github.com/andogro), [Igor](https://github.com/igorbarinov) and team on the development of xDai. We thank them for the great job done!
