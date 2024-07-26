// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || '176.57.150.47',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '=oVy4Q^97dO£I£r4TD75',
  database: process.env.DB_NAME || 'db_govpresente',
  port: process.env.DB_PORT || 5555,
});

export default pool;
