import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { createPool } from 'mysql2/promise';

if (!process.env.DB_USER) {
    throw new Error('❌ ❌ ❌ Whoops! DB_USER is not defined! ❌ ❌ ❌');
}

if (!process.env.DB_DATABASE) {
    throw new Error('❌ ❌ ❌ Whoops! DB_DATABASE is not defined! ❌ ❌ ❌');
}

console.log(`⭐ ⭐ ⭐ Connecting to ${process.env.DB_DATABASE} database...`);

// create the connection pool
const poolConnection = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});

const db = drizzle(poolConnection);

console.log(`✅ ✅ ✅ Connected to ${process.env.DB_DATABASE} database!`);


console.log(`💽 💽 💽 Runnung migration on ${process.env.DB_DATABASE} database...`);

migrate(db, {
    migrationsFolder: "./src/db/migrations",
});

console.log(`✅ ✅ ✅ Migration complete on ${process.env.DB_DATABASE} database.`);

export { db };
