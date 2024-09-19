import { query } from './index.js'

await query(`
  CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL,
    text VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT now()
  );
`)
