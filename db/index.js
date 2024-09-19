import pg from 'pg'
const { Pool } = pg

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const query = (queryText, params, callback) => pool.query(queryText, params, callback)
