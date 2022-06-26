// reference: https://knexjs.org/guide/migrations.html#knexfile-js

import { Knex } from 'knex';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const port = DB_PORT ? Number(DB_PORT) : 5432;

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: DB_HOST,
    port,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  seeds: {
    directory: './seeds',
  },
  migrations: {
    directory: './migrations',
  },
};

export default config;
