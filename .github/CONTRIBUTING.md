<div align="center">
  <img src="https://killedbyriotgames.com/tombstone.png" alt="tombstone" style="height: 80px; width: 80px; padding: 0 20px;">
  <h1>Killed by Riot Games</h1>
  <p>A tribute and log of beloved products and services killed by Riot Games.</p>
</div>

## Contributing Guide

## NextJS
Killed by Google now runs on [NextJS](https://nextjs.org/). Next is a flexible framework that will allow for expansion of the Killed by Google content.

### Pull Request

If you are contributing any code outside of `graveyard.json`, please ensure that your Pull Request will pass continuous integration. Run `yarn test` before opening your pull request which will check the React/Jest tests as well as verify that `graveyard.json` is formatted correctly _and_ well-formed. These tests are extremely important to quickly merging pull requests for this project.

#### Continuous Integration (CI)
Killed by Riot Games uses [GitHub Actions](https://github.com/features/actions) for continuous integration testing. Every pull request and push must pass all checks before it can be merged into the `main` branch.
