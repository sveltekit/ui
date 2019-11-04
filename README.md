# sveltekit ui lib

## Dev Dependencies
- [node](https://nodejs.org/en): stable
- [yarn](https://yarnpkg.com/en/): stable

## Setup
```sh
$  yarn
```

### Dev
To work locally on the components you'll need to yarn link the project to itself
```sh
$  yarn link
$  yarn link sveltekit
$  yarn dev
```

## Tests
Single run
```sh
$  yarn test
```

Run tests in browser (make sure you also have yarn dev running in another console)
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
