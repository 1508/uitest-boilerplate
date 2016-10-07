# UI Test boilerplate

Boilerplate setup using CodeceptJS/NightmareJS to run automated acceptance/UI tests

Can be used to test core pages after a commit, and see if they respond as they should.

## How to run

To setup a solution with the boilerplate, create a new folder in the solution somewhere. We recomend to put it alongside the regular web project in the solution.

For instance in a project with folders like:

 - CustomerName.Web
 - CustomerName.Logic

You would create a folder called "Customer.UITest".

Inside this folder, do a `npm install` to install all dependencies.

The tests are then run as a npm run script. To do so, run `npm test`

To easier run the tests locally, for instance if you want to only run a single or group of tests for debuggin/settup up. Its recomended to install codeceptjs locally.

To do so, run a `npm install -g codeceptjs`

You can now do `codeceptjs run -- grep "Core"` to run all Features or Scenarios that contain Core in their name.

See more config options http://codecept.io/commands/

# How do I see what the test actually does?

Normally the tests are run against a headless browser, but you can turn on a visual browser by editing the codeceptjs.json file.

`"Nightmare": {
      "url": "http://<sitename>.1508test.dk/",
      "show": false
    },
`
Change the show property to `true` to see the Electron browser window when running the tests.
