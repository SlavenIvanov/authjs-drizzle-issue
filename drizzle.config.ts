import { defineConfig } from 'drizzle-kit'

const DB_URL = process.env.DATABASE_URL
if (!DB_URL) throw new Error('No DATABASE_URL provided')

export default defineConfig({
  schema: './src/lib/server/db/schema.ts',
  driver: 'pg',
  out: 'drizzle',
  dbCredentials: { connectionString: DB_URL },
  verbose: true,
  strict: true,
})
