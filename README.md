# Not in active dev anymore - plenty of other UI libs out there...

# Sveltekit - Powerful, reliable & fully featured Svelte UI library

## Getting started
```sh
$  npm install @sveltekit/ui
```

**Note:** Install as a dev dependency `npm i @sveltekit/ui -D` if using [Sapper](https://sapper.svelte.dev/) to avoid SSR errors.

## Dev

## Dependencies
- [node](https://nodejs.org/en): stable
- [yarn](https://yarnpkg.com/en/): stable

## Setup
```sh
$  yarn
```

To work locally on the components you'll need to yarn link the project to itself
```sh
$  yarn link
$  yarn link @sveltekit/ui
$  yarn dev
```

## Tests
Run tests (make sure you also have yarn dev running in another console)
```sh
$  yarn test:browser
```

## Releases

Once all changes/PRs required for release have been merge to develop then create a PR for develop to be merged into master.

Complete the PR, which will merge all develop changes into master.

Checkout master and pull down from origin to retrieve latest changes.

Update CHANGELOG and commit change (don't push).

Run `npm version <update_type>` [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)
Then `npm publish`

Finally, checkout develop and merge in changes from master ie. `git merge master`
