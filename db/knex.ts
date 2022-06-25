import { types } from 'pg';
import knex, { Knex } from 'knex';
import config from './knexfile';

// reference: https://www.postgresql.org/docs/14/datatype-oid.html
const DATE_OID = 1082;
const NUMERIC_OID = 1700;

types.setTypeParser(DATE_OID, (value) => value);
types.setTypeParser(NUMERIC_OID, (value) => parseFloat(value));

let connection: Knex;

const getConnection = () => {
  // fall through if already connected
  if (connection) {
    return connection;
  }
  connection = knex(config);
  return connection;
};

export default getConnection;
