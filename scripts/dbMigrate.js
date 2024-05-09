import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

console.log('🤞 Performing DB Migration...');

const DB_URL = process.env.DATABASE_URL;

if (!DB_URL) throw new Error('No DATABASE_URL provided');

const migrationClient = postgres(DB_URL, { max: 1 });

await migrate(drizzle(migrationClient), { migrationsFolder: 'drizzle' });

await migrationClient.end();

console.log('🎉 DB Migration completed!');
