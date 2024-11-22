// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || '177.66.14.144',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'Getag@2024!',
  database: process.env.DB_NAME || 'db_govpresente',
  port: process.env.DB_PORT || 5432,
});

export default pool;
