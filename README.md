## GoCater Boilerplate

This boilerplate is aim to help you kick start a new node project as fast as possible with GoCater standards.

*Note:* Please make sure the `package.json` contains correct information.

### How to release for inclusion in other package?
This section will show you how you can deploy a package on github and allow other application use the lib. Just follow the instruction below:

1. Run `yarn release` to validate and build the package in `/release` folder
2. Commit all files in `/release` folder
3. Make sure `{ "main": "index.js" }` in `package.json` is point to the correct entry point of your lib
4. Run `yarn version` to bump to the next version
5. Run `git push --follow-tag` to push all changes
6. On package that use your lib as a dependency, run the follow command:
  1. `yarn add ssh://git@github.com:GoCater/you-package-name.git#v0.0.0`



