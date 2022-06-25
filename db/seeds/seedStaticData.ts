import { Knex } from 'knex';

const { NODE_ENV } = process.env;

export const seed = async (knex: Knex): Promise<void> => {
  if (NODE_ENV !== 'prod') {
    // TODO: Add seed logic
  }
};

export default seed;
