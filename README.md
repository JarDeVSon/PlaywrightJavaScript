# Playwright Framework with Nodejs/JavaScript

Sample project to demonstrate Web & API tests written with [Playwright](https://playwright.dev/docs/intro) with [Node.js](https://nodejs.org/en/) running on GitHub Actions.

## Pre-requirements

To clone and run this project, you will need:

- [Git](https://git-scm.com/downloads)(I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- [Visual Studio Code](https://code.visualstudio.com/)(I've used version `Stable Build` while writing this doc)
- [Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)(Install the official extension in the Visual Studio Code)

## Installation

Install the Following Libraries using the command Line:

- `npm init playwright@latest`

Choose between TypeScript or JavaScript (default is TypeScript)
Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
Add a GitHub Actions workflow to easily run tests on CI
Install Playwright browsers (default is true)

## Running the tests

Inside that directory, you can run several commands:
```sh
  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:
    npx playwright test
```sh

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration
___

Made with ❤️ by [Jardeson Santos](https://github.com/JarDeVSon). [Meu Linkedin](https://www.linkedin.com/in/jardeson-santosqa).