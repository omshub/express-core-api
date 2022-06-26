# OMSHub Core API

## Description

Backend services for OMSHub project.

## Development

### Dependencies

Required dependencies are as follows:

- [Node.js](https://nodejs.org) runtime (v.14+)
- [Yarn](https://yarnpkg.com) package manager
- [Knex.js](https://knexjs.org)

### Setup and Installation

Before proceeding, ensure that you have locally set environment variables in the the (`.gitignore`d) file `/.env`. See `/.env.example` for details.

To install dependencies, run the following command from the terminal:

```bash
$ yarn install
```

### Development Scripts

**_N.B._** See `package.json` (property `"scripts": { ... }`) for full details.

#### Running the app

```bash
# development
$ yarn start:dev

# production
$ yarn start:prod
```

#### Running tests

```bash
# run tests
$ yarn test

# watch mode
$ yarn test:watch

# coverage
$ yarn test:cov
```

#### Database management

**_N.B._** See `/db/knexfile.ts` for configuration details.

```bash
# seed the database (dev environment only)
$ yarn seed:run

# create a new migration
$ yarn mig:make <new-migration-filename>

# migrate up from current
$ yarn mig:up <current-migration-filename>

# migrate down from current
$ yarn mig:down <current-migration-filename>

# migrate up to latest
$ yarn mig:latest

# rollback last batch of migrations
$ yarn mig:rollback

# rollback to base migration
$ yarn mig:rollbackAll
```

### (Optional) Local Development Using Docker + VS Code

**IMPORTANT**: As before, ensure that you have locally set environment variables in the the (`.gitignore`d) file `/.env`. See `/.env.example` and `/.devcontainer/docker-compose.yml` (under property `environment` of service `db`) for details.

#### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - Windows additionally requires [WSL](https://aka.ms/wsl) (Windows Subsystem for Linux). This should be prompted during installation of Docker Desktop.
- [VS Code](https://code.visualstudio.com/)

#### Launching the Server App

Pull down this repository (e.g., `git clone`, or equivalent) and create/populate file `.env` in the top-level directory accordingly (i.e., `/.env`, with environment variables populated as described in `/.env.example`). In particular, set the environment variable `NODE_ENV=dev` for purposes of local development.

VS Code will automatically detect the folder `/.devcontainer` and prompt to "Reopen in Container" via popup in the bottom right of the screen; click accordingly to reopen in a container.

Once the container builds, it will have installed the dependencies in `/node_modules`, as well as seed the data in the postgres database container that was built by Docker. You can access the seeded data using a postgres client (e.g., pgadmin, pgweb, Postico, etc.). For more information on the seed data, see `/db/data` (the seed script is located in `/db/seeds/seedStaticData.ts`, which is automatically run on Docker container build via command `yarn seed:run`; see `package.json` for more details).

Finally, to start the server app, inside of the container, open a terminal and issue the following command to start the server:

```bash
$ yarn start:dev
```

**_N.B._** This command is configured to hot reload, i.e., server restarts automatically when it detects changes in the source code (i.e., `/src`).

### Commit messages

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

`<type>` must be one of the following:

|   type   |                                                 description                                                 |
| :------: | :---------------------------------------------------------------------------------------------------------: |
|  build   |     Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)     |
|  chore   |                   Changes that do not affect production; e.x., updating grunt tasks, etc.                   |
|    ci    | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
|   docs   |                                         Documentation only changes                                          |
|   feat   |                                                A new feature                                                |
|   fix    |                                                  A bug fix                                                  |
|   perf   |                                   A code change that improves performance                                   |
| refactor |                          A code change that neither fixes a bug nor adds a feature                          |
|  revert  |                                   A commit that reverts a previous commit                                   |
|  style   |   Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)    |
|   test   |                              Adding missing tests or correcting existing tests                              |

See the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/#examples) for examples of valid commit messages.
