import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: 'soss',
    host: '192.168.1.51',
    password: 'k18273645',
    port: 5432,
    database: 'portfolio_db'
});

export default pool;