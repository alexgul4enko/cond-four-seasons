# cond-four-seasons

![Team Badge](https://shields.us-east-1.conductor.sh/badge/conductor-Peppers-green.svg)
![Nexus Version](https://shields.us-east-1.conductor.sh/nexus/r/http/nexus-write.infra.us-east-1.conductor.sh/com.conductor/cond-four-seasons.svg)
![Build Status](https://shields.us-east-1.conductor.sh/jenkins/s/http/jenkins-release.infra.us-east-1.conductor.sh/peppers/microservices/cond-four-seasons.svg)
![Tests](https://shields.us-east-1.conductor.sh/jenkins/t/http/jenkins-release.infra.us-east-1.conductor.sh/peppers/microservices/cond-four-seasons.svg)
[![Coverage](http://sonarqube.infra.us-east-1.conductor.sh/api/project_badges/measure?project=com.conductor%3Acond-four-seasons&metric=coverage)](http://sonarqube.infra.us-east-1.conductor.sh/dashboard?id=com.conductor%3Acond-four-seasons)


## Description


To start project in the project directory, you can run:

```
npm i
npm run start
```

## Available Scripts

| Command         |                  Description                                              |
| --------------- | :-----------------------------------------------------------------------: |
| start           |  Run app                                                                  |
| start:ci        |  Run app in dev mode without fast refresh. Mostly uses for cypress tests  |
| lint            |  Lint all `js` & `ts` & `scss` files                                      |
| lint:fix        |  Fix list errors on `./src` folder                                        |
| mf-config       |  Downloads MF config file                                                 |
| ts-config       |  Recompiles TS config.                                                    |
| test            |  Watch tests changes                                                      |
| test:ci         |  Run tests once, create SonarQube reports                                 |
| cypress:open    |  Opens Cypress app for local development                                  |
| cypress:run     |  Runs Cypress tests in headless mode                                      |
| cypress:ci      |  Runs Cypress tests in CI env (not ready yet)                             |
| build           |  Runs production build                                                    |
| deploy          |  Run linter, tests and production build                                   |


## MF
To connect local MF runnig in another port add `<mf-name>=http://localhost:<port>` to `.env.local` file
```
cond-app-root=http://localhost:3001
```
## Dev server port
To setup dev server port add `DEV_SERVER_PORT` to `.env.local` file
```
DEV_SERVER_PORT=3002
```

## Code Style

The project setup with common Conductor's eslint rules.  


## Tests

`Jest` and `React-testing-library` used for testing.

## Cypress Tests
To write Cypress tests you need to start the app in dev mode

`npm run start:ci`

Then open Cypress app by

`npm run cypress:open`

Pick a test file you're working on and launch it. Now you can easily alter or add new tests.
Note that u can use `Cypress` and `Jest` tests in parallel. Both test reports will merge together to generate total coverage report.

## Git Hooks

[Husky](https://www.npmjs.com/package/husky) used to prevent bad `git commit` and `git push`.

-   Eslint validates and formats ts/js files regards the rules
-   Stylelint validates and formats css files regards the rules


## Proxy for API requests

This project provides an ability to use a proxy during development to get any API requests working without running the monolith locally.

To use it you should:

- [Launch ODSL using Spinnaker](https://spinnaker.int.infra.us-east-1.conductor.sh/#/applications/on-demand-searchlight/executions)
- Obtain a URL to launched ODSL
- Add `.env.local` file with the following contents:
    ```
    BACKEND_URL=https://<PUT_YOUR_ODSL_ENV_URL_HERE>
    ```
Please note, that proxy will only work until your ODSL env is running. After that you'll have to start new ODSL with the same "Stack Name" or update `.env.local` to point to new URL.
