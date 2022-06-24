import dotenv from 'dotenv-safe';
import express from 'express';
import log from '@src/utils/logger';

dotenv.config();

const { APP_PORT, APP_HOST } = process.env;
const port = APP_PORT ? Number(APP_PORT) : 1927;
const host = APP_HOST || 'localhost';

const app = express();

app.use(express.json());

app.listen(port, host, () => {
  log.info(`Server listening at ${host}:${port}`);
});
