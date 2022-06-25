# OMSHub Core API

## Description

Backend services for OMSHub project.

## Development

### Dependencies

Required dependencies are as follows:

- [Node.js](https://nodejs.org) runtime (v.14+)
- [Yarn](https://yarnpkg.com) package manager
- [Knex.js](https://knexjs.org)

### Installation

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
